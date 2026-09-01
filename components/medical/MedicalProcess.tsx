import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { medicalProcessSteps } from "@/lib/medical-data";

export function MedicalProcess() {
  return (
    <section className="overflow-hidden bg-teal-950 py-12 tablet:py-16 desktop-xl:h-[819px] desktop-xl:py-[60px]">
      <Container>
        <div className="grid grid-cols-1 gap-10 desktop:grid-cols-[minmax(0,711px)_minmax(0,1005px)] desktop:gap-6 desktop-xl:h-[699px]">
          <div className="flex flex-col items-start desktop-xl:h-[255px] desktop-xl:w-[711px]">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-px w-[30px] bg-teal-200" />
              <span className="text-[15px] leading-[1.39] font-medium tracking-[1px] text-teal-200">
                How your journey is planned
              </span>
            </div>
            <h2 className="text-[28px] font-semibold leading-[1.18] text-white tablet:text-[32px] desktop-xl:text-[40px]">
              Your treatment <span className="text-gold-500">journey</span>
            </h2>
            <p className="mt-4 text-[16px] leading-[1.5] font-medium text-teal-200 tablet:text-[22px]">
              Six coordinated stages, from your first remote consultation to aftercare once you return home — each one
              managed by your dedicated coordinator.
            </p>
            <Button href="#booking" className="mt-6 h-[49px] w-[188px] gap-3 px-3 text-sm">
              Book a Meeting
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2 tablet:gap-x-[29px] tablet:gap-y-6 desktop-xl:h-[699px] desktop-xl:w-[1005px]">
            {medicalProcessSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl bg-overlay-white-08 px-6 py-5 desktop-xl:h-[217px] desktop-xl:w-[488px]"
              >
                <span className="block text-[32px] font-semibold leading-[1.23] text-gold-500">{step.number}</span>
                <h3 className="mt-4 text-[20px] leading-[1.5] font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-[16px] leading-[1.6] font-normal text-teal-200">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
