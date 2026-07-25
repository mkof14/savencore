/**
 * Directional Knowledge Object relationships derived from entity registry IDs.
 */

import {
  getEntityById,
  getParent,
} from "@/content/knowledge/entity-registry";
import type { KnowledgeEntity } from "@/content/knowledge/entity-types";
import { knowledgeDomainMap } from "@/content/knowledge/domains";
import { ENTITY_PAGE_HREFS } from "@/navigation/entity-page-paths";
import { isPublishedRoute } from "@/navigation/published-routes";
import type {
  KnowledgeGraphView,
  KnowledgeRelationEdge,
  KnowledgeRelationKind,
} from "@/content/knowledge-objects/types";

function routePath(href: string): string {
  const hashIndex = href.indexOf("#");
  return hashIndex === -1 ? href : href.slice(0, hashIndex) || "/";
}

function entityHref(entity: KnowledgeEntity): string {
  const mapped = ENTITY_PAGE_HREFS[entity.id];
  if (mapped) {
    return mapped;
  }
  if (entity.domain === "research") {
    return "/research/";
  }
  const domain = knowledgeDomainMap[entity.domain];
  return `${domain.href}#${entity.slug}`;
}

function toEdge(
  kind: KnowledgeRelationKind,
  entity: KnowledgeEntity,
): KnowledgeRelationEdge | null {
  const href = entityHref(entity);
  if (!isPublishedRoute(routePath(href))) {
    return null;
  }
  return {
    kind,
    targetId: entity.id,
    title: entity.title,
    href,
  };
}

function edgesFromIds(
  kind: KnowledgeRelationKind,
  ids: readonly string[],
): KnowledgeRelationEdge[] {
  const edges: KnowledgeRelationEdge[] = [];
  const seen = new Set<string>();
  for (const id of ids) {
    if (seen.has(id)) {
      continue;
    }
    seen.add(id);
    const entity = getEntityById(id);
    if (!entity) {
      continue;
    }
    const edge = toEdge(kind, entity);
    if (edge) {
      edges.push(edge);
    }
  }
  return edges;
}

/** Map typed neighbor buckets to directional relation kinds. */
function typedNeighborEdges(
  entity: KnowledgeEntity,
): KnowledgeRelationEdge[] {
  return [
    ...edgesFromIds("Uses", entity.relatedTechnologyIds),
    ...edgesFromIds("Supports", entity.relatedSystemIds),
    ...edgesFromIds("Supports", entity.relatedApplicationIds),
    ...edgesFromIds("Protects", entity.relatedTrustIds),
    ...edgesFromIds("Related To", entity.relatedResearchIds),
    ...edgesFromIds("Related To", entity.relatedEntityIds),
  ];
}

/**
 * Build explicit directional relationships for an entity-backed Knowledge Object.
 */
export function buildEntityRelationships(
  entity: KnowledgeEntity,
): {
  relationships: readonly KnowledgeRelationEdge[];
  incomingDependencies: readonly KnowledgeRelationEdge[];
  outgoingDependencies: readonly KnowledgeRelationEdge[];
  graph: KnowledgeGraphView;
} {
  const parent = getParent(entity.id);
  const parentEdges = parent
    ? ([toEdge("Related To", parent)].filter(Boolean) as KnowledgeRelationEdge[])
    : [];
  const childEdges = edgesFromIds("Related To", entity.childIds);
  const outgoingDependencies = edgesFromIds("Depends On", entity.dependencyIds);
  const incomingDependencies = edgesFromIds("Referenced By", entity.usedByIds);
  const usesEdges = edgesFromIds("Uses", entity.dependencyIds);
  const supportsEdges = edgesFromIds("Supports", entity.usedByIds);
  const typed = typedNeighborEdges(entity);

  // Control/Protect special cases for known control entities.
  const controlEdges: KnowledgeRelationEdge[] = [];
  if (entity.id === "safety-layer") {
    controlEdges.push(...edgesFromIds("Controls", entity.usedByIds));
  }
  if (entity.entityType === "trust") {
    controlEdges.push(
      ...edgesFromIds("Protects", [
        ...entity.relatedTechnologyIds,
        ...entity.relatedSystemIds,
        ...entity.relatedApplicationIds,
      ]),
    );
  }

  const relationships = dedupeEdges([
    ...parentEdges,
    ...childEdges,
    ...outgoingDependencies,
    ...incomingDependencies,
    ...usesEdges,
    ...supportsEdges,
    ...typed,
    ...controlEdges,
  ]);

  return {
    relationships,
    incomingDependencies,
    outgoingDependencies,
    graph: {
      parents: parentEdges,
      children: childEdges,
      dependencies: outgoingDependencies,
      consumers: incomingDependencies,
      providers: outgoingDependencies,
    },
  };
}

function dedupeEdges(
  edges: readonly KnowledgeRelationEdge[],
): KnowledgeRelationEdge[] {
  const seen = new Set<string>();
  const result: KnowledgeRelationEdge[] = [];
  for (const edge of edges) {
    const key = `${edge.kind}:${edge.targetId}`;
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    result.push(edge);
  }
  return result;
}

export function emptyGraph(): KnowledgeGraphView {
  return {
    parents: [],
    children: [],
    dependencies: [],
    consumers: [],
    providers: [],
  };
}
