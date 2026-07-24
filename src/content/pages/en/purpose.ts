import type { EditorialPageContent } from "@/components/pages/page-types";
import { humanPurposeContent } from "@/content/home/en";

/** Demonstration Editorial page — Purpose. Concise architecture validation content. */
export const purposePageContent: EditorialPageContent = {
  label: "Purpose",
  title: humanPurposeContent.heading,
  introduction:
    "SAVEN Core exists to develop physical and digital systems that support people in hospitals, at home and in everyday life — under human oversight.",
  status: "Development architecture demonstration",
  sectionNav: [
    { id: "human-centered", label: "Human-centered work" },
    { id: "assistance", label: "Assistance, not spectacle" },
  ],
  sections: [
    {
      id: "human-centered",
      title: "Human-centered work",
      paragraphs: [humanPurposeContent.paragraphs[0]],
    },
    {
      id: "assistance",
      title: "Assistance, not spectacle",
      paragraphs: [humanPurposeContent.paragraphs[1]],
    },
  ],
  principles: humanPurposeContent.principles,
  relatedLinks: [
    { label: "Explore the foundation", href: "/foundation/" },
    { label: "View applications", href: "/applications/" },
    { label: "Explore research", href: "/research/" },
  ],
};
