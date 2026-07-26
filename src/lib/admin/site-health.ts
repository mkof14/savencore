import { LOCALES } from "@/config/locales";
import { SITE_URL } from "@/config/site";
import { PUBLISHED_ROUTES } from "@/navigation/published-routes";

export type SiteHealthSnapshot = {
  statusLabel: "Architecture" | "In Development";
  packageVersion: string;
  siteUrl: string;
  localeCount: number;
  locales: readonly string[];
  publishedRouteCount: number;
  publishedRoutes: readonly string[];
  nodeEnv: string;
  vercelEnv: string | null;
  commitSha: string | null;
  generatedAt: string;
  notes: readonly string[];
};

/** Honest technical snapshot — no fabricated traffic or ROI. */
export function getSiteHealthSnapshot(): SiteHealthSnapshot {
  return {
    statusLabel: "In Development",
    packageVersion: process.env.npm_package_version ?? "0.1.0",
    siteUrl: SITE_URL,
    localeCount: LOCALES.length,
    locales: LOCALES,
    publishedRouteCount: PUBLISHED_ROUTES.length,
    publishedRoutes: PUBLISHED_ROUTES,
    nodeEnv: process.env.NODE_ENV ?? "unknown",
    vercelEnv: process.env.VERCEL_ENV ?? null,
    commitSha:
      process.env.VERCEL_GIT_COMMIT_SHA ??
      process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ??
      null,
    generatedAt: new Date().toISOString(),
    notes: [
      "Traffic, ROI, and engagement metrics are not available — analytics vendor is pending owner decision.",
      "Admin media uploads use local storage in development; durable object storage is a later phase.",
      "Email templates are composed for preview; SMTP delivery is not configured in this slice.",
    ],
  };
}
