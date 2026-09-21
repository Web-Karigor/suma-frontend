import type { DestinationCard, DestinationsApiResponse } from "@/types/destination";

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

export function normalizeDestinationsResponse(
  response: DestinationsApiResponse,
): DestinationCard[] {
  return response.data.map((item) => ({
    id: item.id,
    name: item.name,
    slug: item.slug,
    image: resolveImage(item.image),
    imageAlt: item.image_alt_text ?? item.name,
    href: `/packages?destination=${item.slug}`,
  }));
}
