"use client";

import Image from "next/image";
import Link from "next/link";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { exclusiveOffers } from "@/lib/home-data";

import "swiper/css";
import "swiper/css/pagination";

type SlideEl = HTMLElement & { progress: number };

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

export function ExclusiveOffers() {
  return (
    <section className="bg-paper py-16 tablet:py-20">
      <Container>
        <SectionHeading title="Exclusive Offers" className="mb-10" />

        <Swiper
          modules={[Pagination, Autoplay]}
          loop
          centeredSlides
          grabCursor
          watchSlidesProgress
          speed={900}
          roundLengths
          initialSlide={1}
          spaceBetween={8}
          slidesPerView={1.15}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 3, spaceBetween: 0 },
            1280: { slidesPerView: 3, spaceBetween: 0 },
          }}
          onSetTranslate={scaleOfferCards}
          onProgress={scaleOfferCards}
          onResize={scaleOfferCards}
          className="offers-swiper !overflow-hidden !pt-12 !pb-12"
        >
          {exclusiveOffers.map((offer) => (
            <SwiperSlide key={offer.id}>
              <Link href="/offer-details" className="offer-card relative block w-full overflow-hidden rounded-2xl">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 90vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
                
                <div className="absolute inset-x-0 bottom-0 p-5 text-white tablet:p-7">
                  <h3 className="text-xl font-semibold tablet:text-2xl">{offer.title}</h3>
                  <p className="mt-1 text-sm text-white/85">{offer.subtitle}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
