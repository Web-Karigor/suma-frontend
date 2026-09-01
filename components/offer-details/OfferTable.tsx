import { Container } from "@/components/ui/Container";
import type { OfferTable } from "@/lib/offer-details-data";

export function OfferTables({ tables }: { tables?: OfferTable[] | null }) {
  const visible = tables?.filter((table) => table.headers?.length && table.rows?.length);
  if (!visible?.length) return null;

  return (
    <section className="bg-white pt-8 tablet:pt-10">
      <Container>
        <div className="space-y-8">
          {visible.map((table, index) => (
            <div key={table.title ?? table.headers.join("-")}>
              {table.title ? (
                <h2 className="mb-3 text-[20px] font-bold text-neutral-950 tablet:text-[22px]">{table.title}</h2>
              ) : null}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse border border-[#d9d9d9] text-left text-[16px] tablet:text-[18px]">
                  <thead>
                    <tr className="bg-[#f3f3f3]">
                      {table.headers.map((header) => (
                        <th
                          key={header}
                          className="border border-[#d9d9d9] px-5 py-3.5 font-semibold text-neutral-950"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row, rowIndex) => (
                      <tr key={`${index}-${rowIndex}`}>
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className={`border border-[#d9d9d9] px-5 py-3.5 align-top text-neutral-700 ${cellIndex === 2 && !table.title ? "font-bold" : ""}`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
