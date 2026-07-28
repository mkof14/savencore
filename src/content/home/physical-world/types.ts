/**
 * Layer 1 homepage — clarity first, one care-focused living carousel, then closing.
 * Inventory / flagships / technical depth live off-home (footer + section pages).
 */

export type PhysicalWorldDomainScene = {
  id: string;
  label: string;
  line: string;
};

export type PhysicalWorldFlagshipItem = {
  label: string;
  href: string;
  status: string;
  note: string;
};

export type ClosingExplorePillar = {
  id: "support" | "action" | "verification" | "environment" | "network";
  label: string;
  meaning: string;
  href: string;
  cta: string;
};

export type PhysicalWorldHomeContent = {
  brand: string;
  heroLine: string;
  oneBreath: string;
  builds: readonly string[];
  buildsLabel: string;
  tagline: string;
  cue: string;
  /** Single post-hero living carousel (care / help scenes only). */
  living: {
    headline: string;
    support: string;
    scenes: readonly PhysicalWorldDomainScene[];
    railLabel: string;
    deepenLabel: string;
    deepenHref: string;
  };
  /** Optional compact gateway to flagship workstreams (D-0194 / H-2 / D-0208 table). */
  flagships?: {
    headline: string;
    support: string;
    columns: {
      workstream: string;
      status: string;
      note: string;
    };
    items: readonly PhysicalWorldFlagshipItem[];
  };
  closing: {
    heading: string;
    pillars: string;
    tagline: string;
    alt: string;
    /** Explore SAVEN interactive map (D-0216). */
    exploreLabel: string;
    exploreHint: string;
    goDeeper: string;
    map: readonly ClosingExplorePillar[];
  };
};
