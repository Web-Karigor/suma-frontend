"use client";

import { FilterCheckbox } from "@/components/hotels/FilterCheckbox";
import { FilterSection } from "@/components/hotels/FilterSection";
import {
  PRICE_MAX,
  PRICE_MIN,
  amenityFilters,
  popularFilters,
  priceBands,
} from "@/lib/hotels-data";
import type { HotelFilters } from "@/components/hotels/useHotelFilters";

export function HotelsFilters({
  filters,
  onToggle,
  onReset,
  onPrice,
  onStar,
}: {
  filters: HotelFilters;
  onToggle: (key: keyof HotelFilters, value: string) => void;
  onReset: () => void;
  onPrice: (min: number, max: number) => void;
  onStar: (star: number) => void;
}) {
  const toggleSection = (id: string) => onToggle("open", id);

  return (
    <aside className="rounded-xl bg-white p-4 tablet:p-5 desktop:max-h-[calc(100vh-7rem)] desktop:overflow-y-auto desktop:[scrollbar-width:none] desktop:[&::-webkit-scrollbar]:hidden">
      <div className="flex items-center justify-between border-b-[0.5px] border-black pt-1 pb-6">
        <h2 className="text-lg font-semibold text-black">Filters</h2>
        <button
          type="button"
          onClick={onReset}
          className="cursor-pointer text-sm font-medium text-error-600 hover:underline"
        >
          Reset
        </button>
      </div>

      <FilterSection title="Popular Filters" open={filters.open.has("popular")} onToggle={() => toggleSection("popular")}>
        <div className="space-y-2.5">
          {popularFilters.map((item) => (
            <FilterCheckbox
              key={item.id}
              label={item.label}
              count={item.count}
              checked={filters.tags.has(item.id)}
              onChange={() => onToggle("tags", item.id)}
            />
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Price Per Night" open={filters.open.has("price")} onToggle={() => toggleSection("price")}>
        <div className="space-y-2.5">
          {priceBands.map((band) => (
            <FilterCheckbox
              key={band.id}
              label={band.label}
              checked={filters.bands.has(band.id)}
              onChange={() => onToggle("bands", band.id)}
            />
          ))}
        </div>
      </FilterSection>

      <FilterSection
        title="Custom Price Range"
        open={filters.open.has("range")}
        onToggle={() => toggleSection("range")}
      >
        <input
          type="range"
          min={PRICE_MIN}
          max={PRICE_MAX}
          value={filters.maxPrice}
          onChange={(e) => onPrice(filters.minPrice, Number(e.target.value))}
          className="w-full cursor-pointer accent-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:cursor-pointer"
        />
        <div className="mt-3 grid grid-cols-2 gap-2">
          <label className="rounded-md border border-gray-200 px-2 py-1.5 text-xs text-gray-500">
            from
            <input
              type="number"
              value={filters.minPrice}
              onChange={(e) => onPrice(Number(e.target.value) || 0, filters.maxPrice)}
              className="mt-0.5 block w-full text-sm font-medium text-black outline-none"
            />
          </label>
          <label className="rounded-md border border-gray-200 px-2 py-1.5 text-xs text-gray-500">
            to
            <input
              type="number"
              value={filters.maxPrice}
              onChange={(e) => onPrice(filters.minPrice, Number(e.target.value) || PRICE_MAX)}
              className="mt-0.5 block w-full text-sm font-medium text-black outline-none"
            />
          </label>
        </div>
      </FilterSection>

      <FilterSection title="Star Ratings" open={filters.open.has("stars")} onToggle={() => toggleSection("stars")}>
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => onStar(star)}
              className={`h-8 min-w-10 cursor-pointer rounded-md border px-2 text-sm ${
                filters.stars.has(star)
                  ? "border-primary bg-teal-50 text-primary"
                  : "border-gray-200 text-neutral-700"
              }`}
            >
              {star}★
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection
        title="Refundability"
        open={filters.open.has("refund")}
        onToggle={() => toggleSection("refund")}
      >
        <div className="space-y-2.5">
          <FilterCheckbox
            label="Refundable"
            checked={filters.refundable === true}
            onChange={() => onToggle("refundable", "true")}
          />
          <FilterCheckbox
            label="Non Refundable"
            checked={filters.refundable === false}
            onChange={() => onToggle("refundable", "false")}
          />
        </div>
      </FilterSection>

      <FilterSection title="Amenities" open={filters.open.has("amenities")} onToggle={() => toggleSection("amenities")}>
        <div className="space-y-2.5">
          {(filters.showAllAmenities ? amenityFilters : amenityFilters.slice(0, 4)).map((item) => (
            <FilterCheckbox
              key={item.id}
              label={item.label}
              checked={filters.tags.has(item.id)}
              onChange={() => onToggle("tags", item.id)}
            />
          ))}
          <button
            type="button"
            onClick={() => onToggle("showAllAmenities", "toggle")}
            className="cursor-pointer text-sm font-medium text-primary hover:underline"
          >
            {filters.showAllAmenities ? "View Less" : "View More"}
          </button>
        </div>
      </FilterSection>
    </aside>
  );
}
