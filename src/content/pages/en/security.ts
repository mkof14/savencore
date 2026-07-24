import {
  TECHNOLOGY_DEVELOPMENT_NOTE,
  TECHNOLOGY_DISCIPLINE_SECTION_NAV,
  type TechnologyDisciplinePageContent,
} from "@/content/pages/en/technology-discipline-types";
import { technologyDisciplineReferenceLinks } from "@/content/pages/en/technology-reference-links";

export const securityPageContent: TechnologyDisciplinePageContent = {
  entityId: "security",
  metadata: {
    category: "Technology",
    documentType: "Knowledge",
    status: "Architecture",
    version: "0.1",
    lastUpdated: "2026-07-24",
    readingTime: "8 min",
    relatedDomain: "Technology, Privacy, Interoperability",
  },
  label: "Security",
  title: "Protection of systems, interfaces and authorized pathways.",
  introduction:
    "Security is the Technology discipline that protects systems, interfaces and authorized information pathways from misuse and unauthorized access.",
  developmentNote: TECHNOLOGY_DEVELOPMENT_NOTE,
  executiveSummaryHeading: "Executive Summary",
  executiveSummary: [
    "Security protects SAVEN Core systems, interfaces and authorized information pathways from misuse and unauthorized access. It supports trust alongside Privacy and safety constraints.",
    "It matters because organized Human Data and careful interoperability still fail if pathways can be entered without authority. This page describes architecture, not certifications or vendor products.",
  ],
  whyItMattersHeading: "Why It Matters",
  whyItMatters: [
    "Assistance systems handle sensitive context and important actions.",
    "Without Security, Privacy rules can be bypassed by unauthorized access.",
    "Security keeps pathways and interfaces accountable to approved use.",
    "In SAVEN Core, Security is a structural discipline, not a badge or slogan.",
  ],
  purposeHeading: "Purpose",
  purpose: [
    "Protect systems and interfaces that handle authorized information or commands.",
    "Reduce unauthorized access and misuse of assistance pathways.",
    "Support Privacy and safety without claiming completed certifications.",
  ],
  coreConceptsHeading: "Core Concepts",
  coreConceptsIntro:
    "These concepts describe Security architecture. They are not product features or audit results.",
  coreConcepts: [
    {
      id: "authorized-access",
      title: "Authorized access",
      text: "Only approved actors and systems may use protected pathways.",
    },
    {
      id: "pathway-protection",
      title: "Pathway protection",
      text: "Information and commands move through paths that resist misuse.",
    },
    {
      id: "interface-discipline",
      title: "Interface discipline",
      text: "Points where systems meet people or other systems remain controlled.",
    },
    {
      id: "accountability",
      title: "Accountability",
      text: "Security supports review of who could access what, within architectural limits.",
    },
  ],
  relationshipsHeading: "Relationships",
  relationshipsIntro:
    "Links below come from the shared registry. They describe architecture, not live integrations.",
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "defense-of-limits",
      title: "Defense of limits",
      text: "Security protects the limits Privacy and safety define.",
    },
    {
      id: "least-privilege",
      title: "Least privilege",
      text: "Access should be no broader than the approved purpose requires.",
    },
    {
      id: "paired-with-privacy",
      title: "Paired with Privacy",
      text: "Security without Privacy can still expose too much. Privacy without Security can still be bypassed.",
    },
    {
      id: "human-oversight",
      title: "Human oversight",
      text: "Important security decisions remain under human authority.",
    },
    {
      id: "no-certification-claim",
      title: "No certification claim",
      text: "This page does not claim completed security audits or product certifications.",
    },
  ],
  scopeHeading: "Current Development Scope",
  scope: [
    "This page defines Security as architecture inside the Technology domain.",
    "It does not name vendors, tools or completed certifications.",
    "No production security platform is claimed here.",
  ],
  futureHeading: "Future Topics",
  futureIntro:
    "Topics below come from the Security entity in the shared registry. They are documentation placeholders, not delivery promises.",
  relatedSystemsHeading: "Related Systems",
  relatedResearchHeading: "Related Research",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: technologyDisciplineReferenceLinks("/technology/security/"),
  sectionNav: TECHNOLOGY_DISCIPLINE_SECTION_NAV,
};
