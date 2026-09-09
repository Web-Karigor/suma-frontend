import type {
  ServiceDetailApiResponse,
  ServiceDetailItem,
  ServiceDetailPageData,
  ServiceGalleryItem,
  ServiceHajjPackage,
  ServiceHeroCard,
  ServicePackageSummary,
  ServiceStat,
  ServiceWhyChoose,
  ServiceWhyItem,
} from "@/types/service-detail";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80";

const CARD_ICONS = {
  treatment: "/images/corporate-tour/icons/star.svg",
  countries: "/images/corporate-tour/icons/calendar.svg",
  support: "/images/corporate-tour/icons/moon.svg",
} as const;

export function resolveServiceImage(image: string | null | undefined): string {
  if (!image?.trim()) return FALLBACK_IMAGE;
  if (
    image.startsWith("https://suma.webkarigor.com") ||
    image.includes("digitaloceanspaces.com")
  ) {
    return image;
  }
  return FALLBACK_IMAGE;
}

function asText(value: string | number | null | undefined): string {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

function normalizeMediaList(
  items: ServiceDetailItem["gallery"] | ServiceDetailItem["thumbnails"],
): ServiceGalleryItem[] {
  if (!items?.length) return [];
  return items.map((entry) => ({
    src: resolveServiceImage(entry.url),
    alt: asText(entry.alt_text) || "Service media",
    text: asText(entry.text),
  }));
}

function normalizeTravelInfo(
  item: ServiceDetailItem,
): ServiceDetailPageData["travelInfo"] {
  const info = item.travel_info ?? item.tour_info;
  if (!info) return null;

  const cards: ServiceHeroCard[] = [
    {
      icon: CARD_ICONS.treatment,
      label: "TREATMENT",
      value: asText(info.treatment),
    },
    {
      icon: CARD_ICONS.countries,
      label: "COUNTRIES",
      value: asText(info.countries),
    },
    {
      icon: CARD_ICONS.support,
      label: "SUPPORT",
      value: asText(info.support),
    },
  ].filter((card) => card.value);

  const stats: ServiceStat[] = [
    {
      value: asText(info.travellers_serve),
      label: "Travelers we served",
    },
    {
      value: asText(info.customer_support),
      label: "Customer Support",
    },
    {
      value: asText(info.steps_full_managed),
      label: "Steps, Fully Managed",
    },
    {
      value: asText(info.transparent_pricing),
      label: "Transparent Pricing",
    },
  ];

  return {
    title: asText(info.title) || item.title,
    subtitle: asText(info.subtitle),
    cards,
    stats: stats.filter((stat) => Boolean(stat.value)),
  };
}

function normalizeOverview(
  item: ServiceDetailItem,
): ServiceDetailPageData["overview"] {
  if (!item.overview) return null;
  const title = asText(item.overview.title);
  const subtitle = asText(item.overview.subtitle);
  const description = asText(item.overview.description);
  if (!title && !subtitle && !description) return null;
  return { title, subtitle, description };
}

function normalizeWhyChoose(
  why: ServiceWhyChoose | null,
): ServiceDetailPageData["whyChoose"] {
  if (!why) return null;

  const items: ServiceWhyItem[] = (why.items ?? []).map((entry) => ({
    icon: resolveServiceImage(entry.icon),
    title: entry.title,
    subtitle: asText(entry.subtitle ?? entry.description),
  }));

  const images = (why.images ?? []).map((src) => resolveServiceImage(src));

  if (
    !why.title &&
    !why.subtitle &&
    items.length === 0 &&
    images.length === 0
  ) {
    return null;
  }

  return {
    title: asText(why.title),
    subtitle: asText(why.subtitle),
    images,
    items,
  };
}

function normalizePackageSide(
  side: ServicePackageSummary["hajj"],
  type: string,
  title: string,
  fallbackImage: string,
): ServiceHajjPackage | null {
  if (!side) return null;

  const startingFrom = asText(side.starting_from);
  const price = startingFrom.replace(/^starting from\s*/i, "").trim();

  return {
    type,
    title,
    description: asText(side.short_description),
    image: resolveServiceImage(side.image || fallbackImage),
    highlights: side.highlights ?? [],
    price,
    href: `/packages/hajj-and-umrah?type=${type === "Annual" ? "hajj" : "umrah"}`,
  };
}

function normalizePackageSummary(
  summary: ServicePackageSummary | null,
  fallbackImage: string,
): ServiceDetailPageData["packageSummary"] {
  if (!summary) return null;

  const packages = [
    normalizePackageSide(
      summary.hajj,
      "Annual",
      "Hajj Package Summary",
      fallbackImage,
    ),
    normalizePackageSide(
      summary.umrah,
      "Anytime",
      "Umrah Package Summary",
      fallbackImage,
    ),
  ].filter(Boolean) as ServiceHajjPackage[];

  if (!summary.title && !summary.subtitle && packages.length === 0) return null;

  return {
    title: asText(summary.title),
    subtitle: asText(summary.subtitle),
    packages,
  };
}

export function normalizeServiceDetailResponse(
  response: ServiceDetailApiResponse,
): ServiceDetailPageData {
  const item = response.data.service;
  const image = resolveServiceImage(item.image);
  const specialities = item.specialities?.sections ?? [];
  const networks = item.networks?.sections ?? [];
  const accommodations = item.accomodations?.sections ?? [];
  const journey = item.treatment_journey?.sections ?? [];
  const destinations = item.destinations?.sections ?? [];

  return {
    id: item.id,
    slug: item.slug,
    title: item.title,
    subtitle: asText(item.subtitle),
    descriptionHtml: item.description,
    image,
    banner: item.banner ? resolveServiceImage(item.banner) : null,
    thumbnails: normalizeMediaList(item.thumbnails),
    gallery: normalizeMediaList(item.gallery),
    travelInfo: normalizeTravelInfo(item),
    overview: normalizeOverview(item),
    specialities: {
      title: asText(item.specialities?.title),
      subtitle: asText(item.specialities?.subtitle),
      items: specialities.map((entry) => ({
        title: entry.title,
        image: resolveServiceImage(entry.image),
      })),
    },
    networks: {
      title: asText(item.networks?.title),
      subtitle: asText(item.networks?.subtitle),
      items: networks.map((entry) => ({
        name: asText(entry.hospital_name) || "Partner",
        location: asText(entry.location),
        accreditation: asText(entry.certificate_name) || "Accredited",
        specialties: asText(entry.specialities_in)
          ? asText(entry.specialities_in)
              .split(",")
              .map((part) => part.trim())
              .filter(Boolean)
          : [],
        image: resolveServiceImage(entry.image),
        mapUrl: asText(entry.map_url),
      })),
    },
    accommodations: {
      title: asText(item.accomodations?.title),
      subtitle: "",
      items: accommodations.map((entry) => ({
        title: entry.title,
        description: asText(entry.short_description),
        image: resolveServiceImage(entry.image),
      })),
    },
    treatmentJourney: {
      title: asText(item.treatment_journey?.title),
      subtitle: asText(item.treatment_journey?.subtitle),
      items: journey.map((entry, index) => ({
        number: String(index + 1).padStart(2, "0"),
        title: entry.title,
        description: asText(entry.short_description),
      })),
    },
    destinations: {
      title: asText(item.destinations?.title),
      subtitle: "",
      items: destinations.map((entry) => ({
        name: asText(entry.country_name) || "Destination",
        image: resolveServiceImage(entry.image),
        knownFor: asText(entry.known_for),
      })),
    },
    services: item.services
      ? {
          included: item.services.included ?? [],
          additional: item.services.available_at_extra_fees ?? [],
          excluded: item.services.not_included ?? [],
        }
      : null,
    cancellationHtml: asText(item.cancellation_policy) || null,
    whyChoose: normalizeWhyChoose(item.why_webkarigor),
    packageSummary: normalizePackageSummary(item.package_summery, image),
    metaTitle: item.meta?.title ?? null,
    metaDescription: item.meta?.description ?? null,
  };
}

export async function fetchServiceBySlug(
  slug: string,
): Promise<ServiceDetailPageData | null> {
  try {
    const { apiFetch } = await import("@/lib/apiFetch");
    const response = await apiFetch<ServiceDetailApiResponse>(
      `/service/${slug}`,
    );
    return normalizeServiceDetailResponse(response);
  } catch {
    return null;
  }
}
