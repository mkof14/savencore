import type {
  EngineeringLink,
  EngineeringPrinciple,
  PageMetadata,
} from "@/components/engineering/engineering-types";

/**
 * Shared content model for Technology discipline leaf pages.
 * Content Sprint — Technology domain completion.
 */

export type TechnologyConcept = {
  id: string;
  title: string;
  text: string;
};

export type TechnologyDisciplinePageContent = {
  entityId: string;
  metadata: PageMetadata;
  label: string;
  title: string;
  introduction: string;
  developmentNote: string;
  executiveSummaryHeading: string;
  executiveSummary: readonly string[];
  whyItMattersHeading: string;
  whyItMatters: readonly string[];
  purposeHeading: string;
  purpose: readonly string[];
  coreConceptsHeading: string;
  coreConceptsIntro: string;
  coreConcepts: readonly TechnologyConcept[];
  relationshipsHeading: string;
  relationshipsIntro: string;
  principlesHeading: string;
  principles: readonly EngineeringPrinciple[];
  scopeHeading: string;
  scope: readonly string[];
  futureHeading: string;
  futureIntro: string;
  relatedSystemsHeading: string;
  relatedResearchHeading: string;
  relatedApplicationsHeading: string;
  referenceHeading: string;
  referenceLinks: readonly EngineeringLink[];
  sectionNav: readonly { id: string; label: string }[];
};

/** Live Technology-domain and site links used across discipline pages. */
export const TECHNOLOGY_DOMAIN_REFERENCE_LINKS: readonly EngineeringLink[] = [
  { label: "Technology", href: "/technology/" },
  { label: "Human Data", href: "/technology/human-data/" },
  { label: "Human Data Model", href: "/technology/human-data-model/" },
  { label: "Data Infrastructure", href: "/technology/data-infrastructure/" },
  { label: "Interoperability", href: "/technology/interoperability/" },
  { label: "Privacy", href: "/technology/privacy/" },
  { label: "Security", href: "/technology/security/" },
  {
    label: "Artificial Intelligence",
    href: "/technology/artificial-intelligence/",
  },
  { label: "Automation", href: "/technology/automation/" },
  { label: "Robotics", href: "/technology/robotics/" },
  { label: "Foundation", href: "/foundation/" },
  { label: "Research", href: "/research/" },
  { label: "Applications", href: "/applications/" },
  { label: "Purpose", href: "/purpose/" },
];

export const TECHNOLOGY_DISCIPLINE_SECTION_NAV: readonly {
  id: string;
  label: string;
}[] = [
  { id: "executive-summary", label: "Summary" },
  { id: "why-it-matters", label: "Why it matters" },
  { id: "purpose", label: "Purpose" },
  { id: "core-concepts", label: "Core concepts" },
  { id: "relationships", label: "Relationships" },
  { id: "engineering-principles", label: "Principles" },
  { id: "current-development-scope", label: "Scope" },
  { id: "future-topics", label: "Future topics" },
  { id: "related-systems", label: "Related systems" },
  { id: "related-research", label: "Related research" },
  { id: "related-applications", label: "Related applications" },
  { id: "reference-links", label: "References" },
];

export const TECHNOLOGY_DEVELOPMENT_NOTE =
  "Technology pages describe intended architecture. They do not imply commercial deployment, clinical use, regulatory approval or a chosen vendor platform.";
