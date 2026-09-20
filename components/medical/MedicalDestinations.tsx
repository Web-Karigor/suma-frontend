"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@/components/ui/Container";

import "swiper/css";

type MedicalDestinationsProps = {
  images: string[];
};

const VISIBLE_COUNT = 5;

function StripImage({ src, index }: { src: string; index: number }) {
  const offset = index % 2 === 1;

  return (
    <div
      className={`
        relative
        h-[280px]
        w-[220px]
        shrink-0
        overflow-hidden
        rounded-2xl

        tablet:h-[360px]
        tablet:w-[280px]

        xl:h-[419px]
        xl:w-[332px]

        ${offset ? "xl:mt-[50px]" : "xl:mt-0"}
      `}
    >
      <Image src={src} alt="" fill sizes="332px" className="object-cover" />
    </div>
  );
}

function ImageStripSlider({ images }: { images: string[] }) {
  return (
    <Swiper
      speed={600}
      grabCursor
      spaceBetween={22}
      slidesPerView="auto"
      className="medical-strip-swiper"
    >
      {images.map((src, index) => (
        <SwiperSlide
          key={`${src}-${index}`}
          className="
            !h-auto
            !w-[220px]
            tablet:!w-[280px]
            xl:!w-[332px]
          "
        >
          <StripImage src={src} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export function MedicalDestinations({ images }: MedicalDestinationsProps) {
  if (!images.length) return null;

  const needsSlider = images.length > VISIBLE_COUNT;

  return (
    <section
      className="
        overflow-x-hidden
        bg-teal-50

        py-12

        tablet:py-16

        xl:pt-[100px]
        xl:pb-[100px]
      "
    >
      <Container>
        {/* 
          Mobile + Tablet
          Always slider
        */}

        <div className="xl:hidden">
          <ImageStripSlider images={images} />
        </div>

        {/* 
          Desktop
        */}

        <div
          className="
            hidden
            xl:block
            xl:h-[469px]
          "
        >
          {needsSlider ? (
            // More than 5 images => slider

            <ImageStripSlider images={images} />
          ) : (
            // 5 or less => grid

            <div
              className="
                grid
                grid-cols-5
                gap-[22px]
                xl:h-[469px]
              "
            >
              {images.slice(0, VISIBLE_COUNT).map((src, index) => (
                <StripImage key={`${src}-${index}`} src={src} index={index} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
