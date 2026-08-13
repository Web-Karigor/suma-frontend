import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { airlines } from "@/lib/home-data";

export function TopAirlines() {
  return (
    <section className="bg-white py-16 tablet:py-20">
      <Container>
        <SectionHeading
          title="Top Airlines"
          subtitle="Fly with trusted carriers we partner with for Hajj, Umrah, and worldwide holidays."
          className="mb-10"
        />

        <ul className="grid grid-cols-3 gap-3 tablet:grid-cols-6 desktop:grid-cols-8">
          {airlines.map((airline) => (
            <li
              key={airline.code}
              className="flex aspect-square flex-col items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 px-2 text-center"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-white text-xs font-semibold text-primary shadow-sm">
                {airline.code}
              </span>
              <span className="mt-2 line-clamp-2 text-[11px] font-medium text-neutral-700">
                {airline.name}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
