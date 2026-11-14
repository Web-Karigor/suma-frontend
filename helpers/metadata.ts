import type { Metadata } from "next";
import { fetchSettings } from "@/helpers/settings";

export type PageMetadataInput = {
  title?: string | null;
  description?: string | null;
  keywords?: string | null;
  image?: string | null;
};

function keywordList(value: string | null | undefined): string[] | undefined {
  const keywords = value
    ?.split(",")
    .map((keyword) => keyword.trim())
    .filter(Boolean);

  return keywords?.length ? keywords : undefined;
}

export async function buildPageMetadata(
  page: PageMetadataInput = {},
): Promise<Metadata> {
  const settings = await fetchSettings();
  const ownTitle = page.title?.trim() || "";
  const title =
    ownTitle ||
    settings.metaTitle ||
    settings.siteName ||
    "Suma BD Travel Management";
  const description =
    page.description?.trim() || settings.metaDescription || undefined;
  const keywords =
    keywordList(page.keywords) ?? keywordList(settings.metaKeywords);
  const image = page.image?.trim() || settings.metaImage || undefined;

  return {
    title: ownTitle ? ownTitle : { absolute: title },
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: image ? [{ url: image }] : undefined,
    },
  };
}
