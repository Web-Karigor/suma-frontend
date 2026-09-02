import type { ServiceArea, ServiceCard, ServicesApiResponse } from "@/types/service";

const SLUG_AREA: Record<string, ServiceArea> = {
  "visa-assistance": "visa",
  "medical-tourism": "medical",
  "corporate-travel": "corporate",
  "hajj-and-umrah": "hajj",
  "hotel-accomodation": "hotels",
  "holiday-packages": "holiday",
};

const SLUG_HREF: Record<string, string> = {
  "visa-assistance": "/visa-application",
  "medical-tourism": "/medical",
  "corporate-travel": "/corporate-tour",
  "hajj-and-umrah": "/hajj",
  "hotel-accomodation": "/hotels",
  "holiday-packages": "/packages",
};

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80";

function resolveImage(image: string): string {
  if (!image.trim()) return FALLBACK_IMAGE;
  if (
    image.startsWith("https://suma.webkarigor.com") ||
    image.includes("digitaloceanspaces.com")
  ) {
    return image;
  }
  return FALLBACK_IMAGE;
}

export function normalizeServicesResponse(response: ServicesApiResponse): ServiceCard[] {
  return response.data
    .filter((item) => SLUG_AREA[item.slug])
    .map((item) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      description: item.subtitle ?? "",
      image: resolveImage(item.image),
      area: SLUG_AREA[item.slug],
      href: SLUG_HREF[item.slug],
    }));
}
