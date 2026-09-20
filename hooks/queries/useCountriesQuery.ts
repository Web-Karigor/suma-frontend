import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/apiFetch";
import type { Countries } from "@/types/visa-application";

export function useCountriesQuery() {
    return useQuery<Countries, Error>({
        queryKey: ["countries"],
        queryFn: () => apiFetch<Countries>("/countries"),
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
    });
}