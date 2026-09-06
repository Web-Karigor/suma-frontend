"use client";

import { HajjContact, HajjIntro, HajjPackages } from "@/components/hajj";
import { useServiceDetailQuery } from "@/hooks/queries/useServiceDetailQuery";
import { hajjPackages } from "@/lib/hajj-data";

const HAJJ_SLUG = "hajj-and-umrah";

export function HajjPageContent() {
  const { data, isLoading } = useServiceDetailQuery(HAJJ_SLUG);

  if (isLoading) return null;

  const intro = {
    title: data?.packageSummary?.title || "Two Journeys, One Sacred Purpose",
    subtitle:
      data?.packageSummary?.subtitle ||
      "Hajj and Umrah are distinct pilgrimages with different rites, timing, and requirements. Explore each to find the right path for you.",
  };

  const packages =
    data?.packageSummary?.packages.length
      ? data.packageSummary.packages
      : hajjPackages.map((item) => ({
          type: item.type,
          title: item.title,
          description: item.description,
          image: item.image,
          highlights: [...item.highlights],
          price: item.price,
          href: item.href,
        }));

  return (
    <>
      <HajjIntro title={intro.title} subtitle={intro.subtitle} />
      <HajjPackages packages={packages} />
      <HajjContact />
    </>
  );
}
