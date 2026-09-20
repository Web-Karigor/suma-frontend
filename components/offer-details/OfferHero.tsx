import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { OfferDetail } from "@/types/offer";

export function OfferHero({ offer }: { offer: OfferDetail }) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Promotions", href: "/" },
    { label: offer.title },
  ];

  return (
    <section className="bg-white pt-24 tablet:pt-28 desktop:pt-32">
      <Container>
        {/* <nav
          aria-label="Breadcrumb"
          className="mb-3 text-base lg:text-lg text-neutral-600 xl:mt-6"
        >
          {breadcrumbs.map((crumb, index) => {
            const last = index === breadcrumbs.length - 1;
            return (
              <span key={`${crumb.label}-${index}`}>
                {index > 0 ? (
                  <span className="px-1.5 text-neutral-400">&gt;</span>
                ) : null}
                {crumb.href && !last ? (
                  <Link href={crumb.href} className="hover:text-primary">
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    className={
                      last ? "text-neutral-800 font-medium" : undefined
                    }
                  >
                    {crumb.label}
                  </span>
                )}
              </span>
            );
          })}
        </nav> */}

        {/* Title */}
        <h1 className="mb-6 mt-5 max-w-[920px] py-4 text-[24px] leading-[1.3] font-bold text-neutral-900 tablet:mb-8 lg:text-[32px] 2xl:text-[36px]">
          {offer.title}
        </h1>
      </Container>

      {/* Banner */}
      <Container>
        <div className="relative h-[280px] overflow-hidden rounded-[16px] tablet:h-[360px] desktop:h-[420px]">
          <Image
            src={offer.banner}
            alt={offer.bannerAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1740px"
          />
        </div>
      </Container>
    </section>
  );
}
