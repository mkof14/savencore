import Link from "next/link";

import type { Locale } from "@/config/locales";
import { getEntityById } from "@/content/knowledge/entity-registry";
import { getEntityStatusLabel } from "@/content/knowledge/status-labels";
import { localizePath } from "@/navigation/locale-path";
import { systemsNavChildren } from "@/navigation/site-navigation";

const SYSTEM_ORDER = [
  "knowledge-engine",
  "ai-decision-support",
  "safety-layer",
  "communication-layer",
  "clinical-interfaces",
  "robotics-layer",
  "drone-systems",
] as const;

type SystemsOverviewMapProps = {
  locale: Locale;
  heading?: string;
};

/**
 * Visual Systems overview grid — identity cards for published systems.
 */
export function SystemsOverviewMap({
  locale,
  heading = "System map",
}: SystemsOverviewMapProps) {
  const headingId = "systems-overview-map-heading";

  return (
    <section
      id="systems-overview-map"
      className="eng-block systems-overview-map"
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className="eng-block__heading">
        {heading}
      </h2>
      <ol className="systems-overview-map__grid">
        {SYSTEM_ORDER.map((entityId, index) => {
          const entity = getEntityById(entityId);
          const href = systemsNavChildren.find(
            (item) => item.id === `systems-${entityId}`,
          )?.href;
          if (!entity || !href) {
            return null;
          }

          return (
            <li key={entity.id} className="systems-overview-map__item">
              <article className="systems-overview-map__card">
                <p className="systems-overview-map__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="systems-overview-map__title">
                  <Link
                    href={localizePath(locale, href)}
                    className="systems-overview-map__link"
                  >
                    {entity.title}
                  </Link>
                </h3>
                <p className="systems-overview-map__status">
                  {getEntityStatusLabel(entity.status)}
                </p>
                <p className="systems-overview-map__summary">{entity.summary}</p>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
