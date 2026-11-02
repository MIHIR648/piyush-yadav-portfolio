/**
 * =============================================================================
 * PIYUSH YADAV — OFFICIAL PORTFOLIO DATA & RESUME ARCHIVE
 * Sourced directly from Piyush Yadav's Resume
 * =============================================================================
 */

const RESUME_DATA = {
  name: "PIYUSH YADAV",
  title: "Video Editor, Motion Graphics Designer & Voice Artist",
  tagline: "CRAFTING HIGH-RETENTION VISUALS & DYNAMIC VOICE STORYTELLING",
  location: "Deer Circle, Prahlad Nagar, Ahmedabad, Gujarat, India",
  email: "py0892471@gmail.com",
  phone: "+918320676691",
  phoneDisplay: "+91 83206 76691",
  whatsappUrl: "https://wa.me/918320676691?text=Hi%20Piyush!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
  
  profileInfo: "Creative and versatile professional with experience in graphic designing, video editing, management, and voice acting. Passionate about delivering high-quality creative solutions, managing teams effectively, and providing professional voice-over services.",
  
  education: {
    institution: "Adarsh School, Juhapura",
    stream: "Commerce"
  },
  
  languages: [
    { name: "English", level: "Fluent / Professional" },
    { name: "Hindi", level: "Native / Mother Tongue" },
    { name: "Japanese", level: "Basics" }
  ],
  
  skills: [
    { name: "Video Editing", desc: "High-retention pacing, multi-cam cutting, sound sync, dynamic match-cuts" },
    { name: "Motion Graphics & 3D", desc: "After Effects tracking, 3D compositing, kinetic typography, VFX" },
    { name: "Voice Acting & Dubbing", desc: "Professional VO for commercials, explainers, audiobooks in multiple tones" },
    { name: "Graphic Design", desc: "Branding elements, marketing materials, social campaigns, YouTube packaging" },
    { name: "Team Management", desc: "Scheduling, client coordination, project delivery pipelines" },
    { name: "Social Media Strategy", desc: "9:16 viral reels, algorithm optimization, thumb-stopping hooks" }
  ],
  
  experience: [
    {
      company: "D Vivid Consultant",
      period: "2026",
      role: "Video Editor & Motion Graphics Designer",
      highlights: [
        "Edited and produced engaging videos for social media, marketing, and brand promotional campaigns.",
        "Executed high-conversion promotional cuts for international study abroad programs (Germany, Canada, UK).",
        "Crafted dynamic sound design, kinetic subtitle animations, and high-retention pacing."
      ]
    },
    {
      company: "G7Edu Global",
      period: "2025 - 2026",
      role: "Graphic Designer & Video Editor",
      highlights: [
        "Created scripts for study abroad promotional and informational content.",
        "Planned and executed video shoots for student guidance and international education campaigns.",
        "Edited high-impact videos for social media, marketing, and educational platforms."
      ]
    },
    {
      company: "Astute Academy",
      period: "2025 - 2026",
      role: "Graphic Designer & Video Editor",
      highlights: [
        "Designed creative graphics, marketing materials, social media posts, and branding elements.",
        "Edited promotional and educational videos with engaging visuals and sound design.",
        "Collaborated with cross-functional teams to deliver projects on tight sprint schedules."
      ]
    },
    {
      company: "Voice Artist",
      period: "2024 - 2026",
      role: "Voice Acting & Dubbing Artist",
      highlights: [
        "Provided professional voice-overs for advertisements, explainer videos, audiobooks, and dubbing.",
        "Worked across multiple vocal tones: formal, conversational, corporate, energetic, and friendly."
      ]
    },
    {
      company: "Casa The Salon",
      period: "2023 - 2024",
      role: "Management Team",
      highlights: [
        "Supervised daily operations and coordinated between staff and clients.",
        "Handled scheduling, client appointments, and customer service to improve satisfaction.",
        "Assisted in event promotions, seasonal offers, and social media marketing campaigns."
      ]
    }
  ]
};

