import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { ServiceTreatment } from "@/types/service-detail";

type MedicalTreatmentsProps = {
  title?: string;
  subtitle?: string;
  treatments: ServiceTreatment[];
};

export function MedicalTreatments({
  title = "Treatments we facilitate",
  subtitle,
  treatments,
}: MedicalTreatmentsProps) {
  if (!treatments.length) return null;

  return (
    <section className="bg-teal-50 py-12 tablet:py-16 desktop-xl:py-0 desktop-xl:pb-[109px]">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-1 gap-8 desktop:grid-cols-[minmax(0,711px)_minmax(0,1005px)] desktop:gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="h-px w-[30px] bg-teal-600" />
                <span className="text-[15px] leading-[1.39] font-medium tracking-[1px] text-teal-600">
                  Specialties
                </span>
              </div>
              <h2 className="text-[28px] font-semibold leading-[1.23] text-black tablet:text-[32px]">
                {title}
              </h2>
            </div>
            {subtitle ? (
              <div className="border-l-[3px] border-teal-600 pl-5">
                <p className="text-[18px] font-medium leading-[1.5] text-teal-600 tablet:text-[22px]">
                  {subtitle}
                </p>
              </div>
            ) : null}
          </div>

          <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2 desktop:grid-cols-4 desktop-xl:gap-6">
            {treatments.map((treatment) => (
              <article
                key={treatment.title}
                className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3"
              >
                <div className="relative size-[72px] shrink-0 overflow-hidden rounded-xl tablet:size-[88px] desktop-xl:size-[100px]">
                  <Image
                    src={treatment.image}
                    alt=""
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </div>
                <h3 className="min-w-0 text-[16px] leading-[1.5] font-medium text-black tablet:text-[20px]">
                  {treatment.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
