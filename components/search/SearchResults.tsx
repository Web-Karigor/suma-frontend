"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { useSearchQuery } from "@/hooks/queries/useSearchQuery";
import Link from "next/link";
import Image from "next/image";

type SearchResult = {
  id: number;
  title: string;
  type: "hotel" | "package" | "offer" | "blog" | "service";
  slug: string;
  image?: string;
  description?: string;
  href: string;
};

function getResultLink(type: SearchResult["type"], slug: string): string {
  const linkMap: Record<SearchResult["type"], string> = {
    hotel: `/hotels/${slug}`,
    package: `/packages/${slug}`,
    offer: `/offer-details/${slug}`,
    blog: `/${slug}`,
    service: `/${slug}`,
  };
  return linkMap[type];
}

function getTypeLabel(type: SearchResult["type"]): string {
  const labelMap: Record<SearchResult["type"], string> = {
    hotel: "Hotel",
    package: "Package",
    offer: "Special Offer",
    blog: "Blog Post",
    service: "Service",
  };
  return labelMap[type];
}

export function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const { data, isLoading, error } = useSearchQuery(query);

  console.log("🔍 SearchResults render");
  console.log("Query:", query);
  console.log("isLoading:", isLoading);
  console.log("error:", error);
  console.log("Raw API data:", data);

  // Process results based on API structure: { data: { hotel: [], offer: [], package: [], blog: [] } }
  const results: SearchResult[] = React.useMemo(() => {
    console.log("\n=== PROCESSING RESULTS ===");

    if (!data?.data) {
      console.log("❌ No data available");
      return [];
    }

    const apiData = data.data;
    console.log("API data structure:", Object.keys(apiData));

    const processed: SearchResult[] = [];

    // Process each category
    const categories = ["hotel", "package", "offer", "blog"] as const;

    categories.forEach((category) => {
      const items = apiData[category];

      if (!Array.isArray(items)) {
        console.log(`⚠️ ${category}: not an array`);
        return;
      }

      console.log(`\n📦 Processing ${category}: ${items.length} items`);

      items.forEach((item: any, index: number) => {
        console.log(`\n  Item ${index + 1}:`, {
          id: item.id,
          title: item.title,
          slug: item.slug,
          image: item.image,
        });

        if (!item.id || !item.slug || !item.title) {
          console.log(`  ⚠️ SKIPPED - Missing required fields`);
          return;
        }

        const result: SearchResult = {
          id: item.id,
          title: item.title,
          type: category,
          slug: item.slug,
          image: item.image || item.thumbnail || item.banner,
          description: item.description || item.short_description || "",
          href: getResultLink(category, item.slug),
        };

        console.log(`  ✅ Added:`, result.title, `(${result.href})`);
        processed.push(result);
      });
    });

    console.log("\n✅ TOTAL RESULTS:", processed.length);
    return processed;
  }, [data]);

  console.log("Final results array:", results);
  console.log("Will render cards:", results.length > 0);

  return (
    <main className="min-h-screen bg-teal-100 pt-24 pb-16 tablet:pt-28 tablet:pb-20 desktop:pt-32 desktop:pb-24">
      <Container>
        <div className="mb-8 tablet:mb-10">
          <h1 className="text-[28px] font-bold text-neutral-900 tablet:text-[32px] desktop:text-[36px]">
            Search Results
          </h1>
          {query && (
            <p className="mt-2 text-base text-neutral-600 tablet:text-lg">
              Showing results for:{" "}
              <span className="font-semibold text-neutral-900">"{query}"</span>
            </p>
          )}
        </div>

        {isLoading && (
          <div className="py-16 text-center tablet:py-20">
            <div className="space-y-4">
              <div className="mx-auto mb-4 size-12 animate-spin rounded-full border-4 border-teal-200 border-t-teal-600"></div>
              <p className="text-neutral-600">Searching...</p>
            </div>
            <div className="mt-8 grid gap-4 tablet:gap-5 desktop:gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm tablet:gap-5 tablet:p-5"
                >
                  <div className="h-24 w-32 shrink-0 animate-pulse rounded-lg bg-gray-200/60 tablet:h-32 tablet:w-44" />
                  <div className="flex min-w-0 flex-1 flex-col space-y-2">
                    <div className="h-6 w-20 animate-pulse rounded-md bg-gray-200/60" />
                    <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200/60" />
                    <div className="h-4 w-full animate-pulse rounded bg-gray-200/60" />
                    <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200/60" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {error && (
          <div className="rounded-lg bg-red-50 p-4 text-red-700 tablet:p-6">
            <p className="font-medium">
              Error: {error instanceof Error ? error.message : "Search failed"}
            </p>
          </div>
        )}

        {!isLoading && !error && results.length === 0 && query && (
          <div className="rounded-lg bg-white p-8 text-center shadow-sm tablet:p-12">
            <svg
              className="mx-auto mb-4 size-16 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <p className="text-lg font-medium text-neutral-700">
              No results found for "{query}"
            </p>
            <p className="mt-2 text-neutral-500">
              Try searching with different keywords
            </p>
          </div>
        )}

        {!isLoading && results.length > 0 && (
          <>
            <div className="grid gap-4 tablet:gap-5 desktop:gap-6">
              {results.map((result) => {
                console.log("🎨 Rendering card:", result.title);
                return (
                  <Link
                    key={`${result.type}-${result.id}`}
                    href={result.href}
                    className="group flex gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md tablet:gap-5 tablet:p-5 desktop:gap-6 desktop:p-6"
                  >
                    {result.image && (
                      <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-lg tablet:h-32 tablet:w-44 desktop:h-36 desktop:w-52">
                        <Image
                          src={result.image}
                          alt={result.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 128px, (max-width: 1024px) 176px, 208px"
                        />
                      </div>
                    )}
                    <div className="flex min-w-0 flex-1 flex-col">
                      <span className="mb-2 inline-block w-fit rounded-md bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700 tablet:text-sm">
                        {getTypeLabel(result.type)}
                      </span>
                      <h2 className="mb-2 text-lg font-semibold text-neutral-900 transition-colors group-hover:text-primary tablet:text-xl desktop:text-2xl">
                        {result.title}
                      </h2>
                      {result.description && (
                        <p className="line-clamp-2 text-sm text-neutral-600 tablet:text-base">
                          {result.description}
                        </p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 text-center tablet:mt-10">
              <p className="text-sm text-neutral-600 tablet:text-base">
                Found {results.length}{" "}
                {results.length === 1 ? "result" : "results"}
              </p>
            </div>
          </>
        )}
      </Container>
    </main>
  );
}
