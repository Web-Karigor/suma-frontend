import { useQuery } from "@tanstack/react-query";
import { normalizeOffersResponse } from "@/helpers/offer";
import { apiFetch } from "@/lib/apiFetch";
import type { OfferCard, OffersApiResponse } from "@/types/offer";

export function useOffersQuery() {
  return useQuery<OfferCard[], Error>({
    queryKey: ["offers"],
    queryFn: async () => {
      const response = await apiFetch<OffersApiResponse>("/offers");
      return normalizeOffersResponse(response);
    },
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
