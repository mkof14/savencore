/**
 * Public site constants for SEO, sharing, and PWA.
 * Do not invent entity addresses, social URLs, or contact destinations here.
 */

export const SITE_NAME = "SAVEN Core";
export const SITE_TAGLINE = "Turning Intelligence Into Human Care";
export const SITE_DEFAULT_TITLE = "SAVEN Core — Intelligence for Robots That Help People";
/** Default share/JSON-LD description — primary positioning (D-0280). */
export const SITE_DEFAULT_DESCRIPTION =
  "SAVEN develops intelligent human-assistance technologies for robotics — connecting perception, movement, personalization, safety, and human interaction to help robotic systems support people in the physical world.";

/** Canonical production origin. Override with NEXT_PUBLIC_SITE_URL when needed. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.savencore.com";

/** Default Open Graph / Twitter share image — logo + site name on brand canvas. */
export const SITE_OG_IMAGE_PATH = "/brand/og-default.png";
export const SITE_OG_IMAGE_ALT = "SAVEN Core";
/** Approved falcon brand mark used in chrome and domain mastheads. */
export const SITE_FALCON_MARK_PATH = "/brand/saven-logo-mark.webp";

export const SITE_THEME_COLOR_LIGHT = "#e6e6e9";
export const SITE_THEME_COLOR_DARK = "#1c1f26";
