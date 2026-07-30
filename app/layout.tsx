import type { ReactNode } from "react";

import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

/**
 * Root layout passes through to the locale layout, which owns <html> and <body>
 * so lang/dir can be set from the canonical locale configuration.
 *
 * Theme FOUC bootstrap: ThemeBootstrap (useServerInsertedHTML) in locale layout
 * — D-0250. next/script beforeInteractive cannot run from this fragment root.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return children;
}
