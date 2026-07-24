/**
 * Canonical English Home content — Phase 1E.1 corporate gateway.
 * English remains the controlled fallback across locale routes.
 *
 * Structure:
 * - Preserved destination-page exports (long-form source of truth)
 * - Active Home presentation exports (compact; derived where possible)
 */

/* -------------------------------------------------------------------------- */
/* Preserved for destination pages — long-form source of truth                */
/* -------------------------------------------------------------------------- */

/** Future Purpose / Foundation pages — full purpose principles. */
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

/** Future Foundation page — full stage descriptions. */
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

/** Future Foundation or Technology page — five-step governed system logic. */
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

/** Future Applications page — longer context statements. */
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

/** Future Technology page — discipline descriptions. */
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

/** Future Systems page — system descriptions. */
export const systemsOverviewContent = {
  label: "Systems",
  heading: "Engineering systems for physical and digital environments.",
  introduction:
    "SAVEN Core is being developed as a family of connected systems. Each system addresses a defined operational role while remaining part of a shared architecture.",
  systems: [
    {
      id: "saven-robotics-interface",
      title: "SAVEN Robotics Interface",
      role: "Human-system interaction",
      description:
        "A structured interface between people, robotic systems, devices and environment-level controls.",
      href: "/systems/",
    },
    {
      id: "saven-systems-architecture",
      title: "SAVEN Systems Architecture",
      role: "Coordination and orchestration",
      description:
        "The engineering framework that connects software, data, permissions, devices and operational workflows.",
      href: "/systems/",
    },
    {
      id: "saven-ai",
      title: "SAVEN AI",
      role: "Interpretation and decision assistance",
      description:
        "Models and rules intended to support context interpretation, option evaluation and controlled assistance.",
      href: "/systems/",
    },
    {
      id: "saven-drone-platform",
      title: "SAVEN Drone Platform",
      role: "Aerial operations",
      description:
        "A system framework for sensing, inspection, mapping, monitoring and other authorized aerial tasks.",
      href: "/systems/",
    },
    {
      id: "human-data-model-interface",
      title: "Human Data Model Interface",
      role: "Human context connection",
      description:
        "A controlled interface between human context, authorized data and the systems that may use that information.",
      href: "/systems/",
    },
  ],
  linkLabel: "View systems",
} as const;

/** Future Research / Labs pages. */
export const researchLabsContent = {
  label: "Research & Labs",
  heading: "Research translated into engineering practice.",
  introduction:
    "Research defines questions, models and evidence. Labs turn that work into testable systems, interfaces and engineering methods.",
  layers: [
    {
      id: "research",
      title: "Research",
      description:
        "Publications, research areas, system models, methods and technical questions that shape the architecture.",
      linkLabel: "Explore research",
      href: "/research/",
    },
    {
      id: "labs",
      title: "Labs",
      description:
        "Focused engineering environments for robotics, artificial intelligence, autonomous systems, safety, privacy and human-system interaction.",
      linkLabel: "Explore labs",
      href: "/labs/",
    },
  ],
  relationship:
    "Research defines what must be understood. Labs determine how it can be built, tested and governed.",
} as const;

/** Future Trust page — Safety, Privacy and Human Oversight pillars. */
export const trustArchitectureContent = {
  label: "Trust Architecture",
  heading: "Limits, permissions and human control are part of the system.",
  introduction:
    "SAVEN Core is being designed around defined boundaries. System capability must remain connected to permissions, context, accountability and the ability for people to intervene.",
  pillars: [
    {
      id: "safety-architecture",
      title: "Safety Architecture",
      description:
        "Defines operational boundaries, escalation paths, failure handling, fallback behavior and conditions where a system must stop or defer.",
    },
    {
      id: "privacy-architecture",
      title: "Privacy Architecture",
      description:
        "Defines what information may be used, why it may be used, who may access it and how unnecessary exposure is reduced.",
    },
    {
      id: "human-oversight",
      title: "Human Oversight",
      description:
        "Keeps people responsible for consequential decisions, exceptions, permissions and review.",
    },
  ],
  principleLine:
    "Autonomy is limited by purpose, permission, risk and human authority.",
} as const;

