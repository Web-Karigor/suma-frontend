import { Suspense } from "react";
import { SearchResults } from "@/components/search/SearchResults";

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}
