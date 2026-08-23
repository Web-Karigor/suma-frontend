import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

type RelatedOffer = {
  id: string;
  title: string;
  image: string;
  discount: string;
  price: number;
  validUntil: string;
};

type OfferRelatedProps = {
  offers: RelatedOffer[];
};

export function OfferRelated({ offers }: OfferRelatedProps) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-hero mb-3">
              Offers You May Like
            </h2>
            <p className="text-base text-neutral-600">
              Check out these other exclusive deals
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <Link
                key={offer.id}
                href={`/offers/${offer.id}`}
                className="group bg-paper rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-error text-white px-3 py-1 rounded-lg font-bold text-sm">
                    {offer.discount}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-hero mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {offer.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-neutral-600">Starting from</p>
                      <p className="text-xl font-bold text-primary">
                        ৳ {offer.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-neutral-500">Valid until</p>
                      <p className="text-sm font-medium text-neutral-700">
                        {offer.validUntil}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
