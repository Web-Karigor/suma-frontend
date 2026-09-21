import { apiFetch } from "@/lib/apiFetch";
import type {
  OfferCard,
  OfferDetail,
  OfferDetailApiResponse,
  OfferDetailItem,
  OffersApiResponse,
} from "@/types/offer";

export function resolveOfferImage(image: string): string {
  if (!image.trim()) return "";
  if (
    image.startsWith("https://suma.webkarigor.com") ||
    image.includes("digitaloceanspaces.com") ||
    image.startsWith("/")
  ) {
    return image;
  }
  return "";
}

export function normalizeOffersResponse(response: OffersApiResponse): OfferCard[] {
  return response.data.map((item) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    image: resolveOfferImage(item.image),
    imageAlt: item.image_alt_text ?? item.title,
    href: `/offer-details/${item.slug}`,
  }));
}

export function normalizeOfferDetail(item: OfferDetailItem): OfferDetail {
  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    shortDescription: item.short_description,
    descriptionHtml: item.description,
    image: resolveOfferImage(item.image),
    imageAlt: item.image_alt_text ?? item.title,
    banner: resolveOfferImage(item.banner || item.image),
    bannerAlt: item.banner_alt_text ?? item.title,
    metaTitle: item.meta.title,
    metaDescription: item.meta.description,
    href: `/offer-details/${item.slug}`,
  };
}

export async function fetchOfferSlugs(): Promise<string[]> {
  const response = await apiFetch<OffersApiResponse>("/offers");
  return response.data.map((item) => item.slug);
}

export async function fetchOfferBySlug(slug: string): Promise<OfferDetail | null> {
  try {
    const response = await apiFetch<OfferDetailApiResponse>(`/offers/${slug}`);
    const item = response.data[0];
    return item ? normalizeOfferDetail(item) : null;
  } catch {
    return null;
  }
}
