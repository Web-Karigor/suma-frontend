import Image from "next/image";
import { CheckIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { howToReach, hotelPolicies, nearbyAttractions } from "@/lib/hotels-data";
import type { HotelListing } from "@/lib/hotels-data";

function formatPrice(value: number) {
  return `৳ ${value.toLocaleString("en-BD")}`;
}

export function HotelDetailSidebar({ hotel }: { hotel: HotelListing }) {
  return (
    <aside className="flex w-full flex-col gap-4 rounded-[16px] border border-gray-200 bg-teal-50 px-2 py-4 desktop:sticky desktop:top-24 desktop:w-[417px] desktop:shrink-0 desktop:self-start">
      <div>
        <p className="text-[13px] text-gray-600">Starting price / per night</p>
        <p className="mt-1 text-[32px] leading-none font-semibold text-primary">{formatPrice(hotel.price)}</p>
      </div>

      <Button href="/contact" className="h-12 w-full cursor-pointer justify-center">
        Book Now
      </Button>

      <div>
        <h3 className="mb-3 text-[16px] font-semibold text-black">View on Map</h3>
        <div className="relative h-[168px] overflow-hidden rounded-[12px]">
          <Image
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
            alt="Map"
            fill
            className="object-cover"
            sizes="401px"
          />
          <a
            href="https://maps.google.com/?q=Cox's+Bazar"
            target="_blank"
            rel="noreferrer"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow"
          >
            Map View
          </a>
        </div>
      </div>

      <ul className="space-y-2">
        {hotelPolicies.map((item) => (
          <li key={item}>
            <button
              type="button"
              className="flex w-full cursor-pointer items-start gap-2 rounded-[10px] border border-gray-200 bg-white px-3 py-2.5 text-left text-[13px] leading-[150%] text-neutral-800"
            >
              <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-500">
                <CheckIcon className="size-3" />
              </span>
              {item}
            </button>
          </li>
        ))}
      </ul>

      <div>
        <h3 className="text-[16px] font-semibold text-black">Nearby Attraction</h3>
        <ul className="mt-2 list-disc space-y-1.5 pl-4 text-[13px] leading-[160%] text-gray-600">
          {nearbyAttractions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[16px] font-semibold text-black">How to Reach</h3>
        <ul className="mt-2 list-disc space-y-1.5 pl-4 text-[13px] leading-[160%] text-gray-600">
          {howToReach.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <Button href="/contact" className="h-12 w-full cursor-pointer justify-center">
        Book Now
      </Button>
    </aside>
  );
}
