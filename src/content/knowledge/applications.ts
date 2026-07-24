import { getEntitiesByDomain } from "@/content/knowledge/entity-registry";
import type {
  ApplicationsKnowledge,
  KnowledgeDomainId,
} from "@/content/knowledge/types";

/**
 * Applications knowledge architecture — Phase 2.1 presentation export.
 * Category lists and system relations derive from the Phase 3.0 entity registry.
 * Purpose copy and relatedDomains remain display-specific.
 */

/** Temporary compatibility: purpose strings for Application categories. */
const applicationsPurposeById: Readonly<Record<string, string>> = {
  healthcare:
    "Support care environments with governed systems and human oversight.",
  home: "Support independence, continuity and safer daily routines.",
  hospitals:
    "Support clinical environments, staff workflows and care infrastructure.",
  emergency:
    "Support time-critical assistance under strict permissions and oversight.",
  industrial:
    "Reserve future industrial extensions that inherit the same foundation and trust constraints.",
  government:
    "Reserve institutional and public-sector collaboration pathways when approved.",
  agriculture:
    "Reserve future agricultural extensions of sensing and assistance systems.",
  research:
    "Support research environments that evaluate systems, methods and evidence.",
};

/** Temporary compatibility: prior relatedDomains lists (domain IDs, not entity IDs). */
const applicationsRelatedDomainsById: Readonly<
  Record<string, readonly KnowledgeDomainId[]>
> = {
  healthcare: ["systems", "trust", "research"],
  home: ["purpose", "systems", "trust"],
  hospitals: ["systems", "technology", "trust"],
  emergency: ["systems", "trust", "research"],
  industrial: ["systems", "technology", "foundation"],
  government: ["trust", "company", "research"],
  agriculture: ["systems", "technology", "research"],
  research: ["research", "systems", "foundation"],
};

export const applicationsKnowledge: ApplicationsKnowledge = {
  domainId: "applications",
  categories: getEntitiesByDomain("applications").map((entity) => ({
    id: entity.id,
    title: entity.id === "research" ? "Research" : entity.title,
    purpose: applicationsPurposeById[entity.id] ?? entity.summary,
    summary: entity.summary,
    futureTopics: entity.futureTopics,
    relatedSystems: entity.relatedSystemIds,
    relatedDomains: applicationsRelatedDomainsById[entity.id] ?? [],
  })),
};
