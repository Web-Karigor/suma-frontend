import Image from "next/image";
import { Container } from "@/components/ui/Container";

const ceoPhotoMask = {
  clipPath:
    "shape(from var(--ceo-r) 0, hline to calc(100% - var(--ceo-r)), arc to 100% var(--ceo-r) of var(--ceo-r) cw, vline to calc(100% - var(--ceo-cut-h) - var(--ceo-r)), arc to calc(100% - var(--ceo-r)) calc(100% - var(--ceo-cut-h)) of var(--ceo-r) cw, hline to calc(100% - var(--ceo-cut-w) + var(--ceo-r)), arc to calc(100% - var(--ceo-cut-w)) calc(100% - var(--ceo-cut-h) + var(--ceo-r)) of var(--ceo-r) ccw, vline to calc(100% - var(--ceo-r)), arc to calc(100% - var(--ceo-cut-w) - var(--ceo-r)) 100% of var(--ceo-r) cw, hline to var(--ceo-r), arc to 0 calc(100% - var(--ceo-r)) of var(--ceo-r) cw, vline to var(--ceo-r), arc to var(--ceo-r) 0 of var(--ceo-r) cw, close)",
} as const;

export function AboutCEO() {
  return (
    <section className="bg-white py-16 tablet:py-20 desktop:py-[100px]">
      <Container className="desktop-xl:!px-0">
        <div className="mx-auto flex w-full flex-col items-center gap-10 desktop:flex-row desktop:items-center desktop:gap-[59px]">
          <div className="relative w-full min-w-0 shrink-0 [--ceo-r:24px] [--ceo-cut-w:164px] [--ceo-cut-h:56px] tablet:[--ceo-r:28px] tablet:[--ceo-cut-w:184px] tablet:[--ceo-cut-h:64px] desktop:w-[699px] desktop:[--ceo-r:32px] desktop:[--ceo-cut-w:200px] desktop:[--ceo-cut-h:70px]">
            <div
              className="relative aspect-[699/710] w-full bg-neutral-100 desktop:h-[710px] desktop:aspect-auto"
              style={ceoPhotoMask}
            >
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
                alt="Founder and CEO — Suma Travel"
                fill
                sizes="(min-width: 1280px) 699px, 100vw"
                className="object-cover object-[center_18%]"
              />
            </div>

            <div className="absolute right-0 bottom-0 z-10 flex h-[var(--ceo-cut-h)] w-[var(--ceo-cut-w)] flex-col justify-center rounded-tl-[var(--ceo-r)] bg-white px-4 tablet:px-5">
              <p className="text-[13px] leading-tight font-semibold text-hero tablet:text-[14px] desktop:text-[15px]">
                Esther Howard
              </p>
              <p className="mt-0.5 text-[11px] leading-tight text-neutral-500 tablet:text-[12px]">
                Founder & CEO
              </p>
            </div>
          </div>

          <div className="w-full min-w-0 flex-1 desktop:max-w-[720px]">
            <h2 className="text-[22px] leading-[1.25] font-medium italic text-hero tablet:text-[26px] desktop:text-[32px]">
              &ldquo;Our journey is defined by the peace of mind we offer to those
              embarking on theirs.&rdquo;
            </h2>

            <div className="mt-7 space-y-5 text-[14px] leading-[1.6] text-neutral-600 tablet:text-[15px] desktop:text-[16px]">
              <p>
                Welcome to Suma International Services. When we began this journey
                nearly three decades ago, it was born from a deep respect for the
                pilgrim&apos;s path — especially those undertaking Hajj and Umrah,
                journeys that ask for far more than logistics.
              </p>
              <p>
                As we&apos;ve grown into a full-service travel agency, that respect
                has never wavered. Every service we offer is built on the same
                reverence, reliability, and care — because removing friction from
                your journey is the only way to make room for the destination
                itself.
              </p>
              <p>
                Thank you for placing your trust in us. We look forward to guiding
                you, wherever your path may lead.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
