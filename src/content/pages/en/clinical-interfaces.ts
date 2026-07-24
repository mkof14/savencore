import {
  SYSTEMS_DEVELOPMENT_NOTE,
  SYSTEMS_DISCIPLINE_SECTION_NAV,
  type SystemDisciplinePageContent,
} from "@/content/pages/en/system-discipline-types";
import { systemsDisciplineReferenceLinks } from "@/content/pages/en/systems-reference-links";

export const clinicalInterfacesPageContent: SystemDisciplinePageContent = {
  entityId: "clinical-interfaces",
  metadata: {
    category: "Systems",
    documentType: "Knowledge",
    status: "Architecture",
    version: "0.1",
    lastUpdated: "2026-07-24",
    readingTime: "8 min",
    relatedDomain: "Technology, Applications, Research",
  },
  label: "Clinical Interfaces",
  title: "Controlled interaction points for clinical workflows.",
  introduction: "Clinical Interfaces provide controlled interaction points between SAVEN Core systems and clinical workflows. They do not claim diagnosis, treatment or autonomous medical action.",
  developmentNote: SYSTEMS_DEVELOPMENT_NOTE,
  executiveSummaryHeading: "Executive Summary",
  executiveSummary: [
    "Clinical Interfaces provide controlled interaction points between SAVEN Core systems and clinical workflows. They do not claim diagnosis, treatment or autonomous medical action.",
    "They exist so care environments can use organized human context and decision support under permissions. They depend on the Human Data Model, Interoperability, Privacy and the Safety Layer."
  ],
  whyItMattersHeading: "Why It Matters",
  whyItMatters: [
    "Clinical work needs clear interaction points with digital systems.",
    "Unclear interfaces can confuse roles and overclaim medical authority.",
    "Clinical Interfaces keep interaction controlled and reviewable.",
    "They support hospitals and care contexts without claiming device approval."
  ],
  purposeHeading: "Purpose",
  purpose: [
    "Define structured interfaces for clinical and care-environment workflows.",
    "Connect authorized context and assistance to human clinical roles.",
    "Avoid any claim of diagnosis, treatment or autonomous medical action."
  ],
  responsibilitiesHeading: "Core Responsibilities",
  responsibilitiesIntro:
    "These responsibilities describe architecture roles. They do not claim production operation.",
  responsibilities: [
    {
      id: "touchpoints",
      title: "Define touchpoints",
      text: "Describe where people in care settings may interact with SAVEN Core systems.",
    },
    {
      id: "roles",
      title: "Respect roles",
      text: "Keep access aligned to approved roles and permissions.",
    },
    {
      id: "assist-only",
      title: "Assist only",
      text: "Support human clinical judgment. Do not replace it.",
    },
    {
      id: "safety",
      title: "Stay under safety",
      text: "Escalate or stop when safety constraints require it.",
    }
  ],
  architectureRoleHeading: "Architecture Role",
  architectureRole: [
    "Clinical Interfaces sit at the edge between SAVEN Core systems and care workflows.",
    "They may use Human Data Model context and AI Decision Support under limits.",
    "The Communication Layer carries approved exchange; Privacy and Safety constrain use."
  ],
  inputsHeading: "Inputs",
  inputs: [
    "Authorized human context.",
    "Assistance outputs intended for human review.",
    "Role and permission rules for care settings."
  ],
  outputsHeading: "Outputs",
  outputs: [
    "Controlled interaction points for clinical workflows.",
    "Role-aware views of allowed information and assistance.",
    "Escalation paths to human authority."
  ],
  relationshipsHeading: "Relationships to Other Systems",
  relationshipsIntro:
    "Links below come from the shared entity registry. They describe architecture, not live integrations.",
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "no-diagnosis",
      title: "No diagnosis claim",
      text: "This system does not diagnose.",
    },
    {
      id: "no-treatment",
      title: "No treatment claim",
      text: "This system does not treat or prescribe.",
    },
    {
      id: "no-autonomy",
      title: "No autonomous medical action",
      text: "People remain responsible for clinical decisions.",
    },
    {
      id: "permissioned",
      title: "Permissioned access",
      text: "Only authorized roles may see sensitive context.",
    },
    {
      id: "planned-status",
      title: "Planned architecture",
      text: "Public status remains planned. No deployment is claimed.",
    }
  ],
  humanOversightHeading: "Human Oversight",
  humanOversight: [
    "Clinicians and authorized roles remain responsible for care decisions.",
    "Interfaces may present information. They do not act as the clinician."
  ],
  scopeHeading: "Current Development Scope",
  scope: [
    "This page defines Clinical Interfaces as architecture.",
    "It does not claim medical-device approval, clinical deployment or patient services.",
    "Status remains planned."
  ],
  futureHeading: "Future Topics",
  futureIntro:
    "Topics below come from the shared registry. They mark later documentation needs. They are not delivery promises.",
  relatedTechnologyHeading: "Related Technology",
  relatedResearchHeading: "Related Research",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: systemsDisciplineReferenceLinks("/systems/clinical-interfaces/"),
  sectionNav: SYSTEMS_DISCIPLINE_SECTION_NAV,
};
