import type { FlightInfo, FlightInfoApiResponse } from "@/types/flight-info";

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
