"use client";

import { CoverImage } from "@/components/ui/CoverImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@/components/ui/Container";
import type { ServiceCountry } from "@/types/service-detail";

import "swiper/css";

function CountryCard({ country }: { country: ServiceCountry }) {
  return (
    <article className="flex h-full w-full flex-col items-center rounded-2xl bg-[#FEFEFCA3] px-4 py-6 desktop-xl:min-h-[357px]">
      <div
        className="
          relative
          aspect-square
          size-[140px]
          tablet:size-[160px]
          desktop-xl:size-[200px]
          overflow-hidden
          rounded-full
          shrink-0
        "
      >
        <CoverImage
          src={country.image}
          alt={country.name}
          sizes="200px"
          className="object-cover rounded-full"
        />
      </div>
      <h3 className="mt-4 text-center text-[20px] leading-[1.5] font-semibold text-[#000000]">
        {country.name}
      </h3>
      <div className="my-3 h-px w-full bg-gray-200" />
      {country.knownFor ? (
        <p className="text-center text-[14px] leading-[1.5] text-neutral-700 line-clamp-2">
          <span className="font-semibold text-[#0A0C0C]">Known for: </span>
          {country.knownFor}
        </p>
      ) : null}
    </article>
  );
}

function CountriesGrid({
  countries,
  className,
}: {
  countries: ServiceCountry[];
  className: string;
}) {
  return (
    <div className={className}>
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} />
      ))}
    </div>
  );
}

function CountriesSlider({
  countries,
  breakpoints,
  slidesPerView = 1.25,
  className,
}: {
  countries: ServiceCountry[];
  slidesPerView?: number;
  breakpoints?: Record<
    number,
    { slidesPerView: number; spaceBetween?: number }
  >;
  className?: string;
}) {
  return (
    <div className={className}>
      <Swiper
        speed={600}
        grabCursor
        watchOverflow
        spaceBetween={24}
        slidesPerView={slidesPerView}
        breakpoints={breakpoints}
        className="medical-countries-swiper"
      >
        {countries.map((country) => (
          <SwiperSlide key={country.name} className="!h-auto">
            <CountryCard country={country} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
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

  const count = countries.length;

  return (
    <section className="py-12 tablet:py-16 desktop-xl:py-[127px]">
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

          {/* mobile + md: always slider */}
          <CountriesSlider
            className="lg:hidden"
            countries={countries}
            slidesPerView={1.25}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
            }}
          />

          {/* lg-s / lg-m: 3 ta — >3 hole slider */}
          {count > 3 ? (
            <CountriesSlider
              className="hidden lg:block xl:hidden"
              countries={countries}
              slidesPerView={3}
            />
          ) : (
            <CountriesGrid
              countries={countries}
              className="hidden gap-6 lg:grid lg:grid-cols-3 xl:hidden"
            />
          )}

          {/* xl + 2xl (desktop): 5 ta — >5 hole slider, 5 ba kom hole grid */}
          {count > 5 ? (
            <CountriesSlider
              className="hidden xl:block"
              countries={countries}
              slidesPerView={4}
              breakpoints={{
                1280: { slidesPerView: 4, spaceBetween: 24 },
                1536: { slidesPerView: 5, spaceBetween: 24 },
              }}
            />
          ) : (
            <CountriesGrid
              countries={countries}
              className="hidden gap-6 xl:grid xl:grid-cols-5"
            />
          )}
        </div>
      </Container>
    </section>
  );
}
