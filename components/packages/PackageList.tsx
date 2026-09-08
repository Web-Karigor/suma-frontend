"use client";

import { useMemo, useState } from "react";
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

const FALLBACK = {
  title: "Holiday Packages",
  subtitle: "",
};

const EMPTY_ITEMS: never[] = [];

function PriceFilter({
  min,
  max,
  hasPrices,
  value,
  onChange,
}: {
  min: number;
  max: number;
  hasPrices: boolean;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}) {
  const [open, setOpen] = useState(false);
  const [low, high] = value;
  const span = Math.max(max - min, 1);
  const lowPercent = ((low - min) / span) * 100;
  const highPercent = ((high - min) / span) * 100;

  return (
    <div className="relative h-[46px] w-[160px]">
      <button
        type="button"
        className="flex h-full w-full items-center justify-between rounded-[8px] border-[0.5px] border-gray-900/40 bg-transparent px-3 py-2 text-xs text-gray-900"
        aria-expanded={open}
        disabled={!hasPrices}
        onClick={() => setOpen((current) => !current)}
      >
        <span>Price</span>
        <span className="text-[10px] text-neutral-600">
          ৳ {low.toLocaleString()} - {high.toLocaleString()}
        </span>
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

  if (serviceQuery.isLoading || packagesQuery.isLoading) return null;

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
      <section className="relative -mt-[5.5rem] bg-gold-100 px-4 pt-[calc(5.5rem+2.25rem)] pb-9 tablet:px-8 tablet:pt-[calc(5.5rem+3.5rem)] tablet:pb-14 desktop:pt-[calc(5.5rem+3rem)] desktop:pb-12">
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
          <div className="flex items-center justify-between border-b border-[#e9e5dc] py-6 tablet:py-7">
            <h2 className="text-[28px] leading-[129%] font-medium text-[#0A0C0C]">
              Exclusive Suma Packages{" "}
              <span className="ml-1 text-xs font-normal text-neutral-500">
                ({pagination?.total ?? 0} Items)
              </span>
            </h2>
            <div className="hidden items-center gap-2 text-xs text-neutral-700 tablet:flex">
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
                  <SelectItem value="price-low-high">
                    Price: Low to High
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 border-b border-[#e9e5dc] py-4">
            <span className="mr-1 text-xs text-gray-900">Filter:</span>
            <div className="flex h-[46px] w-[160px] items-center justify-between rounded-[8px] border-[0.5px] border-gray-900/40 bg-transparent px-3 py-2 text-xs text-gray-900">
              <span>Category</span>
              <Select
                value={packageType}
                onValueChange={(value) => {
                  setPackageType(value ?? "all");
                  setPage(1);
                }}
              >
                <SelectTrigger
                  showCloseIcon
                  aria-label="Package type"
                  className="h-full min-w-0 flex-1 gap-0 border-0 bg-transparent p-0 text-xs text-gray-900 shadow-none"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent
                  align="start"
                  alignItemWithTrigger={false}
                  className="min-w-[160px] rounded border border-[#d8d3c8] bg-white p-1 shadow-md ring-0"
                >
                  <SelectItem value="all">All</SelectItem>
                  {packageTypes.map((type) => (
                    <SelectItem key={type.slug} value={type.slug}>
                      {type.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <PriceFilter
              min={minimumPrice}
              max={maximumPrice}
              hasPrices={prices.length > 0}
              value={priceRange}
              onChange={setSelectedPriceRange}
            />
            <div className="flex h-[46px] w-[160px] items-center justify-between rounded-[8px] border-[0.5px] border-gray-900/40 bg-transparent px-3 py-2 text-xs text-gray-900">
              <span>Nights</span>
              <Select
                value={nights}
                onValueChange={(value) => {
                  setNights(value ?? "all");
                  setPage(1);
                }}
              >
                <SelectTrigger
                  showCloseIcon
                  aria-label="Nights"
                  className="h-full min-w-0 flex-1 gap-0 border-0 bg-transparent p-0 text-xs text-gray-900 shadow-none"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent
                  align="start"
                  alignItemWithTrigger={false}
                  className="min-w-[160px] rounded border border-[#d8d3c8] bg-white p-1 shadow-md ring-0"
                >
                  <SelectItem value="all">All</SelectItem>
                  {nightOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex h-[46px] w-[160px] items-center justify-between rounded-[8px] border-[0.5px] border-gray-900/40 bg-transparent px-3 py-2 text-xs text-gray-900">
              <span>Start Date</span>
              <Select
                value={startDate}
                onValueChange={(value) => {
                  setStartDate(value ?? "all");
                  setPage(1);
                }}
              >
                <SelectTrigger
                  showCloseIcon
                  aria-label="Start date"
                  className="h-full min-w-0 flex-1 gap-0 border-0 bg-transparent p-0 text-xs text-gray-900 shadow-none"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent
                  align="start"
                  alignItemWithTrigger={false}
                  className="min-w-[160px] rounded border border-[#d8d3c8] bg-white p-1 shadow-md ring-0"
                >
                  <SelectItem value="all">All</SelectItem>
                  {startDateOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex h-[46px] w-[160px] items-center justify-between rounded-[8px] border-[0.5px] border-gray-900/40 bg-transparent px-3 py-2 text-xs text-gray-900">
              <span>End Date</span>
              <Select
                value={endDate}
                onValueChange={(value) => {
                  setEndDate(value ?? "all");
                  setPage(1);
                }}
              >
                <SelectTrigger
                  showCloseIcon
                  aria-label="End date"
                  className="h-full min-w-0 flex-1 gap-0 border-0 bg-transparent p-0 text-xs text-gray-900 shadow-none"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent
                  align="start"
                  alignItemWithTrigger={false}
                  className="min-w-[160px] rounded border border-[#d8d3c8] bg-white p-1 shadow-md ring-0"
                >
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
