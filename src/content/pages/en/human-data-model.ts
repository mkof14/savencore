import type {
  EngineeringDiagram,
  EngineeringLink,
  EngineeringPrinciple,
  PageMetadata,
} from "@/components/engineering/engineering-types";

/**
 * Human Data Model flagship knowledge page — Phase 3.2.
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
    relatedDomain: "Systems, Trust, Foundation, Research",
  },
  label: "Human Data Model",
  title: "Controlled representation of authorized human context.",
  introduction:
    "The Human Data Model is the engineering reference for how SAVEN Core structures permissioned human context before systems interpret or assist.",
  developmentNote:
    "Human Data Model information describes intended architecture and development relationships. It does not imply commercial deployment, clinical use, medical-device status or regulatory approval.",
  executiveSummaryHeading: "Executive Summary",
  executiveSummary: [
    "The Human Data Model defines a controlled interface between people and systems that may use authorized information. It organizes human context so assistance can remain permissioned, minimized and accountable.",
    "The model is architectural. It does not claim that SAVEN Core currently operates clinical data platforms, genetic analysis services or unrestricted personal data collection.",
    "Downstream systems—including the Knowledge Engine and AI Decision Support—consume only what the model and its trust constraints allow. Human oversight remains required for consequential action.",
  ],
  purposeHeading: "Purpose",
  purpose: [
    "Provide a structured representation of human context that foundation layers and systems can reference without treating people as unstructured data sources.",
    "Separate what may be known, who may access it and for what purpose, so privacy and safety constraints remain structural rather than optional.",
    "Support careful assistance pathways in application contexts such as healthcare, home, hospitals and research settings—without asserting that those pathways are deployed.",
  ],
  principlesHeading: "Core Principles",
  principles: [
    {
      id: "consistency",
      title: "Consistency",
      text: "Human context uses shared definitions and status language across systems so the same authorized information is not reinterpreted under conflicting rules.",
    },
    {
      id: "data-separation",
      title: "Data Separation",
      text: "Categories of human context remain distinct. Combining categories requires an explicit purpose, permission boundary and review path.",
    },
    {
      id: "privacy",
      title: "Privacy",
      text: "Purpose limitation, minimization and access control define what may be used, why it may be used and who may access it.",
    },
    {
      id: "explainability",
      title: "Explainability",
      text: "Model structures and assistance inputs should remain inspectable enough for engineers and authorized reviewers to understand what context informed a pathway.",
    },
    {
      id: "extensibility",
      title: "Extensibility",
      text: "New context categories may be added only through governed architecture changes, not by ad hoc collection outside the model.",
    },
    {
      id: "interoperability",
      title: "Interoperability",
      text: "Exchange with authorized external environments uses scoped contracts that remain subordinate to privacy, security and safety constraints.",
    },
    {
      id: "human-oversight",
      title: "Human Oversight",
      text: "The model supports assistance under human authority. It does not grant systems autonomous decision authority over people.",
    },
  ],
  architectureHeading: "Architecture Overview",
  architectureIntro:
    "Conceptually, authorized human context moves through the Human Data Model before knowledge structures and decision-support pathways may use it. The sequence below is architectural, not an implementation blueprint.",
  architectureDiagram: {
    id: "human-data-model-flow",
    kind: "flow",
    title: "Human context pathway",
    description:
      "Conceptual flow from Human through Human Data Model, Knowledge Engine and AI Decision Support to Applications.",
    nodes: [
      { id: "human", label: "Human", detail: "Person and context" },
      {
        id: "human-data-model",
        label: "Human Data Model",
        detail: "Permissioned representation",
      },
      {
        id: "knowledge-engine",
        label: "Knowledge Engine",
        detail: "Governed knowledge structures",
      },
      {
        id: "ai-decision-support",
        label: "AI Decision Support",
        detail: "Assisted interpretation",
      },
      {
        id: "applications",
        label: "Applications",
        detail: "Human contexts of use",
      },
    ],
  },
  categoriesHeading: "Data Categories",
  categoriesIntro:
    "Categories describe roles inside the model. They are not product features, collection claims or evidence that SAVEN Core currently processes these information types in production.",
  categories: [
    {
      id: "personal-information",
      title: "Personal Information",
      role: "Identity and basic personal attributes needed to recognize an authorized individual within a governed context.",
    },
    {
      id: "health-information",
      title: "Health Information",
      role: "Health-related context that may inform careful assistance when permissions and purpose limitation allow.",
    },
    {
      id: "medical-history",
      title: "Medical History",
      role: "Longitudinal medical context used only under explicit authorization; not a claim of clinical record-system operation.",
    },
    {
      id: "laboratory-information",
      title: "Laboratory Information",
      role: "Structured laboratory-related context as a governed category placeholder for future interfaces, not a laboratory service.",
    },
    {
      id: "genetics",
      title: "Genetics",
      role: "Highly sensitive hereditary context that would require strict separation, purpose limitation and oversight if ever authorized.",
    },
    {
      id: "lifestyle",
      title: "Lifestyle",
      role: "Daily-life and behavioral context that may support continuity of assistance without unrestricted profiling.",
    },
    {
      id: "environmental-factors",
      title: "Environmental Factors",
      role: "Surrounding conditions that may affect interpretation of human context when inclusion is justified and permissioned.",
    },
    {
      id: "device-information",
      title: "Device Information",
      role: "Device and interface context needed to connect people with authorized systems under safety and security boundaries.",
    },
    {
      id: "user-preferences",
      title: "User Preferences",
      role: "Stated preferences that guide assistance presentation while remaining revocable and purpose-limited.",
    },
  ],
  relationshipsHeading: "Model Relationships",
  relationshipsIntro:
    "Relationships below are rendered from the canonical knowledge entity registry for Human Data Model. They describe architectural links, not runtime integrations.",
  privacyHeading: "Privacy and Trust",
  privacy: [
    "Privacy architecture limits exposure of human context. Unnecessary collection and broad secondary use are outside the model’s purpose.",
    "Trust Architecture relates privacy, security, the Safety Layer and human data so permissions and accountability remain cross-cutting constraints.",
    "Access is expected to be role-aware and reviewable. Public documentation does not assert completed certifications or audits.",
  ],
  engineeringHeading: "Engineering Considerations",
  engineering: [
    "Treat category boundaries as engineering contracts. Cross-category joins require an explicit purpose and permission check.",
    "Prefer minimization: systems should request only the context required for a defined assistance pathway.",
    "Keep status language precise—active development, conceptual or planned—so documentation does not overstate maturity.",
    "Preserve human oversight points wherever model outputs could influence consequential recommendations or actions.",
    "Align interface work with interoperability, security and data-infrastructure disciplines without inventing undeclared external partners.",
  ],
  scopeHeading: "Current Development Scope",
  scope: [
    "Current public scope defines the Human Data Model as an architectural system entity: purpose, principles, category roles, relationships and development status.",
    "The model is in active development as architecture. This page does not claim production operation, clinical deployment or completed data-platform delivery.",
    "Implementation schemas, permission matrices and change-event designs remain future documentation topics listed from the registry.",
  ],
  futureHeading: "Future Topics",
  futureIntro:
    "Topics below come from the Human Data Model entity futureTopics in the registry. They are documentation placeholders, not delivery commitments.",
  relatedSystemsHeading: "Related Systems",
  relatedResearchHeading: "Related Research",
  relatedApplicationsHeading: "Related Applications",
  referenceHeading: "Reference Links",
  referenceLinks: [
    { label: "Technology", href: "/technology/" },
    { label: "Foundation", href: "/foundation/" },
    { label: "Research", href: "/research/" },
    { label: "Applications", href: "/applications/" },
    { label: "Purpose", href: "/purpose/" },
  ],
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
    { id: "future-topics", label: "Future topics" },
    { id: "related-systems", label: "Related systems" },
    { id: "related-research", label: "Related research" },
    { id: "related-applications", label: "Related applications" },
    { id: "reference-links", label: "References" },
  ],
};
