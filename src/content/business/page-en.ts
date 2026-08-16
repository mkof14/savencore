/**
 * Business page — English canonical (D-0284 / D-0286 / D-0287 / D-0291).
 * Hub + seven short section leaves. MarketsandMarkets figures describe global
 * digital health only — not SAVEN market size.
 * No TAM/SAM/SOM, revenue forecasts, pricing, or fundraising copy.
 */

export const BUSINESS_PAGE_HREF = "/business/" as const;

export type BusinessLink = {
  label: string;
  href: string;
};

export type BusinessPoint = {
  id: string;
  title: string;
  text: string;
};

export type BusinessChainStep = {
  id: string;
  label: string;
  note?: string;
};

export type BusinessFlowStage = {
  id: string;
  eyebrow: string;
  title: string;
  providesLabel: string;
  items: readonly string[];
};

export type BusinessFlowRelation = {
  id: string;
  from: string;
  to: string;
  activity: string;
};

import type { BusinessSectionId } from "@/content/business/sections";

export type BusinessNavItem = {
  id: BusinessSectionId;
  label: string;
};

export type BusinessPageContent = {
  metaTitle: string;
  metaDescription: string;
  label: string;
  status: string;
  navLabel: string;
  mobileNavLabel: string;
  backLabel: string;
  hub: {
    openLabel: string;
  };
  nav: readonly BusinessNavItem[];
  hero: {
    title: string;
    lede: string;
  };
  marketContext: {
    id: string;
    heading: string;
    paragraphs: readonly string[];
    disclaimer: string;
    fromLabel: string;
    fromValue: string;
    toLabel: string;
    toValue: string;
    cagrLabel: string;
    cagrValue: string;
    sourceMarker: string;
    changesHeading: string;
    changes: readonly string[];
    points: readonly BusinessPoint[];
    northAmerica?: {
      label: string;
      value: string;
    };
  };
  humanData: {
    id: string;
    heading: string;
    lead: string;
    historicLabel: string;
    historic: readonly string[];
    connectedLabel: string;
    connected: readonly string[];
    continuityLines: readonly string[];
    closing: string;
  };
  systems: {
    id: string;
    heading: string;
    paragraphs: readonly string[];
    chain: readonly BusinessChainStep[];
    chainNote: string;
    hardware: {
      heading: string;
      paragraphs: readonly string[];
      dependsLabel: string;
      depends: readonly string[];
      closing: string;
    };
  };
  value: {
    id: string;
    heading: string;
    layersHeading: string;
    layers: readonly {
      id: string;
      title: string;
      items: readonly string[];
    }[];
    groupsHeading: string;
    groups: readonly BusinessPoint[];
    flow: {
      heading: string;
      stages: readonly BusinessFlowStage[];
      relationsHeading: string;
      relations: readonly BusinessFlowRelation[];
      note: string;
    };
    machine: {
      heading: string;
      lines: readonly string[];
      paragraph: string;
    };
    structuresNote: string;
  };
  applications: {
    id: string;
    heading: string;
    rehab: {
      heading: string;
      paragraphs: readonly string[];
    };
    home: {
      heading: string;
      paragraphs: readonly string[];
      examples: readonly string[];
    };
    beyond: {
      heading: string;
      items: readonly string[];
    };
    exploreLabel: string;
    exploreHref: string;
  };
  timing: {
    id: string;
    heading: string;
    points: readonly BusinessPoint[];
    closing: string;
  };
  today: {
    id: string;
    heading: string;
    paragraphs: readonly string[];
  };
  sources: {
    heading: string;
    items: readonly string[];
  };
  explore: {
    heading: string;
    links: readonly BusinessLink[];
  };
};

