import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroCardsSlider } from "@/components/home/HeroCardsSlider";
import { heroContent } from "@/lib/home-data";

export function HeroSection() {
  return (
    <section className="relative -mt-[5.5rem] overflow-hidden">
      <div className="relative min-h-[520px] tablet:min-h-[680px]">
        <Image
          src={heroContent.image}
          alt="Masjid an-Nabawi at dusk"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/15" />

        <Container className="relative flex min-h-[520px] flex-col justify-center pt-28 pb-16 tablet:min-h-[680px] desktop:flex-row desktop:items-center desktop:justify-between">
          <div className="max-w-xl text-white">
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

          <div className="mt-12 w-full desktop:mt-0 desktop:ml-auto desktop:max-w-[886px] desktop:shrink-0 desktop:pl-4">
            <HeroCardsSlider />
          </div>
        </Container>
      </div>
    </section>
  );
}
