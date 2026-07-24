import {
  SYSTEMS_DEVELOPMENT_NOTE,
  SYSTEMS_DISCIPLINE_SECTION_NAV,
  type SystemDisciplinePageContent,
} from "@/content/pages/en/system-discipline-types";
import { systemsDisciplineReferenceLinks } from "@/content/pages/en/systems-reference-links";

export const knowledgeEnginePageContent: SystemDisciplinePageContent = {
  entityId: "knowledge-engine",
  metadata: {
    category: "Systems",
    documentType: "Knowledge",
    status: "Architecture",
    version: "0.2",
    lastUpdated: "2026-07-24",
    readingTime: "7 min",
    relatedDomain: "Technology, Applications",
  },
  label: "Knowledge Engine",
  title: "Organized knowledge that preserves context for other systems.",
  introduction: "The Knowledge Engine organizes knowledge and preserves context for other SAVEN Core components. It does not make decisions.",
  developmentNote: SYSTEMS_DEVELOPMENT_NOTE,
  executiveSummaryHeading: "Executive Summary",
  executiveSummary: [
    "The Knowledge Engine organizes knowledge and preserves context for other SAVEN Core components. It does not make decisions.",
    "It exists so every system can use the same governed meaning instead of inventing its own informal view.",
    "In the SAVEN Core chain, Technology provides foundations such as Data Infrastructure. The Knowledge Engine turns that into shared context. Applications later describe where that context may be used."
  ],
  whyItMattersHeading: "Why It Matters",
  whyItMatters: [
    "Without shared context, systems drift apart.",
    "Assistance needs a stable base before it can support people.",
    "Preserved context keeps later review honest and reviewable."
  ],
  purposeHeading: "Purpose",
  purpose: [
    "Organize approved knowledge used across systems.",
    "Preserve context so meaning does not collapse when information moves.",
    "Serve other systems without becoming a decision-maker."
  ],
  architectureRoleHeading: "Architecture Role",
  architectureRole: [
    "The Knowledge Engine sits after Technology foundations and before assistance systems.",
    "It feeds AI Decision Support with consistent references.",
    "It does not replace Privacy, Security or the Safety Layer."
  ],
  inputsHeading: "Inputs",
  inputs: [
    "Authorized knowledge structures.",
    "Governed references from Technology and Research definitions.",
    "Human context pathways only when the Human Data Model allows them."
  ],
  outputsHeading: "Outputs",
  outputs: [
    "Shared context for approved systems.",
    "Stable references other systems can reuse.",
    "Clear limits on what counts as authorized knowledge."
  ],
  relationshipsHeading: "Relationships",
  relationshipsIntro:
    "These links come from the shared entity registry. They describe architecture dependencies, not live integrations.",
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "preserve",
      title: "Preserve context",
      text: "Meaning travels with the information.",
    },
    {
      id: "no-decide",
      title: "No decisions",
      text: "Context support is not decision authority.",
    },
    {
      id: "governed",
      title: "Governed sources",
      text: "Only approved material enters the shared layer.",
    },
    {
      id: "reviewable",
      title: "Reviewable",
      text: "Authorized people must be able to understand what was shared.",
    }
  ],
  humanOversightHeading: "Human Oversight",
  humanOversight: [
    "People approve what becomes shared knowledge.",
    "The Knowledge Engine informs. It does not close human decisions."
  ],
  scopeHeading: "Current Development Scope",
  scope: [
    "This page defines architecture only.",
    "It does not claim a production knowledge platform.",
    "No publications or product features are invented here."
  ],
  futureHeading: "Future Topics",
  futureIntro:
    "Topics below come from the shared registry. They mark later documentation needs. They are not delivery promises.",
  relatedTechnologyHeading: "Related Technology",
  relatedSystemsHeading: "Related Systems",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: systemsDisciplineReferenceLinks("/systems/knowledge-engine/"),
  sectionNav: SYSTEMS_DISCIPLINE_SECTION_NAV,
};
