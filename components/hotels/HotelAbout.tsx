"use client";

import { useState } from "react";
import { CheckIcon, ChevronDownIcon } from "@/components/icons";
import { hotelAmenities, hotelDescription } from "@/lib/hotels-data";

export function HotelAbout() {
  const [more, setMore] = useState(false);
  const items = more ? hotelAmenities : hotelAmenities.slice(0, 8);

  return (
    <div className="mt-10">
      <h2 className="text-[22px] font-semibold text-black">Get the celebrity treatment with world-class service</h2>
      {hotelDescription.map((p) => (
        <p key={p} className="mt-3 text-[14px] leading-[170%] text-gray-600">
          {p}
        </p>
      ))}

      <h3 id="amenities" className="mt-8 text-[22px] font-semibold text-black">
        Amenities
      </h3>
      <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 tablet:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-[14px] text-neutral-800">
            <CheckIcon className="size-4 shrink-0 text-primary" />
            {item}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => setMore((v) => !v)}
        className="mt-4 inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-primary"
      >
        {more ? "View Less" : "View More"}
        <ChevronDownIcon className={`size-4 ${more ? "rotate-180" : ""}`} />
      </button>
    </div>
  );
}
