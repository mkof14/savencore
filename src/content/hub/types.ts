import type { HubVisualTheme } from "@/content/hub/hub-visuals";
import type { LabsDataLoopLabels } from "@/content/labs/data-loop";
import type { RoboticsInterfaceDiagramLabels } from "@/content/systems/robotics-interface-diagram";

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
  /** Optional editorial icon key (e.g. potential, care, horizon, growth). */
  icon?: string;
};

export type HubSection = {
  id: string;
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
  /** When true, section starts collapsed (progressive disclosure). */
  collapsed?: boolean;
};

/** Editorial scene band — human-help / lab atmosphere imagery (D-0166). */
export type HubScene = {
  id: string;
  image: string;
  alt: string;
  title: string;
  caption: string;
};

export type HubDiagram =
  | {
      kind: "labs-data-loop";
      labels: LabsDataLoopLabels;
    }
  | {
      kind: "robotics-interface";
      labels: RoboticsInterfaceDiagramLabels;
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
    /** Optional multi-tile masthead (Purpose care collage). */
    mastheadCollage?: readonly string[];
  };
  /** Short editorial story beats for ordinary readers (D-0165). */
  highlights?: readonly HubHighlight[];
  body?: readonly string[];
  /** Animated or static architecture diagram (Labs D-0166 / Robotics Interface D-0189). */
  diagram?: HubDiagram;
  /** Visual scenes after the opening (Labs leaves / overview — D-0166). */
  scenes?: readonly HubScene[];
  sections?: readonly HubSection[];
  paths?: {
    heading: string;
    links: readonly HubPathLink[];
  };
  note?: string;
  related?: readonly { label: string; href: string }[];
};
