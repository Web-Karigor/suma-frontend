"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRightIcon, StarIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { useHomepageHotelsQuery } from "@/hooks/queries/useHomepageHotelsQuery";
import { useHomepageSection } from "@/hooks/queries/useHomepageSectionContentQuery";
import type { HotelCard } from "@/types/hotel";

import "swiper/css";

/** Need enough slides for loop + slidesPerView auto/2 — pad so both directions work. */
const LOOP_MIN_SLIDES = 12;

function buildSlideItems(hotels: HotelCard[]) {
  if (hotels.length <= 1) {
    return hotels.map((hotel) => ({ hotel, key: String(hotel.id) }));
  }

  const count = Math.max(LOOP_MIN_SLIDES, hotels.length * 2);
  const total = Math.ceil(count / hotels.length) * hotels.length;

  return Array.from({ length: total }, (_, index) => {
    const hotel = hotels[index % hotels.length]!;
    return { hotel, key: `${hotel.id}-${index}` };
  });
}

export function BestHotels() {
  const { data: hotels = [], isLoading } = useHomepageHotelsQuery();
  const section = useHomepageSection("hotels", {
    title: "Best Hotels for Your Next Trip",
    subtitle:
      "For budget-friendly hotels, villas or resorts, browse accommodations that you need. Book long-term or short-term accommodation from our hotel collection.",
  });
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slideItems = buildSlideItems(hotels);
  const canLoop = hotels.length > 1;

  function syncActive(swiper: SwiperClass) {
    if (!hotels.length) return;
    setActiveIndex(swiper.realIndex % hotels.length);
  }

  function goToDot(index: number) {
    const swiper = swiperRef.current;
    if (!swiper || !hotels.length) return;
    const total = slideItems.length;
    const current = swiper.realIndex;
    const diff = index - (current % hotels.length);
    swiper.slideToLoop((current + diff + total) % total);
  }

  if (isLoading || hotels.length === 0) {
    return (
      <section
        id={section.htmlId}
        data-section-id={section.id || undefined}
        className="bg-paper py-16 tablet:py-20"
      >
        <Container>
          <div className="mb-[37px]">
            <div className="flex items-center justify-between gap-6">
              <div className="h-10 w-96 animate-pulse rounded bg-gray-200/60 tablet:h-12" />
              <div className="hidden h-6 w-24 animate-pulse rounded bg-gray-200/60 lg:block" />
            </div>
            <div className="mt-2 h-6 w-full max-w-2xl animate-pulse rounded bg-gray-200/60 xl:mt-5" />
          </div>

          <div className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
              >
                <div className="h-64 w-full animate-pulse bg-gray-200/60" />
                <div className="p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="h-5 w-32 animate-pulse rounded bg-gray-200/60" />
                    <div className="h-5 w-16 animate-pulse rounded bg-gray-200/60" />
                  </div>
                  <div className="mb-3 h-6 w-3/4 animate-pulse rounded bg-gray-200/60" />
                  <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-200/60" />
                  <div className="mb-4 h-4 w-5/6 animate-pulse rounded bg-gray-200/60" />
                  <div className="flex items-center justify-between">
                    <div className="h-6 w-24 animate-pulse rounded bg-gray-200/60" />
                    <div className="h-10 w-28 animate-pulse rounded bg-gray-200/60" />
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
        <div className="mb-[37px] ">
          <div className="flex items-center justify-between gap-6">
            <h2 className="text-[1.75rem] font-semibold text-center lg:text-left tracking-tight text-black md:text-[2.5rem]">
              {section.title}
            </h2>
            <Link
              href="/hotels"
              className="hidden shrink-0 items-center gap-2 text-base font-medium text-primary hover:text-primary-700 lg:inline-flex"
            >
              View All
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
          {section.subtitle ? (
            <p className="mt-2 xl:mt-5 max-w-2xl text-sm font-medium leading-relaxed text-[#0A0C0C] text-center lg:text-left">
              {section.subtitle}
            </p>
          ) : null}
        </div>

        <Swiper
          key={`hotels-loop-${hotels.length}-${slideItems.length}`}
          modules={[Autoplay]}
          loop={canLoop}
          loopAdditionalSlides={hotels.length}
          loopPreventsSliding={false}
          grabCursor
          watchOverflow={false}
          allowSlidePrev
          allowSlideNext
          resistanceRatio={0}
          speed={700}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={
            canLoop
              ? { delay: 5000, disableOnInteraction: false }
              : false
          }
          breakpoints={{
            768: { slidesPerView: 1.4, spaceBetween: 24 },
            1024: { slidesPerView: 2, spaceBetween: 24 },
            1280: { slidesPerView: "auto", spaceBetween: 24 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            syncActive(swiper);
          }}
          onSlideChange={syncActive}
          className="hotels-swiper"
        >
          {slideItems.map(({ hotel, key }) => (
            <SwiperSlide key={key} className="!h-auto desktop:!w-[593px]">
              <article className="relative mx-auto w-full max-w-[593px] desktop:h-[360px]">
                <Link
                  href={hotel.href}
                  aria-label={`View ${hotel.title}`}
                  className="relative z-20 block h-[240px] w-full overflow-hidden rounded-xl shadow-[4px_0_16px_rgb(0_0_0/6%)] desktop:absolute desktop:top-0 desktop:left-0 desktop:h-[360px] desktop:w-[240px]"
                >
                  <CoverImage
                    src={hotel.image}
                    alt={hotel.imageAlt}
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="240px"
                  />
                </Link>

                <div className="relative z-10 -mt-6 mx-4 flex flex-col gap-2.5 rounded-2xl bg-gray-50 px-5 pt-8 pb-5 shadow-[4px_0_8px_rgb(0_0_0/4%)] desktop:absolute desktop:top-1/2 desktop:right-0 desktop:z-0 desktop:mt-0 desktop:mx-0 desktop:h-[277px] desktop:w-[376px] desktop:-translate-y-1/2 desktop:px-8 desktop:pt-5 desktop:pb-5 desktop:pr-8 desktop:pl-10">
                  <div className="flex flex-col gap-1">
                    <div
                      className="flex justify-start gap-0.5 text-gold-500"
                      aria-label={`${hotel.rating} star rating`}
                    >
                      {Array.from({ length: hotel.rating }).map((_, index) => (
                        <StarIcon key={index} className="size-7 lg:size-6" />
                      ))}
                    </div>
                    <h3 className="min-w-0 text-left text-lg font-semibold text-[#0A0C0C] desktop:line-clamp-2">
                      <Link
                        href={hotel.href}
                        className="break-words transition-colors hover:text-primary"
                      >
                        {hotel.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="flex items-start justify-start gap-1.5">
                    <svg
                      className="mt-0.5 size-4 shrink-0 text-[#7B7B7B] lg:ml-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="min-w-0 line-clamp-2 text-left text-xs leading-snug text-[#7B7B7B]">
                      {hotel.address}
                    </p>
                  </div>
                  <p className="line-clamp-3 font-poppins text-left text-xs font-medium leading-relaxed text-[#0A0C0C] desktop:line-clamp-2">
                    {hotel.description}
                  </p>
                  <div className="mt-auto flex pt-1 justify-start">
                    <Button href={hotel.href}>Explore</Button>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {canLoop ? (
          <div
            className="swiper-pagination hotels-swiper-dots !relative mt-7 !transform-none text-center"
            role="tablist"
            aria-label="Best hotels"
          >
            {hotels.map((hotel, index) => (
              <button
                key={hotel.id}
                type="button"
                aria-label={`Go to hotel ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`swiper-pagination-bullet${activeIndex === index ? " swiper-pagination-bullet-active" : ""}`}
                onClick={() => goToDot(index)}
              />
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
