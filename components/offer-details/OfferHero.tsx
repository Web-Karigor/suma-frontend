import { CoverImage } from "@/components/ui/CoverImage";
import { Container } from "@/components/ui/Container";
import { OfferShareButton } from "@/components/offer-details/OfferShareButton";
import type { OfferDetail } from "@/types/offer";

export function OfferHero({ offer }: { offer: OfferDetail }) {
  return (
    <section className="bg-white pt-24 tablet:pt-28 desktop:pt-32">
      <Container className="max-w-[1320px]">
        <div className="mb-6 mt-5 flex flex-col gap-4 py-4 tablet:mb-8 tablet:flex-row tablet:items-start tablet:justify-between tablet:gap-6">
          <h1 className="min-w-0 max-w-[920px] text-[24px] leading-[1.3] font-bold text-neutral-900 lg:text-[32px] 2xl:text-[36px]">
            {offer.title}
          </h1>
          <OfferShareButton />
        </div>
      </Container>

      {/* Banner */}
      <Container className="max-w-[1320px]">
        <div className="relative h-[280px] overflow-hidden rounded-[16px] bg-teal-900 tablet:h-[360px] desktop:h-[420px] bottom-5">
          <CoverImage
            src={offer.banner}
            alt={offer.bannerAlt}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1740px"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
