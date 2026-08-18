"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { airlines } from "@/lib/home-data";
import { cn } from "@/lib/cn";

function takeWrap(list: typeof airlines, start: number, count: number) {
  return Array.from({ length: count }, (_, index) => list[(start + index) % list.length]);
}

const rowOne = takeWrap(airlines, 0, 8);
const rowTwo = takeWrap(airlines, 8, 8);
const rowThree = takeWrap(airlines, 16, 8);

function AirlineTile({ name, code }: { name: string; code: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex size-[72px] shrink-0 items-center justify-center rounded-xl bg-white desktop:size-[174px]">
      {failed ? (
        <span className="text-xs font-semibold text-primary">{code}</span>
      ) : (
        <img
          src={`https://images.kiwi.com/airlines/128/${code}.png`}
          alt={name}
          width={96}
          height={96}
          className="max-h-12 max-w-12 object-contain desktop:max-h-20 desktop:max-w-20"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: ReturnType<typeof takeWrap>;
  direction: "left" | "right" | "left-slow";
}) {
  const track = [...items, ...items, ...items, ...items];
  const trackClass =
    direction === "right"
      ? "airlines-track-right"
      : direction === "left-slow"
        ? "airlines-track-left-slow"
        : "airlines-track-left";

  return (
    <div className="airlines-row overflow-hidden">
      <div className={cn("airlines-track flex w-max gap-3 desktop:gap-6", trackClass)}>
        {track.map((airline, index) => (
          <AirlineTile key={`${airline.code}-${index}`} name={airline.name} code={airline.code} />
        ))}
      </div>
    </div>
  );
}

export function TopAirlines() {
  return (
    <section className="bg-teal-50 py-16 tablet:py-[120px]">
      <div className="mx-auto w-full max-w-[1560px] px-4 desktop:w-[1560px] desktop:px-0">
        <SectionHeading
          title="Top Airlines"
          subtitle="User-friendly platform connects you to top airlines instantly. Enjoy a comfortable and hassle-free journey on any destination and get tickets of top airlines easily."
          className="mb-10 tablet:mb-[60px]"
        />

        <div className="relative w-full overflow-hidden">
          <div className="flex flex-col gap-5 desktop:gap-6">
            <MarqueeRow items={rowOne} direction="left" />
            <MarqueeRow items={rowTwo} direction="right" />
            <MarqueeRow items={rowThree} direction="left-slow" />
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-teal-50 to-transparent tablet:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-teal-50 to-transparent tablet:w-28" />
        </div>
      </div>
    </section>
  );
}
