import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { ServiceProcessStep } from "@/types/service-detail";

export function MedicalProcess({
  title = "Your treatment journey",
  subtitle,
  steps,
}: {
  title?: string;
  subtitle?: string;
  steps: ServiceProcessStep[];
}) {
  if (!steps.length) return null;

  return (
    <section className="overflow-hidden bg-teal-950 py-12 tablet:py-16 desktop-xl:py-[60px]">
      <Container>
        <div className="grid grid-cols-1 gap-10 desktop:grid-cols-[minmax(0,711px)_minmax(0,1005px)] desktop:gap-6">
          <div className="flex flex-col items-start">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-px w-[30px] bg-teal-200" />
              <span className="text-[15px] leading-[1.39] font-medium tracking-[1px] text-teal-200">
                How your journey is planned
              </span>
            </div>
            <h2 className="text-[28px] font-semibold leading-[1.18] text-white tablet:text-[32px] desktop-xl:text-[40px]">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-4 text-[16px] leading-[1.5] font-medium text-teal-200 tablet:text-[22px]">
                {subtitle}
              </p>
            ) : null}
            <Button href="#booking" className="mt-6 h-[49px] w-[188px] gap-3 px-3 text-sm">
              Book a Meeting
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2 tablet:gap-x-[29px] tablet:gap-y-6">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl bg-overlay-white-08 px-6 py-5"
              >
                <span className="block text-[32px] font-semibold leading-[1.23] text-gold-500">
                  {step.number}
                </span>
                <h3 className="mt-4 text-[20px] leading-[1.5] font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-[16px] leading-[1.6] font-normal text-teal-200">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
