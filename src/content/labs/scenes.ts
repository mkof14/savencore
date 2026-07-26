/**
 * Labs visual scenes — human-help atmosphere (D-0166).
 * Localized via flagship deepLocalize string dictionary.
 */

import type { HubScene } from "@/content/hub/types";

export const labsOverviewScenesEn: readonly HubScene[] = [
  {
    id: "mobility-assist",
    image: "/domain/labs/scene-mobility-assist.webp",
    alt: "Assistive robot supporting a person standing with a caregiver nearby",
    title: "Physical help beside people",
    caption:
      "Labs work toward machines that can steady, support, and assist in everyday places — with caregivers and family remaining in authority.",
  },
  {
    id: "home-assist",
    image: "/domain/labs/scene-home-assist.webp",
    alt: "Robot arm carefully handing a cup to a person at home",
    title: "Careful action at home",
    caption:
      "Manipulators and mobile platforms are engineered for calm, governable motion — reaching, handing, and supporting without hiding limits.",
  },
];

export const roboticsLabScenesEn: readonly HubScene[] = [
  {
    id: "clinical-assist",
    image: "/domain/labs/scene-clinical-assist.webp",
    alt: "Robotic arm assisting with a tray while a caregiver stays present",
    title: "Assistance with oversight",
    caption:
      "SAVEN Robotics Lab focuses on physical systems that can help with everyday care tasks while people stay clearly in command.",
  },
  {
    id: "home-reach",
    image: "/domain/labs/scene-home-assist.webp",
    alt: "Collaborative robot arm helping a person at home",
    title: "Reach, hold, support",
    caption:
      "Engineering workstreams cover platforms, control, and perception so assistance can be stable, visible, and pauseable.",
  },
];

export const futureLabScenesEn: readonly HubScene[] = [
  {
    id: "future-research",
    image: "/domain/labs/scene-future-research.webp",
    alt: "Researchers studying advanced robotic systems in a calm lab",
    title: "Exploring what comes next",
    caption:
      "Internal Future Lab studies advanced robotics and embodied AI so promising ideas can mature before they enter near-term engineering.",
  },
  {
    id: "future-human",
    image: "/domain/labs/scene-mobility-assist.webp",
    alt: "Assistive robotics concept supporting a person with human oversight",
    title: "Human life as the horizon",
    caption:
      "Concepts are judged by whether they could later ease care with dignity — not by invented deployments or product claims.",
  },
];
