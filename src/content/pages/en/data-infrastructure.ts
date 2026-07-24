import type {
  EngineeringLink,
  EngineeringPrinciple,
  PageMetadata,
} from "@/components/engineering/engineering-types";

/**
 * Data Infrastructure knowledge page — Content Wave 1.2.
 * Long-form page content only. Relations and futureTopics come from
 * the canonical registry (entity id: data-infrastructure).
 */

export type DataInfrastructureResponsibility = {
  id: string;
  title: string;
  text: string;
};

export type DataInfrastructurePageContent = {
  metadata: PageMetadata;
  label: string;
  title: string;
  introduction: string;
  developmentNote: string;
  executiveSummaryHeading: string;
  executiveSummary: readonly string[];
  purposeHeading: string;
  purpose: readonly string[];
  meaningHeading: string;
  meaning: readonly string[];
  responsibilitiesHeading: string;
  responsibilitiesIntro: string;
  responsibilities: readonly DataInfrastructureResponsibility[];
  organizationHeading: string;
  organization: readonly string[];
  humanDataHeading: string;
  humanData: readonly string[];
  humanDataModelHeading: string;
  humanDataModel: readonly string[];
  knowledgeEngineHeading: string;
  knowledgeEngine: readonly string[];
  principlesHeading: string;
  principles: readonly EngineeringPrinciple[];
  scopeHeading: string;
  scope: readonly string[];
  futureHeading: string;
  futureIntro: string;
  relatedSystemsHeading: string;
  relatedResearchHeading: string;
  relatedApplicationsHeading: string;
  referenceHeading: string;
  referenceLinks: readonly EngineeringLink[];
  sectionNav: readonly { id: string; label: string }[];
};

export const DATA_INFRASTRUCTURE_ENTITY_ID = "data-infrastructure" as const;

