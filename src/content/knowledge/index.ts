import { applicationsKnowledge } from "@/content/knowledge/applications";
import {
  knowledgeDomainMap,
  knowledgeDomains,
  knowledgeMapDiagram,
} from "@/content/knowledge/domains";
import { researchKnowledge } from "@/content/knowledge/research";
import { systemsKnowledge } from "@/content/knowledge/systems";
import { technologyKnowledge } from "@/content/knowledge/technology";
import type {
  KnowledgeDomainId,
  KnowledgeNavItem,
} from "@/content/knowledge/types";

export * from "@/content/knowledge/types";
export * from "@/content/knowledge/domains";
export * from "@/content/knowledge/technology";
export * from "@/content/knowledge/systems";
export * from "@/content/knowledge/research";
export * from "@/content/knowledge/applications";

/** Aggregated knowledge architecture registry. */
export const knowledgeArchitecture = {
  domains: knowledgeDomains,
  domainMap: knowledgeDomainMap,
  mapDiagram: knowledgeMapDiagram,
  technology: technologyKnowledge,
  systems: systemsKnowledge,
  research: researchKnowledge,
  applications: applicationsKnowledge,
} as const;

/** Reusable domain navigator model for future knowledge pages. */
export function getKnowledgeDomainNav(): readonly KnowledgeNavItem[] {
  return knowledgeDomains.map((domain) => ({
    id: domain.id,
    label: domain.title,
    href: domain.href,
  }));
}

/** Related-domain navigator for a single domain. */
export function getRelatedDomainNav(
  domainId: KnowledgeDomainId,
): readonly KnowledgeNavItem[] {
  const domain = knowledgeDomainMap[domainId];
  return domain.relatedDomains.map((relatedId) => {
    const related = knowledgeDomainMap[relatedId];
    return {
      id: related.id,
      label: related.title,
      href: related.href,
    };
  });
}
