import Image from "next/image";
import { Container } from "@/components/ui/Container";

const COLLAGE = [
  {
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=700&q=80",
    alt: "Traveler overlooking the ocean",
    className: "h-[220px] tablet:h-[280px] desktop:h-[360px] desktop-xl:h-[386px]",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    alt: "Beach relaxation",
    className: "h-[160px] tablet:h-[200px] desktop:h-[226px] desktop-xl:h-[226px]",
  },
  {
    src: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=700&q=80",
    alt: "Destination travel",
    className: "h-[220px] tablet:h-[280px] desktop:h-[360px] desktop-xl:h-[386px]",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80",
    alt: "Mountain lake",
    className: "h-[160px] tablet:h-[200px] desktop:h-[226px] desktop-xl:h-[226px]",
  },
] as const;

export function AboutHero() {
  return (
    <section className="relative bg-teal-50">
      <div className="relative h-[280px] overflow-hidden tablet:h-[360px] desktop:h-[420px] desktop-xl:h-[460px]">
        <Image
          src="/images/about/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-overlay-black-32" />
        <Container className="relative z-10 flex h-full items-center justify-center pt-[5.5rem] desktop-xl:!px-0">
          <h1 className="text-center text-[36px] leading-tight font-semibold tracking-[-0.28px] text-white tablet:text-[48px] desktop-xl:text-[56px]">
            About Us
          </h1>
        </Container>
      </div>

      <Container className="relative z-10 -mt-16 pb-6 tablet:-mt-24 tablet:pb-8 desktop:-mt-28 desktop-xl:-mt-32 desktop-xl:!px-0">
        <div className="grid grid-cols-2 items-center gap-3 tablet:grid-cols-4 tablet:gap-4 desktop:gap-5 desktop-xl:gap-6">
          {COLLAGE.map((item) => (
            <div
              key={item.alt}
              className={`group relative w-full overflow-hidden rounded-[32px] shadow-[0_12px_32px_rgb(10_12_12/14%)] ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1280px) 25vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
