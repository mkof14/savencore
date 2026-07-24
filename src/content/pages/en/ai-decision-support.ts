import {
  SYSTEMS_DEVELOPMENT_NOTE,
  SYSTEMS_DISCIPLINE_SECTION_NAV,
  type SystemDisciplinePageContent,
} from "@/content/pages/en/system-discipline-types";
import { systemsDisciplineReferenceLinks } from "@/content/pages/en/systems-reference-links";

export const aiDecisionSupportPageContent: SystemDisciplinePageContent = {
  entityId: "ai-decision-support",
  metadata: {
    category: "Systems",
    documentType: "Knowledge",
    status: "Architecture",
    version: "0.1",
    lastUpdated: "2026-07-24",
    readingTime: "8 min",
    relatedDomain: "Technology, Applications, Research",
  },
  label: "AI Decision Support",
  title: "Support for human review and decision-making.",
  introduction: "AI Decision Support uses available information to support human review and decision-making. It does not replace human judgment.",
  developmentNote: SYSTEMS_DEVELOPMENT_NOTE,
  executiveSummaryHeading: "Executive Summary",
  executiveSummary: [
    "AI Decision Support uses available information to support human review and decision-making. It does not replace human judgment.",
    "It exists so people can see options and context more clearly under permissions and safety limits. It depends on the Human Data Model and Knowledge Engine, and on Artificial Intelligence as a Technology foundation."
  ],
  whyItMattersHeading: "Why It Matters",
  whyItMatters: [
    "Complex situations are hard to review without structured assistance.",
    "People still need to remain responsible for important outcomes.",
    "AI Decision Support helps present options and context within limits.",
    "It prevents the false claim that machines decide for people."
  ],
  purposeHeading: "Purpose",
  purpose: [
    "Assist interpretation and option evaluation under explicit limits.",
    "Keep uncertainty and escalation visible to human reviewers.",
    "Support clinical and care interfaces without claiming medical authority."
  ],
  responsibilitiesHeading: "Core Responsibilities",
  responsibilitiesIntro:
    "These responsibilities describe architecture roles. They do not claim production operation.",
  responsibilities: [
    {
      id: "interpret",
      title: "Support interpretation",
      text: "Help people understand authorized context without inventing unrestricted facts.",
    },
    {
      id: "options",
      title: "Present options",
      text: "Surface possible next steps for human review when the architecture allows.",
    },
    {
      id: "bounds",
      title: "Stay inside bounds",
      text: "Remain connected to rules, uncertainty handling and stop conditions.",
    },
    {
      id: "no-replace",
      title: "Do not replace judgment",
      text: "Assistance ends where human decision authority begins.",
    }
  ],
  architectureRoleHeading: "Architecture Role",
  architectureRole: [
    "AI Decision Support sits after organized human context and knowledge context.",
    "It may inform Clinical Interfaces and other approved pathways.",
    "The Safety Layer constrains what assistance may do when risk rises."
  ],
  inputsHeading: "Inputs",
  inputs: [
    "Authorized context from the Human Data Model.",
    "Consistent references from the Knowledge Engine.",
    "Rules and limits from safety and privacy constraints."
  ],
  outputsHeading: "Outputs",
  outputs: [
    "Assistance for human review.",
    "Option and uncertainty presentation within limits.",
    "Escalation signals when conditions require human attention."
  ],
  relationshipsHeading: "Relationships to Other Systems",
  relationshipsIntro:
    "Links below come from the shared entity registry. They describe architecture, not live integrations.",
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "human-authority",
      title: "Human authority",
      text: "Important outcomes remain under human judgment.",
    },
    {
      id: "permissioned",
      title: "Permissioned use",
      text: "Only authorized information may inform assistance.",
    },
    {
      id: "uncertainty",
      title: "Uncertainty handling",
      text: "Low confidence should favor caution and review.",
    },
    {
      id: "no-autonomy",
      title: "No autonomous claims",
      text: "This system does not claim independent decision power over people.",
    },
    {
      id: "safety-linked",
      title: "Safety-linked",
      text: "Assistance remains subordinate to the Safety Layer.",
    }
  ],
  humanOversightHeading: "Human Oversight",
  humanOversight: [
    "Human reviewers remain responsible for consequential choices.",
    "AI Decision Support may inform. It may not close the decision."
  ],
  scopeHeading: "Current Development Scope",
  scope: [
    "This page defines AI Decision Support as architecture.",
    "It does not claim clinical deployment or autonomous medical action.",
    "Status remains conceptual."
  ],
  futureHeading: "Future Topics",
  futureIntro:
    "Topics below come from the shared registry. They mark later documentation needs. They are not delivery promises.",
  relatedTechnologyHeading: "Related Technology",
  relatedResearchHeading: "Related Research",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: systemsDisciplineReferenceLinks("/systems/ai-decision-support/"),
  sectionNav: SYSTEMS_DISCIPLINE_SECTION_NAV,
};
