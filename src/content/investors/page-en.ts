/**
 * Investors premium page — English canonical (D-0246 / D-0248).
 * Framing inspired by BioMath Core investors structure; claims rewritten for SAVEN Core.
 * No invented metrics, rounds, valuations, returns, customers, or Operational products.
 * Ban list: Platform, ecosystem, and marketing buzzwords (synergy, leverage, disrupt, etc.).
 */

export const INVESTORS_PAGE_HREF = "/investors/" as const;

export type InvestorsLink = {
  label: string;
  href: string;
};

export type InvestorsCard = {
  id: string;
  title: string;
  text: string;
  status?: string;
  href?: string;
};

export type InvestorsPageContent = {
  metaTitle: string;
  metaDescription: string;
  label: string;
  status: string;
  hero: {
    title: string;
    lede: string;
    support: string;
    primaryCta: InvestorsLink;
    secondaryCta: InvestorsLink;
  };
  thesis: {
    heading: string;
    paragraphs: readonly string[];
    points: readonly { id: string; title: string; text: string }[];
  };
  sequence: {
    heading: string;
    support: string;
    steps: readonly { id: string; title: string; text: string }[];
  };
  building: {
    heading: string;
    support: string;
    items: readonly InvestorsCard[];
  };
  capital: {
    heading: string;
    support: string;
    categories: readonly { id: string; title: string; text: string }[];
  };
  engage: {
    heading: string;
    support: string;
    audiences: readonly { id: string; title: string; text: string }[];
  };
  whyNow: {
    heading: string;
    support: string;
    items: readonly { id: string; title: string; text: string }[];
  };
  risk: {
    heading: string;
    paragraphs: readonly string[];
  };
  cta: {
    heading: string;
    support: string;
    primaryCta: InvestorsLink;
    secondaryCta: InvestorsLink;
  };
  explore: {
    heading: string;
    links: readonly InvestorsLink[];
  };
};

