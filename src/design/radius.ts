/**
 * Radius philosophy — straight corners are the default.
 * Any non-zero radius must be an explicit opt-in per component, never global.
 */

export const radius = {
  /** Global / default — mandatory for the design system. */
  none: "0",
  default: "0",
  /**
   * Opt-in only. Do not apply sitewide.
   * Reserved for rare interactive controls if a later phase explicitly approves use.
   */
  optIn: {
    sm: "2px",
    md: "4px",
  },
} as const;

export const DEFAULT_RADIUS = radius.none;
