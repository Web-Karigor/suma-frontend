import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { HotelsPageMeta } from "@/types/hotel";

const FALLBACK_BANNER = "/images/hotels/hero.jpg";

export function HotelsHero({ page }: { page: HotelsPageMeta }) {
  return (
    <section className="pt-4 tablet:pt-6">
      <Container>
        <div className="relative h-[180px] overflow-hidden rounded-2xl tablet:h-[250px]">
          <Image
            src={page.banner ?? FALLBACK_BANNER}
            alt={page.headerTitle}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1740px) 100vw, 1740px"
          />
          <div className="absolute inset-0 bg-overlay-black-48" />
          <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
            <h1 className="text-[32px] font-semibold text-white tablet:text-[48px]">{page.headerTitle}</h1>
            {page.headerSubtitle ? (
              <p className="mt-2 max-w-2xl text-sm text-white/90 tablet:text-base">{page.headerSubtitle}</p>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
