import type {
  EngineeringLink,
  EngineeringPrinciple,
  PageMetadata,
} from "@/components/engineering/engineering-types";

/**
 * Technology domain page — long-form content (Phase 3.1 / Content Review 1).
 * Entity titles, summaries, statuses, relations, and futureTopics come from
 * the canonical registry via page components.
 */

export type TechnologyPageContent = {
  metadata: PageMetadata;
  label: string;
  title: string;
  introduction: string;
  overviewHeading: string;
  overview: readonly string[];
  categoriesHeading: string;
  relationshipsHeading: string;
  relationshipsIntro: string;
  principlesHeading: string;
  principles: readonly EngineeringPrinciple[];
  scopeHeading: string;
  scope: readonly string[];
  futureHeading: string;
  futureIntro: string;
  relatedDomainsHeading: string;
  relatedDomainLinks: readonly EngineeringLink[];
  referenceHeading: string;
  referenceLinks: readonly EngineeringLink[];
  developmentNote: string;
  sectionNav: readonly { id: string; label: string }[];
};

export const technologyPageContent: TechnologyPageContent = {
  metadata: {
    category: "Technology",
    documentType: "Knowledge",
    status: "Architecture",
    version: "0.1",
    lastUpdated: "2026-07-24",
    readingTime: "8 min",
    relatedDomain: "Foundation, Research, Applications",
  },
  label: "Technology",
  title: "Technical capabilities used to build SAVEN Core systems.",
  introduction:
    "Technology is the set of technical capabilities and engineering foundations used to build SAVEN Core systems. This index explains those disciplines and how they connect to later systems and applications.",
  overviewHeading: "Executive Summary",
  overview: [
    "Technology is the set of technical capabilities and engineering foundations used to build SAVEN Core systems. It matters because shared disciplines—such as Human Data, privacy and artificial intelligence—must be defined before systems can assist people under clear limits.",
    "This index lists those disciplines and how they connect to systems and applications. Continue with Human Data, then the Human Data Model.",
  ],
  categoriesHeading: "Technology Categories",
  relationshipsHeading: "Technology Relationships",
  relationshipsIntro:
    "Technology feeds systems, research topics, application contexts and trust constraints. The view below summarizes those links from the shared registry. It is a reading aid, not a live system map.",
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "interoperability",
      title: "Interoperability",
      text: "Systems exchange information only through clear, limited agreements. Safety and privacy rules still apply.",
    },
    {
      id: "safety",
      title: "Safety",
      text: "Boundaries, escalation and stop conditions are part of the design. Safety is not a slogan or a certification claim.",
    },
    {
      id: "privacy",
      title: "Privacy",
      text: "Privacy defines what information about a person may be used, why it may be used and who may see it.",
    },
    {
      id: "human-oversight",
      title: "Human Oversight",
      text: "Important actions stay under human authority. Automation and decision support do not replace human judgment.",
    },
    {
      id: "scalability",
      title: "Scalability",
      text: "Capabilities expand only when permissions, evidence and governance support that expansion.",
    },
    {
      id: "maintainability",
      title: "Maintainability",
      text: "Disciplines, interfaces and status labels stay explicit so the work remains reviewable over time.",
    },
  ],
  scopeHeading: "Current Development Scope",
  scope: [
    "This page is a knowledge index. It describes Technology architecture, relationships and development status.",
    "Status labels describe maturity of the architecture only. They do not mean systems are operating in production.",
    "This page makes no customer, partnership, certification or validation claims.",
  ],
  futureHeading: "Future Topics",
  futureIntro:
    "Topics below come from Technology entries in the shared registry. They mark later documentation needs. They are not delivery promises.",
  relatedDomainsHeading: "Related Domains",
  relatedDomainLinks: [
    { label: "Foundation", href: "/foundation/" },
    { label: "Research", href: "/research/" },
    { label: "Applications", href: "/applications/" },
    { label: "Purpose", href: "/purpose/" },
  ],
  referenceHeading: "Reference Links",
  referenceLinks: [
    { label: "Human Data", href: "/technology/human-data/" },
    { label: "Human Data Model", href: "/technology/human-data-model/" },
    { label: "Foundation", href: "/foundation/" },
    { label: "Research", href: "/research/" },
    { label: "Applications", href: "/applications/" },
    { label: "Purpose", href: "/purpose/" },
  ],
  developmentNote:
    "Technology pages describe intended architecture. They do not imply commercial deployment, clinical use or regulatory approval.",
  sectionNav: [
    { id: "technology-overview", label: "Summary" },
    { id: "technology-categories", label: "Categories" },
    { id: "technology-relationships", label: "Relationships" },
    { id: "engineering-principles", label: "Principles" },
    { id: "current-development-scope", label: "Scope" },
    { id: "future-expansion", label: "Future topics" },
    { id: "related-domains", label: "Related domains" },
    { id: "reference-links", label: "References" },
  ],
};
