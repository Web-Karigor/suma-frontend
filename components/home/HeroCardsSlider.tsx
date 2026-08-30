"use client";

import Image from "next/image";
import Link from "next/link";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { StarIcon } from "@/components/icons";
import { ArrowShift } from "@/components/ui/Button";
import { heroCards } from "@/lib/home-data";

import "swiper/css";

type SlideEl = HTMLElement & { progress: number };

const SLIDE_GAP = 8;
const INACTIVE_SCALE_X = 270 / 318;
const INACTIVE_SCALE_Y = 322 / 400;

function animateHeroCards(swiper: SwiperClass) {
  swiper.slides.forEach((slide) => {
    const progress = Math.min(Math.abs((slide as SlideEl).progress ?? 0), 1);
    const card = slide.querySelector<HTMLElement>(".hero-card");
    if (!card) return;

    const scaleX = INACTIVE_SCALE_X + (1 - INACTIVE_SCALE_X) * (1 - progress);
    const scaleY = INACTIVE_SCALE_Y + (1 - INACTIVE_SCALE_Y) * (1 - progress);

    card.style.transform = `scale(${scaleX}, ${scaleY})`;
    card.style.zIndex = String(Math.round(10 - progress * 5));
    card.classList.toggle("is-large", progress < 0.2);
  });
}

export function HeroCardsSlider({
  onActiveChange,
}: {
  onActiveChange?: (index: number) => void;
}) {
  return (
    <div className="hero-cards-wrap mx-auto w-full desktop:ml-auto desktop:mr-0">
      <Swiper
        modules={[Autoplay]}
        loop
        grabCursor
        watchSlidesProgress
        watchOverflow={false}
        speed={1000}
        slidesPerView={1.15}
        slidesPerGroup={1}
        spaceBetween={SLIDE_GAP}
        centeredSlides
        loopAdditionalSlides={2}
        breakpoints={{
          768: {
            slidesPerView: 3,
            centeredSlides: false,
          },
        }}
        autoplay={{
          delay: 4200,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onInit={(swiper) => {
          animateHeroCards(swiper);
          onActiveChange?.(swiper.realIndex);
        }}
        onSlideChange={(swiper) => onActiveChange?.(swiper.realIndex)}
        onProgress={animateHeroCards}
        onSetTranslate={animateHeroCards}
        onResize={animateHeroCards}
        className="hero-cards-swiper"
      >
        {heroCards.map((card) => (
          <SwiperSlide key={card.title}>
            <Link href={card.href} className="hero-card group block">
              <div className="hero-card-head">
                <h3 className="truncate text-sm xl:text-lg font-semibold text-white">{card.title}</h3>
                <div className="mt-1 flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <StarIcon key={starIndex} className="size-4 xl:size-4 text-white" />
                  ))}
                </div>
              </div>
              <div className="hero-card-media relative">
                <div className="hero-card-photo">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700"
                    sizes="318px"
                  />
                </div>
                <span className="hero-card-action">
                  <ArrowShift className="size-full" />
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
