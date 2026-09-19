import { apiFetch } from "@/lib/apiFetch";
import type { AmenitiesApiResponse, Amenity, AmenityItem } from "@/types/amenity";

export function normalizeAmenity(item: AmenityItem): Amenity {
  return {
    id: item.id,
    name: item.name,
    slug: item.slug,
    isHighlighted: item.is_highlighted,
  };
}

export async function fetchAmenities(): Promise<Amenity[]> {
  try {
    const response = await apiFetch<AmenitiesApiResponse>("/aminities");
    return response.data.map(normalizeAmenity);
  } catch (error) {
    console.error("Failed to fetch amenities:", error);
    return [];
  }
}
