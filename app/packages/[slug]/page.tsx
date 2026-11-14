import type { Metadata } from "next";
import { PackageList } from "@/components/packages/PackageList";
import { buildPageMetadata } from "@/helpers/metadata";
import { fetchServiceBySlug } from "@/helpers/service-detail";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ type?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await fetchServiceBySlug(slug);

  return buildPageMetadata({
    title: service?.metaTitle,
    description: service?.metaDescription,
    keywords: service?.metaKeywords,
    image: service?.metaImage,
  });
}

export default async function PackagesByServicePage({
  params,
  searchParams,
}: Props) {
  const { slug } = await params;
  const { type } = await searchParams;

  return (
    <main>
      <PackageList serviceSlug={slug} packageCategory={type} />
    </main>
  );
}
