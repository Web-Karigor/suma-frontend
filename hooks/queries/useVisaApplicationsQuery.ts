import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/apiFetch";
import type {
  VisaApplication,
  VisaApplicationsApiResponse,
} from "@/types/visa-application";

export function useVisaApplicationsQuery(countryId: number | null) {
  return useQuery<VisaApplication | null, Error>({
    queryKey: ["visa-applications", countryId],
    enabled: countryId !== null,
    queryFn: async () => {
      const response = await apiFetch<VisaApplicationsApiResponse>(
        `/visa-applications?country_id=${countryId}`,
      );
      const application = response.data.find((entry) => entry.status);
      if (!application) return null;

      return {
        ...application,
        country_info: application.country_info
          ? {
            ...application.country_info,
            map_image: application.country_info.map_image?.replace(
              /^http:\/\/suma_admin\.test(?=\/)/,
              "https://suma.webkarigor.com",
            ) ?? null,
          }
          : null,
      };
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
}
