"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
] as const;

export function HotelsToolbar({
  count,
  sort,
  onSort,
}: {
  count: number;
  sort: string;
  onSort: (value: string) => void;
}) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
      <h2 className="text-lg font-semibold text-black">Hotels ({count} Available)</h2>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span>Sort by:</span>
        <Select value={sort} onValueChange={(value) => value && onSort(value)}>
          <SelectTrigger className="h-9 min-w-[132px] rounded-md border-gray-200 bg-white px-3 font-semibold text-black shadow-none">
            <SelectValue />
          </SelectTrigger>
          <SelectContent
            align="start"
            alignItemWithTrigger={false}
            className="min-w-[200px] rounded-md border border-black/70 bg-white p-1 shadow-md ring-0"
          >
            {sortOptions.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="rounded-sm py-1.5 pr-3 pl-2.5 font-medium text-black focus:bg-[#2563eb] focus:text-white data-highlighted:bg-[#2563eb] data-highlighted:text-white [&_svg]:hidden"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
