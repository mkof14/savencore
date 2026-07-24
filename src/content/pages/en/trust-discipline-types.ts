import type {
  EngineeringLink,
  EngineeringPrinciple,
  PageMetadata,
} from "@/components/engineering/engineering-types";
import type { SignalDiagramVariant } from "@/components/engineering/SignalDiagram";

/**
 * Trust leaf content — Content + Design Sprint 2.
 * Organizational commitments and governance — not Technology engineering pages
 * and not the Systems Safety Layer page.
 */
export type TrustDisciplinePageContent = {
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
  principleHeading: string;
  principle: readonly string[];
  whyItMattersHeading: string;
  whyItMatters: readonly string[];
  responsibilitiesHeading: string;
  responsibilities: readonly string[];
  boundariesHeading: string;
  boundaries: readonly string[];
  controlsHeading: string;
  controls: readonly string[];
  humanOversightHeading: string;
  humanOversight: readonly string[];
  limitationsHeading: string;
  limitations: readonly string[];
  scopeHeading: string;
  scope: readonly string[];
  futureHeading: string;
  futureIntro: string;
  relatedTechnologyHeading: string;
  relatedSystemsHeading: string;
  referenceHeading: string;
  referenceLinks: readonly EngineeringLink[];
  principlesHeading: string;
  principles: readonly EngineeringPrinciple[];
  sectionNav: readonly { id: string; label: string }[];
};

export const TRUST_DEVELOPMENT_NOTE =
  "Trust pages describe organizational commitments, governance and limits. They are not legal policies, certifications or guarantees of complete safety, privacy or compliance.";

export const TRUST_DISCIPLINE_SECTION_NAV: readonly {
  id: string;
  label: string;
}[] = [
  { id: "executive-summary", label: "Summary" },
  { id: "principle", label: "Principle" },
  { id: "why-it-matters", label: "Why it matters" },
  { id: "responsibilities", label: "Responsibilities" },
  { id: "boundaries", label: "Boundaries" },
  { id: "controls", label: "Controls" },
  { id: "human-oversight", label: "Human oversight" },
  { id: "limitations", label: "Limitations" },
  { id: "current-development-scope", label: "Scope" },
  { id: "future-topics", label: "Future topics" },
  { id: "related-technology", label: "Related technology" },
  { id: "related-systems", label: "Related systems" },
  { id: "reference-links", label: "References" },
];
