import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroCardsSlider } from "@/components/home/HeroCardsSlider";
import { heroContent } from "@/lib/home-data";

export function HeroSection() {
  return (
    <section className="relative -mt-[5.5rem] overflow-hidden">
      <div className="relative min-h-[520px] tablet:min-h-[680px] desktop:h-[900px] desktop:min-h-[900px]">
        <Image
          src={heroContent.image}
          alt="Masjid an-Nabawi at dusk"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-overlay-black-48" />

        <Container className="relative flex min-h-[520px] flex-col justify-center pt-28 pb-16 tablet:min-h-[680px] desktop:h-full desktop:min-h-[900px] desktop:flex-row desktop:items-center desktop:gap-16 desktop:justify-between">
          <div className="max-w-xl shrink-0 text-white">
            <p className="mb-3 text-sm font-medium tracking-[0.18em] text-gold-300 uppercase">
              Sacred journeys
            </p>
            <h1 className="text-[2.5rem] font-semibold text-white tablet:text-[3.5rem]">
              {heroContent.title}
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85 tablet:text-base">
              {heroContent.description}
            </p>
            <Button href={heroContent.cta.href} className="mt-8">
              {heroContent.cta.label}
            </Button>
          </div>

          <div className="mt-12 w-full min-w-0 desktop:mt-0 desktop:ml-auto desktop:mr-[calc(-1*var(--page-gutter)-48px)] desktop:w-[970px] desktop:max-w-none desktop:shrink-0">
            <HeroCardsSlider />
          </div>
        </Container>
      </div>
    </section>
  );
}
