import { useQuery } from "@tanstack/react-query";
import { normalizeFooterPagesResponse } from "@/helpers/pages";
import { apiFetch } from "@/lib/apiFetch";
import type { PagesApiResponse, FooterPage } from "@/types/pages";

export function usePagesQuery() {
  return useQuery<FooterPage[], Error>({
    queryKey: ["pages"],
    queryFn: async () => {
      const response = await apiFetch<PagesApiResponse>("/pages");
      return normalizeFooterPagesResponse(response);
    },
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
