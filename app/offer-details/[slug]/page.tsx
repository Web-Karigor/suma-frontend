import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OfferDetailView } from "@/components/offer-details/OfferDetailView";
import { buildPageMetadata } from "@/helpers/metadata";
import { fetchOfferBySlug, fetchOfferSlugs } from "@/helpers/offer";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  try {
    const slugs = await fetchOfferSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const offer = await fetchOfferBySlug(slug);

  return buildPageMetadata({
    title: offer?.metaTitle || offer?.title,
    description: offer?.metaDescription || offer?.shortDescription,
    keywords: offer?.metaKeywords,
    image: offer?.metaImage,
  });
}

export default async function OfferDetailPage({ params }: Props) {
  const { slug } = await params;
  const offer = await fetchOfferBySlug(slug);
  if (!offer) notFound();

  return <OfferDetailView offer={offer} />;
}
