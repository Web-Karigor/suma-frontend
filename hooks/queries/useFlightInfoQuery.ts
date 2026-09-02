import { useQuery } from "@tanstack/react-query";
import { normalizeFlightInfoResponse } from "@/helpers/flight-info";
import { apiFetch } from "@/lib/apiFetch";
import type { FlightInfo, FlightInfoApiResponse } from "@/types/flight-info";

export function useFlightInfoQuery() {
  return useQuery<FlightInfo, Error>({
    queryKey: ["flight-info"],
    queryFn: async () => {
      const response = await apiFetch<FlightInfoApiResponse>("/flight-info");
      return normalizeFlightInfoResponse(response);
    },
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
