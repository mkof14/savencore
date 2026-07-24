import type { KnowledgeNavItem } from "@/content/knowledge/types";

type SectionNavigatorProps = {
  items: readonly KnowledgeNavItem[];
  label?: string;
  /** When true, href values are treated as in-page anchors (#id). */
  anchors?: boolean;
};

/**
 * Reusable section / domain navigator.
 * Not sticky. No scroll spy.
 */
export function SectionNavigator({
  items,
  label = "Sections",
  anchors = false,
}: SectionNavigatorProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav className="knowledge-section-nav" aria-label={label}>
      <p className="knowledge-section-nav__label">{label}</p>
      <ol className="knowledge-section-nav__list">
        {items.map((item) => {
          const href = anchors
            ? item.href.startsWith("#")
              ? item.href
              : `#${item.id}`
            : item.href;

          return (
            <li key={item.id}>
              <a href={href} className="knowledge-section-nav__link">
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
