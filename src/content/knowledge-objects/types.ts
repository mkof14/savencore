/**
 * Knowledge Object Architecture — canonical schema.
 * Extends the Phase 3.0 entity registry without inventing product claims.
 */

import type { PageMetadata } from "@/components/engineering/engineering-types";

/** Placeholder when a field has no approved assigned value. */
export const NOT_YET_ASSIGNED = "Not yet assigned." as const;

/** Standardized primary document classification. */
export type KnowledgeObjectType =
  | "Foundation"
  | "System"
  | "Interface"
  | "Control"
  | "Application"
  | "Policy"
  | "Research"
  | "Standard"
  | "Reference";

/** Engineering document maturity — do not overstate. */
export type KnowledgeMaturity =
  | "Draft"
  | "Internal Review"
  | "Engineering Review"
  | "Published"
  | "Validated"
  | "Experimental"
  | "Deprecated";

/** Evidence classification — separate from maturity. */
export type KnowledgeEvidenceLevel =
  | "Concept"
  | "Engineering"
  | "Prototype"
  | "Operational"
  | "Clinical"
  | "Research"
  | "Future"
  | "Unknown";

/** Directional relationship kinds. */
export type KnowledgeRelationKind =
  | "Depends On"
  | "Uses"
  | "Produces"
  | "Consumes"
  | "Implements"
  | "Protects"
  | "Controls"
  | "Supports"
  | "Related To"
  | "Referenced By";

export type KnowledgeRelationEdge = {
  readonly kind: KnowledgeRelationKind;
  readonly targetId: string;
  readonly title: string;
  readonly href: string;
};

export type KnowledgeLifecycle = {
  readonly created: string;
  readonly reviewed: string;
  readonly published: string;
  readonly updated: string;
  readonly nextReview: string;
  readonly deprecated: string;
  readonly futureRevision: string;
};

export type KnowledgeVersionEntry = {
  readonly version: string;
  readonly previousVersion: string;
  readonly summaryOfChanges: string;
  readonly date: string;
};

export type KnowledgeGraphView = {
  readonly parents: readonly KnowledgeRelationEdge[];
  readonly children: readonly KnowledgeRelationEdge[];
  readonly dependencies: readonly KnowledgeRelationEdge[];
  readonly consumers: readonly KnowledgeRelationEdge[];
  readonly providers: readonly KnowledgeRelationEdge[];
};

/**
 * Canonical Knowledge Object — one structured engineering object per published page.
 */
export type KnowledgeObject = {
  readonly knowledgeId: string;
  readonly title: string;
  readonly href: string;
  readonly domain: string;
  readonly category: string;
  readonly type: KnowledgeObjectType;
  readonly status: string;
  readonly version: string;
  readonly readingTime: string;
  readonly maturity: KnowledgeMaturity;
  readonly evidenceLevel: KnowledgeEvidenceLevel;
  readonly owner: string;
  readonly lastReview: string;
  readonly currentScope: string;
  readonly futureScope: string;
  readonly entityId: string | null;
  readonly relationships: readonly KnowledgeRelationEdge[];
  readonly incomingDependencies: readonly KnowledgeRelationEdge[];
  readonly outgoingDependencies: readonly KnowledgeRelationEdge[];
  readonly lifecycle: KnowledgeLifecycle;
  readonly versionHistory: readonly KnowledgeVersionEntry[];
  readonly graph: KnowledgeGraphView;
};

/** Runtime enrichment supplied by page templates (never invents missing fields). */
export type KnowledgeObjectPageInput = {
  readonly knowledgeId: string;
  readonly href: string;
  readonly title: string;
  readonly domain: string;
  readonly entityId?: string;
  readonly metadata?: PageMetadata;
  readonly currentScope?: string;
  readonly futureScope?: string;
  readonly typeOverride?: KnowledgeObjectType;
};

export type ReadingPathId =
  | "executive"
  | "engineer"
  | "research"
  | "healthcare"
  | "safety"
  | "developer";

export type ReadingPath = {
  readonly id: ReadingPathId;
  readonly title: string;
  readonly summary: string;
  readonly objectIds: readonly string[];
};
