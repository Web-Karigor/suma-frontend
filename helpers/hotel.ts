import { apiFetch } from "@/lib/apiFetch";
import type {
  HotelCard,
  HotelDetail,
  HotelDetailApiResponse,
  HotelDetailItem,
  HotelGalleryImage,
  HotelItem,
  HotelsApiResponse,
  HotelsPageData,
  HotelsPagination,
  HotelsPaginationMeta,
} from "@/types/hotel";

export const HOTELS_PER_PAGE = 20;

export function hotelsApiPath(page: number) {
  const safePage = Number.isFinite(page) && page > 0 ? Math.floor(page) : 1;
  return `/hotels?page=${safePage}&per_page=${HOTELS_PER_PAGE}`;
}

function normalizeRating(rating: number | null | undefined): number {
  return typeof rating === "number" && Number.isFinite(rating) ? rating : 0;
}

function normalizePrice(price: number | null | undefined): number {
  return typeof price === "number" && Number.isFinite(price) ? price : 0;
}

export function resolveHotelImage(image: string): string {
  if (!image.trim()) return "";
  if (
    image.startsWith("https://admin.sumabd.com") ||
    image.includes("digitaloceanspaces.com") ||
    image.startsWith("/")
  ) {
    return image;
  }
  return "";
}

function getFinalPrice(item: HotelDetailItem): {
  finalPrice: number;
  discountAmount: number | null;
} {
  const price = normalizePrice(item.price);

  if (
    item.discount_price &&
    item.discount_type === "fixed" &&
    item.discount_price > 0
  ) {
    return {
      finalPrice: Math.max(price - item.discount_price, 0),
      discountAmount: item.discount_price,
    };
  }

  return { finalPrice: price, discountAmount: null };
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
    rating: normalizeRating(item.rating),
    price: normalizePrice(item.price),
    finalPrice,
    discountAmount,
    isRefundable: item.is_refundable,
    linkUrl: item.link_url ?? "/contact",
    gallery: normalizeGallery(item),
    amenities: amenities.map((amenity) => amenity.name),
    highlights:
      highlights.length > 0
        ? highlights
        : amenities.slice(0, 5).map((a) => a.name),
    features: item.features ?? [],
    nearbyAttractions: item.nearby_attractions ?? [],
    howToReach: item.how_to_reach ?? [],
    href: `/hotels/${item.slug}`,
  };
}

export function normalizeHotelsResponse(
  response: Pick<HotelsApiResponse, "data">,
): HotelCard[] {
  return response.data.map((item) => {
    const mainPrice = normalizePrice(item.main_price);
    const discountPrice = item.discount_price ? normalizePrice(item.discount_price) : null;
    const finalPrice = discountPrice || mainPrice;

    const allAmenities = item.aminities?.map((a) => a.name) ?? [];
    const highlightedAmenities = item.aminities?.filter((a) => a.is_highlighted).map((a) => a.name) ?? [];

    return {
      id: item.id,
      title: item.title,
      slug: item.slug,
      image: resolveHotelImage(item.image),
      imageAlt: item.image_alt_text ?? item.title,
      description: item.short_description,
      address: item.address,
      rating: normalizeRating(item.rating),
      mainPrice,
      discountPrice,
      finalPrice,
      isRefundable: item.is_refundable,
      amenities: allAmenities,
      highlightedAmenities,
      href: `/hotels/${item.slug}`,
    };
  });
}

function resolveHotelsPagination(
  response: HotelsApiResponse,
  requestedPage: number,
  itemCount: number,
): HotelsPagination {
  const meta = response.pagination ?? response.meta;
  const perPage =
    meta?.per_page && meta.per_page > 0 ? meta.per_page : HOTELS_PER_PAGE;
  const currentPage =
    meta?.current_page && meta.current_page > 0
      ? meta.current_page
      : requestedPage;
  const hasLastPage =
    typeof meta?.last_page === "number" && meta.last_page > 0;
  const hasTotal = typeof meta?.total === "number" && meta.total >= 0;
  const knownTotal = hasLastPage && hasTotal;

  let hasMore: boolean;
  if (response.links && "next" in response.links) {
    hasMore = Boolean(response.links.next);
  } else if (meta && "next_page_url" in meta) {
    hasMore = Boolean(meta.next_page_url);
  } else if (knownTotal) {
    hasMore = currentPage < (meta?.last_page ?? currentPage);
  } else {
    hasMore = itemCount >= perPage;
  }

  const from =
    meta?.from ?? (itemCount > 0 ? (currentPage - 1) * perPage + 1 : null);
  const to =
    meta?.to ?? (itemCount > 0 ? (currentPage - 1) * perPage + itemCount : null);

  return {
    current_page: currentPage,
    last_page: knownTotal ? (meta?.last_page ?? currentPage) : currentPage,
    per_page: perPage,
    total: knownTotal ? (meta?.total ?? itemCount) : itemCount,
    from,
    to,
    has_more: hasMore,
    known_total: knownTotal,
  };
}

export function normalizeHotelsPageResponse(
  response: HotelsApiResponse,
  requestedPage = 1,
): HotelsPageData {
  const hotels = normalizeHotelsResponse(response);

  return {
    page: {
      title: response.page.title,
      headerTitle: response.page.header.title ?? response.page.title,
      headerSubtitle: response.page.header.subtitle,
      headerDescription: response.page.header.short_description,
      banner: response.page.header.banner
        ? resolveHotelImage(response.page.header.banner)
        : null,
      metaTitle: response.page.meta_title?.trim() || null,
      metaDescription: response.page.meta_description?.trim() || null,
      metaKeywords: response.page.meta_keywords?.trim() || null,
      metaImage: response.page.meta_image
        ? resolveHotelImage(response.page.meta_image) || null
        : null,
    },
    hotels,
    pagination: resolveHotelsPagination(response, requestedPage, hotels.length),
  };
}

export async function fetchHotelSlugs(): Promise<string[]> {
  const slugs: string[] = [];
  const seen = new Set<string>();

  for (let page = 1; page <= 50; page += 1) {
    const response = await apiFetch<HotelsApiResponse>(hotelsApiPath(page));
    const batch = response.data ?? [];
    let added = 0;

    for (const item of batch) {
      if (!item.slug || seen.has(item.slug)) continue;
      seen.add(item.slug);
      slugs.push(item.slug);
      added += 1;
    }

    if (batch.length < HOTELS_PER_PAGE || added === 0) break;
  }

  return slugs;
}

export async function fetchHotelBySlug(
  slug: string,
): Promise<HotelDetail | null> {
  try {
    const response = await apiFetch<HotelDetailApiResponse>(`/hotel/${slug}`);
    const item = response.data[0];
    return item ? normalizeHotelDetail(item) : null;
  } catch {
    return null;
  }
}
