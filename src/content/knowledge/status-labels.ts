import type { KnowledgeEntityStatus } from "@/content/knowledge/entity-types";

/** Human-readable labels for entity development status. */
export const knowledgeEntityStatusLabels: Readonly<
  Record<KnowledgeEntityStatus, string>
> = {
  foundational: "Foundational",
  "active-development": "Active development",
  research: "Research",
  conceptual: "Conceptual",
  planned: "Planned",
  reference: "Reference",
};

export function getEntityStatusLabel(status: KnowledgeEntityStatus): string {
  return knowledgeEntityStatusLabels[status];
}
