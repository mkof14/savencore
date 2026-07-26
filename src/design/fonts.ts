import {
  Heebo,
  IBM_Plex_Mono,
  IBM_Plex_Sans_Arabic,
  Source_Serif_4,
} from "next/font/google";

/**
 * Typography faces (D-0168) — Apple-like clarity sitewide.
 * Body/UI uses the system SF-adjacent stack in CSS (`--font-sans`).
 * Source Serif loads only for large display titles; Arabic/Hebrew keep
 * dedicated readable faces; mono remains for engineering labels.
 */
export const fontDisplay = Source_Serif_4({
  subsets: ["latin", "latin-ext", "cyrillic"],
  style: ["normal", "italic"],
  variable: "--font-display-face",
  display: "swap",
});

export const fontSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-ar-face",
  display: "swap",
});

export const fontSansHebrew = Heebo({
  subsets: ["hebrew"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-he-face",
  display: "swap",
});

export const fontMono = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-face",
  display: "swap",
});

export const experienceFontVariables = [
  fontDisplay.variable,
  fontSansArabic.variable,
  fontSansHebrew.variable,
  fontMono.variable,
].join(" ");
