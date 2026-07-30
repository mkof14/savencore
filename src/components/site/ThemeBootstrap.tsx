"use client";

import { useServerInsertedHTML } from "next/navigation";

/**
 * Apply stored light/dark theme before paint (no FOUC).
 * Injected via useServerInsertedHTML into the document <head> outside the
 * React client tree — avoids both:
 * - React 19 “Encountered a script tag while rendering React component”
 * - next/script beforeInteractive “outside the main document” when root
 *   layout is a fragment and locale owns <html> (D-0244 → D-0250).
 */
const THEME_BOOTSTRAP_INLINE = `(function(){try{var t=localStorage.getItem("savencore-theme");if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t);}}catch(e){}})();`;

export function ThemeBootstrap() {
  useServerInsertedHTML(() => (
    <script
      id="savencore-theme-bootstrap"
      dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP_INLINE }}
    />
  ));

  return null;
}
