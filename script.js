(function () {
      'use strict';

      // 3D Card Deck Data (Personalized to Piyush Yadav's Real Work & Resume)
      const CARDS_DATA = [
        {
          id: "card-1",
          tag: "Commercial Ad",
          company: "d-vivid.consultant",
          title: "AI Engineer & Global Education Ads",
          desc: "Dynamic retention-focused editing with kinetic typography, sound effects & pacing.",
          videoSrc: "assets/videos/trial_294-Hindi-AI_Engineer_or_Data_Scientist__1_.mp4",
          fallbackSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          cardClass: "card-anisotropic-metal",
          hasGlint: true,
          bgTitle: "PIYUSH YADAV"
        },
        {
          id: "card-2",
          tag: "Lead Video Editor",
          company: "piyushyadav.studio",
          title: "High-Conversion Commercial & Study Ads",
          desc: "Produced for D Vivid Consultant. Kinetic typography, international study campaigns & dynamic sound design.",
          videoSrc: "assets/videos/295-Hindi-Germany.mp4",
          fallbackSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4",
          cardClass: "card-focus-violet",
          hasGlint: false,
          bgTitle: "VIDEO EDITOR"
        },
        {
          id: "card-3",
          tag: "3D Motion & VFX",
          company: "motion.compositing",
          title: "3D Camera Tracking & Motion Graphics",
          desc: "Complex 3D camera tracking, volumetric lighting, and particle dynamics composited for high-impact reels.",
          videoSrc: "assets/videos/3d_project.mp4",
          fallbackSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
          cardClass: "card-emerald-metal",
          hasGlint: false,
          bgTitle: "3D MOTION"
        },
        {
          id: "card-4",
          tag: "Master Showreel",
          company: "piyush.showreel",
          title: "Director's Cut // 2026 Showreel",
          desc: "Pacing masterclass, rhythmic match-cutting, and DaVinci Resolve color grading.",
          videoSrc: "assets/videos/Timeline_1.mp4",
          fallbackSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
          cardClass: "card-dark-obsidian",
          hasGlint: false,
          bgTitle: "SHOWREEL"
        },
        {
          id: "card-5",
          tag: "Documentary",
          company: "g7edu.global",
          title: "Human Stories & Student Journeys",
          desc: "Slow-burn emotional pacing with organic natural lighting color grades for G7Edu Global campaigns.",
          videoSrc: "assets/videos/Documentry_work.mp4",
          fallbackSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          cardClass: "card-dark-obsidian",
          hasGlint: false,
          bgTitle: "DOCUMENTARY"
        }
      ];

      let activeIndex = 1; // Center card (Violet) initially focused
      const totalCards = CARDS_DATA.length;
      const track = document.getElementById('carouselTrack');
      const viewport = document.getElementById('carouselViewport');
      const giantBgText = document.getElementById('giantBgText');

      // Web Audio Synthesizer (Instant 100% offline click & slide sound effects)
      let audioCtx = null;
      let soundEnabled = true;

      function getAudioContext() {
        if (!audioCtx) {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (AudioContext) audioCtx = new AudioContext();
        }
        if (audioCtx && audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
        return audioCtx;
      }

      function playTickSound(freq = 1200) {
        if (!soundEnabled) return;
        const ctx = getAudioContext();
        if (!ctx) return;
        try {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);
          gain.gain.setValueAtTime(0.04, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.05);
        } catch(e) {}
      }

      // Sound toggle button
      const soundBtn = document.getElementById('soundToggleBtn');
      if (soundBtn) {
        soundBtn.addEventListener('click', () => {
          soundEnabled = !soundEnabled;
          soundBtn.style.color = soundEnabled ? 'var(--accent-cyan)' : '#64748b';
          playTickSound(soundEnabled ? 1400 : 600);
        });
      }

      // Update 3D card positions based on activeIndex
      function update3DPositions() {
        const cardElements = document.querySelectorAll('.card-3d-item');
        cardElements.forEach((el, idx) => {
          let diff = (idx - activeIndex) % totalCards;
          if (diff < -Math.floor(totalCards / 2)) diff += totalCards;
          if (diff > Math.floor(totalCards / 2)) diff -= totalCards;

          el.classList.remove('pos-center', 'pos-left', 'pos-right', 'pos-far-left', 'pos-far-right', 'pos-hidden');
          const video = el.querySelector('video');

          if (diff === 0) {
            el.classList.add('pos-center');
            if (video) {
              video.muted = true; // Crucial for Vercel & Chrome/Safari autoplay policy
              const playPromise = video.play();
              if (playPromise !== undefined) {
                playPromise.catch(() => {
                  // If Vercel or QuickTime codec fails, instantly heal with CDN streaming source
                  const item = CARDS_DATA[idx];
                  if (item && video.src !== item.fallbackSrc) {
                    video.src = item.fallbackSrc;
                    video.muted = true;
                    video.load();
                    video.play().catch(() => {});
                  }
                });
              }
            }
          } else if (diff === -1) {
            el.classList.add('pos-left');
            if (video) video.pause();
          } else if (diff === 1) {
            el.classList.add('pos-right');
            if (video) video.pause();
          } else if (diff === -2) {
            el.classList.add('pos-far-left');
            if (video) video.pause();
          } else if (diff === 2) {
            el.classList.add('pos-far-right');
            if (video) video.pause();
          } else {
            el.classList.add('pos-hidden');
            if (video) video.pause();
          }
        });

        // Update giant background typography text with Piyush's craft title
        if (giantBgText) {
          const focusedItem = CARDS_DATA[activeIndex];
          if (focusedItem && focusedItem.bgTitle) {
            giantBgText.textContent = focusedItem.bgTitle;
          }
        }
      }

      function setCardIndex(newIdx) {
        activeIndex = (newIdx + totalCards) % totalCards;
        playTickSound(900);
        update3DPositions();
      }

      // Arrow Buttons
      const prevBtn = document.getElementById('prevCardBtn');
      const nextBtn = document.getElementById('nextCardBtn');
      if (prevBtn) prevBtn.addEventListener('click', () => setCardIndex(activeIndex - 1));
      if (nextBtn) nextBtn.addEventListener('click', () => setCardIndex(activeIndex + 1));

      // Keyboard navigation
      window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') setCardIndex(activeIndex - 1);
        if (e.key === 'ArrowRight') setCardIndex(activeIndex + 1);
      });

      // Card click handling
      const cardElements = document.querySelectorAll('.card-3d-item');
      cardElements.forEach((card, idx) => {
        card.addEventListener('click', () => {
          if (idx === activeIndex) {
            openCinemaModal(CARDS_DATA[idx]);
          } else {
            setCardIndex(idx);
          }
        });
      });

      // =============================================================================
      // MOUSE PARALLAX & 3D GYROSCOPE TILT PHYSICS
      // =============================================================================
      const heroStage = document.getElementById('hero');
      let targetRotX = 0;
      let targetRotY = 0;
      let currentRotX = 0;
      let currentRotY = 0;

      if (heroStage && viewport) {
        heroStage.addEventListener('mousemove', (e) => {
          const rect = heroStage.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
          const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

          targetRotY = x * 14;  // Tilt Y up to 14 deg
          targetRotX = -y * 10; // Tilt X up to 10 deg

          // Update specular glare on cards
          cardElements.forEach(card => {
            const cardRect = card.getBoundingClientRect();
            const mouseCardX = ((e.clientX - cardRect.left) / cardRect.width) * 100;
            const mouseCardY = ((e.clientY - cardRect.top) / cardRect.height) * 100;
            card.style.setProperty('--mouse-card-x', `${mouseCardX}%`);
            card.style.setProperty('--mouse-card-y', `${mouseCardY}%`);
          });

          // Subtle parallax on giant background text
          if (giantBgText) {
            giantBgText.style.transform = `translate(calc(-50% + ${x * 40}px), calc(-50% + ${y * 25}px))`;
          }
        });

        heroStage.addEventListener('mouseleave', () => {
          targetRotX = 0;
          targetRotY = 0;
          if (giantBgText) {
            giantBgText.style.transform = `translate(-50%, -50%)`;
          }
        });

        // Smooth physics loop (lerp)
        function renderPhysics() {
          currentRotX += (targetRotX - currentRotX) * 0.08;
          currentRotY += (targetRotY - currentRotY) * 0.08;
          if (track) {
            track.style.transform = `rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg)`;
          }
          requestAnimationFrame(renderPhysics);
        }
        renderPhysics();
      }

      // =============================================================================
      // MOUSE & TOUCH DRAGGING ON 3D CAROUSEL
      // =============================================================================
      let isDragging = false;
      let startX = 0;
      let dragDelta = 0;

      if (viewport) {
        viewport.addEventListener('mousedown', (e) => {
          isDragging = true;
          startX = e.clientX;
          dragDelta = 0;
        });

        window.addEventListener('mousemove', (e) => {
          if (!isDragging) return;
          dragDelta = e.clientX - startX;
        });

        window.addEventListener('mouseup', () => {
          if (!isDragging) return;
          isDragging = false;
          if (dragDelta < -60) {
            setCardIndex(activeIndex + 1);
          } else if (dragDelta > 60) {
            setCardIndex(activeIndex - 1);
          }
        });

        // Touch support for mobile/tablets
        viewport.addEventListener('touchstart', (e) => {
          startX = e.touches[0].clientX;
          dragDelta = 0;
        }, { passive: true });

        viewport.addEventListener('touchmove', (e) => {
          dragDelta = e.touches[0].clientX - startX;
        }, { passive: true });

        viewport.addEventListener('touchend', () => {
          if (dragDelta < -50) {
            setCardIndex(activeIndex + 1);
          } else if (dragDelta > 50) {
            setCardIndex(activeIndex - 1);
          }
        });
      }

      // =============================================================================
      // BOTTOM SPECIALTY FILTER TOGGLE PILLS
      // =============================================================================
      const btnReels = document.getElementById('btnFilterReels');
      const btnClient = document.getElementById('btnFilterClient');
      if (btnReels && btnClient) {
        btnReels.addEventListener('click', () => {
          btnReels.classList.add('active');
          btnClient.classList.remove('active');
          setCardIndex(1); // Commercial Video Editing focus
        });
        btnClient.addEventListener('click', () => {
          btnClient.classList.add('active');
          btnReels.classList.remove('active');
          setCardIndex(2); // 3D Motion & Dubbing focus
        });
      }

      // =============================================================================
      // CUSTOM SPATIAL CURSOR
      // =============================================================================
      const dot = document.getElementById('cursorDot');
      const ring = document.getElementById('cursorRing');
      let mouseX = 0, mouseY = 0;
      let ringX = 0, ringY = 0;

      if (dot && ring) {
        window.addEventListener('mousemove', (e) => {
          mouseX = e.clientX;
          mouseY = e.clientY;
          dot.style.left = `${mouseX}px`;
          dot.style.top = `${mouseY}px`;
        });

        function animateCursor() {
          ringX += (mouseX - ringX) * 0.15;
          ringY += (mouseY - ringY) * 0.15;
          ring.style.left = `${ringX}px`;
          ring.style.top = `${ringY}px`;
          requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover expand on interactive elements
        const hoverTargets = document.querySelectorAll('a, button, .card-3d-item');
        hoverTargets.forEach(el => {
          el.addEventListener('mouseenter', () => {
            ring.style.width = '60px';
            ring.style.height = '60px';
            ring.style.borderColor = 'rgba(6, 182, 212, 0.6)';
          });
          el.addEventListener('mouseleave', () => {
            ring.style.width = '36px';
            ring.style.height = '36px';
            ring.style.borderColor = 'rgba(15, 23, 42, 0.35)';
          });
        });
      }

      // =============================================================================
      // INTERACTIVE VOICE WAVEFORM AUDIO EQUALIZER
      // =============================================================================
      const voiceBtn = document.getElementById('voicePlayBtn');
      const vBars = document.querySelectorAll('.v-bar');
      let voiceTimer = null;

      if (voiceBtn) {
        voiceBtn.addEventListener('click', () => {
          getAudioContext();
          if (!voiceTimer) {
            voiceBtn.style.background = '#10b981';
            playTickSound(1600);
            voiceTimer = setInterval(() => {
              vBars.forEach(b => {
                const h = Math.floor(Math.random() * 32) + 6;
                b.style.height = `${h}px`;
              });
            }, 80);
          } else {
            clearInterval(voiceTimer);
            voiceTimer = null;
            voiceBtn.style.background = 'var(--accent-purple)';
            vBars.forEach(b => b.style.height = '12px');
            playTickSound(500);
          }
        });
      }

      // =============================================================================
      // CINEMA VIDEO MODAL LIGHTBOX
      // =============================================================================
      const modal = document.getElementById('cinemaModal');
      const modalVideo = document.getElementById('modalVideoPlayer');
      const modalClose = document.getElementById('modalCloseBtn');
      const modalTag = document.getElementById('modalTag');
      const modalTitle = document.getElementById('modalTitle');
      const modalDesc = document.getElementById('modalDesc');

      function openCinemaModal(item) {
        if (!modal || !modalVideo) return;
        
        modalVideo.innerHTML = '';
        
        let healed = false;
        function healModalVideo() {
          if (healed) return;
          healed = true;
          modalVideo.src = item.fallbackSrc;
          modalVideo.load();
          modalVideo.play().catch(() => {});
        }

        modalVideo.onerror = healModalVideo;

        // Fallback timer: If Vercel returns 404, LFS pointer or codec stall
        const fallbackTimer = setTimeout(() => {
          if (!healed && (modalVideo.error || modalVideo.networkState === 3 || modalVideo.readyState === 0)) {
            healModalVideo();
          }
        }, 1500);

        modalVideo.onloadeddata = () => {
          clearTimeout(fallbackTimer);
        };

        const mp4Src = document.createElement('source');
        mp4Src.src = item.videoSrc;
        mp4Src.type = 'video/mp4';

        const movSrc = document.createElement('source');
        movSrc.src = item.videoSrc.replace('.mp4', '.mov');
        movSrc.type = 'video/quicktime';

        const cdnSrc = document.createElement('source');
        cdnSrc.src = item.fallbackSrc;
        cdnSrc.type = 'video/mp4';

        modalVideo.appendChild(mp4Src);
        modalVideo.appendChild(movSrc);
        modalVideo.appendChild(cdnSrc);

        modalVideo.load();
        modalVideo.play().catch(() => {
          healModalVideo();
        });

        if (modalTag) modalTag.textContent = item.tag;
        if (modalTitle) modalTitle.textContent = item.title;
        if (modalDesc) modalDesc.textContent = item.desc;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }

      window.openCinemaModalBySrc = function(src, tag, title, desc) {
        openCinemaModal({
          videoSrc: src,
          fallbackSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4",
          tag: tag || "Client Project",
          title: title || "Video Showcase",
          desc: desc || "High-retention commercial video edited by Piyush Yadav."
        });
      };

      function closeCinemaModal() {
        if (!modal || !modalVideo) return;
        modal.classList.remove('active');
        document.body.style.overflow = '';
        modalVideo.pause();
      }

      if (modalClose) modalClose.addEventListener('click', closeCinemaModal);
      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) closeCinemaModal();
        });
      }
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeCinemaModal();
      });

      // =============================================================================
      // ACTIVE VIDEO AUTO-HEALER FOR VERCEL & QUICKTIME DECODING
      // =============================================================================
      function initBackgroundVideoHealers() {
        const cardElements = document.querySelectorAll('.card-3d-item');
        cardElements.forEach((card, idx) => {
          const video = card.querySelector('video');
          const item = CARDS_DATA[idx];
          if (!video || !item) return;

          let healed = false;
          function healVideo() {
            if (healed) return;
            healed = true;
            video.src = item.fallbackSrc;
            video.muted = true;
            video.load();
            if (idx === activeIndex) {
              video.play().catch(() => {});
            }
          }

          video.addEventListener('error', healVideo);
          const sources = video.querySelectorAll('source');
          sources.forEach(s => s.addEventListener('error', healVideo));

          setTimeout(() => {
            if (!healed && (video.error || video.networkState === 3 || (idx === activeIndex && video.readyState === 0))) {
              healVideo();
            }
          }, 1500);
        });

        // Attach auto-healers to all video vault players
        const vaultVideos = document.querySelectorAll('.video-frame-container video');
        vaultVideos.forEach(v => {
          v.addEventListener('error', () => {
            const fallback = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4";
            if (v.src !== fallback) {
              v.src = fallback;
              v.load();
            }
          });
        });
      }

      // Initial card position setup & video healer activation
      update3DPositions();
      initBackgroundVideoHealers();

    })();