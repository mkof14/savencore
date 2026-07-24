/**
 * Published entity leaf pages used by relation links.
 * Keep aligned with App Router pages and navigation children.
 */

export const ENTITY_PAGE_HREFS: Readonly<Record<string, string>> = {
  "artificial-intelligence": "/technology/artificial-intelligence/",
  "human-data": "/technology/human-data/",
  robotics: "/technology/robotics/",
  automation: "/technology/automation/",
  privacy: "/technology/privacy/",
  security: "/technology/security/",
  "data-infrastructure": "/technology/data-infrastructure/",
  interoperability: "/technology/interoperability/",
  "human-data-model": "/technology/human-data-model/",
  "ai-decision-support": "/systems/ai-decision-support/",
  "robotics-layer": "/systems/robotics-layer/",
  "drone-systems": "/systems/drone-systems/",
  "clinical-interfaces": "/systems/clinical-interfaces/",
  "knowledge-engine": "/systems/knowledge-engine/",
  "safety-layer": "/systems/safety-layer/",
  "communication-layer": "/systems/communication-layer/",
};

export function getEntityPageHref(
  entityId: string,
  fallbackHref: string,
): string {
  return ENTITY_PAGE_HREFS[entityId] ?? fallbackHref;
}
