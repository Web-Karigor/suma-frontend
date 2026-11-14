import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { hotelsApiPath, normalizeHotelsPageResponse } from "@/helpers/hotel";
import { apiFetch } from "@/lib/apiFetch";
import type { HotelsApiResponse, HotelsPageData } from "@/types/hotel";

export async function fetchHotelsPage(page: number): Promise<HotelsPageData> {
  const response = await apiFetch<HotelsApiResponse>(hotelsApiPath(page));
  return normalizeHotelsPageResponse(response, page);
}

export function useHotelsQuery(page = 1) {
  return useQuery<HotelsPageData, Error>({
    queryKey: ["hotels", page],
    queryFn: () => fetchHotelsPage(page),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
