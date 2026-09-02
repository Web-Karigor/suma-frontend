import { useQuery } from "@tanstack/react-query";
import { normalizeDestinationsResponse } from "@/helpers/destination";
import { apiFetch } from "@/lib/apiFetch";
import type { DestinationCard, DestinationsApiResponse } from "@/types/destination";

export function useDestinationsQuery() {
  return useQuery<DestinationCard[], Error>({
    queryKey: ["destinations"],
    queryFn: async () => {
      const response = await apiFetch<DestinationsApiResponse>("/destinations");
      return normalizeDestinationsResponse(response);
    },
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
