"use client";

import { useMemo, useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePackagesQuery } from "@/hooks/queries/usePackagesQuery";
import { useServiceDetailQuery } from "@/hooks/queries/useServiceDetailQuery";
import { PackageCard } from "./PackageCard";
import Image from "next/image";

const FALLBACK = {
  title: "Holiday Packages",
  subtitle: "",
};

const EMPTY_ITEMS: never[] = [];

// Reusable Desktop Filter Select Component
function DesktopFilterSelect({
  value,
  onValueChange,
  onClear,
  placeholder,
  children,
  label,
}: {
  value: string;
  onValueChange: (value: string) => void;
  onClear: () => void;
  placeholder: string;
  children: React.ReactNode;
  label: string;
}) {
  const hasValue = value !== "all";

  return (
    <div className="relative flex h-[46px] w-[160px] items-center rounded-[8px] border-[0.5px] border-gray-900/40 bg-transparent px-3 py-2 text-base text-gray-900">
      <Select value={value} onValueChange={(val) => val && onValueChange(val)}>
        <SelectTrigger
          hideDefaultIcon
          aria-label={label}
          className="h-full w-full gap-2 border-0 bg-transparent p-0 text-base text-gray-900 shadow-none"
        >
          <SelectValue placeholder={placeholder} />
          {!hasValue && (
            <Image
              src="/arrow-square-down.png"
              alt="dropdown"
              width={24}
              height={24}
              className="pointer-events-none flex-shrink-0"
            />
          )}
          {hasValue && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClear();
              }}
              className="flex-shrink-0 text-gray-500 hover:text-gray-900"
              aria-label={`Clear ${label}`}
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
          )}
        </SelectTrigger>
        <SelectContent
          align="start"
          alignItemWithTrigger={false}
          className="min-w-[160px] rounded border border-[#d8d3c8] bg-white p-1 shadow-md ring-0"
        >
          {children}
        </SelectContent>
      </Select>
    </div>
  );
}

