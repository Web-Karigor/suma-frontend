import { resolveServiceImage } from "@/helpers/service-detail";
import type {
  PackageApiItem,
  PackageDetail,
  PackageDetailApiResponse,
  PackageListData,
  PackageListItem,
  PackagesApiResponse,
} from "@/types/package";

function formatDateRange(startDate: string | null, endDate: string | null): string {
  if (!startDate && !endDate) return "";
  if (!startDate) return `Until ${endDate}`;
  if (!endDate) return `From ${startDate}`;
  return `From ${startDate} - To ${endDate}`;
}

function normalizePackage(item: PackageApiItem): PackageListItem {
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
    href: `${item.hajj_umrah_type ? "/hajj-umrah-details" : "/corporate-tour"}?package=${encodeURIComponent(item.slug)}`,
  };
}

function stripHtml(value: string | null | undefined): string {
  return value?.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() ?? "";
}

export function normalizePackageDetailResponse(
  response: PackageDetailApiResponse,
): PackageDetail {
  const item = response.data.package;
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
  };
}

export async function fetchPackageBySlug(slug: string): Promise<PackageDetail | null> {
  try {
    const { apiFetch } = await import("@/lib/apiFetch");
    const response = await apiFetch<PackageDetailApiResponse>(`/package/${slug}`);
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
