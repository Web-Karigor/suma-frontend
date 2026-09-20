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
import { useAmenitiesQuery } from "@/hooks/queries/useAmenitiesQuery";
import type { HotelsPageMeta } from "@/types/hotel";
import { useEffect } from "react";

const HOTEL_SERVICE_SLUG = "hotel-accomodation";

export function HotelsView() {
  const { data, isLoading } = useHotelsQuery();
  const { data: service, isLoading: serviceLoading } =
    useServiceDetailQuery(HOTEL_SERVICE_SLUG);
  const { data: amenities, isLoading: amenitiesLoading } = useAmenitiesQuery();
  const allHotels = data?.hotels ?? [];
  const { filters, sort, setSort, hotels, toggle, onStar, onPrice, reset } =
    useHotelFilters(allHotels);
  const [showFilters, setShowFilters] = useState(false);
  const [isDrawerMounted, setIsDrawerMounted] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);

  // Close drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setShowFilters(false);
        setIsDrawerMounted(false);
        setIsAnimatingIn(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle smooth drawer opening and closing
  useEffect(() => {
    if (showFilters) {
      // Mount drawer first (hidden state)
      setIsDrawerMounted(true);
      // Trigger animation on next frame
      const timer = setTimeout(() => {
        setIsAnimatingIn(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      // Start closing animation
      setIsAnimatingIn(false);
      // Unmount after animation completes
      const timer = setTimeout(() => setIsDrawerMounted(false), 600);
      return () => clearTimeout(timer);
    }
  }, [showFilters]);

  if (isLoading || serviceLoading || amenitiesLoading || !data) {
    return (
      <>
        {/* Hero Skeleton */}
        <div className="relative h-[300px] w-full bg-gray-200/60 tablet:h-[400px] desktop:h-[500px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-4xl px-4">
              <div className="mx-auto mb-4 h-12 w-3/4 animate-pulse rounded bg-gray-300/80 tablet:h-16" />
              <div className="mx-auto h-6 w-1/2 animate-pulse rounded bg-gray-300/80 tablet:h-8" />
            </div>
          </div>
        </div>

        {/* Content Skeleton */}
        <section className="py-6 tablet:py-10">
          <Container>
            <div className="mb-4 h-10 w-48 animate-pulse rounded-lg bg-gray-200/60 desktop:hidden" />

            <div className="flex gap-6">
              {/* Desktop Filter Skeleton */}
              <div className="hidden w-[280px] shrink-0 space-y-4 desktop:block">
                <div className="h-10 w-full animate-pulse rounded bg-gray-200/60" />
                <div className="h-32 w-full animate-pulse rounded bg-gray-200/60" />
                <div className="h-32 w-full animate-pulse rounded bg-gray-200/60" />
                <div className="h-32 w-full animate-pulse rounded bg-gray-200/60" />
              </div>

              {/* Hotels Grid Skeleton */}
              <div className="flex-1">
                <div className="mb-4 flex items-center justify-between">
                  <div className="h-8 w-48 animate-pulse rounded bg-gray-200/60" />
                  <div className="h-8 w-32 animate-pulse rounded bg-gray-200/60" />
                </div>
                <div className="grid gap-4 tablet:grid-cols-2 tablet:gap-5 desktop:gap-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
                    >
                      <div className="h-48 w-full animate-pulse bg-gray-200/60 tablet:h-56" />
                      <div className="p-4 tablet:p-5">
                        <div className="mb-2 flex items-center justify-between">
                          <div className="h-5 w-32 animate-pulse rounded bg-gray-200/60" />
                          <div className="h-5 w-20 animate-pulse rounded bg-gray-200/60" />
                        </div>
                        <div className="mb-3 h-6 w-3/4 animate-pulse rounded bg-gray-200/60" />
                        <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-200/60" />
                        <div className="mb-4 h-4 w-4/5 animate-pulse rounded bg-gray-200/60" />
                        <div className="flex items-center justify-between">
                          <div className="h-6 w-28 animate-pulse rounded bg-gray-200/60" />
                          <div className="h-10 w-24 animate-pulse rounded bg-gray-200/60" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </>
    );
  }

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
          {/* Mobile/Tablet Filter Button */}
          <div className="mb-4 flex items-center justify-between desktop:hidden">
            <button
              type="button"
              onClick={() => setShowFilters(true)}
              className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <span>Filters</span>
            </button>
          </div>

          <div className="flex flex-col gap-5 desktop:flex-row desktop:items-start">
            {/* Desktop Sidebar */}
            <div className="hidden desktop:sticky desktop:top-24 desktop:block desktop:w-[280px] desktop:shrink-0 desktop:self-start">
              <HotelsFilters
                filters={filters}
                onToggle={toggle}
                onReset={reset}
                onPrice={onPrice}
                onStar={onStar}
                amenities={amenities ?? []}
              />
            </div>

            {/* Mobile/Tablet Drawer */}
            {isDrawerMounted && (
              <>
                {/* Overlay */}
                <div
                  className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-500 ease-in-out desktop:hidden ${
                    isAnimatingIn ? "opacity-100" : "opacity-0"
                  }`}
                  onClick={() => setShowFilters(false)}
                />

                {/* Drawer */}
                <div
                  className={`fixed top-0 left-0 bottom-0 z-50 w-[320px] bg-white shadow-2xl transition-all duration-500 ease-in-out desktop:hidden ${
                    isAnimatingIn
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-full opacity-0"
                  }`}
                >
                  <div className="flex h-full flex-col">
                    {/* Drawer Header */}
                    <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Filters
                      </h3>
                      <button
                        type="button"
                        onClick={() => setShowFilters(false)}
                        className="rounded-full p-1 text-gray-500 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 hover:rotate-90"
                      >
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Drawer Content */}
                    <div className="flex-1 overflow-y-auto px-6 py-5">
                      <HotelsFilters
                        filters={filters}
                        onToggle={toggle}
                        onReset={reset}
                        onPrice={onPrice}
                        onStar={onStar}
                        amenities={amenities ?? []}
                      />
                    </div>

                    {/* Drawer Footer */}
                    <div className="border-t border-gray-200 px-6 py-5">
                      <button
                        type="button"
                        onClick={() => setShowFilters(false)}
                        className="w-full rounded-lg bg-primary py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:scale-[1.02]"
                      >
                        Apply Filters
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="min-w-0 flex-1">
              <HotelsToolbar
                count={hotels.length}
                sort={sort}
                onSort={setSort}
              />
              <div className="grid gap-4 tablet:grid-cols-1 desktop:grid-cols-1">
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
