import type { TechnicalPageContent } from "@/components/pages/page-types";
import {
  foundationChainContent,
  systemLogicContent,
} from "@/content/home/en";

/** Demonstration Technical page — Foundation. Concise architecture validation content. */
export const foundationPageContent: TechnicalPageContent = {
  label: foundationChainContent.label,
  title: foundationChainContent.heading,
  introduction: foundationChainContent.introduction,
  status: "Architecture in development",
  developmentNote:
    "Public foundation information describes the intended architecture. It does not imply commercial deployment, clinical use or regulatory approval.",
  sectionNav: [
    { id: "sequence", label: "Foundation sequence" },
    { id: "system-logic", label: "System logic" },
    { id: "indexed-items", label: "Layers" },
  ],
  architectureSections: [
    {
      id: "sequence",
      title: "Foundation sequence",
      paragraphs: [
        "The foundation connects human understanding to physical systems through a defined sequence. Each layer has a distinct role and remains part of one architecture.",
      ],
    },
    {
      id: "system-logic",
      title: systemLogicContent.heading,
      paragraphs: [
        "Observe, understand, evaluate, assist and learn describe the governed path from human context to careful action.",
        systemLogicContent.governanceNote,
      ],
    },
  ],
  indexedItemsHeading: "Foundation layers",
  indexedItems: foundationChainContent.stages.map((stage) => ({
    id: stage.id,
    title: stage.title,
    role: stage.role,
    description: stage.description,
  })),
  relatedLinks: [
    { label: "Explore purpose", href: "/purpose/" },
    { label: "Explore research", href: "/research/" },
    { label: "View applications", href: "/applications/" },
  ],
};
