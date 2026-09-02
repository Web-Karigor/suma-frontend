import Link from "next/link";
import { ChevronDownIcon } from "@/components/icons";

export function HotelHighlights({ highlights }: { highlights: string[] }) {
  if (highlights.length === 0) return null;

  return (
    <div className="mt-8 grid grid-cols-2 gap-3 tablet:grid-cols-3 desktop:grid-cols-6">
      {highlights.map((label) => (
        <div
          key={label}
          className="flex h-[88px] flex-col items-center justify-center gap-2 rounded-[12px] border border-gray-200 bg-white px-2 text-center"
        >
          <p className="text-[12px] font-medium text-black">{label}</p>
        </div>
      ))}
      <Link
        href="#amenities"
        className="flex h-[88px] flex-col items-center justify-center gap-1 rounded-[12px] border border-gray-200 bg-white text-[12px] font-medium text-primary"
      >
        View All
        <ChevronDownIcon className="size-4" />
      </Link>
    </div>
  );
}
