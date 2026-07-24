import { getEntitiesByDomain } from "@/content/knowledge/entity-registry";
import type { SystemsKnowledge } from "@/content/knowledge/types";

/**
 * Systems knowledge architecture — Phase 2.1 presentation export.
 * Item lists and relations derive from the Phase 3.0 entity registry.
 * Purpose copy remains display-specific (not stored on KnowledgeEntity).
 */

/** Temporary compatibility: purpose strings for Systems subsections. */
const systemsPurposeById: Readonly<Record<string, string>> = {
  "human-data-model":
    "Provide a controlled interface between human context and systems that may use authorized information.",
  "ai-decision-support":
    "Assist interpretation and option evaluation without claiming autonomous decision authority.",
  "robotics-layer":
    "Connect intelligence and interfaces to physical assistance capabilities.",
  "drone-systems":
    "Support authorized aerial sensing, inspection, mapping and monitoring tasks.",
  "clinical-interfaces":
    "Define structured interfaces for clinical and care-environment workflows.",
  "knowledge-engine":
    "Organize engineering knowledge, models and governed references used across systems.",
  "safety-layer":
    "Encode operational boundaries, escalation, fallback and conditions to stop or defer.",
  "communication-layer":
    "Define how systems, people and authorized environments exchange signals and commands.",
};

export const systemsKnowledge: SystemsKnowledge = {
  domainId: "systems",
  subsections: getEntitiesByDomain("systems").map((entity) => ({
    id: entity.id,
    title: entity.title,
    purpose: systemsPurposeById[entity.id] ?? entity.summary,
    summary: entity.summary,
    futureTopics: entity.futureTopics,
    relatedTechnology: entity.relatedTechnologyIds,
    relatedApplications: entity.relatedApplicationIds,
  })),
};
