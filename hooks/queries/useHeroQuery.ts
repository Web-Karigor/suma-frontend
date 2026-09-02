import { useQuery } from "@tanstack/react-query";
import { normalizeHeroResponse } from "@/helpers/hero";
import { apiFetch } from "@/lib/apiFetch";
import type { HeroApiResponse, HeroCard } from "@/types/hero";

export function useHeroQuery() {
  return useQuery<HeroCard[], Error>({
    queryKey: ["hero"],
    queryFn: async () => {
      const response = await apiFetch<HeroApiResponse>("/hero");
      return normalizeHeroResponse(response);
    },
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
