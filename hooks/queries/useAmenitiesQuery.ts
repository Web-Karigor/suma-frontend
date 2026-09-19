import { useQuery } from "@tanstack/react-query";
import { fetchAmenities } from "@/helpers/amenity";
import type { Amenity } from "@/types/amenity";

export function useAmenitiesQuery() {
  return useQuery<Amenity[], Error>({
    queryKey: ["amenities"],
    queryFn: fetchAmenities,
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
