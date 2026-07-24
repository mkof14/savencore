/**
 * Spacing scale — single source for layout rhythm.
 * Values are pixels at the root; CSS rem equivalents assume 16px root.
 * Do not invent spacing outside this scale.
 */

export const SPACING_SCALE_PX = [4, 8, 12, 16, 24, 32, 48, 64, 96] as const;

export type SpacingPx = (typeof SPACING_SCALE_PX)[number];

/** Named steps mapped to the approved scale. */
export const spacing = {
  4: "0.25rem",
  8: "0.5rem",
  12: "0.75rem",
  16: "1rem",
  24: "1.5rem",
  32: "2rem",
  48: "3rem",
  64: "4rem",
  96: "6rem",
} as const;

export type SpacingToken = keyof typeof spacing;

export const spacingPx = {
  4: 4,
  8: 8,
  12: 12,
  16: 16,
  24: 24,
  32: 32,
  48: 48,
  64: 64,
  96: 96,
} as const satisfies Record<SpacingToken, SpacingPx>;
