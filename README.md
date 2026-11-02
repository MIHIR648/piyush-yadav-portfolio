# PIYUSH YADAV // 2026 LEAD VIDEO EDITOR & COLORIST PORTFOLIO

> **Ultra-Futuristic, High-Retention Cinematic Portfolio for Video Editors, Colorists & Post-Production Directors.**

---

## ⚡ Quick Start (Open Instantly)

1. **Option A (Instant Direct Open):**
   Simply double-click `index.html` to open it in Google Chrome, Microsoft Edge, Brave, or Safari.

2. **Option B (Local Web Server):**
   Run inside this directory:
   ```bash
   python -m http.server 8080
   ```
   Then open `http://localhost:8080` in your browser.

---

## 🎬 How to Connect & Provide Piyush's Work Videos

You can import and display Piyush's real video edits in **3 seamless ways**:

### Method 1: Instant In-Browser Folder Picker (Zero Setup)
1. Open `index.html` in your browser.
2. Click the pulsing **`⚡ SYNC VIDEOS`** button in the top navigation bar.
3. Click **`📂 SELECT LOCAL VIDEO FOLDER`** and select the folder on your computer where Piyush's videos are stored.
4. The portfolio will automatically load, index, and display all his video files right inside the browser instantly!

### Method 2: Automated Python Sync Script
Run the automated video sync script with your video folder path:
```bash
python sync_videos.py "C:\Path\To\Piyush\Videos"
```
*What this script does:*
- Scans the directory for all `.mp4`, `.mov`, `.webm`, `.mkv`, `.m4v` video files.
- Automatically copies or links them into `assets/videos/`.
- Cleans up filenames into professional project titles (e.g., `nike_commercial_4k.mp4` -> `NIKE COMMERCIAL`).
- Auto-detects aspect ratio (16:9, 9:16 vertical reels, 2.39:1 anamorphic).
- Automatically updates `assets/user-videos.js`. Refresh your browser and your real work is live!

### Method 3: Windows PowerShell Sync Script
If you prefer Windows PowerShell:
```powershell
.\sync-videos.ps1 -FolderPath "C:\Path\To\Piyush\Videos"
```

---

## 🌟 2026 Future-Ready Features

1. **Cinematic NLE Cyber-HUD:**
   - 60 FPS live frame-accurate timecode clock (`HH:MM:SS:FF`).
   - Blinking `REC` indicator, resolution badge (`8K DCI RAW • 12-Bit 4:4:4`), and dynamic audio VU meter bars.
   - Synthesized Web Audio API sound effects (sub-bass drops, tape rewinds, camera shutter clicks with zero external audio files).
   - Toggleable authentic 35mm film grain overlay.

2. **Master Showreel Stage (16:9 Cinema Monitor):**
   - Full custom player with hover scrubbing, chapter jumps, mute, and fullscreen.
   - Quick jump markers: Commercials, Music Videos, VFX, Color Grading, 9:16 Reels.

3. **Interactive NLE Multi-Track Timeline (Premiere & DaVinci Resolve Experience):**
   - Visual magnetic tracks (`V3: VFX/Holo Titles`, `V2: B-Roll Cutaways`, `V1: Master A-Roll`, `A1: Dialogue (iZotope)`, `A2: Sound FX & Sub-Bass`).
   - Drag or click anywhere on the tracks or clips to scrub the master video in real-time.

4. **Interactive Color Grading Science Lab (Before/After Split Slider):**
   - Split-screen comparison between flat camera sensor feed (S-Log3 / Arri LogC) and finished graded footage.
   - Switchable LUT profiles: Kodak Vision3 500T, Cyberpunk Neo-Tokyo, Commercial Clean, Bleach Bypass Noir.

5. **The Cutting Room (Project Vault):**
   - Categorized filters: All Edits, Commercials & Ads, Music Videos, 9:16 Shorts & Reels, VFX & 3D.
   - Hover-to-play video preview loops on every project card.
   - Aspect ratio tags, duration badges, and post-production software badges (DaVinci Resolve, Premiere Pro, After Effects, Topaz AI, Blender).

6. **Full Cinema Theater Modal:**
   - Fullscreen 4K player with keyboard shortcuts:
     - `Space` = Play / Pause
     - `J` = Scrub backward 5 seconds
     - `L` = Scrub forward 5 seconds
     - `K` = Pause
     - `M` = Mute / Unmute
     - `F` = Fullscreen
     - `Esc` = Close Modal
   - Detailed project metadata, client briefs, and colorist notes.

7. **9:16 Vertical Viral Reels Suite (TikTok, Reels & Shorts):**
   - Realistic smartphone mockup frame playing high-retention vertical cuts.
   - Interactive Like counter, sound toggle, and Next/Previous reel switcher.
   - Breakdown of the 0.15s hook rule, micro-sound design, and seamless infinite loops.

8. **Interactive "Build Your Edit" Scope Estimator:**
   - Interactive calculator where clients select deliverable types, turnaround speeds, and add-ons (ACEScc Color Grade, Sound Design, 3D Tracking, 24h Rush Sprint).
   - Direct 1-click **"Book via WhatsApp"** button (with pre-filled customized message) and email inquiry form.

---

## 🛠️ Customizing Details & Contact Info

Edit `videos-data.js` to update Piyush's contact details, pricing, social media links, or custom project descriptions:
```javascript
const PORTFOLIO_CONFIG = {
  editorName: "Piyush Yadav",
  title: "Lead Video Editor & Colorist",
  contact: {
    email: "piyush.yadav.editor@gmail.com",
    whatsapp: "+919876543210", // Your actual WhatsApp number with country code
    instagram: "https://instagram.com/yourhandle",
    youtube: "https://youtube.com/@yourchannel"
  }
};
```

---

## 🚀 Deploying to the Web

- **Vercel**: Run `vercel` in this folder or connect the repository on vercel.com.
- **Netlify**: Drag and drop this folder directly into netlify.com.
- **GitHub Pages**: Push this folder to a GitHub repo and enable GitHub Pages under repository settings.
