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
    version: "0.2",
    lastUpdated: "2026-07-24",
    readingTime: "7 min",
    relatedDomain: "Technology, Applications",
  },
  label: "Clinical Interfaces",
  title: "Controlled connection points for clinical workflows.",
  introduction: "Clinical Interfaces are controlled connection points between SAVEN Core and clinical workflows. They do not diagnose, treat or practice autonomous medicine.",
  developmentNote: SYSTEMS_DEVELOPMENT_NOTE,
  executiveSummaryHeading: "Executive Summary",
  executiveSummary: [
    "Clinical Interfaces are controlled connection points between SAVEN Core and clinical workflows. They do not diagnose, treat or practice autonomous medicine.",
    "They exist so care environments can use organized context and decision support under permissions.",
    "They depend on Technology foundations such as Human Data, Interoperability and Privacy, and on systems such as the Human Data Model, AI Decision Support and the Safety Layer. Applications such as hospitals and healthcare name the contexts of use."
  ],
  whyItMattersHeading: "Why It Matters",
  whyItMatters: [
    "Clinical work needs clear touchpoints with digital systems.",
    "Unclear interfaces invite overclaim and role confusion.",
    "Controlled connections keep people responsible for care."
  ],
  purposeHeading: "Purpose",
  purpose: [
    "Define controlled connection points for clinical workflows.",
    "Present authorized context and support to approved roles.",
    "Refuse diagnosis, treatment and autonomous medical action."
  ],
  architectureRoleHeading: "Architecture Role",
  architectureRole: [
    "Clinical Interfaces sit at the edge between SAVEN Core systems and care workflows.",
    "They may use AI Decision Support under the Safety Layer.",
    "The Communication Layer carries only approved exchange."
  ],
  inputsHeading: "Inputs",
  inputs: [
    "Authorized human context.",
    "Assistance intended for human review.",
    "Role and permission rules for care settings."
  ],
  outputsHeading: "Outputs",
  outputs: [
    "Controlled workflow connection points.",
    "Role-aware views of allowed information.",
    "Escalation paths to human authority."
  ],
  relationshipsHeading: "Relationships",
  relationshipsIntro:
    "These links come from the shared entity registry. They describe architecture dependencies, not live integrations.",
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "no-dx",
      title: "No diagnosis",
      text: "This system does not diagnose.",
    },
    {
      id: "no-tx",
      title: "No treatment",
      text: "This system does not treat or prescribe.",
    },
    {
      id: "no-auto",
      title: "No autonomous medicine",
      text: "People remain responsible for clinical decisions.",
    },
    {
      id: "roles",
      title: "Role-limited",
      text: "Only approved roles may see sensitive context.",
    }
  ],
  humanOversightHeading: "Human Oversight",
  humanOversight: [
    "Clinicians and authorized roles remain responsible for care decisions.",
    "Interfaces may present information. They do not act as the clinician."
  ],
  scopeHeading: "Current Development Scope",
  scope: [
    "This page defines architecture only.",
    "It does not claim medical-device approval or clinical deployment.",
    "Status remains planned."
  ],
  futureHeading: "Future Topics",
  futureIntro:
    "Topics below come from the shared registry. They mark later documentation needs. They are not delivery promises.",
  relatedTechnologyHeading: "Related Technology",
  relatedSystemsHeading: "Related Systems",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: systemsDisciplineReferenceLinks("/systems/clinical-interfaces/"),
  sectionNav: SYSTEMS_DISCIPLINE_SECTION_NAV,
};
