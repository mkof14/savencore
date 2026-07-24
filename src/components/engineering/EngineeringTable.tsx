import type { EngineeringTable as EngineeringTableModel } from "@/components/engineering/engineering-types";

type EngineeringTableProps = {
  table: EngineeringTableModel;
};

export function EngineeringTable({ table }: EngineeringTableProps) {
  return (
    <div className="eng-table-wrap">
      <table className={`eng-table eng-table--${table.variant}`}>
        <caption className="eng-table__caption">{table.caption}</caption>
        <thead>
          <tr>
            {table.columns.map((column) => (
              <th key={column.id} scope="col">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.id}>
              {row.cells.map((cell, index) => {
                const column = table.columns[index];
                const key = column?.id ?? `${row.id}-${index}`;
                if (index === 0) {
                  return (
                    <th key={key} scope="row">
                      {cell}
                    </th>
                  );
                }
                return <td key={key}>{cell}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
