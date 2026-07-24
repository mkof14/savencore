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
    version: "0.1",
    lastUpdated: "2026-07-24",
    readingTime: "8 min",
    relatedDomain: "Technology, Applications, Research",
  },
  label: "Safety Layer",
  title: "Safeguards, limits, checks and escalation across systems.",
  introduction: "The Safety Layer applies safeguards, limits, checks and escalation rules across systems. Safety is structural, not a certification badge.",
  developmentNote: SYSTEMS_DEVELOPMENT_NOTE,
  executiveSummaryHeading: "Executive Summary",
  executiveSummary: [
    "The Safety Layer applies safeguards, limits, checks and escalation rules across SAVEN Core systems. It encodes when to stop, defer or escalate.",
    "It exists because assistance pathways can affect people. Privacy and Security protect information and access; the Safety Layer constrains operational behavior under human oversight."
  ],
  whyItMattersHeading: "Why It Matters",
  whyItMatters: [
    "Helpful systems can still cause harm without stop conditions.",
    "Safety must be shared across systems, not reinvented in each one.",
    "Escalation keeps people in control when risk rises.",
    "SAVEN Core treats safety as architecture, not marketing language."
  ],
  purposeHeading: "Purpose",
  purpose: [
    "Encode operational boundaries across systems.",
    "Define escalation, fallback and conditions to stop or defer.",
    "Support trust constraints without claiming completed certifications."
  ],
  responsibilitiesHeading: "Core Responsibilities",
  responsibilitiesIntro:
    "These responsibilities describe architecture roles. They do not claim production operation.",
  responsibilities: [
    {
      id: "boundaries",
      title: "Set boundaries",
      text: "Define what systems may do and what they must not do.",
    },
    {
      id: "escalate",
      title: "Escalate risk",
      text: "Move attention to human authority when conditions require it.",
    },
    {
      id: "fallback",
      title: "Provide fallback",
      text: "Prefer stop or defer behavior when uncertainty or risk is too high.",
    },
    {
      id: "cross-cutting",
      title: "Apply across systems",
      text: "Keep the same safety expectations visible to multiple components.",
    }
  ],
  architectureRoleHeading: "Architecture Role",
  architectureRole: [
    "The Safety Layer is cross-cutting. It is not a child of one subsystem alone.",
    "It works with Privacy and Security as Technology foundations.",
    "Robotics Layer, Drone Systems and AI Decision Support inherit its limits."
  ],
  inputsHeading: "Inputs",
  inputs: [
    "Risk and boundary definitions.",
    "Signals that conditions have changed.",
    "Human authority requirements for consequential action."
  ],
  outputsHeading: "Outputs",
  outputs: [
    "Stop, defer and escalation rules.",
    "Shared safety constraints for other systems.",
    "Clear points where people must intervene."
  ],
  relationshipsHeading: "Relationships to Other Systems",
  relationshipsIntro:
    "Links below come from the shared entity registry. They describe architecture, not live integrations.",
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "structural",
      title: "Structural safety",
      text: "Safety belongs in architecture, not only in statements of intent.",
    },
    {
      id: "stoppable",
      title: "Stoppable systems",
      text: "If a pathway cannot stop or defer, it is not ready.",
    },
    {
      id: "human-first",
      title: "Human-first escalation",
      text: "Rising risk increases human control, not machine autonomy.",
    },
    {
      id: "no-badge",
      title: "No certification claim",
      text: "This page does not claim completed safety audits or approvals.",
    },
    {
      id: "paired-trust",
      title: "Paired with trust",
      text: "Safety works with Privacy and Security, not instead of them.",
    }
  ],
  humanOversightHeading: "Human Oversight",
  humanOversight: [
    "People define and review safety boundaries.",
    "Systems may enforce limits. People remain responsible for important overrides and approvals."
  ],
  scopeHeading: "Current Development Scope",
  scope: [
    "This page defines the Safety Layer as architecture.",
    "It does not claim certified safety products or production control rooms.",
    "Status is active development as architecture only."
  ],
  futureHeading: "Future Topics",
  futureIntro:
    "Topics below come from the shared registry. They mark later documentation needs. They are not delivery promises.",
  relatedTechnologyHeading: "Related Technology",
  relatedResearchHeading: "Related Research",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: systemsDisciplineReferenceLinks("/systems/safety-layer/"),
  sectionNav: SYSTEMS_DISCIPLINE_SECTION_NAV,
};
