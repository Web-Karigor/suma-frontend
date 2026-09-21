"use client";

import {
  CorporateHero,
  CorporateOverview,
  CorporateAccommodation,
  CorporateItinerary,
  CorporateServices,
  CorporateActivities,
  CorporateCancellation,
  CorporateBooking,
} from "@/components/corporate-tour";
import { useServiceDetailQuery } from "@/hooks/queries/useServiceDetailQuery";
import { usePackageDetailQuery } from "@/hooks/queries/usePackageDetailQuery";

const CORPORATE_SLUG = "corporate-travel";

export function CorporatePageContent({
  packageSlug,
}: {
  packageSlug?: string;
}) {
  const { data, isLoading } = useServiceDetailQuery(CORPORATE_SLUG);
  const packageQuery = usePackageDetailQuery(packageSlug);

  if (isLoading || packageQuery.isLoading) return null;
  const packageData = packageQuery.data;

  const galleryImages = packageData?.gallery.length
    ? packageData.gallery
    : (data?.gallery.map((item) => item.src) ?? []);
  const thumbImages = data?.thumbnails.map((item) => item.src) ?? [];
  const heroImages = [...galleryImages, ...thumbImages].filter(Boolean);

  const overviewDescription =
    packageData?.overview ||
    packageData?.description ||
    data?.overview?.description ||
    data?.overview?.subtitle ||
    "";

  const travelCards = packageData
    ? [
        {
          icon: "star" as const,
          label: "Package Type",
          value: packageData.packageType?.name || "",
        },
        {
          icon: "calendar" as const,
          label: "Date",
          value: [packageData.startDate, packageData.endDate]
            .filter(Boolean)
            .join(" - "),
        },
        {
          icon: "moon" as const,
          label: "Nights",
          value: packageData.nights || "",
        },
      ].filter((card) => card.value)
    : data?.travelInfo?.cards.length
      ? data.travelInfo.cards.map((card, index) => ({
          icon: (["star", "calendar", "moon"] as const)[index % 3],
          label: card.label,
          value: card.value,
        }))
      : [];

  const accommodations = data?.accommodations.items[0];
  const accommodationData = packageData?.accommodation
    ? {
        hotelName: packageData.accommodation.title || "",
        hotelImage: packageData.accommodation.images?.[0] || packageData.image,
        rating: packageData.accommodation.customer_rating || 0,
        location: packageData.accommodation.location || "",
        description: packageData.accommodation.short_description || "",
        amenities: (packageData.accommodation.services ?? []).map((label) => ({
          label,
        })),
        highlights: [] as Array<string | { title: string; description: string }>,
      }
    : accommodations
      ? {
          hotelName: accommodations.title,
          hotelImage: accommodations.image,
          description: accommodations.description || "",
          amenities: [] as Array<{ label: string }>,
          highlights: [] as Array<string | { title: string; description: string }>,
        }
      : null;

  const itinerary = packageData?.itinerary.length
    ? packageData.itinerary.map((step) => ({
        title: step.title,
        description: step.short_description || "",
        image: step.images?.[0]?.url || packageData.image,
        duration: step.activity_duration || "",
      }))
    : data?.treatmentJourney.items.length
      ? data.treatmentJourney.items.map((step) => ({
          title: step.title,
          description: step.description,
          image: "",
          duration: step.number,
        }))
      : [];

  const servicesData = packageData?.services
    ? {
        included: packageData.services.included ?? [],
        additional: packageData.services.available_on_extra_fees ?? [],
        excluded: packageData.services.not_included ?? [],
      }
    : (data?.services ?? { included: [], additional: [], excluded: [] });
  const cancellationPolicies = packageData?.cancellationPolicy
    ? [{ timeframe: packageData.cancellationPolicy }]
    : data?.cancellationHtml
      ? [
          {
            timeframe: data.cancellationHtml
              .replace(/<[^>]+>/g, " ")
              .replace(/\s+/g, " ")
              .trim(),
          },
        ]
      : [];
  const activities =
    packageData?.facilities?.included.length ||
    packageData?.facilities?.addOn.length
      ? [
          ...packageData.facilities.included.map((label) => ({
            label,
            value: "Included",
            included: true,
          })),
          ...packageData.facilities.addOn.map((label) => ({
            label,
            value: "Add-on",
            included: false,
          })),
        ]
      : [];

  const heroTitle =
    packageData?.title || data?.travelInfo?.title || data?.title || "";
  const heroSubtitle =
    packageData?.subtitle ||
    data?.travelInfo?.subtitle ||
    data?.subtitle ||
    "";

  return (
    <>
      <CorporateHero
        title={heroTitle}
        subtitle={heroSubtitle}
        price={packageData?.price ?? 0}
        images={
          packageData
            ? [packageData.image, ...heroImages].filter(Boolean).slice(0, 5)
            : heroImages.slice(0, 5)
        }
      />
      <CorporateOverview
        description={overviewDescription}
        cards={travelCards}
      />
      {accommodationData ? (
        <CorporateAccommodation {...accommodationData} />
      ) : null}
      <CorporateItinerary itinerary={itinerary} />
      <CorporateServices services={servicesData} />
      <CorporateActivities activities={activities} />
      <CorporateCancellation policies={cancellationPolicies} />
      <CorporateBooking />
    </>
  );
}
