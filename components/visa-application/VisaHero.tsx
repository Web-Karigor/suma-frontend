"use client";

import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Container } from "@/components/ui/Container";
import type { VisaCountry } from "@/types/visa-application";

type VisaHeroProps = {
  title: string;
  subtitle: string;
  image?: string | null;
  countries: VisaCountry[];
  selectedCountrySlug: string | null;
  onCountryChange: (countrySlug: string) => void;
  onView: () => void;
};

export function VisaHero({
  title,
  subtitle,
  image,
  countries,
  selectedCountrySlug,
  onCountryChange,
  onView,
}: VisaHeroProps) {
  const selectedCountry = countries.find(
    (country) => country.slug === selectedCountrySlug,
  );

  return (
    <section className="relative flex min-h-[380px] items-end overflow-hidden bg-neutral-900 pb-16 pt-28 tablet:min-h-[470px] tablet:pb-20 tablet:pt-0 desktop:min-h-[580px] desktop:pb-24">
      {image ? (
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
      ) : null}
      <div className="absolute inset-0 bg-[#0A0C0C]/64" />
      <Container className="relative z-10 text-center text-white">
        <h1 className="mt-1 text-2xl font-semibold text-[#FEFEFC] lg:text-[32px]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-3 max-w-[620px] text-sm leading-[1.5] text-[#FEFEFC] lg:text-base">
            {subtitle}
          </p>
        ) : null}
        <div className="mx-auto mt-8 flex max-w-[900px] flex-col gap-3 rounded-[12px] border-l-4 border-primary bg-white p-2 text-left tablet:flex-row tablet:flex-wrap tablet:items-center tablet:gap-3 tablet:p-3 desktop:flex-nowrap desktop:gap-4">
          <span className="min-w-0 px-3 text-sm font-medium text-neutral-900 tablet:flex-1">
            Please Select Country
          </span>
          <Select
            value={selectedCountrySlug ?? undefined}
            onValueChange={(value) => {
              if (value) onCountryChange(value);
            }}
          >
            <SelectTrigger
              showCloseIcon
              className="h-11 w-full rounded-md border-0 bg-gray-100 px-4 text-xs text-neutral-700 shadow-none tablet:w-full tablet:max-w-[270px]"
            >
              <SelectValue placeholder="">
                {selectedCountry?.name ?? ""}
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="min-w-[280px] rounded-md border border-gray-200 bg-white p-2 shadow-[0_16px_40px_rgb(10_12_12/16%)] ring-0 capitalize">
              {countries.map((country) => (
                <SelectItem
                  key={country.id}
                  value={country.slug}
                  className="rounded-sm px-4 py-3 pr-10 pl-4 text-base text-neutral-800 focus:bg-teal-50 focus:text-primary data-highlighted:bg-teal-50 data-highlighted:text-primary"
                >
                  {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <button
            type="button"
            onClick={onView}
            disabled={!selectedCountrySlug}
            className="inline-flex h-11 w-full shrink-0 items-center justify-center rounded-md bg-primary px-6 text-xs font-medium text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50 tablet:w-auto tablet:px-8"
          >
            View
          </button>
        </div>
      </Container>
    </section>
  );
}
