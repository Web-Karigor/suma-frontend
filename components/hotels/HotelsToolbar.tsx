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
  { value: "price-asc", label: "Price Low To High" },
  { value: "price-desc", label: "Price High To Low" },
  { value: "oldest", label: "Oldest" },
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
  const selectedLabel =
    sortOptions.find((option) => option.value === sort)?.label ?? "Newest";

  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
      <h2 className="text-lg font-semibold text-black">
        Hotels ({count} Available)
      </h2>
      <div className="flex items-center gap-2 text-sm text-[#0A0C0C]">
        <span>Sort by:</span>
        <Select value={sort} onValueChange={(value) => value && onSort(value)}>
          <SelectTrigger className="h-9 min-w-[180px] rounded-md border-gray-200 bg-white px-3 font-normal !normal-case text-[#0A0C0C] shadow-none">
            <SelectValue>{selectedLabel}</SelectValue>
          </SelectTrigger>
          <SelectContent
            align="start"
            alignItemWithTrigger={false}
            className="min-w-[200px] rounded-md border border-gray-200 bg-white p-1 shadow-md ring-0"
          >
            {sortOptions.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="rounded-sm py-1.5 pr-3 pl-2.5 font-normal !normal-case text-[#0A0C0C] focus:bg-teal-50 focus:text-primary data-highlighted:bg-teal-50 data-highlighted:text-primary data-[selected]:font-normal [&_svg]:hidden"
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
