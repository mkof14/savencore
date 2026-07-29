/**
 * Investors visual scenes — thematic atmosphere, no returns claims (D-0173 / D-0246).
 * Localized via flagship deepLocalize string dictionary.
 * Do not use “Platform” / ecosystem buzz vocabulary in scene copy.
 */

import type { HubScene } from "@/content/hub/types";

export const investorsScenesEn: readonly HubScene[] = [
  {
    id: "human-benefit",
    image: "/domain/company/scene-human-benefit.webp",
    alt: "Quiet care setting suggesting human benefit from careful physical assistance",
    title: "Human benefit first",
    caption:
      "The enduring reason for the work is care — easing burdens for people where life is demanding, without inventing clinical outcomes or deployments.",
  },
  {
    id: "systems-craft",
    image: "/domain/company/scene-platform-craft.webp",
    alt: "Precision robotics engineering atmosphere for long-horizon systems craft",
    title: "Systems craft",
    caption:
      "AI, robotics, and physical systems are engineered as one coherent direction — architecture and evidence before spectacle, under approved development statuses.",
  },
  {
    id: "long-horizon",
    image: "/domain/company/scene-long-horizon.webp",
    alt: "Layered architectural horizon suggesting patient long-term value creation",
    title: "Long-horizon value",
    caption:
      "Mission-aligned capital can support durable systems for lasting human needs. That is a category thesis — not a forecast of returns.",
  },
];
