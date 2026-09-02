import type { DestinationCard, DestinationsApiResponse } from "@/types/destination";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80";

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
