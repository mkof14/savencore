import { getEntitiesByDomain } from "@/content/knowledge/entity-registry";
import type { TechnologyKnowledge } from "@/content/knowledge/types";

/**
 * Technology knowledge architecture — Phase 2.1 presentation export.
 * Item lists and relations derive from the Phase 3.0 entity registry.
 * Purpose copy remains display-specific (not stored on KnowledgeEntity).
 */

/** Temporary compatibility: purpose strings for Technology subsections. */
const technologyPurposeById: Readonly<Record<string, string>> = {
  "artificial-intelligence":
    "Support context interpretation, option evaluation and controlled assistance within defined limits.",
  "human-data":
    "Represent authorized human context for careful interpretation and assistance.",
  robotics:
    "Enable physical interaction, mobility and assistance in real environments.",
  automation:
    "Define controlled system behavior for tasks that can be delegated safely.",
  privacy:
    "Limit what information may be used, why it may be used and who may access it.",
  security:
    "Protect systems, interfaces and authorized data pathways from misuse and unauthorized access.",
  "data-infrastructure":
    "Provide the engineering substrate for storing, moving and governing authorized data.",
  interoperability:
    "Define how SAVEN Core systems exchange information with authorized external environments.",
};

export const technologyKnowledge: TechnologyKnowledge = {
  domainId: "technology",
  subsections: getEntitiesByDomain("technology").map((entity) => ({
    id: entity.id,
    title: entity.title,
    purpose: technologyPurposeById[entity.id] ?? entity.summary,
    summary: entity.summary,
    futureTopics: entity.futureTopics,
    relatedSystems: entity.relatedSystemIds,
  })),
};
