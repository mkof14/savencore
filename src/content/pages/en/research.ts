import type { ResearchPageContent } from "@/components/pages/page-types";
import { researchLabsContent } from "@/content/home/en";
import { getEntitiesByDomain } from "@/content/knowledge/entity-registry";

/**
 * Research page content.
 * Section index derives from the canonical entity registry.
 * Research entries remain page-specific display content.
 */

const researchEntities = getEntitiesByDomain("research");

/** Research page content. */
export const researchPageContent: ResearchPageContent = {
  label: "Research",
  title: researchLabsContent.heading,
  introduction: researchLabsContent.introduction,
  status: "Research architecture",
  sectionNav: [
    { id: "research-areas", label: "Research sections" },
    { id: "research-relations", label: "Related domains" },
    { id: "research-entries", label: "Research notes" },
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
  entriesHeading: "Research notes",
  entries: [
    {
      id: "research-orientation",
      title: "Research orientation",
      meta: "Research overview",
      summary:
        "Research defines the questions, models and evidence that inform architecture and system design.",
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
