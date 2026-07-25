import type { EngineeringLink } from "@/components/engineering/engineering-types";
import type { SignalDiagramVariant } from "@/components/engineering/SignalDiagram";
import {
  APPLICATIONS_DEVELOPMENT_NOTE,
  APPLICATIONS_DISCIPLINE_SECTION_NAV,
  type ApplicationDisciplinePageContent,
} from "@/content/pages/en/application-discipline-types";

const LINKS: readonly EngineeringLink[] = [
  { label: "Applications", href: "/applications/" },
  { label: "Technology", href: "/technology/" },
  { label: "Privacy", href: "/technology/privacy/" },
  { label: "Security", href: "/technology/security/" },
  { label: "Systems", href: "/systems/" },
  { label: "Safety Layer", href: "/systems/safety-layer/" },
  { label: "Trust", href: "/trust/" },
];

export function applicationDisciplineReferenceLinks(
  selfHref: string,
): readonly EngineeringLink[] {
  return LINKS.filter((link) => link.href !== selfHref);
}

type ApplicationInput = Pick<
  ApplicationDisciplinePageContent,
  "entityId" | "label" | "title" | "introduction" | "definitionTerm" | "definition" |
    "executiveSummary" | "operatingContext" | "whyItMatters" | "savenRole" |
    "informationFlow" | "humanRole" | "safetyTrust" | "scope" | "futureIntro" |
    "principles"
> & { diagramVariant: string; selfHref: string };

export function createApplicationPageContent(
  input: ApplicationInput,
): ApplicationDisciplinePageContent {
  return {
    entityId: input.entityId,
    diagramVariant: input.diagramVariant as SignalDiagramVariant,
    metadata: { category: "Applications", documentType: "Knowledge", status: "Architecture", version: "0.1", lastUpdated: "2026-07-24", readingTime: "6 min", relatedDomain: "Technology, Systems, Trust" },
    label: input.label, title: input.title, introduction: input.introduction,
    developmentNote: APPLICATIONS_DEVELOPMENT_NOTE,
    definitionTerm: input.definitionTerm, definition: input.definition, definitionCoordinate: "Operating context",
    executiveSummaryHeading: "Executive Summary", executiveSummary: input.executiveSummary,
    operatingContextHeading: "Operating Context", operatingContext: input.operatingContext,
    whyItMattersHeading: "Why It Matters", whyItMatters: input.whyItMatters,
    savenRoleHeading: "SAVEN Core Role", savenRole: input.savenRole,
    informationFlowHeading: "Information Flow", informationFlow: input.informationFlow,
    humanRoleHeading: "Human Role", humanRole: input.humanRole,
    safetyTrustHeading: "Safety and Trust", safetyTrust: input.safetyTrust,
    scopeHeading: "Scope", scope: input.scope,
    futureHeading: "Related topics", futureIntro: input.futureIntro,
    relatedTechnologyHeading: "Related Technology", relatedSystemsHeading: "Related Systems", relatedTrustHeading: "Related Trust",
    referenceHeading: "Reference Links", referenceLinks: applicationDisciplineReferenceLinks(input.selfHref),
    principlesHeading: "Principles", principles: input.principles,
    sectionNav: APPLICATIONS_DISCIPLINE_SECTION_NAV,
  };
}
