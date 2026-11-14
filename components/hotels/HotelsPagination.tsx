"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

function getBoundedPageItems(
  page: number,
  lastPage: number,
): Array<number | "gap"> {
  if (lastPage <= 7) {
    return Array.from({ length: lastPage }, (_, index) => index + 1);
  }

  const items: Array<number | "gap"> = [1];
  const start = Math.max(2, page - 1);
  const end = Math.min(lastPage - 1, page + 1);

  if (start > 2) items.push("gap");
  for (let value = start; value <= end; value += 1) items.push(value);
  if (end < lastPage - 1) items.push("gap");
  items.push(lastPage);

  return items;
}

function getPageItems(
  page: number,
  lastPage: number | null,
  hasMore: boolean,
): Array<number | "gap"> {
  if (lastPage != null) return getBoundedPageItems(page, lastPage);

  const pages = [1];
  if (page - 1 > 1) pages.push(page - 1);
  if (page !== 1) pages.push(page);
  if (hasMore) pages.push(page + 1);

  const unique = [...new Set(pages)].sort((left, right) => left - right);
  const items: Array<number | "gap"> = [];

  unique.forEach((value, index) => {
    if (index > 0 && value - unique[index - 1] > 1) items.push("gap");
    items.push(value);
  });

  return items;
}

export function HotelsPagination({
  page,
  hasMore,
  lastPage,
  disabled = false,
  onPageChange,
}: {
  page: number;
  hasMore: boolean;
  lastPage: number | null;
  disabled?: boolean;
  onPageChange: (page: number) => void;
}) {
  const atStart = page <= 1;
  const atEnd = lastPage != null ? page >= lastPage : !hasMore;
  const items = getPageItems(page, lastPage, hasMore);

  return (
    <nav
      className="mt-6 flex flex-wrap items-center justify-center gap-2"
      aria-label="Hotel pages"
    >
      <button
        type="button"
        className="inline-flex h-10 items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-[#0A0C0C] transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-300 disabled:hover:border-gray-200 disabled:hover:text-gray-300"
        disabled={disabled || atStart}
        onClick={() => onPageChange(page - 1)}
      >
        <ChevronLeft className="size-4" aria-hidden="true" />
        Previous
      </button>

      {items.map((item, index) =>
        item === "gap" ? (
          <span
            key={`gap-${index}`}
            className="inline-flex h-10 min-w-10 items-center justify-center text-sm text-gray-400"
            aria-hidden="true"
          >
            …
          </span>
        ) : (
          <button
            key={item}
            type="button"
            aria-current={item === page ? "page" : undefined}
            disabled={disabled}
            onClick={() => onPageChange(item)}
            className={`inline-flex h-10 min-w-10 items-center justify-center rounded-lg border px-3 text-sm font-medium transition-colors disabled:cursor-not-allowed ${
              item === page
                ? "border-primary bg-primary text-white"
                : "border-gray-200 bg-white text-[#0A0C0C] hover:border-primary hover:text-primary"
            }`}
          >
            {item}
          </button>
        ),
      )}

      <button
        type="button"
        className="inline-flex h-10 items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-[#0A0C0C] transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-300 disabled:hover:border-gray-200 disabled:hover:text-gray-300"
        disabled={disabled || atEnd}
        onClick={() => onPageChange(page + 1)}
      >
        Next
        <ChevronRight className="size-4" aria-hidden="true" />
      </button>
    </nav>
  );
}
