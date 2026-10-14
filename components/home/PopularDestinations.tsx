"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@/components/ui/Container";
import { useDestinationsQuery } from "@/hooks/queries/useDestinationsQuery";
import { useHomepageSection } from "@/hooks/queries/useHomepageSectionContentQuery";

import "swiper/css";
import "swiper/css/effect-coverflow";

export function PopularDestinations() {
  const { data: destinations = [], isLoading } = useDestinationsQuery();
  const section = useHomepageSection("destinations", {
    title: "Popular Destinations",
    subtitle:
      "Expand your travel horizons with new facets. Explore the world by choosing your ideal travel destinations in Asia, Europe, America, Australia and more with Suma.",
  });
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const canLoop = destinations.length > 1;

  function syncDot(swiper: SwiperClass) {
    if (!destinations.length) return;
    setActiveIndex(swiper.realIndex % destinations.length);
  }

  if (isLoading || destinations.length === 0) {
    return (
      <section
        id={section.htmlId}
        data-section-id={section.id || undefined}
        className="popular-wrap relative py-10 pb-5 md:py-16 md:pb-5"
      >
        <Container>
          <div className="mb-10 text-center">
            <div className="mx-auto h-12 w-96 animate-pulse rounded bg-gray-200/60 md:h-16" />
            <div className="mx-auto mt-4 h-6 w-full max-w-3xl animate-pulse rounded bg-gray-200/60" />
            <div className="mx-auto mt-2 h-6 w-2/3 max-w-2xl animate-pulse rounded bg-gray-200/60" />
          </div>

          <div className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="h-64 w-full animate-pulse bg-gray-200/60" />
                <div className="p-4">
                  <div className="mb-2 h-6 w-3/4 animate-pulse rounded bg-gray-200/60" />
                  <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200/60" />
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
      className="popular-wrap relative py-10 pb-5 md:py-16 md:pb-5"
    >
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-semibold tracking-wide text-black md:text-6xl">
            {section.title}
          </h2>
          {section.subtitle ? (
            <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-[#444] md:text-lg">
              {section.subtitle}
            </p>
          ) : null}
        </div>

        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          centeredSlides
          grabCursor
          loop={destinations.length > 1}
          slidesPerView="auto"
          spaceBetween={20}
          autoplay={destinations.length > 1}
          breakpoints={{
            0: { spaceBetween: 12 },
            640: { spaceBetween: 18 },
            768: { spaceBetween: 24 },
            1024: { spaceBetween: 34 },
            1280: { spaceBetween: 40 },
          }}
          speed={700}
          coverflowEffect={{
            rotate: 35,
            depth: 100,
            stretch: 0,
            modifier: 1,
            slideShadows: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            syncDot(swiper);
          }}
          onSlideChange={syncDot}
          className="mb-0 select-none"
        >
          {destinations.map((place) => (
            <SwiperSlide key={place.id}>
              <Link href={""}>
                <div className="st-card">
                  <div className="img">
                    {place.image ? (
                      <Image
                        src={place.image}
                        alt={place.imageAlt}
                        width={379}
                        height={402}
                      />
                    ) : (
                      <div className="h-full w-full bg-black/10" aria-hidden />
                    )}
                  </div>
                  <div className="grad" />
                  <div className="details">
                    <p className="title">{place.name}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {canLoop ? (
          <div
            className="popular-dots"
            role="tablist"
            aria-label="Popular destinations"
          >
            {([-2, -1, 0, 1, 2] as const).map((offset) => {
              const isMiddle = offset === 0;
              return (
                <button
                  key={offset}
                  type="button"
                  aria-label={
                    isMiddle
                      ? `Current destination ${activeIndex + 1}`
                      : offset < 0
                        ? "Previous destination"
                        : "Next destination"
                  }
                  aria-current={isMiddle ? "true" : undefined}
                  className={`swiper-pagination-bullet${isMiddle ? " swiper-pagination-bullet-active" : ""}`}
                  onClick={() => {
                    if (isMiddle) return;
                    const swiper = swiperRef.current;
                    if (!swiper) return;
                    const total = destinations.length;
                    const target =
                      (swiper.realIndex + offset + total * 10) % total;
                    swiper.slideToLoop(target);
                  }}
                />
              );
            })}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
