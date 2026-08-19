"use client";

import Image from "next/image";
import Link from "next/link";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowUpRightIcon, StarIcon } from "@/components/icons";
import { heroCards } from "@/lib/home-data";

import "swiper/css";

type SlideEl = HTMLElement & { progress: number };

const SLIDE_GAP = 14;
const INACTIVE_SCALE_X = 270 / 318;
const INACTIVE_SCALE_Y = 322 / 467;

function animateHeroCards(swiper: SwiperClass) {
  swiper.slides.forEach((slide) => {
    const progress = Math.min(Math.abs((slide as SlideEl).progress ?? 0), 1);
    const card = slide.querySelector<HTMLElement>(".hero-card");
    if (!card) return;

    const scaleX = INACTIVE_SCALE_X + (1 - INACTIVE_SCALE_X) * (1 - progress);
    const scaleY = INACTIVE_SCALE_Y + (1 - INACTIVE_SCALE_Y) * (1 - progress);

    card.style.transform = `scale(${scaleX}, ${scaleY})`;
    card.style.zIndex = String(Math.round(10 - progress * 5));
  });
}

export function HeroCardsSlider() {
  return (
    <div className="hero-cards-wrap mx-auto w-full desktop:ml-auto desktop:mr-0">
      <Swiper
        modules={[Autoplay]}
        loop
        grabCursor
        watchSlidesProgress
        watchOverflow={false}
        speed={1000}
        slidesPerView="auto"
        slidesPerGroup={1}
        spaceBetween={SLIDE_GAP}
        autoplay={{
          delay: 4200,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onInit={animateHeroCards}
        onProgress={animateHeroCards}
        onSetTranslate={animateHeroCards}
        onResize={animateHeroCards}
        className="hero-cards-swiper"
      >
        {heroCards.map((card) => (
          <SwiperSlide key={card.title}>
            <Link href={card.href} className="hero-card group block">
              <div className="hero-card-head">
                <h3 className="truncate text-sm font-semibold text-white">{card.title}</h3>
                <div className="mt-1 flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <StarIcon key={starIndex} className="size-3 text-white" />
                  ))}
                </div>
              </div>
              <div className="hero-card-media relative overflow-hidden rounded-2xl">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="318px"
                />
                <span className="hero-card-action absolute right-3 bottom-3 inline-flex size-8 items-center justify-center rounded-full bg-white text-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <ArrowUpRightIcon className="size-4" />
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
