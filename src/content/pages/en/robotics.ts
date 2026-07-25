import {
  TECHNOLOGY_DEVELOPMENT_NOTE,
  TECHNOLOGY_DISCIPLINE_SECTION_NAV,
  type TechnologyDisciplinePageContent,
} from "@/content/pages/en/technology-discipline-types";
import { technologyDisciplineReferenceLinks } from "@/content/pages/en/technology-reference-links";

export const roboticsPageContent: TechnologyDisciplinePageContent = {
  entityId: "robotics",
  metadata: {
    category: "Technology",
    documentType: "Knowledge",
    status: "Architecture",
    version: "0.1",
    lastUpdated: "2026-07-24",
    readingTime: "8 min",
    relatedDomain: "Technology, Automation, Interoperability",
  },
  label: "Robotics",
  title: "Physical interaction and assistance under governance.",
  introduction:
    "Robotics is the Technology discipline for devices and interfaces that act in the physical world under governance, permission and safety limits.",
  developmentNote: TECHNOLOGY_DEVELOPMENT_NOTE,
  executiveSummaryHeading: "Executive Summary",
  executiveSummary: [
    "Robotics is the Technology discipline for devices and interfaces that act in the physical world under governance. It enables physical interaction, mobility and assistance inside clear limits.",
    "It matters because some support happens in real spaces—homes, hospitals and other environments—not only on screens. Robotics stays connected to Automation, safety constraints and human oversight. It does not claim deployed robot products here.",
  ],
  whyItMattersHeading: "Why It Matters",
  whyItMatters: [
    "Some assistance requires movement, sensing or physical interaction in real environments.",
    "Robotics names that physical capability as an engineering discipline inside SAVEN Core.",
    "Without clear governance, physical systems can overclaim readiness or authority.",
    "SAVEN Core treats Robotics as governed physical assistance architecture, not a product catalog.",
  ],
  purposeHeading: "Purpose",
  purpose: [
    "Define how physical devices and interfaces may support people under permission and safety limits.",
    "Connect physical action to the same oversight rules that govern other Technology disciplines.",
    "Prepare later Robotics Layer and related systems work without claiming current deployment.",
  ],
  coreConceptsHeading: "Core Concepts",
  coreConceptsIntro:
    "These concepts describe Robotics architecture. They are not hardware catalogs or vendor platforms.",
  coreConcepts: [
    {
      id: "physical-assistance",
      title: "Physical assistance",
      text: "Robotics concerns action and interaction in the physical world, not only digital displays.",
    },
    {
      id: "governed-action",
      title: "Governed action",
      text: "Physical action proceeds only inside purpose, permission and stop conditions.",
    },
    {
      id: "human-robot-boundary",
      title: "Human–robot boundary",
      text: "People remain able to direct, pause or refuse physical assistance pathways.",
    },
    {
      id: "environment-awareness",
      title: "Environment awareness",
      text: "Physical systems must respect the surroundings and safety limits of the setting they enter.",
    },
  ],
  relationshipsHeading: "Relationships",
  relationshipsIntro:
    "Links below come from the shared registry. They describe architecture, not live integrations.",
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "safety-first",
      title: "Safety first",
      text: "Physical action needs clear stop conditions and escalation paths.",
    },
    {
      id: "permissioned-presence",
      title: "Permissioned presence",
      text: "A device should not act in a person’s environment without approved purpose and authority.",
    },
    {
      id: "paired-with-automation",
      title: "Paired with Automation",
      text: "Automation may define bounded behavior. Robotics concerns the physical means of action.",
    },
    {
      id: "interoperable-interfaces",
      title: "Interoperable interfaces",
      text: "Physical systems still depend on Interoperability, Security and Communication Layer limits when they connect.",
    },
    {
      id: "human-oversight",
      title: "Human oversight",
      text: "Important physical outcomes remain under human authority.",
    },
  ],
  scopeHeading: "Scope",
  scope: [
    "This page defines Robotics as architecture inside the Technology domain.",
    "It does not name robot vendors, device models or production fleets.",
    "Status remains conceptual for this discipline. No operational deployment is claimed.",
  ],
  futureHeading: "Related topics",
  futureIntro:
    "Topics below are drawn from the Robotics entry in the shared registry and provide context for related architecture.",
  relatedSystemsHeading: "Related Systems",
  relatedResearchHeading: "Related Research",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: technologyDisciplineReferenceLinks("/technology/robotics/"),
  sectionNav: TECHNOLOGY_DISCIPLINE_SECTION_NAV,
};
