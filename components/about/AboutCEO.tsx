import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { AboutFounder } from "@/types/about";

const ceoPhotoMask = {
  clipPath:
    "shape(from var(--ceo-r) 0, hline to calc(100% - var(--ceo-r)), arc to 100% var(--ceo-r) of var(--ceo-r) cw, vline to calc(100% - var(--ceo-cut-h) - var(--ceo-r)), arc to calc(100% - var(--ceo-r)) calc(100% - var(--ceo-cut-h)) of var(--ceo-r) cw, hline to calc(100% - var(--ceo-cut-w) + var(--ceo-r)), arc to calc(100% - var(--ceo-cut-w)) calc(100% - var(--ceo-cut-h) + var(--ceo-r)) of var(--ceo-r) ccw, vline to calc(100% - var(--ceo-r)), arc to calc(100% - var(--ceo-cut-w) - var(--ceo-r)) 100% of var(--ceo-r) cw, hline to var(--ceo-r), arc to 0 calc(100% - var(--ceo-r)) of var(--ceo-r) cw, vline to var(--ceo-r), arc to var(--ceo-r) 0 of var(--ceo-r) cw, close)",
} as const;

type AboutCEOProps = {
  founder: AboutFounder;
};

export function AboutCEO({ founder }: AboutCEOProps) {
  return (
    <section className="bg-[#F2F8F8] py-16 tablet:py-20 desktop:py-[100px]">
      <Container className="desktop-xl:!px-0">
        <div className="mx-auto flex w-full max-w-[1469px] flex-col items-center gap-10 desktop:flex-row desktop:items-center desktop:gap-[59px] desktop-xl:w-[1469px]">
          <div className="relative w-full min-w-0 shrink-0 [--ceo-r:28px] [--ceo-cut-w:184px] [--ceo-cut-h:64px] tablet:[--ceo-r:28px] tablet:[--ceo-cut-w:184px] tablet:[--ceo-cut-h:64px] desktop:w-[699px] desktop:[--ceo-r:32px] desktop:[--ceo-cut-w:200px] desktop:[--ceo-cut-h:70px]">
            <div
              className="relative aspect-[699/710] w-full bg-neutral-100 desktop:h-[710px] desktop:aspect-auto"
              style={ceoPhotoMask}
            >
              <Image
                src={founder.image}
                alt={`${founder.name} — ${founder.designation}`}
                fill
                sizes="(min-width: 1280px) 699px, 100vw"
                className="object-cover object-[center_18%]"
              />
            </div>

            <div className="absolute -right-1 -bottom-1 z-10 flex h-[var(--ceo-cut-h)] w-[var(--ceo-cut-w)] flex-col justify-center text-center rounded-[19px] bg-[#FEFEFC] px-4 py-2">
              <p className="text-[13px] leading-tight font-semibold text-hero xl:text-[14px] 2xl:text-[18px]">
                {founder.name}
              </p>
              <p className="mt-0.5 text-[11px] leading-tight text-neutral-500 xl:text-[12px] 2xl:text-[16px]">
                {founder.designation}
              </p>
            </div>
          </div>

          <div className="w-full min-w-0 flex-1 desktop:max-w-none">
            {founder.quote && (
              <h2 className="text-[22px] leading-[1.25] font-medium italic text-hero xl:text-[26px] 2xl:text-[28px]">
                &ldquo;{founder.quote}&rdquo;
              </h2>
            )}

            {founder.paragraphs.length > 0 && (
              <div
                className={`space-y-5 text-[14px] leading-[1.6] text-neutral-600 xl:text-[16px] 2xl:text-[18px] ${founder.quote ? "mt-7" : ""}`}
              >
                {founder.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
