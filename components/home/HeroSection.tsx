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
      <div className="relative min-h-[520px] tablet:min-h-[680px] desktop:h-[900px] desktop:min-h-[900px]">
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

        <Container className="relative z-[2] flex min-h-[520px] flex-col justify-center pt-28 pb-16 tablet:min-h-[680px] desktop:h-full desktop:min-h-[900px] desktop:flex-row desktop:items-center desktop:gap-10 desktop:justify-between">
          <div className="hero-mobile-content hero-copy-viewport max-w-xl shrink-0 text-white">
            <div
              key={`${content.title}-${contentIndex}`}
              className={`hero-copy${activeIndex !== contentIndex ? " is-exiting" : ""}`}
            >
              <h1 className="text-[32px] font-semibold text-[#FEFEFC] desktop:text-[72px]">
                {content.title}
              </h1>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85 tablet:text-base">
                {content.description}
              </p>
            </div>
            <Button
              href={content.href}
              className="mt-8 h-[49px] w-fit gap-8 rounded-button !bg-gray-50 pt-3 pr-3 pb-3 pl-4 !text-black hover:!bg-gray-50 [&>span]:size-[25px] [&>span]:!bg-black [&>span]:!text-white"
            >
              Book Now
            </Button>
          </div>

          <div className="hero-mobile-slider mt-12 w-full min-w-0 desktop:mt-0 desktop:ml-auto desktop:-translate-x-6 desktop:mr-[calc(-1*var(--page-gutter))] desktop:w-[970px] desktop:max-w-none desktop:shrink-0">
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
