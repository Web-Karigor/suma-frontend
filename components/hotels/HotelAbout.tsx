"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/icons";
import { Check } from "lucide-react";

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

  // Desktop: 6 columns × 2 rows = 12 items initially
  const visibleLimit = 12;
  const items = more ? amenities : amenities.slice(0, visibleLimit);

  return (
    <div className="mt-10">
      {/* Short Description */}
      {shortDescription ? (
        <p className="text-base font-semibold leading-[170%] text-[#0A0C0C] lg:text-xl">
          {shortDescription}
        </p>
      ) : null}

      {/* Description */}
      {descriptionHtml ? (
        <div
          className="
            prose prose-sm
            mt-3 max-w-none
            text-[#686868]
            [&_h2]:text-[22px]
            [&_h2]:font-semibold
            [&_h2]:text-black
            [&_p]:mt-3
            [&_p]:text-[16px]
            [&_p]:leading-[170%]
          "
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        />
      ) : null}

      {/* Amenities */}
      {amenities.length > 0 ? (
        <section
          id="amenities"
          className="
            mt-8
            rounded-[12px]
            bg-[#F2F8F8]
            px-4 py-4
            lg:px-4 lg:py-4
          "
        >
          {/* Heading */}
          <h3 className="text-base font-semibold text-[#000000] lg:text-[20px]">
            Amenities
          </h3>

          {/* Amenities Grid */}
          <ul
            className="
              mt-4
              grid
              grid-cols-1
              gap-x-6
              gap-y-3

              sm:grid-cols-2
              sm:gap-x-8

              md:grid-cols-3
              md:gap-x-8

              lg:grid-cols-6
              lg:gap-x-8
              lg:gap-y-4
            "
          >
            {items.map((item, index) => (
              <li
                key={`${item}-${index}`}
                className="
                  flex
                  min-w-0
                  items-center
                  gap-2
                  text-[14px]
                  leading-tight
                  text-[#505050]
                  lg:text-[16px]
                  font-medium
                 
                "
              >
                <Check
                  className="
                    size-4
                    shrink-0
                    text-[#686868]
                    lg:size-5
                  "
                />

                <span className="min-w-0 truncate">{item}</span>
              </li>
            ))}
          </ul>

          {/* View More / View Less */}
          {amenities.length > visibleLimit ? (
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                onClick={() => setMore((value) => !value)}
                className="
                  inline-flex
                  cursor-pointer
                  items-center
                  gap-1
                  text-[15px]
                  font-medium
                  text-primary
                  transition-opacity
                  hover:opacity-80
                "
              >
                <span>{more ? "View Less" : "View More"}</span>

                <ChevronDownIcon
                  className={`size-3.5 transition-transform duration-300 ${
                    more ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}
