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
      "From flights and visas to hotels and transport, we map out every detail in advance. Nothing is left to chance — just smooth connections, transitions, and peace of mind around your comfort and pace.",
    align: "right",
  },
  {
    number: "3",
    title: "We Handle Everything",
    description:
      "Once your trip begins, we manage the logistics so you don't have to. Documents, check-ins, transport coordination — it's all taken care of, leaving you free to focus on the journey itself.",
    align: "left",
  },
  {
    number: "4",
    title: "We Follow Up",
    description:
      "Our support doesn't end when you get home. We check in after your trip, welcome your feedback, and use it to keep improving the experience for every traveler who comes after you.",
    align: "right",
  },
];

export function AboutProcess() {
  return (
    <section className="bg-paper py-16 md:py-24 lg:py-[96px]">
      <Container>
        <div className="mx-auto w-full max-w-[1180px]">
          {/* Section Title */}
          <div className="mb-12 text-center md:mb-[56px]">
            <h2 className="text-[32px] font-bold leading-tight text-hero md:text-[40px]">
              Our Process
            </h2>
          </div>

          {/* Process Steps */}
          <div className="space-y-[42px] md:space-y-[54px]">
            {processSteps.map((step) => {
              const isLeft = step.align === "left";

              return (
                <div
                  key={step.number}
                  className="relative grid grid-cols-1 md:grid-cols-2"
                >
                  {/* STEP 1 & 3 */}
                  {isLeft && (
                    <>
                      {/* Text */}
                      <div className="relative z-10 flex items-start pb-[34px] md:pr-[72px]">
                        <div className="max-w-[420px]">
                          <h3 className="text-[18px] font-semibold leading-tight text-hero md:text-[20px]">
                            {step.title}
                          </h3>

                          <p className="mt-3 text-[13px] leading-[1.6] text-neutral-600 md:text-[14px]">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Large Number */}
                      <div className="relative flex items-end justify-end pb-[20px]">
                        <span className="select-none text-[150px] font-semibold leading-[0.72] tracking-[-0.08em] text-[#9EC7CB]/50 md:text-[180px] lg:text-[200px]">
                          {step.number}
                        </span>
                      </div>
                    </>
                  )}

                  {/* STEP 2 & 4 */}
                  {!isLeft && (
                    <>
                      {/* Large Number */}
                      <div className="relative order-2 flex items-end justify-start pb-[20px] md:order-1">
                        <span className="select-none text-[150px] font-semibold leading-[0.72] tracking-[-0.08em] text-[#9EC7CB]/50 md:text-[180px] lg:text-[200px]">
                          {step.number}
                        </span>
                      </div>

                      {/* Text */}
                      <div className="relative z-10 order-1 flex items-start pb-[34px] md:order-2 md:pl-[72px]">
                        <div className="max-w-[420px]">
                          <h3 className="text-[18px] font-semibold leading-tight text-hero md:text-[20px]">
                            {step.title}
                          </h3>

                          <p className="mt-3 text-[13px] leading-[1.6] text-neutral-600 md:text-[14px]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Horizontal Line */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#A9CDD0]/70" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
