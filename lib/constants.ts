/**
 * Site configuration constants
 * Update these values with your personal information
 */
export const SITE_CONFIG = {
  name: "Rubber Pirate",
  title: "Cybersecurity Specialist | Ethical Hacker",
  description: "Penetration testing & security research specialist, bug bounty hunter, and CTF competitor focused on ethical hacking and cybersecurity initiatives.",
  email: "rahulridhu21@gmail.com",
  githubUsername: "rubberpirate",
  social: {
    github: "https://github.com/rubberpirate",
    linkedin: "https://linkedin.com/in/rahul-rajith",
    twitter: "https://twitter.com/rubberpirate0",
    discord: "https://discord.gg/jpmVydTh",
    tryhackme: "https://tryhackme.com/p/rubberpirate",
    anilist: "https://anilist.co/user/RubberPirate/",
    medium: "https://medium.com/@rubberpirate",
    hashnode: "https://hashnode.com/@rubberpirate",
  },
};

/**
 * Animation variants for Framer Motion
 */
export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
} as const;

/**
 * Common icon sizes
 */
export const ICON_SIZES = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
} as const;
