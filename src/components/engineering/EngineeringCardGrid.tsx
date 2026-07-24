import Link from "next/link";

import type { Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

export type EngineeringCardRole =
  | "foundation"
  | "system"
  | "control"
  | "interface"
  | "endpoint";

export type EngineeringCardItem = {
  id: string;
  title: string;
  summary: string;
  href: string;
  meta?: string;
  role?: EngineeringCardRole;
  relationship?: string;
};

type EngineeringCardGridProps = {
  locale: Locale;
  heading: string;
  items: readonly EngineeringCardItem[];
  identity?: "blueprint" | "architecture" | "usage";
};

/**
 * Premium minimal engineering cards — replace plain link lists.
 */
export function EngineeringCardGrid({
  locale,
  heading,
  items,
  identity = "architecture",
}: EngineeringCardGridProps) {
  const headingId = `engineering-card-grid-${heading.toLowerCase().replace(/\s+/g, "-")}`;

  if (items.length === 0) {
    return null;
  }

  return (
    <section
      className={`engineering-card-grid engineering-card-grid--${identity}`}
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className="engineering-card-grid__heading">
        {heading}
      </h2>
      <ul className="engineering-card-grid__list">
        {items.map((item, index) => (
          <li
            key={item.id}
            className={[
              "engineering-card-grid__item",
              item.role ? `engineering-card-grid__item--${item.role}` : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <article
              className={[
                "engineering-card",
                item.role ? `engineering-card--${item.role}` : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="engineering-card__meta-row">
                <p className="engineering-card__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </p>
                {item.role ? (
                  <p className="engineering-card__role">{item.role}</p>
                ) : null}
              </div>
              <h3 className="engineering-card__title">{item.title}</h3>
              {item.meta ? (
                <p className="engineering-card__meta">{item.meta}</p>
              ) : null}
              <p className="engineering-card__summary">{item.summary}</p>
              {item.relationship ? (
                <p className="engineering-card__relationship">
                  {item.relationship}
                </p>
              ) : null}
              <div className="engineering-card__rule" aria-hidden="true" />
              <Link
                href={localizePath(locale, item.href)}
                className="engineering-card__action"
              >
                Open <span aria-hidden="true">→</span>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
