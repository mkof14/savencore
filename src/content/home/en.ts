/**
 * Canonical English Home content for Phase 1D.1.
 * Used as controlled fallback across locale routes until localization is approved.
 */

export const homeHeroContent = {
  eyebrow: "SAVEN Core",
  heading: "Intelligent systems built to support human life.",
  supporting:
    "SAVEN Core develops the physical and digital systems that connect human data, artificial intelligence, robotics and real-world environments.",
  statusLine: "Built for hospitals, homes and everyday life.",
  primaryLink: {
    label: "Explore the foundation",
    href: "/foundation/",
  },
  secondaryLink: {
    label: "View applications",
    href: "/applications/",
  },
} as const;

export const humanPurposeContent = {
  label: "Human Purpose",
  heading: "Technology should serve people in the moments that matter.",
  paragraphs: [
    "SAVEN Core is being developed so that systems can understand context, respond carefully and support people across care, independence, safety and daily life.",
    "The work begins with people — not with products. Artificial intelligence, robotics and physical systems are tools for assistance under human oversight.",
  ],
  principles: [
    {
      id: "human-oversight",
      title: "Human oversight",
      text: "People remain responsible for judgment, control and meaningful decisions.",
    },
    {
      id: "privacy-by-design",
      title: "Privacy by design",
      text: "Personal context is handled with controlled access, minimization and clear permissions.",
    },
    {
      id: "safety-before-autonomy",
      title: "Safety before autonomy",
      text: "Safety architecture comes before expanded autonomous behavior.",
    },
  ],
} as const;

export const applicationContextsContent = {
  label: "Where life happens",
  heading: "Hospitals. Home. Everyday life.",
  items: [
    {
      id: "hospitals",
      title: "Hospitals",
      text: "Systems designed to support clinical environments, staff workflows and patient care infrastructure.",
      href: "/applications/",
      linkLabel: "View applications",
    },
    {
      id: "home",
      title: "Home",
      text: "Systems intended to support independence, continuity and safer daily routines.",
      href: "/applications/",
      linkLabel: "View applications",
    },
    {
      id: "everyday-life",
      title: "Everyday Life",
      text: "Systems designed for the environments where people live, move, work and age.",
      href: "/applications/",
      linkLabel: "View applications",
    },
  ],
} as const;
