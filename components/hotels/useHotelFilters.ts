"use client";

import { useMemo, useState } from "react";
import { PRICE_MAX, PRICE_MIN, hotelListings, priceBands } from "@/lib/hotels-data";

export type HotelFilters = {
  tags: Set<string>;
  bands: Set<string>;
  stars: Set<number>;
  refundable: boolean | null;
  minPrice: number;
  maxPrice: number;
  showAllAmenities: boolean;
  open: Set<string>;
};

const defaultOpen = new Set(["popular", "price", "range", "stars", "refund", "amenities"]);

export const defaultHotelFilters = (): HotelFilters => ({
  tags: new Set(),
  bands: new Set(),
  stars: new Set(),
  refundable: null,
  minPrice: PRICE_MIN,
  maxPrice: PRICE_MAX,
  showAllAmenities: false,
  open: new Set(defaultOpen),
});

export function useHotelFilters() {
  const [filters, setFilters] = useState<HotelFilters>(defaultHotelFilters);
  const [sort, setSort] = useState("newest");

  const toggle = (key: keyof HotelFilters, value: string) => {
    setFilters((prev) => {
      if (key === "open") {
        const next = new Set(prev.open);
        if (next.has(value)) next.delete(value);
        else next.add(value);
        return { ...prev, open: next };
      }
      if (key === "tags" || key === "bands") {
        const next = new Set(prev[key]);
        if (next.has(value)) next.delete(value);
        else next.add(value);
        return { ...prev, [key]: next };
      }
      if (key === "refundable") {
        const next = value === "true";
        return { ...prev, refundable: prev.refundable === next ? null : next };
      }
      if (key === "showAllAmenities") {
        return { ...prev, showAllAmenities: !prev.showAllAmenities };
      }
      return prev;
    });
  };

  const onStar = (star: number) => {
    setFilters((prev) => {
      const next = new Set(prev.stars);
      if (next.has(star)) next.delete(star);
      else next.add(star);
      return { ...prev, stars: next };
    });
  };

  const onPrice = (min: number, max: number) => {
    setFilters((prev) => ({
      ...prev,
      minPrice: Math.max(PRICE_MIN, Math.min(min, max)),
      maxPrice: Math.min(PRICE_MAX, Math.max(min, max)),
    }));
  };

  const hotels = useMemo(() => {
    const bandRanges = [...filters.bands]
      .map((id) => priceBands.find((b) => b.id === id))
      .filter((b): b is (typeof priceBands)[number] => Boolean(b));

    let list = hotelListings.filter((hotel) => {
      if (filters.tags.size && ![...filters.tags].every((tag) => hotel.tags.includes(tag))) return false;
      if (filters.stars.size && !filters.stars.has(hotel.rating)) return false;
      if (filters.refundable != null && hotel.refundable !== filters.refundable) return false;
      if (hotel.price < filters.minPrice || hotel.price > filters.maxPrice) return false;
      if (bandRanges.length && !bandRanges.some((b) => hotel.price >= b.min && hotel.price <= b.max)) return false;
      return true;
    });

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);

    return list;
  }, [filters, sort]);

  return {
    filters,
    sort,
    setSort,
    hotels,
    toggle,
    onStar,
    onPrice,
    reset: () => setFilters(defaultHotelFilters()),
  };
}
