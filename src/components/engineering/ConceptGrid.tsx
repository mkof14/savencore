import Link from "next/link";

import type { Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

export type ConceptRole =
  | "foundation"
  | "system"
  | "control"
  | "interface"
  | "endpoint";

export type ConceptGridItem = {
  id: string;
  title: string;
  /** One-sentence responsibility */
  responsibility: string;
  /** Relationship or role in the architecture */
  relationship: string;
  href: string;
  role?: ConceptRole;
  classification?: string;
};

type ConceptGridProps = {
  locale: Locale;
  heading: string;
  items: readonly ConceptGridItem[];
  identity?: "blueprint" | "architecture" | "usage";
  className?: string;
};

/**
 * Concept cards that participate in a larger architecture grid.
 * Distinct visual treatment by role (foundation / system / control / …).
 */
export function ConceptGrid({
  locale,
  heading,
  items,
  identity = "architecture",
  className,
}: ConceptGridProps) {
  const headingId = `concept-grid-${heading.toLowerCase().replace(/\s+/g, "-")}`;

  if (items.length === 0) {
    return null;
  }

  return (
    <section
      className={[
        "concept-grid",
        `concept-grid--${identity}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-labelledby={headingId}
    >
      <div className="concept-grid__header">
        <p className="concept-grid__kicker" aria-hidden="true">
          Concept architecture
        </p>
        <h2 id={headingId} className="concept-grid__heading">
          {heading}
        </h2>
      </div>
      <ul className="concept-grid__list">
        {items.map((item, index) => {
          const role = item.role ?? "system";
          const classification =
            item.classification ?? String(index + 1).padStart(2, "0");
          return (
            <li
              key={item.id}
              className={`concept-grid__item concept-grid__item--${role}`}
            >
              <article className="concept-card">
                <div className="concept-card__meta-row">
                  <p className="concept-card__class">{classification}</p>
                  <p className="concept-card__role">{role}</p>
                </div>
                <h3 className="concept-card__title">{item.title}</h3>
                <p className="concept-card__responsibility">
                  {item.responsibility}
                </p>
                <p className="concept-card__relationship">
                  <span className="concept-card__relationship-label">Role</span>
                  {item.relationship}
                </p>
                <div className="concept-card__rule" aria-hidden="true" />
                <Link
                  href={localizePath(locale, item.href)}
                  className="concept-card__action"
                >
                  Open route <span aria-hidden="true">→</span>
                </Link>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
