import type { FlightInfo, FlightInfoApiResponse } from "@/types/flight-info";

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

export function normalizeFlightInfoResponse(response: FlightInfoApiResponse): FlightInfo {
  const { data } = response;

  return {
    logo: resolveImage(data.logo),
    logoAlt: data.logo_alt_text ?? "Partner logo",
    image: resolveImage(data.image),
    imageAlt: data.image_alt_text ?? "Travel",
    description: data.short_description,
    features: (data.features ?? []).map((feature) => ({
      icon: resolveImage(feature.icon),
      title: feature.title,
      description: feature.short_description,
    })),
  };
}
