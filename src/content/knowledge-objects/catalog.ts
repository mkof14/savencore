/**
 * Static Knowledge Object catalog for all published knowledge destinations.
 * Identity only — page templates enrich with document metadata at render time.
 */

import { getEntityById } from "@/content/knowledge/entity-registry";
import { ENTITY_PAGE_HREFS } from "@/navigation/entity-page-paths";
import { resolveKnowledgeObject } from "@/content/knowledge-objects/resolve";
import type {
  KnowledgeObject,
  KnowledgeObjectPageInput,
  KnowledgeObjectType,
} from "@/content/knowledge-objects/types";

type CatalogEntry = {
  readonly knowledgeId: string;
  readonly href: string;
  readonly title: string;
  readonly domain: string;
  readonly entityId?: string;
  readonly typeOverride?: KnowledgeObjectType;
};

const OVERVIEW_ENTRIES: readonly CatalogEntry[] = [
  {
    knowledgeId: "page-home",
    href: "/",
    title: "SAVEN Core Home",
    domain: "Home",
    typeOverride: "Reference",
  },
  {
    knowledgeId: "page-purpose",
    href: "/purpose/",
    title: "Purpose",
    domain: "Purpose",
    typeOverride: "Foundation",
  },
  {
    knowledgeId: "page-foundation",
    href: "/foundation/",
    title: "Foundation",
    domain: "Foundation",
    entityId: "saven-core",
    typeOverride: "Foundation",
  },
  {
    knowledgeId: "page-technology",
    href: "/technology/",
    title: "Technology",
    domain: "Technology",
    typeOverride: "Reference",
  },
  {
    knowledgeId: "page-systems",
    href: "/systems/",
    title: "Systems",
    domain: "Systems",
    typeOverride: "System",
  },
  {
    knowledgeId: "page-applications",
    href: "/applications/",
    title: "Applications",
    domain: "Applications",
    typeOverride: "Application",
  },
  {
    knowledgeId: "page-trust",
    href: "/trust/",
    title: "Trust",
    domain: "Trust",
    entityId: "trust-architecture",
    typeOverride: "Policy",
  },
  {
    knowledgeId: "page-research",
    href: "/applications/research-applications/",
    title: "Research",
    domain: "Research",
    entityId: "research-areas",
    typeOverride: "Research",
  },
];

function entityCatalogEntries(): CatalogEntry[] {
  return Object.entries(ENTITY_PAGE_HREFS).map(([entityId, href]) => {
    const entity = getEntityById(entityId);
    const domainLabel =
      entity?.domain === "systems"
        ? "Systems"
        : entity?.domain === "applications"
          ? "Applications"
          : entity?.domain === "trust"
            ? "Trust"
            : entity?.domain === "research"
              ? "Research"
              : entity?.domain === "technology"
                ? "Technology"
                : "Knowledge";
    return {
      knowledgeId: entityId,
      href,
      title: entity?.title ?? entityId,
      domain: domainLabel,
      entityId,
    };
  });
}

/** Deduplicated catalog: overview pages + entity-backed leaves. */
export const knowledgeObjectCatalog: readonly CatalogEntry[] = (() => {
  const byHref = new Map<string, CatalogEntry>();
  for (const entry of OVERVIEW_ENTRIES) {
    byHref.set(entry.href, entry);
  }
  for (const entry of entityCatalogEntries()) {
    // Prefer overview entry when href already mapped (e.g. /trust/).
    if (!byHref.has(entry.href)) {
      byHref.set(entry.href, entry);
    }
  }
  return Array.from(byHref.values());
})();

const catalogByHref = new Map(
  knowledgeObjectCatalog.map((entry) => [entry.href, entry]),
);
const catalogById = new Map(
  knowledgeObjectCatalog.map((entry) => [entry.knowledgeId, entry]),
);
for (const entry of knowledgeObjectCatalog) {
  if (entry.entityId && !catalogById.has(entry.entityId)) {
    catalogById.set(entry.entityId, entry);
  }
}

export function getCatalogEntryByHref(
  href: string,
): CatalogEntry | undefined {
  return catalogByHref.get(href);
}

export function getCatalogEntryById(
  knowledgeId: string,
): CatalogEntry | undefined {
  return catalogById.get(knowledgeId);
}

export function toPageInput(
  entry: CatalogEntry,
  enrichment?: Partial<
    Pick<
      KnowledgeObjectPageInput,
      "metadata" | "currentScope" | "futureScope" | "title"
    >
  >,
): KnowledgeObjectPageInput {
  return {
    knowledgeId: entry.knowledgeId,
    href: entry.href,
    title: enrichment?.title ?? entry.title,
    domain: entry.domain,
    ...(entry.entityId ? { entityId: entry.entityId } : {}),
    ...(entry.typeOverride ? { typeOverride: entry.typeOverride } : {}),
    ...(enrichment?.metadata ? { metadata: enrichment.metadata } : {}),
    ...(enrichment?.currentScope
      ? { currentScope: enrichment.currentScope }
      : {}),
    ...(enrichment?.futureScope
      ? { futureScope: enrichment.futureScope }
      : {}),
  };
}

/** Resolve from catalog identity; optional page enrichment. */
export function getKnowledgeObjectByHref(
  href: string,
  enrichment?: Partial<
    Pick<
      KnowledgeObjectPageInput,
      "metadata" | "currentScope" | "futureScope" | "title"
    >
  >,
): KnowledgeObject | undefined {
  const entry = getCatalogEntryByHref(href);
  if (!entry) {
    return undefined;
  }
  return resolveKnowledgeObject(toPageInput(entry, enrichment));
}

export function getKnowledgeObjectById(
  knowledgeId: string,
  enrichment?: Partial<
    Pick<
      KnowledgeObjectPageInput,
      "metadata" | "currentScope" | "futureScope" | "title"
    >
  >,
): KnowledgeObject | undefined {
  const entry = getCatalogEntryById(knowledgeId);
  if (!entry) {
    return undefined;
  }
  return resolveKnowledgeObject(toPageInput(entry, enrichment));
}

/** All catalog objects resolved without page-specific metadata enrichment. */
export function listKnowledgeObjects(): readonly KnowledgeObject[] {
  return knowledgeObjectCatalog.map((entry) =>
    resolveKnowledgeObject(toPageInput(entry)),
  );
}
