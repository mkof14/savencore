/**
 * Motion philosophy — presence without spectacle.
 * Short transitions only. No bounce. No dramatic animation.
 */

export const motionDuration = {
  instant: "0ms",
  fast: "120ms",
  base: "180ms",
  slow: "240ms",
} as const;

export type MotionDuration = keyof typeof motionDuration;

/** Standard easing — decelerate into place; never spring/bounce. */
export const motionEasing = {
  standard: "cubic-bezier(0.2, 0, 0, 1)",
  emphasis: "cubic-bezier(0.16, 1, 0.3, 1)",
  linear: "linear",
} as const;

export type MotionEasing = keyof typeof motionEasing;

export const motion = {
  duration: motionDuration,
  easing: motionEasing,
  /**
   * Preferred default transition for interactive chrome in later phases.
   * Do not use for page-load theatrics or continuous background motion.
   */
  transition: {
    property: "color, background-color, border-color, opacity, transform",
    duration: motionDuration.base,
    easing: motionEasing.standard,
  },
  /** Reduced-motion contract for future components. */
  respectReducedMotion: true,
} as const;
