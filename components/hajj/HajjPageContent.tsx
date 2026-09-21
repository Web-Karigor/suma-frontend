"use client";

import { HajjContact, HajjIntro, HajjPackages } from "@/components/hajj";
import { useServiceDetailQuery } from "@/hooks/queries/useServiceDetailQuery";

const HAJJ_SLUG = "hajj-and-umrah";

export function HajjPageContent() {
  const { data, isLoading } = useServiceDetailQuery(HAJJ_SLUG);

  if (isLoading) return null;

  const intro = {
    title: data?.packageSummary?.title || "",
    subtitle: data?.packageSummary?.subtitle || "",
  };

  const packages = data?.packageSummary?.packages ?? [];

  return (
    <div className="bg-[#FEFBF5] ">
      <HajjIntro title={intro.title} subtitle={intro.subtitle} />
      <HajjPackages packages={packages} />
      <HajjContact />
    </div>
  );
}
