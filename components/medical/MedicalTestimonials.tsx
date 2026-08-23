import Image from "next/image";
import { Container } from "@/components/ui/Container";

type Testimonial = {
  name: string;
  country: string;
  image: string;
  treatment: string;
  rating: number;
  feedback: string;
};

type MedicalTestimonialsProps = {
  testimonials?: Testimonial[];
};

export function MedicalTestimonials({
  testimonials = [],
}: MedicalTestimonialsProps) {
  return (
    <section className="w-full bg-[#edf4f6] py-10 sm:py-12 md:py-14 lg:py-16 xl:py-[72px]">
      <Container>
        <div className="w-full">
          {/* ================= HEADER ================= */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
            {/* LEFT SIDE */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-px w-4 bg-[#176d73]" />

                <span className="text-[11px] font-medium text-[#176d73] sm:text-[12px]">
                  Destinations
                </span>
              </div>

              <h2 className="text-[25px] font-bold leading-[1.2] text-[#202d33] sm:text-[28px] md:text-[30px] lg:text-[32px]">
                Countries{" "}
                <span className="text-[#176d73]">
                  available
                </span>
              </h2>
            </div>

            {/* RIGHT SIDE */}
            <div className="border-l-[3px] border-[#1d7a7e] pl-4 sm:pl-5">
              <p className="max-w-[760px] text-[15px] font-medium leading-[1.35] text-[#176d73] sm:text-[16px] md:text-[17px] lg:text-[18px]">
                We currently coordinate treatment access in the following
                countries. Availability may vary by treatment type.
              </p>
            </div>
          </div>

          {/* ================= COUNTRY CARDS ================= */}
          {testimonials.length > 0 && (
            <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4 xl:gap-[16px]">
              {testimonials.slice(0, 5).map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="flex min-h-[235px] w-full flex-col items-center rounded-[24px] bg-white/55 px-3 pb-4 pt-4 shadow-[0_3px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:min-h-[245px] md:min-h-[250px] lg:min-h-[242px] xl:min-h-[242px]"
                >
                  {/* COUNTRY IMAGE */}
                  <div className="relative h-[118px] w-[118px] shrink-0 overflow-hidden rounded-full sm:h-[125px] sm:w-[125px] md:h-[130px] md:w-[130px] lg:h-[128px] lg:w-[128px]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="(max-width: 640px) 118px, 130px"
                      className="object-cover"
                    />
                  </div>

                  {/* COUNTRY NAME */}
                  <h3 className="mt-4 text-center text-[16px] font-bold leading-[1.25] text-[#283238] sm:text-[17px] lg:text-[16px]">
                    {testimonial.country || testimonial.name}
                  </h3>

                  {/* DIVIDER */}
                  <div className="my-3 h-px w-full bg-[#d9e1e3]" />

                  {/* KNOWN FOR */}
                  <p className="text-center text-[9px] leading-[1.5] text-[#3d474c] sm:text-[10px]">
                    <span className="font-bold text-[#303a3f]">
                      Known for:
                    </span>{" "}
                    {testimonial.treatment}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}