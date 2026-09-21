"use client";

import Link from "next/link";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useOffersQuery } from "@/hooks/queries/useOffersQuery";

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
  const { data: offers = [], isLoading } = useOffersQuery();

  if (isLoading || offers.length === 0) {
    return (
      <section className="bg-paper py-16 tablet:py-20">
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
    <section className="bg-paper py-16 tablet:py-20">
      <Container>
        <SectionHeading title="Exclusive Offers" className="mb-10" />

        <Swiper
          modules={[Pagination, Autoplay]}
          loop={offers.length > 1}
          centeredSlides
          grabCursor
          watchSlidesProgress
          speed={900}
          roundLengths
          initialSlide={offers.length > 1 ? 1 : 0}
          spaceBetween={8}
          slidesPerView={1.15}
          pagination={{ clickable: true }}
          autoplay={
            offers.length > 1
              ? { delay: 4500, disableOnInteraction: false }
              : false
          }
          breakpoints={{
            768: { slidesPerView: 3, spaceBetween: 0 },
            1280: { slidesPerView: 3, spaceBetween: 0 },
          }}
          onSetTranslate={scaleOfferCards}
          onProgress={scaleOfferCards}
          onResize={scaleOfferCards}
          className="offers-swiper !overflow-hidden !pt-12 !pb-12"
        >
          {offers.map((offer) => (
            <SwiperSlide key={offer.id}>
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
      </Container>
    </section>
  );
}
