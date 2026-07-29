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
  // Allow Google OAuth popup/redirect handoff while keeping opener isolation.
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
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
      // Brand assets + YouTube thumbnails for Media library embeds (D-0185).
      "img-src 'self' data: blob: https://i.ytimg.com https://i.vimeocdn.com",
      "font-src 'self' data:",
      "style-src 'self' 'unsafe-inline'",
      // Next.js runtime + Auth.js; tighten with nonces in a later hardening pass.
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "connect-src 'self' https://accounts.google.com https://oauth2.googleapis.com",
      // Admin + public Media YouTube/Vimeo previews (D-0184 / D-0185).
      "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://player.vimeo.com",
      "media-src 'self' blob:",
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
  // Production-only: force HTTPS subresource upgrades when mixed content appears.
  const csp = securityHeaders.find((h) => h.key === "Content-Security-Policy");
  if (csp) {
    csp.value = `${csp.value}; upgrade-insecure-requests`;
  }
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
    // Align with BioMath ~40rem panels + common hub mastheads (D-0240).
    deviceSizes: [640, 750, 828, 1080, 1200, 1280, 1920],
    imageSizes: [64, 96, 128, 256, 384, 448, 640],
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
      // Immutable-ish static marketing assets (D-0240). Fingerprinted _next/static
      // already long-cached by Next; these paths are content-addressed by deploy.
      {
        source: "/domain/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/hub/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/home/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/brand/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/icons/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
