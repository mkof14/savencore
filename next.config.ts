import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Match approved locale URL form: /en/, /ar/, etc.
  trailingSlash: true,
  // Keep Turbopack rooted at this package when parent lockfiles exist on the machine.
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
