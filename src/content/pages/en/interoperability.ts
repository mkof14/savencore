import {
  TECHNOLOGY_DEVELOPMENT_NOTE,
  TECHNOLOGY_DISCIPLINE_SECTION_NAV,
  type TechnologyDisciplinePageContent,
} from "@/content/pages/en/technology-discipline-types";
import { technologyDisciplineReferenceLinks } from "@/content/pages/en/technology-reference-links";

export const interoperabilityPageContent: TechnologyDisciplinePageContent = {
  entityId: "interoperability",
  metadata: {
    category: "Technology",
    documentType: "Knowledge",
    status: "Architecture",
    version: "0.1",
    lastUpdated: "2026-07-24",
    readingTime: "8 min",
    relatedDomain: "Technology, Data Infrastructure, Security",
  },
  label: "Interoperability",
  title: "How SAVEN Core exchanges information with approved environments.",
  introduction:
    "Interoperability defines how SAVEN Core systems may exchange information with approved external environments under clear limits.",
  developmentNote: TECHNOLOGY_DEVELOPMENT_NOTE,
  executiveSummaryHeading: "Executive Summary",
  executiveSummary: [
    "Interoperability is the Technology discipline that defines how SAVEN Core may exchange information with approved external environments. Exchange stays limited, permissioned and reviewable.",
    "It matters because hospitals, institutions and other settings may need shared information—without opening unrestricted access. Privacy, security and Data Infrastructure still govern what may move.",
  ],
  whyItMattersHeading: "Why It Matters",
  whyItMatters: [
    "SAVEN Core will not work only inside one closed room of systems.",
    "Useful assistance may need careful exchange with authorized outside environments.",
    "Without clear interoperability rules, exchange either fails or becomes too open.",
    "Interoperability keeps exchange possible and bounded at the same time.",
  ],
  purposeHeading: "Purpose",
  purpose: [
    "Define when and how SAVEN Core may share or receive authorized information outside its own systems.",
    "Keep every exchange subordinate to privacy, security and safety constraints.",
    "Support later institutional connections without inventing partners or products on this page.",
  ],
  coreConceptsHeading: "Core Concepts",
  coreConceptsIntro:
    "These ideas describe architecture roles. They are not product features or vendor standards.",
  coreConcepts: [
    {
      id: "approved-exchange",
      title: "Approved exchange",
      text: "Information moves only with a clear purpose and an approved pathway.",
    },
    {
      id: "scoped-contracts",
      title: "Scoped agreements",
      text: "What may be shared, with whom and for what reason must be explicit before exchange happens.",
    },
    {
      id: "subordinate-to-trust",
      title: "Trust comes first",
      text: "Interoperability never overrides privacy, security or safety limits.",
    },
    {
      id: "no-open-networks",
      title: "No open networks by default",
      text: "Connection is not the goal by itself. Controlled usefulness is the goal.",
    },
  ],
  relationshipsHeading: "Relationships",
  relationshipsIntro:
    "Links below come from the shared registry. They describe architecture, not live integrations.",
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "purpose-first",
      title: "Purpose first",
      text: "Exchange needs a clear reason. Connection without purpose is not progress.",
    },
    {
      id: "least-necessary",
      title: "Least necessary",
      text: "Share only the information required for the approved purpose.",
    },
    {
      id: "reviewability",
      title: "Reviewability",
      text: "Approved pathways should remain understandable to authorized reviewers.",
    },
    {
      id: "privacy-and-security",
      title: "Privacy and security",
      text: "Interoperability depends on Privacy and Security. It does not replace them.",
    },
    {
      id: "human-oversight",
      title: "Human oversight",
      text: "Important exchange decisions stay under human authority.",
    },
  ],
  scopeHeading: "Scope",
  scope: [
    "This page defines Interoperability as architecture inside the Technology domain.",
    "It does not name vendors, protocols, APIs or institutional partners.",
    "No production exchange systems are claimed here.",
  ],
  futureHeading: "Related topics",
  futureIntro:
    "Topics below are drawn from the Interoperability entry in the shared registry and provide context for related architecture.",
  relatedSystemsHeading: "Related Systems",
  relatedResearchHeading: "Related Research",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: technologyDisciplineReferenceLinks(
    "/technology/interoperability/",
  ),
  sectionNav: TECHNOLOGY_DISCIPLINE_SECTION_NAV,
};
