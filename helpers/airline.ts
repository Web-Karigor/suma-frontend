import type { AirlineCard, AirlinesApiResponse } from "@/types/airline";

function resolveImage(image: string): string {
  if (!image.trim()) return "";
  if (
    image.startsWith("https://suma.webkarigor.com") ||
    image.includes("digitaloceanspaces.com")
  ) {
    return image;
  }
  return "";
}

export function normalizeAirlinesResponse(response: AirlinesApiResponse): AirlineCard[] {
  return response.data.map((item) => ({
    id: item.id,
    name: item.name,
    slug: item.slug,
    image: resolveImage(item.image),
    imageAlt: item.image_alt_text ?? item.name,
  }));
}