export const businessPageContentEn: BusinessPageContent = {
  metaTitle: "Business",
  metaDescription:
    "Why SAVEN can become economically important: continuous Human Data, connected assistance, and changes already underway in digital health, rehabilitation, and home environments.",
  label: "Business",
  status: "Architecture",
  navLabel: "Business",
  mobileNavLabel: "Business Sections",
  backLabel: "Back to Business",
  hub: {
    openLabel: "Open",
  },
  nav: [
    { id: "market-context", label: "Market Context" },
    { id: "human-data", label: "Human Data" },
    { id: "saven-physical-systems", label: "SAVEN & Physical Systems" },
    { id: "where-value-is-created", label: "Where Value Is Created" },
    { id: "applications", label: "Applications" },
    { id: "why-the-timing-matters", label: "Why the Timing Matters" },
    { id: "what-we-know-today", label: "What We Know Today" },
  ],
  hero: {
    title: "Business",
    lede: "Why SAVEN can become economically important — and why the timing is becoming relevant.",
  },
  marketContext: {
    id: "market-context",
    heading: "Market Context",
    paragraphs: [
      "Digital systems increasingly know more about the person. Wearables and sensors produce continuous information. AI can process more context. Healthcare and rehabilitation increasingly extend outside traditional facilities. Connected devices are becoming more capable. Robotics is moving into human environments.",
      "SAVEN exists where structured Human Data can connect with appropriate physical assistance — under human control, system limits, and safety requirements.",
    ],
    disclaimer:
      "These figures describe the global digital health market, not SAVEN’s market size.",
    fromLabel: "2024",
    fromValue: "$162.1B",
    toLabel: "2030 (projected)",
    toValue: "$573.53B",
    cagrLabel: "CAGR",
    cagrValue: "23.6%",
    sourceMarker:
      "MarketsandMarkets, Digital Health Market — Global Forecast to 2030",
    changesHeading: "Relevant market changes",
    changes: [
      "Aging population",
      "Chronic conditions",
      "Patient-centered care",
      "Wearables",
      "AI",
      "Sensors",
      "Connectivity",
      "Personalized health",
      "Outpatient care",
      "Home-based care",
      "Remote monitoring",
    ],
    points: [
      {
        id: "need",
        title: "Human Need",
        text: "Aging populations and long-term conditions increase demand for ongoing support — not only episodic clinic visits.",
      },
      {
        id: "devices",
        title: "Connected Devices",
        text: "Wearables, sensors, and remote monitoring create continuous streams of information outside institutional walls.",
      },
      {
        id: "settings",
        title: "Care Beyond Institutions",
        text: "Outpatient, home-based, and continuous-care models move more activity into everyday environments.",
      },
    ],
    northAmerica: {
      label: "North America share of global digital health (2024)",
      value: "43.4%",
    },
  },
  humanData: {
    id: "human-data",
    heading: "Human Data",
    lead: "Human Data is no longer created only during an appointment.",
    historicLabel: "Historically captured through",
    historic: [
      "Appointments",
      "Tests",
      "Isolated measurements",
      "Records",
    ],
    connectedLabel: "Connected systems increasingly add",
    connected: [
      "Movement",
      "Activity",
      "Sleep",
      "Heart-related measurements",
      "Glucose",
      "Blood pressure",
      "Sensor data",
      "Other authorized daily information",
    ],
    continuityLines: [
      "A device can be replaced.",
      "A sensor can be replaced.",
      "A robotic system can be replaced.",
      "A software application can change.",
      "The person’s information, history, relationships, and context continue to accumulate.",
    ],
    closing:
      "The Human Data Model matters because it preserves continuity around the person rather than around the lifecycle of one device.",
  },
  systems: {
    id: "saven-physical-systems",
    heading: "SAVEN & Physical Systems",
    paragraphs: [
      "Information gains value when it can inform appropriate assistance — not when it remains trapped in disconnected systems.",
      "SAVEN follows a path from structured human information toward connected physical systems under human control. Digital health is only part of that environment; robotics, physical assistance, and human–machine interaction also matter.",
    ],
    chain: [
      { id: "human-data", label: "Human Data" },
      { id: "hdm", label: "Human Data Model" },
      {
        id: "understanding",
        label: "Understanding / Analysis",
        note: "BioMath Core — where health-related analysis is relevant",
      },
      { id: "saven", label: "SAVEN" },
      { id: "systems", label: "Appropriate Connected Systems" },
      { id: "assistance", label: "Human Assistance" },
    ],
    chainNote:
      "BioMath Core is specialized health-related analysis where relevant. It is not required for every SAVEN application and does not automatically issue medical decisions or robot commands.",
    hardware: {
      heading: "Hardware-Flexible",
      paragraphs: [
        "SAVEN is not tied to one physical system. Different applications may require different devices or robotic systems.",
      ],
      dependsLabel: "Actual compatibility depends on",
      depends: [
        "Platform",
        "Interfaces",
        "Sensors",
        "Controls",
        "Safety requirements",
        "Intended application",
      ],
      closing: "Engineering and validation are still required.",
    },
  },
  value: {
    id: "where-value-is-created",
    heading: "Where Value Is Created",
    layersHeading: "Before use, during use, and over time",
    layers: [
      {
        id: "before",
        title: "Before Use",
        items: [
          "Development",
          "Integration",
          "Technical adaptation",
          "Testing",
          "Pilot work",
        ],
      },
      {
        id: "during",
        title: "During Use",
        items: [
          "Software",
          "SAVEN functions",
          "Configuration",
          "Services",
          "Support",
        ],
      },
      {
        id: "over-time",
        title: "Over Time",
        items: [
          "Human Data Model continuity",
          "Relevant SAVEN services",
          "Use across compatible physical systems as systems change",
        ],
      },
    ],
    groupsHeading: "Who can participate",
    groups: [
      {
        id: "robotics",
        title: "Robotics / Device Companies",
        text: "Physical systems, technical integration, development.",
      },
      {
        id: "organizations",
        title: "Organizations",
        text: "Relevant SAVEN-enabled applications, software, integration, support.",
      },
      {
        id: "individuals",
        title: "Individuals",
        text: "Future personal SAVEN functions and services through compatible systems.",
      },
      {
        id: "specialized",
        title: "Specialized Services",
        text: "BioMath Core or other relevant specialized capabilities where appropriate.",
      },
    ],
    flow: {
      heading: "How value can move through an integrated system",
      stages: [
        {
          id: "physical",
          eyebrow: "Physical system",
          title: "Robotics / Device Company",
          providesLabel: "Provides",
          items: ["Hardware", "Sensors", "Mechanical capabilities", "Device controls"],
        },
        {
          id: "saven",
          eyebrow: "SAVEN",
          title: "SAVEN",
          providesLabel: "Provides",
          items: [
            "Human Data Model",
            "Software",
            "Integration",
            "Interaction",
            "Application-specific SAVEN functions",
          ],
        },
        {
          id: "use",
          eyebrow: "Use",
          title: "Organization or Individual",
          providesLabel: "Uses",
          items: ["The integrated system for an approved application"],
        },
      ],
      relationsHeading: "Potential economic relationships",
      relations: [
        {
          id: "partner-to-saven",
          from: "Partner",
          to: "SAVEN",
          activity: "Development / Integration",
        },
        {
          id: "org-to-saven",
          from: "Organization",
          to: "SAVEN",
          activity: "Software / Services / Support",
        },
        {
          id: "individual-to-saven",
          from: "Individual",
          to: "SAVEN",
          activity: "Future personal services",
        },
        {
          id: "saven-to-external",
          from: "SAVEN",
          to: "External Providers",
          activity: "Infrastructure / AI / third-party technology",
        },
      ],
      note: "Commercial structure will vary by application and partner.",
    },
    machine: {
      heading: "The Machine Is Not the Entire Business",
      lines: [
        "Robots will change.",
        "Manufacturers will change.",
        "Hardware generations will change.",
        "The person remains.",
      ],
      paragraph:
        "The Human Data Model provides continuity around the person while compatible physical systems can change over time.",
    },
    structuresNote:
      "Different applications may require different commercial arrangements. Pricing and contracts are defined separately for specific applications.",
  },
  applications: {
    id: "applications",
    heading: "Applications",
    rehab: {
      heading: "Rehabilitation & Recovery",
      paragraphs: [
        "Rehabilitation connects Human Data with repeated movement, observation, guidance, and physical interaction.",
        "The digital health report recognizes Rehabilitation & Recovery as a use case. That is architecture direction — not a claim of treatment outcomes.",
      ],
    },
    home: {
      heading: "Home & Independent Living",
      paragraphs: [
        "More monitoring, recovery, and daily support are happening outside hospitals and clinics. For SAVEN, home is broader than medicine alone.",
      ],
      examples: [
        "Getting up",
        "Walking",
        "Exercise",
        "Recovery support",
        "Carrying or retrieving objects",
        "Routines",
        "Connected devices",
        "Communication",
        "Remaining independent",
      ],
    },
    beyond: {
      heading: "Beyond Digital Health",
      items: [
        "Robotics",
        "Physical assistance",
        "Human–machine interaction",
        "Connected environments",
        "Everyday activities",
      ],
    },
    exploreLabel: "Explore Applications",
    exploreHref: "/applications/",
  },
  timing: {
    id: "why-the-timing-matters",
    heading: "Why the Timing Matters",
    points: [
      {
        id: "more-data",
        title: "More Human Data",
        text: "Connected devices produce information continuously.",
      },
      {
        id: "analysis",
        title: "Better Analysis",
        text: "AI and data processing can handle more complex information.",
      },
      {
        id: "sensors",
        title: "Better Sensors",
        text: "Physical systems can understand more about people and surroundings.",
      },
      {
        id: "connectivity",
        title: "Better Connectivity",
        text: "Devices and software exchange information more effectively.",
      },
      {
        id: "robotics",
        title: "More Capable Robotics",
        text: "Physical systems continue to improve.",
      },
      {
        id: "outside",
        title: "More Activity Outside Institutions",
        text: "Monitoring, rehabilitation, and care increasingly extend into everyday environments.",
      },
    ],
    closing:
      "SAVEN depends on these capabilities becoming sufficiently useful together. That is increasingly happening now.",
  },
  today: {
    id: "what-we-know-today",
    heading: "What We Know Today",
    paragraphs: [
      "The available market evidence does not establish SAVEN’s future revenue or market share. It does establish that several technologies, use cases, institutions, and spending categories relevant to SAVEN are already substantial and growing.",
      "The remaining business task is to convert defined SAVEN applications into demonstrated, repeatable use.",
      "That is the point where technical progress begins to become measurable business activity.",
    ],
  },
  sources: {
    heading: "Sources & Market Data",
    items: [
      "MarketsandMarkets — Digital Health Market, Global Forecast to 2030, September 2025.",
    ],
  },
  explore: {
    heading: "Continue Exploring",
    links: [
      { label: "Human Data Model", href: "/technology/human-data-model/" },
      { label: "BioMath Core", href: "/foundation/biomath-core/" },
      { label: "Technology", href: "/technology/" },
      { label: "Applications", href: "/applications/" },
      { label: "SAVEN Robotics Lab", href: "/labs/saven-robotics-lab/" },
      { label: "Investors", href: "/investors/" },
      { label: "Partners", href: "/partners/" },
    ],
  },
};
