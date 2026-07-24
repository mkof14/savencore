import {
  SYSTEMS_DEVELOPMENT_NOTE,
  SYSTEMS_DISCIPLINE_SECTION_NAV,
  type SystemDisciplinePageContent,
} from "@/content/pages/en/system-discipline-types";
import { systemsDisciplineReferenceLinks } from "@/content/pages/en/systems-reference-links";

export const knowledgeEnginePageContent: SystemDisciplinePageContent = {
  entityId: "knowledge-engine",
  metadata: {
    category: "Systems",
    documentType: "Knowledge",
    status: "Architecture",
    version: "0.1",
    lastUpdated: "2026-07-24",
    readingTime: "8 min",
    relatedDomain: "Technology, Applications, Research",
  },
  label: "Knowledge Engine",
  title: "Organized knowledge and consistent context for other components.",
  introduction: "The Knowledge Engine organizes knowledge and provides consistent context to other components. It does not make independent decisions.",
  developmentNote: SYSTEMS_DEVELOPMENT_NOTE,
  executiveSummaryHeading: "Executive Summary",
  executiveSummary: [
    "The Knowledge Engine organizes knowledge and provides consistent context to other SAVEN Core components. It does not make independent decisions.",
    "It exists so systems can share the same governed references instead of inventing informal views. It connects Technology foundations, research structure and system definitions under clear limits."
  ],
  whyItMattersHeading: "Why It Matters",
  whyItMatters: [
    "Systems need shared context to stay consistent.",
    "Without a knowledge layer, each system can invent its own informal view.",
    "The Knowledge Engine keeps references organized and reusable.",
    "It supports later assistance without becoming a decision-maker."
  ],
  purposeHeading: "Purpose",
  purpose: [
    "Organize engineering knowledge, models and governed references used across systems.",
    "Provide consistent context to components that are allowed to use it.",
    "Connect research, technology and system definitions without inventing publications."
  ],
  responsibilitiesHeading: "Core Responsibilities",
  responsibilitiesIntro:
    "These responsibilities describe architecture roles. They do not claim production operation.",
  responsibilities: [
    {
      id: "organize",
      title: "Organize knowledge",
      text: "Keep approved knowledge structures ordered so systems can find the same context.",
    },
    {
      id: "context",
      title: "Provide consistent context",
      text: "Offer the same authorized meaning of a topic across systems that may use it.",
    },
    {
      id: "govern",
      title: "Keep references governed",
      text: "Limit what counts as shared knowledge to approved, reviewable material.",
    },
    {
      id: "no-decisions",
      title: "Do not decide for people",
      text: "Support other components with context. Do not replace human judgment.",
    }
  ],
  architectureRoleHeading: "Architecture Role",
  architectureRole: [
    "The Knowledge Engine sits between organized information foundations and assistance systems.",
    "It uses Data Infrastructure and Artificial Intelligence as Technology foundations where relevant.",
    "AI Decision Support may use its context. The Knowledge Engine itself does not choose outcomes for people."
  ],
  inputsHeading: "Inputs",
  inputs: [
    "Authorized knowledge structures and references.",
    "Context organized through Human Data Model pathways where relevant.",
    "Research and engineering definitions approved for shared use."
  ],
  outputsHeading: "Outputs",
  outputs: [
    "Consistent context for approved systems.",
    "Governed references that other components can reuse.",
    "Structured links between technology, systems and research definitions."
  ],
  relationshipsHeading: "Relationships to Other Systems",
  relationshipsIntro:
    "Links below come from the shared entity registry. They describe architecture, not live integrations.",
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "consistency",
      title: "Consistency",
      text: "The same approved knowledge should mean the same thing across systems.",
    },
    {
      id: "no-autonomy",
      title: "No independent decisions",
      text: "Context support is not decision authority.",
    },
    {
      id: "governed-sources",
      title: "Governed sources",
      text: "Only approved material enters the shared knowledge layer.",
    },
    {
      id: "privacy-aware",
      title: "Privacy-aware",
      text: "Human context remains limited by Privacy and related trust constraints.",
    },
    {
      id: "reviewable",
      title: "Reviewable",
      text: "Shared knowledge should remain understandable to authorized reviewers.",
    }
  ],
  humanOversightHeading: "Human Oversight",
  humanOversight: [
    "People remain responsible for important outcomes.",
    "The Knowledge Engine may inform assistance. It does not close decisions for humans."
  ],
  scopeHeading: "Current Development Scope",
  scope: [
    "This page defines the Knowledge Engine as architecture.",
    "It does not claim a production knowledge platform or invented publications.",
    "Status is active development as architecture only."
  ],
  futureHeading: "Future Topics",
  futureIntro:
    "Topics below come from the shared registry. They mark later documentation needs. They are not delivery promises.",
  relatedTechnologyHeading: "Related Technology",
  relatedResearchHeading: "Related Research",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: systemsDisciplineReferenceLinks("/systems/knowledge-engine/"),
  sectionNav: SYSTEMS_DISCIPLINE_SECTION_NAV,
};
