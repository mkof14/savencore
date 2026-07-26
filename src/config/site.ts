/**
 * Public site constants for SEO, sharing, and PWA.
 * Do not invent entity addresses, social URLs, or contact destinations here.
 */

export const SITE_NAME = "SAVEN Core";
export const SITE_TAGLINE = "Turning Intelligence Into Human Care";
export const SITE_DEFAULT_TITLE = "SAVEN Core — Intelligence for the Physical World";
export const SITE_DEFAULT_DESCRIPTION =
  "SAVEN Core develops intelligent systems that connect artificial intelligence with the physical world — AI, robotics, and autonomous systems designed to operate in real environments under human control.";

/** Canonical production origin. Override with NEXT_PUBLIC_SITE_URL when needed. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.savencore.com";

export const SITE_OG_IMAGE_PATH = "/brand/og-default.png";
export const SITE_OG_IMAGE_ALT = "SAVEN Core";

export const SITE_THEME_COLOR_LIGHT = "#f4f6f8";
export const SITE_THEME_COLOR_DARK = "#0b1220";
