"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { VisaDetails } from "./VisaDetails";
import { VisaHero } from "./VisaHero";
import { VisaRequirements } from "./VisaRequirements";
import { useServiceDetailQuery } from "@/hooks/queries/useServiceDetailQuery";
import { useCountriesQuery } from "@/hooks/queries/useCountriesQuery";
import { useVisaApplicationsQuery } from "@/hooks/queries/useVisaApplicationsQuery";
import { Container } from "@/components/ui/Container";

const VISA_SLUG = "visa-assistance";
const subscribe = () => () => {};
const getServerSnapshot = () => false;
const getClientSnapshot = () => true;

export function VisaPage() {
  const isClient = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );
  const { data, isLoading: isServiceLoading } = useServiceDetailQuery(VISA_SLUG);
  const { data: countries, isLoading: isCountriesLoading } = useCountriesQuery();
  const [selectedCountrySlugOverride, setSelectedCountrySlug] = useState<
    string | null
  >(null);
  const [appliedCountryId, setAppliedCountryId] = useState<number | null>(null);
  const shouldScrollRef = useRef(false);
  const selectedCountrySlug = selectedCountrySlugOverride;
  const selectedCountryId =
    countries?.data.find((country) => country.slug === selectedCountrySlug)
      ?.id ?? null;
  const { data: visaApplication, isFetched } =
    useVisaApplicationsQuery(appliedCountryId);

  const isPageLoading = isServiceLoading || isCountriesLoading;

  useEffect(() => {
    if (!shouldScrollRef.current || appliedCountryId === null || !isFetched) {
      return;
    }
    shouldScrollRef.current = false;
    requestAnimationFrame(() => {
      document.getElementById("visa-results")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [appliedCountryId, isFetched, visaApplication]);

  if (!isClient || isPageLoading) return null;

  if (!data || !countries?.data.length) {
    return (
      <main>
        <Container className="py-16 text-center text-neutral-900">
          No data found
        </Container>
      </main>
    );
  }

  return (
    <main>
      <VisaHero
        title={data.title}
        subtitle={data.subtitle}
        image={data.image}
        countries={countries.data}
        selectedCountrySlug={selectedCountrySlug}
        onCountryChange={setSelectedCountrySlug}
        onView={() => {
          shouldScrollRef.current = true;
          if (appliedCountryId === selectedCountryId && isFetched) {
            shouldScrollRef.current = false;
            requestAnimationFrame(() => {
              document.getElementById("visa-results")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            });
            return;
          }
          setAppliedCountryId(selectedCountryId);
        }}
      />
      {visaApplication ? (
        <>
          <VisaDetails countryInfo={visaApplication.country_info} />
          <VisaRequirements
            html={
              visaApplication.visa_requirements ?? data.descriptionHtml ?? ""
            }
          />
        </>
      ) : appliedCountryId !== null && isFetched ? (
        <div id="visa-results">
          <Container className="py-8 text-center text-neutral-900">
            No data found
          </Container>
        </div>
      ) : null}
    </main>
  );
}
