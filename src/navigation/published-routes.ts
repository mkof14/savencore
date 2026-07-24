/**
 * Canonical list of published locale-relative routes.
 * Keep in sync with App Router page files under app/[locale].
 * Navigation and footer may only link destinations listed here.
 */

export const PUBLISHED_ROUTES = [
  "/",
  "/purpose/",
  "/foundation/",
  "/technology/",
  "/technology/human-data/",
  "/technology/human-data-model/",
  "/technology/data-infrastructure/",
  "/technology/interoperability/",
  "/technology/privacy/",
  "/technology/security/",
  "/technology/artificial-intelligence/",
  "/technology/automation/",
  "/technology/robotics/",
  "/systems/",
  "/systems/knowledge-engine/",
  "/systems/ai-decision-support/",
  "/systems/safety-layer/",
  "/systems/communication-layer/",
  "/systems/clinical-interfaces/",
  "/systems/robotics-layer/",
  "/systems/drone-systems/",
  "/applications/",
  "/research/",
] as const;

export type PublishedRoute = (typeof PUBLISHED_ROUTES)[number];

export function isPublishedRoute(href: string): boolean {
  return (PUBLISHED_ROUTES as readonly string[]).includes(href);
}
