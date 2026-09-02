import { useQuery } from "@tanstack/react-query";
import { normalizeAirlinesResponse } from "@/helpers/airline";
import { apiFetch } from "@/lib/apiFetch";
import type { AirlineCard, AirlinesApiResponse } from "@/types/airline";

export function useAirlinesQuery() {
  return useQuery<AirlineCard[], Error>({
    queryKey: ["airlines"],
    queryFn: async () => {
      const response = await apiFetch<AirlinesApiResponse>("/airlines");
      return normalizeAirlinesResponse(response);
    },
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
