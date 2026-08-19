"use client";

import { useState } from "react";
import Image from "next/image";
import { hotelGallery } from "@/lib/hotels-data";

export function HotelGallery({ cover }: { cover: string }) {
  const images = [cover, ...hotelGallery.filter((src) => src !== cover)].slice(0, 7);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full">
      <div className="grid gap-4 desktop:grid-cols-[857fr_428fr]">
        <button
          type="button"
          className="relative aspect-[857/629] w-full cursor-pointer overflow-hidden rounded-[12px]"
          onClick={() => setActive(0)}
        >
          <Image src={images[active] ?? images[0]} alt="Hotel gallery" fill className="object-cover" sizes="(max-width: 1280px) 100vw, 857px" />
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
      <div className="mt-4 grid grid-cols-3 gap-4 tablet:grid-cols-5">
        {images.slice(0, 5).map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(index)}
            className={`relative aspect-[247/175] overflow-hidden rounded-[12px] ${active === index ? "ring-2 ring-primary" : ""}`}
          >
            <Image src={src} alt="" fill className="object-cover" sizes="248px" />
          </button>
        ))}
      </div>
    </div>
  );
}
