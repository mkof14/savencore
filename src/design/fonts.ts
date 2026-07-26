import {
  Heebo,
  IBM_Plex_Mono,
  IBM_Plex_Sans_Arabic,
  Inter,
} from "next/font/google";

/**
 * Typography faces (D-0169) — visible Apple-clean Inter + sans titles.
 * Inter is the Latin/Cyrillic UI face so the change is unmistakable vs prior
 * Source Serif headlines / system-only stacks. Arabic/Hebrew keep dedicated
 * readable faces; mono remains for engineering labels.
 */
export const fontSans = Inter({
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
  fontSans.variable,
  fontSansArabic.variable,
  fontSansHebrew.variable,
  fontMono.variable,
].join(" ");
