import type { ResearchPageContent } from "@/components/pages/page-types";
import { researchLabsContent } from "@/content/home/en";
import { getEntitiesByDomain } from "@/content/knowledge/entity-registry";

/**
 * Research page content — Phase 3.0.
 * Section index derives from the canonical entity registry.
 * Working-document entries remain page-specific display content.
 */

const researchEntities = getEntitiesByDomain("research");

/** Demonstration Research page. Concise architecture validation content. */
export const researchPageContent: ResearchPageContent = {
  label: "Research",
  title: researchLabsContent.heading,
  introduction: researchLabsContent.introduction,
  status: "Research architecture demonstration",
  sectionNav: [
    { id: "research-areas", label: "Research sections" },
    { id: "research-relations", label: "Related domains" },
    { id: "research-entries", label: "Working documents" },
  ],
  filterLabels: [
    "Architecture",
    "Safety",
    "Human-system interaction",
    "Autonomy",
  ],
  areas: researchEntities.map((entity) => ({
    id: entity.id,
    title: entity.title,
    summary: entity.summary,
  })),
  entriesHeading: "Working documents",
  entries: [
    {
      id: "research-orientation",
      title: "Research orientation",
      meta: "Internal architecture note",
      summary:
        "Research defines questions, models and evidence. Public materials will expand as approved documents become available.",
    },
    {
      id: "labs-relationship",
      title: "Relationship to labs",
      meta: "Method note",
      summary: researchLabsContent.relationship,
    },
  ],
  relatedLinks: [
    { label: "Explore the foundation", href: "/foundation/" },
    { label: "Explore purpose", href: "/purpose/" },
    { label: "View applications", href: "/applications/" },
  ],
};

/** Entity used for the compact related-domain relationship block. */
export const researchRelationsEntityId = "research-areas" as const;
