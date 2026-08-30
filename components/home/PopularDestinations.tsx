"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@/components/ui/Container";
import { destinations } from "@/lib/home-data";

import "swiper/css";
import "swiper/css/effect-coverflow";

const DOT_COUNT = 5;

export function PopularDestinations() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeDot, setActiveDot] = useState(0);

  function syncDot(swiper: SwiperClass) {
    setActiveDot(swiper.realIndex % DOT_COUNT);
  }

  function goToDot(index: number) {
    const swiper = swiperRef.current;
    if (!swiper) return;
    const total = destinations.length;
    const current = swiper.realIndex;
    const diff = index - (current % DOT_COUNT);
    swiper.slideToLoop((current + diff + total) % total);
  }

  return (
    <section
      id="location"
      className="popular-wrap relative py-10 pb-5 md:py-16 md:pb-5"
    >
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-semibold tracking-wide text-black md:text-6xl">
            Popular Destinations
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-[#444] md:text-lg">
            Expand your travel horizons with new facets. Explore the world by choosing your
            ideal travel destinations in Asia, Europe, America, Australia and more with Suma.
          </p>
        </div>

        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          centeredSlides
          grabCursor
          loop
          slidesPerView="auto"
          spaceBetween={20}
          autoplay
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
            <SwiperSlide key={place.name}>
              <Link href="/packages">
                <div className="st-card">
                  <div className="img">
                    <Image
                      src={place.image}
                      alt={place.name}
                      width={379}
                      height={402}
                    />
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

        <div className="popular-dots" role="tablist" aria-label="Popular destinations">
          {Array.from({ length: DOT_COUNT }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to destination ${index + 1}`}
              aria-current={activeDot === index ? "true" : undefined}
              className={`swiper-pagination-bullet${activeDot === index ? " swiper-pagination-bullet-active" : ""}`}
              onClick={() => goToDot(index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
