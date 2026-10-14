"use client";

import { useState } from "react";
import Link from "next/link";
import { StarIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { Check } from "lucide-react";
import type { HotelCard } from "@/types/hotel";

function formatPrice(value: number) {
  return value.toLocaleString("en-BD");
}

function PriceText({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const digits = String(Math.round(value)).length;
  const sizeClass =
    digits >= 6
      ? "text-[20px] md:text-2xl lg:text-[28px] xl:text-[28px] xl:max-[1439px]:text-[22px] 2xl:text-[34px]"
      : digits >= 5
        ? "text-[22px] md:text-2xl lg:text-[30px] xl:text-[30px] xl:max-[1439px]:text-[24px] 2xl:text-[36px]"
        : "text-[22px] md:text-2xl lg:text-3xl xl:text-3xl xl:max-[1439px]:text-[26px] 2xl:text-[40px]";

  return (
    <p
      className={`inline-flex items-baseline gap-1 whitespace-nowrap font-semibold text-primary ${sizeClass} ${className ?? ""}`}
    >
      <span>৳</span>
      <span>{formatPrice(value)}</span>
    </p>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

export function HotelCard({ hotel }: { hotel: HotelCard }) {
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  const hasDiscount =
    hotel.discountPrice !== null && hotel.discountPrice < hotel.mainPrice;

  const displayedAmenities = showAllAmenities
    ? hotel.amenities
    : hotel.amenities?.slice(0, 5) || [];

  return (
    <article className="relative flex w-full min-w-0 flex-col xl:flex-row xl:items-center">
      {/* Hotel Image */}
      <Link
        href={hotel.href}
        aria-label={`View ${hotel.title}`}
        className="
          relative z-10 h-[220px] w-full shrink-0 overflow-hidden rounded-[16px]
          shadow-[4px_0_12px_rgb(0_0_0/10%)]

          sm:h-[240px]
          md:h-[280px]
          lg:h-[300px]

          xl:h-[290px] xl:w-[390px]
          xl:max-[1439px]:h-[240px] xl:max-[1439px]:w-[260px]
          2xl:h-[300px] 2xl:w-[409px]
        "
      >
        <CoverImage
          src={hotel.image}
          alt={hotel.imageAlt}
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 1279px) 100vw, (max-width: 1439px) 260px, (max-width: 1535px) 390px, 409px"
        />
      </Link>

      {/* Hotel Details */}
      <div
        className="
    relative z-0
    -mt-5
    mx-2
    w-[calc(100%-1rem)]
    self-center
    flex min-h-0 min-w-0
    flex-col
    items-center
    rounded-[24px]
    bg-gray-50
    px-4 py-5
    text-center

    sm:-mt-5
    sm:mx-3
    sm:w-[calc(100%-1.5rem)]

    md:-mt-5
    md:mx-4
    md:w-[calc(100%-2rem)]
    md:items-stretch
    md:px-6
    md:text-left

    lg:-mt-5
    lg:mx-5
    lg:w-[calc(100%-2.5rem)]
    lg:px-7

    xl:mt-0
    xl:mx-0
    xl:w-full
    xl:-ml-[18px]
    xl:min-h-[252px]
    xl:flex-row
    xl:items-stretch
    xl:self-auto
    xl:pl-[45px]
    xl:max-[1439px]:-ml-[14px]
    xl:max-[1439px]:min-h-[220px]
    xl:max-[1439px]:pl-[28px]
    xl:max-[1439px]:pr-3

    2xl:-ml-[21px]
    2xl:pl-[53px]
  "
      >
        {/* Main Content */}
        <div
          className="
    flex min-w-0 flex-1 flex-col
    items-center
    pt-3

    md:items-stretch
    md:pt-4

    lg:pt-5

    xl:pt-0
    xl:pr-6
    xl:max-[1439px]:pr-3
    2xl:pr-8
  "
        >
          {/* Title + Rating */}
          <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4 xl:max-[1439px]:flex-col xl:max-[1439px]:items-start xl:max-[1439px]:gap-1.5">
            <h3
              className="
                min-w-0 break-words
                text-[18px] font-semibold leading-tight text-[#0A0C0C]
                md:text-[19px]
                lg:text-xl
                xl:text-[19px]
                xl:max-[1439px]:text-[17px]
                2xl:text-xl
              "
            >
              <Link
                href={hotel.href}
                className="transition-colors hover:text-primary"
              >
                {hotel.title}
              </Link>
            </h3>

            <div className="flex w-full shrink-0 items-center justify-center gap-1.5 md:w-auto md:justify-start">
              <span className="flex items-center gap-0.5 text-gold-500">
                {Array.from({ length: hotel.rating }).map((_, i) => (
                  <StarIcon key={i} className="size-4.5" />
                ))}
              </span>

              <span className="text-xs text-gray-500 md:text-sm">
                ({hotel.rating.toFixed(1)})
              </span>
            </div>
          </div>

          {/* Hotel Meta */}
          <div className="mt-3 flex min-w-0 flex-wrap items-center gap-x-2.5 gap-y-2 text-xs text-gray-500 md:text-sm">
            <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-[#505050] md:text-base">
              <span>▱</span>
              <span>Suite</span>
            </span>

            <span className="text-gray-300">|</span>

            {hotel.address ? (
              <div className="flex min-w-0 items-center gap-1.5 text-[12px] text-gray-600 md:text-sm">
                <LocationIcon className="size-3.5 shrink-0" />
                <span className="min-w-0 truncate">{hotel.address}</span>
              </div>
            ) : null}
          </div>

          {/* Amenities */}
          {hotel.amenities && hotel.amenities.length > 0 ? (
            <div className="mt-5 md:mt-6">
              <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 md:gap-x-8 lg:grid-cols-3 xl:max-[1439px]:grid-cols-2 xl:max-[1439px]:gap-x-4">
                {displayedAmenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="
                      flex min-w-0 items-center gap-2
                      text-sm text-gray-400
                      lg:text-[15px]
                      xl:text-[14px]
                      xl:max-[1439px]:text-[13px]
                      2xl:text-[15px]
                    "
                  >
                    <Check className="size-4 shrink-0 text-gray-400" />

                    <span className="min-w-0 truncate">{amenity}</span>
                  </div>
                ))}

                {hotel.amenities.length > 5 && !showAllAmenities ? (
                  <button
                    type="button"
                    onClick={() => setShowAllAmenities(true)}
                    className="
                      flex min-w-0 items-center gap-2
                      text-sm text-primary
                      transition-colors
                      hover:text-primary/80
                      lg:text-[15px]
                      xl:text-[14px]
                      xl:max-[1439px]:text-[13px]
                      2xl:text-[15px]
                    "
                  >
                    <Check className="size-4 shrink-0 text-gray-400" />

                    <span className="font-medium">
                      {hotel.amenities.length - 5} more
                    </span>
                  </button>
                ) : null}
              </div>
            </div>
          ) : null}

          {/* Highlighted Amenities */}
          {hotel.highlightedAmenities &&
          hotel.highlightedAmenities.length > 0 ? (
            <div className="mt-5 border-t border-gray-200 pt-4">
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-start md:gap-x-6">
                {hotel.highlightedAmenities.map((amenity, idx) => (
                  <span
                    key={idx}
                    className="
                      inline-flex items-center gap-1.5
                      text-sm font-medium text-success
                      lg:text-[15px]
                      xl:text-[14px]
                      2xl:text-[15px]
                    "
                  >
                    <Check className="size-4 shrink-0 text-success" />
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        {/* Price + Details */}
        <div
          className="
            mt-5 flex w-full shrink-0 flex-col gap-4
            border-t border-gray-200 pt-4

            sm:flex-row
            sm:items-end
            sm:justify-between

            md:mt-6

            xl:mt-0
            xl:ml-5
            xl:w-[190px]
            xl:flex-col
            xl:items-end
            xl:justify-between
            xl:border-l
            xl:border-t-0
            xl:pt-0
            xl:pl-6
            xl:max-[1439px]:ml-3
            xl:max-[1439px]:w-[150px]
            xl:max-[1439px]:pl-4

            2xl:ml-6
            2xl:w-[210px]
            2xl:pl-8
          "
        >
          <div className="space-y-2 sm:space-y-3 xl:text-right">
            <p className="text-[12px] text-gray-500 md:text-sm">Starts From</p>

            {hasDiscount ? (
              <div className="space-y-1">
                <PriceText value={hotel.discountPrice!} />
                <p className="inline-flex items-baseline gap-1 whitespace-nowrap text-[15px] font-medium text-gray-400 line-through md:text-base lg:text-lg">
                  <span>৳</span>
                  <span>{formatPrice(hotel.mainPrice)}</span>
                </p>
              </div>
            ) : (
              <PriceText value={hotel.mainPrice} />
            )}

            <p className="text-[12px] text-[#505050] md:text-sm">
              Per Night/Room
            </p>
          </div>

          <Button
            href={hotel.href}
            className="
    mx-auto
    h-11
    w-fit
    gap-6
    px-4
    text-sm
    md:text-base
    xl:mx-0
  "
          >
            Details
          </Button>
        </div>
      </div>
    </article>
  );
}
