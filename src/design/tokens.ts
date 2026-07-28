/**
 * Design tokens — organization hub for the SAVEN Core visual foundation.
 * Neutral semantic color tokens only. Final brand colors are deferred.
 */

import { breakpoints, media } from "./breakpoints";
import { container } from "./container";
import { motion } from "./motion";
import { DEFAULT_RADIUS, radius } from "./radius";
import { spacing, spacingPx, SPACING_SCALE_PX } from "./spacing";
import { fontFamily, typography } from "./typography";

/**
 * Light-primary neutral palette (D-0207) — cool off-white chrome, not pure white.
 * Intentionally avoids purple/indigo AI gradients and warm cream template looks.
 */
export const color = {
  background: "#f0f0f2",
  surface: "#f6f6f8",
  text: "#1a1d24",
  textSecondary: "#3a3f4a",
  border: "#d4d4d8",
  divider: "#c4c4ca",
  success: "#15803d",
  warning: "#a16207",
  error: "#b91c1c",
} as const;

/**
 * Functional signal accents for architecture markers (borders/dots).
 * Not a marketing palette. Do not use as large fills or neon treatments.
 */
export const signal = {
  human: "#0f4c5c",
  knowledge: "#1e3a5f",
  control: "#3f3f46",
  safety: "#7f1d1d",
  action: "#14532d",
} as const;

export type ColorToken = keyof typeof color;

/**
 * Controlled dark surface tokens — soft charcoal gray-blue (D-0207).
 * Matches sitewide dark theme / atmospheric field; not deep template navy.
 */
export const colorDarkSection = {
  background: "#1c1f26",
  surface: "#252830",
  text: "#eef3f7",
  textSecondary: "#c5c9d1",
  border: "#3a3e48",
  divider: "#454954",
} as const;

export const tokens = {
  color,
  signal,
  colorDarkSection,
  spacing,
  spacingPx,
  spacingScalePx: SPACING_SCALE_PX,
  typography,
  fontFamily,
  breakpoints,
  media,
  container,
  motion,
  radius,
  defaultRadius: DEFAULT_RADIUS,
} as const;

export type DesignTokens = typeof tokens;

export {
  breakpoints,
  container,
  fontFamily,
  media,
  motion,
  radius,
  spacing,
  spacingPx,
  SPACING_SCALE_PX,
  typography,
};
