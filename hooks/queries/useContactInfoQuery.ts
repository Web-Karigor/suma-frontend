import { useQuery } from "@tanstack/react-query";
import { normalizeContactInfoResponse } from "@/helpers/contact-info";
import { apiFetch } from "@/lib/apiFetch";
import type { ContactInfoApiResponse, ContactOfficeCard } from "@/types/contact-info";

export function useContactInfoQuery() {
  return useQuery<ContactOfficeCard[], Error>({
    queryKey: ["contact-info"],
    queryFn: async () => {
      const response = await apiFetch<ContactInfoApiResponse>("/contact-info");
      return normalizeContactInfoResponse(response);
    },
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
