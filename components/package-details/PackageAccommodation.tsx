"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  MapPinIcon,
  StarIcon,
  ClockIcon,
} from "@/components/icons";

type Hotel = {
  name: string;
  image: string;
  location: string;
  rating: number;
  distance: string;
};

type PackageAccommodationProps = {
  hotels: Hotel[];
};

export function PackageAccommodation({
  hotels,
}: PackageAccommodationProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!hotels?.length) return null;

  const hotel = hotels[activeIndex];

  const handlePrevious = () => {
    setActiveIndex(
      (prev) => (prev - 1 + hotels.length) % hotels.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % hotels.length);
  };

  return (
    <section className="bg-white py-10 md:py-12 lg:py-14">
      <Container>
        {/* Figma width */}
        <div className="bg-[#FCF4E0] mx-auto w-full max-w-[1740px] rounded-2xl p-4">
          <h2 className="mb-4 text-[22px] font-bold leading-[1.2] text-hero md:text-[24px]">
            Accommodation
          </h2>

          <div className="w-full rounded-[32px] bg-gold/100 ">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
              
              {/* Hotel Image */}
              <div className="relative h-[205px] w-full shrink-0 overflow-hidden rounded-[16px] sm:w-[280px] lg:h-[255px] lg:w-[430px]">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  priority
                  className="object-cover"
                />

                {/* Navigation */}
                {hotels.length > 1 && (
                  <div className="absolute bottom-3 left-3 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handlePrevious}
                      aria-label="Previous hotel"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[18px] text-neutral-700 transition hover:bg-white"
                    >
                      ←
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next hotel"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[18px] text-neutral-700 transition hover:bg-white"
                    >
                      →
                    </button>
                  </div>
                )}
              </div>

              {/* Hotel Information */}
              <div className="flex min-w-0 flex-1 flex-col justify-center">
                
                {/* Rating */}
                <div className="mb-2 flex items-center gap-1">
                  <StarIcon className="h-4 w-4 fill-current text-secondary-500" />

                  <span className="text-[14px] font-medium text-secondary-600">
                    {hotel.rating} Star
                  </span>
                </div>

                {/* Hotel Name */}
                <h3 className="mb-2 text-[16px] font-semibold leading-[1.4] text-hero md:text-[18px]">
                  {hotel.name}
                </h3>

                {/* Location */}
                <div className="mb-3 flex items-center gap-1.5 text-neutral-600">
                  <MapPinIcon className="h-[14px] w-[14px]" />

                  <span className="text-[13px]">
                    {hotel.location}
                  </span>
                </div>

                {/* Description */}
                <p className="mb-4 max-w-[620px] text-[13px] leading-[1.5] text-neutral-600">
                  {hotel.distance}
                </p>

                {/* Stay Info */}
                <div className="mb-3 flex items-center gap-2 text-[14px] text-secondary-700">
                  <ClockIcon className="h-[17px] w-[17px]" />

                  <span className="font-medium">
                    8 Nights Stay
                  </span>
                </div>

                {/* Private Car */}
                <div className="mb-4 flex items-center gap-2 text-[14px] text-secondary-700">
                  <span className="text-[17px]">🚘</span>

                  <span className="font-medium">
                    Private Car (Included)
                  </span>
                </div>

                <Button href="#" className="w-[237px] max-w-full">
                  Book Package Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}