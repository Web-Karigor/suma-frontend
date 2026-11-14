import { useQuery } from "@tanstack/react-query";
import { fetchAboutUsResponse, normalizeAboutUsResponse } from "@/helpers/about";
import type { AboutPageData } from "@/types/about";

export function useAboutUsQuery() {
  return useQuery<AboutPageData, Error>({
    queryKey: ["about-us"],
    queryFn: async () => {
      const response = await fetchAboutUsResponse();
      return normalizeAboutUsResponse(response);
    },
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
