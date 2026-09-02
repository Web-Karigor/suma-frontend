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
    <section className="relative -mt-0">
      <div className="relative h-[280px] overflow-hidden tablet:h-[360px] desktop:h-[420px]">
        <Image
          src={offer.banner}
          alt={offer.bannerAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-overlay-black-48" />

        <Container className="relative z-10 flex h-full flex-col justify-end pb-6 tablet:pb-8">
          <nav aria-label="Breadcrumb" className="mb-3 text-[13px] text-white/80">
            {breadcrumbs.map((crumb, index) => {
              const last = index === breadcrumbs.length - 1;
              return (
                <span key={`${crumb.label}-${index}`}>
                  {index > 0 ? <span className="px-1.5 text-white/60">&gt;</span> : null}
                  {crumb.href && !last ? (
                    <Link href={crumb.href} className="hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={last ? "text-white" : undefined}>{crumb.label}</span>
                  )}
                </span>
              );
            })}
          </nav>

          <h1 className="max-w-[920px] text-[22px] leading-[1.3] font-bold text-white tablet:text-[28px] desktop:text-[32px]">
            {offer.title}
          </h1>
        </Container>
      </div>
    </section>
  );
}
