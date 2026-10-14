"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

type PackageGalleryProps = {
  images: string[];
};

/**
 * Focal crop only (no scale). Tall landmarks stay top-anchored; people shots
 * can bias slightly lower when the URL includes subject cues.
 */
function galleryObjectPositionClass(src: string): string {
  const key = src.toLowerCase();
  if (/crowd|group|family|people|pilgrim/.test(key)) {
    return "object-[center_30%]";
  }
  return "object-top";
}

export function PackageGallery({ images }: PackageGalleryProps) {
  const galleryImages = images.filter(Boolean).slice(0, 6);
  if (!galleryImages.length) return null;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const inactiveCount = Math.max(galleryImages.length - 1, 1);
  const inactiveWidth = `calc((42% - ${inactiveCount - 1} * var(--gallery-gap)) / ${inactiveCount})`;

  useEffect(() => {
    if (isHovered || galleryImages.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [galleryImages.length, isHovered]);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const activeElement = slider.children[activeIndex] as
      | HTMLElement
      | undefined;

    if (activeElement) {
      const sliderCenter = slider.scrollLeft + slider.clientWidth / 2;

      const itemCenter =
        activeElement.offsetLeft + activeElement.offsetWidth / 2;

      slider.scrollTo({
        left: itemCenter - sliderCenter,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <section className="w-full overflow-hidden bg-gold-50 py-8 md:py-12 lg:py-14">
      <Container className="desktop-xl:!px-0">
        <div className="w-full">
          <div
            ref={sliderRef}
            className="flex w-full items-center gap-2 overflow-hidden py-2 [--gallery-gap:0.5rem] md:gap-3 md:[--gallery-gap:0.75rem]"
            style={{
              scrollSnapType: "x mandatory",
            }}
          >
            {galleryImages.map((image, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onMouseEnter={() => {
                    setIsHovered(true);
                    setActiveIndex(index);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                  }}
                  onClick={() => {
                    setActiveIndex(index);
                  }}
                  className="relative h-[300px] shrink-0 overflow-hidden rounded-2xl transition-all duration-700 ease-in-out focus:outline-none desktop:h-[619px]! desktop-xl:h-[619px]!"
                  style={{
                    width: isActive ? "58%" : inactiveWidth,
                    scrollSnapAlign: "center",
                  }}
                >
                  {/*
                    Height-locked image: card width animates; image render scale
                    stays tied to card height so object-cover cannot zoom during expand.
                    Horizontal overflow is clipped by the card (cropping OK).
                  */}
                  <span className="pointer-events-none absolute inset-0 flex justify-center overflow-hidden">
                    <Image
                      src={image}
                      alt={`Package gallery ${index + 1}`}
                      width={1600}
                      height={1000}
                      sizes="(min-width: 768px) 58vw, 90vw"
                      className={`h-full w-auto max-w-none object-cover ${galleryObjectPositionClass(image)}`}
                    />
                  </span>

                  <div
                    className={`
                      absolute inset-0 transition-opacity duration-500
                      ${isActive ? "bg-transparent" : "bg-black/10"}
                    `}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
