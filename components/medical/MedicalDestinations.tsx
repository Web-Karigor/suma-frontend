"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@/components/ui/Container";
import { medicalImageStrip } from "@/lib/medical-data";

import "swiper/css";

const VISIBLE_COUNT = 5;
const needsSlider = medicalImageStrip.length > VISIBLE_COUNT;

function StripImage({ src, index }: { src: string; index: number }) {
  const offset = index % 2 === 1;

  return (
    <div
      className={`relative h-[280px] w-[220px] shrink-0 overflow-hidden rounded-2xl tablet:h-[360px] tablet:w-[280px] desktop-xl:h-[419px] desktop-xl:w-full desktop-xl:max-w-[332px] ${
        offset ? "desktop-xl:mt-[50px]" : "desktop-xl:mt-0"
      }`}
    >
      <Image src={src} alt="" fill sizes="332px" className="object-cover" />
    </div>
  );
}

function ImageStripSlider() {
  return (
    <Swiper
      speed={600}
      grabCursor
      spaceBetween={22}
      slidesPerView="auto"
      className="medical-strip-swiper"
      breakpoints={
        needsSlider
          ? {
              1920: {
                slidesPerView: VISIBLE_COUNT,
                spaceBetween: 22,
              },
            }
          : undefined
      }
    >
      {medicalImageStrip.map((src, index) => (
        <SwiperSlide
          key={`${src}-${index}`}
          className={`!h-auto ${needsSlider ? "desktop-xl:!w-auto" : "!w-[220px] tablet:!w-[280px]"}`}
        >
          <StripImage src={src} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export function MedicalDestinations() {
  return (
    <section className="overflow-x-hidden bg-teal-50 py-12 tablet:py-16 desktop-xl:pt-[100px] desktop-xl:pb-[100px]">
      <Container>
        {needsSlider ? (
          <div className="desktop-xl:h-[469px]">
            <ImageStripSlider />
          </div>
        ) : (
          <>
            <div className="desktop-xl:hidden">
              <ImageStripSlider />
            </div>
            <div className="hidden gap-[22px] desktop-xl:grid desktop-xl:h-[469px] desktop-xl:grid-cols-5 desktop-xl:gap-[22px]">
              {medicalImageStrip.map((src, index) => (
                <StripImage key={`${src}-${index}`} src={src} index={index} />
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
