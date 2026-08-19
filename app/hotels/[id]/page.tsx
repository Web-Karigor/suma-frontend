import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HotelDetailView } from "@/components/hotels/HotelDetailView";
import { getHotelDetail, hotelListings } from "@/lib/hotels-data";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return hotelListings.flatMap((hotel) => {
    const slug = hotel.href.split("/").pop() ?? hotel.id;
    return slug === hotel.id ? [{ id: hotel.id }] : [{ id: hotel.id }, { id: slug }];
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const hotel = getHotelDetail(id);
  return { title: hotel?.name ?? "Hotel details" };
}

export default async function HotelDetailPage({ params }: Props) {
  const { id } = await params;
  const hotel = getHotelDetail(id);
  if (!hotel) notFound();

  return <HotelDetailView hotel={hotel} />;
}
