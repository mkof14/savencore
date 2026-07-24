import type { ImplementationStatusItem } from "@/components/engineering/engineering-types";

type ImplementationStatusProps = {
  heading?: string;
  items: readonly ImplementationStatusItem[];
};

export function ImplementationStatus({
  heading = "Implementation Status",
  items,
}: ImplementationStatusProps) {
  return (
    <section className="eng-block" aria-labelledby="eng-status-heading">
      <h2 id="eng-status-heading" className="eng-block__heading">
        {heading}
      </h2>
      <table className="eng-table eng-table--status">
        <caption className="visually-hidden">{heading}</caption>
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Status</th>
            <th scope="col">Note</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.label}</th>
              <td>{item.status}</td>
              <td>{item.note ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
