import type {
  EngineeringLink,
  EngineeringPrinciple,
  PageMetadata,
} from "@/components/engineering/engineering-types";
import type { SignalDiagramVariant } from "@/components/engineering/SignalDiagram";

/**
 * Applications leaf content — Content + Design Sprint 2.
 * Empty optional arrays are hidden by the page template.
 */
export type ApplicationDisciplinePageContent = {
  entityId: string;
  diagramVariant: SignalDiagramVariant;
  metadata: PageMetadata;
  label: string;
  title: string;
  introduction: string;
  developmentNote: string;
  definitionTerm: string;
  definition: string;
  definitionCoordinate: string;
  executiveSummaryHeading: string;
  executiveSummary: readonly string[];
  operatingContextHeading: string;
  operatingContext: readonly string[];
  whyItMattersHeading: string;
  whyItMatters: readonly string[];
  savenRoleHeading: string;
  savenRole: readonly string[];
  informationFlowHeading: string;
  informationFlow: readonly string[];
  humanRoleHeading: string;
  humanRole: readonly string[];
  safetyTrustHeading: string;
  safetyTrust: readonly string[];
  scopeHeading: string;
  scope: readonly string[];
  futureHeading: string;
  futureIntro: string;
  relatedTechnologyHeading: string;
  relatedSystemsHeading: string;
  relatedTrustHeading: string;
  referenceHeading: string;
  referenceLinks: readonly EngineeringLink[];
  principlesHeading: string;
  principles: readonly EngineeringPrinciple[];
  sectionNav: readonly { id: string; label: string }[];
};

export const APPLICATIONS_DEVELOPMENT_NOTE =
  "Application pages describe intended operating contexts. They do not imply deployed products, clinical use, regulatory approval, autonomous operation or production readiness.";

export const APPLICATIONS_DISCIPLINE_SECTION_NAV: readonly {
  id: string;
  label: string;
}[] = [
  { id: "executive-summary", label: "Summary" },
  { id: "operating-context", label: "Operating context" },
  { id: "why-it-matters", label: "Why it matters" },
  { id: "saven-core-role", label: "SAVEN Core role" },
  { id: "information-flow", label: "Information flow" },
  { id: "human-role", label: "Human role" },
  { id: "safety-and-trust", label: "Safety and trust" },
  { id: "current-development-scope", label: "Scope" },
  { id: "future-topics", label: "Future topics" },
  { id: "related-technology", label: "Related technology" },
  { id: "related-systems", label: "Related systems" },
  { id: "related-trust", label: "Related trust" },
  { id: "reference-links", label: "References" },
];
