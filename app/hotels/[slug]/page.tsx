import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HotelDetailView } from "@/components/hotels/HotelDetailView";
import { fetchHotelBySlug, fetchHotelSlugs } from "@/helpers/hotel";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  try {
    const slugs = await fetchHotelSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hotel = await fetchHotelBySlug(slug);
  return { title: hotel?.title ?? "Hotel details" };
}

export default async function HotelDetailPage({ params }: Props) {
  const { slug } = await params;
  const hotel = await fetchHotelBySlug(slug);
  if (!hotel) notFound();

  return <HotelDetailView hotel={hotel} />;
}
