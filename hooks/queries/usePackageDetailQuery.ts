import { useQuery } from "@tanstack/react-query";
import { normalizePackageDetailResponse } from "@/helpers/packages";
import { apiFetch } from "@/lib/apiFetch";
import type { PackageDetail, PackageDetailApiResponse } from "@/types/package";

export function usePackageDetailQuery(slug?: string) {
  return useQuery<PackageDetail, Error>({
    queryKey: ["package-detail", slug],
    queryFn: async () => normalizePackageDetailResponse(
      await apiFetch<PackageDetailApiResponse>(`/package/${slug}`),
    ),
    enabled: Boolean(slug),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
}
