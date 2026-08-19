import Image from "next/image";
import { BedIcon, CheckIcon, ChevronDownIcon, PinIcon, StarIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import type { HotelListing } from "@/lib/hotels-data";

function formatPrice(value: number) {
  return `৳ ${value.toLocaleString("en-BD")}`;
}

export function HotelCard({ hotel }: { hotel: HotelListing }) {
  return (
    <article className="relative flex flex-col tablet:flex-row tablet:items-center">
      <div className="relative z-10 h-[220px] w-full shrink-0 overflow-hidden rounded-[16px] shadow-[4px_0_12px_rgb(0_0_0/10%)] tablet:h-[300px] tablet:w-[409px]">
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 409px"
        />
      </div>

      <div className="relative z-0 -mt-8 flex min-h-0 min-w-0 flex-1 flex-col rounded-[24px] bg-gray-50 py-5 pr-6 pl-5 tablet:-mt-0 tablet:-ml-[21px] tablet:h-[252px] tablet:flex-row tablet:items-stretch tablet:pl-[53px]">
        <div className="flex min-w-0 flex-1 flex-col tablet:pr-8">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h3 className="text-[18px] font-semibold text-black">{hotel.name}</h3>
            <div className="flex shrink-0 items-center gap-1.5">
              <span className="flex text-gold-500">
                {Array.from({ length: hotel.rating }).map((_, i) => (
                  <StarIcon key={i} className="size-3.5" />
                ))}
              </span>
              <span className="text-sm text-gray-600">({hotel.score})</span>
            </div>
          </div>

          <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-gray-500">
            <span className="inline-flex items-center gap-1.5">
              <BedIcon className="size-3.5" />
              {hotel.roomType}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <PinIcon className="size-3.5" />
              {hotel.location.replace(", ", " • ")}
            </span>
          </p>

          <ul className="mt-3 grid grid-cols-1 gap-x-4 gap-y-1.5 text-[13px] text-neutral-700 tablet:grid-cols-2">
            {hotel.amenities.map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <CheckIcon className="size-3.5 shrink-0 text-gray-400" />
                {item}
              </li>
            ))}
          </ul>
          {hotel.extraCount > 0 ? (
            <p className="mt-1 inline-flex items-center gap-0.5 text-[13px] font-medium text-primary">
              + {hotel.extraCount} more
              <ChevronDownIcon className="size-3.5" />
            </p>
          ) : null}

          <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 border-t border-gray-200 pt-3 text-[13px] font-medium text-success">
            {hotel.breakfast ? (
              <span className="inline-flex items-center gap-1">
                <CheckIcon className="size-3.5" /> Breakfast Included
              </span>
            ) : null}
            {hotel.service247 ? (
              <span className="inline-flex items-center gap-1">
                <CheckIcon className="size-3.5" /> 24/7 Service Available
              </span>
            ) : null}
          </div>
        </div>

        <div className="mt-4 flex shrink-0 flex-row items-end justify-between gap-3 border-t border-gray-200 pt-3 tablet:mt-0 tablet:ml-6 tablet:w-[180px] tablet:flex-col tablet:items-end tablet:justify-between tablet:border-t-0 tablet:border-l tablet:pt-0 tablet:pl-8">
          <div className="tablet:text-right">
            <p className="text-[12px] text-gray-500">Starts From</p>
            <p className="text-[22px] font-semibold text-primary">{formatPrice(hotel.price)}</p>
            <p className="text-sm text-gray-400 line-through">{formatPrice(hotel.originalPrice)}</p>
            <p className="text-[12px] text-gray-500">Per Night/Room</p>
          </div>
          <Button href={hotel.href} className="h-11 gap-3 px-4 text-sm">
            Details
          </Button>
        </div>
      </div>
    </article>
  );
}
