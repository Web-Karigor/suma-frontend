"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroCardsSlider } from "@/components/home/HeroCardsSlider";
import { heroCards, heroContent } from "@/lib/home-data";

const BG_DURATION_MS = 1000;

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [outgoingIndex, setOutgoingIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const activeRef = useRef(0);
  const active = heroCards[activeIndex] ?? heroCards[0];
  const outgoing = outgoingIndex !== null ? heroCards[outgoingIndex] : null;

  function handleActiveChange(index: number) {
    const from = activeRef.current;
    if (index === from) return;

    const length = heroCards.length;
    const forward = (index - from + length) % length;
    const backward = (from - index + length) % length;
    setDirection(forward <= backward ? 1 : -1);
    setOutgoingIndex(from);
    setActiveIndex(index);
    activeRef.current = index;
  }

  useEffect(() => {
    if (outgoingIndex === null) return;
    const timer = window.setTimeout(() => setOutgoingIndex(null), BG_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [outgoingIndex, activeIndex]);

  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[520px] tablet:min-h-[680px] desktop:h-[900px] desktop:min-h-[900px]">
        <div className="hero-bg-track" aria-hidden>
          {outgoing && (
            <div
              key={`out-${outgoingIndex}`}
              className={`hero-bg-slide ${direction === 1 ? "hero-bg-out-left" : "hero-bg-out-right"}`}
            >
              <Image
                src={outgoing.bgImage}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          )}
          <div
            key={`in-${activeIndex}`}
            className={`hero-bg-slide ${
              outgoing
                ? direction === 1
                  ? "hero-bg-in-right"
                  : "hero-bg-in-left"
                : ""
            }`}
          >
            <Image
              src={active.bgImage}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
        <div className="absolute inset-0 z-[1] bg-overlay-black-48" />

        <Container className="relative z-[2] flex min-h-[520px] flex-col justify-center pt-28 pb-16 tablet:min-h-[680px] desktop:h-full desktop:min-h-[900px] desktop:flex-row desktop:items-center desktop:gap-10 desktop:justify-between">
          <div className="max-w-xl shrink-0 text-white">
            <h1 className="text-[32px] font-semibold text-[#FEFEFC] desktop:text-[72px]">
              {active.title}
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85 tablet:text-base">
              {active.description}
            </p>
            <Button
              href={active.href}
              className="mt-8 h-[49px] w-fit gap-8 rounded-button !bg-gray-50 pt-3 pr-3 pb-3 pl-4 !text-black hover:!bg-gray-50 [&>span]:size-[25px] [&>span]:!bg-black [&>span]:!text-white"
            >
              {heroContent.cta.label}
            </Button>
          </div>

          <div className="mt-12 w-full min-w-0 desktop:mt-0 desktop:ml-auto desktop:-translate-x-6 desktop:mr-[calc(-1*var(--page-gutter))] desktop:w-[970px] desktop:max-w-none desktop:shrink-0">
            <HeroCardsSlider onActiveChange={handleActiveChange} />
          </div>
        </Container>
      </div>
    </section>
  );
}
