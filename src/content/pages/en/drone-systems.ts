import {
  SYSTEMS_DEVELOPMENT_NOTE,
  SYSTEMS_DISCIPLINE_SECTION_NAV,
  type SystemDisciplinePageContent,
} from "@/content/pages/en/system-discipline-types";
import { systemsDisciplineReferenceLinks } from "@/content/pages/en/systems-reference-links";

export const droneSystemsPageContent: SystemDisciplinePageContent = {
  entityId: "drone-systems",
  metadata: {
    category: "Systems",
    documentType: "Knowledge",
    status: "Architecture",
    version: "0.1",
    lastUpdated: "2026-07-24",
    readingTime: "8 min",
    relatedDomain: "Technology, Applications, Research",
  },
  label: "Drone Systems",
  title: "Sensing, communication and controlled aerial operations.",
  introduction: "Drone Systems apply sensing, communication and controlled aerial operations within approved use cases. They avoid military, surveillance or unsupported operational claims.",
  developmentNote: SYSTEMS_DEVELOPMENT_NOTE,
  executiveSummaryHeading: "Executive Summary",
  executiveSummary: [
    "Drone Systems apply sensing, communication and controlled aerial operations within approved use cases. They are constrained by permission, risk and human authority.",
    "They exist for authorized inspection, mapping and monitoring concepts—not open surveillance. They depend on Robotics, Automation, Security, the Communication Layer and the Safety Layer."
  ],
  whyItMattersHeading: "Why It Matters",
  whyItMatters: [
    "Some approved tasks may need aerial sensing or inspection.",
    "Aerial systems need strict permission and stop conditions.",
    "Drone Systems keep those operations inside human authority.",
    "SAVEN Core rejects unsupported military or mass-surveillance framing here."
  ],
  purposeHeading: "Purpose",
  purpose: [
    "Define an aerial operations framework for authorized sensing, inspection, mapping and monitoring.",
    "Keep missions under permission, risk limits and human authority.",
    "Avoid military, covert surveillance or unsupported operational claims."
  ],
  responsibilitiesHeading: "Core Responsibilities",
  responsibilitiesIntro:
    "These responsibilities describe architecture roles. They do not claim production operation.",
  responsibilities: [
    {
      id: "authorize",
      title: "Require authorization",
      text: "Aerial activity proceeds only with approved purpose and authority.",
    },
    {
      id: "sense",
      title: "Support approved sensing",
      text: "Collect only what an approved mission is allowed to collect.",
    },
    {
      id: "communicate",
      title: "Use controlled communication",
      text: "Exchange mission signals through the Communication Layer under limits.",
    },
    {
      id: "stop",
      title: "Stop when required",
      text: "Defer or end operations when safety or permission fails.",
    }
  ],
  architectureRoleHeading: "Architecture Role",
  architectureRole: [
    "Drone Systems sit with the Robotics Layer under shared safety and communication constraints.",
    "They are not a general surveillance platform in this documentation.",
    "Application contexts such as emergency or agriculture remain conceptual only."
  ],
  inputsHeading: "Inputs",
  inputs: [
    "Authorized mission purpose and limits.",
    "Safety and airspace boundary constraints where applicable.",
    "Approved sensing and communication permissions."
  ],
  outputsHeading: "Outputs",
  outputs: [
    "Controlled aerial operation pathways.",
    "Authorized sensing results within mission limits.",
    "Stop and escalation points for human operators."
  ],
  relationshipsHeading: "Relationships to Other Systems",
  relationshipsIntro:
    "Links below come from the shared entity registry. They describe architecture, not live integrations.",
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "approved-use",
      title: "Approved use only",
      text: "No mission without a clear approved purpose.",
    },
    {
      id: "no-military",
      title: "No military claim",
      text: "This page does not describe military systems.",
    },
    {
      id: "no-surveillance",
      title: "No open surveillance claim",
      text: "This page does not claim mass surveillance capabilities.",
    },
    {
      id: "human-authority",
      title: "Human authority",
      text: "Operators remain responsible for consequential aerial action.",
    },
    {
      id: "safety-linked",
      title: "Safety-linked",
      text: "The Safety Layer can stop or defer operations.",
    }
  ],
  humanOversightHeading: "Human Oversight",
  humanOversight: [
    "Human operators authorize and supervise consequential missions.",
    "Drone Systems may execute approved plans. They do not invent their own authority."
  ],
  scopeHeading: "Current Development Scope",
  scope: [
    "This page defines Drone Systems as architecture.",
    "It does not claim operational fleets, customers or flight services.",
    "Status remains conceptual."
  ],
  futureHeading: "Future Topics",
  futureIntro:
    "Topics below come from the shared registry. They mark later documentation needs. They are not delivery promises.",
  relatedTechnologyHeading: "Related Technology",
  relatedResearchHeading: "Related Research",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: systemsDisciplineReferenceLinks("/systems/drone-systems/"),
  sectionNav: SYSTEMS_DISCIPLINE_SECTION_NAV,
};
