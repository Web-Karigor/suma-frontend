import { OfferContent } from "@/components/offer-details/OfferContent";
import { OfferHero } from "@/components/offer-details/OfferHero";
import type { OfferDetail } from "@/types/offer";

export function OfferDetailView({ offer }: { offer: OfferDetail }) {
  return (
    <main>
      <OfferHero offer={offer} />
      <OfferContent shortDescription={offer.shortDescription} html={offer.descriptionHtml} />
    </main>
  );
}
