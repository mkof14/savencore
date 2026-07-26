export type FlagshipPageContent = {
  kicker: string;
  title: string;
  status: string;
  lede: string;
  body: readonly string[];
  listHeading: string;
  items: readonly string[];
  note: string;
  related: readonly { label: string; href: string }[];
};

/** Optional richer sections for Layer-1 brochure pages (D-0159). */
export type FlagshipSection = {
  id: string;
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
  collapsed?: boolean;
};

export type FlagshipBrochureContent = FlagshipPageContent & {
  highlights?: readonly {
    id: string;
    title: string;
    text: string;
    icon?: string;
  }[];
  sections?: readonly FlagshipSection[];
};

export const roboticsLabPageEn: FlagshipBrochureContent = {
  kicker: "SAVEN Core",
  title: "SAVEN Robotics Lab",
  status: "In Development",
  lede: "The primary engineering direction for robotic systems that sense, move, and act beside people — mobility, manipulators, and perception under clear human oversight.",
  body: [
    "SAVEN Robotics Lab builds the engineering basis for robots and manipulators meant to help people in real places: standing support, careful object handling, and calm assistance in homes and care settings — always with people remaining in authority.",
    "Platforms, mobility, control, perception, and human–machine interaction advance as one direction. Public status is In Development: architecture and systems work presented honestly — not as operational hospital fleets or commercial products.",
  ],
  listHeading: "Focus areas",
  items: [
    "Robotic systems — platforms and physical architectures for assistive work",
    "Autonomous mobility — movement through shared human spaces with limits made visible",
    "Robot control — stable, governable motion under human command",
    "Sensors and machine perception — understanding people, places, and physical context",
    "Human–machine interaction — clear interfaces so people stay in charge",
  ],
  highlights: [
    {
      id: "what",
      title: "What we build",
      text: "Engineering for assistive robots, manipulators, mobility, control, perception, and human–machine interaction.",
    },
    {
      id: "why",
      title: "How it helps people",
      text: "Physical help where care is hard — standing, reaching, moving, and everyday tasks — with oversight kept central.",
    },
    {
      id: "next",
      title: "Status",
      text: "In Development. Architecture and systems work — not operational fleets or clinical products.",
    },
  ],
  sections: [
    {
      id: "what-we-build",
      title: "What we build",
      paragraphs: [
        "The Lab develops the physical and control foundations that let intelligent systems operate in the real world: manipulation and mobile platforms, sensing stacks, and the software that binds them into governable systems.",
        "Work is organized as engineering workstreams, not as finished product lines. Each focus area advances together so robots can act usefully without hiding how decisions and limits work.",
      ],
    },
    {
      id: "how-it-helps",
      title: "How it helps people",
      paragraphs: [
        "The purpose is human care: reducing overload for caregivers, supporting independence at home, and extending careful physical help into places where people already live and work.",
        "Robotics here is a means — not the brand story. Intelligence matters when it becomes reliable assistance that people can understand, pause, and direct.",
      ],
    },
    {
      id: "workstreams",
      title: "Workstreams",
      items: [
        "Robotic systems — platforms and physical architectures for assistive work",
        "Autonomous mobility — movement through shared human spaces with limits made visible",
        "Robot control — stable, governable motion under human command",
        "Sensors and machine perception — understanding people, places, and physical context",
        "Human–machine interaction — clear interfaces so people stay in charge",
      ],
    },
    {
      id: "status",
      title: "Development status",
      paragraphs: [
        "Public status for SAVEN Robotics Lab is In Development. Material on this site describes intended architecture, focus areas, and engineering progress — not operational fleets, clinical approvals, or commercial availability.",
        "Related depth lives in Technology · Robotics, Systems · Robotics Layer, and the SAVEN Robotics Interface workstream for human command and oversight.",
      ],
    },
  ],
  note: "Public material describes intended architecture and research. It does not claim operational fleets, partner deployments, or clinical products.",
  related: [
    { label: "Technology · Robotics", href: "/technology/robotics/" },
    { label: "Systems · Robotics Layer", href: "/systems/robotics-layer/" },
    { label: "SAVEN Robotics Interface", href: "/systems/saven-robotics-interface/" },
  ],
};

export const roboticsInterfacePageEn: FlagshipPageContent = {
  kicker: "SAVEN Core",
  title: "SAVEN Robotics Interface",
  status: "In Development",
  lede: "A system for interacting with robots and autonomous machines — so people stay in command of complex physical work.",
  body: [
    "The Robotics Interface is the human-facing layer for understanding what machines are doing, directing missions, and keeping limits visible.",
    "Capability areas below are possible components of the architecture. None are presented as shipped product modules.",
  ],
  listHeading: "Possible components",
  items: [
    "Command and control",
    "Visual interface",
    "Mission planning",
    "Real-time telemetry",
    "Fleet management",
    "Human–robot interaction",
    "Remote operations",
    "AI-assisted decision support",
    "System diagnostics",
    "Role-based access",
    "Digital mission environment",
  ],
  note: "Interface work is in development as architecture. It does not claim a commercial control product or deployed operations.",
  related: [
    { label: "SAVEN Robotics Lab", href: "/labs/saven-robotics-lab/" },
    { label: "Systems", href: "/systems/" },
    { label: "AI Decision Support", href: "/systems/ai-decision-support/" },
  ],
};

