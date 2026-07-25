/**
 * Resolve Knowledge Objects from entity registry + page inputs.
 * Missing fields become "Not yet assigned." — never fabricated.
 */

import { getEntityById } from "@/content/knowledge/entity-registry";
import { getEntityStatusLabel } from "@/content/knowledge/status-labels";
import {
  classifyEvidence,
  classifyMaturity,
  classifyObjectType,
} from "@/content/knowledge-objects/classify";
import {
  buildEntityRelationships,
  emptyGraph,
} from "@/content/knowledge-objects/relationships";
import type {
  KnowledgeLifecycle,
  KnowledgeObject,
  KnowledgeObjectPageInput,
  KnowledgeVersionEntry,
} from "@/content/knowledge-objects/types";
import { NOT_YET_ASSIGNED } from "@/content/knowledge-objects/types";

function assigned(value: string | undefined | null): string {
  if (typeof value === "string" && value.trim().length > 0) {
    return value.trim();
  }
  return NOT_YET_ASSIGNED;
}

function buildLifecycle(
  lastUpdated: string | undefined,
  maturity: KnowledgeObject["maturity"],
): KnowledgeLifecycle {
  const updated = assigned(lastUpdated);
  return {
    created: NOT_YET_ASSIGNED,
    reviewed: NOT_YET_ASSIGNED,
    published: updated === NOT_YET_ASSIGNED ? NOT_YET_ASSIGNED : updated,
    updated,
    nextReview: NOT_YET_ASSIGNED,
    deprecated: maturity === "Deprecated" ? updated : NOT_YET_ASSIGNED,
    futureRevision: NOT_YET_ASSIGNED,
  };
}

function buildVersionHistory(
  version: string | undefined,
  lastUpdated: string | undefined,
): readonly KnowledgeVersionEntry[] {
  if (!version || !version.trim()) {
    return [
      {
        version: NOT_YET_ASSIGNED,
        previousVersion: NOT_YET_ASSIGNED,
        summaryOfChanges: NOT_YET_ASSIGNED,
        date: NOT_YET_ASSIGNED,
      },
    ];
  }
  return [
    {
      version: version.trim(),
      previousVersion: NOT_YET_ASSIGNED,
      summaryOfChanges: NOT_YET_ASSIGNED,
      date: assigned(lastUpdated),
    },
  ];
}

function futureScopeFromEntity(entityId: string | undefined): string {
  if (!entityId) {
    return NOT_YET_ASSIGNED;
  }
  const entity = getEntityById(entityId);
  if (!entity || entity.futureTopics.length === 0) {
    return NOT_YET_ASSIGNED;
  }
  return entity.futureTopics.join("; ");
}

/**
 * Build a complete Knowledge Object from page + optional entity context.
 */
export function resolveKnowledgeObject(
  input: KnowledgeObjectPageInput,
): KnowledgeObject {
  const entityId = input.entityId ?? null;
  const entity = entityId ? getEntityById(entityId) : undefined;
  const metadata = input.metadata;
  const type = classifyObjectType(entity, input.knowledgeId, input.typeOverride);
  const maturity = classifyMaturity(metadata?.status, entity);
  const evidenceLevel = classifyEvidence(metadata?.status, entity);
  const relationBundle = entity
    ? buildEntityRelationships(entity)
    : {
        relationships: [],
        incomingDependencies: [],
        outgoingDependencies: [],
        graph: emptyGraph(),
      };

  const status = assigned(
    metadata?.status ??
      (entity ? getEntityStatusLabel(entity.status) : undefined),
  );
  const version = assigned(metadata?.version);
  const readingTime = assigned(metadata?.readingTime);
  const lastReview = assigned(metadata?.lastUpdated);
  const currentScope = assigned(
    input.currentScope ??
      (metadata?.status ? `Current document status: ${metadata.status}` : undefined),
  );
  const futureScope = assigned(
    input.futureScope ?? futureScopeFromEntity(entityId ?? undefined),
  );

  return {
    knowledgeId: input.knowledgeId,
    title: input.title,
    href: input.href,
    domain: input.domain,
    category: assigned(metadata?.category ?? input.domain),
    type,
    status,
    version,
    readingTime,
    maturity,
    evidenceLevel,
    owner: NOT_YET_ASSIGNED,
    lastReview,
    currentScope,
    futureScope,
    entityId,
    relationships: relationBundle.relationships,
    incomingDependencies: relationBundle.incomingDependencies,
    outgoingDependencies: relationBundle.outgoingDependencies,
    lifecycle: buildLifecycle(metadata?.lastUpdated, maturity),
    versionHistory: buildVersionHistory(metadata?.version, metadata?.lastUpdated),
    graph: relationBundle.graph,
  };
}
