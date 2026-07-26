import type {
  EngineeringLink,
  EngineeringPrinciple,
  PageMetadata,
} from "@/components/engineering/engineering-types";
import { technologyNavChildren } from "@/navigation/site-navigation";

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
  title: "Engineering foundations for physical intelligence.",
  introduction:
    "Technology is the shared engineering base for SAVEN Core — the disciplines needed before systems can assist people under clear limits.",
  overviewHeading: "Executive Summary",
  overview: [
    "Shared disciplines such as Human Data, privacy, and artificial intelligence must be clear before systems can help people safely.",
    "Choose a discipline below to go deeper, or continue into Systems when you are ready.",
  ],
  categoriesHeading: "Disciplines",
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
  scopeHeading: "Scope",
  scope: [
    "This page is a knowledge index. It describes Technology architecture, relationships and scope.",
    "Status labels describe maturity of the architecture only. They do not mean systems are operating in production.",
    "This page makes no customer, partnership, certification or validation claims.",
  ],
  futureHeading: "Related topics",
  futureIntro:
    "Topics below are drawn from Technology entries in the shared registry and provide context for related architecture.",
  relatedDomainsHeading: "Related Domains",
  relatedDomainLinks: [
    { label: "Systems", href: "/systems/" },
    { label: "Foundation", href: "/foundation/" },
    { label: "Research", href: "/research/" },
    { label: "Applications", href: "/applications/" },
    { label: "Purpose", href: "/purpose/" },
  ],
  referenceHeading: "Reference Links",
  referenceLinks: [
    ...technologyNavChildren
      .filter((item) => item.href !== "/technology/")
      .map((item) => ({ label: item.label, href: item.href })),
    { label: "Systems", href: "/systems/" },
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
    { id: "future-expansion", label: "Related topics" },
    { id: "related-domains", label: "Related domains" },
    { id: "reference-links", label: "References" },
  ],
};
