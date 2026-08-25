"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CalendarIcon, ClockIcon, ShareIcon, StarIcon } from "@/components/icons";

type PackageDetailHeroProps = {
  title: string;
  subtitle?: string;
  price: number;
  duration: string;
  groupSize: string;
  departureDate: string;
};

const details = [
  { icon: StarIcon, label: "Package Type", key: "groupSize" as const },
  { icon: CalendarIcon, label: "Date", key: "departureDate" as const },
  { icon: ClockIcon, label: "Nights", key: "duration" as const },
];

export function PackageDetailHero({
  title,
  subtitle,
  price,
  duration,
  groupSize,
  departureDate,
}: PackageDetailHeroProps) {
  const values = { groupSize, departureDate, duration };
  const formattedPrice = `৳ ${price.toLocaleString("en-US")}`;

  return (
    <section className="box-border bg-gold-100 pt-[calc(5.5rem+1.5rem)] pb-10 tablet:pt-[calc(5.5rem+2.5rem)] tablet:pb-12 desktop:h-[554px] desktop:pt-[calc(5.5rem+40px)] desktop:pb-10">
      <Container className="desktop-xl:!px-0">
        <div className="mt-4 flex w-full flex-col gap-8 tablet:mt-6 desktop:mt-16 desktop:flex-row desktop:items-end desktop:justify-between desktop:gap-12 desktop-xl:gap-[90px]">
          <div className="flex w-full min-w-0 flex-col gap-6 desktop-xl:max-w-[858px]">
            <div className="flex flex-col gap-3">
              <h1 className="text-[32px] leading-[1.12] font-semibold tracking-[-0.28px] text-hero tablet:text-[44px] desktop-xl:text-[52px]">
                {title}
              </h1>
              {subtitle ? (
                <p className="text-[15px] leading-[1.5] font-normal text-neutral-600 tablet:text-[18px] desktop-xl:text-[20px]">
                  {subtitle}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-neutral-500">Starts From</p>
              <div className="flex flex-wrap items-end gap-2">
                <p className="text-[32px] leading-none font-semibold tracking-[-0.28px] text-primary tablet:text-[40px]">
                  {formattedPrice}
                </p>
                <p className="pb-0.5 text-sm font-normal text-neutral-500">
                  Per Person (VAT Included)
                </p>
              </div>
              <a
                href="#services"
                className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary"
              >
                See What&apos;s Included In This Price?
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 tablet:gap-4">
              <Link
                href="#booking"
                className="inline-flex h-[49px] w-full items-center justify-center rounded-button bg-primary px-4 py-3 text-base font-medium text-white transition-colors hover:bg-primary-700 tablet:w-[180px]"
              >
                Book Now
              </Link>
              <button
                type="button"
                className="inline-flex h-[49px] w-[130px] items-center justify-center gap-2 rounded-button bg-gold-200 px-4 py-3 text-base font-medium text-teal-700 transition-opacity hover:opacity-90"
                onClick={() => {
                  const url = window.location.href;
                  if (navigator.share) {
                    void navigator.share({ title: document.title, url }).catch(() => {
                      void navigator.clipboard.writeText(url).catch(() => undefined);
                    });
                    return;
                  }
                  void navigator.clipboard.writeText(url).catch(() => undefined);
                }}
              >
                <ShareIcon className="size-5 shrink-0" />
                Share
              </button>
            </div>
          </div>

          <div className="flex w-full min-w-0 flex-col gap-4 desktop:max-w-[711px]">
            <div className="flex h-[42px] items-center justify-center rounded-full border border-gold-300">
              <h2 className="text-base font-semibold text-neutral-800 tablet:text-[18px]">
                Package Details
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-3 tablet:grid-cols-3">
              {details.map(({ icon: Icon, label, key }) => (
                <div
                  key={label}
                  className="flex min-h-[110px] flex-col items-center justify-center rounded-[14px] bg-white px-4 py-4 text-center"
                >
                  <div className="flex size-9 items-center justify-center rounded-[7px] bg-gold-200">
                    <Icon className="size-5 text-gold-700" />
                  </div>
                  <p className="mt-2 text-xs text-neutral-500">{label}</p>
                  <p className="mt-1 text-[13px] font-medium text-neutral-800">{values[key]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