export const futureLabPageEn: FlagshipBrochureContent = {
  kicker: "SAVEN Core",
  title: "Internal Future Lab",
  status: "Research",
  lede: "The research environment of SAVEN Core — exploring advanced robotics, embodied AI, and new ways machines might carefully support human life.",
  body: [
    "Internal Future Lab looks ahead of near-term systems work: new forms of robotics and manipulators, richer sensing, physical-environment modeling, and human–machine collaboration that could one day ease care in homes, clinics, and everyday places.",
    "Findings inform Robotics Lab and Interface directions. Research status means exploration and architecture — open questions, not validated devices or deployed products.",
  ],
  listHeading: "Research directions",
  items: [
    "Advanced forms of robotics",
    "Embodied AI",
    "Autonomous decision-making",
    "Human–machine interaction",
    "New sensor systems",
    "Modeling of physical environments",
    "Robotics for medicine",
    "Technologies for future infrastructure",
    "Non-standard engineering concepts",
  ],
  highlights: [
    {
      id: "what",
      title: "What this is",
      text: "A research environment for advanced robotics, embodied AI, and non-standard engineering concepts.",
    },
    {
      id: "why",
      title: "Why it matters",
      text: "Tomorrow’s physical assistance needs careful exploration before it can serve people with dignity.",
    },
    {
      id: "next",
      title: "Status",
      text: "Research. Exploration and architecture — not product or clinical claims.",
    },
  ],
  sections: [
    {
      id: "directions",
      title: "Research directions",
      items: [
        "Advanced forms of robotics",
        "Embodied AI",
        "Autonomous decision-making",
        "Human–machine interaction",
        "New sensor systems",
        "Modeling of physical environments",
        "Robotics for medicine",
        "Technologies for future infrastructure",
        "Non-standard engineering concepts",
      ],
    },
    {
      id: "human-horizon",
      title: "Human horizon",
      paragraphs: [
        "Future concepts are judged by whether they could later help people — caregivers, families, and individuals — without replacing human judgment or inventing deployment stories.",
        "Work stays upstream of SAVEN Robotics Lab so promising ideas can mature into governable engineering directions.",
      ],
    },
  ],
  note: "Research material describes open questions and directions. It does not claim validated medical devices or deployed infrastructure systems.",
  related: [
    { label: "Research", href: "/research/" },
    { label: "SAVEN Robotics Lab", href: "/labs/saven-robotics-lab/" },
    { label: "Technology", href: "/technology/" },
  ],
};

export const labsHubPageEn: FlagshipBrochureContent = {
  kicker: "SAVEN Core",
  title: "Labs",
  status: "In Development",
  lede: "Where SAVEN Core shapes robotics and future systems that help people in the physical world — engineering labs beside a human command interface.",
  body: [
    "Labs are focused engineering and research environments for machines that can sense, move, and assist. SAVEN Robotics Lab is the primary engineering direction; Internal Future Lab explores what comes next.",
    "Human context from the Human Data Model flows into SAVEN, which prepares roles, events, and real actions for executive devices — robots, manipulators, sensors — then collects what happens and processes it again. When needed, understanding rises to BioMath Core. The SAVEN Robotics Interface keeps people in command as capability grows.",
  ],
  listHeading: "Labs",
  items: [
    "SAVEN Robotics Lab — primary engineering direction for robotic systems, mobility, control, perception, and HMI",
    "Internal Future Lab — research environment for advanced robotics and embodied AI",
  ],
  highlights: [
    {
      id: "what",
      title: "What this is",
      text: "Engineering and research labs for robotics that help people — and for future physical systems.",
    },
    {
      id: "why",
      title: "Why it matters",
      text: "Physical intelligence only helps when people can govern it — labs and interface grow together.",
    },
    {
      id: "next",
      title: "Where to go next",
      text: "Start with SAVEN Robotics Lab, or explore Future Lab and the Robotics Interface.",
    },
  ],
  sections: [
    {
      id: "robotics-lab-overview",
      title: "SAVEN Robotics Lab",
      paragraphs: [
        "Primary engineering direction (In Development): robotic systems, autonomous mobility, robot control, sensors and machine perception, and human–machine interaction.",
        "Built to support human care in hospitals, at home, and wherever life happens — without claiming operational deployment.",
      ],
    },
    {
      id: "future-lab-overview",
      title: "Internal Future Lab",
      paragraphs: [
        "Research environment (Research status): advanced robotics forms, embodied AI, autonomous decision-making, new sensing, physical-environment modeling, and non-standard engineering concepts.",
      ],
    },
  ],
  note: "Public pages describe architecture and research. They do not claim operational deployment.",
  related: [
    { label: "SAVEN Robotics Lab", href: "/labs/saven-robotics-lab/" },
    { label: "Internal Future Lab", href: "/labs/internal-future-lab/" },
    { label: "SAVEN Robotics Interface", href: "/systems/saven-robotics-interface/" },
  ],
};

