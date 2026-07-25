/**
 * Structured reading journeys — references Knowledge Object IDs only.
 */

import { getCatalogEntryById } from "@/content/knowledge-objects/catalog";
import type { ReadingPath } from "@/content/knowledge-objects/types";

export const readingPaths: readonly ReadingPath[] = [
  {
    id: "executive",
    title: "Executive",
    summary: "Orientation across purpose, domains and limits.",
    objectIds: [
      "page-purpose",
      "page-technology",
      "page-systems",
      "page-applications",
      "page-trust",
      "limitations",
    ],
  },
  {
    id: "engineer",
    title: "Engineer",
    summary: "Foundations through coordinated systems and controls.",
    objectIds: [
      "human-data",
      "human-data-model",
      "data-infrastructure",
      "knowledge-engine",
      "ai-decision-support",
      "safety-layer",
    ],
  },
  {
    id: "research",
    title: "Research",
    summary: "Evidence orientation and unresolved questions.",
    objectIds: ["page-research", "page-foundation", "page-technology", "page-systems"],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    summary: "Operating contexts and clinical interface boundaries.",
    objectIds: [
      "healthcare",
      "hospitals",
      "clinical-interfaces",
      "human-oversight",
      "trust-safety",
    ],
  },
  {
    id: "safety",
    title: "Safety",
    summary: "Controls, oversight and governance limits.",
    objectIds: [
      "safety-layer",
      "trust-safety",
      "human-oversight",
      "limitations",
      "transparency",
    ],
  },
  {
    id: "developer",
    title: "Developer",
    summary: "Technical disciplines and system coordination paths.",
    objectIds: [
      "page-technology",
      "interoperability",
      "privacy",
      "security",
      "page-systems",
      "communication-layer",
    ],
  },
] as const;

export function getReadingPathsForObject(
  knowledgeId: string,
): readonly ReadingPath[] {
  return readingPaths.filter((path) => path.objectIds.includes(knowledgeId));
}

export function getNextInReadingPath(
  path: ReadingPath,
  knowledgeId: string,
): { id: string; title: string; href: string } | null {
  const index = path.objectIds.indexOf(knowledgeId);
  if (index === -1 || index >= path.objectIds.length - 1) {
    return null;
  }
  const nextId = path.objectIds[index + 1]!;
  const entry = getCatalogEntryById(nextId);
  if (!entry) {
    return null;
  }
  return { id: entry.knowledgeId, title: entry.title, href: entry.href };
}

/** Validate reading-path IDs resolve in the catalog. */
export function validateReadingPaths(): readonly string[] {
  const errors: string[] = [];
  for (const path of readingPaths) {
    for (const id of path.objectIds) {
      if (!getCatalogEntryById(id)) {
        errors.push(`Reading path "${path.id}" references unknown object "${id}".`);
      }
    }
  }
  return errors;
}

const readingPathErrors = validateReadingPaths();
if (readingPathErrors.length > 0) {
  throw new Error(
    `Reading path validation failed:\n- ${readingPathErrors.join("\n- ")}`,
  );
}
