import Link from "next/link";
import {
  ArrowDown,
  GlassWater,
  Waves,
  UtensilsCrossed,
  Sparkles,
  Wifi,
} from "lucide-react";

const highlightIcons = [GlassWater, Waves, UtensilsCrossed, Sparkles, Wifi];

export function HotelHighlights({ highlights }: { highlights: string[] }) {
  if (highlights.length === 0) return null;

  return (
    <section className="mt-8 w-full bg-[#F2F8F8] px-3 py-4 sm:px-4 md:px-5 lg:px-4 rounded-xl">
      <div className="w-full">
        {/* Heading */}
        <h2 className="mb-3 text-lg font-semibold leading-tight text-[#0A0C0C] lg:text-xl">
          Highlighted Amenities
        </h2>

        {/* Highlight Cards */}
        <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3 md:gap-2.5 lg:grid-cols-6">
          {highlights.slice(0, 5).map((label, index) => {
            const Icon = highlightIcons[index % highlightIcons.length];

            return (
              <div
                key={label}
                className="
                  flex min-w-0 w-full
                  h-[100px] sm:h-[108px] lg:h-[116px]
                  flex-col items-center justify-center
                  gap-2
                  rounded-[12px]
                  border-[0.5px] border-[#268F8E]
                  bg-transparent
                  px-2
                  text-center
                "
              >
                <Icon
                  className="
                    size-7
                    shrink-0
                    text-[#008B89]
                    sm:size-8
                  "
                  strokeWidth={2}
                />

                <p
                  className="
                    w-full truncate
                    text-[11px]
                    font-medium
                    leading-tight
                    text-[#505050]
                    sm:text-[12px]
                  "
                  title={label}
                >
                  {label}
                </p>
              </div>
            );
          })}

          {/* View All */}
          <Link
            href="#amenities"
            className="
    flex min-w-0 w-full
    h-[100px] sm:h-[108px] lg:h-[116px]
    items-center justify-center
    gap-4
    rounded-[12px]
    border-[0.5px] border-[#268F8E]
    bg-transparent
    px-2
    text-center
    text-[15px]
    font-medium
    text-primary
    transition-colors
    hover:bg-primary/5
   
  "
          >
            <ArrowDown
              className="size-7 shrink-0 text-primary"
              strokeWidth={1.5}
            />

            <span>View All</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