// 3D Card Deck Projects (combining Piyush's real videos with his resume companies)
const THREE_D_CARDS = [
  {
    id: "card-1",
    tag: "STUDY ABROAD // D VIVID",
    company: "dvivid.consultant",
    title: "Global Horizons // Germany Campaign",
    subtitle: "High-Conversion Educational Commercial",
    desc: "Dynamic student recruitment promo with punchy sound design, travel match cuts, and kinetic text highlights for D Vivid Consultant.",
    videoSrc: "./assets/videos/295-Hindi-Germany.mov",
    fallbackSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4",
    poster: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    themeGradient: "linear-gradient(135deg, #1e114a 0%, #3b137a 50%, #00f0ff 100%)",
    role: "Video Editor & Motion Designer",
    year: "2026"
  },
  {
    id: "card-2",
    tag: "TECH & EDTECH // ASTUTE ACADEMY",
    company: "astute.academy",
    title: "AI Engineer & Data Science Sprint",
    subtitle: "High-Retention Commercial & Tech Campaign",
    desc: "Thumb-stopping EdTech pacing engineered for +85% audience retention, Foley sound hits, and synchronized motion graphics.",
    videoSrc: "./assets/videos/trial_294-Hindi-AI_Engineer_or_Data_Scientist__1_.mov.mp4",
    fallbackSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    themeGradient: "linear-gradient(135deg, #371569 0%, #6d28d9 50%, #ec4899 100%)",
    role: "Lead Editor & Pacing Specialist",
    year: "2025 - 2026"
  },
  {
    id: "card-3",
    tag: "3D VFX & COMPOSITING",
    company: "vfx.spatial",
    title: "Neo-Spatial // 3D Camera Tracking",
    subtitle: "Blender 3D & After Effects Compositing",
    desc: "Complex 3D camera tracking, volumetric lighting, particle dynamics, and multi-pass compositing combining CGI and live action.",
    videoSrc: "./assets/videos/3d_project.mov",
    fallbackSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    poster: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80",
    themeGradient: "linear-gradient(135deg, #0e2a47 0%, #0284c7 50%, #00f0ff 100%)",
    role: "3D Compositor & VFX Editor",
    year: "2026"
  },
  {
    id: "card-4",
    tag: "DIRECTOR'S CUT // SHOWREEL",
    company: "piyush.archive",
    title: "Master Timeline // 2026 Showreel",
    subtitle: "Commercials, Narrative & Pacing Showcase",
    desc: "The definitive reel combining multi-genre pacing, sound design foley, DaVinci Resolve color grading, and dynamic velocity ramps.",
    videoSrc: "./assets/videos/Timeline_1.mov",
    fallbackSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    poster: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    themeGradient: "linear-gradient(135deg, #18181b 0%, #27272a 50%, #f59e0b 100%)",
    role: "Lead Video Editor & Colorist",
    year: "2026"
  },
  {
    id: "card-5",
    tag: "DOCUMENTARY & STORY",
    company: "g7edu.global",
    title: "Human Stories // Cinematic Narrative",
    subtitle: "Documentary Pacing & Organic Natural Light Grade",
    desc: "Slow-burn emotional pacing, organic natural lighting grades, and dialogue cleanup using iZotope RX 11 for G7Edu Global guidance campaigns.",
    videoSrc: "./assets/videos/Documentry_work.mov",
    fallbackSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    poster: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    themeGradient: "linear-gradient(135deg, #132a22 0%, #059669 50%, #10b981 100%)",
    role: "Narrative Editor & Sound Artist",
    year: "2025 - 2026"
  },
  {
    id: "card-6",
    tag: "CORPORATE & STAFF SPOTLIGHT",
    company: "casa.thesalon",
    title: "Team Talent & Culture Showcase",
    subtitle: "Multi-Camera Interview Pacing & Branding",
    desc: "Polished multi-speaker interview edit with dynamic lower-thirds, voice balance, and employer brand storytelling.",
    videoSrc: "./assets/videos/148-Hindi-Staff_Video-.mov",
    fallbackSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    poster: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    themeGradient: "linear-gradient(135deg, #2b1130 0%, #831843 50%, #f43f5e 100%)",
    role: "Editor & Colorist",
    year: "2024"
  }
];
