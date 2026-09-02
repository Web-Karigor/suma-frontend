import { CheckIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import type { HotelDetail } from "@/types/hotel";

function formatPrice(value: number) {
  return `৳ ${value.toLocaleString("en-BD")}`;
}

export function HotelDetailSidebar({ hotel }: { hotel: HotelDetail }) {
  const hasDiscount = hotel.discountAmount !== null && hotel.finalPrice < hotel.price;

  return (
    <aside className="flex w-full flex-col gap-4 rounded-[16px] border border-gray-200 bg-teal-50 px-2 py-4 desktop:sticky desktop:top-24 desktop:w-[417px] desktop:shrink-0 desktop:self-start">
      <div>
        <p className="text-[13px] text-gray-600">Starting price / per night</p>
        <p className="mt-1 text-[32px] leading-none font-semibold text-primary">
          {formatPrice(hotel.finalPrice)}
        </p>
        {hasDiscount ? (
          <p className="mt-1 text-sm text-gray-400 line-through">{formatPrice(hotel.price)}</p>
        ) : null}
        {hasDiscount ? (
          <p className="mt-1 text-[13px] font-medium text-success">
            Save {formatPrice(hotel.discountAmount!)}
          </p>
        ) : null}
        {hotel.isRefundable ? (
          <p className="mt-1 text-[13px] font-medium text-success">Free cancellation available</p>
        ) : null}
      </div>

      <Button href={hotel.linkUrl} className="h-12 w-full cursor-pointer justify-center">
        Book Now
      </Button>

      {hotel.mapEmbedHtml ? (
        <div>
          <h3 className="mb-3 text-[16px] font-semibold text-black">View on Map</h3>
          <div
            className="relative h-[168px] overflow-hidden rounded-[12px] [&_iframe]:size-full"
            dangerouslySetInnerHTML={{ __html: hotel.mapEmbedHtml }}
          />
        </div>
      ) : null}

      {hotel.features.length > 0 ? (
        <ul className="space-y-2">
          {hotel.features.map((item, index) => (
            <li key={`${item}-${index}`}>
              <div className="flex w-full items-start gap-2 rounded-[10px] border border-gray-200 bg-white px-3 py-2.5 text-left text-[13px] leading-[150%] text-neutral-800">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-500">
                  <CheckIcon className="size-3" />
                </span>
                {item}
              </div>
            </li>
          ))}
        </ul>
      ) : null}

      {hotel.nearbyAttractions.length > 0 ? (
        <div>
          <h3 className="text-[16px] font-semibold text-black">Nearby Attraction</h3>
          <ul className="mt-2 list-disc space-y-1.5 pl-4 text-[13px] leading-[160%] text-gray-600">
            {hotel.nearbyAttractions.map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {hotel.howToReach.length > 0 ? (
        <div>
          <h3 className="text-[16px] font-semibold text-black">How to Reach</h3>
          <ul className="mt-2 list-disc space-y-1.5 pl-4 text-[13px] leading-[160%] text-gray-600">
            {hotel.howToReach.map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <Button href={hotel.linkUrl} className="h-12 w-full cursor-pointer justify-center">
        Book Now
      </Button>
    </aside>
  );
}
