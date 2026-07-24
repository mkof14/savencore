import type {
  EngineeringDiagram,
  EngineeringLink,
  EngineeringPrinciple,
  PageMetadata,
} from "@/components/engineering/engineering-types";

/**
 * Human Data knowledge page — Content Wave 1.1.
 * Long-form page content only. Relations and futureTopics come from
 * the canonical registry (entity id: human-data). Registry is not modified.
 */

export type HumanDataCategory = {
  id: string;
  title: string;
  purpose: string;
};

export type HumanDataPageContent = {
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
  categoriesHeading: string;
  categoriesIntro: string;
  categories: readonly HumanDataCategory[];
  modelRelationHeading: string;
  modelRelationIntro: string;
  modelRelationDiagram: EngineeringDiagram;
  modelRelation: readonly string[];
  technologyRelationsHeading: string;
  technologyRelationsIntro: string;
  technologyRelations: readonly {
    id: string;
    title: string;
    text: string;
  }[];
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

export const HUMAN_DATA_ENTITY_ID = "human-data" as const;

export const humanDataPageContent: HumanDataPageContent = {
  metadata: {
    category: "Technology",
    documentType: "Knowledge",
    status: "Architecture",
    version: "0.1",
    lastUpdated: "2026-07-24",
    readingTime: "10 min",
    relatedDomain: "Human Data Model, Privacy, Trust",
  },
  label: "Human Data",
  title: "Information about people that systems may use with care.",
  introduction:
    "Human Data is the information SAVEN Core may consider about a person when help is needed and permission is clear.",
  developmentNote:
    "Human Data information describes intended architecture. It does not imply commercial deployment, clinical use or unrestricted collection of personal information.",
  executiveSummaryHeading: "Executive Summary",
  // Target: ≤120 words. Covers what it is, why it matters, link to Human Data Model.
  executiveSummary: [
    "Human Data is information about a person that SAVEN Core may use to understand context and offer careful help.",
    "It matters because useful systems need some human context, and that context must stay limited, permissioned and respectful.",
    "Human Data is the information itself. The Human Data Model is the structure that organizes that information before other systems use it.",
  ],
  purposeHeading: "Purpose",
  purpose: [
    "SAVEN Core exists to support people in real settings. That support needs some understanding of the person and their situation.",
    "Human Data names the kinds of information that understanding may draw from.",
    "The purpose is not to collect everything possible. The purpose is to define what information may matter, and under what limits it may be used.",
    "Clear limits protect privacy. They also keep later systems honest about what they are allowed to know.",
  ],
  meaningHeading: "What Human Data Means",
  meaning: [
    "In everyday terms, Human Data is information that describes a person or their situation.",
    "That can include who someone is, how they are doing, what has happened before, and what surrounds them day to day.",
    "In SAVEN Core, Human Data is never treated as an open pool of facts. It is treated as authorized context.",
    "Authorized context means information may be used only when there is a clear reason, a clear permission and a clear boundary.",
    "This page explains the idea. It does not describe software storage, databases or product features.",
  ],
  categoriesHeading: "Human Data Categories",
  categoriesIntro:
    "Each category below describes a role for information. None of these categories claim that SAVEN Core currently collects or processes that information in production.",
  categories: [
    {
      id: "identity",
      title: "Identity",
      purpose:
        "Recognize the correct person in a governed setting so assistance is not applied to the wrong individual.",
    },
    {
      id: "health",
      title: "Health",
      purpose:
        "Describe general health context that may help systems offer careful support when permission allows.",
    },
    {
      id: "medical-history",
      title: "Medical History",
      purpose:
        "Provide longer-term medical background when it is authorized and needed for responsible assistance.",
    },
    {
      id: "laboratory-information",
      title: "Laboratory Information",
      purpose:
        "Represent laboratory-related facts as a distinct kind of sensitive context, not as a laboratory service.",
    },
    {
      id: "medication",
      title: "Medication",
      purpose:
        "Account for medicines a person uses when that information is relevant and permitted.",
    },
    {
      id: "genetics",
      title: "Genetics",
      purpose:
        "Mark hereditary information as highly sensitive and usable only under the strictest purpose and oversight rules.",
    },
    {
      id: "lifestyle",
      title: "Lifestyle",
      purpose:
        "Capture ordinary life patterns that may affect daily support without turning life into open profiling.",
    },
    {
      id: "behavior",
      title: "Behavior",
      purpose:
        "Describe actions and routines that help systems understand changing needs over time.",
    },
    {
      id: "nutrition",
      title: "Nutrition",
      purpose:
        "Represent eating and nutrition context when it supports safer or more useful daily assistance.",
    },
    {
      id: "activity",
      title: "Activity",
      purpose:
        "Describe movement and physical activity that may inform continuity of care or daily support.",
    },
    {
      id: "sleep",
      title: "Sleep",
      purpose:
        "Include rest and sleep context when it helps interpret wellbeing and daily capacity.",
    },
    {
      id: "environment",
      title: "Environment",
      purpose:
        "Account for surroundings that may change how a person’s situation should be understood.",
    },
    {
      id: "wearables",
      title: "Wearables",
      purpose:
        "Describe signals from personal devices only when those signals are authorized and purpose-limited.",
    },
    {
      id: "preferences",
      title: "Preferences",
      purpose:
        "Record what a person wants systems to prefer, and keep those choices easy to change or withdraw.",
    },
  ],
  modelRelationHeading: "Relationship to Human Data Model",
  modelRelationIntro:
    "Human Data and the Human Data Model work together, but they are not the same thing.",
  modelRelationDiagram: {
    id: "human-data-to-model",
    kind: "flow",
    title: "From information to organization",
    description:
      "Human Data is information. The Human Data Model organizes that information.",
    nodes: [
      {
        id: "human-data",
        label: "Human Data",
        detail: "Information about a person",
      },
      {
        id: "human-data-model",
        label: "Human Data Model",
        detail: "Organizes that information",
      },
    ],
  },
  modelRelation: [
    "Human Data is the information itself: the facts and signals that may describe a person.",
    "The Human Data Model is the organizing layer. It defines how that information is grouped, limited and shared with later systems.",
    "Think of Human Data as the content, and the Human Data Model as the careful filing system around that content.",
    "Systems should not invent their own informal view of a person. They should rely on the model when they need authorized human context.",
  ],
  technologyRelationsHeading: "Relationship to Other Technologies",
  technologyRelationsIntro:
    "Human Data does not stand alone. Other technology disciplines define how it may be protected, moved and used.",
  technologyRelations: [
    {
      id: "privacy",
      title: "Privacy",
      text: "Privacy sets what may be used, why it may be used and who may see it. Without privacy rules, Human Data becomes unrestricted collection.",
    },
    {
      id: "security",
      title: "Security",
      text: "Security protects pathways and access so authorized human context is not exposed to misuse or unauthorized entry.",
    },
    {
      id: "data-infrastructure",
      title: "Data Infrastructure",
      text: "Data Infrastructure is the engineering substrate for storing and moving authorized information under defined controls.",
    },
    {
      id: "artificial-intelligence",
      title: "Artificial Intelligence",
      text: "Artificial Intelligence may help interpret context, but only within permission limits and with human oversight for important outcomes.",
    },
    {
      id: "interoperability",
      title: "Interoperability",
      text: "Interoperability defines how Human Data may be exchanged with approved external environments without widening access beyond purpose.",
    },
  ],
  principlesHeading: "Engineering Principles",
  principles: [
    {
      id: "accuracy",
      title: "Accuracy",
      text: "Human context should be correct enough for the decision or assistance at hand. Wrong context can lead to wrong help.",
    },
    {
      id: "consistency",
      title: "Consistency",
      text: "The same kind of information should mean the same thing across systems, so people are not described in conflicting ways.",
    },
    {
      id: "quality",
      title: "Quality",
      text: "Incomplete, outdated or unclear information should be recognized as such. Quality limits how far assistance may go.",
    },
    {
      id: "privacy",
      title: "Privacy",
      text: "Use the least information needed for a clear purpose. Extra detail is not a default advantage.",
    },
    {
      id: "interoperability",
      title: "Interoperability",
      text: "When information moves between environments, the move must stay scoped, permissioned and reviewable.",
    },
    {
      id: "human-oversight",
      title: "Human Oversight",
      text: "People remain responsible for consequential outcomes. Human Data supports assistance; it does not replace human judgment.",
    },
  ],
  scopeHeading: "Current Development Scope",
  scope: [
    "This page defines Human Data as a technology discipline inside SAVEN Core architecture.",
    "Current public scope covers meaning, categories, relationships and principles. It does not claim that collection systems are operating in production.",
    "No customer deployments, clinical products or completed data platforms are asserted here.",
    "Later work may expand documentation for schemas, consent models and minimization rules listed as future topics.",
  ],
  futureHeading: "Future Topics",
  futureIntro:
    "The topics below come from the Human Data entity in the shared registry. They are placeholders for later documentation, not delivery promises.",
  relatedSystemsHeading: "Related Systems",
  relatedResearchHeading: "Related Research",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: [
    { label: "Human Data Model", href: "/technology/human-data-model/" },
    { label: "Technology", href: "/technology/" },
    { label: "Foundation", href: "/foundation/" },
    { label: "Research", href: "/research/" },
    { label: "Applications", href: "/applications/" },
    { label: "Purpose", href: "/purpose/" },
  ],
  sectionNav: [
    { id: "executive-summary", label: "Summary" },
    { id: "purpose", label: "Purpose" },
    { id: "what-human-data-means", label: "Meaning" },
    { id: "human-data-categories", label: "Categories" },
    { id: "relationship-to-human-data-model", label: "Human Data Model" },
    { id: "relationship-to-other-technologies", label: "Other technologies" },
    { id: "engineering-principles", label: "Principles" },
    { id: "current-development-scope", label: "Scope" },
    { id: "future-topics", label: "Future topics" },
    { id: "related-systems", label: "Related systems" },
    { id: "related-research", label: "Related research" },
    { id: "related-applications", label: "Related applications" },
    { id: "reference-links", label: "References" },
  ],
};
