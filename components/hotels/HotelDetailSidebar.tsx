import { CheckIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import type { HotelDetail } from "@/types/hotel";

function formatPrice(value: number) {
  return `৳ ${value.toLocaleString("en-BD")}`;
}

function getMapHref(mapEmbedHtml: string, address: string) {
  const src = mapEmbedHtml.match(/src=["']([^"']+)["']/i)?.[1];
  if (src) {
    try {
      const url = new URL(src);
      if (url.pathname.includes("/maps/embed")) {
        url.pathname = url.pathname.replace("/maps/embed", "/maps");
      }
      return url.toString();
    } catch {
      return src;
    }
  }
  if (address) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  }
  return null;
}

export function HotelDetailSidebar({ hotel }: { hotel: HotelDetail }) {
  const mapHref = hotel.mapEmbedHtml
    ? getMapHref(hotel.mapEmbedHtml, hotel.address)
    : null;

  return (
    <aside className="w-full desktop:sticky desktop:top-24 desktop:w-[417px] desktop:shrink-0 desktop:self-start">
      <div className="flex w-full flex-col gap-3">
        {/* =========================
            1. PRICE
        ========================== */}
        <section className="rounded-[16px] bg-teal-50 px-3 py-4 text-right">
          <div className="space-y-3">
            <p className="text-[16px] text-[#8E8E8E]">
              Starting price / per night
            </p>

            <p className="mt-1 text-[32px] font-semibold leading-none text-primary lg:text-4xl 2xl:text-[56px]">
              {formatPrice(hotel.finalPrice)}
            </p>

            {/* {hotel.isRefundable ? (
              <p className="mt-1 text-[13px] font-medium text-success">
                Free cancellation available
              </p>
            ) : null} */}
          </div>

          <Button
            href={hotel.linkUrl}
            className="mt-10 h-12 w-full cursor-pointer justify-center"
          >
            Book Now
          </Button>
        </section>

        {/* =========================
            2. MAP
        ========================== */}
        {hotel.mapEmbedHtml ? (
          <section className="rounded-[16px] bg-teal-50 px-3 py-4">
            <h3 className="mb-3 text-center text-[16px] font-semibold text-black lg:text-xl">
              View on Map
            </h3>

            <div className="relative h-[242px] w-full overflow-hidden rounded-[6px]">
              <div
                className="absolute inset-0 [&_iframe]:pointer-events-none [&_iframe]:size-full [&_iframe]:border-0"
                dangerouslySetInnerHTML={{
                  __html: hotel.mapEmbedHtml,
                }}
              />
              <div className="absolute inset-0 bg-overlay-black-24" />
              {mapHref ? (
                <a
                  href={mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 flex items-center justify-center"
                >
                  <span className="inline-flex h-10 items-center justify-center rounded-lg bg-white px-4 text-sm font-medium text-[#0A0C0C] shadow-sm transition-colors hover:bg-gray-50 lg:text-base">
                    Map View
                  </span>
                </a>
              ) : null}
            </div>
          </section>
        ) : null}

        {/* =========================
            3. FEATURES
        ========================== */}
        {hotel.features.length > 0 ? (
          <section className="rounded-[16px] bg-teal-50 px-3 py-4">
            <ul className="space-y-2">
              {hotel.features.map((item, index) => (
                <li key={`${item}-${index}`}>
                  <div className="flex w-full items-start gap-2 rounded-[10px] border border-[#268F8E] bg-transparent px-3 py-2.5 text-left text-[16px] leading-[150%] text-[#0A0C0C]">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full">
                      <CheckIcon className="size-5" />
                    </span>
                    <span className="min-w-0">{item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* =========================
            4. NEARBY + HOW TO REACH
        ========================== */}
        {hotel.nearbyAttractions.length > 0 || hotel.howToReach.length > 0 ? (
          <section className="rounded-[16px] bg-teal-50 px-3 py-4">
            {hotel.nearbyAttractions.length > 0 ? (
              <div>
                <h3 className="text-center text-[16px] font-semibold text-[#000000] lg:text-xl">
                  Nearby Attraction
                </h3>

                <ul className="mt-3 list-disc space-y-3 pl-5 text-[14px] leading-[160%] text-[#686868] lg:text-base">
                  {hotel.nearbyAttractions.map((item, index) => (
                    <li key={`${item}-${index}`}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {hotel.nearbyAttractions.length > 0 &&
            hotel.howToReach.length > 0 ? (
              <div className="my-3 border-t border-gray-300" />
            ) : null}

            {hotel.howToReach.length > 0 ? (
              <div>
                <h3 className="text-center text-[16px] font-semibold text-[#000000] lg:text-xl">
                  How to Reach
                </h3>

                <ul className="mt-3 list-disc space-y-3 pl-5 text-[14px] leading-[160%] text-[#686868] lg:text-base">
                  {hotel.howToReach.map((item, index) => (
                    <li key={`${item}-${index}`}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-4 border-t border-gray-300 pt-4">
              <Button
                href={hotel.linkUrl}
                className="h-12 w-full cursor-pointer justify-center"
              >
                Book Now
              </Button>
            </div>
          </section>
        ) : null}
      </div>
    </aside>
  );
}
