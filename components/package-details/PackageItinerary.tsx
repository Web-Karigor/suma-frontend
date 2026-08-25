"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { CheckIcon, MapPinIcon } from "@/components/icons";

type ItineraryDay = {
  day?: string;
  title: string;
  description: string;
  image: string;
  duration?: string;
  mapUrl?: string;
};

type PackageItineraryProps = {
  itinerary: ItineraryDay[];
};

export function PackageItinerary({ itinerary }: PackageItineraryProps) {
  const [imageIndexes, setImageIndexes] = useState<number[]>(() => itinerary.map(() => 0));

  return (
    <section className="bg-gold-50 py-10 tablet:py-12 desktop-xl:py-14">
      <Container className="desktop-xl:!px-0">
        <h2 className="mb-6 text-[22px] leading-[1.2] font-semibold text-hero tablet:mb-8 tablet:text-[24px]">
          Your itinerary
        </h2>

        <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 tablet:gap-5 desktop:grid-cols-3 desktop:gap-6">
          {itinerary.slice(0, 3).map((place, index) => {
            const imageIndex = imageIndexes[index] % itinerary.length;
            const currentImage = itinerary[imageIndex]?.image || place.image;

            return (
              <article
                key={`${place.title}-${index}`}
                className="flex h-full flex-col gap-3 rounded-[32px] bg-gold-50 p-6 shadow-[0_2px_6px_rgb(0_0_0/9%)]"
              >
                <div className="relative h-[240px] w-full overflow-hidden rounded-[8px] tablet:h-[300px] desktop:h-[377px]">
                  <Image
                    src={currentImage}
                    alt={place.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1920px) 516px, (min-width: 1280px) 33vw, 100vw"
                  />
                  {itinerary.length > 1 ? (
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setImageIndexes((prev) => {
                            const next = [...prev];
                            next[index] = (next[index] - 1 + itinerary.length) % itinerary.length;
                            return next;
                          })
                        }
                        aria-label="Previous image"
                        className="flex size-8 items-center justify-center rounded-full bg-white/85 text-neutral-700 backdrop-blur-sm transition hover:bg-white"
                      >
                        ←
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setImageIndexes((prev) => {
                            const next = [...prev];
                            next[index] = (next[index] + 1) % itinerary.length;
                            return next;
                          })
                        }
                        aria-label="Next image"
                        className="flex size-8 items-center justify-center rounded-full bg-white/85 text-neutral-700 backdrop-blur-sm transition hover:bg-white"
                      >
                        →
                      </button>
                    </div>
                  ) : null}
                </div>

                <h3 className="text-[16px] leading-[1.35] font-semibold text-hero tablet:text-[18px]">
                  {place.title}
                </h3>
                <p className="flex-1 text-[13px] leading-[1.6] text-neutral-600">{place.description}</p>
                <div className="flex items-center gap-1.5 text-[13px] text-neutral-600">
                  <CheckIcon className="size-3.5 shrink-0 text-success-600" />
                  <span>Average activity duration: {place.duration ?? "~1 h"}</span>
                </div>
                <a
                  href={place.mapUrl ?? `https://www.google.com/maps/search/${encodeURIComponent(place.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-[40px] w-fit items-center gap-3 rounded-button bg-primary px-4 text-[13px] font-medium text-white transition-opacity hover:opacity-90"
                >
                  View on Map
                  <MapPinIcon className="size-4" />
                </a>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
