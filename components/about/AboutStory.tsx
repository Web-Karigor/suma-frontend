import { Container } from "@/components/ui/Container";

const stories = [
  {
    title: "How We Started",
    description:
      "Founded in 1997, Suma International began with one purpose: guiding pilgrims through the sacred journeys of Hajj and Umrah with unwavering dedication. From the very first client, every detail — spiritual and logistical — was handled with the same personal care.",
    side: "left",
    marker: "teal",
  },
  {
    title: "How We Grew",
    description:
      "As trust grew, so did our scope. We recognized that the same principles guiding spiritual travel — patience, precision, and care — could serve every kind of journey, leading to a steady, deliberate expansion of what we offer.",
    side: "right",
    marker: "yellow",
  },
  {
    title: "What We Do Today",
    description:
      "Today, Suma International operates across 8 specialized verticals — from Hajj & Umrah to Visa Assistance, Hotel Accommodation, and Holiday Packages. This growth was never about scale for its own sake — it was about making modern travel simpler for the people who trust us.",
    side: "left",
    marker: "teal",
  },
  {
    title: "Our Approach",
    description:
      "Whether we're organizing a once-in-a-lifetime pilgrimage or a family holiday, our approach stays rooted in Sakinah — tranquility and peace of mind — at every step of the journey.",
    side: "right",
    marker: "yellow",
  },
] as const;

export function AboutStory() {
  return (
    <section className="bg-teal-100 pt-8 pb-16 tablet:pt-10 tablet:pb-20 desktop:pb-[88px]">
      <Container className="desktop-xl:!px-0">
        <div className="mx-auto w-full max-w-[1513px] desktop-xl:w-[1513px]">
          <div className="mb-12 text-center tablet:mb-14 desktop:mb-16">
            <h2 className="text-[32px] leading-[1.15] font-bold tracking-[-0.02em] text-hero tablet:text-[42px] desktop:text-[48px]">
              Built on Legacy, Growing with Purpose
            </h2>
          </div>

        <div className="relative md:hidden">
          <div className="absolute top-0 bottom-0 left-[14px] w-[2px] bg-neutral-300" />

          <div className="space-y-10">
            {stories.map((story) => (
              <div key={story.title} className="relative pl-10">
                <div
                  className={`absolute top-1 left-[12px] h-11 w-[4px] rounded-full ${
                    story.marker === "teal" ? "bg-teal-700" : "bg-yellow-500"
                  }`}
                />

                <h3 className="text-[18px] leading-tight font-semibold text-hero">
                  {story.title}
                </h3>

                <p className="mt-3 text-[15px] leading-[1.55] text-neutral-600">
                  {story.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden w-full md:block">
          <div className="absolute top-0 bottom-0 left-1/2 w-[2px] -translate-x-1/2 bg-neutral-300" />

          <div className="space-y-[54px] lg:space-y-[58px]">
            {stories.map((story) => {
              const isLeft = story.side === "left";

              return (
                <div
                  key={story.title}
                  className="relative grid min-h-[86px] grid-cols-[1fr_2px_1fr]"
                >
                  <div
                    className={isLeft ? "flex justify-end pr-12 lg:pr-16" : ""}
                  >
                    {isLeft && (
                      <div className="w-full max-w-[686px]">
                        <h3 className="text-[17px] leading-tight font-semibold text-hero lg:text-[18px]">
                          {story.title}
                        </h3>

                        <p className="mt-3 text-[15px] leading-[1.48] text-neutral-600 lg:text-[16px]">
                          {story.description}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="relative flex justify-center">
                    <div
                      className={`absolute top-[36px] h-[44px] w-[4px] rounded-full ${
                        story.marker === "teal"
                          ? "bg-teal-700"
                          : "bg-yellow-500"
                      }`}
                    />
                  </div>

                  <div className={!isLeft ? "pl-12 lg:pl-16" : ""}>
                    {!isLeft && (
                      <div className="w-full max-w-[686px]">
                        <h3 className="text-[17px] leading-tight font-semibold text-hero lg:text-[18px]">
                          {story.title}
                        </h3>

                        <p className="mt-3 text-[15px] leading-[1.48] text-neutral-600 lg:text-[16px]">
                          {story.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </Container>
    </section>
  );
}
