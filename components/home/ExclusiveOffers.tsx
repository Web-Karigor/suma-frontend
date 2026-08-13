"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { exclusiveOffers } from "@/lib/home-data";

import "swiper/css";
import "swiper/css/pagination";

export function ExclusiveOffers() {
  return (
    <section className="bg-paper py-16 tablet:py-20">
      <Container>
        <SectionHeading title="Exclusive Offers" className="mb-10" />

        <Swiper
          modules={[Pagination, Autoplay]}
          centeredSlides
          spaceBetween={20}
          slidesPerView={1.1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4200, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 1.45, spaceBetween: 24 },
            1280: { slidesPerView: 1.7, spaceBetween: 28 },
          }}
          className="offers-swiper !pb-12"
        >
          {exclusiveOffers.map((offer) => (
            <SwiperSlide key={offer.id}>
              <article className="relative h-[220px] overflow-hidden rounded-2xl tablet:h-[320px]">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 760px, 90vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-error-600 px-3 py-1 text-xs font-semibold text-white">
                  {offer.badge}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white tablet:p-7">
                  <h3 className="text-xl font-semibold tablet:text-2xl">{offer.title}</h3>
                  <p className="mt-1 text-sm text-white/85">{offer.subtitle}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
