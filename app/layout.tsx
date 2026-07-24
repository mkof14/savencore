import type { ReactNode } from "react";

import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

/**
 * Root layout passes through to the locale layout, which owns <html> and <body>
 * so lang/dir can be set from the canonical locale configuration.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return children;
}
