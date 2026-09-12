"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRightIcon, StarIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useHomepageHotelsQuery } from "@/hooks/queries/useHomepageHotelsQuery";

import "swiper/css";
import "swiper/css/pagination";

export function BestHotels() {
  const { data: hotels = [], isLoading } = useHomepageHotelsQuery();

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
          <p className="mt-2 xl:mt-5 max-w-2xl text-sm font-medium leading-relaxed text-[#0A0C0C]">
            For budget-friendly hotels, villas or resorts, browse accommodations
            that you need. Book long-term or short-term accommodation from our
            hotel collection.
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
            1024: { slidesPerView: 2, spaceBetween: 24 },
            1280: { slidesPerView: "auto", spaceBetween: 24 },
          }}
          className="hotels-swiper"
        >
          {hotels.map((hotel) => (
            <SwiperSlide key={hotel.id} className="!h-auto desktop:!w-[593px]">
              <article className="relative mx-auto w-full max-w-[593px] desktop:h-[360px]">
                <div className="relative z-20 h-[240px] w-full overflow-hidden rounded-xl shadow-[4px_0_16px_rgb(0_0_0/6%)] desktop:absolute desktop:top-0 desktop:left-0 desktop:h-[360px] desktop:w-[240px]">
                  <Image
                    src={hotel.image}
                    alt={hotel.imageAlt}
                    fill
                    className="object-cover"
                    sizes="240px"
                  />
                </div>

                <div className="relative z-10 -mt-6 mx-4 flex flex-col gap-2.5 rounded-2xl bg-gray-50 px-5 pt-8 pb-5 shadow-[4px_0_8px_rgb(0_0_0/4%)] desktop:absolute desktop:top-1/2 desktop:right-0 desktop:z-0 desktop:mt-0 desktop:mx-0 desktop:h-[277px] desktop:w-[376px] desktop:-translate-y-1/2 desktop:px-8 desktop:pt-5 desktop:pb-5 desktop:pr-8 desktop:pl-10">
                  <div
                    className="flex gap-0.5 text-gold-500"
                    aria-label={`${hotel.rating} star rating`}
                  >
                    {Array.from({ length: hotel.rating }).map((_, index) => (
                      <StarIcon key={index} className="size-5.5" />
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-[#0A0C0C]">
                    {hotel.title}
                  </h3>
                  <div className="flex items-start gap-1.5">
                    <svg
                      className="mt-0.5 size-4 shrink-0 text-[#7B7B7B]"
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
                    <p className="text-xs leading-snug text-[#7B7B7B]">
                      Marine Drive Road, Kutupalong, Inani Ukhia, Cox's Bazar
                      4750
                    </p>
                  </div>
                  <p className="line-clamp-3 font-poppins text-xs font-medium leading-relaxed text-[#0A0C0C]">
                    {hotel.description}
                  </p>
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
