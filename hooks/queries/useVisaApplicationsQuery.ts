import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/apiFetch";
import type { VisaApplicationsApiResponse, VisaCountryInfo } from "@/types/visa-application";

export function useVisaApplicationsQuery() {
  return useQuery<VisaCountryInfo | null, Error>({
    queryKey: ["visa-applications"],
    queryFn: async () => {
      const response = await apiFetch<VisaApplicationsApiResponse>("/visa-applications");
      const countryInfo = response.data.find((application) => application.status)?.country_info;
      if (!countryInfo) return null;

      return {
        ...countryInfo,
        map_image: countryInfo.map_image?.replace(
          /^http:\/\/suma_admin\.test(?=\/)/,
          "https://suma.webkarigor.com",
        ) ?? null,
      };
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
}
