import Image from "next/image";
import { Container } from "@/components/ui/Container";

type Treatment = {
  icon: "heart" | "stethoscope";
  title: string;
  procedures: string[];
};

type MedicalTreatmentsProps = {
  treatments: Treatment[];
};

const treatmentImages = [
  "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1579154203451-e4b3f0b25b5f?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=200&q=80",
];

export function MedicalTreatments({
  treatments,
}: MedicalTreatmentsProps) {
  return (
    <section className="w-full bg-[#f2f5f5] py-10 sm:py-12 md:py-14 lg:py-16">
      <Container>
        <div className="w-full">
          {/* ================= HEADER ================= */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.3fr] lg:items-start lg:gap-16">
            {/* LEFT */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-px w-4 bg-[#176d73]" />

                <span className="text-[11px] font-medium text-[#176d73] sm:text-[12px]">
                  Specialties
                </span>
              </div>

              <h2 className="text-[24px] font-bold leading-[1.2] text-[#202d33] sm:text-[28px] md:text-[30px] lg:text-[32px]">
                Treatments we{" "}
                <span className="text-[#176d73]">
                  facilitate
                </span>
              </h2>
            </div>

            {/* RIGHT */}
            <div className="border-l-[3px] border-[#1d7a7e] pl-4 sm:pl-5">
              <p className="max-w-[760px] text-[15px] font-medium leading-[1.35] text-[#176d73] sm:text-[17px] md:text-[18px]">
                We connect patients with hospitals and specialists across a
                range of treatment areas. Availability depends on the hospital
                and destination selected.
              </p>
            </div>
          </div>

          {/* ================= TREATMENT CARDS ================= */}
          <div className="mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-3 lg:gap-y-3">
            {treatments.slice(0, 8).map((treatment, index) => (
              <div
                key={`${treatment.title}-${index}`}
                className="group flex h-[62px] w-full min-w-0 items-center gap-3 overflow-hidden rounded-[12px] border border-[#d7dfe1] bg-white/70 p-[5px] shadow-[0_3px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-md"
              >
                {/* IMAGE */}
                <div className="relative h-[50px] w-[50px] shrink-0 overflow-hidden rounded-[8px]">
                  <Image
                    src={
                      treatmentImages[
                        index % treatmentImages.length
                      ]
                    }
                    alt={treatment.title}
                    fill
                    sizes="50px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* TITLE */}
                <h3 className="min-w-0 pr-2 text-[12px] font-medium leading-[1.3] text-[#2d3539] sm:text-[13px]">
                  {treatment.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}