/** Development status register — used on Home and preserved for destination reuse. */
export const developmentStatusContent = {
  label: "Development Status",
  heading: "Built in stages, reviewed before expansion.",
  introduction:
    "SAVEN Core is being developed through defined phases across architecture, software, research, interfaces and physical-system engineering.",
  stages: [
    {
      id: "foundation",
      title: "Foundation",
      description:
        "Purpose, terminology, information architecture, governance and technical foundation.",
      status: "Established",
    },
    {
      id: "digital-systems",
      title: "Digital Systems",
      description:
        "Core software architecture, human-context models, interfaces and controlled system logic.",
      status: "In development",
    },
    {
      id: "physical-systems",
      title: "Physical Systems",
      description:
        "Robotics, sensing, devices, environment integration and operational testing.",
      status: "Planned and under research",
    },
    {
      id: "deployment-readiness",
      title: "Deployment Readiness",
      description:
        "Validation, permissions, operating procedures, safety review and controlled implementation.",
      status: "Future phase",
    },
  ],
  statusNote:
    "Public information reflects the current development stage and does not imply commercial deployment, clinical use or regulatory approval.",
} as const;

/** Future Company page. */
export const companyOverviewContent = {
  label: "Company",
  heading: "An engineering organization centered on human life.",
  paragraphs: [
    "SAVEN Core brings together systems architecture, software, artificial intelligence, robotics, research and human-centered design around one purpose: building systems that support people in real environments.",
    "The company is being structured for long-term research, responsible development and collaboration across technical, medical, institutional and industrial fields.",
  ],
  principles: [
    {
      id: "purpose-before-technology",
      title: "Purpose before technology",
    },
    {
      id: "engineering-before-promotion",
      title: "Engineering before promotion",
    },
    {
      id: "responsibility-before-scale",
      title: "Responsibility before scale",
    },
  ],
  primaryLink: {
    label: "About SAVEN Core",
    href: "/company/",
  },
  secondaryLink: {
    label: "Contact",
    href: "/contact/",
  },
} as const;

/** Future Investors page. */
export const investorOverviewContent = {
  label: "Investors",
  heading: "Long-term capital for systems that require careful development.",
  paragraphs: [
    "SAVEN Core is intended for investors who understand that human-centered systems, robotics, safety architecture and physical infrastructure require disciplined engineering and staged validation.",
    "Investor materials may include company architecture, development priorities, research direction, system concepts and future commercialization pathways.",
  ],
  primaryLink: {
    label: "Investor overview",
    href: "/investors/",
  },
  secondaryLink: {
    label: "Request access",
    href: "/investors/access/",
  },
} as const;

/** Future Roadmap page — capability categories. */
export const roadmapClosingContent = {
  label: "Roadmap",
  heading: "Progress is organized around capability, evidence and responsibility.",
  introduction:
    "The SAVEN Core roadmap is structured around what must be understood, built, tested and governed before wider use.",
  categories: [
    {
      id: "architecture",
      title: "Architecture",
      description:
        "System boundaries, terminology, interfaces, data models and governance.",
    },
    {
      id: "software",
      title: "Software",
      description:
        "Digital services, controlled intelligence, applications and operating tools.",
    },
    {
      id: "physical-systems",
      title: "Physical Systems",
      description:
        "Robotics, sensing, devices, environment integration and field validation.",
    },
    {
      id: "readiness",
      title: "Readiness",
      description:
        "Safety review, permissions, operating procedures, deployment controls and institutional collaboration.",
    },
  ],
  primaryLink: {
    label: "View roadmap",
    href: "/roadmap/",
  },
  closingStatement:
    "Intelligent systems are valuable only when people can understand, govern and trust how they are used.",
} as const;

/* -------------------------------------------------------------------------- */
/* Active Home presentation — compact gateway (Phase 1E.1)                    */
/* -------------------------------------------------------------------------- */

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

