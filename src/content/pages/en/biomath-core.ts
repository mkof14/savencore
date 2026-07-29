import type { PageMetadata } from "@/components/engineering/engineering-types";
import {
  BIOMATH_CORE_CATEGORY_COUNT,
  BIOMATH_CORE_SERVICES_LABEL,
  biomathCoreCategoriesEn,
  type BioMathCoreCategoryId,
} from "@/content/biomath-core/scope";

/**
 * BioMath Core leaf page — D-0228 / D-0229 / D-0230 / D-0231 / D-0232.
 * Architecture / In Development model coverage — not an Operational catalog.
 * D-0232: site-native themeable components (not pasted dark screenshots as primary UI).
 */

export type BioMathCoreSequenceStep = {
  id: string;
  label: string;
  emphasis?: boolean;
};

export type BioMathCoreCategoryCard = {
  id: BioMathCoreCategoryId;
  label: string;
  serviceCount: number;
  blurb: string;
};

export type BioMathCorePathLink = {
  label: string;
  href: string;
  note?: string;
};

export type BioMathCoreLivingPoint = {
  id: string;
  body: string;
};

export type BioMathCoreStackLayer = {
  id: string;
  name: string;
  role: string;
  detail: string;
};

export type BioMathCoreRoleSide = {
  name: string;
  title: string;
  verbs: readonly string[];
};

export type BioMathCoreFormulaPart = {
  id: string;
  label: string;
  detail: string;
};

export type BioMathCoreEnvironmentCard = {
  id: string;
  label: string;
  body: string;
};

export type BioMathCoreEnginePhase = {
  id: string;
  label: string;
  body: string;
  tags?: readonly string[];
};

export type BioMathCoreOpinionLane = {
  id: string;
  label: string;
  body: string;
};

export type BioMathCoreDualModelStep = {
  id: string;
  label: string;
  body: string;
};

export type BioMathCoreBlackBoxSide = {
  id: string;
  label: string;
  body: string;
};

export type BioMathCoreOutputPillar = {
  id: string;
  label: string;
  body: string;
};

export type BioMathCorePageContent = {
  metadata: PageMetadata;
  label: string;
  title: string;
  lede: string;
  status: string;
  hero: {
    logoAlt: string;
    visualAlt: string;
  };
  livingModel: {
    heading: string;
    support: string;
    visualLabel: string;
    points: readonly BioMathCoreLivingPoint[];
  };
  layerStack: {
    heading: string;
    support: string;
    layers: readonly BioMathCoreStackLayer[];
    callout: string;
  };
  dualRoles: {
    heading: string;
    support: string;
    biomath: BioMathCoreRoleSide;
    saven: BioMathCoreRoleSide;
    banner: string;
  };
  engine: {
    heading: string;
    support: string;
    phases: readonly BioMathCoreEnginePhase[];
  };
  secondOpinion: {
    heading: string;
    support: string;
    signalLabel: string;
    resultLabel: string;
    lanes: readonly BioMathCoreOpinionLane[];
    dualModelHeading: string;
    dualModelSteps: readonly BioMathCoreDualModelStep[];
    insight: string;
  };
  blackBox: {
    heading: string;
    support: string;
    sides: readonly BioMathCoreBlackBoxSide[];
  };
  output: {
    heading: string;
    support: string;
    pillars: readonly BioMathCoreOutputPillar[];
    footer: string;
  };
  formula: {
    heading: string;
    support: string;
    parts: readonly BioMathCoreFormulaPart[];
    equals: string;
    equalsDetail: string;
  };
  environments: {
    heading: string;
    support: string;
    cards: readonly BioMathCoreEnvironmentCard[];
    footer: string;
  };
  sequence: {
    heading: string;
    support: string;
    steps: readonly BioMathCoreSequenceStep[];
  };
  reportsCallout: {
    eyebrow: string;
    title: string;
    body: string;
    scopeLine: string;
  };
  catalog: {
    heading: string;
    support: string;
  };
  categories: {
    heading: string;
    subtitle: string;
    disclaimer: string;
    cards: readonly BioMathCoreCategoryCard[];
  };
  paths: {
    heading: string;
    support: string;
    links: readonly BioMathCorePathLink[];
  };
  note: string;
};

export const BIOMATH_CORE_PAGE_HREF = "/foundation/biomath-core/" as const;

