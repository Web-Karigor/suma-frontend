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

const COUNTRY_PLACEHOLDER = "__select_country__";

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
        {/* <p className="text-sm tablet:text-base">
          Country pages grouped by region, Asia, Europe, Americas, Africa,
          Australia, and more.
        </p> */}
        <h1 className="mt-1 text-2xl font-semibold lg:text-[32px] text-[#FEFEFC]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-3 max-w-[620px] text-sm leading-[1.5] lg:text-base text-[#FEFEFC]">
            {subtitle}
          </p>
        ) : null}
        <div className="mx-auto mt-8 flex max-w-[900px] flex-col gap-3 rounded-[12px] border-l-4 border-primary bg-white p-2 text-left tablet:flex-row tablet:items-center tablet:gap-4 tablet:p-3">
          <span className="px-3 text-sm font-medium text-neutral-900 tablet:flex-1">
            Please Select Country
          </span>
          <Select
            value={selectedCountrySlug || COUNTRY_PLACEHOLDER}
            onValueChange={(value) =>
              value &&
              onCountryChange(value === COUNTRY_PLACEHOLDER ? "" : value)
            }
          >
            <SelectTrigger
              showCloseIcon
              className="h-11 w-full rounded-md border-0 bg-gray-100 px-4 text-xs text-neutral-700 shadow-none tablet:w-[270px]"
            >
              <SelectValue>{selectedCountry?.name ?? "Select Country"}</SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-white capitalize">
              <SelectItem value={COUNTRY_PLACEHOLDER}>Select Country</SelectItem>
              {countries.map((country) => (
                <SelectItem key={country.id} value={country.slug}>
                  {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <button
            type="button"
            onClick={onView}
            disabled={!selectedCountrySlug}
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-xs font-medium text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            View
          </button>
        </div>
      </Container>
    </section>
  );
}
