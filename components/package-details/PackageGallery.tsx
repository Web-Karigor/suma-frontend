"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";

type PackageGalleryProps = {
  images: string[];
};

export function PackageGallery({ images }: PackageGalleryProps) {
  const galleryImages = images.slice(0, 6);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

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
    <section className="w-full overflow-hidden bg-white py-8 md:py-12 lg:py-14">
      <Container>
        {/* Full Container Width */}
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
                  className={`
                    relative shrink-0 overflow-hidden
                    rounded-2xl
                    transition-all duration-700 ease-in-out
                    focus:outline-none
                    h-[300px] md:h-[380px]
                  `}
                  style={{
                    width: isActive
                      ? "58%"
                      : "calc((42% - 4 * var(--gallery-gap)) / 5)",
                    scrollSnapAlign: "center",
                  }}
                >
                  <Image
                    src={image}
                    alt={`Package gallery ${index + 1}`}
                    fill
                    sizes="(min-width: 768px) 58vw, 90vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />

                  <div
                    className={`
                      absolute inset-0 transition-all duration-500
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
