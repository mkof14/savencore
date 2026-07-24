/**
 * Container strategy — max content widths aligned to the breakpoint ladder.
 * Horizontal inset uses the spacing scale only.
 */

import { breakpoints } from "./breakpoints";
import { spacing } from "./spacing";

export const containerMaxWidth = {
  sm: `${breakpoints.sm / 16}rem`,
  md: `${breakpoints.md / 16}rem`,
  lg: `${breakpoints.lg / 16}rem`,
  xl: `${breakpoints.xl / 16}rem`,
  "2xl": `${breakpoints["2xl"] / 16}rem`,
} as const;

export type ContainerSize = keyof typeof containerMaxWidth;

/** Default page gutters from the spacing scale (no ad-hoc values). */
export const containerPaddingX = {
  base: spacing[16],
  md: spacing[24],
  lg: spacing[32],
} as const;

export const container = {
  maxWidth: containerMaxWidth,
  paddingX: containerPaddingX,
  /**
   * Shared layout rule for future container components:
   * width 100%, centered, max-width by size, horizontal padding from scale.
   */
  cssTemplate: {
    width: "100%",
    marginInline: "auto",
    paddingInline: containerPaddingX.base,
    boxSizing: "border-box" as const,
  },
} as const;
