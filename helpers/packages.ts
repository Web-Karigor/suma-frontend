import { resolveServiceImage } from "@/helpers/service-detail";
import type {
  PackageApiItem,
  PackageDetail,
  PackageDetailApiResponse,
  PackageItineraryApiItem,
  PackageListData,
  PackageListItem,
  PackageSightSeeingCityApi,
  PackageSightSeeingGroup,
  PackagesApiResponse,
} from "@/types/package";

export function isHajjUmrahType(
  hajjUmrahType?: string | null,
  packageTypeSlug?: string | null,
): boolean {
  const type = `${hajjUmrahType ?? ""} ${packageTypeSlug ?? ""}`.toLowerCase();
  return type.includes("hajj") || type.includes("umrah");
}

function formatDateRange(
  startDate: string | null,
  endDate: string | null,
): string {
  if (!startDate && !endDate) return "";
  if (!startDate) return `Until ${endDate}`;
  if (!endDate) return `From ${startDate}`;
  return `From ${startDate} - To ${endDate}`;
}

function normalizePackage(item: PackageApiItem): PackageListItem {
  const isHajjUmrah = isHajjUmrahType(
    item.hajj_umrah_type,
    item.package_type?.slug,
  );

  return {
    image: resolveServiceImage(item.image),
    title: item.title,
    slug: item.slug,
    hajjUmrahType: item.hajj_umrah_type,
    startDate: item.start_date,
    endDate: item.end_date,
    date: formatDateRange(item.start_date, item.end_date),
    nights: item.nights ? `${item.nights} Nights` : "",
    packageType: item.package_type,
    price: Number(item.price) || 0,
    href: `${isHajjUmrah ? "/hajj-umrah-details" : "/corporate-tour"}?package=${encodeURIComponent(item.slug)}`,
  };
}

function formatSightSeeingTitle(key: string) {
  const labels: Record<string, string> = {
    makka: "Makkah",
    makkah: "Makkah",
    madina: "Madinah",
    madinah: "Madinah",
  };
  const lower = key.toLowerCase();
  if (labels[lower]) return labels[lower];
  return key
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function isSightSeeingDurationNote(value: string) {
  return /average activity duration/i.test(value);
}

function normalizeSightSeeing(value: PackageApiItem["sight_seeing"]): {
  places: PackageItineraryApiItem[];
  groups: PackageSightSeeingGroup[];
} {
  if (Array.isArray(value)) {
    return { places: value, groups: [] };
  }

  if (!value || typeof value !== "object") {
    return { places: [], groups: [] };
  }

  const groups = Object.entries(value as Record<string, PackageSightSeeingCityApi>)
    .map(([id, group]) => ({
      id,
      title: formatSightSeeingTitle(id),
      included: Array.isArray(group?.included) ? group.included : [],
      additionalFees: Array.isArray(group?.available_at_additional_fees)
        ? group.available_at_additional_fees
        : [],
      notIncluded: (Array.isArray(group?.not_included) ? group.not_included : []).filter(
        (item) => !isSightSeeingDurationNote(item),
      ),
    }))
    .filter(
      (group) =>
        group.included.length ||
        group.additionalFees.length ||
        group.notIncluded.length,
    );

  return { places: [], groups };
}

function stripHtml(value: string | null | undefined): string {
  return (
    value
      ?.replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim() ?? ""
  );
}

export function normalizePackageDetailResponse(
  response: PackageDetailApiResponse,
): PackageDetail {
  const item = response.data.package;
  const sightSeeing = normalizeSightSeeing(item.sight_seeing);

  return {
    title: item.title,
    subtitle: item.subtitle ?? "",
    slug: item.slug,
    description: stripHtml(item.description),
    features: item.features ?? [],
    price: Number(item.price) || 0,
    image: resolveServiceImage(item.image),
    imageAltText: item.image_alt_text ?? item.title,
    startDate: item.start_date,
    endDate: item.end_date,
    nights: item.nights ? `${item.nights} Nights` : "",
    hajjUmrahType: item.hajj_umrah_type,
    packageType: item.package_type,
    overview: stripHtml(item.overview),
    gallery: item.gallery ?? [],
    itinerary: Array.isArray(item.itinerary) ? item.itinerary : [],
    sightSeeing: sightSeeing.places,
    sightSeeingGroups: sightSeeing.groups,
    accommodation: item.accommodation ?? null,
    services: item.services ?? null,
    facilities: {
      included: item.facilities?.included ?? [],
      addOn: item.facilities?.add_on ?? [],
    },
    cancellationPolicy: item.cancellation_policy?.trim() ?? "",
  };
}

export async function fetchPackageBySlug(
  slug: string,
): Promise<PackageDetail | null> {
  try {
    const { apiFetch } = await import("@/lib/apiFetch");
    const response = await apiFetch<PackageDetailApiResponse>(
      `/package/${slug}`,
    );
    return normalizePackageDetailResponse(response);
  } catch {
    return null;
  }
}

export function normalizePackagesResponse(
  response: PackagesApiResponse,
): PackageListData {
  return {
    service: response.service,
    items: response.data.map(normalizePackage),
    pagination: response.pagination,
  };
}
