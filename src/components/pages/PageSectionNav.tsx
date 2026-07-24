import type { PageSectionNavItem } from "@/components/pages/page-types";

type PageSectionNavProps = {
  items: readonly PageSectionNavItem[];
  label?: string;
};

/**
 * Optional on-page section navigation.
 * Anchor links only — no sticky positioning, no scroll spy.
 */
export function PageSectionNav({
  items,
  label = "On this page",
}: PageSectionNavProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav className="page-section-nav" aria-label={label}>
      <div className="page-shell__inner">
        <p className="page-section-nav__label">{label}</p>
        <ol className="page-section-nav__list">
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="page-section-nav__link">
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
