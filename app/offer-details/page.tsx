import { OfferContent, OfferCta, OfferHero, OfferTables } from "@/components/offer-details";
import { offerDetails } from "@/lib/offer-details-data";

export default function OfferDetailsPage() {
  return (
    <main className="bg-white">
      <OfferHero
        title={offerDetails.title}
        heroImage={offerDetails.heroImage}
        breadcrumbs={offerDetails.breadcrumbs}
      />
      <OfferTables tables={offerDetails.tables} />
      {offerDetails.cta ? <OfferCta label={offerDetails.cta.label} href={offerDetails.cta.href} /> : null}
      <OfferContent html={offerDetails.contentHtml} />
    </main>
  );
}
