"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroCardsSlider } from "@/components/home/HeroCardsSlider";
import { useHeroQuery } from "@/hooks/queries/useHeroQuery";

export function HeroSection() {
  const { data: heroCards = [], isLoading } = useHeroQuery();
  const [activeIndex, setActiveIndex] = useState(0);
  const [contentIndex, setContentIndex] = useState(0);
  const active = heroCards[activeIndex] ?? heroCards[0];
  const content = heroCards[contentIndex] ?? active;

  useEffect(() => {
    if (activeIndex === contentIndex) return;

    const timeout = window.setTimeout(() => {
      setContentIndex(activeIndex);
    }, 420);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, contentIndex]);

  if (isLoading || !active) return null;

  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[560px] tablet:min-h-[680px] desktop:h-[900px] desktop:min-h-[900px]">
        <div className="hero-bg-track" aria-hidden>
          {heroCards.map((card, index) => (
            <div
              key={`${card.title}-${index}`}
              className={`hero-bg-layer${index === activeIndex ? " is-active" : ""}`}
            >
              <Image
                src={card.bgImage}
                alt={card.bgImageAlt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 z-[1] bg-overlay-black-48" />

        <Container className="relative z-[2] flex min-h-[560px] flex-col items-start justify-start pt-24 pb-4 tablet:min-h-[680px] tablet:justify-center tablet:pt-28 tablet:pb-16 desktop:h-full desktop:min-h-[900px] desktop:flex-row desktop:items-center xl:gap-24  2xl:gap-10 desktop:justify-between">
          <div className="hero-mobile-content relative max-w-xl shrink-0 text-left text-white">
            <div className="hero-copy-viewport min-h-[132px] tablet:min-h-[200px] desktop:min-h-[280px]">
              <div
                key={`${content.title}-${contentIndex}`}
                className={`hero-copy${activeIndex !== contentIndex ? " is-exiting" : ""}`}
              >
                <h1 className="text-[32px] leading-[1.15] font-semibold text-[#FEFEFC] min-[390px]:text-[36px] tablet:text-[40px] desktop:text-[48px] xl:text-[56px] 2xl:text-[70px]">
                  {content.title}
                </h1>
                <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-white/85 min-[390px]:max-w-[320px] tablet:mt-4 tablet:max-w-md md:text-base xl:text-xl">
                  {content.description}
                </p>
              </div>
            </div>
            <Button
              href={content.href}
              className="mt-8 hidden h-[49px] w-fit gap-8 rounded-button !bg-gray-50 pt-3 pr-3 pb-3 pl-4 !text-black hover:!bg-gray-50 tablet:inline-flex [&>span]:size-[30px] [&>span]:!bg-black [&>span]:!text-white"
            >
              Book Now
            </Button>
          </div>

          <div className="hero-mobile-slider mt-6 w-[calc(100%+var(--page-gutter))] min-w-0 max-[767px]:-mr-[var(--page-gutter)] tablet:mt-12 tablet:mr-0 tablet:w-full desktop:mt-0 desktop:ml-auto desktop:-translate-x-6 desktop:mr-[calc(-1*var(--page-gutter))] desktop:w-full desktop:max-w-[min(970px,100%)] desktop:shrink-0 wide:w-[970px] wide:max-w-none">
            <HeroCardsSlider
              cards={heroCards}
              onActiveChange={setActiveIndex}
            />
          </div>
        </Container>
      </div>
    </section>
  );
}
