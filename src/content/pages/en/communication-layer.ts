import {
  SYSTEMS_DEVELOPMENT_NOTE,
  SYSTEMS_DISCIPLINE_SECTION_NAV,
  type SystemDisciplinePageContent,
} from "@/content/pages/en/system-discipline-types";
import { systemsDisciplineReferenceLinks } from "@/content/pages/en/systems-reference-links";

export const communicationLayerPageContent: SystemDisciplinePageContent = {
  entityId: "communication-layer",
  metadata: {
    category: "Systems",
    documentType: "Knowledge",
    status: "Architecture",
    version: "0.2",
    lastUpdated: "2026-07-24",
    readingTime: "7 min",
    relatedDomain: "Technology, Applications",
  },
  label: "Communication Layer",
  title: "Coordinated exchange inside SAVEN Core and approved external systems.",
  introduction: "The Communication Layer coordinates information exchange between internal SAVEN Core components and approved external systems.",
  developmentNote: SYSTEMS_DEVELOPMENT_NOTE,
  executiveSummaryHeading: "Executive Summary",
  executiveSummary: [
    "The Communication Layer coordinates information exchange between internal SAVEN Core components and approved external systems.",
    "It exists so systems can send signals and commands without opening uncontrolled channels.",
    "It uses Technology foundations such as Interoperability, Security and Data Infrastructure. Systems such as Clinical Interfaces and the Robotics Layer depend on it. Applications describe where exchange may be needed."
  ],
  whyItMattersHeading: "Why It Matters",
  whyItMatters: [
    "Systems must exchange information to work together.",
    "Uncontrolled exchange creates privacy and safety risk.",
    "Structured pathways keep authority and purpose visible."
  ],
  purposeHeading: "Purpose",
  purpose: [
    "Coordinate approved internal exchange.",
    "Connect only to approved external systems.",
    "Remain subordinate to safety and permission limits."
  ],
  architectureRoleHeading: "Architecture Role",
  architectureRole: [
    "The Communication Layer sits between system components and approved external interfaces.",
    "It carries exchange. It does not grant its own authority.",
    "The Safety Layer can forbid an action even if a channel exists."
  ],
  inputsHeading: "Inputs",
  inputs: [
    "Approved messages, signals and commands.",
    "Authorization and purpose constraints.",
    "Safety limits on when exchange may proceed."
  ],
  outputsHeading: "Outputs",
  outputs: [
    "Structured exchange between approved components.",
    "Controlled pathways to authorized external systems.",
    "Auditability where architecture requires it."
  ],
  relationshipsHeading: "Relationships",
  relationshipsIntro:
    "These links come from the shared entity registry. They describe architecture dependencies, not live integrations.",
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "structured",
      title: "Structured exchange",
      text: "Messages follow defined roles and limits.",
    },
    {
      id: "approved",
      title: "Approved only",
      text: "External connections are not open by default.",
    },
    {
      id: "safety",
      title: "Safety first",
      text: "Communication must not enable a forbidden action.",
    },
    {
      id: "no-impl",
      title: "No implementation detail",
      text: "This page names no vendors, protocols or APIs.",
    }
  ],
  humanOversightHeading: "Human Oversight",
  humanOversight: [
    "People approve consequential external connections.",
    "The Communication Layer carries messages. It does not invent authority."
  ],
  scopeHeading: "Current Development Scope",
  scope: [
    "This page defines architecture only.",
    "It does not claim production messaging platforms.",
    "Status remains conceptual."
  ],
  futureHeading: "Future Topics",
  futureIntro:
    "Topics below come from the shared registry. They mark later documentation needs. They are not delivery promises.",
  relatedTechnologyHeading: "Related Technology",
  relatedSystemsHeading: "Related Systems",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: systemsDisciplineReferenceLinks("/systems/communication-layer/"),
  sectionNav: SYSTEMS_DISCIPLINE_SECTION_NAV,
};
