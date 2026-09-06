import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CmsPageView } from "@/components/cms/CmsPageView";
import {
  fetchCmsPageBySlug,
  fetchCmsPageSlugs,
  isCmsPageSlug,
} from "@/helpers/cms-page";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  try {
    const slugs = await fetchCmsPageSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [
      { slug: "faq" },
      { slug: "privacy-policy" },
      { slug: "terms-and-conditions" },
    ];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isCmsPageSlug(slug)) return {};

  const page = await fetchCmsPageBySlug(slug);
  return {
    title: page?.metaTitle ?? page?.title ?? "Page",
    description: page?.metaDescription ?? page?.headerDescription ?? undefined,
  };
}

export default async function CmsSlugPage({ params }: Props) {
  const { slug } = await params;

  if (!isCmsPageSlug(slug)) notFound();

  const page = await fetchCmsPageBySlug(slug);
  if (!page) notFound();

  return <CmsPageView page={page} />;
}
