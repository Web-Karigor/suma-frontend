"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { destinations } from "@/lib/home-data";

import "swiper/css";
import "swiper/css/pagination";

export function PopularDestinations() {
  return (
    <section className="bg-paper py-16 tablet:py-20">
      <Container>
        <SectionHeading title="Popular Destinations" className="mb-10" />

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1.25}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3800, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 3, spaceBetween: 18 },
            1280: { slidesPerView: 5, spaceBetween: 20 },
          }}
          className="destinations-swiper !pb-12"
        >
          {destinations.map((place) => (
            <SwiperSlide key={place.name}>
              <article className="relative h-[340px] overflow-hidden rounded-t-[28px] rounded-b-xl">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 230px, 70vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                <h3 className="absolute inset-x-0 bottom-5 text-center text-lg font-semibold text-white">
                  {place.name}
                </h3>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
