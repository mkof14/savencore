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
    version: "0.1",
    lastUpdated: "2026-07-24",
    readingTime: "8 min",
    relatedDomain: "Technology, Applications, Research",
  },
  label: "Communication Layer",
  title: "Structured exchange between components and approved interfaces.",
  introduction: "The Communication Layer coordinates structured information exchange between SAVEN Core components and approved external interfaces.",
  developmentNote: SYSTEMS_DEVELOPMENT_NOTE,
  executiveSummaryHeading: "Executive Summary",
  executiveSummary: [
    "The Communication Layer coordinates structured information exchange between SAVEN Core components and approved external interfaces. Pathways stay permissioned and subordinate to safety constraints.",
    "It exists so systems can send signals and commands without opening uncontrolled channels. It depends on Interoperability, Security and Data Infrastructure as Technology foundations."
  ],
  whyItMattersHeading: "Why It Matters",
  whyItMatters: [
    "Systems must exchange information to work together.",
    "Uncontrolled exchange creates privacy and safety risk.",
    "The Communication Layer keeps exchange structured and limited.",
    "It supports people, devices and approved environments under the same rules."
  ],
  purposeHeading: "Purpose",
  purpose: [
    "Define how systems, people and authorized environments exchange signals and commands.",
    "Keep pathways permissioned and reviewable where required.",
    "Support Interoperability without inventing vendors or protocols on this page."
  ],
  responsibilitiesHeading: "Core Responsibilities",
  responsibilitiesIntro:
    "These responsibilities describe architecture roles. They do not claim production operation.",
  responsibilities: [
    {
      id: "coordinate",
      title: "Coordinate exchange",
      text: "Provide structured pathways for approved messages and commands.",
    },
    {
      id: "limit",
      title: "Limit access",
      text: "Allow only authorized participants to use a pathway.",
    },
    {
      id: "subordinate",
      title: "Stay under safety",
      text: "Communication remains subordinate to the Safety Layer.",
    },
    {
      id: "connect",
      title: "Connect components",
      text: "Help Robotics Layer, Drone Systems and Clinical Interfaces exchange what they are allowed to exchange.",
    }
  ],
  architectureRoleHeading: "Architecture Role",
  architectureRole: [
    "The Communication Layer sits between system components and approved external interfaces.",
    "It does not replace Interoperability policy. It carries exchange under those limits.",
    "Security protects pathways; Privacy still limits what human context may move."
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
    "Controlled interface pathways to authorized environments.",
    "Auditability where the architecture requires it."
  ],
  relationshipsHeading: "Relationships to Other Systems",
  relationshipsIntro:
    "Links below come from the shared entity registry. They describe architecture, not live integrations.",
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "structured",
      title: "Structured exchange",
      text: "Messages follow defined roles and limits.",
    },
    {
      id: "permissioned",
      title: "Permissioned pathways",
      text: "Exchange is not open by default.",
    },
    {
      id: "safety-first",
      title: "Safety first",
      text: "If safety forbids an action, communication must not enable it.",
    },
    {
      id: "no-vendors",
      title: "No vendor claims",
      text: "This page does not name networks, clouds or products.",
    },
    {
      id: "human-oversight",
      title: "Human oversight",
      text: "Important communication authorizations remain under human authority.",
    }
  ],
  humanOversightHeading: "Human Oversight",
  humanOversight: [
    "People approve consequential external connections.",
    "The Communication Layer may carry messages. It does not grant its own authority."
  ],
  scopeHeading: "Current Development Scope",
  scope: [
    "This page defines the Communication Layer as architecture.",
    "It does not claim production messaging platforms or protocol selections.",
    "Status remains conceptual."
  ],
  futureHeading: "Future Topics",
  futureIntro:
    "Topics below come from the shared registry. They mark later documentation needs. They are not delivery promises.",
  relatedTechnologyHeading: "Related Technology",
  relatedResearchHeading: "Related Research",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: systemsDisciplineReferenceLinks("/systems/communication-layer/"),
  sectionNav: SYSTEMS_DISCIPLINE_SECTION_NAV,
};
