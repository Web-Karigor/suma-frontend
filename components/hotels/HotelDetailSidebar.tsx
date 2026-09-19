import { CheckIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import type { HotelDetail } from "@/types/hotel";

function formatPrice(value: number) {
  return `৳ ${value.toLocaleString("en-BD")}`;
}

export function HotelDetailSidebar({ hotel }: { hotel: HotelDetail }) {
  const hasDiscount =
    hotel.discountAmount !== null && hotel.finalPrice < hotel.price;

  return (
    <aside className="w-full desktop:sticky desktop:top-24 desktop:w-[417px] desktop:shrink-0 desktop:self-start">
      <div className="flex w-full flex-col gap-3">
        {/* =========================
            1. PRICE
        ========================== */}
        <section className="rounded-[16px] border border-gray-200 bg-teal-50 px-3 py-4 text-right">
          <div className="space-y-3">
            <p className="text-[16px] text-[#8E8E8E]">
              Starting price / per night
            </p>

            <p className="mt-1 text-[32px] font-semibold leading-none text-primary lg:text-4xl 2xl:text-[56px]">
              {formatPrice(hotel.finalPrice)}
            </p>

            {/* {hasDiscount ? (
              <p className="mt-1 text-sm text-gray-400 line-through">
                {formatPrice(hotel.price)}
              </p>
            ) : null}

            {hasDiscount ? (
              <p className="mt-1 text-[13px] font-medium text-success">
                Save {formatPrice(hotel.discountAmount!)}
              </p>
            ) : null} */}

            {hotel.isRefundable ? (
              <p className="mt-1 text-[13px] font-medium text-success">
                Free cancellation available
              </p>
            ) : null}
          </div>

          <Button
            href={hotel.linkUrl}
            className="mt-4 h-12 w-full cursor-pointer justify-center"
          >
            Book Now
          </Button>
        </section>

        {/* =========================
            2. MAP
        ========================== */}
        {hotel.mapEmbedHtml ? (
          <section className="rounded-[16px] border border-gray-200 bg-teal-50 px-3 py-4">
            <h3 className="mb-3 text-center text-[16px] lg:text-xl font-semibold text-black">
              View on Map
            </h3>

            <div
              className="
                relative
                h-[168px]
                w-full
                overflow-hidden
                rounded-[10px]
                [&_iframe]:size-full
                [&_iframe]:border-0
              "
              dangerouslySetInnerHTML={{
                __html: hotel.mapEmbedHtml,
              }}
            />
          </section>
        ) : null}

        {/* =========================
            3. FEATURES
        ========================== */}
        {hotel.features.length > 0 ? (
          <section className="rounded-[16px] border border-gray-200 bg-teal-50 px-3 py-4">
            <ul className="space-y-2">
              {hotel.features.map((item, index) => (
                <li key={`${item}-${index}`}>
                  <div
                    className="
                      flex
                      w-full
                      items-start
                      gap-2
                      rounded-[10px]
                      border
                      border-[#268F8E]
                      bg-transparent
                      px-3
                      py-2.5
                      text-left
                      text-[16px]
                      leading-[150%]
                      text-[#0A0C0C]
                    "
                  >
                    <span
                      className="
                        mt-0.5
                        inline-flex
                        size-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                      "
                    >
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
          <section className="rounded-[16px] border border-gray-200 bg-teal-50 px-3 py-4">
            {/* Nearby Attraction */}
            {hotel.nearbyAttractions.length > 0 ? (
              <div>
                <h3 className="text-center text-[16px] lg:text-xl font-semibold text-[#000000]">
                  Nearby Attraction
                </h3>

                <ul className="mt-3 list-disc space-y-3 pl-5 text-[14px] lg:text-base leading-[160%] text-[#686868]">
                  {hotel.nearbyAttractions.map((item, index) => (
                    <li key={`${item}-${index}`}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Divider */}
            {hotel.nearbyAttractions.length > 0 &&
            hotel.howToReach.length > 0 ? (
              <div className="my-3 border-t border-gray-300" />
            ) : null}

            {/* How To Reach */}
            {hotel.howToReach.length > 0 ? (
              <div>
                <h3 className="text-center text-[16px] lg:text-xl font-semibold text-[#000000]">
                  How to Reach
                </h3>

                <ul className="mt-3 list-disc space-y-3 pl-5 text-[14px] lg:text-base leading-[160%] text-[#686868]">
                  {hotel.howToReach.map((item, index) => (
                    <li key={`${item}-${index}`}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Bottom Book Now */}
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
