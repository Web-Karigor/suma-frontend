import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

type OfferHeroProps = {
  title: string;
  subtitle: string;
  discount: string;
  validUntil: string;
  heroImage: string;
  offerBadge?: string;
};

export function OfferHero({
  title,
  subtitle,
  discount,
  validUntil,
  heroImage,
  offerBadge,
}: OfferHeroProps) {
  return (
    <section className="relative py-8 md:py-12 bg-paper">
      <Container>
        <div>
          {/* Title Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero mb-3">
              {title}
            </h1>
            <p className="text-base md:text-lg text-neutral-700">{subtitle}</p>
          </div>

          {/* Hero Image with Offer Badge */}
          <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[24/9] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-cover"
              priority
            />

            {/* Offer Badge Overlay */}
            {offerBadge && (
              <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-error text-white px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-lg">
                <p className="text-2xl md:text-3xl font-bold">{discount}</p>
                <p className="text-sm">OFF</p>
              </div>
            )}

            {/* Offer Info Bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-white">
                  <p className="text-sm opacity-90">Limited Time Offer</p>
                  <p className="text-lg md:text-xl font-semibold">
                    Valid Until: {validUntil}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-button font-semibold transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
