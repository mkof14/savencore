import type { FutureExpansionItem } from "@/components/engineering/engineering-types";

type FutureExpansionBlockProps = {
  items: readonly FutureExpansionItem[];
  heading?: string;
  introduction?: string;
};

export function FutureExpansionBlock({
  items,
  heading = "Future Expansion",
  introduction,
}: FutureExpansionBlockProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="eng-block" aria-labelledby="eng-future-heading">
      <h2 id="eng-future-heading" className="eng-block__heading">
        {heading}
      </h2>
      {introduction ? (
        <p className="eng-block__body">{introduction}</p>
      ) : null}
      <ul className="eng-future">
        {items.map((item) => (
          <li key={item.id} className="eng-future__item">
            <h3 className="eng-future__label">{item.label}</h3>
            <p className="eng-future__note">{item.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
