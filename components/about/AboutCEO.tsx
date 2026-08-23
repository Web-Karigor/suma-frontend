import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function AboutCEO() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-[100px]">
      <Container>
        <div className="mx-auto flex w-full max-w-[1469px] flex-col items-center gap-10 md:flex-row md:gap-[59px]">
          {/* CEO Image */}
          <div className="relative shrink-0">
            {/* Image Shape */}
            <div className="relative h-[420px] w-full overflow-hidden rounded-[20px] bg-neutral-100 md:h-[460px] md:w-[460px] lg:h-[464px]">
              <Image
                src="/1.png"
                alt="CEO - Suma Travel"
                fill
                className="object-cover rounded-2xl"
              />

              {/* Bottom-right curved cut */}
              <div className="absolute bottom-0 right-0 h-[64px] w-[180px] rounded-tl-[28px] bg-white md:h-[72px] md:w-[180px] md:rounded-tl-[32px]" />
            </div>

            {/* Name Card */}
            <div className="absolute bottom-0 right-0 z-10 flex h-[64px] w-[180px] flex-col items-center justify-center rounded-tl-[28px] bg-white md:h-[72px] md:w-[180px] md:rounded-tl-[32px]">
              <p className="text-[13px] font-semibold leading-tight text-hero">
                Esther Howard
              </p>

              <p className="mt-1 text-[12px] text-neutral-500">Founder & CEO</p>
            </div>
          </div>

          {/* CEO Message */}
          <div className="flex-1 max-w-[500px] md:max-w-none">
            <h2 className="text-[22px] font-medium italic leading-[1.2] text-hero md:text-[24px] lg:text-[26px]">
              "Our journey is defined by the peace of mind we offer to those
              embarking on theirs."
            </h2>

            <div className="mt-7 space-y-5 text-[14px] italic leading-[1.5] text-neutral-600 md:text-[15px]">
              <p>
                Welcome to Suma International Services. When we began this
                journey nearly three decades ago, it was born from a deep
                respect for the pilgrim's path — especially those undertaking
                Hajj and Umrah, journeys that ask for far more than logistics.
              </p>

              <p>
                As we've grown into a full-service travel agency, that respect
                has never wavered. Every service we offer is built on the same
                reverence, reliability, and care — because removing friction
                from your journey is the only way to make room for the
                destination itself.
              </p>

              <p>
                Thank you for placing your trust in us. We look forward to
                guiding you, wherever your path may lead.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
