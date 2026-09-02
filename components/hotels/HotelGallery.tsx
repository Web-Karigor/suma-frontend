"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { hotelGallery } from "@/lib/hotels-data";

import "swiper/css";

const VISIBLE_COUNT = 5;
const THUMB_GAP = 16;

export function HotelGallery({ cover }: { cover: string }) {
  const images = [cover, ...hotelGallery.filter((src) => src !== cover)].slice(0, 7);
  const [active, setActive] = useState(0);
  const needsThumbnailSlider = images.length > VISIBLE_COUNT;

  const thumbnailButtonClass = (index: number) =>
    `relative aspect-[247/175] w-full overflow-hidden rounded-[12px] ${active === index ? "ring-2 ring-primary" : ""}`;

  const thumbnails = images.map((src, index) => (
    <button
      key={`${src}-${index}`}
      type="button"
      onClick={() => setActive(index)}
      className={thumbnailButtonClass(index)}
    >
      <Image src={src} alt="" fill className="object-cover" sizes="248px" />
    </button>
  ));

  return (
    <div className="w-full">
      <div className="grid gap-4 desktop:grid-cols-[857fr_428fr]">
        <button
          type="button"
          className="relative aspect-[857/629] w-full cursor-pointer overflow-hidden rounded-[12px]"
          onClick={() => setActive(0)}
        >
          <Image
            src={images[active] ?? images[0]}
            alt="Hotel gallery"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 857px"
          />
        </button>
        <div className="hidden desktop:grid desktop:grid-rows-2 desktop:gap-4">
          {images.slice(1, 3).map((src, index) => (
            <button
              key={src}
              type="button"
              className="relative min-h-0 cursor-pointer overflow-hidden rounded-[12px]"
              onClick={() => setActive(index + 1)}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="428px" />
            </button>
          ))}
        </div>
      </div>

      {needsThumbnailSlider ? (
        <Swiper
          speed={600}
          grabCursor
          spaceBetween={THUMB_GAP}
          slidesPerView={3}
          className="hotel-thumbs-swiper mt-4"
          breakpoints={{
            768: {
              slidesPerView: VISIBLE_COUNT,
              spaceBetween: THUMB_GAP,
            },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={`${src}-${index}`} className="!h-auto">
              <button
                type="button"
                onClick={() => setActive(index)}
                className={thumbnailButtonClass(index)}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="248px" />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="mt-4 grid grid-cols-3 gap-4 tablet:grid-cols-5">{thumbnails}</div>
      )}
    </div>
  );
}
