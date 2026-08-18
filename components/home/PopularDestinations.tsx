"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { destinations } from "@/lib/home-data";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export function PopularDestinations() {
  return (
    <section
      id="location"
      className="popular-wrap relative mx-auto container px-2 py-10 pb-5 md:px-0 md:py-16 md:pb-5"
    >
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
        modules={[EffectCoverflow, Pagination, Autoplay]}
        effect="coverflow"
        centeredSlides
        grabCursor
        loop
        slidesPerView="auto"
        spaceBetween={30}
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
          rotate: 30,
          depth: 100,
          stretch: 0,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        className="mb-0 select-none"
      >
        {destinations.map((place) => (
          <SwiperSlide key={place.name}>
            <Link href="/destinations">
              <div className="st-card">
                <div className="img">
                  <Image
                    src={place.image}
                    alt={place.name}
                    width={320}
                    height={440}
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
    </section>
  );
}
