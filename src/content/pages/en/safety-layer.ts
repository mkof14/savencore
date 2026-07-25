import {
  SYSTEMS_DEVELOPMENT_NOTE,
  SYSTEMS_DISCIPLINE_SECTION_NAV,
  type SystemDisciplinePageContent,
} from "@/content/pages/en/system-discipline-types";
import { systemsDisciplineReferenceLinks } from "@/content/pages/en/systems-reference-links";

export const safetyLayerPageContent: SystemDisciplinePageContent = {
  entityId: "safety-layer",
  metadata: {
    category: "Systems",
    documentType: "Knowledge",
    status: "Architecture",
    version: "0.2",
    lastUpdated: "2026-07-24",
    readingTime: "7 min",
    relatedDomain: "Technology, Applications",
  },
  label: "Safety Layer",
  title: "Validation, limits, review and escalation across systems.",
  introduction: "The Safety Layer applies validation, limits, human review, risk reduction and escalation across SAVEN Core systems.",
  developmentNote: SYSTEMS_DEVELOPMENT_NOTE,
  executiveSummaryHeading: "Executive Summary",
  executiveSummary: [
    "The Safety Layer applies validation, limits, human review, risk reduction and escalation across systems.",
    "It exists because assistance and physical pathways can affect people. Shared stop rules protect the whole architecture.",
    "Technology foundations such as Privacy and Security protect information and access. The Safety Layer constrains what systems may do next. Applications inherit those limits in each context of use."
  ],
  whyItMattersHeading: "Why It Matters",
  whyItMatters: [
    "Helpful systems can still cause harm without stop conditions.",
    "Each system must not invent its own unsafe rules.",
    "Escalation keeps people in control when risk rises."
  ],
  purposeHeading: "Purpose",
  purpose: [
    "Validate that action stays inside approved bounds.",
    "Apply limits, risk reduction and human review points.",
    "Escalate or stop when conditions require it."
  ],
  architectureRoleHeading: "Architecture Role",
  architectureRole: [
    "The Safety Layer is cross-cutting. It is not a child of one subsystem alone.",
    "It constrains AI Decision Support, Clinical Interfaces, the Robotics Layer and Drone Systems.",
    "It works with Privacy and Security. It does not replace them."
  ],
  inputsHeading: "Inputs",
  inputs: [
    "Boundary and risk definitions.",
    "Signals that conditions have changed.",
    "Human authority requirements for consequential action."
  ],
  outputsHeading: "Outputs",
  outputs: [
    "Stop, defer and escalation rules.",
    "Shared limits for other systems.",
    "Clear points where people must intervene."
  ],
  relationshipsHeading: "Relationships",
  relationshipsIntro:
    "These links come from the shared entity registry. They describe architecture dependencies, not live integrations.",
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "validate",
      title: "Validate first",
      text: "Action proceeds only inside approved bounds.",
    },
    {
      id: "stop",
      title: "Stoppable",
      text: "If a pathway cannot stop or defer, it is not ready.",
    },
    {
      id: "escalate",
      title: "Escalate risk",
      text: "Rising risk increases human control.",
    },
    {
      id: "no-badge",
      title: "No certification claim",
      text: "This page does not claim completed safety audits.",
    }
  ],
  humanOversightHeading: "Human Oversight",
  humanOversight: [
    "People define and review safety boundaries.",
    "Systems may enforce limits. People remain responsible for important overrides."
  ],
  scopeHeading: "Scope",
  scope: [
    "This page defines architecture only.",
    "It does not claim certified safety products or production control rooms.",
    "Status is active development as architecture only."
  ],
  futureHeading: "Related topics",
  futureIntro:
    "Topics below are drawn from the shared registry and provide context for related architecture.",
  relatedTechnologyHeading: "Related Technology",
  relatedSystemsHeading: "Related Systems",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: systemsDisciplineReferenceLinks("/systems/safety-layer/"),
  sectionNav: SYSTEMS_DISCIPLINE_SECTION_NAV,
};
