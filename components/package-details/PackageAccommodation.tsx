"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ClockIcon, MapPinIcon, StarIcon } from "@/components/icons";

type Hotel = {
  name: string;
  image: string;
  location: string;
  rating: number;
  description: string;
  nightsStay?: string;
  privateCar?: string;
};

type PackageAccommodationProps = {
  hotels: Hotel[];
};

export function PackageAccommodation({ hotels }: PackageAccommodationProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!hotels?.length) return null;

  const hotel = hotels[activeIndex];

  return (
    <section className="bg-gold-50 py-10 tablet:py-12 desktop-xl:py-14">
      <Container className="desktop-xl:!px-0">
        <div className="w-full rounded-[24px] bg-gold-100 p-4 tablet:p-5 desktop-xl:rounded-[32px]">
          <h2 className="mb-4 text-[22px] leading-[1.2] font-semibold text-hero tablet:text-[24px]">
            Accommodation
          </h2>

          <div className="flex flex-col gap-6 desktop:flex-row desktop:items-center desktop:gap-8">
            <div className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-[16px] tablet:h-[255px] desktop:w-[430px] desktop-xl:h-[280px] desktop-xl:w-[480px]">
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                className="object-cover"
                sizes="480px"
              />
              {hotels.length > 1 ? (
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((prev) => (prev - 1 + hotels.length) % hotels.length)
                    }
                    aria-label="Previous hotel"
                    className="flex size-8 items-center justify-center rounded-full bg-white/90 text-neutral-700 transition hover:bg-white"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((prev) => (prev + 1) % hotels.length)}
                    aria-label="Next hotel"
                    className="flex size-8 items-center justify-center rounded-full bg-white/90 text-neutral-700 transition hover:bg-white"
                  >
                    →
                  </button>
                </div>
              ) : null}
            </div>

            <div className="flex min-w-0 flex-1 flex-col">
              <div className="mb-2 flex items-center gap-1">
                <StarIcon className="size-4 text-gold-500" />
                <span className="text-sm font-medium text-gold-700">{hotel.rating} Star</span>
              </div>

              <h3 className="text-[18px] leading-[1.35] font-semibold text-hero tablet:text-[22px]">
                {hotel.name}
              </h3>

              <div className="mt-2 flex items-center gap-1.5 text-neutral-600">
                <MapPinIcon className="size-3.5 shrink-0" />
                <span className="text-[13px]">{hotel.location}</span>
              </div>

              <p className="mt-3 max-w-[720px] text-[13px] leading-[1.55] text-neutral-600 tablet:text-sm">
                {hotel.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-gold-800">
                {hotel.nightsStay ? (
                  <span className="inline-flex items-center gap-2">
                    <ClockIcon className="size-4" />
                    {hotel.nightsStay}
                  </span>
                ) : null}
                {hotel.privateCar ? (
                  <span className="inline-flex items-center gap-2">{hotel.privateCar}</span>
                ) : null}
              </div>

              <Button href="#booking" className="mt-5 w-[237px] max-w-full">
                Book Package Now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