export const dataInfrastructurePageContent: DataInfrastructurePageContent = {
  metadata: {
    category: "Technology",
    documentType: "Knowledge",
    status: "Architecture",
    version: "0.1",
    lastUpdated: "2026-07-24",
    readingTime: "10 min",
    relatedDomain: "Technology, Human Data, Human Data Model",
  },
  label: "Data Infrastructure",
  title: "How authorized information is organized and made available.",
  introduction:
    "Data Infrastructure explains how SAVEN Core organizes, connects and makes authorized information available to other systems—without describing databases, vendors or products.",
  developmentNote:
    "Data Infrastructure pages describe intended architecture. They do not imply commercial deployment, clinical use or a chosen vendor or cloud platform.",
  executiveSummaryHeading: "Executive Summary",
  executiveSummary: [
    "Data Infrastructure is the engineering foundation that organizes authorized information, keeps it consistent and makes it available to other SAVEN Core systems under clear limits.",
    "It exists so Human Data can move from raw information, through the Human Data Model that organizes it, toward the Knowledge Engine that provides consistent context. It does not choose vendors or define database products.",
  ],
  purposeHeading: "Purpose",
  purpose: [
    "SAVEN Core systems need shared, reliable access to authorized information.",
    "Data Infrastructure defines how that information is organized, connected and made available under permissions and trust constraints.",
    "The purpose is architectural clarity. The purpose is not to name tools, hosts or commercial platforms.",
  ],
  meaningHeading: "What Data Infrastructure Means",
  meaning: [
    "Data Infrastructure is the set of engineering rules and structures that keep authorized information orderly and usable across SAVEN Core.",
    "It covers how information is grouped, how relationships are kept, and how other systems may request access when allowed.",
    "It does not mean a specific database, file store, cloud provider or software vendor.",
    "Think of it as the shared foundation beneath Human Data, the Human Data Model and later knowledge layers—not as a product catalog.",
  ],
  responsibilitiesHeading: "Core Responsibilities",
  responsibilitiesIntro:
    "Each responsibility below describes a role in the architecture. None of them claim that a production platform is already operating.",
  responsibilities: [
    {
      id: "organize-information",
      title: "Organize information",
      text: "Keep authorized information in clear groups so systems can find the right context without mixing unrelated facts.",
    },
    {
      id: "preserve-consistency",
      title: "Preserve consistency",
      text: "Keep the same kind of information meaning the same thing across systems that are allowed to use it.",
    },
    {
      id: "maintain-relationships",
      title: "Maintain relationships",
      text: "Preserve links between related pieces of information so context is not lost when systems use only part of the picture.",
    },
    {
      id: "support-interoperability",
      title: "Support interoperability",
      text: "Allow approved exchange with other environments only through limited, permissioned pathways.",
    },
    {
      id: "provide-reliable-access",
      title: "Provide reliable access",
      text: "Make authorized information available to systems that are allowed to use it, when they need it for a defined purpose.",
    },
    {
      id: "support-future-growth",
      title: "Support future growth",
      text: "Allow the architecture to expand when new categories or systems are approved, without breaking existing limits.",
    },
  ],
  organizationHeading: "Information Organization",
  organization: [
    "Information organization means grouping authorized facts so they stay understandable over time.",
    "Groups should match the purposes already defined for Human Data and the Human Data Model.",
    "Organization also means knowing what must stay separate. Sensitive categories should not be casually joined.",
    "This page describes those rules at the architecture level. It does not describe tables, schemas or storage formats.",
  ],
  humanDataHeading: "Relationship to Human Data",
  humanData: [
    "Human Data is information about a person from different sources.",
    "Data Infrastructure does not invent that information. It provides the shared foundation that can hold and move authorized Human Data under limits.",
    "Without clear infrastructure rules, Human Data risks becoming scattered, duplicated or used outside its purpose.",
    "For what Human Data means as information, read the Human Data page.",
  ],
  humanDataModelHeading: "Relationship to Human Data Model",
  humanDataModel: [
    "The Human Data Model is the structured representation that organizes Human Data and preserves context and relationships.",
    "Data Infrastructure supports that model. It helps keep the organized view available to systems that are allowed to use it.",
    "The model defines the structure. Data Infrastructure supports reliable access to that structure under permissions.",
    "For how the model organizes information, read the Human Data Model page.",
  ],
  knowledgeEngineHeading: "Relationship to Knowledge Engine",
  knowledgeEngine: [
    "The Knowledge Engine is a system layer that organizes knowledge and provides consistent context to other components. It does not make independent decisions.",
    "Data Infrastructure gives the Knowledge Engine a dependable base for authorized information and relationships.",
    "The Knowledge Engine uses that base to keep context consistent. It does not replace privacy rules, human oversight or the Human Data Model.",
    "A dedicated Knowledge Engine page is not published yet. This section states the architectural relationship only.",
  ],
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "consistency",
      title: "Consistency",
      text: "The same authorized information should mean the same thing wherever approved systems use it.",
    },
    {
      id: "integrity",
      title: "Integrity",
      text: "Information should remain complete and trustworthy for its purpose. Uncontrolled changes break confidence in later assistance.",
    },
    {
      id: "availability",
      title: "Availability",
      text: "When a system is allowed to use information for a defined purpose, that information should be reachable under the architecture’s limits.",
    },
    {
      id: "scalability",
      title: "Scalability",
      text: "The foundation should allow careful growth when new approved needs appear, without removing privacy or oversight controls.",
    },
    {
      id: "privacy",
      title: "Privacy",
      text: "Access stays limited to a clear purpose. Extra exposure is not a default advantage.",
    },
    {
      id: "security",
      title: "Security",
      text: "Pathways and access controls protect authorized information from misuse and unauthorized entry.",
    },
    {
      id: "interoperability",
      title: "Interoperability",
      text: "Exchange with approved external environments stays scoped, permissioned and reviewable.",
    },
    {
      id: "human-oversight",
      title: "Human Oversight",
      text: "Infrastructure supports assistance. It does not replace human judgment for important outcomes.",
    },
  ],
  scopeHeading: "Current Development Scope",
  scope: [
    "This page defines Data Infrastructure as a Technology discipline in SAVEN Core architecture.",
    "Current public scope covers meaning, responsibilities, relationships and principles. It does not claim that a production data platform is operating.",
    "No vendors, cloud providers, databases or customer deployments are named or implied here.",
  ],
  futureHeading: "Future Topics",
  futureIntro:
    "Topics below come from the Data Infrastructure entity in the shared registry. They mark later documentation needs. They are not delivery promises.",
  relatedSystemsHeading: "Related Systems",
  relatedResearchHeading: "Related Research",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: [
    { label: "Technology", href: "/technology/" },
    { label: "Human Data", href: "/technology/human-data/" },
    { label: "Human Data Model", href: "/technology/human-data-model/" },
    { label: "Foundation", href: "/foundation/" },
    { label: "Research", href: "/research/" },
    { label: "Applications", href: "/applications/" },
    { label: "Purpose", href: "/purpose/" },
  ],
  sectionNav: [
    { id: "executive-summary", label: "Summary" },
    { id: "purpose", label: "Purpose" },
    { id: "what-data-infrastructure-means", label: "Meaning" },
    { id: "core-responsibilities", label: "Responsibilities" },
    { id: "information-organization", label: "Organization" },
    { id: "relationship-to-human-data", label: "Human Data" },
    { id: "relationship-to-human-data-model", label: "Human Data Model" },
    { id: "relationship-to-knowledge-engine", label: "Knowledge Engine" },
    { id: "engineering-principles", label: "Principles" },
    { id: "current-development-scope", label: "Scope" },
    { id: "future-topics", label: "Future topics" },
    { id: "related-systems", label: "Related systems" },
    { id: "related-research", label: "Related research" },
    { id: "related-applications", label: "Related applications" },
    { id: "reference-links", label: "References" },
  ],
};
