import type { ResearchPageContent } from "@/components/pages/page-types";
import { researchLabsContent } from "@/content/home/en";

/** Demonstration Research page. Concise architecture validation content. */
export const researchPageContent: ResearchPageContent = {
  label: "Research",
  title: researchLabsContent.heading,
  introduction: researchLabsContent.introduction,
  status: "Research architecture demonstration",
  sectionNav: [
    { id: "research-areas", label: "Research areas" },
    { id: "research-entries", label: "Working documents" },
  ],
  filterLabels: [
    "Architecture",
    "Safety",
    "Human-system interaction",
    "Autonomy",
  ],
  areas: [
    {
      id: "system-models",
      title: "System models",
      summary:
        "Models and methods that define how human context, permissions and system behavior connect.",
    },
    {
      id: "safety-privacy",
      title: "Safety and privacy",
      summary:
        "Technical questions about boundaries, escalation, minimization and accountable use.",
    },
    {
      id: "human-system",
      title: "Human-system interaction",
      summary:
        "Research that shapes interfaces between people, robotic systems and environment-level controls.",
    },
  ],
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
