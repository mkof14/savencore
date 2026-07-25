import type { EngineeringLink } from "@/components/engineering/engineering-types";
import type { SignalDiagramVariant } from "@/components/engineering/SignalDiagram";
import {
  TRUST_DEVELOPMENT_NOTE,
  TRUST_DISCIPLINE_SECTION_NAV,
  type TrustDisciplinePageContent,
} from "@/content/pages/en/trust-discipline-types";

const LINKS: readonly EngineeringLink[] = [
  { label: "Trust", href: "/trust/" },
  { label: "Privacy engineering", href: "/technology/privacy/" },
  { label: "Security engineering", href: "/technology/security/" },
  { label: "Systems", href: "/systems/" },
  { label: "Safety Layer", href: "/systems/safety-layer/" },
  { label: "Applications", href: "/applications/" },
];

export function trustDisciplineReferenceLinks(selfHref: string): readonly EngineeringLink[] {
  return LINKS.filter((link) => link.href !== selfHref);
}

type TrustInput = Pick<
  TrustDisciplinePageContent,
  "entityId" | "label" | "title" | "introduction" | "definitionTerm" | "definition" |
    "executiveSummary" | "principle" | "whyItMatters" | "responsibilities" |
    "boundaries" | "controls" | "humanOversight" | "limitations" | "scope" |
    "futureIntro" | "principles"
> & { diagramVariant: string; selfHref: string };

export function createTrustPageContent(input: TrustInput): TrustDisciplinePageContent {
  return {
    entityId: input.entityId, diagramVariant: input.diagramVariant as SignalDiagramVariant,
    metadata: { category: "Trust", documentType: "Knowledge", status: "Architecture", version: "0.1", lastUpdated: "2026-07-24", readingTime: "6 min", relatedDomain: "Technology, Systems, Applications" },
    label: input.label, title: input.title, introduction: input.introduction,
    developmentNote: TRUST_DEVELOPMENT_NOTE,
    definitionTerm: input.definitionTerm, definition: input.definition, definitionCoordinate: "Governance model",
    executiveSummaryHeading: "Executive Summary", executiveSummary: input.executiveSummary,
    principleHeading: "Principle", principle: input.principle,
    whyItMattersHeading: "Why It Matters", whyItMatters: input.whyItMatters,
    responsibilitiesHeading: "Responsibilities", responsibilities: input.responsibilities,
    boundariesHeading: "Boundaries", boundaries: input.boundaries,
    controlsHeading: "Controls", controls: input.controls,
    humanOversightHeading: "Human Oversight", humanOversight: input.humanOversight,
    limitationsHeading: "Limitations", limitations: input.limitations,
    scopeHeading: "Scope", scope: input.scope,
    futureHeading: "Related topics", futureIntro: input.futureIntro,
    relatedTechnologyHeading: "Related Technology", relatedSystemsHeading: "Related Systems",
    referenceHeading: "Reference Links", referenceLinks: trustDisciplineReferenceLinks(input.selfHref),
    principlesHeading: "Principles", principles: input.principles,
    sectionNav: TRUST_DISCIPLINE_SECTION_NAV,
  };
}
