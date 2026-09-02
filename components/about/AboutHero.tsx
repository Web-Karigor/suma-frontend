import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { AboutGalleryCard } from "@/types/about";

type AboutHeroProps = {
  title: string;
  gallery: AboutGalleryCard[];
};

export function AboutHero({ title, gallery }: AboutHeroProps) {
  return (
    <section className="relative bg-teal-50">
      <div className="relative h-[548px] overflow-hidden">
        <img
          src="/images/about/hero-bg.png"
          alt={title}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-overlay-black-32" />

        <Container className="relative z-10 flex h-full items-center justify-center desktop-xl:!px-0">
          <h1 className="text-center text-[36px] leading-tight font-semibold tracking-[-0.28px] text-[#FEFEFC] xl:text-[48px] 2xl:text-[56px]">
            {title}
          </h1>
        </Container>
      </div>

      <Container className="relative z-10 -mt-16 pb-6 tablet:-mt-24 tablet:pb-8 desktop:-mt-28 desktop-xl:-mt-32 desktop-xl:!px-0">
        <div className="grid grid-cols-2 items-center gap-3 tablet:grid-cols-4 tablet:gap-4 desktop:gap-5 desktop-xl:gap-6">
          {gallery.map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className={`group relative w-full overflow-hidden rounded-[32px] shadow-[0_12px_32px_rgb(10_12_12/14%)] ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1280px) 25vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out will-change-transform"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
