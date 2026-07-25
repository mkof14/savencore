import {
  TECHNOLOGY_DEVELOPMENT_NOTE,
  TECHNOLOGY_DISCIPLINE_SECTION_NAV,
  type TechnologyDisciplinePageContent,
} from "@/content/pages/en/technology-discipline-types";
import { technologyDisciplineReferenceLinks } from "@/content/pages/en/technology-reference-links";

export const privacyPageContent: TechnologyDisciplinePageContent = {
  entityId: "privacy",
  metadata: {
    category: "Technology",
    documentType: "Knowledge",
    status: "Architecture",
    version: "0.1",
    lastUpdated: "2026-07-24",
    readingTime: "8 min",
    relatedDomain: "Technology, Human Data, Security",
  },
  label: "Privacy",
  title: "Limits on what information may be used, why and by whom.",
  introduction:
    "Privacy is the Technology discipline that limits what information about a person may be used, why it may be used and who may see it.",
  developmentNote: TECHNOLOGY_DEVELOPMENT_NOTE,
  executiveSummaryHeading: "Executive Summary",
  executiveSummary: [
    "Privacy defines what information about a person may be used, why it may be used and who may see it. It keeps purpose limitation structural inside SAVEN Core.",
    "It matters because Human Data and the Human Data Model only remain trustworthy when unnecessary exposure is refused by design. Privacy works with Security; it is not a marketing claim or a certification badge.",
  ],
  whyItMattersHeading: "Why It Matters",
  whyItMatters: [
    "Useful systems need some human context. That need can become harmful without firm limits.",
    "Privacy protects people by making purpose, permission and access part of the architecture.",
    "Without Privacy, Human Data risks becoming unrestricted collection.",
    "SAVEN Core treats Privacy as engineering structure, not optional policy language.",
  ],
  purposeHeading: "Purpose",
  purpose: [
    "Define the limits that govern use of information about a person.",
    "Reduce unnecessary exposure before systems interpret or assist.",
    "Keep purpose limitation visible across Technology, systems and trust constraints.",
  ],
  coreConceptsHeading: "Core Concepts",
  coreConceptsIntro:
    "These concepts describe Privacy architecture. They do not describe legal filings or product certifications.",
  coreConcepts: [
    {
      id: "purpose-limitation",
      title: "Purpose limitation",
      text: "Information may be used only for a clear, approved reason.",
    },
    {
      id: "minimization",
      title: "Minimization",
      text: "Use the least information needed for that reason. Extra detail is not a default advantage.",
    },
    {
      id: "access-boundaries",
      title: "Access boundaries",
      text: "Who may see information must be explicit and reviewable.",
    },
    {
      id: "revocability",
      title: "Change and withdrawal",
      text: "Permissions and preferences should remain possible to change when architecture allows.",
    },
  ],
  relationshipsHeading: "Relationships",
  relationshipsIntro:
    "Links below come from the shared registry. They describe architecture, not live integrations.",
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "structurally-enforced",
      title: "Structurally enforced",
      text: "Privacy limits belong in architecture, not only in statements of intent.",
    },
    {
      id: "least-information",
      title: "Least information",
      text: "Prefer less exposure when the same assistance purpose can still be met.",
    },
    {
      id: "paired-with-security",
      title: "Paired with Security",
      text: "Privacy sets limits on use. Security protects pathways against misuse.",
    },
    {
      id: "human-oversight",
      title: "Human oversight",
      text: "Important privacy decisions remain under human authority.",
    },
    {
      id: "no-certification-claim",
      title: "No certification claim",
      text: "This page describes architecture. It does not claim completed audits or approvals.",
    },
  ],
  scopeHeading: "Scope",
  scope: [
    "This page defines Privacy as architecture inside the Technology domain.",
    "It does not name vendors, regulations as product claims or completed certifications.",
    "No production privacy platform is claimed here.",
  ],
  futureHeading: "Related topics",
  futureIntro:
    "Topics below are drawn from the Privacy entry in the shared registry and provide context for related architecture.",
  relatedSystemsHeading: "Related Systems",
  relatedResearchHeading: "Related Research",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: technologyDisciplineReferenceLinks("/technology/privacy/"),
  sectionNav: TECHNOLOGY_DISCIPLINE_SECTION_NAV,
};
