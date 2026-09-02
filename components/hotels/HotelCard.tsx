import Image from "next/image";
import { CheckIcon, StarIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import type { HotelCard } from "@/types/hotel";

function formatPrice(value: number) {
  return `৳ ${value.toLocaleString("en-BD")}`;
}

export function HotelCard({ hotel }: { hotel: HotelCard }) {
  return (
    <article className="relative flex flex-col tablet:flex-row tablet:items-center">
      <div className="relative z-10 h-[220px] w-full shrink-0 overflow-hidden rounded-[16px] shadow-[4px_0_12px_rgb(0_0_0/10%)] tablet:h-[300px] tablet:w-[409px]">
        <Image
          src={hotel.image}
          alt={hotel.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 409px"
        />
      </div>

      <div className="relative z-0 -mt-8 flex min-h-0 min-w-0 flex-1 flex-col rounded-[24px] bg-gray-50 py-5 pr-6 pl-5 tablet:-mt-0 tablet:-ml-[21px] tablet:h-[252px] tablet:flex-row tablet:items-stretch tablet:pl-[53px]">
        <div className="flex min-w-0 flex-1 flex-col tablet:pr-8">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h3 className="text-[18px] font-semibold text-black">{hotel.title}</h3>
            <div className="flex shrink-0 items-center gap-1.5">
              <span className="flex text-gold-500">
                {Array.from({ length: hotel.rating }).map((_, i) => (
                  <StarIcon key={i} className="size-3.5" />
                ))}
              </span>
              <span className="text-sm text-gray-600">({hotel.rating.toFixed(1)})</span>
            </div>
          </div>

          {hotel.description ? (
            <p className="mt-3 line-clamp-3 text-[13px] leading-relaxed text-neutral-700">
              {hotel.description}
            </p>
          ) : null}

          {hotel.isRefundable ? (
            <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 border-t border-gray-200 pt-3 text-[13px] font-medium text-success">
              <span className="inline-flex items-center gap-1">
                <CheckIcon className="size-3.5" /> Free cancellation available
              </span>
            </div>
          ) : null}
        </div>

        <div className="mt-4 flex shrink-0 flex-row items-end justify-between gap-3 border-t border-gray-200 pt-3 tablet:mt-0 tablet:ml-6 tablet:w-[180px] tablet:flex-col tablet:items-end tablet:justify-between tablet:border-t-0 tablet:border-l tablet:pt-0 tablet:pl-8">
          <div className="tablet:text-right">
            <p className="text-[12px] text-gray-500">Starts From</p>
            <p className="text-[22px] font-semibold text-primary">{formatPrice(hotel.price)}</p>
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
