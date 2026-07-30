/**
 * Knowledge entity registry validation and query helpers — Phase 3.0.
 * Deterministic checks run on import during development/build.
 */

import { knowledgeEntities, FOUNDATION_HIERARCHY_IDS } from "@/content/knowledge/entities";
import type {
  EntityRelationGroup,
  EntityRelationItem,
  EntityRelationsSummary,
  KnowledgeEntity,
  KnowledgeEntityType,
} from "@/content/knowledge/entity-types";
import { knowledgeDomainMap } from "@/content/knowledge/domains";
import type { KnowledgeDomainId } from "@/content/knowledge/types";
import { ENTITY_PAGE_HREFS } from "@/navigation/entity-page-paths";
import { isPublishedRoute } from "@/navigation/published-routes";

const LOCALE_PREFIX =
  /^\/(en|zh|hi|es|ar|fr|pt|ru|ur|he)(\/|$)/;

const ENTITY_TYPE_DOMAINS: Readonly<
  Record<KnowledgeEntityType, readonly KnowledgeDomainId[]>
> = {
  foundation: ["foundation"],
  technology: ["technology"],
  system: ["systems"],
  "research-area": ["research"],
  "research-output": ["research"],
  application: ["applications"],
  trust: ["trust"],
  company: ["company"],
};

function uniqueStrings(values: readonly string[]): boolean {
  return new Set(values).size === values.length;
}

function isLocaleNeutralPath(href: string): boolean {
  if (!href.startsWith("/")) {
    return false;
  }
  if (LOCALE_PREFIX.test(href)) {
    return false;
  }
  return true;
}

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
    return "/applications/research-applications/";
  }
  const domain = knowledgeDomainMap[entity.domain];
  return `${domain.href}#${entity.slug}`;
}

function toRelationItems(ids: readonly string[]): EntityRelationItem[] {
  const items: EntityRelationItem[] = [];
  for (const id of ids) {
    const entity = entityById.get(id);
    if (!entity) {
      continue;
    }
    const href = entityHref(entity);
    if (!isPublishedRoute(routePath(href))) {
      continue;
    }
    items.push({
      id: entity.id,
      title: entity.title,
      href,
    });
  }
  return items;
}

function pushGroup(
  groups: EntityRelationGroup[],
  id: EntityRelationGroup["id"],
  heading: string,
  items: readonly EntityRelationItem[],
): void {
  if (items.length === 0) {
    return;
  }
  groups.push({ id, heading, items });
}

/** Build a Map once for O(1) lookup. */
const entityById: ReadonlyMap<string, KnowledgeEntity> = new Map(
  knowledgeEntities.map((entity) => [entity.id, entity]),
);

/**
 * Validate the canonical registry.
 * Throws with a deterministic message list on failure.
 */
