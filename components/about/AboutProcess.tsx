import { Container } from "@/components/ui/Container";

const processSteps = [
  {
    number: "1",
    title: "We Talk to You",
    description:
      "We start with a conversation, not a sales pitch. We take time to understand your travel goals, your budget, and — for Hajj and Umrah — your spiritual priorities, so every recommendation actually fits your journey.",
    align: "left",
  },
  {
    number: "2",
    title: "We Plan Your Trip",
    description:
      "From flights and visas to hotels and transport, we map out every detail in advance. Nothing is left to chance — accommodations, transfers, and timing are all planned around your comfort and peace of mind.",
    align: "right",
  },
  {
    number: "3",
    title: "We Handle Everything",
    description:
      "Once your trip begins, we manage the logistics so you don't have to. Documents, check-ins, transport, coordination — it's all taken care of, leaving you free to focus on the journey itself.",
    align: "left",
  },
  {
    number: "4",
    title: "We Follow Up",
    description:
      "Our support doesn't end when you get home. We check in after your trip, welcome your feedback, and use it to keep improving the experience for every traveler who comes after you.",
    align: "right",
  },
] as const;

function StepNumber({ value }: { value: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none block select-none text-[120px] leading-none font-semibold text-[#BFDEDD] [text-box-trim:trim-end] [text-box-edge:cap_alphabetic] tablet:text-[160px] desktop:text-[200px] ${value === "2" ? "translate-y-[0.1em]" : ""}`}
    >
      {value}
    </span>
  );
}

function StepCopy({ title, description }: { title: string; description: string }) {
  return (
    <div className="max-w-[480px]">
      <h3 className="text-[18px] leading-tight font-semibold text-hero tablet:text-[20px] desktop:text-[22px]">
        {title}
      </h3>
      <p className="mt-3 text-[13px] leading-[1.6] text-neutral-600 tablet:text-[15px] desktop:text-[16px]">
        {description}
      </p>
    </div>
  );
}

export function AboutProcess() {
  return (
    <section className="bg-teal-100 py-12 tablet:py-16 desktop:h-[1223px] desktop:py-16">
      <Container className="h-full desktop-xl:!px-0">
        <div className="mx-auto flex h-full w-full max-w-[1151px] flex-col desktop:justify-center">
          <h2 className="shrink-0 text-center text-[32px] leading-tight font-bold text-hero tablet:text-[40px] desktop:text-[48px]">
            Our Process
          </h2>

          <div className="mt-10 flex flex-col gap-10 tablet:mt-12 tablet:gap-12 desktop:mt-[60px] desktop:min-h-0 desktop:flex-1 desktop:gap-[60px]">
            {processSteps.map((step) => {
              const isLeft = step.align === "left";

              return (
                <div
                  key={step.number}
                  className="relative grid min-h-0 flex-1 grid-cols-1 desktop:grid-cols-2 desktop:items-end"
                >
                  {isLeft ? (
                    <>
                      <div className="relative z-10 flex items-start pb-6 desktop:items-end desktop:pb-6 desktop:pr-10">
                        <StepCopy title={step.title} description={step.description} />
                      </div>
                      <div className="relative z-0 hidden items-end justify-end pr-2 pb-1 desktop:flex [clip-path:inset(-6rem_-4rem_0.25rem_-4rem)]">
                        <StepNumber value={step.number} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative z-0 hidden items-end justify-start pb-1 desktop:flex [clip-path:inset(-6rem_-4rem_0.25rem_-4rem)]">
                        <StepNumber value={step.number} />
                      </div>
                      <div className="relative z-10 flex items-start pb-6 desktop:items-end desktop:justify-end desktop:pb-6 desktop:pl-10">
                        <StepCopy title={step.title} description={step.description} />
                      </div>
                    </>
                  )}

                  <div className="absolute bottom-0 left-0 h-1 w-full bg-[#BFDEDD]" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
