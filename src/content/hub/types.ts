import type { HubVisualTheme } from "@/content/hub/hub-visuals";

/** Layer-1 hub page content — visual public entry, not docs chrome. */

export type HubPathLink = {
  label: string;
  href: string;
  note?: string;
  image?: string;
  imageAlt?: string;
};

export type HubHighlight = {
  id: string;
  title: string;
  text: string;
};

export type HubSection = {
  id: string;
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
  /** When true, section starts collapsed (progressive disclosure). */
  collapsed?: boolean;
};

export type HubPageContent = {
  /** Short domain label shown above the title (e.g. Purpose). */
  label: string;
  title: string;
  status?: string;
  lede: string;
  /** Atmospheric masthead — thematic domain imagery (D-0160). */
  visual?: {
    theme: HubVisualTheme;
    mastheadImage: string;
    mastheadAlt: string;
  };
  /** Short what / why / next cards for ordinary readers. */
  highlights?: readonly HubHighlight[];
  body?: readonly string[];
  sections?: readonly HubSection[];
  paths?: {
    heading: string;
    links: readonly HubPathLink[];
  };
  note?: string;
  related?: readonly { label: string; href: string }[];
};
