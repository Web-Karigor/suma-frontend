import { useQuery } from "@tanstack/react-query";
import { normalizeHotelsPageResponse } from "@/helpers/hotel";
import { apiFetch } from "@/lib/apiFetch";
import type { HotelsApiResponse, HotelsPageData } from "@/types/hotel";

export function useHotelsQuery() {
  return useQuery<HotelsPageData, Error>({
    queryKey: ["hotels"],
    queryFn: async () => {
      const response = await apiFetch<HotelsApiResponse>("/hotels");
      return normalizeHotelsPageResponse(response);
    },
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
