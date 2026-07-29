import type { ReactNode } from "react";
import Script from "next/script";

import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

/**
 * Root layout passes through to the locale layout, which owns <html> and <body>
 * so lang/dir can be set from the canonical locale configuration.
 *
 * Theme bootstrap lives here: next/script strategy="beforeInteractive" must be
 * in the root layout (Next.js App Router). Avoids React 19 client <script> warning.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Script
        id="savencore-theme-bootstrap"
        src="/theme-bootstrap.js"
        strategy="beforeInteractive"
      />
      {children}
    </>
  );
}
