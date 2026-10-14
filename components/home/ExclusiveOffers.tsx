"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useHomepageSection } from "@/hooks/queries/useHomepageSectionContentQuery";
import { useOffersQuery } from "@/hooks/queries/useOffersQuery";
import type { OfferCard } from "@/types/offer";

import "swiper/css";

type SlideEl = HTMLElement & { progress: number };

/** Triple the list so we can fake infinite scroll without Swiper loop bugs. */
const LOOP_COPIES = 3;

function scaleOfferCards(swiper: SwiperClass) {
  swiper.slides.forEach((slide) => {
    const progress = Math.min(Math.abs((slide as SlideEl).progress ?? 0), 1);
    const scaleX = 1 - progress * 0.02;
    const scaleY = 1 - progress * 0.18;
    const card = slide.querySelector<HTMLElement>(".offer-card");
    if (!card) return;

    card.style.transform = `scale(${scaleX}, ${scaleY})`;
    card.style.boxShadow =
      progress < 0.2 ? "0 18px 40px rgb(10 12 12 / 16%)" : "none";
  });
}

function buildSlideItems(offers: OfferCard[]) {
  if (offers.length <= 1) {
    return offers.map((offer) => ({ offer, key: String(offer.id) }));
  }

  return Array.from({ length: offers.length * LOOP_COPIES }, (_, index) => {
    const offer = offers[index % offers.length]!;
    return { offer, key: `${offer.id}-${index}` };
  });
}

export function ExclusiveOffers() {
  const { data: offers = [], isLoading } = useOffersQuery();
  const section = useHomepageSection("exclusive-offers", {
    title: "Exclusive Offers",
  });
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeDot, setActiveDot] = useState(0);
  const slideItems = buildSlideItems(offers);
  const canLoop = offers.length > 1;

  /** Keep active index inside the middle copy for seamless infinite drag. */
  function keepInMiddleCopy(swiper: SwiperClass) {
    if (!canLoop) return;
    const n = offers.length;
    const i = swiper.activeIndex;
    if (i < n) {
      swiper.slideTo(i + n, 0);
    } else if (i >= n * 2) {
      swiper.slideTo(i - n, 0);
    }
  }

  function syncActive(swiper: SwiperClass) {
    if (!offers.length) return;
    setActiveDot(swiper.realIndex % offers.length);
  }

  function goToDot(index: number) {
    const swiper = swiperRef.current;
    if (!swiper || !offers.length) return;
    // Jump within the middle copy so neighbors stay left / center / right
    const target = canLoop ? offers.length + index : index;
    swiper.slideTo(target);
  }

  function onReady(swiper: SwiperClass) {
    swiperRef.current = swiper;
    if (canLoop) {
      // Middle copy, index 1 → left / middle / right = all 3 unique offers
      const start = offers.length + (offers.length > 1 ? 1 : 0);
      swiper.slideTo(start, 0);
    }
    scaleOfferCards(swiper);
    syncActive(swiper);
  }

  if (isLoading || offers.length === 0) {
    return (
      <section
        id={section.htmlId}
        data-section-id={section.id || undefined}
        className="bg-paper py-16 tablet:py-20"
      >
        <Container>
          <div className="mb-10">
            <div className="mx-auto h-10 w-64 animate-pulse rounded bg-gray-200/60 tablet:h-12" />
          </div>

          <div className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg bg-white shadow-sm"
              >
                <div className="h-[300px] w-full animate-pulse bg-gray-200/60" />
                <div className="p-5">
                  <div className="mb-3 h-7 w-4/5 animate-pulse rounded bg-gray-200/60" />
                  <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-200/60" />
                  <div className="mb-4 h-4 w-3/4 animate-pulse rounded bg-gray-200/60" />
                  <div className="flex items-center gap-3">
                    <div className="h-10 flex-1 animate-pulse rounded bg-gray-200/60" />
                    <div className="h-10 w-24 animate-pulse rounded bg-gray-200/60" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      id={section.htmlId}
      data-section-id={section.id || undefined}
      className="bg-paper py-16 tablet:py-20"
    >
      <Container>
        <SectionHeading
          title={section.title}
          subtitle={section.subtitle}
          className="mb-10"
        />

        <Swiper
          key={`offers-${offers.length}`}
          modules={[Autoplay]}
          loop={false}
          direction="horizontal"
          centeredSlides
          grabCursor
          watchSlidesProgress
          watchOverflow={false}
          allowSlidePrev
          allowSlideNext
          speed={900}
          roundLengths
          slidesPerGroup={1}
          spaceBetween={8}
          slidesPerView={1.15}
          autoplay={
            canLoop
              ? { delay: 4500, disableOnInteraction: false }
              : false
          }
          breakpoints={{
            768: { slidesPerView: 3, spaceBetween: 0, centeredSlides: true },
            1280: { slidesPerView: 3, spaceBetween: 0, centeredSlides: true },
          }}
          onSwiper={onReady}
          onSlideChange={syncActive}
          onSlideChangeTransitionEnd={(swiper) => {
            keepInMiddleCopy(swiper);
            syncActive(swiper);
            scaleOfferCards(swiper);
          }}
          onSetTranslate={scaleOfferCards}
          onProgress={scaleOfferCards}
          onResize={scaleOfferCards}
          className="offers-swiper !overflow-hidden !pt-12 !pb-12"
        >
          {slideItems.map(({ offer, key }) => (
            <SwiperSlide key={key}>
              <Link
                href={offer.href}
                className="offer-card relative block w-full overflow-hidden rounded-2xl"
              >
                <CoverImage
                  src={offer.image}
                  alt={offer.imageAlt}
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 90vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {canLoop ? (
          <div
            className="swiper-pagination !relative mt-1 !transform-none text-center"
            role="tablist"
            aria-label="Exclusive offers"
          >
            {offers.map((offer, index) => (
              <button
                key={offer.id}
                type="button"
                aria-label={`Go to offer ${index + 1}`}
                aria-current={activeDot === index ? "true" : undefined}
                className={`swiper-pagination-bullet${activeDot === index ? " swiper-pagination-bullet-active" : ""}`}
                onClick={() => goToDot(index)}
              />
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
