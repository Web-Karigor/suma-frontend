"use client";

import { CoverImage } from "@/components/ui/CoverImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@/components/ui/Container";
import type { ServiceStay } from "@/types/service-detail";

import "swiper/css";

const VISIBLE_COUNT = 5;

function AccommodationCard({ accommodation }: { accommodation: ServiceStay }) {
  return (
    <article className="flex h-full min-w-0 flex-row overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 desktop-xl:h-[282px] desktop-xl:w-[564px]">
      {/* Side image — keep portrait ratio so it never looks flat at 1280 */}
      <div className="relative aspect-[3/4] w-[42%] max-w-[150px] min-w-[112px] shrink-0 self-stretch overflow-hidden rounded-xl desktop:max-[1439px]:max-w-[132px] desktop-xl:aspect-auto desktop-xl:h-[258px] desktop-xl:w-[180px] desktop-xl:max-w-none desktop-xl:min-w-0">
        <CoverImage
          src={accommodation.image}
          alt=""
          sizes="(min-width: 1920px) 180px, (min-width: 1280px) 132px, 150px"
          className="object-cover"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center px-3 py-1 tablet:px-4 desktop:max-[1439px]:px-3 desktop:max-[1439px]:py-1">
        <span className="mb-2 block h-[3px] w-[80px] rounded-full bg-teal-600 tablet:mb-3 tablet:w-[100px]" />
        <h3 className="text-[15px] leading-[1.35] font-semibold text-black tablet:text-[17px] desktop:max-[1439px]:text-[16px] desktop-xl:text-[20px]">
          {accommodation.title}
        </h3>
        <p className="mt-2 text-[13px] leading-[1.5] text-neutral-700 tablet:mt-3 tablet:text-[14px] desktop:max-[1439px]:mt-2 desktop:max-[1439px]:text-[13px] desktop-xl:text-[16px]">
          {accommodation.description}
        </p>
      </div>
    </article>
  );
}

function AccommodationSlider({ items }: { items: ServiceStay[] }) {
  return (
    <Swiper
      speed={600}
      grabCursor
      spaceBetween={24}
      slidesPerView={1.1}
      className="medical-accommodation-swiper"
      breakpoints={{
        768: { slidesPerView: 2, spaceBetween: 24 },
        1280: { slidesPerView: 3, spaceBetween: 20 },
        1440: { slidesPerView: 3, spaceBetween: 24 },
      }}
    >
      {items.map((accommodation) => (
        <SwiperSlide key={accommodation.title} className="!h-auto">
          <AccommodationCard accommodation={accommodation} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export function MedicalAccommodation({
  title = "Accommodation",
  items,
}: {
  title?: string;
  items: ServiceStay[];
}) {
  if (!items.length) return null;

  const needsSlider = items.length > VISIBLE_COUNT;

  return (
    <section className="bg-teal-100 py-12 tablet:py-16 desktop-xl:py-[109px]">
      <Container>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 desktop:grid-cols-[minmax(0,711px)_minmax(0,1005px)] desktop:gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="h-px w-[30px] bg-teal-600" />
                <span className="text-[15px] leading-[1.39] font-medium tracking-[1px] text-teal-600">
                  Where you&apos;ll stay
                </span>
              </div>
              <h2 className="text-[28px] font-semibold leading-[1.23] text-black tablet:text-[32px]">
                {title}
              </h2>
            </div>
          </div>

          {needsSlider ? (
            <AccommodationSlider items={items} />
          ) : (
            <div className="grid grid-cols-1 gap-5 tablet:grid-cols-2 desktop:grid-cols-3 desktop:gap-5">
              {items.map((accommodation) => (
                <AccommodationCard
                  key={accommodation.title}
                  accommodation={accommodation}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
