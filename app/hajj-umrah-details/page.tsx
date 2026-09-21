import {
  PackageDetailHero,
  PackageGallery,
  PackageOverview,
  PackageAccommodation,
  PackageItinerary,
  PackageServices,
  PackageCancellation,
} from "@/components/package-details";
import { HajjContact } from "@/components/hajj";
import { fetchPackageBySlug, isHajjUmrahType } from "@/helpers/packages";

type Props = { searchParams: Promise<{ package?: string }> };

export default async function HajjUmrahDetailsPage({ searchParams }: Props) {
  const { package: packageSlug } = await searchParams;
  const packageData = packageSlug
    ? await fetchPackageBySlug(packageSlug)
    : null;

  const galleryImages = packageData
    ? [packageData.image, ...packageData.gallery].filter(Boolean)
    : [];

  const overview = packageData?.overview || packageData?.description || "";

  const hotels = packageData?.accommodation
    ? [
        {
          name: packageData.accommodation.title || "",
          image: packageData.accommodation.images?.[0] || packageData.image,
          location: packageData.accommodation.location || "",
          rating: packageData.accommodation.customer_rating || 0,
          description: packageData.accommodation.short_description || "",
          nightsStay: packageData.nights,
          privateCar: packageData.accommodation.class_type || undefined,
        },
      ]
    : [];

  const mapPlaces = (
    places: NonNullable<typeof packageData>["itinerary"],
  ) =>
    places.map((place) => ({
      title: place.title,
      description: place.short_description || "",
      image: place.images?.[0]?.url || packageData?.image || "",
      duration: place.activity_duration || undefined,
      mapUrl: place.map_url || undefined,
    }));

  const itinerary = packageData ? mapPlaces(packageData.itinerary) : [];
  const isHajjUmrahPackage = isHajjUmrahType(
    packageData?.hajjUmrahType,
    packageData?.packageType?.slug,
  );
  const sightseeing =
    packageData && isHajjUmrahPackage
      ? mapPlaces(packageData.sightSeeing)
      : [];

  const included = packageData?.services?.included?.length
    ? packageData.services.included
    : packageData?.features.length
      ? packageData.features
      : [];

  const additionalFees = packageData?.services
    ? [
        ...(packageData.services.not_included ?? []),
        ...(packageData.services.available_on_extra_fees ?? []),
      ]
    : [];

  const cancellationPolicies = packageData?.cancellationPolicy
    ? [{ timeframe: packageData.cancellationPolicy }]
    : [];

  return (
    <main className="overflow-x-hidden bg-gold-50">
      {packageData ? (
        <>
          <PackageDetailHero
            title={packageData.title}
            subtitle={packageData.subtitle}
            price={packageData.price}
            groupSize={packageData.packageType?.name ?? ""}
            departureDate={
              packageData.startDate || packageData.endDate
                ? [packageData.startDate, packageData.endDate]
                    .filter(Boolean)
                    .join(" – ")
                : ""
            }
            duration={packageData.nights || ""}
          />
          <PackageGallery images={galleryImages} />
          <PackageOverview description={overview} />
          <PackageAccommodation hotels={hotels} />
          <PackageItinerary itinerary={itinerary} />
          <PackageServices included={included} excluded={additionalFees} />
          <PackageItinerary itinerary={sightseeing} title="Sightseeing" />
          <PackageCancellation policies={cancellationPolicies} />
        </>
      ) : null}
      <HajjContact />
    </main>
  );
}
