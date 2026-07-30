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
  status: "Architecture",
  lede: "The primary engineering direction for robotic systems that sense, move, and act beside people — mobility, manipulators, and perception under clear human oversight.",
  body: [
    "SAVEN Robotics Lab builds the engineering basis for robots and manipulators meant to help people in real places: standing support, careful object handling, and calm assistance in homes and care settings — always with people remaining in authority.",
    "Platforms, mobility, control, perception, and human–machine interaction advance as one direction. Architecture and systems work are presented honestly — not as operational hospital fleets or commercial products.",
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
      title: "Scope",
      text: "Architecture and systems work — not operational fleets or clinical products.",
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
      title: "How to read this page",
      paragraphs: [
        "Material on this site describes intended architecture, focus areas, and engineering craft — not operational fleets, clinical approvals, or commercial availability.",
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

export const roboticsInterfacePageEn: FlagshipBrochureContent = {
  kicker: "SAVEN Core",
  title: "SAVEN Robotics Interface",
  status: "Architecture",
  lede: "The shared interface layer that connects diverse robots and devices to SAVEN — so they can communicate, coordinate common tasks, and stay under human command.",
  body: [
    "SAVEN Robotics Interface is an important part of the SAVEN system architecture: a common communication and control path between SAVEN and the many kinds of robots and devices that may work together.",
    "Different platforms — manipulators, mobile and trolley robots, assistive forms, and sensors — should not become separate islands of control. Through the Robotics Interface they share one control and communication system under SAVEN, so shared and common tasks can be planned, directed, and supervised as coordinated work.",
    "People remain in authority. The Interface keeps missions, limits, and machine state visible so AI and robotics stay tools for human care — not opaque automation.",
    "Capability areas below are possible components of the architecture. None are presented as shipped product modules.",
  ],
  highlights: [
    {
      id: "what",
      title: "What this is",
      text: "A shared interface layer so diverse robots and devices can communicate and coordinate under SAVEN.",
    },
    {
      id: "why",
      title: "Why it matters",
      text: "Common tasks across different machines need one governable communication path — with people still in command.",
    },
    {
      id: "next",
      title: "Scope",
      text: "Architecture for interoperability and oversight — not a commercial control product.",
    },
  ],
  sections: [
    {
      id: "role",
      title: "Role in the SAVEN system",
      paragraphs: [
        "SAVEN sits at the center of analysis, roles, events, and actions. The Robotics Interface is the layer through which executive devices connect — exchanging commands, telemetry, and task context so heterogeneous machines can participate in shared work.",
        "Interoperability is the point: one architecture for many device kinds, so care-oriented physical assistance can grow without inventing a separate stack for every form factor.",
      ],
    },
    {
      id: "devices",
      title: "Device diversity (architecture concepts)",
      paragraphs: [
        "The Interface is designed around classes of executive devices as architecture concepts — not product SKUs or deployment claims:",
      ],
      items: [
        "Manipulators — careful reach, hold, and handoff under visible limits",
        "Mobile and trolley robots — movement through shared spaces with governable paths",
        "Assistive forms — physical support shapes meant to help people beside caregivers",
        "Sensors and perception nodes — context that returns into SAVEN for the next action",
      ],
    },
    {
      id: "components",
      title: "Possible components",
      collapsed: true,
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
    },
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
  note: "Interface work is presented as architecture. It does not claim a commercial control product or deployed operations.",
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
  lede: "A new name for research at SAVEN Core — broader continuous inquiry than classic R&D, exploring advanced robotics, embodied AI, and careful support for human life.",
  body: [
    "Internal Future Lab replaces an outdated understanding of R&D. SAVEN believes classic research-and-development thinking — siloed projects, short cycles, product-shaped pipelines — is not enough for the approach we need: continuous, embodied inquiry into how intelligence might carefully assist people in the physical world.",
    "The Lab looks ahead of near-term systems work: new forms of robotics and manipulators, richer sensing, physical-environment modeling, and human–machine collaboration that could one day ease care in homes, clinics, and everyday places.",
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
      title: "Beyond classic R&D",
      text: "Future Lab is a deliberate new name — continuous inquiry instead of siloed research-and-development framing.",
      icon: "horizon",
    },
    {
      id: "why",
      title: "Why it matters",
      text: "Tomorrow’s physical assistance needs careful exploration before it can serve people with dignity.",
      icon: "care",
    },
    {
      id: "next",
      title: "Status",
      text: "Research. Exploration and architecture — not product or clinical claims.",
      icon: "growth",
    },
  ],
  sections: [
    {
      id: "beyond-rd",
      title: "Why Future Lab, not R&D",
      paragraphs: [
        "Classic R&D often narrows too early — discrete projects aiming at product-shaped outcomes. SAVEN chose Internal Future Lab to name a wider, continuous research environment: experiments, models, and architecture that stay open long enough to ask better questions.",
        "This is not a product factory and not a promise of dates. It is how SAVEN holds inquiry into embodied AI, new sensing, and non-standard engineering while keeping human care as the purpose.",
      ],
    },
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
    { label: "SAVEN Robotics Lab", href: "/labs/saven-robotics-lab/" },
    { label: "Technology", href: "/technology/" },
  ],
};

export const labsHubPageEn: FlagshipBrochureContent = {
  kicker: "SAVEN Core",
  title: "Labs",
  status: "Architecture",
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
        "Primary engineering direction: robotic systems, autonomous mobility, robot control, sensors and machine perception, and human–machine interaction.",
        "Built to support human care in hospitals, at home, and wherever life happens — without claiming operational deployment.",
      ],
    },
    {
      id: "future-lab-overview",
      title: "Internal Future Lab",
      paragraphs: [
        "Research environment (Research status) — a deliberate new name beyond classic R&D: advanced robotics forms, embodied AI, autonomous decision-making, new sensing, physical-environment modeling, and non-standard engineering concepts.",
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
  status: "Architecture",
  lede: "For long-term partners who value disciplined engineering for intelligent systems in the physical world — with human care as the enduring purpose.",
  body: [
    "SAVEN Core uses and advances AI alongside robotics, autonomous systems, and engineering technologies meant to operate in real environments.",
    "Investor conversations follow architecture, responsibility, staged evidence, and multi-domain optionality — not invented traction metrics, valuations, or promised returns.",
  ],
  listHeading: "What we share publicly",
  items: [
    "Company direction: Intelligence for the Physical World",
    "Flagship workstreams: Robotics Lab, Robotics Interface, Future Lab",
    "Engineering depth available for those who want it",
    "Trust and human oversight as structural requirements",
    "Human-care purpose that anchors systems ambition",
  ],
  highlights: [
    {
      id: "potential",
      icon: "potential",
      title: "Systems potential",
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
      text: "Patient capital for durable systems where lasting human needs meet disciplined engineering — not return promises.",
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
        "SAVEN Core seeks partners who understand long-horizon systems building: patient capital, clear governance, and honesty about scope and non-claims.",
        "We do not publish funding rounds, valuations, revenue figures, or return forecasts on this site. Those topics belong in appropriate private materials when authorized — never as public performance claims.",
      ],
    },
    {
      id: "perspectives",
      title: "Perspectives",
      paragraphs: [
        "Public visitors see an engineering and technology showcase: what we are building and why human oversight is non-negotiable.",
        "Digging investors can follow Layer-2 depth — Technology, Systems, Labs, and Trust — without treating the site as a product brochure or an offer to sell securities.",
      ],
    },
    {
      id: "potential",
      title: "Systems potential",
      paragraphs: [
        "The opportunity is structural: a coherent stack spanning human understanding, AI, robotics, and physical assistance across multiple care and life domains.",
        "Multi-domain optionality matters because the same disciplined foundations — perception, control, interfaces, trust — can support hospitals, homes, and everyday settings without inventing separate product myths for each.",
      ],
    },
    {
      id: "progress",
      title: "Systems progress",
      paragraphs: [
        "What we can point to publicly is architecture and systems progress under approved public framing: Research and Architecture across flagship workstreams.",
        "Milestones mean clearer scopes, published Lab and Interface paths, Trust requirements, and engineering depth for those who choose it — not financial results, customer counts, or deployment claims.",
      ],
    },
    {
      id: "human-benefit",
      title: "Human benefit",
      paragraphs: [
        "The enduring purpose is Turning Intelligence Into Human Care: systems that help people where life is demanding — care teams, families, and individuals across ages and stages of life.",
        "Human benefit is the reason the engineering exists. Public pages describe that intent carefully; they do not claim clinical outcomes, partner programs, or operational service.",
      ],
    },
    {
      id: "value-creation",
      title: "Long-term value creation",
      paragraphs: [
        "In categories where durable systems serve lasting human needs, responsible growth and systems depth can create meaningful long-term value for mission-aligned capital.",
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
        "Human-care purpose that anchors systems ambition",
      ],
    },
  ],
  note: "This page is structural information only. It is not an offer to sell securities. For conversation, use Investor Contact or Contact at info@savencore.com.",
  related: [
    { label: "Home", href: "/" },
    { label: "SAVEN Robotics Lab", href: "/labs/saven-robotics-lab/" },
    { label: "About", href: "/foundation/" },
    { label: "Contact", href: "/contact/" },
    { label: "Investor Contact", href: "/investors/contact/" },
  ],
};

export const investorsContactPageEn: FlagshipBrochureContent = {
  kicker: "SAVEN Core",
  title: "Investor Contact",
  status: "Architecture",
  lede: "Investor conversations start the same way every conversation with SAVEN Core starts — through Contact. There is no separate investor portal, data room, or scheduling system on this site.",
  body: [
    "Write to info@savencore.com with “Investor inquiry” in the subject line, or use the Contact form and note that context in your message. Investor conversations are read from that same public address.",
    "For structural context before writing — investment posture, foundation sequence, and what we are building under Architecture — see the Investors overview.",
  ],
  listHeading: "Continue",
  items: [
    "Contact — start a conversation and mention Investor inquiry in the subject",
    "Investors — structural overview and public posture",
  ],
  note: "This page is structural information only. It is not an offer to sell securities. Deeper materials, if any, are shared only through authorized direct conversation at info@savencore.com.",
  related: [
    { label: "Contact", href: "/contact/" },
    { label: "Investors", href: "/investors/" },
  ],
};

export const securityIssuePageEn: FlagshipBrochureContent = {
  kicker: "SAVEN Core",
  title: "Report a Security Issue",
  status: "Architecture",
  lede: "If you believe you have found a security issue affecting SAVEN Core, tell us directly. Reports go through the same authorized Contact channel as every other conversation.",
  body: [
    "Email info@savencore.com with “Security issue” in the subject line. Describe what you found, how to reproduce it, and any evidence you can share responsibly. We read reports carefully and respond when we can.",
    "Please do not include exploit code or sensitive personal or medical information in your initial message. Do not test against production systems in ways that could disrupt service for other people.",
    "SAVEN Core does not currently operate a paid bug bounty program. This page does not create a legal safe-harbor commitment; it describes the honest reporting channel available today.",
  ],
  listHeading: "Continue",
  items: [
    "Contact — general conversation channel",
    "Trust · Security — how security fits the SAVEN Core approach",
    "Legal · Security — structural security policy (draft, pending legal review)",
  ],
  note: "Reports are read by the SAVEN Core team at info@savencore.com. This page does not claim a dedicated security team, bounty rewards, or guaranteed response times.",
  related: [
    { label: "Contact", href: "/contact/" },
    { label: "Trust · Security", href: "/trust/security/" },
    { label: "Legal · Security", href: "/legal/security/" },
  ],
};

export const roadmapPageEn: FlagshipBrochureContent = {
  kicker: "SAVEN Core",
  title: "Direction",
  status: "Architecture",
  lede: "SAVEN Core moves through three broad horizons rather than a fixed calendar. This page describes the shape of that direction — not delivery dates, product launches, or guarantees.",
  body: [
    "Work advances through Research and Architecture at once across Labs and Systems — one workstream can sit in an earlier horizon while a related one moves ahead. Labels describe structure and scope, not commercial availability.",
    "This is a directional summary, not a dated roadmap. It will be updated as work matures; updates do not imply a commitment, offer, or availability claim.",
  ],
  listHeading: "Continue",
  items: [
    "SAVEN Robotics Lab — engineering direction for assistive robotic systems",
    "SAVEN Robotics Interface — shared communication and control workstream",
    "Research — open questions that inform architecture and Labs",
    "Contact — ask a direct question about current status",
  ],
  sections: [
    {
      id: "research",
      title: "Research",
      paragraphs: [
        "Early-stage exploration: understanding human needs, surveying approaches, and testing concepts before any architecture commitment is made.",
      ],
    },
    {
      id: "architecture",
      title: "Architecture",
      paragraphs: [
        "Shared structure taking shape: the systems, standards, and interfaces that let separate workstreams connect and stay coherent as they grow.",
      ],
    },
    {
      id: "systems-craft",
      title: "Systems craft",
      paragraphs: [
        "Where architecture becomes concrete systems craft — structure, interfaces, and engineering practice presented without commercial-availability claims.",
      ],
    },
  ],
  note: "This roadmap describes directional horizons and may change. It is not a guarantee of delivery, performance, availability, or regulatory approval.",
  related: [
    { label: "Labs", href: "/labs/" },
    { label: "SAVEN Robotics Interface", href: "/systems/saven-robotics-interface/" },
    { label: "Research Applications", href: "/applications/research-applications/" },
    { label: "Contact", href: "/contact/" },
  ],
};
