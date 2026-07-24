/**
 * Typography scale — structural sizes only.
 * Custom brand fonts are deferred; system fonts are required for Phase 1B.
 */

export const fontFamily = {
  sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
} as const;

export type TypeRole =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "bodyLarge"
  | "body"
  | "small"
  | "caption";

export type TypeStyle = {
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
  letterSpacing: string;
};

/**
 * Scale is large and hierarchical for engineering clarity.
 * Weights stay restrained (no decorative extremes).
 */
export const typography: Record<TypeRole, TypeStyle> = {
  display: {
    fontSize: "3.5rem",
    lineHeight: "1.1",
    fontWeight: 600,
    letterSpacing: "-0.02em",
  },
  h1: {
    fontSize: "2.5rem",
    lineHeight: "1.15",
    fontWeight: 600,
    letterSpacing: "-0.015em",
  },
  h2: {
    fontSize: "2rem",
    lineHeight: "1.2",
    fontWeight: 600,
    letterSpacing: "-0.01em",
  },
  h3: {
    fontSize: "1.5rem",
    lineHeight: "1.25",
    fontWeight: 600,
    letterSpacing: "-0.005em",
  },
  h4: {
    fontSize: "1.25rem",
    lineHeight: "1.3",
    fontWeight: 600,
    letterSpacing: "0",
  },
  bodyLarge: {
    fontSize: "1.125rem",
    lineHeight: "1.6",
    fontWeight: 400,
    letterSpacing: "0",
  },
  body: {
    fontSize: "1rem",
    lineHeight: "1.6",
    fontWeight: 400,
    letterSpacing: "0",
  },
  small: {
    fontSize: "0.875rem",
    lineHeight: "1.5",
    fontWeight: 400,
    letterSpacing: "0",
  },
  caption: {
    fontSize: "0.75rem",
    lineHeight: "1.4",
    fontWeight: 400,
    letterSpacing: "0.01em",
  },
} as const;
