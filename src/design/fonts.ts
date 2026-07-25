import {
  Heebo,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  IBM_Plex_Sans_Arabic,
  Source_Serif_4,
} from "next/font/google";

/**
 * Experience typography — distinctive display + engineering sans.
 * Authorized by D-0128 (SAVEN Experience Redesign).
 */
export const fontDisplay = Source_Serif_4({
  subsets: ["latin", "latin-ext", "cyrillic"],
  style: ["normal", "italic"],
  variable: "--font-display-face",
  display: "swap",
});

export const fontSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-face",
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
  fontSans.variable,
  fontSansArabic.variable,
  fontSansHebrew.variable,
  fontMono.variable,
].join(" ");
