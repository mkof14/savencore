import type { PageMetadata } from "@/components/engineering/engineering-types";
import {
  BIOMATH_CORE_CATEGORY_COUNT,
  BIOMATH_CORE_SERVICES_LABEL,
  biomathCoreCategoriesEn,
  type BioMathCoreCategoryId,
} from "@/content/biomath-core/scope";

/**
 * BioMath Core leaf page — D-0228 / D-0229 / D-0230.
 * Architecture / In Development model coverage — not an Operational catalog.
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
    version: "0.3",
    lastUpdated: "2026-07-29",
    readingTime: "8 min",
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
      "Architecture / In Development model coverage — not a live e-commerce storefront or Operational commercial catalog.",
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
