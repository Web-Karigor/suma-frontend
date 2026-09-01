import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

type Crumb = { label: string; href?: string };

type OfferHeroProps = {
  title: string;
  heroImage: string;
  breadcrumbs: Crumb[];
};

export function OfferHero({ title, heroImage, breadcrumbs }: OfferHeroProps) {
  return (
    <section className="bg-white pt-8 tablet:pt-10">
      <Container>
        {breadcrumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-4 text-[13px] text-neutral-500">
            {breadcrumbs.map((crumb, index) => {
              const last = index === breadcrumbs.length - 1;
              return (
                <span key={`${crumb.label}-${index}`}>
                  {index > 0 ? <span className="px-1.5 text-neutral-400">&gt;</span> : null}
                  {crumb.href && !last ? (
                    <Link href={crumb.href} className="hover:text-primary">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={last ? "text-neutral-700" : undefined}>{crumb.label}</span>
                  )}
                </span>
              );
            })}
          </nav>
        ) : null}

        <h1 className="max-w-[920px] text-[22px] leading-[1.3] font-bold text-neutral-950 tablet:text-[28px] desktop:text-[32px]">
          {title}
        </h1>

        {heroImage ? (
          <div className="relative mt-5 aspect-[16/7] overflow-hidden tablet:mt-6 desktop:aspect-[21/6]">
            <Image src={heroImage} alt={title} fill priority className="object-cover" sizes="1740px" />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
