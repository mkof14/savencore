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
  { id: "future-topics", label: "Related topics" },
  { id: "related-systems", label: "Related systems" },
  { id: "related-research", label: "Related research" },
  { id: "related-applications", label: "Related applications" },
  { id: "reference-links", label: "References" },
];

export const TECHNOLOGY_DEVELOPMENT_NOTE =
  "Technology pages describe intended architecture. They do not imply commercial deployment, clinical use, regulatory approval or a chosen vendor platform.";
