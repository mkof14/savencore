import {
  SYSTEMS_DEVELOPMENT_NOTE,
  SYSTEMS_DISCIPLINE_SECTION_NAV,
  type SystemDisciplinePageContent,
} from "@/content/pages/en/system-discipline-types";
import { systemsDisciplineReferenceLinks } from "@/content/pages/en/systems-reference-links";

export const roboticsLayerPageContent: SystemDisciplinePageContent = {
  entityId: "robotics-layer",
  metadata: {
    category: "Systems",
    documentType: "Knowledge",
    status: "Architecture",
    version: "0.2",
    lastUpdated: "2026-07-24",
    readingTime: "7 min",
    relatedDomain: "Technology, Applications",
  },
  label: "Robotics Layer",
  title: "Approved interaction between digital systems and robotic systems.",
  introduction: "The Robotics Layer coordinates approved interaction between digital systems and robotic systems. It does not imply autonomous deployment without oversight.",
  developmentNote: SYSTEMS_DEVELOPMENT_NOTE,
  executiveSummaryHeading: "Executive Summary",
  executiveSummary: [
    "The Robotics Layer coordinates approved interaction between digital systems and robotic systems.",
    "It exists so physical assistance follows the same permission and safety rules as the rest of SAVEN Core.",
    "It builds on Technology foundations such as Robotics and Automation. Drone Systems apply this layer to aerial use. Applications describe where physical assistance may later matter."
  ],
  whyItMattersHeading: "Why It Matters",
  whyItMatters: [
    "Some assistance happens in physical space, not only on screens.",
    "Physical action needs stronger stop conditions.",
    "Approved interaction keeps people able to pause or reclaim control."
  ],
  purposeHeading: "Purpose",
  purpose: [
    "Coordinate approved digital-to-robotic interaction.",
    "Keep mobility and interaction inside operational boundaries.",
    "Support later application contexts without claiming deployed fleets."
  ],
  architectureRoleHeading: "Architecture Role",
  architectureRole: [
    "The Robotics Layer sits between assistance decisions and physical devices.",
    "Drone Systems specialize this layer for aerial pathways.",
    "The Safety Layer and Communication Layer constrain what may proceed."
  ],
  inputsHeading: "Inputs",
  inputs: [
    "Approved instructions and assistance intents.",
    "Safety and permission constraints.",
    "Environment and device context when authorized."
  ],
  outputsHeading: "Outputs",
  outputs: [
    "Governed pathways toward physical assistance.",
    "Stop and handoff points for people.",
    "Coordination signals with related systems."
  ],
  relationshipsHeading: "Relationships",
  relationshipsIntro:
    "These links come from the shared entity registry. They describe architecture dependencies, not live integrations.",
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "approved",
      title: "Approved interaction only",
      text: "Physical pathways need authorization.",
    },
    {
      id: "stop",
      title: "Stoppable action",
      text: "Physical pathways must be able to stop.",
    },
    {
      id: "handoff",
      title: "Human handoff",
      text: "People must be able to reclaim control.",
    },
    {
      id: "no-fleet",
      title: "No deployment claim",
      text: "This page does not claim operating robot fleets.",
    }
  ],
  humanOversightHeading: "Human Oversight",
  humanOversight: [
    "People remain responsible for consequential physical outcomes.",
    "The Robotics Layer may carry approved action. It does not grant its own authority."
  ],
  scopeHeading: "Current Development Scope",
  scope: [
    "This page defines architecture only.",
    "It does not name robot vendors or claim production deployment.",
    "Status remains conceptual."
  ],
  futureHeading: "Future Topics",
  futureIntro:
    "Topics below come from the shared registry. They mark later documentation needs. They are not delivery promises.",
  relatedTechnologyHeading: "Related Technology",
  relatedSystemsHeading: "Related Systems",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: systemsDisciplineReferenceLinks("/systems/robotics-layer/"),
  sectionNav: SYSTEMS_DISCIPLINE_SECTION_NAV,
};
