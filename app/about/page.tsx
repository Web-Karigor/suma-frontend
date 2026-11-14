import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about";
import { fetchAboutUsResponse, resolveAboutImage } from "@/helpers/about";
import { buildPageMetadata } from "@/helpers/metadata";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const response = await fetchAboutUsResponse();
    const about = response.data.about_us;

    return buildPageMetadata({
      title:
        about.content.meta_title?.trim() ||
        about.title?.trim() ||
        "About Us",
      description: about.content.meta_description,
      keywords: about.content.meta_keywords,
      image: resolveAboutImage(about.content.meta_image ?? ""),
    });
  } catch {
    return buildPageMetadata();
  }
}

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden bg-white">
      <AboutPageContent />
    </main>
  );
}
