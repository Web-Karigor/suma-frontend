"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRightIcon, StarIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useHotelsQuery } from "@/hooks/queries/useHotelsQuery";

import "swiper/css";
import "swiper/css/pagination";

export function BestHotels() {
  const { data, isLoading } = useHotelsQuery();
  const hotels = data?.hotels ?? [];

  if (isLoading || hotels.length === 0) return null;

  return (
    <section className="bg-paper py-16 tablet:py-20">
      <Container>
        <div className="mb-[37px]">
          <div className="flex items-center justify-between gap-6">
            <h2 className="text-[1.75rem] font-semibold tracking-tight text-black tablet:text-[2.5rem]">
              Best Hotels for Your Next Trip
            </h2>
            <Link
              href="/hotels"
              className="hidden shrink-0 items-center gap-2 text-base font-medium text-primary hover:text-primary-700 tablet:inline-flex"
            >
              View All
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600 tablet:text-base">
            For budget-friendly hotels, villas or resorts, browse accommodations that you need.
            Book long-term or short-term accommodation from our hotel collection.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          loop={hotels.length > 1}
          grabCursor
          speed={800}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={
            hotels.length > 1
              ? { delay: 5000, disableOnInteraction: false }
              : false
          }
          breakpoints={{
            768: { slidesPerView: 1.4, spaceBetween: 24 },
            1280: { slidesPerView: "auto", spaceBetween: 24 },
          }}
          className="hotels-swiper"
        >
          {hotels.map((hotel) => (
            <SwiperSlide key={hotel.id} className="!h-auto desktop:!w-[593px]">
              <article className="relative mx-auto w-full max-w-[593px] desktop:h-[360px]">
                <div className="relative z-20 h-[240px] overflow-hidden rounded-xl shadow-[4px_0_16px_rgb(0_0_0/6%)] desktop:absolute desktop:top-0 desktop:left-0 desktop:h-[360px] desktop:w-[240px]">
                  <Image
                    src={hotel.image}
                    alt={hotel.imageAlt}
                    fill
                    className="object-cover"
                    sizes="240px"
                  />
                </div>

                <div className="relative z-0 flex flex-col gap-2.5 rounded-2xl bg-gray-50 px-6 py-5 shadow-[4px_0_8px_rgb(0_0_0/4%)] desktop:absolute desktop:top-1/2 desktop:right-0 desktop:h-[277px] desktop:w-[376px] desktop:-translate-y-1/2 desktop:py-5 desktop:pr-8 desktop:pl-10">
                  <div className="flex gap-0.5 text-gold-500" aria-label={`${hotel.rating} star rating`}>
                    {Array.from({ length: hotel.rating }).map((_, index) => (
                      <StarIcon key={index} className="size-3.5" />
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-black">{hotel.title}</h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">{hotel.description}</p>
                  <div className="mt-auto pt-1">
                    <Button href={hotel.href}>Explore</Button>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