export const investorsPageEn: FlagshipBrochureContent = {
  kicker: "SAVEN Core",
  title: "Investors",
  status: "In Development",
  lede: "For long-term partners who value disciplined engineering for intelligent systems in the physical world — with human care as the enduring purpose.",
  body: [
    "SAVEN Core is building AI, robotics, autonomous systems, and engineering technologies meant to operate in real environments.",
    "Investor conversations follow architecture, responsibility, staged evidence, and multi-domain optionality — not invented traction metrics, valuations, or promised returns.",
  ],
  listHeading: "What we share publicly",
  items: [
    "Company direction: Intelligence for the Physical World",
    "Flagship workstreams: Robotics Lab, Robotics Interface, Future Lab",
    "Engineering depth available for those who want it",
    "Trust and human oversight as structural requirements",
    "Human-care purpose that anchors platform ambition",
  ],
  highlights: [
    {
      id: "potential",
      icon: "potential",
      title: "Platform potential",
      text: "A coherent stack spanning human understanding, AI, robotics, and physical assistance across care and life domains.",
    },
    {
      id: "human-benefit",
      icon: "care",
      title: "Human benefit",
      text: "Intelligence built to ease care burdens — for teams, families, and people across ages and stages of life.",
    },
    {
      id: "long-term",
      icon: "horizon",
      title: "Long-term value",
      text: "Patient capital for durable platforms where lasting human needs meet disciplined engineering — not return promises.",
    },
    {
      id: "responsible",
      icon: "growth",
      title: "Responsible growth",
      text: "Architecture first, staged evidence, and trust as structural requirements — growth without inventing traction.",
    },
  ],
  sections: [
    {
      id: "posture",
      title: "Investment posture",
      paragraphs: [
        "SAVEN Core seeks partners who understand long-horizon platform building: patient capital, clear governance, and honesty about development status.",
        "We do not publish funding rounds, valuations, revenue figures, or return forecasts on this site. Those topics belong in appropriate private materials when authorized — never as public performance claims.",
      ],
    },
    {
      id: "perspectives",
      title: "Perspectives",
      paragraphs: [
        "Public visitors see an engineering and technology showcase: what we are building and why human oversight is non-negotiable.",
        "Digging investors can follow Layer-2 depth — Technology, Systems, Labs, Trust, and Research — without treating the site as a product brochure or an offer to sell securities.",
      ],
    },
    {
      id: "potential",
      title: "Platform potential",
      paragraphs: [
        "The opportunity is structural: a coherent stack spanning human understanding, AI, robotics, and physical assistance across multiple care and life domains.",
        "Multi-domain optionality matters because the same disciplined foundations — perception, control, interfaces, trust — can support hospitals, homes, and everyday settings without inventing separate product myths for each.",
      ],
    },
    {
      id: "progress",
      title: "Development progress",
      paragraphs: [
        "What we can point to publicly is architecture and systems progress under approved statuses: Research, Architecture, and In Development across flagship workstreams.",
        "Milestones mean clearer scopes, published Lab and Interface paths, Trust requirements, and engineering depth for those who choose it — not financial results, customer counts, or deployment claims.",
      ],
    },
    {
      id: "human-benefit",
      title: "Human benefit",
      paragraphs: [
        "The enduring purpose is Turning Intelligence Into Human Care: systems that help people where life is demanding — care teams, families, and individuals across ages and stages of life.",
        "Impact potential is the reason the engineering exists. Public pages describe that intent carefully; they do not claim clinical outcomes, partner programs, or operational service.",
      ],
    },
    {
      id: "value-creation",
      title: "Long-term value creation",
      paragraphs: [
        "In categories where durable platforms serve lasting human needs, responsible growth and platform leverage can create meaningful long-term value for mission-aligned capital.",
        "That is an aspirational thesis about the category and craft — not a promise of returns, IRR, ROI, or any performance guarantee. Good outcomes for people and disciplined engineering come first; financial results are never invented for marketing.",
      ],
    },
    {
      id: "share",
      title: "What we share publicly",
      items: [
        "Company direction: Intelligence for the Physical World",
        "Flagship workstreams: Robotics Lab, Robotics Interface, Future Lab",
        "Engineering depth available for those who want it",
        "Trust and human oversight as structural requirements",
        "Human-care purpose that anchors platform ambition",
      ],
    },
  ],
  note: "This page is structural information only. It is not an offer to sell securities. For conversation, use Contact at info@savencore.com. Sign In/Up provides authorized access when credentials are configured — not a full investor portal.",
  related: [
    { label: "Home", href: "/" },
    { label: "SAVEN Robotics Lab", href: "/labs/saven-robotics-lab/" },
    { label: "About", href: "/foundation/" },
    { label: "Contact", href: "/contact/" },
    { label: "Sign In/Up", href: "/auth/sign-in/" },
  ],
};
