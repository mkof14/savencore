import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/**
 * Security headers (D-0162).
 * CSP is intentionally pragmatic for Next.js App Router + Auth.js Google OAuth.
 * HSTS is applied when Vercel marks the deployment as production.
 */
const securityHeaders: { key: string; value: string }[] = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "form-action 'self' https://accounts.google.com",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "style-src 'self' 'unsafe-inline'",
      // Next.js runtime + Auth.js; tighten with nonces in a later hardening pass.
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "connect-src 'self' https://accounts.google.com https://oauth2.googleapis.com",
      "worker-src 'self' blob:",
      "manifest-src 'self'",
    ].join("; "),
  },
];

if (process.env.VERCEL_ENV === "production") {
  securityHeaders.push({
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  });
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Match approved locale URL form: /en/, /ar/, etc.
  trailingSlash: true,
  // Keep Turbopack rooted at this package when parent lockfiles exist on the machine.
  turbopack: {
    root: projectRoot,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // Local assets under /public only — no remote CMS images in this phase.
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/sw.js",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
          { key: "Service-Worker-Allowed", value: "/" },
        ],
      },
    ];
  },
};

export default nextConfig;