export const investorsPageContentEn: InvestorsPageContent = {
  metaTitle: "Investors",
  metaDescription:
    "Why SAVEN: human-assistance intelligence for robotics across compatible systems. Long-horizon capital posture — not an offer to sell securities.",
  label: "Investors",
  status: "Architecture",
  hero: {
    title: "Why SAVEN",
    lede: "Robotics is moving closer to people. The challenge is no longer only making robots capable of movement — it is making physical assistance useful, adaptable, understandable, and appropriate for real human environments.",
    support:
      "This page describes investment posture, the foundation sequence, and what we are building under Architecture framing. It does not publish rounds, valuations, revenue, or promised returns.",
    primaryCta: {
      label: "Investor Inquiries",
      href: "/investors/contact/",
    },
    secondaryCta: {
      label: "Contact",
      href: "/contact/",
    },
  },
  thesis: {
    heading: "Investment thesis",
    paragraphs: [
      "Intelligent systems built to support human life. AI and robotics are tools — not the purpose. Human support is primary.",
      "The work is structural: a continuous path from human understanding and BioMath Core clarity, through SAVEN orchestration, to physical assistance — with trust and human oversight as requirements, not afterthoughts.",
      "We seek partners who understand long-horizon systems work: patient capital, clear governance, and honesty about scope.",
    ],
    points: [
      {
        id: "physical-world",
        title: "Persistent need for physical assistance",
        text: "Mobility, aging, rehabilitation, labor constraints, and independent living create lasting demand for physical assistance.",
      },
      {
        id: "human-care",
        title: "Human-assistance intelligence layer",
        text: "SAVEN focuses on the human-assistance intelligence and integration layer designed to work across compatible robotic systems.",
      },
      {
        id: "disciplined",
        title: "Reusable assistance across systems",
        text: "A reusable assistance layer is intended to support multiple robotic systems and application categories — with human-care contexts first, and other domains as extensions.",
      },
      {
        id: "hardware",
        title: "Fragmented hardware market",
        text: "Multiple robot architectures are emerging. SAVEN can work with robotics manufacturers instead of competing with every hardware company.",
      },
      {
        id: "robotics-advancing",
        title: "Robotics is advancing",
        text: "Robotic hardware, sensing, AI, and control systems are improving. Human assistance still requires technology beyond mechanical movement.",
      },
    ],
  },
  sequence: {
    heading: "Foundation sequence",
    support:
      "A continuous line of meaning — not unrelated products. Each step deepens the same purpose.",
    steps: [
      {
        id: "biomath-life",
        title: "BioMath Life",
        text: "Living orientation toward understanding human signals and everyday clarity.",
      },
      {
        id: "biomath-core",
        title: "BioMath Core",
        text: "Specialized analysis and reports that may use or contribute to Human Data — Architecture scope, not a replacement for the Human Data Model.",
      },
      {
        id: "saven",
        title: "SAVEN",
        text: "Orchestration from understanding toward assistance through connected systems under human control.",
      },
      {
        id: "saven-core",
        title: "SAVEN Core",
        text: "The public brand and engineering showcase for intelligent systems in the physical world.",
      },
    ],
  },
  building: {
    heading: "What we are building",
    support:
      "Public material describes intended architecture and active engineering — not operational fleets, clinical products, or commercial availability.",
    items: [
      {
        id: "robotics-lab",
        title: "SAVEN Robotics Lab",
        status: "Architecture",
        text: "Primary engineering direction for assistive robotic systems: mobility, manipulators, perception, and human–machine interaction.",
        href: "/labs/saven-robotics-lab/",
      },
      {
        id: "interface",
        title: "SAVEN Robotics Interface",
        status: "Architecture",
        text: "Shared communication and control path so diverse robots and devices can coordinate under human command.",
        href: "/systems/saven-robotics-interface/",
      },
      {
        id: "future-lab",
        title: "Internal Future Lab",
        status: "Research",
        text: "Forward research on advanced robotics forms, embodied intelligence, sensing, and non-standard engineering concepts.",
        href: "/labs/internal-future-lab/",
      },
      {
        id: "biomath",
        title: "BioMath Core",
        status: "Architecture",
        text: "Reports and conclusions that may inform SAVEN assistance architecture — not diagnosis, prescription, or Operational e-commerce.",
        href: "/foundation/biomath-core/",
      },
      {
        id: "trust",
        title: "Trust & oversight",
        status: "Architecture",
        text: "Privacy, security, safety, and human oversight as structural requirements across the work.",
        href: "/trust/",
      },
    ],
  },
  capital: {
    heading: "Capital use (direction)",
    support:
      "High-level categories only. No amounts, runway figures, or allocation percentages are published on this site.",
    categories: [
      {
        id: "engineering",
        title: "Core engineering",
        text: "Robotics Lab, Interface, perception and control foundations, and systems architecture that make physical assistance governable.",
      },
      {
        id: "intelligence",
        title: "Intelligence & modeling",
        text: "Human understanding paths — including BioMath Core modeling and decision-support architecture — kept as tools under human authority.",
      },
      {
        id: "trust-research",
        title: "Trust, research & responsibility",
        text: "Security and privacy posture, Responsible AI structure, and Research directions that keep claims honest and limits visible.",
      },
      {
        id: "systems-craft",
        title: "Systems craft",
        text: "Long-horizon engineering across Labs, Systems, and Technology — staged evidence before growth stories.",
      },
    ],
  },
  engage: {
    heading: "How we engage",
    support:
      "Conversations are welcome from long-horizon capital and partners. How we work together is discussed privately when appropriate — this site is not an offer to sell securities, and it is not a data room or investor portal.",
    audiences: [
      {
        id: "institutional",
        title: "Institutional & long-horizon funds",
        text: "Partners who support durable systems where lasting human needs meet disciplined engineering — with clear scope as a baseline.",
      },
      {
        id: "family",
        title: "Family offices & patient capital",
        text: "Investors who value care-oriented systems that ease real human burdens — and can support multi-year architecture and evidence work.",
      },
      {
        id: "strategic",
        title: "Strategic & operating partners",
        text: "Organizations exploring technology collaboration under clear boundaries — Architecture framing, not invented deployments.",
      },
      {
        id: "operators",
        title: "Operators & domain experts",
        text: "Founders and operators who can contribute judgment in robotics, AI systems, care contexts, or trust — beyond capital alone.",
      },
    ],
  },
  whyNow: {
    heading: "Timing context",
    support:
      "Category context — not a market-size claim, valuation story, or timing guarantee.",
    items: [
      {
        id: "need",
        title: "Care demand is real",
        text: "Hospitals, homes, and everyday life need reliable physical assistance with people remaining in authority.",
      },
      {
        id: "stack",
        title: "One continuous path",
        text: "Understanding → orchestration → physical action is harder as separate islands; SAVEN Core builds for continuity.",
      },
      {
        id: "trust",
        title: "Trust belongs in the architecture",
        text: "Explainability, oversight, privacy, and safety are engineering requirements for anything that acts beside people.",
      },
      {
        id: "honesty",
        title: "Build without hype",
        text: "Public status stays Research · Architecture until later stages are true and authorized.",
      },
    ],
  },
  risk: {
    heading: "Risk & status honesty",
    paragraphs: [
      "Public materials describe intended architecture and scope. Approved public labels are primarily Research and Architecture.",
      "This page does not claim Operational products, hospital deployments, regulator approvals, customers, partners, patents, fundraising amounts, or financial performance.",
      "It is structural information only — not investment advice and not an offer to sell securities. Deeper materials, if any, are shared only through authorized direct conversation.",
    ],
  },
  cta: {
    heading: "Continue the conversation",
    support:
      "Write to info@savencore.com with “Investor inquiry” in the subject line, or use Investor Contact or Contact and note that context. Same public address either way.",
    primaryCta: {
      label: "Investor Contact",
      href: "/investors/contact/",
    },
    secondaryCta: {
      label: "Contact",
      href: "/contact/",
    },
  },
  explore: {
    heading: "Continue exploring",
    links: [
      { label: "BioMath Core", href: "/foundation/biomath-core/" },
      { label: "SAVEN Robotics Lab", href: "/labs/saven-robotics-lab/" },
      { label: "Roadmap Direction", href: "/roadmap/" },
      { label: "Trust", href: "/trust/" },
      { label: "About", href: "/foundation/" },
      { label: "Business", href: "/business/" },
      { label: "Partners", href: "/partners/" },
      { label: "FAQ", href: "/faq/" },
    ],
  },
};
