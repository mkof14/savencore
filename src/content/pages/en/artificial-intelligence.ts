import {
  TECHNOLOGY_DEVELOPMENT_NOTE,
  TECHNOLOGY_DISCIPLINE_SECTION_NAV,
  type TechnologyDisciplinePageContent,
} from "@/content/pages/en/technology-discipline-types";
import { technologyDisciplineReferenceLinks } from "@/content/pages/en/technology-reference-links";

export const artificialIntelligencePageContent: TechnologyDisciplinePageContent =
  {
    entityId: "artificial-intelligence",
    metadata: {
      category: "Technology",
      documentType: "Knowledge",
      status: "Architecture",
      version: "0.1",
      lastUpdated: "2026-07-24",
      readingTime: "8 min",
      relatedDomain: "Technology, Automation, Human Data",
    },
    label: "Artificial Intelligence",
    title: "Assisted judgment under permissions and human oversight.",
    introduction:
      "Artificial Intelligence is the Technology discipline for models and rules that help interpret context and support careful assistance within defined limits.",
    developmentNote: TECHNOLOGY_DEVELOPMENT_NOTE,
    executiveSummaryHeading: "Executive Summary",
    executiveSummary: [
      "Artificial Intelligence in SAVEN Core means models and rules that help interpret context and support careful assistance under permissions and human oversight.",
      "It matters because systems may need help understanding complex situations—without replacing human judgment. AI Decision Support uses available information to support human review. It does not replace human judgment.",
    ],
    whyItMattersHeading: "Why It Matters",
    whyItMatters: [
      "People and care settings present complex, changing context.",
      "Artificial Intelligence can help organize options and surface patterns within limits.",
      "Without clear boundaries, AI language can overclaim authority.",
      "SAVEN Core treats Artificial Intelligence as assisted judgment, not autonomous control.",
    ],
    purposeHeading: "Purpose",
    purpose: [
      "Support interpretation of authorized context under explicit limits.",
      "Help people and approved systems evaluate options without claiming independent decision power.",
      "Keep uncertainty handling and human oversight as part of the architecture.",
    ],
    coreConceptsHeading: "Core Concepts",
    coreConceptsIntro:
      "These concepts describe Artificial Intelligence architecture. They are not product claims or model-vendor details.",
    coreConcepts: [
      {
        id: "assisted-judgment",
        title: "Assisted judgment",
        text: "AI may help people understand options. It does not become the final authority for important outcomes.",
      },
      {
        id: "permissioned-context",
        title: "Permissioned context",
        text: "AI may use only authorized information allowed by Privacy and the Human Data Model.",
      },
      {
        id: "uncertainty",
        title: "Uncertainty handling",
        text: "When confidence is low, the architecture should favor caution and human review.",
      },
      {
        id: "bounded-assistance",
        title: "Bounded assistance",
        text: "What AI may suggest stays inside defined purpose and safety limits.",
      },
    ],
    relationshipsHeading: "Relationships",
    relationshipsIntro:
      "Links below come from the shared registry. They describe architecture, not live integrations.",
    principlesHeading: "Engineering Principles",
    principles: [
      {
        id: "human-authority",
        title: "Human authority",
        text: "Important outcomes remain under human judgment.",
      },
      {
        id: "no-autonomous-claims",
        title: "No autonomous claims",
        text: "This discipline does not claim independent decision authority over people.",
      },
      {
        id: "privacy-aware",
        title: "Privacy-aware",
        text: "AI use of Human Data stays limited to approved purpose and access rules.",
      },
      {
        id: "reviewable-assistance",
        title: "Reviewable assistance",
        text: "Assistance pathways should remain understandable enough for authorized review.",
      },
      {
        id: "paired-with-automation",
        title: "Paired with Automation",
        text: "Automation may carry out bounded tasks. Artificial Intelligence may help interpret. Neither replaces oversight.",
      },
    ],
    scopeHeading: "Current Development Scope",
    scope: [
      "This page defines Artificial Intelligence as architecture inside the Technology domain.",
      "It does not name models, vendors, training datasets or production AI services.",
      "No autonomous clinical or commercial decision systems are claimed here.",
    ],
    futureHeading: "Future Topics",
    futureIntro:
      "Topics below come from the Artificial Intelligence entity in the shared registry. They are documentation placeholders, not delivery promises.",
    relatedSystemsHeading: "Related Systems",
    relatedResearchHeading: "Related Research",
    relatedApplicationsHeading: "Related Applications",
    referenceHeading: "Reference Links",
    referenceLinks: technologyDisciplineReferenceLinks(
      "/technology/artificial-intelligence/",
    ),
    sectionNav: TECHNOLOGY_DISCIPLINE_SECTION_NAV,
  };
