import Image from "next/image";
import { Container } from "@/components/ui/Container";

type Accommodation = {
  title: string;
  description: string;
  image: string;
};

type MedicalAccommodationProps = {
  accommodations: Accommodation[];
};

export function MedicalAccommodation({
  accommodations,
}: MedicalAccommodationProps) {
  return (
    <section className="w-full bg-[#f2f5f5] py-10 sm:py-12 md:py-14 lg:py-16">
      <Container>
        {/* Full Container Width */}
        <div className="w-full">
          {/* ================= HEADER ================= */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.3fr] lg:items-start lg:gap-16">
            {/* LEFT SIDE */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-px w-4 bg-[#176d73]" />

                <span className="text-[11px] font-medium text-[#176d73] sm:text-[12px]">
                  Where you'll stay
                </span>
              </div>

              <h2 className="text-[24px] font-bold leading-[1.2] text-[#202d33] sm:text-[28px] md:text-[30px] lg:text-[32px]">
                Accommodation
              </h2>
            </div>

            {/* RIGHT SIDE */}
            <div className="border-l-[3px] border-[#1d7a7e] pl-4 sm:pl-5">
              <p className="max-w-[780px] text-[15px] font-medium leading-[1.35] text-[#176d73] sm:text-[16px] md:text-[17px]">
                Accommodation needs vary depending on your treatment. We
                arrange the right option for you and anyone traveling with you.
              </p>
            </div>
          </div>

          {/* ================= ACCOMMODATION CARDS ================= */}
          <div className="mt-8 grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {accommodations.slice(0, 3).map((accommodation, index) => (
              <article
                key={`${accommodation.title}-${index}`}
                className="flex min-h-[140px] w-full overflow-hidden rounded-[14px] border border-[#d7dfe1] bg-white/55 p-[7px] shadow-[0_3px_12px_rgba(0,0,0,0.025)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-md sm:min-h-[150px]"
              >
                {/* ================= IMAGE ================= */}
                <div className="relative h-auto w-[92px] shrink-0 overflow-hidden rounded-[8px] sm:w-[105px] lg:w-[96px] xl:w-[105px]">
                  <Image
                    src={accommodation.image}
                    alt={accommodation.title}
                    fill
                    sizes="(max-width: 640px) 92px, 105px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* ================= CONTENT ================= */}
                <div className="flex min-w-0 flex-1 flex-col px-3 py-2 sm:px-4 sm:py-3">
                  {/* Top Decorative Line */}
                  <span className="mb-2 block h-[3px] w-12 rounded-full bg-[#176d73]" />

                  {/* Title */}
                  <h3 className="text-[12px] font-bold leading-[1.35] text-[#273137] sm:text-[13px] lg:text-[12px] xl:text-[13px]">
                    {accommodation.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-[9px] leading-[1.45] text-[#4c565a] sm:text-[10px] lg:text-[9px] xl:text-[10px]">
                    {accommodation.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}