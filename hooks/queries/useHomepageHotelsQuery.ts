import { useQuery } from "@tanstack/react-query";
import { normalizeHotelsResponse } from "@/helpers/hotel";
import { apiFetch } from "@/lib/apiFetch";
import type { HomepageHotelsApiResponse, HotelCard } from "@/types/hotel";

export function useHomepageHotelsQuery() {
  return useQuery<HotelCard[], Error>({
    queryKey: ["homepage-hotels"],
    queryFn: async () => {
      const response =
        await apiFetch<HomepageHotelsApiResponse>("/homepage-hotels");
      return normalizeHotelsResponse(response);
    },
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