export function validateEntityRegistry(
  entities: readonly KnowledgeEntity[] = knowledgeEntities,
): readonly string[] {
  const errors: string[] = [];
  const ids = entities.map((e) => e.id);
  const idSet = new Set(ids);

  if (!uniqueStrings(ids)) {
    errors.push("Entity IDs must be unique.");
  }

  const slugKeys = entities.map((e) => `${e.domain}:${e.slug}`);
  if (!uniqueStrings(slugKeys)) {
    errors.push("Entity slugs must be unique within each domain routing scope.");
  }

  for (const entity of entities) {
    if (!entity.title.trim()) {
      errors.push(`Entity "${entity.id}" has an empty title.`);
    }
    if (!entity.summary.trim()) {
      errors.push(`Entity "${entity.id}" has an empty summary.`);
    }

    const allowedDomains = ENTITY_TYPE_DOMAINS[entity.entityType];
    if (!allowedDomains.includes(entity.domain)) {
      errors.push(
        `Entity "${entity.id}" type "${entity.entityType}" is incompatible with domain "${entity.domain}".`,
      );
    }

    const relationFields: ReadonlyArray<{
      name: string;
      values: readonly string[];
    }> = [
      { name: "childIds", values: entity.childIds },
      { name: "relatedEntityIds", values: entity.relatedEntityIds },
      { name: "dependencyIds", values: entity.dependencyIds },
      { name: "usedByIds", values: entity.usedByIds },
      { name: "relatedTechnologyIds", values: entity.relatedTechnologyIds },
      { name: "relatedSystemIds", values: entity.relatedSystemIds },
      { name: "relatedResearchIds", values: entity.relatedResearchIds },
      { name: "relatedApplicationIds", values: entity.relatedApplicationIds },
      { name: "relatedTrustIds", values: entity.relatedTrustIds },
    ];

    for (const field of relationFields) {
      if (!uniqueStrings(field.values)) {
        errors.push(
          `Entity "${entity.id}" has duplicate IDs in ${field.name}.`,
        );
      }
      for (const ref of field.values) {
        if (ref === entity.id) {
          errors.push(
            `Entity "${entity.id}" references itself in ${field.name}.`,
          );
        }
        if (!idSet.has(ref)) {
          errors.push(
            `Entity "${entity.id}" references missing ID "${ref}" in ${field.name}.`,
          );
        }
      }
    }

    if (entity.parentId !== null) {
      if (entity.parentId === entity.id) {
        errors.push(`Entity "${entity.id}" cannot be its own parent.`);
      }
      if (!idSet.has(entity.parentId)) {
        errors.push(
          `Entity "${entity.id}" has missing parentId "${entity.parentId}".`,
        );
      } else {
        const parent = entities.find((e) => e.id === entity.parentId);
        if (parent && !parent.childIds.includes(entity.id)) {
          errors.push(
            `Parent "${entity.parentId}" is missing child "${entity.id}".`,
          );
        }
      }
    }

    for (const childId of entity.childIds) {
      const child = entities.find((e) => e.id === childId);
      if (child && child.parentId !== entity.id) {
        errors.push(
          `Child "${childId}" does not list parent "${entity.id}".`,
        );
      }
    }

    for (const link of entity.relatedPageLinks) {
      if (!link.label.trim()) {
        errors.push(`Entity "${entity.id}" has a page link with empty label.`);
      }
      if (!isLocaleNeutralPath(link.href)) {
        errors.push(
          `Entity "${entity.id}" has non locale-neutral page link "${link.href}".`,
        );
      }
    }
  }

  // Foundation hierarchy: BioMath Life → BioMath Core → SAVEN → SAVEN Core
  for (let i = 0; i < FOUNDATION_HIERARCHY_IDS.length; i += 1) {
    const id = FOUNDATION_HIERARCHY_IDS[i];
    if (id === undefined) {
      continue;
    }
    const entity = entities.find((e) => e.id === id);
    if (!entity) {
      errors.push(`Foundation hierarchy entity "${id}" is missing.`);
      continue;
    }
    if (entity.entityType !== "foundation" || entity.domain !== "foundation") {
      errors.push(`Foundation hierarchy entity "${id}" has invalid type/domain.`);
    }
    if (i === 0) {
      if (entity.parentId !== null) {
        errors.push(`Foundation root "${id}" must have parentId null.`);
      }
    } else {
      const expectedParent = FOUNDATION_HIERARCHY_IDS[i - 1];
      if (expectedParent !== undefined && entity.parentId !== expectedParent) {
        errors.push(
          `Foundation entity "${id}" must have parentId "${expectedParent}".`,
        );
      }
    }
    if (i < FOUNDATION_HIERARCHY_IDS.length - 1) {
      const expectedChild = FOUNDATION_HIERARCHY_IDS[i + 1];
      if (
        expectedChild !== undefined &&
        !entity.childIds.includes(expectedChild)
      ) {
        errors.push(
          `Foundation entity "${id}" must include child "${expectedChild}".`,
        );
      }
    }
  }

  return errors;
}

/** Assert registry validity; throws on failure so build/dev fails loudly. */
export function assertEntityRegistryValid(): void {
  const errors = validateEntityRegistry();
  if (errors.length > 0) {
    throw new Error(
      `Knowledge entity registry validation failed:\n- ${errors.join("\n- ")}`,
    );
  }
}

// Run once on module evaluation (development and production builds).
assertEntityRegistryValid();

// —— Query helpers ——

export function getEntityById(id: string): KnowledgeEntity | undefined {
  return entityById.get(id);
}

export function getEntitiesByDomain(
  domain: KnowledgeDomainId,
): readonly KnowledgeEntity[] {
  return knowledgeEntities.filter((entity) => entity.domain === domain);
}

export function getEntitiesByType(
  entityType: KnowledgeEntityType,
): readonly KnowledgeEntity[] {
  return knowledgeEntities.filter((entity) => entity.entityType === entityType);
}

