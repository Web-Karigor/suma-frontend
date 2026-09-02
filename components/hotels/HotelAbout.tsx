"use client";

import { useState } from "react";
import { CheckIcon, ChevronDownIcon } from "@/components/icons";

export function HotelAbout({
  descriptionHtml,
  shortDescription,
  amenities,
}: {
  descriptionHtml: string;
  shortDescription: string;
  amenities: string[];
}) {
  const [more, setMore] = useState(false);
  const items = more ? amenities : amenities.slice(0, 8);

  return (
    <div className="mt-10">
      {shortDescription ? (
        <p className="text-[14px] leading-[170%] text-gray-600">{shortDescription}</p>
      ) : null}

      {descriptionHtml ? (
        <div
          className="prose prose-sm mt-3 max-w-none text-gray-600 [&_h2]:text-[22px] [&_h2]:font-semibold [&_h2]:text-black [&_p]:mt-3 [&_p]:text-[14px] [&_p]:leading-[170%]"
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        />
      ) : null}

      {amenities.length > 0 ? (
        <>
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
          {amenities.length > 8 ? (
            <button
              type="button"
              onClick={() => setMore((value) => !value)}
              className="mt-4 inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-primary"
            >
              {more ? "View Less" : "View More"}
              <ChevronDownIcon className={`size-4 ${more ? "rotate-180" : ""}`} />
            </button>
          ) : null}
        </>
      ) : null}
    </div>
  );
}
