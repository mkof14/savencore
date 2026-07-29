import type {
  EngineeringDiagram,
  EngineeringLink,
  EngineeringPrinciple,
  PageMetadata,
} from "@/components/engineering/engineering-types";
import { technologyDisciplineReferenceLinks } from "@/content/pages/en/technology-reference-links";

/**
 * Human Data knowledge page — Content Wave 1.1 / Content Review 1.
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
    relatedDomain: "Technology, Human Data Model",
  },
  label: "Human Data",
  title: "Information about a person from different sources.",
  introduction:
    "Human Data is information about a person from different sources. SAVEN Core may use it only when there is a clear reason and clear permission.",
  developmentNote:
    "Human Data pages describe intended architecture. They do not imply commercial deployment, clinical use or unrestricted collection of personal information.",
  executiveSummaryHeading: "Executive Summary",
  executiveSummary: [
    "Human Data is information about a person from different sources. SAVEN Core may use it to understand a situation and offer careful help when permission is clear.",
    "It matters because useful assistance needs some human context, and that context must stay limited. The Human Data Model organizes this information and preserves context and relationships before other systems use it.",
    "BioMath Core builds on that foundation across 20 categories and 200+ services as model scope; its reports and conclusions inform SAVEN next-level actions under human control — not diagnosis, prescribing, or selling medicines.",
  ],
  purposeHeading: "Purpose",
  purpose: [
    "SAVEN Core aims to support people in real settings. That support needs some understanding of the person and their situation.",
    "Human Data names the kinds of information that understanding may draw from.",
    "The goal is not to collect everything possible. The goal is to say what information may matter, and under what limits it may be used.",
  ],
  meaningHeading: "What Human Data Means",
  meaning: [
    "Human Data is information about a person from different sources. It can describe who someone is, how they are doing, what has happened before and what surrounds them day to day.",
    "In SAVEN Core, Human Data is not an open pool of facts. It is authorized context: information used only with a clear reason, a clear permission and a clear boundary.",
    "This page explains the information itself—its categories, quality, privacy and use. How that information is organized is explained on the Human Data Model page.",
  ],
  categoriesHeading: "Human Data Categories",
  categoriesIntro:
    "Each category describes a purpose for information. None of these categories claim that SAVEN Core currently collects or processes that information in production.",
  categories: [
    {
      id: "identity",
      title: "Identity",
      purpose:
        "Identify the correct person in a governed setting so help is not applied to the wrong individual.",
    },
    {
      id: "health",
      title: "Health",
      purpose:
        "Describe general health context that may support careful help when permission allows.",
    },
    {
      id: "medical-history",
      title: "Medical History",
      purpose:
        "Provide longer-term medical background when it is authorized and needed.",
    },
    {
      id: "laboratory-information",
      title: "Laboratory Information",
      purpose:
        "Treat laboratory-related facts as a distinct, sensitive kind of information—not as a laboratory service.",
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
        "Treat hereditary information as highly sensitive and usable only under the strictest purpose and oversight rules.",
    },
    {
      id: "lifestyle",
      title: "Lifestyle",
      purpose:
        "Describe ordinary life patterns that may affect daily support, without open profiling.",
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
        "Represent eating and nutrition context when it supports safer or more useful daily help.",
    },
    {
      id: "activity",
      title: "Activity",
      purpose:
        "Describe movement and physical activity that may inform daily support.",
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
        "Describe signals from personal devices only when those signals are authorized and limited to a clear purpose.",
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
      "Human Data is information about a person. The Human Data Model organizes that information and preserves context and relationships.",
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
    "Human Data is the information itself.",
    "The Human Data Model is the structured representation that organizes Human Data and preserves context and relationships.",
    "Human Data must be organized so later systems do not invent informal, conflicting views of a person. Continue on the Human Data Model page for that structure.",
  ],
  technologyRelationsHeading: "Relationship to Other Technologies",
  technologyRelationsIntro:
    "Human Data depends on other Technology disciplines for protection, movement and careful use.",
  technologyRelations: [
    {
      id: "privacy",
      title: "Privacy",
      text: "Privacy sets what may be used, why it may be used and who may see it. Without privacy rules, Human Data becomes unrestricted collection.",
    },
    {
      id: "security",
      title: "Security",
      text: "Security protects access pathways so authorized information is not exposed to misuse.",
    },
    {
      id: "data-infrastructure",
      title: "Data Infrastructure",
      text: "Data Infrastructure supports storing and moving authorized information under defined controls.",
    },
    {
      id: "artificial-intelligence",
      title: "Artificial Intelligence",
      text: "Artificial intelligence may help interpret context within permission limits. Important outcomes stay under human oversight.",
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
      text: "Information should be correct enough for the help at hand. Wrong context can lead to wrong help.",
    },
    {
      id: "consistency",
      title: "Consistency",
      text: "The same kind of information should mean the same thing across systems.",
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
      text: "When information moves between environments, the move must stay limited, permissioned and reviewable.",
    },
    {
      id: "human-oversight",
      title: "Human Oversight",
      text: "People remain responsible for important outcomes. Human Data supports assistance; it does not replace human judgment.",
    },
  ],
  scopeHeading: "Scope",
  scope: [
    "This page defines Human Data as a Technology discipline in SAVEN Core architecture.",
    "Current public scope covers meaning, categories, relationships and principles. It does not claim that collection systems are operating in production.",
    "No customer deployments or clinical products are asserted here.",
  ],
  futureHeading: "Related topics",
  futureIntro:
    "Topics below are drawn from the Human Data entry in the shared registry and provide context for related architecture.",
  relatedSystemsHeading: "Related Systems",
  relatedResearchHeading: "Related Research",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: technologyDisciplineReferenceLinks(
    "/technology/human-data/",
  ),
  sectionNav: [
    { id: "executive-summary", label: "Summary" },
    { id: "purpose", label: "Purpose" },
    { id: "what-human-data-means", label: "Meaning" },
    { id: "human-data-categories", label: "Categories" },
    { id: "relationship-to-human-data-model", label: "Human Data Model" },
    { id: "relationship-to-other-technologies", label: "Other technologies" },
    { id: "engineering-principles", label: "Principles" },
    { id: "current-development-scope", label: "Scope" },
    { id: "future-topics", label: "Related topics" },
    { id: "related-systems", label: "Related systems" },
    { id: "related-research", label: "Related research" },
    { id: "related-applications", label: "Related applications" },
    { id: "reference-links", label: "References" },
  ],
};
