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
  "corporate-travel": "/packages/corporate-travel",
  "hajj-and-umrah": "/hajj",
  "hotel-accomodation": "/hotels",
  "holiday-packages": "/packages/holiday-packages",
};

function resolveImage(image: string): string {
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

// For footer - simpler format
export function normalizeFooterServicesResponse(
  response: ServicesApiResponse,
): { label: string; href: string }[] {
  return response.data.map((item) => ({
    label: item.title,
    href: SLUG_HREF[item.slug] || `/${item.slug}`,
  }));
}
