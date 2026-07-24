/**
 * Canonical knowledge entity model — Phase 3.0.
 * Static TypeScript content types only; not a database or CMS schema.
 */

import type { KnowledgeDomainId } from "@/content/knowledge/types";

/** Controlled entity taxonomy. */
export type KnowledgeEntityType =
  | "foundation"
  | "technology"
  | "system"
  | "research-area"
  | "research-output"
  | "application"
  | "trust"
  | "company";

/**
 * Controlled development status taxonomy.
 * Does not imply production deployment or scientific validation.
 */
export type KnowledgeEntityStatus =
  | "foundational"
  | "active-development"
  | "research"
  | "conceptual"
  | "planned"
  | "reference";

/** Locale-neutral internal path (e.g. `/foundation/`) or hash-anchored path. */
export type KnowledgePageLink = {
  readonly label: string;
  readonly href: string;
};

/**
 * Canonical shared knowledge entity.
 * Relationship IDs are the source of truth for cross-links.
 */
export type KnowledgeEntity = {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly entityType: KnowledgeEntityType;
  readonly domain: KnowledgeDomainId;
  readonly summary: string;
  readonly status: KnowledgeEntityStatus;
  readonly parentId: string | null;
  readonly childIds: readonly string[];
  readonly relatedEntityIds: readonly string[];
  readonly dependencyIds: readonly string[];
  readonly usedByIds: readonly string[];
  readonly relatedTechnologyIds: readonly string[];
  readonly relatedSystemIds: readonly string[];
  readonly relatedResearchIds: readonly string[];
  readonly relatedApplicationIds: readonly string[];
  readonly relatedTrustIds: readonly string[];
  readonly relatedPageLinks: readonly KnowledgePageLink[];
  readonly futureTopics: readonly string[];
};

/** Presentation group for relationship indexes. */
export type EntityRelationGroupId =
  | "part-of"
  | "contains"
  | "depends-on"
  | "used-by"
  | "related-technologies"
  | "related-systems"
  | "related-research"
  | "related-applications"
  | "trust-and-safety"
  | "related-pages";

export type EntityRelationItem = {
  readonly id: string;
  readonly title: string;
  readonly href: string;
};

export type EntityRelationGroup = {
  readonly id: EntityRelationGroupId;
  readonly heading: string;
  readonly items: readonly EntityRelationItem[];
};

export type EntityRelationsSummary = {
  readonly entityId: string;
  readonly groups: readonly EntityRelationGroup[];
};
