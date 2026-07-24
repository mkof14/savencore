import {
  SYSTEMS_DEVELOPMENT_NOTE,
  SYSTEMS_DISCIPLINE_SECTION_NAV,
  type SystemDisciplinePageContent,
} from "@/content/pages/en/system-discipline-types";
import { systemsDisciplineReferenceLinks } from "@/content/pages/en/systems-reference-links";

export const aiDecisionSupportPageContent: SystemDisciplinePageContent = {
  entityId: "ai-decision-support",
  metadata: {
    category: "Systems",
    documentType: "Knowledge",
    status: "Architecture",
    version: "0.2",
    lastUpdated: "2026-07-24",
    readingTime: "7 min",
    relatedDomain: "Technology, Applications",
  },
  label: "AI Decision Support",
  title: "Analysis that supports people without replacing them.",
  introduction: "AI Decision Support analyzes available information to support people. It does not replace people.",
  developmentNote: SYSTEMS_DEVELOPMENT_NOTE,
  executiveSummaryHeading: "Executive Summary",
  executiveSummary: [
    "AI Decision Support analyzes available information to support human review. It does not replace people.",
    "It exists so people can see options, uncertainty and limits more clearly before they decide.",
    "It uses Technology foundations such as Artificial Intelligence, plus context from the Knowledge Engine and Human Data Model. Applications name where that support may later appear."
  ],
  whyItMattersHeading: "Why It Matters",
  whyItMatters: [
    "People need structured help in complex situations.",
    "Help without limits becomes unsafe authority.",
    "Clear support keeps judgment with humans."
  ],
  purposeHeading: "Purpose",
  purpose: [
    "Analyze authorized information for human review.",
    "Present options and uncertainty within safety limits.",
    "Support care and other workflows without claiming medical authority."
  ],
  architectureRoleHeading: "Architecture Role",
  architectureRole: [
    "AI Decision Support sits after shared context and before Clinical Interfaces.",
    "The Safety Layer can stop, defer or escalate its pathways.",
    "It consumes Artificial Intelligence as a Technology foundation. It is not that foundation by itself."
  ],
  inputsHeading: "Inputs",
  inputs: [
    "Authorized context from the Human Data Model.",
    "Shared references from the Knowledge Engine.",
    "Safety and permission limits."
  ],
  outputsHeading: "Outputs",
  outputs: [
    "Support for human review.",
    "Option and uncertainty presentation within bounds.",
    "Escalation signals when people must take over."
  ],
  relationshipsHeading: "Relationships",
  relationshipsIntro:
    "These links come from the shared entity registry. They describe architecture dependencies, not live integrations.",
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "support",
      title: "Support people",
      text: "The system assists. People decide.",
    },
    {
      id: "bounded",
      title: "Bounded analysis",
      text: "Only authorized information may be used.",
    },
    {
      id: "uncertainty",
      title: "Show uncertainty",
      text: "Low confidence increases caution.",
    },
    {
      id: "safety",
      title: "Safety first",
      text: "The Safety Layer can interrupt assistance.",
    }
  ],
  humanOversightHeading: "Human Oversight",
  humanOversight: [
    "Human reviewers remain responsible for consequential choices.",
    "Assistance may inform. It may not close the decision."
  ],
  scopeHeading: "Current Development Scope",
  scope: [
    "This page defines architecture only.",
    "It does not claim clinical deployment or autonomous medical action.",
    "Status remains conceptual."
  ],
  futureHeading: "Future Topics",
  futureIntro:
    "Topics below come from the shared registry. They mark later documentation needs. They are not delivery promises.",
  relatedTechnologyHeading: "Related Technology",
  relatedSystemsHeading: "Related Systems",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: systemsDisciplineReferenceLinks("/systems/ai-decision-support/"),
  sectionNav: SYSTEMS_DISCIPLINE_SECTION_NAV,
};
