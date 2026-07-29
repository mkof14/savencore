/**
 * Investors premium page — English canonical (D-0246).
 * Framing inspired by BioMath Core investors structure; claims rewritten for SAVEN Core.
 * No invented metrics, rounds, valuations, returns, customers, or Operational products.
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
  disclaimer: string;
  explore: {
    heading: string;
    links: readonly InvestorsLink[];
  };
};

export const investorsPageContentEn: InvestorsPageContent = {
  metaTitle: "Investors",
  metaDescription:
    "Long-term capital posture for SAVEN Core — intelligent systems for the physical world, human care as purpose. Architecture and In Development honesty. Not an offer to sell securities.",
  label: "Investors",
  status: "In Development",
  hero: {
    title: "Patient capital for intelligence that serves human life",
    lede: "SAVEN Core builds intelligent systems for the physical world — so people can be helped in hospitals, at home, and wherever life happens.",
    support:
      "This page describes investment posture, foundation sequence, and what we are building under Architecture and In Development. It does not publish rounds, valuations, revenue, or promised returns.",
    primaryCta: {
      label: "Investor Contact",
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
      "The opportunity is structural: a coherent stack spanning human understanding, BioMath Core clarity, SAVEN orchestration, and physical assistance — with trust and human oversight as requirements, not afterthoughts.",
      "We seek mission-aligned partners who understand long-horizon systems building: patient capital, clear governance, and honesty about development status.",
    ],
    points: [
      {
        id: "physical-world",
        title: "Physical-world intelligence",
        text: "Systems meant to operate beside people — perception, control, interfaces, and assistive action under visible human authority.",
      },
      {
        id: "human-care",
        title: "Human care as purpose",
        text: "Turning Intelligence Into Human Care anchors ambition: ease burdens for care teams, families, and people across ages and stages of life.",
      },
      {
        id: "disciplined",
        title: "Architecture before spectacle",
        text: "What we are building is discussed through craft, responsibility, and staged evidence — never invented growth metrics or return promises.",
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
        text: "Where health data becomes daily clarity — modeling and interpretation as Architecture / In Development.",
      },
      {
        id: "saven",
        title: "SAVEN",
        text: "Orchestration from understanding toward next-level actions under human control.",
      },
      {
        id: "saven-core",
        title: "SAVEN Core",
        text: "The company and public engineering showcase for intelligent systems in the physical world.",
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
        status: "In Development",
        text: "Primary engineering direction for assistive robotic systems: mobility, manipulators, perception, and human–machine interaction.",
        href: "/labs/saven-robotics-lab/",
      },
      {
        id: "interface",
        title: "SAVEN Robotics Interface",
        status: "In Development",
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
        status: "Architecture · In Development",
        text: "Human-data clarity bridge: reports and conclusions that can inform SAVEN next-level actions — not diagnosis, prescription, or Operational e-commerce.",
        href: "/foundation/biomath-core/",
      },
      {
        id: "trust",
        title: "Trust & oversight",
        status: "Architecture",
        text: "Privacy, security, safety, and human oversight as structural requirements across the stack.",
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
      "Conversations are welcome from mission-aligned capital and partners. How we work together is discussed privately when appropriate — this site is not an offer to sell securities, and it is not a data room or investor portal.",
    audiences: [
      {
        id: "institutional",
        title: "Institutional & long-horizon funds",
        text: "Partners who support durable systems where lasting human needs meet disciplined engineering — with status honesty as a baseline.",
      },
      {
        id: "family",
        title: "Family offices & patient capital",
        text: "Investors who value care-oriented systems that ease real human burdens — and can support multi-year architecture and evidence work.",
      },
      {
        id: "strategic",
        title: "Strategic & operating partners",
        text: "Organizations exploring technology collaboration under clear boundaries — Architecture / In Development framing, not invented deployments.",
      },
      {
        id: "operators",
        title: "Operators & domain experts",
        text: "Founders and operators who can contribute judgment in robotics, AI systems, care contexts, or trust — beyond capital alone.",
      },
    ],
  },
  whyNow: {
    heading: "Why now",
    support:
      "A category thesis — not a market-size claim, valuation story, or timing guarantee.",
    items: [
      {
        id: "need",
        title: "Care demand is real",
        text: "Hospitals, homes, and everyday life need reliable physical assistance with people remaining in authority.",
      },
      {
        id: "stack",
        title: "One coherent stack",
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
        text: "Public status stays Research · Architecture · In Development until later stages are true and authorized.",
      },
    ],
  },
  risk: {
    heading: "Risk & status honesty",
    paragraphs: [
      "All principal systems are in development. Approved public statuses are primarily Research, Architecture, and In Development.",
      "This page does not claim Operational products, hospital deployments, regulator approvals, customers, partners, patents, fundraising amounts, or financial performance.",
      "It is structural information only — not investment advice and not an offer to sell securities. Deeper materials, if any, are shared only through authorized direct conversation.",
    ],
  },
  cta: {
    heading: "Continue the conversation",
    support:
      "Write with “Investor inquiry” in the subject line via Investor Contact or Contact. Public address: info@savencore.com.",
    primaryCta: {
      label: "Investor Contact",
      href: "/investors/contact/",
    },
    secondaryCta: {
      label: "Open Contact",
      href: "/contact/",
    },
  },
  disclaimer:
    "© 2026 SAVEN Core. All rights reserved. This page is not an offer to sell securities. Sign In/Up provides authorized access when credentials are configured — not a full investor portal.",
  explore: {
    heading: "Continue exploring",
    links: [
      { label: "BioMath Core", href: "/foundation/biomath-core/" },
      { label: "SAVEN Robotics Lab", href: "/labs/saven-robotics-lab/" },
      { label: "Roadmap Direction", href: "/roadmap/" },
      { label: "Trust", href: "/trust/" },
      { label: "About", href: "/foundation/" },
      { label: "FAQ", href: "/faq/" },
    ],
  },
};
