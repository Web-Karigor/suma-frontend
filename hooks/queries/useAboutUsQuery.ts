import { useQuery } from "@tanstack/react-query";
import { normalizeAboutUsResponse } from "@/helpers/about";
import { apiFetch } from "@/lib/apiFetch";
import type { AboutApiResponse, AboutPageData } from "@/types/about";

export function useAboutUsQuery() {
  return useQuery<AboutPageData, Error>({
    queryKey: ["about-us"],
    queryFn: async () => {
      const response = await apiFetch<AboutApiResponse>("/about-us");
      return normalizeAboutUsResponse(response);
    },
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
