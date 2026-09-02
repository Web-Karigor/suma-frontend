import { PinIcon, StarIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { HotelAbout } from "@/components/hotels/HotelAbout";
import { HotelDetailSidebar } from "@/components/hotels/HotelDetailSidebar";
import { HotelGallery } from "@/components/hotels/HotelGallery";
import { HotelHighlights } from "@/components/hotels/HotelHighlights";
import { HotelShareButton } from "@/components/hotels/HotelShareButton";
import { SimilarHotels } from "@/components/hotels/SimilarHotels";
import type { HotelDetail } from "@/types/hotel";

export function HotelDetailView({ hotel }: { hotel: HotelDetail }) {
  return (
    <main>
      <Container className="pt-6 pb-10 tablet:pt-8">
        <div className="flex flex-col gap-4 tablet:flex-row tablet:items-start tablet:justify-between">
          <div>
            <h1 className="text-[28px] leading-[120%] font-semibold text-black tablet:text-[32px]">{hotel.title}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-[14px] text-gray-600">
              <span className="flex text-gold-500">
                {Array.from({ length: hotel.rating }).map((_, i) => (
                  <StarIcon key={i} className="size-3.5" />
                ))}
              </span>
              <span>({hotel.rating.toFixed(1)})</span>
              {hotel.address ? (
                <span className="inline-flex items-center gap-1.5">
                  <PinIcon className="size-3.5" />
                  {hotel.address}
                </span>
              ) : null}
            </div>
          </div>
          <HotelShareButton />
        </div>

        <div className="mt-6 flex flex-col gap-4 desktop:flex-row desktop:items-start">
          <div className="min-w-0 flex-1">
            <HotelGallery images={hotel.gallery} title={hotel.imageAlt} />
            <HotelHighlights highlights={hotel.highlights} />
            <HotelAbout
              descriptionHtml={hotel.descriptionHtml}
              shortDescription={hotel.shortDescription}
              amenities={hotel.amenities}
            />
          </div>
          <HotelDetailSidebar hotel={hotel} />
        </div>
      </Container>
      <SimilarHotels currentSlug={hotel.slug} />
    </main>
  );
}
