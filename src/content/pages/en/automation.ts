import {
  TECHNOLOGY_DEVELOPMENT_NOTE,
  TECHNOLOGY_DISCIPLINE_SECTION_NAV,
  type TechnologyDisciplinePageContent,
} from "@/content/pages/en/technology-discipline-types";
import { technologyDisciplineReferenceLinks } from "@/content/pages/en/technology-reference-links";

export const automationPageContent: TechnologyDisciplinePageContent = {
  entityId: "automation",
  metadata: {
    category: "Technology",
    documentType: "Knowledge",
    status: "Architecture",
    version: "0.1",
    lastUpdated: "2026-07-24",
    readingTime: "8 min",
    relatedDomain: "Technology, Artificial Intelligence, Robotics",
  },
  label: "Automation",
  title: "Controlled system behavior for tasks that can be delegated safely.",
  introduction:
    "Automation is the Technology discipline for controlled system behavior when a task can be delegated safely under purpose, permission and human intervention.",
  developmentNote: TECHNOLOGY_DEVELOPMENT_NOTE,
  executiveSummaryHeading: "Executive Summary",
  executiveSummary: [
    "Automation defines controlled system behavior for tasks that can be delegated safely. It stays bounded by purpose, permission, risk and the ability for people to intervene.",
    "It matters because some repeatable work may be delegated—without handing over open-ended authority. Automation works with Artificial Intelligence and Robotics, but each keeps a distinct role.",
  ],
  whyItMattersHeading: "Why It Matters",
  whyItMatters: [
    "Not every helpful action needs a person to perform every step by hand.",
    "Automation can carry bounded tasks when rules and stop conditions are clear.",
    "Without bounds, automation language can imply uncontrolled systems.",
    "SAVEN Core treats Automation as delegated behavior under oversight, not free-running control.",
  ],
  purposeHeading: "Purpose",
  purpose: [
    "Define when system behavior may run without constant manual steps.",
    "Keep delegation inside purpose, permission and risk limits.",
    "Preserve the ability for people to stop, review or take back control.",
  ],
  coreConceptsHeading: "Core Concepts",
  coreConceptsIntro:
    "These concepts describe Automation architecture. They are not product workflows or vendor tools.",
  coreConcepts: [
    {
      id: "safe-delegation",
      title: "Safe delegation",
      text: "A task may be automated only when purpose, risk and stop conditions are clear.",
    },
    {
      id: "bounded-behavior",
      title: "Bounded behavior",
      text: "Automated steps stay inside defined limits. They do not expand themselves.",
    },
    {
      id: "intervention",
      title: "Human intervention",
      text: "People must be able to pause, override or reclaim control when needed.",
    },
    {
      id: "fallback",
      title: "Fallback",
      text: "When conditions are unclear or unsafe, automation should stop or defer.",
    },
  ],
  relationshipsHeading: "Relationships",
  relationshipsIntro:
    "Links below come from the shared registry. They describe architecture, not live integrations.",
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "purpose-bound",
      title: "Purpose-bound",
      text: "Automation exists for a defined task, not for open-ended action.",
    },
    {
      id: "stoppable",
      title: "Stoppable",
      text: "If people cannot intervene, the task is not ready for automation in this architecture.",
    },
    {
      id: "risk-aware",
      title: "Risk-aware",
      text: "Higher-consequence tasks need stronger limits and review.",
    },
    {
      id: "distinct-from-ai",
      title: "Distinct from Artificial Intelligence",
      text: "Automation carries bounded behavior. Artificial Intelligence may help interpret. Neither replaces human judgment.",
    },
    {
      id: "human-oversight",
      title: "Human oversight",
      text: "Important outcomes remain under human authority.",
    },
  ],
  scopeHeading: "Current Development Scope",
  scope: [
    "This page defines Automation as architecture inside the Technology domain.",
    "It does not name vendors, robots-as-products or production automation services.",
    "No unsupervised operational systems are claimed here.",
  ],
  futureHeading: "Future Topics",
  futureIntro:
    "Topics below come from the Automation entity in the shared registry. They are documentation placeholders, not delivery promises.",
  relatedSystemsHeading: "Related Systems",
  relatedResearchHeading: "Related Research",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: technologyDisciplineReferenceLinks(
    "/technology/automation/",
  ),
  sectionNav: TECHNOLOGY_DISCIPLINE_SECTION_NAV,
};
