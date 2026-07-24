import type { FutureExpansionItem } from "@/content/knowledge/types";

type FutureExpansionProps = {
  items: readonly FutureExpansionItem[];
  heading?: string;
};

/** Explicit placeholder list for deferred knowledge topics. */
export function FutureExpansion({
  items,
  heading = "Future expansion",
}: FutureExpansionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section
      className="knowledge-future"
      aria-labelledby="knowledge-future-heading"
    >
      <h2 id="knowledge-future-heading" className="knowledge-block__heading">
        {heading}
      </h2>
      <ul className="knowledge-future__list">
        {items.map((item) => (
          <li key={item.id} className="knowledge-future__item">
            <h3 className="knowledge-future__label">{item.label}</h3>
            <p className="knowledge-future__note">{item.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
