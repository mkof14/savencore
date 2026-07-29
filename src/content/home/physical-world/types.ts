/**
 * Layer 1 homepage — clarity first, one care-focused living carousel, then closing.
 * Inventory / flagships / technical depth live off-home (footer + section pages).
 * Optional clarity pack (D-0219) is gated by `HOME_CLARITY_V1_ENABLED`.
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

export type ClosingCornerLink = {
  label: string;
  href: string;
};

export type HomeClarityChainStep = {
  label: string;
  href: string;
  cta: string;
};

export type HomeClarityAudienceLink = {
  label: string;
  href: string;
};

export type HomeClarityAudiencePath = {
  id: "care" | "technology" | "investors";
  label: string;
  description: string;
  links: readonly HomeClarityAudienceLink[];
};

/** Reversible clarity blocks (D-0219) — rendered only when the feature flag is on. */
export type HomeClarityContent = {
  definition: {
    heading: string;
    body: string;
  };
  chain: {
    heading: string;
    ariaLabel: string;
    steps: readonly HomeClarityChainStep[];
  };
  exploreStrip: {
    heading: string;
    support: string;
  };
  audience: {
    heading: string;
    support: string;
    paths: readonly HomeClarityAudiencePath[];
  };
  not: {
    heading: string;
    points: readonly string[];
  };
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
    /** Stage “why this is SAVEN” line (D-0219; shown when clarity flag on). */
    whyLabel?: string;
    whyLine?: string;
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
  /** Homepage clarity pack copy (D-0219). */
  clarity?: HomeClarityContent;
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
    /** SAVEN wordmark hover/focus glow label (D-0217). */
    wordmarkLabel: string;
    /** Dense upper-corner nav on the dark metal band (D-0217 / D-0218 / D-0221). */
    corners: {
      navLabel: string;
      /** Unused after D-0221 restored full visible clusters (kept optional for locales). */
      moreLabel?: string;
      left: readonly ClosingCornerLink[];
      right: readonly ClosingCornerLink[];
    };
  };
};
