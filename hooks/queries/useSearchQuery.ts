import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/apiFetch";

export type SearchItem = {
  id: number;
  title: string;
  slug: string;
  image?: string;
  name?: string;
  thumbnail?: string;
  banner?: string;
  description?: string;
  short_description?: string;
  type?: string;
  address?: string;
  location?: string;
  // Hotel specific
  room_types?: any;
  rating?: number;
  // Package specific
  package_type?: string;
  duration?: string;
  days?: number;
  itinerary?: any;
  // Offer specific
  coupon_code?: string;
  campaign_period?: string;
};

export type SearchResponse = {
  data: {
    hotel: SearchItem[];
    offer: SearchItem[];
    package: SearchItem[];
    blog: SearchItem[];
  };
  success: boolean;
  status: number;
};

export function useSearchQuery(query: string) {
  return useQuery({
    queryKey: ["search", query],
    queryFn: async () => {
      if (!query.trim()) {
        return {
          data: { hotel: [], offer: [], package: [], blog: [] },
          success: true,
          status: 200
        };
      }

      console.log("🌐 Fetching search results for:", query);

      const response = await apiFetch<SearchResponse>("/search", {
        method: "POST",
        body: JSON.stringify({ query: query.trim() }),
      });

      console.log("🌐 API Response:", response);

      return response;
    },
    enabled: !!query.trim(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
