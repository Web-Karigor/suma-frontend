import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { heroCards, heroContent } from "@/lib/home-data";

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

          <div className="relative mx-auto mt-12 h-[280px] w-full max-w-[420px] tablet:h-[340px] desktop:mx-0 desktop:mt-0">
            {heroCards.map((card, index) => (
              <Link
                key={card.title}
                href={card.href}
                className="absolute overflow-hidden rounded-2xl shadow-[0_18px_40px_rgb(10_12_12/32%)] transition hover:-translate-y-1"
                style={{
                  width: "42%",
                  height: "78%",
                  left: `${index * 28}%`,
                  top: index === 1 ? "18%" : "6%",
                  zIndex: index === 1 ? 3 : 2,
                  rotate: `${[-8, 3, 10][index]}deg`,
                }}
              >
                <Image src={card.image} alt={card.title} fill className="object-cover" sizes="180px" />
                <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent px-3 py-3 text-center text-xs font-semibold text-white tablet:text-sm">
                  {card.title}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
