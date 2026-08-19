"use client";

import { useState } from "react";
import { HotelCard } from "@/components/hotels/HotelCard";
import { HotelsFilters } from "@/components/hotels/HotelsFilters";
import { HotelsToolbar } from "@/components/hotels/HotelsToolbar";
import { useHotelFilters } from "@/components/hotels/useHotelFilters";
import { Container } from "@/components/ui/Container";

export function HotelsView() {
  const { filters, sort, setSort, hotels, toggle, onStar, onPrice, reset } = useHotelFilters();
  const [showFilters, setShowFilters] = useState(false);

  return (
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
          <div className={`${showFilters ? "block" : "hidden"} w-full desktop:sticky desktop:top-24 desktop:block desktop:w-[280px] desktop:shrink-0 desktop:self-start`}>
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
  );
}
