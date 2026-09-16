import { useQuery } from "@tanstack/react-query";
import { normalizeFooterServicesResponse } from "@/helpers/service";
import { apiFetch } from "@/lib/apiFetch";
import type { ServicesApiResponse } from "@/types/service";

export function useFooterServicesQuery() {
  return useQuery<{ label: string; href: string }[], Error>({
    queryKey: ["footer-services"],
    queryFn: async () => {
      const response = await apiFetch<ServicesApiResponse>("/services");
      return normalizeFooterServicesResponse(response);
    },
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
