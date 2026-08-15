import type { BusinessSectionId } from "@/content/business/sections";

/**
 * Approved domain imagery for Business section leaves / hub cards (D-0289).
 * Uses existing public/domain assets only — no new photography.
 */
export const BUSINESS_SECTION_VISUALS: Record<
  BusinessSectionId,
  { image: string; accent: "gold" | "blue" | "slate" }
> = {
  "market-context": {
    image: "/domain/company/scene-long-horizon.webp",
    accent: "gold",
  },
  "human-data": {
    image: "/domain/technology/human-data-model.webp",
    accent: "blue",
  },
  "saven-physical-systems": {
    image: "/domain/technology/robotics.webp",
    accent: "slate",
  },
  "where-value-is-created": {
    image: "/domain/company/scene-platform-craft.webp",
    accent: "gold",
  },
  applications: {
    image: "/domain/applications/overview.webp",
    accent: "blue",
  },
  "why-timing-matters": {
    image: "/domain/systems/overview.webp",
    accent: "slate",
  },
  "what-we-know": {
    image: "/domain/company/foundation.webp",
    accent: "gold",
  },
};
