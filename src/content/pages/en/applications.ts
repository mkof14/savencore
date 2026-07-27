import type {
  EngineeringLink,
  EngineeringPrinciple,
  PageMetadata,
} from "@/components/engineering/engineering-types";
import { APPLICATIONS_DEVELOPMENT_NOTE } from "@/content/pages/en/application-discipline-types";
import { applicationDisciplineReferenceLinks } from "@/content/pages/en/applications-reference-links";

export type ApplicationsOverviewCard = {
  id: string;
  title: string;
  responsibility: string;
  relationship: string;
  href: string;
  role: "endpoint" | "interface" | "system";
  classification: string;
};

export type ApplicationsPageContent = {
  metadata: PageMetadata;
  label: string;
  title: string;
  introduction: string;
  developmentNote: string;
  definitionTerm: string;
  definition: string;
  principlesHeading: string;
  principles: readonly EngineeringPrinciple[];
  scopeHeading: string;
  scope: readonly string[];
  futureHeading: string;
  futureIntro: string;
  cardsHeading: string;
  cards: readonly ApplicationsOverviewCard[];
  referenceHeading: string;
  referenceLinks: readonly EngineeringLink[];
  sectionNav: readonly { id: string; label: string }[];
};

export const applicationsPageContent: ApplicationsPageContent = {
  metadata: {
    category: "Applications",
    documentType: "Knowledge",
    status: "Architecture",
    version: "0.2",
    lastUpdated: "2026-07-24",
    readingTime: "7 min",
    relatedDomain: "Technology, Systems, Trust",
  },
  label: "Applications Overview",
  title: "Where intelligent systems may support real life.",
  introduction:
    "Applications describe the places SAVEN Core systems are intended to help — starting with care and everyday life. These pages explain contexts and architecture, not products already in use.",
  developmentNote: APPLICATIONS_DEVELOPMENT_NOTE,
  definitionTerm: "Application",
  definition:
    "An intended real-world operating context where SAVEN Core systems may later support people under clear limits.",
  principlesHeading: "Principles",
  principles: [
    {
      id: "human-first",
      title: "Human contexts first",
      text: "Human environments come before industrial extensions.",
    },
    {
      id: "not-deployed",
      title: "Architecture, not deployment",
      text: "These pages do not claim products in use.",
    },
    {
      id: "human-control",
      title: "Human control",
      text: "People remain responsible for consequential decisions.",
    },
    {
      id: "boundaries",
      title: "Clear boundaries",
      text: "Current scope and unsupported claims stay visible.",
    },
  ],
  scopeHeading: "Scope",
  scope: [
    "This domain documents intended contexts and architecture relationships.",
    "It does not claim clinical use, emergency service, regulatory approval or autonomous operation.",
    "Human-care contexts — healthcare, home, hospitals, and emergency — come first. Industrial, government and agriculture pages describe possible future extensions of the same architecture, considered only after human-care contexts, not parallel priorities.",
  ],
  futureHeading: "Related topics",
  futureIntro:
    "Related topics provide additional context for each application architecture. Ordering above is intentional: human-care contexts anchor the work; industrial, government, and agriculture remain longer-horizon extensions.",
  cardsHeading: "Operating contexts",
  cards: [
    {
      id: "healthcare",
      title: "Healthcare",
      responsibility: "Bounded support around care contexts and review.",
      relationship: "Human care environment",
      href: "/applications/healthcare/",
      role: "endpoint",
      classification: "APP-01",
    },
    {
      id: "home",
      title: "Home Application",
      responsibility: "Independence and daily routines under permissions.",
      relationship: "Home environment",
      href: "/applications/home/",
      role: "endpoint",
      classification: "APP-02",
    },
    {
      id: "hospitals",
      title: "Hospitals",
      responsibility: "Institutional care workflows and coordination.",
      relationship: "Hospital environment",
      href: "/applications/hospitals/",
      role: "endpoint",
      classification: "APP-03",
    },
    {
      id: "emergency",
      title: "Emergency",
      responsibility: "Constrained coordination under time pressure.",
      relationship: "Urgent environment",
      href: "/applications/emergency/",
      role: "endpoint",
      classification: "APP-04",
    },
    {
      id: "industrial",
      title: "Industrial",
      responsibility: "Future extension for bounded physical work.",
      relationship: "Secondary extension",
      href: "/applications/industrial/",
      role: "endpoint",
      classification: "APP-05",
    },
    {
      id: "government",
      title: "Government",
      responsibility: "Future extension for accountable public use.",
      relationship: "Secondary extension",
      href: "/applications/government/",
      role: "endpoint",
      classification: "APP-06",
    },
    {
      id: "agriculture",
      title: "Agriculture",
      responsibility: "Future extension for field and outdoor work.",
      relationship: "Secondary extension",
      href: "/applications/agriculture/",
      role: "endpoint",
      classification: "APP-07",
    },
    {
      id: "research",
      title: "Research Applications",
      responsibility: "Evaluation contexts for methods and limits.",
      relationship: "Research environment",
      href: "/applications/research-applications/",
      role: "endpoint",
      classification: "APP-08",
    },
  ],
  referenceHeading: "Reference Links",
  referenceLinks: applicationDisciplineReferenceLinks("/applications/"),
  sectionNav: [
    { id: "definition", label: "Definition" },
    { id: "operating-contexts", label: "Contexts" },
    { id: "engineering-principles", label: "Principles" },
    { id: "current-development-scope", label: "Scope" },
    { id: "reference-links", label: "References" },
  ],
};
