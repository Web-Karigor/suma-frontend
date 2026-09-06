import { useQuery } from "@tanstack/react-query";
import { normalizeServiceDetailResponse } from "@/helpers/service-detail";
import { apiFetch } from "@/lib/apiFetch";
import type {
  ServiceDetailApiResponse,
  ServiceDetailPageData,
} from "@/types/service-detail";

export function useServiceDetailQuery(slug: string) {
  return useQuery<ServiceDetailPageData, Error>({
    queryKey: ["service-detail", slug],
    queryFn: async () => {
      const response = await apiFetch<ServiceDetailApiResponse>(`/service/${slug}`);
      return normalizeServiceDetailResponse(response);
    },
    enabled: Boolean(slug),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: false,
  });
}
