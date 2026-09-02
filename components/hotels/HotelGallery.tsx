"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { HotelGalleryImage } from "@/types/hotel";

import "swiper/css";

const VISIBLE_COUNT = 5;
const THUMB_GAP = 16;

export function HotelGallery({
  images,
  title,
}: {
  images: HotelGalleryImage[];
  title: string;
}) {
  const [active, setActive] = useState(0);
  const needsThumbnailSlider = images.length > VISIBLE_COUNT;
  const activeImage = images[active] ?? images[0];

  const thumbnailButtonClass = (index: number) =>
    `relative aspect-[247/175] w-full overflow-hidden rounded-[12px] ${active === index ? "ring-2 ring-primary" : ""}`;

  if (images.length === 0) return null;

  return (
    <div className="w-full">
      <div className="grid gap-4 desktop:grid-cols-[857fr_428fr]">
        <button
          type="button"
          className="relative aspect-[857/629] w-full cursor-pointer overflow-hidden rounded-[12px]"
          onClick={() => setActive(0)}
        >
          <Image
            src={activeImage.url}
            alt={activeImage.alt || title}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 857px"
          />
        </button>
        <div className="hidden desktop:grid desktop:grid-rows-2 desktop:gap-4">
          {images.slice(1, 3).map((image, index) => (
            <button
              key={image.url}
              type="button"
              className="relative min-h-0 cursor-pointer overflow-hidden rounded-[12px]"
              onClick={() => setActive(index + 1)}
            >
              <Image src={image.url} alt={image.alt} fill className="object-cover" sizes="428px" />
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
          {images.map((image, index) => (
            <SwiperSlide key={`${image.url}-${index}`} className="!h-auto">
              <button
                type="button"
                onClick={() => setActive(index)}
                className={thumbnailButtonClass(index)}
              >
                <Image src={image.url} alt={image.alt} fill className="object-cover" sizes="248px" />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="mt-4 grid grid-cols-3 gap-4 tablet:grid-cols-5">
          {images.map((image, index) => (
            <button
              key={`${image.url}-${index}`}
              type="button"
              onClick={() => setActive(index)}
              className={thumbnailButtonClass(index)}
            >
              <Image src={image.url} alt={image.alt} fill className="object-cover" sizes="248px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
