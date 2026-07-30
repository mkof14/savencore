import type {
  EngineeringLink,
  EngineeringPrinciple,
  PageMetadata,
} from "@/components/engineering/engineering-types";
import { systemsNavChildren } from "@/navigation/site-navigation";

/**
 * Systems domain index — Core Architecture Sprint.
 * Published system list is registry-driven via SystemsCategoryList.
 */

export type SystemsPageContent = {
  metadata: PageMetadata;
  label: string;
  title: string;
  introduction: string;
  overviewHeading: string;
  overview: readonly string[];
  meaningHeading: string;
  meaning: readonly string[];
  technologyHeading: string;
  technology: readonly string[];
  applicationsHeading: string;
  applications: readonly string[];
  togetherHeading: string;
  together: readonly string[];
  continueHeading: string;
  continue: readonly string[];
  categoriesHeading: string;
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

export const systemsPageContent: SystemsPageContent = {
  metadata: {
    category: "Systems",
    documentType: "Knowledge",
    status: "Architecture",
    version: "0.2",
    lastUpdated: "2026-07-24",
    readingTime: "8 min",
    relatedDomain: "Technology, Applications",
  },
  label: "Systems",
  title: "How SAVEN Core systems work together.",
  introduction:
    "Systems explain how SAVEN Core works. Technology provides foundations. Systems combine those foundations under clear limits. Applications describe where that work may later be used.",
  overviewHeading: "Executive Summary",
  overview: [
    "Systems are the engineering components that show how SAVEN Core works. Each system has a role, inputs, outputs and limits.",
    "Technology comes first. Systems use those foundations. Applications come after, as contexts of use—not as product claims.",
    "This index is the landing page for the Systems domain. It lists every published system and where to continue.",
  ],
  meaningHeading: "What a System Means",
  meaning: [
    "A system has a clear boundary.",
    "It states what it does and what it does not do.",
    "On this site, systems are architecture. Status labels describe documentation maturity, not production operation.",
  ],
  technologyHeading: "Technology → Systems",
  technology: [
    "Technology defines shared disciplines such as Human Data, Privacy, Security, Artificial Intelligence, Automation and Robotics.",
    "Systems do not redefine those disciplines. They use them.",
    "The Human Data Model is documented under Technology. Systems that need organized human context depend on it.",
  ],
  applicationsHeading: "Systems → Applications",
  applications: [
    "Applications describe where systems may be used.",
    "They are contexts of use, not claims of deployment.",
    "The Applications overview provides the current public description for application contexts.",
  ],
  togetherHeading: "How the Systems Work Together",
  together: [
    "The Knowledge Engine preserves shared context. AI Decision Support analyzes that context to support people.",
    "The Safety Layer applies validation, limits, review and escalation. The Communication Layer coordinates approved exchange.",
    "Clinical Interfaces connect care workflows under strict medical boundaries. The Robotics Layer coordinates approved physical interaction. Drone Systems apply that layer to aerial pathways.",
    "The Robotics Layer and SAVEN Robotics Interface are related but not the same: the Robotics Layer is this index's architecture entry for physical interaction; SAVEN Robotics Interface is the flagship shared communication and control workstream (In Development) where robots and devices actually connect to SAVEN under human command.",
  ],
  continueHeading: "Where to Continue",
  continue: [
    "Start with Knowledge Engine for shared context.",
    "Read AI Decision Support, then Safety Layer and Communication Layer.",
    "Continue to Clinical Interfaces, Robotics Layer and Drone Systems as needed. Use Technology for foundations and Applications for contexts of use.",
  ],
  categoriesHeading: "Published Systems",
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "chain",
      title: "Keep the chain clear",
      text: "Technology feeds Systems. Systems feed Applications. Do not collapse these layers.",
    },
    {
      id: "boundaries",
      title: "Clear boundaries",
      text: "Each system states what it does and what it refuses to claim.",
    },
    {
      id: "oversight",
      title: "Human oversight",
      text: "Important outcomes stay under human authority.",
    },
    {
      id: "safety",
      title: "Shared safety",
      text: "Validation, limits and escalation apply across systems.",
    },
    {
      id: "no-overclaim",
      title: "No overclaim",
      text: "Architecture pages do not claim deployment, diagnosis, treatment or autonomous medicine.",
    },
  ],
  scopeHeading: "Scope",
  scope: [
    "This page is the Systems domain landing page.",
    "It describes architecture and published system pages only.",
    "It makes no customer, partnership, certification or validation claims.",
  ],
  futureHeading: "Related topics",
  futureIntro:
    "Topics below are drawn from Systems entries in the shared registry and provide context for related architecture.",
  relatedDomainsHeading: "Related Domains",
  relatedDomainLinks: [
    { label: "Technology", href: "/technology/" },
    { label: "Applications", href: "/applications/" },
    { label: "Research", href: "/applications/research-applications/" },
    { label: "Foundation", href: "/foundation/" },
    { label: "Purpose", href: "/purpose/" },
  ],
  referenceHeading: "Reference Links",
  referenceLinks: [
    ...systemsNavChildren
      .filter((item) => item.href !== "/systems/")
      .map((item) => ({ label: item.label, href: item.href })),
    { label: "Technology", href: "/technology/" },
    { label: "Human Data Model", href: "/technology/human-data-model/" },
    { label: "Applications", href: "/applications/" },
    { label: "Research", href: "/applications/research-applications/" },
    { label: "Foundation", href: "/foundation/" },
    { label: "Purpose", href: "/purpose/" },
  ],
  developmentNote:
    "Systems pages describe intended architecture. They do not imply commercial deployment, clinical use, regulatory approval or autonomous operation.",
  sectionNav: [
    { id: "systems-overview", label: "Summary" },
    { id: "what-a-system-means", label: "Meaning" },
    { id: "systems-and-technology", label: "Technology" },
    { id: "systems-and-applications", label: "Applications" },
    { id: "systems-together", label: "Working together" },
    { id: "where-to-continue", label: "Continue" },
    { id: "systems-categories", label: "Published systems" },
    { id: "engineering-principles", label: "Principles" },
    { id: "current-development-scope", label: "Scope" },
    { id: "future-expansion", label: "Related topics" },
    { id: "related-domains", label: "Related domains" },
    { id: "reference-links", label: "References" },
  ],
};
