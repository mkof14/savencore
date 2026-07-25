import type {
  EngineeringLink,
  EngineeringPrinciple,
  PageMetadata,
} from "@/components/engineering/engineering-types";

export type SystemConcept = {
  id: string;
  title: string;
  text: string;
};

/**
 * Systems leaf content — Core Architecture Sprint.
 * Optional arrays may be empty; the page template hides empty sections.
 */
export type SystemDisciplinePageContent = {
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
  architectureRoleHeading: string;
  architectureRole: readonly string[];
  inputsHeading: string;
  inputs: readonly string[];
  outputsHeading: string;
  outputs: readonly string[];
  relationshipsHeading: string;
  relationshipsIntro: string;
  principlesHeading: string;
  principles: readonly EngineeringPrinciple[];
  humanOversightHeading: string;
  humanOversight: readonly string[];
  scopeHeading: string;
  scope: readonly string[];
  futureHeading: string;
  futureIntro: string;
  relatedTechnologyHeading: string;
  relatedSystemsHeading: string;
  relatedApplicationsHeading: string;
  referenceHeading: string;
  referenceLinks: readonly EngineeringLink[];
  sectionNav: readonly { id: string; label: string }[];
};

export const SYSTEMS_DEVELOPMENT_NOTE =
  "Systems pages describe intended architecture. They do not imply commercial deployment, clinical use, regulatory approval or autonomous operation.";

export const SYSTEMS_DISCIPLINE_SECTION_NAV: readonly {
  id: string;
  label: string;
}[] = [
  { id: "executive-summary", label: "Summary" },
  { id: "why-it-matters", label: "Why it matters" },
  { id: "purpose", label: "Purpose" },
  { id: "architecture-role", label: "Architecture role" },
  { id: "inputs", label: "Inputs" },
  { id: "outputs", label: "Outputs" },
  { id: "relationships", label: "Relationships" },
  { id: "engineering-principles", label: "Principles" },
  { id: "human-oversight", label: "Human oversight" },
  { id: "current-development-scope", label: "Scope" },
  { id: "future-topics", label: "Related topics" },
  { id: "related-technology", label: "Related technology" },
  { id: "related-systems", label: "Related systems" },
  { id: "related-applications", label: "Related applications" },
  { id: "reference-links", label: "References" },
];
