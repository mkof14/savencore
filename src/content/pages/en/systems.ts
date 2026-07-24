import type {
  EngineeringLink,
  EngineeringPrinciple,
  PageMetadata,
} from "@/components/engineering/engineering-types";
import { systemsNavChildren } from "@/navigation/site-navigation";

/**
 * Systems domain index — Content Sprint Systems.
 * Entity titles, summaries, statuses and relations come from the registry
 * via SystemsCategoryList. This file holds editorial index prose only.
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
    version: "0.1",
    lastUpdated: "2026-07-24",
    readingTime: "8 min",
    relatedDomain: "Technology, Applications, Research",
  },
  label: "Systems",
  title: "Engineering systems built on Technology foundations.",
  introduction:
    "Systems are the engineering components that use Technology foundations to support people under clear limits. This index explains what a system means in SAVEN Core, how systems connect to Applications and where to continue reading.",
  overviewHeading: "Executive Summary",
  overview: [
    "In SAVEN Core, a system is an engineering component with a defined role, inputs, outputs and limits. Systems use Technology foundations. They do not invent new disciplines. They organize how those disciplines work together under human oversight.",
    "This index lists published system pages. Continue from Technology into Systems, then to the Applications overview for context of use.",
  ],
  meaningHeading: "What a System Means",
  meaning: [
    "A system has a clear boundary. It explains what it does and what it does not do.",
    "Systems stay at architecture level on this site. Status labels describe documentation maturity, not production operation.",
    "Systems do not replace human judgment. They support review, exchange, safeguards and controlled interfaces.",
  ],
  technologyHeading: "How Systems Use Technology",
  technology: [
    "Technology defines shared disciplines such as Human Data, Privacy, Security, Artificial Intelligence, Automation and Robotics.",
    "Systems consume those foundations. For example, AI Decision Support depends on Artificial Intelligence. The Robotics Layer depends on Robotics and Automation.",
    "The Human Data Model is documented under Technology. Systems that need organized human context depend on it.",
  ],
  applicationsHeading: "How Systems Connect to Applications",
  applications: [
    "Applications describe where systems may be used. They are contexts of use, not product claims.",
    "Published system pages may name related application contexts from the registry. Leaf Application pages are not published yet.",
    "Continue to the Applications overview for the current public description of those contexts.",
  ],
  togetherHeading: "How Systems Work Together",
  together: [
    "The Knowledge Engine provides consistent context. AI Decision Support uses that context for human review.",
    "The Safety Layer constrains assistance and physical pathways. The Communication Layer carries approved exchange.",
    "Clinical Interfaces connect care workflows under limits. The Robotics Layer and Drone Systems connect approved instructions to physical or aerial pathways when authorized.",
  ],
  continueHeading: "Where to Continue",
  continue: [
    "Start with Knowledge Engine if you need shared context. Read AI Decision Support next for assistance under human judgment.",
    "Read Safety Layer and Communication Layer before physical or clinical pathways.",
    "Use Technology pages for the foundations each system depends on. Use Applications for contexts of use.",
  ],
  categoriesHeading: "Published Systems",
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "clear-boundaries",
      title: "Clear boundaries",
      text: "Each system states what it does and what it does not claim.",
    },
    {
      id: "technology-first",
      title: "Technology foundations first",
      text: "Systems build on published Technology disciplines. They do not redefine them.",
    },
    {
      id: "human-oversight",
      title: "Human oversight",
      text: "Important outcomes stay under human authority.",
    },
    {
      id: "safety-limits",
      title: "Safety limits",
      text: "Stop, defer and escalation rules apply across systems.",
    },
    {
      id: "no-overclaim",
      title: "No overclaim",
      text: "Architecture pages do not claim deployment, diagnosis, treatment or autonomous medical action.",
    },
  ],
  scopeHeading: "Current Development Scope",
  scope: [
    "This page is a knowledge index. It describes Systems architecture and published system pages.",
    "Status labels describe maturity of the architecture only. They do not mean systems are operating in production.",
    "This page makes no customer, partnership, certification or validation claims.",
  ],
  futureHeading: "Future Topics",
  futureIntro:
    "Topics below come from Systems entries in the shared registry. They mark later documentation needs. They are not delivery promises.",
  relatedDomainsHeading: "Related Domains",
  relatedDomainLinks: [
    { label: "Technology", href: "/technology/" },
    { label: "Applications", href: "/applications/" },
    { label: "Research", href: "/research/" },
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
    { label: "Research", href: "/research/" },
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
    { id: "future-expansion", label: "Future topics" },
    { id: "related-domains", label: "Related domains" },
    { id: "reference-links", label: "References" },
  ],
};
