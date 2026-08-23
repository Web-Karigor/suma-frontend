import { Container } from "@/components/ui/Container";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type MedicalProcessProps = {
  steps: ProcessStep[];
};

export function MedicalProcess({ steps }: MedicalProcessProps) {
  return (
    <section className="w-full overflow-hidden bg-[#0d3b3c] py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">
      <Container>
        <div className="mx-auto w-full">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12 xl:gap-16">
            
            {/* ================= LEFT CONTENT ================= */}
            <div className="flex flex-col items-start lg:pt-1">
              {/* Small Label */}
              <div className="mb-3 flex items-center gap-2">
                <span className="h-[2px] w-5 rounded-full bg-[#d7e1df]" />

                <span className="text-[13px] font-medium text-[#c7d2d0] sm:text-[14px]">
                  How your journey is planned
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-[420px] text-[30px] font-bold leading-[1.2] text-[#f3f5f4] sm:text-[34px] md:text-[38px] lg:text-[32px] xl:text-[36px]">
                Your treatment{" "}
                <span className="text-[#f4c44e]">journey</span>
              </h2>

              {/* Description */}
              <p className="mt-4 max-w-[450px] text-[14px] font-medium leading-[1.55] text-[#c5d0ce] sm:text-[15px] md:text-[16px]">
                Six coordinated stages, from your first remote consultation to
                aftercare once you return home — each one managed by your
                dedicated coordinator.
              </p>

              {/* Button */}
              <a
                href="#booking"
                className="group mt-6 inline-flex h-[42px] items-center gap-3 rounded-full bg-[#f5bd38] px-4 text-[12px] font-semibold text-[#1f2929] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#ffca4f] sm:h-[44px] sm:px-5 sm:text-[13px]"
              >
                <span>Book a Meeting</span>

                <span className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#123c3d] text-[11px] text-white transition-transform duration-300 group-hover:translate-x-[2px]">
                  ↗
                </span>
              </a>
            </div>

            {/* ================= PROCESS CARDS ================= */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {steps.slice(0, 6).map((step, index) => (
                <div
                  key={`${step.number}-${index}`}
                  className="min-h-[145px] rounded-[18px] bg-[#204e4f] px-5 py-5 sm:min-h-[148px] sm:px-5 sm:py-5 md:px-6 md:py-5 lg:min-h-[145px]"
                >
                  {/* Number */}
                  <span className="block text-[24px] font-bold leading-none text-[#f2c24d] sm:text-[25px]">
                    {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="mt-4 text-[14px] font-semibold leading-[1.35] text-[#f1f4f3] sm:text-[15px]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-[12px] leading-[1.55] text-[#b7c4c2] sm:text-[13px]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}