export const biomathCorePageContent: BioMathCorePageContent = {
  metadata: {
    category: "Foundation",
    documentType: "Knowledge",
    status: "Architecture",
    version: "0.5",
    lastUpdated: "2026-07-29",
    readingTime: "10 min",
    relatedDomain: "Foundation, Human Data Model, SAVEN",
  },
  label: "Foundation",
  title: "BioMath Core",
  lede: "Where health data becomes daily clarity.",
  status: "Architecture",
  hero: {
    logoAlt: "BioMath Core",
    visualAlt:
      "BioMath Core sphere — structured intelligence at the center of the foundation",
  },
  livingModel: {
    heading: "One Human = One Living Model",
    support:
      "A single continuous model of one person — not fragmented profiles reset by each service.",
    visualLabel: "Living human model at the center of continuous context",
    points: [
      {
        id: "over-time",
        body: "What is happening to this human over time, and why?",
      },
      {
        id: "history",
        body: "History never resets; context is maintained across services.",
      },
      {
        id: "recalculate",
        body: "Every new data point recalculates past conclusions.",
      },
    ],
  },
  layerStack: {
    heading: "Four-layer stack",
    support:
      "From philosophy to physical bodies — one governed path. BioMath Core is the brain and context engine.",
    layers: [
      {
        id: "biomath-life",
        name: "BioMath Life",
        role: "Strategy · Philosophy · Standards",
        detail: "Orientation and human-centered priority for everything below.",
      },
      {
        id: "biomath-core",
        name: "BioMath Core",
        role: "Brain · Context Engine",
        detail: "Organizes authorized human context into living model intelligence.",
      },
      {
        id: "saven",
        name: "SAVEN",
        role: "Execution Layer",
        detail: "Turns conclusions into governed actions, control, and verification.",
      },
      {
        id: "body",
        name: "Body Layer",
        role: "Robots · Devices · Humans",
        detail: "Where assistance meets the physical world under human control.",
      },
    ],
    callout:
      "Understanding is useless without execution. BioMath Core thinks — but cannot act alone.",
  },
  dualRoles: {
    heading: "Context and execution — dual roles",
    support:
      "Two interlocking capabilities. Neither replaces the other; both are required for continuous care architecture.",
    biomath: {
      name: "BioMath Core",
      title: "Context Engine",
      verbs: ["Thinks", "Analyzes", "Models"],
    },
    saven: {
      name: "SAVEN",
      title: "Execution Layer",
      verbs: ["Executes", "Controls", "Verifies"],
    },
    banner:
      "SAVEN maintains continuity where traditional systems break down.",
  },
  engine: {
    heading: "Engine — three simulation phases",
    support:
      "Authorized signals enter the core, recalculate the living model, and return structured simulation context — Architecture only, not a live clinical engine.",
    phases: [
      {
        id: "input",
        label: "Input",
        body: "Authorized biometric, behavioral, and history signals enter as structured context — not raw unstructured dumps.",
        tags: [
          "heart_rate_variability",
          "glucose_levels",
          "sleep_cycles",
          "behavioral_patterns",
          "genetic_data",
        ],
      },
      {
        id: "core",
        label: "Core",
        body: "BioMath Core recalculates the living model across categories, history, and cross-domain structure.",
      },
      {
        id: "output",
        label: "Output",
        body: "A governed digital simulation of the person — structured understanding ready for next-level SAVEN actions under human control.",
      },
    ],
  },
  secondOpinion: {
    heading: "The Second Opinion",
    support:
      "Every new signal is read two ways in parallel — local service logic and full-model systemic check — then unified into a verified result. This is architecture for how the system is intended to think, not a clinical product claim.",
    signalLabel: "New Signal",
    resultLabel: "Verified Result",
    lanes: [
      {
        id: "local",
        label: "Opinion A — Local",
        body: "Data analysis directly within a specific service and its specialized logic.",
      },
      {
        id: "systemic",
        label: "Opinion B — Systemic",
        body: "Independent verification by the entire model — history, other areas, and the established human structure.",
      },
    ],
    dualModelHeading: "Dual-model cognitive path",
    dualModelSteps: [
      {
        id: "model-a",
        label: "Model A — Direct Analysis",
        body: "Ingests authorized biometric and behavioral context. Forms the primary local reading.",
      },
      {
        id: "model-b",
        label: "Model B — Structural Validation",
        body: "The second-opinion path. Independently cross-checks conclusions against longitudinal history and structural logic.",
      },
      {
        id: "advisor",
        label: "Unified Conclusion",
        body: "Outputs structured, human-readable adaptive guidance as continuous route architecture — not a static template and not medical advice.",
      },
    ],
    insight:
      "Key insight: the platform is intended to analyze in parallel. This is not a cosmetic software feature — it is the native way the architecture thinks, reducing shallow single-path interpretations.",
  },
  blackBox: {
    heading: "The Black Box Architecture",
    support:
      "What looks like a closed box is designed to hold two governed halves — living intelligence and protective control — without inventing Operational deployment claims.",
    sides: [
      {
        id: "intelligence",
        label: "Intelligence",
        body: "Living network of context, categories, and recalculation across the human model.",
      },
      {
        id: "security",
        label: "Security",
        body: "Permissioned boundaries, verification, and protective control around sensitive human context.",
      },
    ],
  },
  output: {
    heading: "Output: Structured Understanding",
    support:
      "BioMath Core is intended to return structured understanding — not generic advice. Five output pillars describe the architecture target.",
    pillars: [
      {
        id: "current-state",
        label: "Current State",
        body: "Absolute clarity on systemic health right now.",
      },
      {
        id: "causal-logic",
        label: "Causal Logic",
        body: "The why behind the current state, traced through the network.",
      },
      {
        id: "focus-zones",
        label: "Focus Zones",
        body: "Pinpointed areas requiring immediate cognitive or physical attention.",
      },
      {
        id: "dynamics",
        label: "Dynamics",
        body: "Visualized vectors of change over time.",
      },
      {
        id: "second-opinion",
        label: "The Second Opinion",
        body: "A synthesized, unbiased conclusion generated by the entire system.",
      },
    ],
    footer:
      "BioMath Core does not dispense generic advice. It is designed to deliver structured understanding for assistance architecture under human control.",
  },
  formula: {
    heading: "Master Infrastructure Formula",
    support:
      "Architecture equation for continuous care — model coverage plus execution plus bodies.",
    parts: [
      {
        id: "biomath",
        label: "BioMath Core",
        detail: "20 categories · 200+ services",
      },
      {
        id: "saven",
        label: "SAVEN",
        detail: "Execution",
      },
      {
        id: "bodies",
        label: "Bodies",
        detail: "Wearables · Robots · Humans",
      },
    ],
    equals: "System of Continuous Care",
    equalsDetail:
      "Intended architecture for ongoing assistance under human control — not an Operational product claim.",
  },
  environments: {
    heading: "Environments",
    support:
      "Home, hospital, and institution share one helix of context, execution, and verification.",
    cards: [
      {
        id: "home",
        label: "Home",
        body: "Daily life context — routines, devices, and family support under permission.",
      },
      {
        id: "hospital",
        label: "Hospital",
        body: "Clinical environments where structured context informs assistance architecture.",
      },
      {
        id: "institution",
        label: "Institution",
        body: "Care and organizational settings that still require the same continuity logic.",
      },
    ],
    footer:
      "Policies and roles change; execution and verification logic remains identical.",
  },
  sequence: {
    heading: "Foundation sequence",
    support:
      "One continuous path — not unrelated projects. BioMath Core sits at the intelligence layer.",
    steps: [
      { id: "biomath-life", label: "BioMath Life" },
      { id: "biomath-core", label: "BioMath Core", emphasis: true },
      { id: "saven", label: "SAVEN" },
      { id: "saven-core", label: "SAVEN Core" },
    ],
  },
  reportsCallout: {
    eyebrow: "BioMath Core → SAVEN",
    title: "Reports shape next-level actions",
    body: "Information for SAVEN’s next-level actions and commands is formed from BioMath Core reports and conclusions — under human control. Reports inform assistance and command architecture; they do not diagnose conditions, prescribe, or sell medicines.",
    scopeLine: `Model coverage: ${BIOMATH_CORE_CATEGORY_COUNT} categories · ${BIOMATH_CORE_SERVICES_LABEL} services`,
  },
  catalog: {
    heading: "Complete Services Catalog",
    support: `Explore ${BIOMATH_CORE_SERVICES_LABEL} biomathematical health services across ${BIOMATH_CORE_CATEGORY_COUNT} specialized categories.`,
  },
  categories: {
    heading: `BioMath Services — Showing ${BIOMATH_CORE_CATEGORY_COUNT} categories`,
    subtitle:
      "Architecture / In Development model coverage — not a live e-commerce storefront or Operational commercial catalog. Card grid below — not an orbital wallpaper screenshot.",
    disclaimer:
      "Category cards describe intended model coverage. They are not an Operational storefront, not a claim of live AI-powered services, and not medical advice. They do not diagnose, prescribe, or sell medicines.",
    cards: biomathCoreCategoriesEn.map((c) => ({
      id: c.id,
      label: c.label,
      serviceCount: c.serviceCount,
      blurb: c.blurb,
    })),
  },
  paths: {
    heading: "Continue exploring",
    support:
      "Human Data, Purpose, Technology, and FAQ deepen the same foundation story.",
    links: [
      {
        label: "Human Data",
        href: "/technology/human-data/",
        note: "What human context may mean under permission",
      },
      {
        label: "Human Data Model",
        href: "/technology/human-data-model/",
        note: "How authorized context is organized",
      },
      {
        label: "Purpose",
        href: "/purpose/",
        note: "Why SAVEN Core exists",
      },
      {
        label: "Technology",
        href: "/technology/",
        note: "Disciplines that support the architecture",
      },
      {
        label: "Foundation",
        href: "/foundation/",
        note: "Full foundation sequence hub",
      },
      {
        label: "FAQ",
        href: "/faq/",
        note: "BioMath Core questions and answers",
      },
    ],
  },
  note: "BioMath Core pages describe intended architecture. Status remains Architecture / In Development. They do not imply commercial deployment, clinical use, diagnosis, prescribing, or selling medicines.",
};
