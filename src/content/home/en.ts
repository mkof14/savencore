/**
 * Canonical English Home content for Phase 1D.1–1D.2.
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

export const foundationChainContent = {
  label: "Foundation",
  heading: "A connected path from human understanding to physical systems.",
  introduction:
    "SAVEN Core is being developed as the physical systems layer of a broader architecture for understanding people, interpreting context and supporting real-world environments.",
  stages: [
    {
      id: "biomath-life",
      title: "BioMath Life",
      role: "The human-centered foundation.",
      description:
        "Defines the broader approach to understanding health, behavior, context and daily life as connected parts of one human system.",
    },
    {
      id: "biomath-core",
      title: "BioMath Core",
      role: "The intelligence layer.",
      description:
        "Organizes human data, models context and supports analysis, interpretation and decision assistance.",
    },
    {
      id: "saven",
      title: "SAVEN",
      role: "The execution layer.",
      description:
        "Connects intelligence with actions, workflows, devices and operational responses.",
    },
    {
      id: "saven-core",
      title: "SAVEN Core",
      role: "The physical systems layer.",
      description:
        "Brings software, robotics, sensing and environment-level infrastructure into one engineering framework.",
    },
  ],
} as const;

export const systemLogicContent = {
  label: "System Logic",
  heading: "From human context to careful action.",
  steps: [
    {
      id: "observe",
      title: "Observe",
      description:
        "Receive signals from people, devices, environments and authorized data sources.",
    },
    {
      id: "understand",
      title: "Understand",
      description:
        "Organize signals into a Human Data Model and interpret the surrounding context.",
    },
    {
      id: "evaluate",
      title: "Evaluate",
      description:
        "Use defined rules, models and artificial intelligence to assess conditions, options and uncertainty.",
    },
    {
      id: "assist",
      title: "Assist",
      description:
        "Support people, professionals or connected systems with an appropriate response.",
    },
    {
      id: "learn",
      title: "Learn",
      description:
        "Use reviewed outcomes and new information to improve future interpretation.",
    },
  ],
  governanceNote:
    "Important actions remain subject to permissions, defined safeguards and human oversight.",
} as const;

export const technologyOverviewContent = {
  label: "Technology",
  heading: "Disciplines combined around real human environments.",
  introduction:
    "SAVEN Core brings together several technical disciplines. Each has a defined role; none is presented as the purpose by itself.",
  areas: [
    {
      id: "artificial-intelligence",
      title: "Artificial Intelligence",
      description:
        "Interpretation, pattern recognition and decision-support logic operating within defined constraints.",
      href: "/technology/",
    },
    {
      id: "robotics",
      title: "Robotics",
      description:
        "Physical interaction, mobility, manipulation and assistance in real-world settings.",
      href: "/technology/",
    },
    {
      id: "autonomous-systems",
      title: "Autonomous Systems",
      description:
        "Controlled system behavior for tasks that can be delegated safely and reviewed appropriately.",
      href: "/technology/",
    },
    {
      id: "human-data-and-intelligence",
      title: "Human Data and Intelligence",
      description:
        "Structured representation of human context, history, signals and changing conditions.",
      href: "/technology/",
    },
    {
      id: "safety-architecture",
      title: "Safety Architecture",
      description:
        "Permissions, boundaries, escalation paths, failure handling and human control.",
      href: "/technology/",
    },
    {
      id: "privacy-architecture",
      title: "Privacy Architecture",
      description:
        "Data minimization, access control, purpose limitation and accountable use.",
      href: "/technology/",
    },
  ],
  linkLabel: "Explore technology",
} as const;
