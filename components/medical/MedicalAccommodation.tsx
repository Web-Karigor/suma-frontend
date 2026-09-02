"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@/components/ui/Container";
import { medicalAccommodations } from "@/lib/medical-data";

import "swiper/css";

const VISIBLE_COUNT = 5;
const needsSlider = medicalAccommodations.length > VISIBLE_COUNT;

function AccommodationCard({ accommodation }: { accommodation: (typeof medicalAccommodations)[number] }) {
  return (
    <article className="flex h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 desktop-xl:h-[282px] desktop-xl:w-[564px]">
      <div className="relative h-[180px] w-[120px] shrink-0 overflow-hidden rounded-xl tablet:h-[220px] tablet:w-[150px] desktop-xl:h-[258px] desktop-xl:w-[180px]">
        <Image src={accommodation.image} alt="" fill sizes="180px" className="object-cover" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col px-3 py-2 tablet:px-4">
        <span className="mb-3 block h-[3px] w-[100px] rounded-full bg-teal-600" />
        <h3 className="text-[16px] leading-[1.5] font-semibold text-black tablet:text-[20px]">
          {accommodation.title}
        </h3>
        <p className="mt-3 text-[14px] leading-[1.5] text-neutral-700 tablet:text-[16px]">
          {accommodation.description}
        </p>
      </div>
    </article>
  );
}

function AccommodationSlider() {
  return (
    <Swiper
      speed={600}
      grabCursor
      spaceBetween={24}
      slidesPerView={1.1}
      className="medical-accommodation-swiper"
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
    >
      {medicalAccommodations.map((accommodation) => (
        <SwiperSlide key={accommodation.title} className="!h-auto">
          <AccommodationCard accommodation={accommodation} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export function MedicalAccommodation() {
  return (
    <section className="bg-teal-50 py-12 tablet:py-16 desktop-xl:py-[109px]">
      <Container>
        <div className="flex flex-col gap-8 desktop-xl:h-[446px] desktop-xl:gap-8">
          <div className="grid grid-cols-1 gap-8 desktop:grid-cols-[minmax(0,711px)_minmax(0,1005px)] desktop:gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="h-px w-[30px] bg-teal-600" />
                <span className="text-[15px] leading-[1.39] font-medium tracking-[1px] text-teal-600">
                  Where you&apos;ll stay
                </span>
              </div>
              <h2 className="text-[28px] font-semibold leading-[1.23] text-black tablet:text-[32px]">
                Accommodation
              </h2>
            </div>
            <div className="border-l-[3px] border-teal-600 pl-5">
              <p className="text-[18px] font-medium leading-[1.5] text-teal-600 tablet:text-[22px]">
                Accommodation needs vary depending on your treatment. We arrange the right option for you and anyone
                traveling with you.
              </p>
            </div>
          </div>

          {needsSlider ? (
            <AccommodationSlider />
          ) : (
            <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
              {medicalAccommodations.map((accommodation) => (
                <AccommodationCard key={accommodation.title} accommodation={accommodation} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
