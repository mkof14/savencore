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
    version: "0.1",
    lastUpdated: "2026-07-24",
    readingTime: "8 min",
    relatedDomain: "Technology, Applications, Research",
  },
  label: "Robotics Layer",
  title: "Connection between approved instructions and physical robotic systems.",
  introduction: "The Robotics Layer connects digital decisions, approved instructions and physical robotic systems. It does not imply autonomous deployment without oversight.",
  developmentNote: SYSTEMS_DEVELOPMENT_NOTE,
  executiveSummaryHeading: "Executive Summary",
  executiveSummary: [
    "The Robotics Layer connects digital decisions, approved instructions and physical robotic systems. It does not imply autonomous deployment without oversight.",
    "It exists so physical assistance can follow the same permission and safety rules as other SAVEN Core systems. It depends on Robotics and Automation as Technology foundations."
  ],
  whyItMattersHeading: "Why It Matters",
  whyItMatters: [
    "Some assistance happens in physical space, not only on screens.",
    "Physical action needs stronger stop conditions and human control.",
    "The Robotics Layer translates approved intent into governed physical pathways.",
    "It prevents the claim that robots act without oversight."
  ],
  purposeHeading: "Purpose",
  purpose: [
    "Connect intelligence and interfaces to physical assistance capabilities.",
    "Keep mobility and interaction inside operational boundaries.",
    "Support later application contexts without claiming deployed robot fleets."
  ],
  responsibilitiesHeading: "Core Responsibilities",
  responsibilitiesIntro:
    "These responsibilities describe architecture roles. They do not claim production operation.",
  responsibilities: [
    {
      id: "connect",
      title: "Connect digital to physical",
      text: "Carry approved instructions toward physical assistance pathways.",
    },
    {
      id: "bound",
      title: "Keep action bounded",
      text: "Physical behavior stays inside purpose, permission and stop conditions.",
    },
    {
      id: "handoff",
      title: "Support human handoff",
      text: "People must be able to pause, redirect or reclaim control.",
    },
    {
      id: "coordinate",
      title: "Coordinate with related systems",
      text: "Work with Communication Layer, Safety Layer and Drone Systems where relevant.",
    }
  ],
  architectureRoleHeading: "Architecture Role",
  architectureRole: [
    "The Robotics Layer sits between assistance decisions and physical devices or interfaces.",
    "Automation may define bounded behavior. Robotics Technology names the physical discipline.",
    "The Safety Layer can stop or defer physical pathways."
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
  relationshipsHeading: "Relationships to Other Systems",
  relationshipsIntro:
    "Links below come from the shared entity registry. They describe architecture, not live integrations.",
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "oversight",
      title: "Oversight required",
      text: "Physical action without oversight is outside this architecture.",
    },
    {
      id: "stoppable",
      title: "Stoppable action",
      text: "Physical pathways must be able to stop.",
    },
    {
      id: "permissioned",
      title: "Permissioned presence",
      text: "Devices should not act in a person’s environment without approval.",
    },
    {
      id: "no-fleet-claim",
      title: "No deployment claim",
      text: "This page does not claim operating robot fleets.",
    },
    {
      id: "safety-linked",
      title: "Safety-linked",
      text: "The Safety Layer constrains physical assistance.",
    }
  ],
  humanOversightHeading: "Human Oversight",
  humanOversight: [
    "People remain responsible for consequential physical outcomes.",
    "The Robotics Layer may carry approved action. It does not grant its own authority."
  ],
  scopeHeading: "Current Development Scope",
  scope: [
    "This page defines the Robotics Layer as architecture.",
    "It does not name robot vendors or claim production deployment.",
    "Status remains conceptual."
  ],
  futureHeading: "Future Topics",
  futureIntro:
    "Topics below come from the shared registry. They mark later documentation needs. They are not delivery promises.",
  relatedTechnologyHeading: "Related Technology",
  relatedResearchHeading: "Related Research",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: systemsDisciplineReferenceLinks("/systems/robotics-layer/"),
  sectionNav: SYSTEMS_DISCIPLINE_SECTION_NAV,
};
