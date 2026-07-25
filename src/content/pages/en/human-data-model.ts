import type {
  EngineeringDiagram,
  EngineeringLink,
  EngineeringPrinciple,
  PageMetadata,
} from "@/components/engineering/engineering-types";
import { technologyDisciplineReferenceLinks } from "@/content/pages/en/technology-reference-links";

/**
 * Human Data Model flagship knowledge page — Phase 3.2 / Content Review 1.
 * Long-form page content only. Entity relations and futureTopics come from
 * the canonical registry (entity id: human-data-model).
 */

export type HumanDataModelCategory = {
  id: string;
  title: string;
  role: string;
};

export type HumanDataModelPageContent = {
  metadata: PageMetadata;
  label: string;
  title: string;
  introduction: string;
  developmentNote: string;
  executiveSummaryHeading: string;
  executiveSummary: readonly string[];
  purposeHeading: string;
  purpose: readonly string[];
  principlesHeading: string;
  principles: readonly EngineeringPrinciple[];
  architectureHeading: string;
  architectureIntro: string;
  architectureDiagram: EngineeringDiagram;
  categoriesHeading: string;
  categoriesIntro: string;
  categories: readonly HumanDataModelCategory[];
  relationshipsHeading: string;
  relationshipsIntro: string;
  privacyHeading: string;
  privacy: readonly string[];
  engineeringHeading: string;
  engineering: readonly string[];
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

export const HUMAN_DATA_MODEL_ENTITY_ID = "human-data-model" as const;

export const humanDataModelPageContent: HumanDataModelPageContent = {
  metadata: {
    category: "Technology",
    documentType: "Knowledge",
    status: "Architecture",
    version: "0.1",
    lastUpdated: "2026-07-24",
    readingTime: "12 min",
    relatedDomain: "Technology, Human Data, Research",
  },
  label: "Human Data Model",
  title: "The structure that organizes Human Data for SAVEN Core.",
  introduction:
    "The Human Data Model is the structured representation that organizes Human Data and preserves context and relationships before other systems use that information.",
  developmentNote:
    "Human Data Model pages describe intended architecture. They do not imply commercial deployment, clinical use, medical-device status or regulatory approval.",
  executiveSummaryHeading: "Executive Summary",
  executiveSummary: [
    "The Human Data Model is the structured representation that organizes Human Data and preserves context and relationships. It sits between people and later systems so assistance can stay permissioned and accountable.",
    "It matters in SAVEN Core because later layers—such as the Knowledge Engine and AI Decision Support—should use organized context, not informal views of a person. Those layers support human review. They do not replace human judgment.",
  ],
  purposeHeading: "Purpose",
  purpose: [
    "Organize Human Data so foundation layers and systems can use a shared, limited view of a person.",
    "Keep what may be known, who may access it and why it may be used as structural rules—not optional extras.",
    "Prepare careful assistance pathways for application contexts within stated permissions and limits.",
  ],
  principlesHeading: "Core Principles",
  principles: [
    {
      id: "consistency",
      title: "Consistency",
      text: "Shared definitions keep the same authorized information from being reinterpreted under conflicting rules.",
    },
    {
      id: "data-separation",
      title: "Data Separation",
      text: "Categories stay distinct. Combining categories requires an explicit purpose, permission and review path.",
    },
    {
      id: "privacy",
      title: "Privacy",
      text: "Privacy defines what may be used, why it may be used and who may see it.",
    },
    {
      id: "explainability",
      title: "Explainability",
      text: "Reviewers should be able to see what context informed an assistance pathway.",
    },
    {
      id: "extensibility",
      title: "Extensibility",
      text: "New categories may be added only through governed architecture changes, not by informal collection outside the model.",
    },
    {
      id: "interoperability",
      title: "Interoperability",
      text: "Exchange with approved external environments stays limited and remains under privacy, security and safety rules.",
    },
    {
      id: "human-oversight",
      title: "Human Oversight",
      text: "The model supports assistance under human authority. It does not give systems independent decision power over people.",
    },
  ],
  architectureHeading: "Architecture Overview",
  architectureIntro:
    "In concept, Human Data moves through the Human Data Model before later layers may use it. The Knowledge Engine organizes knowledge and provides consistent context to other components. It does not make independent decisions. AI Decision Support uses available information to support human review and decision-making. It does not replace human judgment.",
  architectureDiagram: {
    id: "human-data-model-flow",
    kind: "flow",
    title: "Human context pathway",
    description:
      "Conceptual flow from Human through Human Data Model, Knowledge Engine and AI Decision Support to Applications.",
    nodes: [
      { id: "human", label: "Human", detail: "Person and situation" },
      {
        id: "human-data-model",
        label: "Human Data Model",
        detail: "Organizes Human Data",
      },
      {
        id: "knowledge-engine",
        label: "Knowledge Engine",
        detail: "Consistent context; no independent decisions",
      },
      {
        id: "ai-decision-support",
        label: "AI Decision Support",
        detail: "Supports human review",
      },
      {
        id: "applications",
        label: "Applications",
        detail: "Contexts of use",
      },
    ],
  },
  categoriesHeading: "Data Categories",
  categoriesIntro:
    "The categories below describe how the model groups information. For what each kind of Human Data means as information itself, read the Human Data page. These roles do not claim production collection or processing.",
  categories: [
    {
      id: "personal-information",
      title: "Personal Information",
      role: "Groups identity attributes needed to recognize an authorized person in a governed context.",
    },
    {
      id: "health-information",
      title: "Health Information",
      role: "Groups health-related context for careful assistance when permissions allow.",
    },
    {
      id: "medical-history",
      title: "Medical History",
      role: "Groups longer-term medical context under explicit authorization.",
    },
    {
      id: "laboratory-information",
      title: "Laboratory Information",
      role: "Keeps laboratory-related context as a separate sensitive group—not a laboratory service.",
    },
    {
      id: "genetics",
      title: "Genetics",
      role: "Keeps hereditary context under the strictest separation and purpose limits if ever authorized.",
    },
    {
      id: "lifestyle",
      title: "Lifestyle",
      role: "Groups daily-life context that may support continuity of assistance without open profiling.",
    },
    {
      id: "environmental-factors",
      title: "Environmental Factors",
      role: "Groups surrounding conditions that may change how human context is interpreted when permitted.",
    },
    {
      id: "device-information",
      title: "Device Information",
      role: "Groups device and interface context needed to connect people with authorized systems safely.",
    },
    {
      id: "user-preferences",
      title: "User Preferences",
      role: "Groups stated preferences that guide assistance presentation and remain easy to change.",
    },
  ],
  relationshipsHeading: "Model Relationships",
  relationshipsIntro:
    "Relationships below come from the shared registry for Human Data Model. They describe architecture links, not live integrations.",
  privacyHeading: "Privacy and Trust",
  privacy: [
    "Privacy limits exposure of human context. Broad secondary use is outside the model’s purpose.",
    "Trust constraints connect privacy, security, safety and human data so permissions stay cross-cutting.",
    "Access should be role-aware and reviewable. This page does not claim completed certifications or audits.",
  ],
  engineeringHeading: "Engineering Considerations",
  engineering: [
    "Treat category boundaries as contracts. Combining categories needs an explicit purpose and permission check.",
    "Ask only for the context required for a defined assistance pathway.",
    "Keep scope language precise so documentation stays accurate.",
    "Keep human review points wherever model outputs could influence important recommendations or actions.",
  ],
  scopeHeading: "Scope",
  scope: [
    "Current public scope defines the Human Data Model as architecture: purpose, principles, category roles, relationships and scope.",
    "Public material presents the Human Data Model as architecture: purpose, principles, category roles, relationships and scope — not a production or clinical system.",
    "Detailed schemas, permission matrices and change-event designs are covered in related registry topics.",
  ],
  futureHeading: "Related topics",
  futureIntro:
    "Topics below are drawn from the Human Data Model entry in the shared registry and provide context for related architecture.",
  relatedSystemsHeading: "Related Systems",
  relatedResearchHeading: "Related Research",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: technologyDisciplineReferenceLinks(
    "/technology/human-data-model/",
  ),
  sectionNav: [
    { id: "executive-summary", label: "Summary" },
    { id: "purpose", label: "Purpose" },
    { id: "core-principles", label: "Principles" },
    { id: "architecture-overview", label: "Architecture" },
    { id: "data-categories", label: "Data categories" },
    { id: "model-relationships", label: "Relationships" },
    { id: "privacy-and-trust", label: "Privacy and trust" },
    { id: "engineering-considerations", label: "Engineering" },
    { id: "current-development-scope", label: "Scope" },
    { id: "future-topics", label: "Related topics" },
    { id: "related-systems", label: "Related systems" },
    { id: "related-research", label: "Related research" },
    { id: "related-applications", label: "Related applications" },
    { id: "reference-links", label: "References" },
  ],
};
