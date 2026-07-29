import type { PageMetadata } from "@/components/engineering/engineering-types";
import {
  BIOMATH_CORE_CATEGORY_COUNT,
  BIOMATH_CORE_SERVICES_LABEL,
  biomathCoreCategoriesEn,
  type BioMathCoreCategoryId,
} from "@/content/biomath-core/scope";

/**
 * BioMath Core leaf page — D-0228–D-0243.
 * Architecture / In Development model coverage — not an Operational catalog.
 * D-0238: harmonious smaller diagram panels + Black Box sensitive-data storage intent.
 * D-0239: Black Box → Trust/Legal soft links; TOC; Trust in Continue exploring; no card counts.
 * D-0243: concise “What BioMath Core is not”; mobile polish; home bridge wording sync.
 */

export type BioMathCoreSequenceStep = {
  id: string;
  label: string;
  detail?: string;
  emphasis?: boolean;
};

export type BioMathCoreCategoryCard = {
  id: BioMathCoreCategoryId;
  label: string;
  blurb: string;
};

export type BioMathCorePathLink = {
  label: string;
  href: string;
  note?: string;
};

export type BioMathCoreTocItem = {
  id: string;
  label: string;
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

export type BioMathCoreBlackBoxSide = {
  id: string;
  label: string;
  body: string;
};

export type BioMathCoreBlackBoxPrinciple = {
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
    caption: string;
    points: readonly BioMathCoreLivingPoint[];
  };
  layerStack: {
    heading: string;
    support: string;
    visualLabel: string;
    caption: string;
    layers: readonly BioMathCoreStackLayer[];
    calloutEyebrow: string;
    callout: string;
  };
  dualRoles: {
    heading: string;
    support: string;
    visualLabel: string;
    caption: string;
    biomath: BioMathCoreRoleSide;
    saven: BioMathCoreRoleSide;
    banner: string;
  };
  engine: {
    heading: string;
    support: string;
    visualLabel: string;
    caption: string;
    phases: readonly BioMathCoreEnginePhase[];
  };
  secondOpinion: {
    heading: string;
    support: string;
    visualLabel: string;
    caption: string;
    signalLabel: string;
    resultLabel: string;
    lanes: readonly BioMathCoreOpinionLane[];
    insight: string;
  };
  blackBox: {
    heading: string;
    support: string;
    visualLabel: string;
    caption: string;
    sides: readonly BioMathCoreBlackBoxSide[];
    storageHeading: string;
    storageIntro: string;
    storageBody: string;
    principlesEyebrow: string;
    principles: readonly BioMathCoreBlackBoxPrinciple[];
    policyLinks: {
      intro: string;
      links: readonly BioMathCorePathLink[];
    };
  };
  output: {
    heading: string;
    support: string;
    visualLabel: string;
    caption: string;
    pillars: readonly BioMathCoreOutputPillar[];
    footer: string;
  };
  formula: {
    heading: string;
    support: string;
    visualLabel: string;
    caption: string;
    parts: readonly BioMathCoreFormulaPart[];
    equals: string;
    equalsDetail: string;
  };
  environments: {
    heading: string;
    support: string;
    visualLabel: string;
    caption: string;
    cards: readonly BioMathCoreEnvironmentCard[];
    footer: string;
  };
  sequence: {
    heading: string;
    support: string;
    visualLabel: string;
    steps: readonly BioMathCoreSequenceStep[];
  };
  reportsCallout: {
    eyebrow: string;
    title: string;
    body: string;
    scopeLine: string;
  };
  whatIsNot: {
    heading: string;
    support: string;
    points: readonly string[];
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
  toc: {
    label: string;
    items: readonly BioMathCoreTocItem[];
  };
  note: string;
};

export const BIOMATH_CORE_PAGE_HREF = "/foundation/biomath-core/" as const;

export const biomathCorePageContent: BioMathCorePageContent = {
  metadata: {
    category: "Foundation",
    documentType: "Knowledge",
    status: "Architecture",
    version: "0.8",
    lastUpdated: "2026-07-29",
    readingTime: "11 min",
    relatedDomain: "Foundation, Human Data Model, SAVEN",
  },
  label: "Foundation",
  title: "BioMath Core",
  lede: "Where health data becomes daily clarity.",
  status: "Architecture",
  hero: {
    logoAlt: "BioMath Core",
    visualAlt:
      "BioMath Core ambient panel — engine core and living digital model motif (Architecture illustration)",
  },
  livingModel: {
    heading: "One Human = One Living Model",
    support:
      "A single continuous model of one person — not fragmented profiles reset by each service.",
    visualLabel:
      "One Human = One Living Model — dense living core mesh with continuous-context principles",
    caption:
      "Illustrative architecture panel: one living model at the center of continuous human context.",
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
    visualLabel:
      "Four-layer stack — BioMath Life, BioMath Core, SAVEN execution, Body Layer with critical dependency",
    caption:
      "Illustrative architecture panel: four governed layers from philosophy to physical bodies.",
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
    calloutEyebrow: "Critical dependency",
    callout:
      "Understanding is useless without execution. BioMath Core thinks — but cannot act alone.",
  },
  dualRoles: {
    heading: "Context and execution — dual roles",
    support:
      "Two interlocking capabilities. Neither replaces the other; both are required for continuous care architecture.",
    visualLabel:
      "BioMath Core context engine and SAVEN execution layer as interlocking dual roles",
    caption:
      "Illustrative architecture panel: context and execution must interlock for continuous care.",
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
    visualLabel:
      "BioMath Core engine — three simulation phases from tagged input through glowing core to digital living human model",
    caption:
      "Illustrative architecture panel: Input → Core → Output — English labels on the diagram; Architecture only.",
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
    visualLabel:
      "The Dual-Opinion Cognitive Engine — New Signal splits into Local and Systemic opinions, then Unified Conclusion",
    caption:
      "One unified Second Opinion architecture: parallel local + systemic reading → verified / unified conclusion.",
    signalLabel: "New Signal",
    resultLabel: "Unified Conclusion",
    lanes: [
      {
        id: "local",
        label: "Local Opinion",
        body: "Formed inside a specific service or category — direct specialized logic (Model A / direct analysis).",
      },
      {
        id: "systemic",
        label: "Systemic Opinion",
        body: "Evaluated against history, cross-category influences, and the established structural map (Model B / structural validation).",
      },
    ],
    insight:
      "Key insight: the platform is intended to analyze in parallel. This is not a cosmetic software feature — it is the native way the architecture thinks, reducing shallow single-path interpretations.",
  },
  blackBox: {
    heading: "The Black Box Architecture",
    support:
      "What looks like a closed box is designed to hold living intelligence and protective control — including technical approaches for storing personal and sensitive personal information. This describes Architecture / In Development intent, not Operational security guarantees.",
    visualLabel:
      "The Black Box Architecture — glass cube with intelligence mesh and security shield",
    caption:
      "Illustrative architecture panel: living intelligence and protective control inside one governed glass volume.",
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
    storageHeading: "Sensitive personal data — intended storage approach",
    storageIntro:
      "Inside the Black Box concept, personal information and sensitive personal information are treated as technical data-storage problems — not as open marketing databases. The goal is to keep human context usable for care continuity while limiting who can reach it, what is kept, and why.",
    storageBody:
      "The architecture is designed around privacy, controlled access, data minimization, safety, traceability, and human oversight. Protection targets include encryption for data at rest and in transit, permissioned roles, separation of sensitive material from broader system surfaces, and purpose limitation — keep only what a clear purpose requires. These are design targets for systems still in development; they are not claims of a certified live production vault, regulatory approval, or zero risk.",
    principlesEyebrow: "Architecture intent — not Operational guarantees",
    principles: [
      {
        id: "storage",
        label: "Storage",
        body: "Technical stores for personal and sensitive personal data, governed inside the Black Box concept — not unrestricted collection.",
      },
      {
        id: "access",
        label: "Access",
        body: "Permissioned roles and controlled pathways; sensitive context is not open by default.",
      },
      {
        id: "encryption",
        label: "Encryption posture",
        body: "Designed so sensitive material is protected while stored and while moving between trusted components — architecture intent, not a live certification claim.",
      },
      {
        id: "isolation",
        label: "Isolation",
        body: "Separate sensitive context from broader surfaces where practical; protective boundaries around the Black Box volume.",
      },
      {
        id: "minimization",
        label: "Minimization",
        body: "Keep only what the stated purpose requires; avoid retaining excess human detail.",
      },
    ],
    policyLinks: {
      intro:
        "Architecture intent connects to published site policies. These links explain commitments and limits — they are not certifications, Operational vault claims, or new legal text.",
      links: [
        {
          label: "Trust · Privacy",
          href: "/trust/privacy/",
          note: "Organizational privacy commitments",
        },
        {
          label: "Trust · Security",
          href: "/trust/security/",
          note: "Security governance commitments",
        },
        {
          label: "Privacy Policy",
          href: "/legal/privacy-policy/",
          note: "Website privacy policy",
        },
      ],
    },
  },
  output: {
    heading: "Output: Structured Understanding",
    support:
      "BioMath Core is intended to return structured understanding — not generic advice. Five output pillars describe the architecture target.",
    visualLabel:
      "Output: Structured Understanding — five glass pillars for Current State, Causal Logic, Focus Zones, Dynamics, and The Second Opinion",
    caption:
      "Illustrative architecture panel: five structured-understanding pillars — not generic advice.",
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
    visualLabel:
      "Master Infrastructure Formula — BioMath Core + SAVEN + Bodies = System of Continuous Care",
    caption:
      "Illustrative architecture panel: the master infrastructure equation for continuous care.",
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
    visualLabel:
      "Environments — Home, Hospital, and Institution linked by one continuous helix",
    caption:
      "Illustrative architecture panel: the same continuity logic across home, hospital, and institution.",
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
    visualLabel:
      "Foundation sequence — BioMath Life to BioMath Core to SAVEN to SAVEN Core",
    steps: [
      {
        id: "biomath-life",
        label: "BioMath Life",
        detail: "Strategy · Philosophy · Standards",
      },
      {
        id: "biomath-core",
        label: "BioMath Core",
        detail: "Intelligence · Living Model",
        emphasis: true,
      },
      {
        id: "saven",
        label: "SAVEN",
        detail: "Execution · Control · Verify",
      },
      {
        id: "saven-core",
        label: "SAVEN Core",
        detail: "Human Care Systems",
      },
    ],
  },
  reportsCallout: {
    eyebrow: "BioMath Core → SAVEN",
    title: "Reports shape next-level actions",
    body: "Information for SAVEN’s next-level actions and commands is formed from BioMath Core reports and conclusions — under human control. Reports inform assistance and command architecture; they do not diagnose conditions, prescribe, or sell medicines.",
    scopeLine: `Architecture / In Development model coverage: ${BIOMATH_CORE_CATEGORY_COUNT} categories · ${BIOMATH_CORE_SERVICES_LABEL} services — not an Operational catalog.`,
  },
  whatIsNot: {
    heading: "What BioMath Core is not",
    support:
      "Boundaries that match the home clarity statement and category disclaimers — Architecture / In Development only.",
    points: [
      "Not a live storefront or e-commerce catalog.",
      "Not medical advice.",
      "Not an Operational commercial service list.",
      "It does not diagnose conditions, prescribe, or sell medicines.",
    ],
  },
  catalog: {
    heading: "Complete Services Catalog",
    support: `Explore ${BIOMATH_CORE_SERVICES_LABEL} biomathematical health services across ${BIOMATH_CORE_CATEGORY_COUNT} specialized categories.`,
  },
  categories: {
    heading: `BioMath Services — Showing ${BIOMATH_CORE_CATEGORY_COUNT} categories`,
    subtitle:
      "Architecture / In Development model coverage — not a live e-commerce storefront or Operational commercial catalog. Themeable category panels below — not an orbital wallpaper screenshot.",
    disclaimer:
      "Category cards describe intended model coverage. They are not an Operational storefront, not a claim of live AI-powered services, and not medical advice. They do not diagnose, prescribe, or sell medicines.",
    cards: biomathCoreCategoriesEn.map((c) => ({
      id: c.id,
      label: c.label,
      blurb: c.blurb,
    })),
  },
  paths: {
    heading: "Continue exploring",
    support:
      "Human Data, Purpose, Technology, Trust, and FAQ deepen the same foundation story.",
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
        label: "Trust · Privacy",
        href: "/trust/privacy/",
        note: "Privacy commitments and limits",
      },
      {
        label: "Trust · Security",
        href: "/trust/security/",
        note: "Security governance and reporting",
      },
      {
        label: "FAQ",
        href: "/faq/",
        note: "BioMath Core questions and answers",
      },
    ],
  },
  toc: {
    label: "On this page",
    items: [
      { id: "bmc-living", label: "Living Model" },
      { id: "bmc-stack", label: "Four-layer stack" },
      { id: "bmc-dual", label: "Dual roles" },
      { id: "bmc-engine", label: "Engine" },
      { id: "bmc-opinion", label: "Second Opinion" },
      { id: "bmc-blackbox", label: "Black Box" },
      { id: "bmc-what-is-not", label: "What it is not" },
      { id: "bmc-output", label: "Output" },
      { id: "bmc-formula", label: "Formula" },
      { id: "bmc-envs", label: "Environments" },
      { id: "bmc-sequence", label: "Sequence" },
      { id: "bmc-categories", label: "Categories" },
      { id: "bmc-paths", label: "Continue exploring" },
    ],
  },
  note: "BioMath Core pages describe intended architecture. Status remains Architecture / In Development. They do not imply commercial deployment, clinical use, diagnosis, prescribing, or selling medicines.",
};
