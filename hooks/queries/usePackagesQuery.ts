import { useQuery } from "@tanstack/react-query";
import { normalizePackagesResponse } from "@/helpers/packages";
import { apiFetch } from "@/lib/apiFetch";
import type { PackageListData, PackagesApiResponse } from "@/types/package";

export function usePackagesQuery(serviceId: number | undefined, page: number) {
  return useQuery<PackageListData, Error>({
    queryKey: ["packages", serviceId, page],
    queryFn: async () => {
      const response = await apiFetch<PackagesApiResponse>(
        `/packages?service_id=${serviceId}&page=${page}`,
      );
      return normalizePackagesResponse(response);
    },
    enabled: Boolean(serviceId),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}
