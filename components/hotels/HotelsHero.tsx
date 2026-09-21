import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import type { HotelsPageMeta } from "@/types/hotel";

export function HotelsHero({ page }: { page: HotelsPageMeta }) {
  return (
    <section className="pt-4 tablet:pt-6">
      <Container>
        <div className="relative h-[180px] overflow-hidden rounded-2xl bg-teal-900 tablet:h-[250px]">
          <CoverImage
            src={page.banner}
            alt={page.headerTitle}
            className="object-cover"
            sizes="(max-width: 1740px) 100vw, 1740px"
            priority
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
