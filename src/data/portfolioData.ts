export interface StatItem {
  value: string;
  label: string;
}

export interface WorkItem {
  id: string;
  number: string;
  title: string;
  category: string;
  footerMotto: string;
  image: string;
  gallery?: string[];
  video?: string;
  points: string[];
  role: string;
}

export interface EducationItem {
  title: string;
  description: string;
  iconName: 'LayoutGrid' | 'FileSpreadsheet' | 'TrendingUp' | 'Briefcase';
}

export interface StrengthItem {
  title: string;
  iconName: 'Camera' | 'BarChart3' | 'Dumbbell' | 'Users';
}

export interface VideoReel {
  title: string;
  tag: string;
  videoSrc: string;
  thumbnail: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "BHUVAN",
    signatureText: "Bhuvan",
    heroTags: "FASHION • FINANCE • FITNESS",
    heroTitle: "DISCIPLINE CREATES FREEDOM",
    heroSubtitle: "Fashion & Visual Media • Forex Technical Analyst • Fitness Coach",
    handwrittenQuote: "Same Mindset, Different Playgrounds.",
    heroActionText: "EXPLORE MY WORLD",
    pillars: ["CREATE", "ANALYSE", "TRAIN", "GROW"],
    heroImage: "/photos/bhuvan-hero.png",
  },
  about: {
    sectionNumber: "01",
    sectionTitle: "ABOUT ME",
    headline: "ENTREPRENEUR. STUDENT. CREATOR.",
    bio: "Building across fashion/visual media, Forex trading, and fitness coaching, I combine a creative director's eye with technical, analytical discipline and hands-on physique-transformation experience.",
    tagline: "A MORE DISCIPLINED, CREATIVE, AND FULFILLED TOMORROW.",
    image: "/photos/bhuvan-editorial.jpeg",
    stats: [
      { value: "3+", label: "YEARS IN FASHION & MEDIA" },
      { value: "3+", label: "YEARS OF TRAINING EXPERIENCE" },
      { value: "20KG", label: "MUSCLE MASS GAINED" },
      { value: "∞", label: "CURIOSITY TO GROW" },
    ] as StatItem[],
  },
  work: {
    sectionNumber: "02",
    sectionTitle: "MY WORK",
    subtitle: "THREE PATHS. ONE VISION.",
    items: [
      {
        id: "fashion",
        number: "01",
        title: "FASHION & VISUAL MEDIA",
        category: "Creative Direction",
        footerMotto: "CREATIVE DIRECTION THAT TELLS A STORY",
        image: "/photos/fashion-creative.jpeg",
        role: "Creative Director & Producer",
        gallery: [
          "/photos/WhatsApp Image 2026-09-09 at 12.14.47 AM.jpeg",
          "/photos/WhatsApp Image 2026-09-09 at 12.14.47 AM (1).jpeg",
          "/photos/WhatsApp Image 2026-09-09 at 12.14.47 AM (2).jpeg",
          "/photos/WhatsApp Image 2026-09-09 at 12.14.47 AM (3).jpeg",
          "/photos/WhatsApp Image 2026-09-09 at 12.14.48 AM.jpeg",
          "/photos/WhatsApp Image 2026-09-09 at 12.14.48 AM (1).jpeg",
          "/photos/WhatsApp Image 2026-09-09 at 12.14.48 AM (2).jpeg",
          "/photos/WhatsApp Image 2026-09-09 at 12.14.49 AM.jpeg",
          "/photos/WhatsApp Image 2026-09-09 at 12.14.49 AM (1).jpeg",
          "/photos/WhatsApp Image 2026-09-09 at 12.14.49 AM (2).jpeg",
          "/photos/WhatsApp Image 2026-09-09 at 12.14.49 AM (3).jpeg",
          "/photos/WhatsApp Image 2026-09-09 at 12.14.50 AM.jpeg",
          "/photos/WhatsApp Image 2026-09-09 at 12.14.50 AM (1).jpeg",
          "/photos/WhatsApp Image 2026-09-09 at 12.14.50 AM (2).jpeg",
          "/photos/WhatsApp Image 2026-09-09 at 12.14.51 AM.jpeg",
          "/photos/WhatsApp Image 2026-09-09 at 12.14.51 AM (1).jpeg",
          "/photos/WhatsApp Image 2026-09-09 at 12.14.51 AM (2).jpeg",
          "/photos/WhatsApp Image 2026-09-09 at 12.14.51 AM (3).jpeg",
          "/photos/WhatsApp Image 2026-09-09 at 12.14.52 AM.jpeg",
          "/photos/WhatsApp Image 2026-09-09 at 12.14.52 AM (1).jpeg",
          "/photos/WhatsApp Image 2026-09-09 at 12.14.52 AM (2).jpeg",
        ],
        video: "/videos/reel-1.mp4",
        points: [
          "College Fashion Society Photographer/Videographer → President",
          "Directed college fashion fests end-to-end",
          "Shot official content for the University",
          "Started thrifting brand \"Yuva\"",
          "3 years of modelling and shoot experience",
          "Currently face, creative director & social media lead for an upcycled shirt brand",
        ],
      },
      {
        id: "trading",
        number: "02",
        title: "TRADING & FINANCE",
        category: "Market Analysis",
        footerMotto: "ANALYSIS CREATES OPPORTUNITY",
        image: "/photos/bhuvan-trading.jpg",
        role: "Forex Technical Analyst",
        points: [
          "Independent Forex Trader",
          "Technical chart analyst specializing in the Forex market",
          "Runs trading as a supplementary income stream",
          "Applies structured, pattern-based analysis to read market behavior",
        ],
      },
      {
        id: "fitness",
        number: "03",
        title: "FITNESS & COACHING",
        category: "Physique Transformation",
        footerMotto: "DISCIPLINE BUILDS A BETTER YOU",
        image: "/photos/bhuvan-physique.png",
        role: "Fitness & Aesthetic Coach",
        video: "/videos/reel-2.mp4",
        points: [
          "3 years of dedicated training (20 kg muscle mass gain)",
          "Coaches clients on model-aesthetic physique development and functional strength",
          "Building an online coaching business with structured content and growth strategy for the Indian market",
        ],
      },
    ] as WorkItem[],
    reels: [
      {
        title: "Editorial Showcase & Movement",
        tag: "Cinematic Reel",
        videoSrc: "/videos/reel-1.mp4",
        thumbnail: "/photos/fashion-work.png",
      },
      {
        title: "Visual Media & Directing",
        tag: "Creative Production",
        videoSrc: "/videos/reel-2.mp4",
        thumbnail: "/photos/bhuvan-editorial.jpeg",
      },
      {
        title: "Discipline & Motion",
        tag: "Behind The Scenes",
        videoSrc: "/videos/reel-3.mp4",
        thumbnail: "/photos/hero-portrait.png",
      },
    ] as VideoReel[],
  },
  education: {
    sectionNumber: "03",
    sectionTitle: "EDUCATION",
    subtitle: "FOUNDATIONS FOR A BIGGER TOMORROW",
    image: "/photos/education-books.png",
    items: [
      {
        title: "Coursework",
        description: "Accounting, Statistics, Economics, and Business Management",
        iconName: "LayoutGrid",
      },
      {
        title: "Accounting",
        description: "Full accounting-cycle case study; Indian Accounting Standards (AS 1-32) / ICAI framework",
        iconName: "FileSpreadsheet",
      },
      {
        title: "Economics",
        description: "Market structures and game theory",
        iconName: "TrendingUp",
      },
      {
        title: "Business Management",
        description: "Case analyses on Nike and FlowWorks",
        iconName: "Briefcase",
      },
    ] as EducationItem[],
  },
  strengths: {
    sectionNumber: "04",
    sectionTitle: "CORE STRENGTHS",
    subtitle: "SKILLS THAT DRIVE EVERYTHING I DO",
    items: [
      {
        title: "Creative direction & visual storytelling",
        iconName: "Camera",
      },
      {
        title: "Technical / analytical chart reading",
        iconName: "BarChart3",
      },
      {
        title: "Physique coaching & transformation methodology",
        iconName: "Dumbbell",
      },
      {
        title: "Content strategy & personal brand building",
        iconName: "Users",
      },
    ] as StrengthItem[],
  },
  cta: {
    tagline: "SAME MINDSET. DIFFERENT PLAYGROUNDS.",
    headline: "A MORE CREATIVE, DISCIPLINED, AND FULFILLED TOMORROW.",
    buttonText: "LET'S CONNECT",
    image: "/photos/cta-horizon.png",
  },
  footer: {
    brand: "BHUVAN",
    motto: "IDEAS / DISCIPLINE / EXECUTION",
    copyright: "© 2026 Bhuvan. All rights reserved.",
    tag: "BUILT DIFFERENT.",
    links: [
      { name: "HOME", href: "#hero" },
      { name: "ABOUT", href: "#about" },
      { name: "WORK", href: "#work" },
      { name: "EDUCATION", href: "#education" },
      { name: "CONTACT", href: "#contact" },
    ],
    socials: [
      { name: "Instagram", url: "https://instagram.com", handle: "@bhuvan" },
      { name: "YouTube", url: "https://youtube.com", handle: "Bhuvan" },
      { name: "LinkedIn", url: "https://linkedin.com", handle: "Bhuvan" },
      { name: "X", url: "https://x.com", handle: "@bhuvan" },
    ],
  },
};
