import { getEntitiesByDomain } from "@/content/knowledge/entity-registry";
import type { KnowledgeDomainId, ResearchKnowledge } from "@/content/knowledge/types";

/**
 * Research knowledge architecture — Phase 2.1 presentation export.
 * Section index and relations derive from the Phase 3.0 entity registry.
 * Purpose copy and domain-level relatedDomains remain display-specific.
 */

/** Temporary compatibility: purpose strings for Research sections. */
const researchPurposeById: Readonly<Record<string, string>> = {
  "research-areas":
    "Group the technical questions that shape architecture and system design.",
  "white-papers":
    "Reserve a structured place for approved long-form technical papers.",
  "engineering-notes":
    "Capture concise engineering observations that inform implementation.",
  publications:
    "Provide a registry structure for approved public research outputs.",
  "future-research":
    "Track intended research directions without promising delivery dates.",
  laboratories:
    "Describe engineering environments that turn research into testable methods.",
};

/** Temporary compatibility: prior relatedDomains lists (domain IDs, not entity IDs). */
const researchRelatedDomainsById: Readonly<
  Record<string, readonly KnowledgeDomainId[]>
> = {
  "research-areas": ["technology", "systems", "foundation"],
  "white-papers": ["technology", "trust", "foundation"],
  "engineering-notes": ["systems", "technology", "foundation"],
  publications: ["research", "technology", "company"],
  "future-research": ["foundation", "systems", "trust"],
  laboratories: ["systems", "technology", "trust"],
};

export const researchKnowledge: ResearchKnowledge = {
  domainId: "research",
  sections: getEntitiesByDomain("research").map((entity) => ({
    id: entity.id,
    title: entity.title,
    purpose: researchPurposeById[entity.id] ?? entity.summary,
    summary: entity.summary,
    futureTopics: entity.futureTopics,
    relatedDomains: researchRelatedDomainsById[entity.id] ?? [],
  })),
};
