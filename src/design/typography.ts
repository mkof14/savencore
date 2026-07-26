/**
 * Typography scale — Apple-clean Inter + sans titles (D-0169).
 * Display role is the large-title scale (sans), not a serif face.
 */

export const fontFamily = {
  sans: 'var(--font-sans-face), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  display:
    'var(--font-sans-face), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
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
 * Fluid-friendly roles; CSS variables in globals.css are the runtime source of truth.
 * Weights prefer 400 / 500–600 — avoid ultra-light body.
 */
export const typography: Record<TypeRole, TypeStyle> = {
  display: {
    fontSize: "clamp(2.75rem, 2rem + 3vw, 4.5rem)",
    lineHeight: "1.08",
    fontWeight: 600,
    letterSpacing: "-0.025em",
  },
  h1: {
    fontSize: "clamp(2.25rem, 1.7rem + 2vw, 3.25rem)",
    lineHeight: "1.12",
    fontWeight: 600,
    letterSpacing: "-0.022em",
  },
  h2: {
    fontSize: "clamp(1.75rem, 1.4rem + 1.2vw, 2.25rem)",
    lineHeight: "1.2",
    fontWeight: 600,
    letterSpacing: "-0.018em",
  },
  h3: {
    fontSize: "clamp(1.375rem, 1.2rem + 0.7vw, 1.625rem)",
    lineHeight: "1.25",
    fontWeight: 600,
    letterSpacing: "-0.015em",
  },
  h4: {
    fontSize: "1.25rem",
    lineHeight: "1.3",
    fontWeight: 600,
    letterSpacing: "-0.012em",
  },
  bodyLarge: {
    fontSize: "1.125rem",
    lineHeight: "1.55",
    fontWeight: 400,
    letterSpacing: "0",
  },
  body: {
    fontSize: "1.125rem",
    lineHeight: "1.52",
    fontWeight: 400,
    letterSpacing: "0",
  },
  small: {
    fontSize: "0.875rem",
    lineHeight: "1.47",
    fontWeight: 400,
    letterSpacing: "0",
  },
  caption: {
    fontSize: "0.75rem",
    lineHeight: "1.4",
    fontWeight: 500,
    letterSpacing: "0.01em",
  },
} as const;
