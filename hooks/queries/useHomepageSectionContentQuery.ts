import { useQuery } from "@tanstack/react-query";
import { normalizeHomepageSectionContent } from "@/helpers/homepage-section";
import { apiFetch } from "@/lib/apiFetch";
import type {
  HomepageSectionContent,
  HomepageSectionContentApiResponse,
} from "@/types/homepage-section";

export function useHomepageSectionContentQuery() {
  return useQuery({
    queryKey: ["homepage-section-content"],
    queryFn: async () => {
      const response = await apiFetch<HomepageSectionContentApiResponse>(
        "/homepage-section-content",
      );
      return normalizeHomepageSectionContent(response);
    },
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}

export function useHomepageSection(
  key: string,
  fallback: { title: string; subtitle?: string } = { title: "" },
): HomepageSectionContent & { htmlId: string } {
  const { data } = useHomepageSectionContentQuery();
  const item = data?.[key.toLowerCase()];

  return {
    id: item?.id ?? 0,
    pageId: item?.pageId ?? 0,
    sectionId: item?.sectionId ?? 0,
    title: item?.title || fallback.title,
    subtitle: item?.subtitle || fallback.subtitle || "",
    htmlId: key.toLowerCase(),
  };
}
