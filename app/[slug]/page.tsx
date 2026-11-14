import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";
import { CmsPageView } from "@/components/cms/CmsPageView";
import { HajjPageContent } from "@/components/hajj/HajjPageContent";
import { HotelsView } from "@/components/hotels";
import { MedicalPageContent } from "@/components/medical/MedicalPageContent";
import { PackageList } from "@/components/packages/PackageList";
import { VisaPage } from "@/components/visa-application";
import {
  fetchCmsPageBySlug,
  fetchCmsPageSlugs,
  isCmsPageSlug,
} from "@/helpers/cms-page";
import { buildPageMetadata } from "@/helpers/metadata";
import { fetchServiceBySlug } from "@/helpers/service-detail";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ type?: string; package?: string }>;
};

export async function generateStaticParams() {
  try {
    const slugs = await fetchCmsPageSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (isCmsPageSlug(slug)) {
    const page = await fetchCmsPageBySlug(slug);
    return buildPageMetadata({
      title: page?.metaTitle || page?.title,
      description: page?.metaDescription || page?.headerDescription,
      keywords: page?.metaKeywords,
      image: page?.metaImage,
    });
  }

  const service = await fetchServiceBySlug(slug);
  if (!service) return buildPageMetadata();

  return buildPageMetadata({
    title: service.metaTitle || service.title,
    description: service.metaDescription || service.subtitle,
    keywords: service.metaKeywords,
    image: service.metaImage,
  });
}

export default async function SlugPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const query = await searchParams;

  if (isCmsPageSlug(slug)) {
    const page = await fetchCmsPageBySlug(slug);
    if (!page) notFound();
    return <CmsPageView page={page} />;
  }

  const service = await fetchServiceBySlug(slug);
  if (!service) notFound();

  if (slug === "medical-tourism") {
    return (
      <main className="overflow-x-hidden bg-teal-100">
        <MedicalPageContent />
      </main>
    );
  }

  if (slug === "visa-assistance") {
    return <VisaPage />;
  }

  if (slug === "corporate-travel") {
    redirect("/packages/corporate-travel");
  }

  if (slug === "hajj-and-umrah") {
    return (
      <main>
        <HajjPageContent />
      </main>
    );
  }

  if (slug === "hotel-accomodation") {
    return (
      <main>
        <Suspense fallback={null}>
          <HotelsView serviceSlug={slug} />
        </Suspense>
      </main>
    );
  }

  return (
    <main>
      <PackageList serviceSlug={slug} packageCategory={query.type} />
    </main>
  );
}
