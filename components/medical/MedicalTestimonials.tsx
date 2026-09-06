"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@/components/ui/Container";
import type { ServiceCountry } from "@/types/service-detail";

import "swiper/css";

const VISIBLE_COUNT = 5;

function CountryCard({ country }: { country: ServiceCountry }) {
  return (
    <article className="flex w-[240px] shrink-0 flex-col items-center rounded-2xl bg-white/55 px-4 py-6 tablet:w-full desktop-xl:h-[357px] desktop-xl:w-[328.8px]">
      <div className="relative size-[140px] overflow-hidden rounded-full tablet:size-[160px] desktop-xl:size-[200px]">
        <Image src={country.image} alt={country.name} fill sizes="200px" className="object-cover" />
      </div>
      <h3 className="mt-4 text-center text-[20px] leading-[1.5] font-semibold text-black">{country.name}</h3>
      <div className="my-3 h-px w-full bg-gray-200" />
      {country.knownFor ? (
        <p className="text-center text-[14px] leading-[1.5] text-neutral-700">
          <span className="font-semibold text-black">Known for: </span>
          {country.knownFor}
        </p>
      ) : null}
    </article>
  );
}

function CountriesSlider({
  countries,
  mobileOnly = false,
}: {
  countries: ServiceCountry[];
  mobileOnly?: boolean;
}) {
  return (
    <Swiper
      speed={600}
      grabCursor
      spaceBetween={24}
      slidesPerView="auto"
      className="medical-countries-swiper"
      breakpoints={
        mobileOnly
          ? undefined
          : {
              768: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: VISIBLE_COUNT, spaceBetween: 24 },
            }
      }
    >
      {countries.map((country) => (
        <SwiperSlide
          key={country.name}
          className={`!h-auto !w-[240px] ${mobileOnly ? "" : "tablet:!w-auto"}`}
        >
          <CountryCard country={country} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export function MedicalTestimonials({
  title = "Countries available",
  countries,
}: {
  title?: string;
  countries: ServiceCountry[];
}) {
  if (!countries.length) return null;

  const needsSlider = countries.length > VISIBLE_COUNT;

  return (
    <section className="bg-teal-50 py-12 tablet:py-16 desktop-xl:py-[127px]">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 gap-8 desktop:grid-cols-[minmax(0,711px)_minmax(0,1005px)] desktop:gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="h-px w-[30px] bg-teal-600" />
                <span className="text-[15px] leading-[1.39] font-medium tracking-[1px] text-teal-600">
                  Destinations
                </span>
              </div>
              <h2 className="text-[28px] font-semibold leading-[1.23] text-black tablet:text-[32px]">
                {title}
              </h2>
            </div>
          </div>

          {needsSlider ? (
            <div>
              <CountriesSlider countries={countries} />
            </div>
          ) : (
            <>
              <div className="tablet:hidden">
                <CountriesSlider countries={countries} mobileOnly />
              </div>
              <div className="hidden gap-6 tablet:grid tablet:grid-cols-3 tablet:gap-6 desktop:grid-cols-5">
                {countries.map((country) => (
                  <CountryCard key={country.name} country={country} />
                ))}
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