export const purposeFoundationHomeContent = {
  label: "Purpose and Foundation",
  heading: humanPurposeContent.heading,
  purpose: humanPurposeContent.paragraphs[0],
  purposeLink: {
    label: "Explore purpose",
    href: "/purpose/",
  },
  foundationLink: {
    label: "Explore the foundation",
    href: "/foundation/",
  },
  stages: foundationChainContent.stages.map(({ id, title, role }) => ({
    id,
    title,
    role,
  })),
} as const;

export const applicationDirectoryHomeContent = {
  label: "Applications",
  heading: applicationContextsContent.heading,
  sectionLink: {
    label: "View all applications",
    href: "/applications/",
  },
  items: [
    {
      id: "hospitals",
      title: "Hospitals",
      text: "Support for clinical environments, staff workflows and care infrastructure.",
      href: "/applications/",
      linkLabel: "Hospitals",
    },
    {
      id: "home",
      title: "Home",
      text: "Support for independence, continuity and safer daily routines.",
      href: "/applications/",
      linkLabel: "Home",
    },
    {
      id: "everyday-life",
      title: "Everyday Life",
      text: "Support for the environments where people live, move, work and age.",
      href: "/applications/",
      linkLabel: "Everyday Life",
    },
  ],
} as const;

export const technologySystemsHomeContent = {
  label: "Technology and Systems",
  heading: "Disciplines and engineering systems.",
  technology: {
    title: technologyOverviewContent.label,
    linkLabel: technologyOverviewContent.linkLabel,
    href: "/technology/",
    items: technologyOverviewContent.areas.map(({ id, title }) => ({
      id,
      title,
    })),
  },
  systems: {
    title: systemsOverviewContent.label,
    linkLabel: systemsOverviewContent.linkLabel,
    href: "/systems/",
    items: systemsOverviewContent.systems.map(({ id, title, role }) => ({
      id,
      title,
      role,
    })),
  },
} as const;

export const researchTrustHomeContent = {
  label: "Research and Trust",
  heading: "Evidence, engineering practice and governed limits.",
  columns: [
    {
      id: "research",
      title: researchLabsContent.layers[0].title,
      description: researchLabsContent.layers[0].description,
      linkLabel: researchLabsContent.layers[0].linkLabel,
      href: researchLabsContent.layers[0].href,
    },
    {
      id: "labs",
      title: researchLabsContent.layers[1].title,
      description: researchLabsContent.layers[1].description,
      linkLabel: researchLabsContent.layers[1].linkLabel,
      href: researchLabsContent.layers[1].href,
    },
    {
      id: "trust",
      title: trustArchitectureContent.label,
      description:
        "Defined boundaries that keep capability connected to permissions, accountability and human control.",
      linkLabel: "Explore trust",
      href: "/trust/",
    },
  ],
} as const;

export const developmentStatusHomeContent = {
  label: developmentStatusContent.label,
  heading: developmentStatusContent.heading,
  stages: developmentStatusContent.stages,
  statusNote: developmentStatusContent.statusNote,
} as const;

export const corporateClosingHomeContent = {
  label: "Organization",
  heading: "Company, investors and roadmap.",
  columns: [
    {
      id: "company",
      title: companyOverviewContent.label,
      text: companyOverviewContent.paragraphs[1],
      links: [
        {
          label: companyOverviewContent.primaryLink.label,
          href: companyOverviewContent.primaryLink.href,
        },
        {
          label: companyOverviewContent.secondaryLink.label,
          href: companyOverviewContent.secondaryLink.href,
        },
      ],
    },
    {
      id: "investors",
      title: investorOverviewContent.label,
      text: "Intended for long-term capital that understands disciplined engineering and staged validation for human-centered systems.",
      links: [
        {
          label: investorOverviewContent.primaryLink.label,
          href: investorOverviewContent.primaryLink.href,
        },
        {
          label: investorOverviewContent.secondaryLink.label,
          href: investorOverviewContent.secondaryLink.href,
        },
      ],
    },
    {
      id: "roadmap",
      title: roadmapClosingContent.label,
      text: roadmapClosingContent.introduction,
      links: [
        {
          label: roadmapClosingContent.primaryLink.label,
          href: roadmapClosingContent.primaryLink.href,
        },
      ],
    },
  ],
  closingStatement: roadmapClosingContent.closingStatement,
} as const;