export function getChildren(id: string): readonly KnowledgeEntity[] {
  const entity = entityById.get(id);
  if (!entity) {
    return [];
  }
  return toRelationItems(entity.childIds)
    .map((item) => entityById.get(item.id))
    .filter((value): value is KnowledgeEntity => value !== undefined);
}

export function getParent(id: string): KnowledgeEntity | undefined {
  const entity = entityById.get(id);
  if (!entity || entity.parentId === null) {
    return undefined;
  }
  return entityById.get(entity.parentId);
}

export function getDependencies(id: string): readonly KnowledgeEntity[] {
  const entity = entityById.get(id);
  if (!entity) {
    return [];
  }
  return entity.dependencyIds
    .map((depId) => entityById.get(depId))
    .filter((value): value is KnowledgeEntity => value !== undefined);
}

export function getUsedBy(id: string): readonly KnowledgeEntity[] {
  const entity = entityById.get(id);
  if (!entity) {
    return [];
  }
  return entity.usedByIds
    .map((usedId) => entityById.get(usedId))
    .filter((value): value is KnowledgeEntity => value !== undefined);
}

export function getRelatedEntities(id: string): readonly KnowledgeEntity[] {
  const entity = entityById.get(id);
  if (!entity) {
    return [];
  }
  return entity.relatedEntityIds
    .map((relatedId) => entityById.get(relatedId))
    .filter((value): value is KnowledgeEntity => value !== undefined);
}

/**
 * Presentation adapter: grouped relations for future page rendering.
 * Empty groups are omitted.
 */
export function getEntityRelationsSummary(
  id: string,
): EntityRelationsSummary | undefined {
  const entity = entityById.get(id);
  if (!entity) {
    return undefined;
  }

  const groups: EntityRelationGroup[] = [];
  const parent = getParent(id);

  pushGroup(
    groups,
    "part-of",
    "Part of",
    parent
      ? [{ id: parent.id, title: parent.title, href: entityHref(parent) }]
      : [],
  );
  pushGroup(groups, "contains", "Contains", toRelationItems(entity.childIds));
  pushGroup(
    groups,
    "depends-on",
    "Depends On",
    toRelationItems(entity.dependencyIds),
  );
  pushGroup(groups, "used-by", "Used By", toRelationItems(entity.usedByIds));
  pushGroup(
    groups,
    "related-technologies",
    "Related Technologies",
    toRelationItems(entity.relatedTechnologyIds),
  );
  pushGroup(
    groups,
    "related-systems",
    "Related Systems",
    toRelationItems(entity.relatedSystemIds),
  );
  pushGroup(
    groups,
    "related-research",
    "Related Research",
    toRelationItems(entity.relatedResearchIds),
  );
  pushGroup(
    groups,
    "related-applications",
    "Related Applications",
    toRelationItems(entity.relatedApplicationIds),
  );

  const trustAndSafetyIds = uniquePreserveOrder([
    ...entity.relatedTrustIds,
    ...entity.relatedSystemIds.filter((systemId) => systemId === "safety-layer"),
    ...entity.relatedEntityIds.filter((relatedId) => {
      const related = entityById.get(relatedId);
      return (
        related?.entityType === "trust" || related?.id === "safety-layer"
      );
    }),
  ]);
  pushGroup(
    groups,
    "trust-and-safety",
    "Trust and Safety",
    toRelationItems(trustAndSafetyIds),
  );

  pushGroup(
    groups,
    "related-pages",
    "Related Pages",
    entity.relatedPageLinks
      .filter((link) => isPublishedRoute(routePath(link.href)))
      .map((link) => ({
        id: link.href,
        title: link.label,
        href: link.href,
      })),
  );

  return { entityId: id, groups };
}

function uniquePreserveOrder(values: readonly string[]): readonly string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const value of values) {
    if (seen.has(value)) {
      continue;
    }
    seen.add(value);
    result.push(value);
  }
  return result;
}

/** Ordered foundation hierarchy entities (root → leaf). */
export function getFoundationHierarchyEntities(): readonly KnowledgeEntity[] {
  return FOUNDATION_HIERARCHY_IDS.map((id) => {
    const entity = entityById.get(id);
    if (!entity) {
      throw new Error(`Missing foundation hierarchy entity "${id}".`);
    }
    return entity;
  });
}
