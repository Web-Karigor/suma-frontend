import { useQuery } from "@tanstack/react-query";
import {
  FALLBACK_SETTINGS,
  normalizeSettingsResponse,
} from "@/helpers/settings";
import { apiFetch } from "@/lib/apiFetch";
import type { SettingsApiResponse, SiteSettings } from "@/types/settings";

export function useSettingsQuery() {
  return useQuery<SiteSettings, Error>({
    queryKey: ["settings"],
    queryFn: async () => {
      const response = await apiFetch<SettingsApiResponse>("/settings");
      return normalizeSettingsResponse(response);
    },
    staleTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    placeholderData: FALLBACK_SETTINGS,
  });
}