function PriceFilter({
  min,
  max,
  hasPrices,
  value,
  onChange,
  onClear,
}: {
  min: number;
  max: number;
  hasPrices: boolean;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  onClear: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [low, high] = value;
  const span = Math.max(max - min, 1);
  const lowPercent = ((low - min) / span) * 100;
  const highPercent = ((high - min) / span) * 100;
  const hasCustomRange = low !== min || high !== max;

  return (
    <div className="relative h-[46px] w-[160px]">
      <button
        type="button"
        className="flex h-full w-full items-center justify-between gap-2 rounded-[8px] border-[0.5px] border-gray-900/40 bg-transparent px-3 py-2 text-base text-gray-900"
        aria-expanded={open}
        disabled={!hasPrices}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="flex-1 text-left">
          {hasCustomRange
            ? `৳${low.toLocaleString()}-${high.toLocaleString()}`
            : "Price"}
        </span>
        {hasCustomRange ? (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClear();
              setOpen(false);
            }}
            className="flex-shrink-0 text-gray-500 hover:text-gray-900"
            aria-label="Clear price filter"
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
        ) : (
          <Image
            src="/arrow-square-down.png"
            alt=""
            width={24}
            height={24}
            className="flex-shrink-0"
          />
        )}
      </button>
      {open && hasPrices ? (
        <div className="absolute top-[calc(100%_+_4px)] left-0 z-30 w-[260px] rounded border border-[#d8d3c8] bg-white p-4 shadow-md">
          <div className="mb-3 flex justify-between text-xs text-neutral-700">
            <span>৳ {low.toLocaleString()}</span>
            <span>৳ {high.toLocaleString()}</span>
          </div>
          <div className="relative h-5">
            <div className="absolute top-1/2 right-0 left-0 h-1 -translate-y-1/2 rounded-full bg-[#e9e5dc]" />
            <div
              className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-primary"
              style={{ left: `${lowPercent}%`, right: `${100 - highPercent}%` }}
            />
            <input
              type="range"
              min={min}
              max={max}
              value={low}
              onChange={(event) =>
                onChange([Math.min(Number(event.target.value), high), high])
              }
              className="absolute inset-0 h-5 w-full cursor-pointer appearance-none bg-transparent accent-primary"
              aria-label="Minimum price"
            />
            <input
              type="range"
              min={min}
              max={max}
              value={high}
              onChange={(event) =>
                onChange([low, Math.max(Number(event.target.value), low)])
              }
              className="absolute inset-0 h-5 w-full cursor-pointer appearance-none bg-transparent accent-primary"
              aria-label="Maximum price"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

// Mobile Drawer Price Filter with full width
function MobilePriceFilter({
  min,
  max,
  hasPrices,
  value,
  onChange,
  onClear,
}: {
  min: number;
  max: number;
  hasPrices: boolean;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  onClear: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [low, high] = value;
  const span = Math.max(max - min, 1);
  const lowPercent = ((low - min) / span) * 100;
  const highPercent = ((high - min) / span) * 100;

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="flex h-[46px] w-full items-center justify-between gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900"
        aria-expanded={open}
        disabled={!hasPrices}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="flex-1 text-left text-sm">Price</span>
        <span className="text-xs text-gray-600">
          ৳{low.toLocaleString()}-{high.toLocaleString()}
        </span>
      </button>
      {open && hasPrices ? (
        <div className="mt-2 w-full rounded border border-[#d8d3c8] bg-white p-4 shadow-md">
          <div className="mb-3 flex justify-between text-xs text-neutral-700">
            <span>৳ {low.toLocaleString()}</span>
            <span>৳ {high.toLocaleString()}</span>
          </div>
          <div className="relative h-5">
            <div className="absolute top-1/2 right-0 left-0 h-1 -translate-y-1/2 rounded-full bg-[#e9e5dc]" />
            <div
              className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-primary"
              style={{ left: `${lowPercent}%`, right: `${100 - highPercent}%` }}
            />
            <input
              type="range"
              min={min}
              max={max}
              value={low}
              onChange={(event) =>
                onChange([Math.min(Number(event.target.value), high), high])
              }
              className="absolute inset-0 h-5 w-full cursor-pointer appearance-none bg-transparent accent-primary"
              aria-label="Minimum price"
            />
            <input
              type="range"
              min={min}
              max={max}
              value={high}
              onChange={(event) =>
                onChange([low, Math.max(Number(event.target.value), low)])
              }
              className="absolute inset-0 h-5 w-full cursor-pointer appearance-none bg-transparent accent-primary"
              aria-label="Maximum price"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function PackageList({
  serviceSlug,
  packageCategory,
}: {
  serviceSlug: string;
  packageCategory?: string;
}) {
  const [page, setPage] = useState(1);
  const [packageType, setPackageType] = useState("all");
  const [nights, setNights] = useState("all");
  const [startDate, setStartDate] = useState("all");
  const [endDate, setEndDate] = useState("all");
  const [sort, setSort] = useState("newest");
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  // Close drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsFilterDrawerOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const serviceQuery = useServiceDetailQuery(serviceSlug);
  const packagesQuery = usePackagesQuery(serviceQuery.data?.id, page);
  const data = packagesQuery.data;
  const items = (data?.items ?? EMPTY_ITEMS).filter((item) => {
    if (packageCategory !== "hajj" && packageCategory !== "umrah") return true;
    return item.hajjUmrahType?.toLowerCase().includes(packageCategory) ?? false;
  });
  const prices = items
    .filter((item) => item.price > 0)
    .map((item) => item.price);
  const minimumPrice = prices.length ? Math.min(...prices) : 0;
  const maximumPrice = prices.length ? Math.max(...prices) : 0;
  const [selectedPriceRange, setSelectedPriceRange] = useState<
    [number, number] | null
  >(null);
  const priceRange: [number, number] = selectedPriceRange
    ? [
        Math.max(minimumPrice, selectedPriceRange[0]),
        Math.min(maximumPrice, selectedPriceRange[1]),
      ]
    : [minimumPrice, maximumPrice];

  const packageTypes = useMemo(
    () =>
      Array.from(
        new Map(
          items
            .filter((item) => item.packageType)
            .map((item) => [item.packageType!.slug, item.packageType!]),
        ).values(),
      ),
    [items],
  );
  const nightOptions = useMemo(
    () => Array.from(new Set(items.map((item) => item.nights).filter(Boolean))),
    [items],
  );
  const startDateOptions = useMemo(
    () =>
      Array.from(
        new Set(
          items
            .map((item) => item.startDate)
            .filter((date): date is string => Boolean(date)),
        ),
      ),
    [items],
  );
  const endDateOptions = useMemo(
    () =>
      Array.from(
        new Set(
          items
            .map((item) => item.endDate)
            .filter((date): date is string => Boolean(date)),
        ),
      ),
    [items],
  );
  const visibleItems = useMemo(() => {
    const filtered = items.filter(
      (item) =>
        (packageType === "all" || item.packageType?.slug === packageType) &&
        (nights === "all" || item.nights === nights) &&
        (startDate === "all" || item.startDate === startDate) &&
        (endDate === "all" || item.endDate === endDate) &&
        item.price >= priceRange[0] &&
        item.price <= priceRange[1],
    );
    return sort === "price-low-high"
      ? [...filtered].sort((a, b) => a.price - b.price)
      : filtered;
  }, [items, packageType, nights, startDate, endDate, priceRange, sort]);

  if (serviceQuery.isLoading || packagesQuery.isLoading) {
    return (
      <>
        <section className="relative -mt-[7.8rem]  bg-gold-100 px-4 pt-[calc(9.5rem+2.25rem)] pb-9 tablet:px-8 tablet:pt-[calc(5.5rem+3.5rem)] tablet:pb-14 desktop:pt-[calc(9.5rem+3rem)] desktop:pb-12">
          <Container>
            <div className="animate-pulse space-y-4">
              <div className="h-10 w-3/4 rounded bg-gray-200/60 tablet:h-12" />
              <div className="h-6 w-full rounded bg-gray-200/60" />
              <div className="h-6 w-4/5 rounded bg-gray-200/60" />
            </div>
          </Container>
        </section>
        <section className="bg-[#FEFBF5] pb-14 tablet:pb-20">
          <Container>
            <div className="flex items-center justify-between border-b-[1px] border-[#0A0C0C] py-6 tablet:py-7">
              <div className="h-8 w-64 animate-pulse rounded bg-gray-200/60" />
              <div className="hidden h-8 w-32 animate-pulse rounded bg-gray-200/60 tablet:block" />
            </div>
            <div className="hidden lg:flex flex-wrap items-center gap-2 py-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="h-12 w-40 animate-pulse rounded-lg bg-gray-200/60"
                />
              ))}
            </div>
            <div className="grid w-full gap-4 py-5 tablet:grid-cols-2 tablet:gap-5 desktop:grid-cols-3 desktop:gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-[10px] border border-[#D8D3C8] bg-white"
                >
                  <div className="h-[240px] w-full animate-pulse bg-gray-200/60" />
                  <div className="p-4 tablet:p-5">
                    <div className="mb-2 h-5 w-16 animate-pulse rounded bg-gray-200/60" />
                    <div className="mb-3 h-6 w-4/5 animate-pulse rounded bg-gray-200/60" />
                    <div className="mb-4 space-y-2">
                      <div className="h-4 w-32 animate-pulse rounded bg-gray-200/60" />
                      <div className="h-4 w-24 animate-pulse rounded bg-gray-200/60" />
                    </div>
                    <div className="flex items-center justify-between border-t border-[#E9E5DC] pt-4">
                      <div className="h-7 w-28 animate-pulse rounded bg-gray-200/60" />
                      <div className="h-11 w-32 animate-pulse rounded-[6px] bg-gray-200/60" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </>
    );
  }

  const title =
    packageCategory === "hajj"
      ? "Hajj Packages"
      : packageCategory === "umrah"
        ? "Umrah Packages"
        : data?.service.title || serviceQuery.data?.title || FALLBACK.title;
  const subtitle =
    packageCategory === "hajj"
      ? "Explore our carefully arranged Hajj packages for a peaceful and meaningful pilgrimage."
      : packageCategory === "umrah"
        ? "Choose a comfortable Umrah package designed around your spiritual journey."
        : data?.service.subtitle ||
          serviceQuery.data?.subtitle ||
          FALLBACK.subtitle;
  const pagination = data?.pagination;
  const currentPage = pagination?.current_page ?? page;
  const pageNumbers = pagination
    ? Array.from(
        { length: Math.min(5, pagination.last_page) },
        (_, index) =>
          Math.min(
            Math.max(currentPage - 2, 1),
            Math.max(pagination.last_page - 4, 1),
          ) + index,
      )
    : [];
  const goToPage = (nextPage: number) => {
    setSelectedPriceRange(null);
    setPage(nextPage);
  };

  return (
    <>
      <section className="relative -mt-[7.8rem]  bg-gold-100 px-4 pt-[calc(9.5rem+2.25rem)] pb-9 tablet:px-8 tablet:pt-[calc(5.5rem+3.5rem)] tablet:pb-14 desktop:pt-[calc(9.5rem+3rem)] desktop:pb-12">
        <Container>
          <h1 className="max-w-[858px] text-[32px] leading-[123%] font-semibold text-[#0A0C0C]">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 max-w-[858px] text-[18px] leading-[160%] font-normal text-[#7B7B7B]">
              {subtitle}
            </p>
          ) : null}
        </Container>
      </section>
      <section className="bg-[#FEFBF5] pb-14 tablet:pb-20">
        <Container>
          <div className="flex items-center justify-between border-b-[1px] border-[#0A0C0C] py-6 tablet:py-7">
            <h2 className="lg:text-[28px] text-lg leading-[129%] font-medium text-[#0A0C0C]">
              Exclusive Suma Packages{" "}
              <span className="ml-1 text-xs lg:text-xl font-normal text-neutral-500">
                ({pagination?.total ?? 0} Items)
              </span>
            </h2>
            <div className="hidden items-center gap-2 text-xs text-neutral-700 tablet:flex">
              <span className="lg:text-lg text-xs font-medium text-[#0A0C0C]">
                Sort by:
              </span>
              <Select
                value={sort}
                onValueChange={(value) => setSort(value ?? "newest")}
              >
                <SelectTrigger
                  showCloseIcon
                  className="h-8 min-w-[96px] text-[#0A0C0C] text-base rounded border-[#d8d3c8] bg-transparent px-3 shadow-none"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent
                  align="start"
                  alignItemWithTrigger={false}
                  className="min-w-[160px] rounded border text-[#0A0C0C] text-base border-[#d8d3c8] bg-white p-1 shadow-md ring-0"
                >
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low-high">Low to High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Mobile/Tablet Filter Button */}
          <div className="flex items-center justify-between  py-4 lg:hidden">
            <button
              type="button"
              onClick={() => setIsFilterDrawerOpen(true)}
              className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <span>Filter</span>
            </button>
            <div className="md:hidden flex items-center gap-2 text-xs text-neutral-700">
              <span>Sort by:</span>
              <Select
                value={sort}
                onValueChange={(value) => setSort(value ?? "newest")}
              >
                <SelectTrigger
                  showCloseIcon
                  className="h-8 min-w-[96px] rounded border-[#d8d3c8] bg-transparent px-3 text-xs shadow-none"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent
                  align="start"
                  alignItemWithTrigger={false}
                  className="min-w-[160px] rounded border border-[#d8d3c8] bg-white p-1 shadow-md ring-0"
                >
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low-high">Low to High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Desktop Inline Filters */}
          <div className="hidden lg:flex flex-wrap items-center gap-2 py-4">
            <span className="mr-1 text-lg text-gray-900">Filter:</span>

            {/* Category Filter */}
            <DesktopFilterSelect
              value={packageType}
              onValueChange={(value) => {
                setPackageType(value);
                setPage(1);
              }}
              onClear={() => {
                setPackageType("all");
                setPage(1);
              }}
              placeholder="Category"
              label="Package type"
            >
              <SelectItem value="all">All</SelectItem>
              {packageTypes.map((type) => (
                <SelectItem key={type.slug} value={type.slug}>
                  {type.name}
                </SelectItem>
              ))}
            </DesktopFilterSelect>

            {/* Price Filter */}
            <PriceFilter
              min={minimumPrice}
              max={maximumPrice}
              hasPrices={prices.length > 0}
              value={priceRange}
              onChange={setSelectedPriceRange}
              onClear={() => setSelectedPriceRange(null)}
            />

            {/* Nights Filter */}
            <DesktopFilterSelect
              value={nights}
              onValueChange={(value) => {
                setNights(value);
                setPage(1);
              }}
              onClear={() => {
                setNights("all");
                setPage(1);
              }}
              placeholder="Nights"
              label="Nights"
            >
              <SelectItem value="all">All</SelectItem>
              {nightOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </DesktopFilterSelect>

            {/* Start Date Filter */}
            <DesktopFilterSelect
              value={startDate}
              onValueChange={(value) => {
                setStartDate(value);
                setPage(1);
              }}
              onClear={() => {
                setStartDate("all");
                setPage(1);
              }}
              placeholder="Start Date"
              label="Start date"
            >
              <SelectItem value="all">All</SelectItem>
              {startDateOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </DesktopFilterSelect>

            {/* End Date Filter */}
            <DesktopFilterSelect
              value={endDate}
              onValueChange={(value) => {
                setEndDate(value);
                setPage(1);
              }}
              onClear={() => {
                setEndDate("all");
                setPage(1);
              }}
              placeholder="End Date"
              label="End date"
            >
              <SelectItem value="all">All</SelectItem>
              {endDateOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </DesktopFilterSelect>
          </div>

          {/* Mobile Filter Drawer */}
          {isFilterDrawerOpen && (
            <>
              {/* Overlay */}
              <div
                className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-500 ease-in-out lg:hidden"
                onClick={() => setIsFilterDrawerOpen(false)}
                style={{
                  animation: "fadeIn 0.5s ease-in-out",
                }}
              />

              {/* Drawer */}
              <div
                className="fixed top-0 left-0 bottom-0 z-50 w-[280px] bg-white shadow-2xl transition-transform duration-500 ease-in-out lg:hidden"
                style={{
                  transform: isFilterDrawerOpen
                    ? "translateX(0)"
                    : "translateX(-100%)",
                  animation: "slideInFromLeft 0.5s ease-in-out",
                }}
              >
                <div className="flex h-full flex-col">
                  {/* Drawer Header */}
                  <div className="flex items-center justify-between border-b border-[#e9e5dc] px-5 py-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Filters
                    </h3>
                    <button
                      type="button"
                      onClick={() => setIsFilterDrawerOpen(false)}
                      className="text-gray-500 hover:text-gray-900"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Drawer Content */}
                  <div className="flex-1 overflow-y-auto px-5 py-4">
                    <div className="space-y-5">
                      {/* Category Filter */}
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-900">
                          Category
                        </label>
                        <Select
                          value={packageType}
                          onValueChange={(value) => {
                            setPackageType(value ?? "all");
                            setPage(1);
                          }}
                        >
                          <SelectTrigger className="w-full rounded-lg border-gray-300 bg-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All</SelectItem>
                            {packageTypes.map((type) => (
                              <SelectItem key={type.slug} value={type.slug}>
                                {type.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Price Filter */}
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-900">
                          Price Range
                        </label>
                        <MobilePriceFilter
                          min={minimumPrice}
                          max={maximumPrice}
                          hasPrices={prices.length > 0}
                          value={priceRange}
                          onChange={setSelectedPriceRange}
                          onClear={() => setSelectedPriceRange(null)}
                        />
                      </div>

                      {/* Nights Filter */}
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-900">
                          Nights
                        </label>
                        <Select
                          value={nights}
                          onValueChange={(value) => {
                            setNights(value ?? "all");
                            setPage(1);
                          }}
                        >
                          <SelectTrigger className="w-full rounded-lg border-gray-300 bg-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All</SelectItem>
                            {nightOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Start Date Filter */}
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-900">
                          Start Date
                        </label>
                        <Select
                          value={startDate}
                          onValueChange={(value) => {
                            setStartDate(value ?? "all");
                            setPage(1);
                          }}
                        >
                          <SelectTrigger className="w-full rounded-lg border-gray-300 bg-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All</SelectItem>
                            {startDateOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* End Date Filter */}
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-900">
                          End Date
                        </label>
                        <Select
                          value={endDate}
                          onValueChange={(value) => {
                            setEndDate(value ?? "all");
                            setPage(1);
                          }}
                        >
                          <SelectTrigger className="w-full rounded-lg border-gray-300 bg-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All</SelectItem>
                            {endDateOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Drawer Footer */}
                  <div className="border-t border-[#e9e5dc] px-5 py-4">
                    <button
                      type="button"
                      onClick={() => setIsFilterDrawerOpen(false)}
                      className="w-full rounded-lg bg-primary py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="grid w-full gap-4 py-5 tablet:grid-cols-2 tablet:gap-5 desktop:grid-cols-3 desktop:gap-6">
            {visibleItems.map((packageData) => (
              <PackageCard key={packageData.slug} package={packageData} />
            ))}
          </div>
          {pagination && pagination.last_page > 1 ? (
            <nav
              className="flex items-center justify-center gap-4 pt-4 text-xs text-neutral-500"
              aria-label="Pagination"
            >
              <button
                type="button"
                className="text-neutral-900 disabled:text-neutral-300"
                disabled={page === 1}
                onClick={() => setPage(1)}
              >
                First
              </button>
              <button
                type="button"
                aria-label="Previous page"
                className="text-lg disabled:text-neutral-300"
                disabled={page === 1}
                onClick={() => setPage((current) => current - 1)}
              >
                ‹
              </button>
              {pageNumbers.map((pageNumber) => (
                <button
                  key={pageNumber}
                  type="button"
                  className={
                    pageNumber === page ? "font-semibold text-primary" : ""
                  }
                  onClick={() => setPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              ))}
              <button
                type="button"
                aria-label="Next page"
                className="text-lg disabled:text-neutral-300"
                disabled={page === pagination.last_page}
                onClick={() => setPage((current) => current + 1)}
              >
                ›
              </button>
              <button
                type="button"
                className="text-neutral-900 disabled:text-neutral-300"
                disabled={page === pagination.last_page}
                onClick={() => setPage(pagination.last_page)}
              >
                Last
              </button>
            </nav>
          ) : null}
        </Container>
      </section>
    </>
  );
}
