/**
 * Knowledge architecture types — Phase 2.1.
 * Structural models only; not CMS or database schemas.
 */

export type KnowledgeDomainId =
  | "purpose"
  | "foundation"
  | "technology"
  | "systems"
  | "research"
  | "applications"
  | "trust"
  | "company";

export type KnowledgeDomain = {
  id: KnowledgeDomainId;
  title: string;
  href: string;
  purpose: string;
  scope: string;
  /** Null when the domain is a top-level site domain. */
  parent: KnowledgeDomainId | null;
  children: readonly string[];
  relatedDomains: readonly KnowledgeDomainId[];
  futureExpansion: readonly string[];
};

export type TechnologySubsection = {
  id: string;
  title: string;
  purpose: string;
  summary: string;
  futureTopics: readonly string[];
  relatedSystems: readonly string[];
};

export type TechnologyKnowledge = {
  domainId: "technology";
  subsections: readonly TechnologySubsection[];
};

export type SystemsSubsection = {
  id: string;
  title: string;
  purpose: string;
  summary: string;
  futureTopics: readonly string[];
  relatedTechnology: readonly string[];
  relatedApplications: readonly string[];
};

export type SystemsKnowledge = {
  domainId: "systems";
  subsections: readonly SystemsSubsection[];
};

export type ResearchSection = {
  id: string;
  title: string;
  purpose: string;
  summary: string;
  futureTopics: readonly string[];
  relatedDomains: readonly KnowledgeDomainId[];
};

export type ResearchKnowledge = {
  domainId: "research";
  sections: readonly ResearchSection[];
};

export type ApplicationCategory = {
  id: string;
  title: string;
  purpose: string;
  summary: string;
  futureTopics: readonly string[];
  relatedSystems: readonly string[];
  relatedDomains: readonly KnowledgeDomainId[];
};

export type ApplicationsKnowledge = {
  domainId: "applications";
  categories: readonly ApplicationCategory[];
};

export type KnowledgeDiagramKind =
  | "hierarchy"
  | "relationship"
  | "layers"
  | "flow";

export type KnowledgeDiagramNode = {
  id: string;
  label: string;
  detail?: string;
};

export type KnowledgeDiagram = {
  id: string;
  kind: KnowledgeDiagramKind;
  title: string;
  description: string;
  nodes: readonly KnowledgeDiagramNode[];
};

export type KnowledgeNavItem = {
  id: string;
  label: string;
  href: string;
};

export type RelatedTopic = {
  id: string;
  label: string;
  href: string;
  domainId?: KnowledgeDomainId;
};

export type EngineeringNoteItem = {
  id: string;
  title: string;
  text: string;
};

export type FutureExpansionItem = {
  id: string;
  label: string;
  note: string;
};
