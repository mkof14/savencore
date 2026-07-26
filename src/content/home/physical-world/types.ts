/**
 * Layer 1 homepage — clarity first, one care-focused living carousel, then closing.
 * Inventory / flagships / technical depth live off-home (footer + section pages).
 */

export type PhysicalWorldDomainScene = {
  id: string;
  label: string;
  line: string;
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
  closing: {
    heading: string;
    pillars: string;
    tagline: string;
    alt: string;
  };
};
