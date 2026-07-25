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
    version: "0.2",
    lastUpdated: "2026-07-24",
    readingTime: "7 min",
    relatedDomain: "Technology, Applications",
  },
  label: "Drone Systems",
  title: "The Robotics Layer applied to aerial systems.",
  introduction: "Drone Systems apply the Robotics Layer to aerial systems within approved use cases. This page avoids unsupported operational claims.",
  developmentNote: SYSTEMS_DEVELOPMENT_NOTE,
  executiveSummaryHeading: "Executive Summary",
  executiveSummary: [
    "Drone Systems apply the Robotics Layer to aerial systems within approved use cases.",
    "They exist for authorized sensing, inspection, mapping and monitoring concepts under human authority.",
    "They depend on Robotics, Automation, Security, the Communication Layer and the Safety Layer. Applications may later name contexts such as emergency or agriculture. This page does not claim those operations are live."
  ],
  whyItMattersHeading: "Why It Matters",
  whyItMatters: [
    "Some approved tasks may need aerial sensing or inspection.",
    "Aerial pathways need strict permission and stop conditions.",
    "Clear limits prevent unsupported operational claims."
  ],
  purposeHeading: "Purpose",
  purpose: [
    "Apply the Robotics Layer to approved aerial pathways.",
    "Keep missions under permission, risk limits and human authority.",
    "Avoid military, mass-surveillance or unsupported operational claims."
  ],
  architectureRoleHeading: "Architecture Role",
  architectureRole: [
    "Drone Systems specialize the Robotics Layer for aerial use.",
    "They are not a general surveillance platform in this documentation.",
    "The Safety Layer can stop or defer operations."
  ],
  inputsHeading: "Inputs",
  inputs: [
    "Authorized mission purpose and limits.",
    "Safety boundary constraints where applicable.",
    "Approved sensing and communication permissions."
  ],
  outputsHeading: "Outputs",
  outputs: [
    "Controlled aerial operation pathways.",
    "Authorized sensing results within mission limits.",
    "Stop and escalation points for human operators."
  ],
  relationshipsHeading: "Relationships",
  relationshipsIntro:
    "These links come from the shared entity registry. They describe architecture dependencies, not live integrations.",
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "approved",
      title: "Approved use only",
      text: "No mission without a clear approved purpose.",
    },
    {
      id: "robotics",
      title: "Robotics Layer first",
      text: "Aerial action inherits the same digital-to-physical rules.",
    },
    {
      id: "no-claim",
      title: "No unsupported claims",
      text: "This page does not claim fleets, customers or open surveillance.",
    },
    {
      id: "human",
      title: "Human authority",
      text: "Operators remain responsible for consequential aerial action.",
    }
  ],
  humanOversightHeading: "Human Oversight",
  humanOversight: [
    "Human operators authorize and supervise consequential missions.",
    "Drone Systems may execute approved plans. They do not invent authority."
  ],
  scopeHeading: "Scope",
  scope: [
    "This page defines architecture only.",
    "It does not claim operational fleets or flight services.",
    "Status remains conceptual."
  ],
  futureHeading: "Related topics",
  futureIntro:
    "Topics below are drawn from the shared registry and provide context for related architecture.",
  relatedTechnologyHeading: "Related Technology",
  relatedSystemsHeading: "Related Systems",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: systemsDisciplineReferenceLinks("/systems/drone-systems/"),
  sectionNav: SYSTEMS_DISCIPLINE_SECTION_NAV,
};
