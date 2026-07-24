import type {
  EngineeringLink,
  EngineeringPrinciple,
  PageMetadata,
} from "@/components/engineering/engineering-types";
import { getRelatedDomainNav } from "@/content/knowledge";

/**
 * Technology domain page — long-form content only (Phase 3.1).
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
    relatedDomain: "Systems, Research, Trust, Foundation",
  },
  label: "Technology",
  title: "Technical disciplines that support foundation and systems.",
  introduction:
    "Technology organizes the engineering disciplines that connect human-centered foundation layers to systems and application contexts. Each discipline is defined in the shared knowledge entity registry and remains under explicit development status.",
  overviewHeading: "Technology Overview",
  overview: [
    "The Technology domain describes how artificial intelligence, human data, robotics, automation, privacy, security, data infrastructure and interoperability are scoped for SAVEN Core.",
    "Disciplines are structural. They do not imply production deployment, clinical use, regulatory approval or completed commercial products. Status labels describe architectural maturity only.",
    "Systems consume technology capabilities under permissions, safety boundaries and human oversight. Research and Trust constrain how those capabilities may expand.",
  ],
  categoriesHeading: "Technology Categories",
  relationshipsHeading: "Technology Relationships",
  relationshipsIntro:
    "Technology connects downward into systems, research questions, application contexts and trust constraints. The matrix below aggregates registry relationships from Technology entities; it is not a runtime graph.",
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "interoperability",
      title: "Interoperability",
      text: "Interfaces exchange information only through scoped, permissioned contracts that remain subordinate to safety and privacy constraints.",
    },
    {
      id: "safety",
      title: "Safety",
      text: "Operational boundaries, escalation and stop conditions are structural. Safety is not treated as a decorative trust signal or certification claim.",
    },
    {
      id: "privacy",
      title: "Privacy",
      text: "Purpose limitation, minimization and access control define what human context may be used, why it may be used and who may access it.",
    },
    {
      id: "human-oversight",
      title: "Human Oversight",
      text: "Assistance pathways retain human authority for consequential action. Automation and decision support do not claim autonomous decision authority.",
    },
    {
      id: "scalability",
      title: "Scalability",
      text: "Architecture is designed so capabilities can expand only when permissions, evidence and governance boundaries support that expansion.",
    },
    {
      id: "maintainability",
      title: "Maintainability",
      text: "Disciplines, interfaces and status labels stay explicit so engineering knowledge remains reviewable as systems and research evolve.",
    },
  ],
  scopeHeading: "Current Development Scope",
  scope: [
    "Current public Technology content defines discipline architecture, relationships and development status. It is a knowledge-domain index, not an operations console or product catalog.",
    "Active-development labels identify disciplines under architectural work. Conceptual and planned labels identify disciplines that are structured but not claimed as operating systems.",
    "No customer deployments, partnership outcomes, regulatory certifications or scientific validation results are asserted on this page.",
  ],
  futureHeading: "Future Expansion",
  futureIntro:
    "The topics below are taken from Technology entity futureTopics in the registry. They are placeholders for later documentation, not delivery commitments.",
  relatedDomainsHeading: "Related Domains",
  relatedDomainLinks: getRelatedDomainNav("technology").map((item) => ({
    label: item.label,
    href: item.href,
  })),
  referenceHeading: "Reference Links",
  referenceLinks: [
    { label: "Foundation", href: "/foundation/" },
    { label: "Purpose", href: "/purpose/" },
    { label: "Research", href: "/research/" },
    { label: "Applications", href: "/applications/" },
  ],
  developmentNote:
    "Technology information describes intended architecture and development relationships. It does not imply commercial deployment, clinical use or regulatory approval.",
  sectionNav: [
    { id: "technology-overview", label: "Overview" },
    { id: "technology-categories", label: "Categories" },
    { id: "technology-relationships", label: "Relationships" },
    { id: "engineering-principles", label: "Principles" },
    { id: "current-development-scope", label: "Scope" },
    { id: "future-expansion", label: "Future expansion" },
    { id: "related-domains", label: "Related domains" },
    { id: "reference-links", label: "References" },
  ],
};
