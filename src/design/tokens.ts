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
 * Light-primary neutral palette for engineering clarity.
 * Intentionally avoids purple/indigo AI gradients and warm cream template looks.
 */
export const color = {
  background: "#ffffff",
  surface: "#f4f4f5",
  text: "#18181b",
  textSecondary: "#52525b",
  border: "#e4e4e7",
  divider: "#d4d4d8",
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
 * Controlled dark surface tokens for limited technology sections later.
 * Not a sitewide dark theme. Do not use as the default environment.
 */
export const colorDarkSection = {
  background: "#18181b",
  surface: "#27272a",
  text: "#fafafa",
  textSecondary: "#a1a1aa",
  border: "#3f3f46",
  divider: "#52525b",
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
