"use client";

import { CoverImage } from "@/components/ui/CoverImage";
import Link from "next/link";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { StarIcon } from "@/components/icons";
import { ArrowShift } from "@/components/ui/Button";
import type { HeroCard } from "@/types/hero";

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
  cards,
  onActiveChange,
}: {
  cards: HeroCard[];
  onActiveChange?: (index: number) => void;
}) {
  // Swiper loop needs enough slides for slidesPerView: 3 — duplicate when few cards
  // so drag works both left→right and right→left (e.g. only 2 items).
  const LOOP_MIN_SLIDES = 6;
  const slideItems =
    cards.length > 1 && cards.length < LOOP_MIN_SLIDES
      ? Array.from({ length: LOOP_MIN_SLIDES }, (_, index) => ({
          card: cards[index % cards.length],
          key: `${cards[index % cards.length]?.title ?? "card"}-${index}`,
        }))
      : cards.map((card, index) => ({
          card,
          key: `${card.title}-${index}`,
        }));

  const reportActive = (swiper: SwiperClass) => {
    if (!cards.length) return;
    onActiveChange?.(swiper.realIndex % cards.length);
  };

  return (
    <div className="hero-cards-wrap mx-auto w-full desktop:ml-auto desktop:mr-0">
      <Swiper
        modules={[Autoplay]}
        loop={cards.length > 1}
        direction="horizontal"
        grabCursor
        watchSlidesProgress
        watchOverflow={false}
        loopAdditionalSlides={cards.length}
        loopPreventsSliding={false}
        speed={1000}
        slidesPerView={1.15}
        slidesPerGroup={1}
        spaceBetween={SLIDE_GAP}
        centeredSlides
        autoplay={
          cards.length > 1
            ? {
                delay: 4000,
                disableOnInteraction: false,
                reverseDirection: false,
              }
            : false
        }
        breakpoints={{
          768: {
            slidesPerView: 3,
            centeredSlides: false,
          },
        }}
        onInit={(swiper) => {
          animateHeroCards(swiper);
          reportActive(swiper);
        }}
        onSlideChange={reportActive}
        onProgress={animateHeroCards}
        onSetTranslate={animateHeroCards}
        onResize={animateHeroCards}
        className="hero-cards-swiper"
      >
        {slideItems.map(({ card, key }) => (
          <SwiperSlide key={key}>
            <Link href={card.href} className="hero-card group block">
              <div className="hero-card-head">
                <h3 className="truncate text-sm xl:text-lg font-semibold text-white">
                  {card.title}
                </h3>
                <div className="mt-1 flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <StarIcon
                      key={starIndex}
                      className={`size-5 xl:size-6 ${starIndex < card.rating ? "text-white" : "text-white/30"}`}
                    />
                  ))}
                </div>
              </div>
              <div className="hero-card-media relative">
                <div className="hero-card-photo">
                  <CoverImage
                    src={card.image}
                    alt={card.imageAlt}
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
