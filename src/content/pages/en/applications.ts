import type { DirectoryPageContent } from "@/components/pages/page-types";
import { applicationContextsContent } from "@/content/home/en";

/** Demonstration Directory page — Applications. Concise architecture validation content. */
export const applicationsPageContent: DirectoryPageContent = {
  label: "Applications",
  title: applicationContextsContent.heading,
  introduction:
    "SAVEN Core application work begins with human environments. Industrial and extended contexts may follow only after the human application foundation is clear.",
  status: "Directory architecture demonstration",
  accessNote:
    "These entries describe intended application contexts. They do not imply active hospital deployment or clinical use.",
  entries: applicationContextsContent.items.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.text,
    href: item.href,
    linkLabel: item.title,
  })),
  groups: [
    {
      id: "related-architecture",
      title: "Related architecture",
      links: [
        { label: "Explore purpose", href: "/purpose/" },
        { label: "Explore the foundation", href: "/foundation/" },
      ],
    },
    {
      id: "related-research",
      title: "Related research",
      links: [{ label: "Explore research", href: "/research/" }],
    },
  ],
  relatedLinks: [
    { label: "Explore purpose", href: "/purpose/" },
    { label: "Explore the foundation", href: "/foundation/" },
  ],
};
