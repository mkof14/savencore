import type { Locale } from "@/config/locales";
import { physicalWorldHomeAr } from "@/content/home/physical-world/locales/ar";
import { physicalWorldHomeDe } from "@/content/home/physical-world/locales/de";
import { physicalWorldHomeEn } from "@/content/home/physical-world/locales/en";
import { physicalWorldHomeEs } from "@/content/home/physical-world/locales/es";
import { physicalWorldHomeFr } from "@/content/home/physical-world/locales/fr";
import { physicalWorldHomeHe } from "@/content/home/physical-world/locales/he";
import { physicalWorldHomeJa } from "@/content/home/physical-world/locales/ja";
import { physicalWorldHomeRu } from "@/content/home/physical-world/locales/ru";
import { physicalWorldHomeUk } from "@/content/home/physical-world/locales/uk";
import { physicalWorldHomeZhCn } from "@/content/home/physical-world/locales/zh-cn";
import { HOME_LOCALE_EXTRAS } from "@/content/home/physical-world/locale-extras";
import type { PhysicalWorldHomeContent } from "@/content/home/physical-world/types";
import { resolveContentLocale } from "@/i18n/types";

const PHYSICAL_WORLD_BY_LOCALE = {
  en: physicalWorldHomeEn,
  es: physicalWorldHomeEs,
  de: physicalWorldHomeDe,
  fr: physicalWorldHomeFr,
  ja: physicalWorldHomeJa,
  "zh-cn": physicalWorldHomeZhCn,
  ar: physicalWorldHomeAr,
  he: physicalWorldHomeHe,
  ru: physicalWorldHomeRu,
  uk: physicalWorldHomeUk,
} as const;

export function getPhysicalWorldHomeContent(
  locale: Locale,
): PhysicalWorldHomeContent {
  const resolved = resolveContentLocale(locale);
  const local = PHYSICAL_WORLD_BY_LOCALE[resolved];
  if (resolved === "en") {
    return local;
  }
  const enClarity = physicalWorldHomeEn.clarity;
  const localClarity = local.clarity;
  const merged: PhysicalWorldHomeContent = {
    ...physicalWorldHomeEn,
    ...local,
  };
  if (physicalWorldHomeEn.heroCtas && !local.heroCtas) {
    merged.heroCtas = physicalWorldHomeEn.heroCtas;
  }
  if (physicalWorldHomeEn.conceptLabel && !local.conceptLabel) {
    merged.conceptLabel = physicalWorldHomeEn.conceptLabel;
  }
  if (enClarity && localClarity) {
    merged.clarity = {
      ...enClarity,
      ...localClarity,
      ...(localClarity.purpose || enClarity.purpose
        ? { purpose: localClarity.purpose ?? enClarity.purpose }
        : {}),
      ...(localClarity.layers || enClarity.layers
        ? { layers: localClarity.layers ?? enClarity.layers }
        : {}),
      ...(localClarity.hardware || enClarity.hardware
        ? { hardware: localClarity.hardware ?? enClarity.hardware }
        : {}),
      ...(localClarity.path || enClarity.path
        ? { path: localClarity.path ?? enClarity.path }
        : {}),
      audience: {
        ...enClarity.audience,
        ...localClarity.audience,
        paths: localClarity.audience.paths.some((path) => path.id === "partners")
          ? localClarity.audience.paths
          : [
              ...localClarity.audience.paths,
              ...enClarity.audience.paths.filter((path) => path.id === "partners"),
            ],
      },
    };
  } else if (enClarity) {
    merged.clarity = enClarity;
  }

  const extras = HOME_LOCALE_EXTRAS[resolved];
  merged.cue = extras.cue;
  merged.heroCtas = extras.heroCtas;
  merged.conceptLabel = extras.conceptLabel;
  merged.living = {
    ...merged.living,
    scenes: merged.living.scenes.map((scene) =>
      scene.id === "children-family"
        ? { ...scene, line: extras.childrenFamilyLine }
        : scene,
    ),
  };
  if (merged.clarity) {
    const existingPaths = merged.clarity.audience.paths.filter(
      (path) => path.id !== "partners",
    );
    merged.clarity = {
      ...merged.clarity,
      purpose: extras.purpose,
      layers: extras.layers,
      hardware: extras.hardware,
      path: extras.path,
      audience: {
        ...merged.clarity.audience,
        paths: [...existingPaths, extras.partnersPath],
      },
    };
  }
  return merged;
}
