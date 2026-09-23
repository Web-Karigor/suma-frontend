"use client";

import { CoverImage } from "@/components/ui/CoverImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@/components/ui/Container";

import "swiper/css";

type DestinationCard = {
  src: string;
  title?: string;
};

type MedicalDestinationsProps = {
  images: DestinationCard[];
};

const VISIBLE_COUNT = 5;

function StripImage({
  src,
  title,
  index,
}: DestinationCard & { index: number }) {
  const offset = index % 2 === 1;

  return (
    <div
      className={`
        relative
        h-[280px]
        w-[220px]
        min-w-0
        shrink-0
        overflow-hidden
        rounded-2xl

        tablet:h-[360px]
        tablet:w-[280px]

        xl:aspect-[332/419]
        xl:h-auto
        xl:w-full

        desktop-xl:h-[419px]
        desktop-xl:aspect-auto

        ${offset ? "xl:mt-[50px]" : "xl:mt-0"}
      `}
    >
      <CoverImage src={src} alt={title || ""} sizes="332px" className="object-cover" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#007B7A]/80 via-[#007B7A]/35 to-transparent"
      />
      {title ? (
        <p className="absolute inset-x-0 bottom-5 z-10 px-4 text-center text-[16px] leading-[1.4] font-medium text-white tablet:text-[14px] xl:px-[24px] xl:text-[18px]">
          {title}
        </p>
      ) : null}
    </div>
  );
}

function ImageStripSlider({ images }: { images: DestinationCard[] }) {
  return (
    <Swiper
      speed={600}
      grabCursor
      spaceBetween={22}
      slidesPerView="auto"
      className="medical-strip-swiper"
    >
      {images.map((item, index) => (
        <SwiperSlide
          key={`${item.src}-${index}`}
          className="
            !h-auto
            !w-[220px]
            tablet:!w-[280px]
            xl:!w-[332px]
          "
        >
          <StripImage src={item.src} title={item.title} index={index} />
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
        <div className="xl:hidden">
          <ImageStripSlider images={images} />
        </div>

        <div
          className="
            hidden
            xl:block
            desktop-xl:h-[469px]
          "
        >
          {needsSlider ? (
            <ImageStripSlider images={images} />
          ) : (
            <div
              className="
                grid
                grid-cols-5
                gap-[22px]
                desktop-xl:h-[469px]
              "
            >
              {images.slice(0, VISIBLE_COUNT).map((item, index) => (
                <StripImage
                  key={`${item.src}-${index}`}
                  src={item.src}
                  title={item.title}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
