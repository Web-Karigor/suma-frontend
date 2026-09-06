"use client";

import { useState } from "react";
import { HotelCard } from "@/components/hotels/HotelCard";
import { HotelsFilters } from "@/components/hotels/HotelsFilters";
import { HotelsHero } from "@/components/hotels/HotelsHero";
import { HotelsToolbar } from "@/components/hotels/HotelsToolbar";
import { useHotelFilters } from "@/components/hotels/useHotelFilters";
import { Container } from "@/components/ui/Container";
import { useHotelsQuery } from "@/hooks/queries/useHotelsQuery";
import { useServiceDetailQuery } from "@/hooks/queries/useServiceDetailQuery";
import type { HotelsPageMeta } from "@/types/hotel";

const HOTEL_SERVICE_SLUG = "hotel-accomodation";

export function HotelsView() {
  const { data, isLoading } = useHotelsQuery();
  const { data: service, isLoading: serviceLoading } =
    useServiceDetailQuery(HOTEL_SERVICE_SLUG);
  const allHotels = data?.hotels ?? [];
  const { filters, sort, setSort, hotels, toggle, onStar, onPrice, reset } =
    useHotelFilters(allHotels);
  const [showFilters, setShowFilters] = useState(false);

  if (isLoading || serviceLoading || !data) return null;

  const page: HotelsPageMeta = {
    ...data.page,
    title: service?.title || data.page.title,
    headerTitle: service?.title || data.page.headerTitle,
    headerSubtitle: service?.subtitle || data.page.headerSubtitle,
    headerDescription: service?.subtitle || data.page.headerDescription,
    banner: service?.banner || service?.image || data.page.banner,
    metaTitle: service?.metaTitle || data.page.metaTitle,
    metaDescription: service?.metaDescription || data.page.metaDescription,
  };

  return (
    <>
      <HotelsHero page={page} />

      <section className="py-6 tablet:py-10">
        <Container>
          <div className="mb-4 desktop:hidden">
            <button
              type="button"
              onClick={() => setShowFilters((v) => !v)}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium"
            >
              {showFilters ? "Hide Filters" : "Filters"}
            </button>
          </div>

          <div className="flex flex-col gap-5 desktop:flex-row desktop:items-start">
            <div
              className={`${showFilters ? "block" : "hidden"} w-full desktop:sticky desktop:top-24 desktop:block desktop:w-[280px] desktop:shrink-0 desktop:self-start`}
            >
              <HotelsFilters
                filters={filters}
                onToggle={toggle}
                onReset={reset}
                onPrice={onPrice}
                onStar={onStar}
              />
            </div>

            <div className="min-w-0 flex-1">
              <HotelsToolbar count={hotels.length} sort={sort} onSort={setSort} />
              <div className="space-y-4">
                {hotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
                {hotels.length === 0 ? (
                  <p className="rounded-xl bg-white p-8 text-center text-sm text-gray-500">
                    No hotels match the selected filters.
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
