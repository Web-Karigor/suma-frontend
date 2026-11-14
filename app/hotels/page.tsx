import type { Metadata } from "next";
import { Suspense } from "react";
import { HotelsView } from "@/components/hotels";
import { buildPageMetadata } from "@/helpers/metadata";
import { fetchHotelsPage } from "@/hooks/queries/useHotelsQuery";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await fetchHotelsPage(1);
    return buildPageMetadata({
      title: data.page.metaTitle,
      description: data.page.metaDescription,
      keywords: data.page.metaKeywords,
      image: data.page.metaImage,
    });
  } catch {
    return buildPageMetadata();
  }
}

export default function HotelsPage() {
  return (
    <main>
      <Suspense fallback={null}>
        <HotelsView />
      </Suspense>
    </main>
  );
}
