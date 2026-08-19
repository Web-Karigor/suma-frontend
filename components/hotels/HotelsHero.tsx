import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function HotelsHero() {
  return (
    <section className="pt-4 tablet:pt-6">
      <Container>
        <div className="relative h-[180px] overflow-hidden rounded-2xl tablet:h-[250px]">
          <Image
            src="/images/hotels/hero.jpg"
            alt="Find Hotels"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1740px) 100vw, 1740px"
          />
          <div className="absolute inset-0 bg-overlay-black-48" />
          <div className="relative flex h-full items-center justify-center">
            <h1 className="text-center text-[32px] font-semibold text-white tablet:text-[48px]">Find Hotels</h1>
          </div>
        </div>
      </Container>
    </section>
  );
}
