import { useQuery } from "@tanstack/react-query";
import { normalizeServicesResponse } from "@/helpers/service";
import { apiFetch } from "@/lib/apiFetch";
import type { ServiceCard, ServicesApiResponse } from "@/types/service";

export function useServicesQuery() {
  return useQuery<ServiceCard[], Error>({
    queryKey: ["services"],
    queryFn: async () => {
      const response = await apiFetch<ServicesApiResponse>("/services");
      return normalizeServicesResponse(response);
    },
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
