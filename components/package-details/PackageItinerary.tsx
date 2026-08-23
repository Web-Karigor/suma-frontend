"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";

type ItineraryDay = {
  day: string;
  title: string;
  description: string;
  image: string;
};

type PackageItineraryProps = {
  itinerary: ItineraryDay[];
};

export function PackageItinerary({
  itinerary,
}: PackageItineraryProps) {
  const [imageIndexes, setImageIndexes] = useState<number[]>(
    itinerary.map(() => 0)
  );

  const handlePrevious = (cardIndex: number) => {
    if (itinerary.length <= 1) return;

    setImageIndexes((prev) => {
      const next = [...prev];
      next[cardIndex] =
        (next[cardIndex] - 1 + itinerary.length) % itinerary.length;

      return next;
    });
  };

  const handleNext = (cardIndex: number) => {
    if (itinerary.length <= 1) return;

    setImageIndexes((prev) => {
      const next = [...prev];
      next[cardIndex] =
        (next[cardIndex] + 1) % itinerary.length;

      return next;
    });
  };

  return (
    <section className="bg-white py-10 md:py-12 lg:py-14">
      <Container>
        <div className="mx-auto w-full max-w-[1740px]">
          {/* Section Title */}
          <h2 className="mb-6 text-[22px] font-bold leading-[1.2] text-hero md:mb-8 md:text-[24px]">
            Your itinerary
          </h2>

          {/* Itinerary Cards */}
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {itinerary.slice(0, 3).map((day, index) => {
              const imageIndex =
                imageIndexes[index] % itinerary.length;

              const currentImage =
                itinerary[imageIndex]?.image || day.image;

              return (
                <article
                  key={`${day.title}-${index}`}
                  className="overflow-hidden rounded-[24px] bg-[#FEFBF5] p-4 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-4"
                >
                  {/* Image */}
                  <div className="relative h-[220px] w-full overflow-hidden rounded-[10px] md:h-[250px] lg:h-[270px]">
                    <Image
                      src={currentImage}
                      alt={day.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />

                    {/* Image Navigation */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handlePrevious(index)}
                        aria-label="Previous image"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/85 text-[16px] text-neutral-700 backdrop-blur-sm transition hover:bg-white"
                      >
                        ←
                      </button>

                      <button
                        type="button"
                        onClick={() => handleNext(index)}
                        aria-label="Next image"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/85 text-[16px] text-neutral-700 backdrop-blur-sm transition hover:bg-white"
                      >
                        →
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-3">
                    {/* Title */}
                    <h3 className="min-h-[40px] text-[15px] font-semibold leading-[1.35] text-hero md:text-[16px]">
                      {day.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 min-h-[72px] text-[12px] leading-[1.7] text-neutral-600 md:text-[13px]">
                      {day.description}
                    </p>

                    {/* Duration */}
                    <div className="mt-4 flex items-center gap-2 text-[12px] text-neutral-500 md:text-[13px]">
                      <span className="text-[14px] text-primary">
                        ✓
                      </span>

                      <span>
                        Average activity duration : ~1 h
                      </span>
                    </div>

                    {/* Button */}
                    <button
                      type="button"
                      className="mt-5 flex h-[40px] items-center gap-6 rounded-[4px] bg-primary px-4 text-[12px] font-medium text-white transition-opacity hover:opacity-90"
                    >
                      <span>View on Map</span>

                      <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/70 text-[9px]">
                        ⊙
                      </span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}