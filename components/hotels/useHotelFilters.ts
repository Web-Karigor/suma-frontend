"use client";

import { useMemo, useState } from "react";
import type { HotelCard } from "@/types/hotel";

export const PRICE_MIN = 0;
export const PRICE_MAX = 50000;

export const priceBands = [
  { id: "0-10000", label: "৳ 0 - 10,000", min: 0, max: 10000 },
  { id: "10000-20000", label: "৳ 10,000 - 20,000", min: 10000, max: 20000 },
  { id: "20000-35000", label: "৳ 20,000 - 35,000", min: 20000, max: 35000 },
  { id: "35000+", label: "৳ 35,000+", min: 35000, max: PRICE_MAX },
] as const;

export type HotelFilters = {
  bands: Set<string>;
  stars: Set<number>;
  refundable: boolean | null;
  minPrice: number;
  maxPrice: number;
  open: Set<string>;
};

const defaultOpen = new Set(["price", "range", "stars", "refund"]);

export const defaultHotelFilters = (): HotelFilters => ({
  bands: new Set(),
  stars: new Set(),
  refundable: null,
  minPrice: PRICE_MIN,
  maxPrice: PRICE_MAX,
  open: new Set(defaultOpen),
});

export function useHotelFilters(allHotels: HotelCard[]) {
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
      if (key === "bands") {
        const next = new Set(prev.bands);
        if (next.has(value)) next.delete(value);
        else next.add(value);
        return { ...prev, bands: next };
      }
      if (key === "refundable") {
        const next = value === "true";
        return { ...prev, refundable: prev.refundable === next ? null : next };
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

    let list = allHotels.filter((hotel) => {
      if (filters.stars.size && !filters.stars.has(hotel.rating)) return false;
      if (filters.refundable != null && hotel.isRefundable !== filters.refundable) return false;
      if (hotel.price < filters.minPrice || hotel.price > filters.maxPrice) return false;
      if (bandRanges.length && !bandRanges.some((b) => hotel.price >= b.min && hotel.price <= b.max)) {
        return false;
      }
      return true;
    });

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);

    return list;
  }, [allHotels, filters, sort]);

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
