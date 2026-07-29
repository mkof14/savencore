import type { PageMetadata } from "@/components/engineering/engineering-types";
import {
  BIOMATH_CORE_CATEGORY_COUNT,
  BIOMATH_CORE_SERVICES_LABEL,
  biomathCoreCategoriesEn,
  type BioMathCoreCategoryId,
} from "@/content/biomath-core/scope";

/**
 * BioMath Core leaf page — D-0228.
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
};

export type BioMathCorePathLink = {
  label: string;
  href: string;
  note?: string;
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
  sequence: {
    heading: string;
    support: string;
    steps: readonly BioMathCoreSequenceStep[];
  };
  role: {
    heading: string;
    paragraphs: readonly string[];
  };
  humanData: {
    heading: string;
    paragraphs: readonly string[];
  };
  reportsCallout: {
    eyebrow: string;
    title: string;
    body: string;
    scopeLine: string;
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
    version: "0.1",
    lastUpdated: "2026-07-29",
    readingTime: "6 min",
    relatedDomain: "Foundation, Human Data Model, SAVEN",
  },
  label: "BioMath Core",
  title: "The intelligence foundation that structures human context.",
  lede: "BioMath Core gathers and structures the Human Data Model so understanding can inform careful assistance. It is the basis of the foundation sequence — and the source of reports and conclusions that shape SAVEN’s next-level actions under human control.",
  status: "Architecture",
  hero: {
    logoAlt: "BioMath Core",
    visualAlt: "BioMath Core sphere — structured intelligence at the center of the foundation",
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
  role: {
    heading: "Role in the foundation",
    paragraphs: [
      "BioMath Core is the intelligence layer. It organizes human data and context so situations can be interpreted with permissions, privacy, and accountable use.",
      "It receives orientation from BioMath Life and provides the structured interface that SAVEN and SAVEN Core use. Everything downstream inherits that human-centered priority — it must not invert it.",
      "AI remains a tool in this path. Human control remains the condition for consequential action.",
    ],
  },
  humanData: {
    heading: "Human Data Model",
    paragraphs: [
      "BioMath Core is the foundation that gathers and structures the Human Data Model — the controlled representation of human context used across the architecture.",
      "The model organizes authorized signals, history, and changing conditions so systems can interpret context without treating people as unstructured data sources. Access is permissioned; unnecessary exposure must be reduced.",
    ],
  },
  reportsCallout: {
    eyebrow: "BioMath Core → SAVEN",
    title: "Reports shape next-level actions",
    body: "Information for SAVEN’s next-level actions and commands is formed from BioMath Core reports and conclusions — under human control. Reports inform assistance and command architecture; they do not diagnose conditions, prescribe, or sell medicines.",
    scopeLine: `Model coverage: ${BIOMATH_CORE_CATEGORY_COUNT} categories · ${BIOMATH_CORE_SERVICES_LABEL} services`,
  },
  categories: {
    heading: "Health Categories",
    subtitle: `Model scope across ${BIOMATH_CORE_CATEGORY_COUNT} categories and ${BIOMATH_CORE_SERVICES_LABEL} services — Architecture / In Development, not a live commercial catalog.`,
    disclaimer:
      "Category cards describe intended model coverage. They are not an Operational storefront, not a claim of live AI-powered services, and not medical advice.",
    cards: biomathCoreCategoriesEn.map((c) => ({
      id: c.id,
      label: c.label,
    })),
  },
  paths: {
    heading: "Continue exploring",
    support: "Human Data, Purpose, Technology, and FAQ deepen the same foundation story.",
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
