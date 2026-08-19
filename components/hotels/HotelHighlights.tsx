import Link from "next/link";
import { ChevronDownIcon } from "@/components/icons";
import { hotelHighlights } from "@/lib/hotels-data";

function HighlightIcon({ type }: { type: string }) {
  const cls = "size-6 text-primary";
  if (type === "pool") {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden="true">
        <path d="M4 16c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6 14V9a3 3 0 0 1 6 0v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "wifi") {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden="true">
        <path d="M5 10.5a9 9 0 0 1 14 0M8 13.5a5 5 0 0 1 8 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="17" r="1.2" fill="currentColor" />
      </svg>
    );
  }
  if (type === "spa") {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden="true">
        <path d="M12 20s6-4 6-9.2A4.8 4.8 0 0 0 12 6a4.8 4.8 0 0 0-6 4.8C6 16 12 20 12 20z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }
  if (type === "dine") {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden="true">
        <path d="M5 4v8M8 4v8M5 8h3M16 4v16M16 8c2 0 3-1.5 3-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden="true">
      <path d="M5 12c2-4 4-6 7-6s5 2 7 6c-2 4-4 6-7 6s-5-2-7-6z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function HotelHighlights() {
  return (
    <div className="mt-8 grid grid-cols-2 gap-3 tablet:grid-cols-3 desktop:grid-cols-6">
      {hotelHighlights.map((item) => (
        <div
          key={item.label}
          className="flex h-[88px] flex-col items-center justify-center gap-2 rounded-[12px] border border-gray-200 bg-white px-2 text-center"
        >
          <HighlightIcon type={item.icon} />
          <p className="text-[12px] font-medium text-black">{item.label}</p>
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
