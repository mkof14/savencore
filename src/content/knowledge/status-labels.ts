import type { KnowledgeEntityStatus } from "@/content/knowledge/entity-types";

/** Visitor-facing labels for entity public status. */
export const knowledgeEntityStatusLabels: Readonly<
  Record<KnowledgeEntityStatus, string>
> = {
  foundational: "Foundational",
  "active-development": "Architecture",
  research: "Research",
  conceptual: "Concept",
  planned: "Reference",
  reference: "Reference",
};

export function getEntityStatusLabel(status: KnowledgeEntityStatus): string {
  return knowledgeEntityStatusLabels[status];
}
