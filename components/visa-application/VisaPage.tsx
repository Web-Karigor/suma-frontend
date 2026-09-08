"use client";

import { VisaBanner } from "./VisaBanner";
import { VisaDetails } from "./VisaDetails";
import { VisaHero } from "./VisaHero";
import { VisaRequirements } from "./VisaRequirements";
import { useServiceDetailQuery } from "@/hooks/queries/useServiceDetailQuery";
import { useVisaApplicationsQuery } from "@/hooks/queries/useVisaApplicationsQuery";
import { visaRequirementsHtml } from "@/lib/visa-data";

const VISA_SLUG = "visa-assistance";

export function VisaPage() {
  const { data, isLoading } = useServiceDetailQuery(VISA_SLUG);
  const { data: countryInfo } = useVisaApplicationsQuery();

  if (isLoading) return null;

  return (
    <main>
      <VisaHero
        title={data?.title || "Visa Assistance"}
        subtitle={
          data?.subtitle ||
          "Start browsing patterns where a ShareTrip Visa Guide. Document checklist, processing time, and inquiry document form."
        }
        image={data?.image || "/images/visa-hero.png"}
      />
      <VisaBanner />
      
      <VisaDetails countryInfo={countryInfo} />
      <VisaRequirements
        html={data?.descriptionHtml || visaRequirementsHtml}
      />
    </main>
  );
}
