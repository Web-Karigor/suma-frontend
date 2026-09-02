import { apiFetch } from "@/lib/apiFetch";
import type {
  HotelCard,
  HotelDetail,
  HotelDetailApiResponse,
  HotelDetailItem,
  HotelGalleryImage,
  HotelsApiResponse,
  HotelsPageData,
} from "@/types/hotel";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80";

export function resolveHotelImage(image: string): string {
  if (!image.trim()) return FALLBACK_IMAGE;
  if (
    image.startsWith("https://suma.webkarigor.com") ||
    image.includes("digitaloceanspaces.com")
  ) {
    return image;
  }
  return FALLBACK_IMAGE;
}

function getFinalPrice(item: HotelDetailItem): { finalPrice: number; discountAmount: number | null } {
  if (item.discount_price && item.discount_type === "fixed" && item.discount_price > 0) {
    return {
      finalPrice: Math.max(item.price - item.discount_price, 0),
      discountAmount: item.discount_price,
    };
  }

  return { finalPrice: item.price, discountAmount: null };
}

function normalizeGallery(item: HotelDetailItem): HotelGalleryImage[] {
  const cover: HotelGalleryImage = {
    url: resolveHotelImage(item.image),
    alt: item.image_alt_text ?? item.title,
  };

  const galleryImages =
    item.gallery?.flatMap((group) =>
      group.images.map((image) => ({
        url: resolveHotelImage(image.url),
        alt: image.alt_text ?? item.title,
      })),
    ) ?? [];

  const unique = new Map<string, HotelGalleryImage>();
  [cover, ...galleryImages].forEach((image) => {
    if (!unique.has(image.url)) unique.set(image.url, image);
  });

  return [...unique.values()];
}

export function normalizeHotelDetail(item: HotelDetailItem): HotelDetail {
  const amenities = item.amenities ?? [];
  const { finalPrice, discountAmount } = getFinalPrice(item);
  const highlights = amenities
    .filter((amenity) => amenity.is_highlighted)
    .map((amenity) => amenity.name);

  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    image: resolveHotelImage(item.image),
    imageAlt: item.image_alt_text ?? item.title,
    shortDescription: item.short_description,
    descriptionHtml: item.description,
    address: item.address,
    mapEmbedHtml: item.address_map_url,
    rating: item.rating,
    price: item.price,
    finalPrice,
    discountAmount,
    isRefundable: item.is_refundable,
    linkUrl: item.link_url ?? "/contact",
    gallery: normalizeGallery(item),
    amenities: amenities.map((amenity) => amenity.name),
    highlights: highlights.length > 0 ? highlights : amenities.slice(0, 5).map((a) => a.name),
    features: item.features ?? [],
    nearbyAttractions: item.nearby_attractions ?? [],
    howToReach: item.how_to_reach ?? [],
    href: `/hotels/${item.slug}`,
  };
}

export function normalizeHotelsResponse(response: HotelsApiResponse): HotelCard[] {
  return response.data.map((item) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    image: resolveHotelImage(item.image),
    imageAlt: item.image_alt_text ?? item.title,
    description: item.short_description,
    rating: item.rating,
    price: item.price,
    isRefundable: item.is_refundable,
    href: `/hotels/${item.slug}`,
  }));
}

export function normalizeHotelsPageResponse(response: HotelsApiResponse): HotelsPageData {
  return {
    page: {
      title: response.page.title,
      headerTitle: response.page.header.title ?? response.page.title,
      headerSubtitle: response.page.header.subtitle,
      headerDescription: response.page.header.short_description,
      banner: response.page.header.banner
        ? resolveHotelImage(response.page.header.banner)
        : null,
      metaTitle: response.page.meta_title,
      metaDescription: response.page.meta_description,
    },
    hotels: normalizeHotelsResponse(response),
  };
}

export async function fetchHotelSlugs(): Promise<string[]> {
  const response = await apiFetch<HotelsApiResponse>("/hotels");
  return response.data.map((item) => item.slug);
}

export async function fetchHotelBySlug(slug: string): Promise<HotelDetail | null> {
  try {
    const response = await apiFetch<HotelDetailApiResponse>(`/hotel/${slug}`);
    const item = response.data[0];
    return item ? normalizeHotelDetail(item) : null;
  } catch {
    return null;
  }
}
