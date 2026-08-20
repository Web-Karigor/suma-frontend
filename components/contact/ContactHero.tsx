import { Container } from "@/components/ui/Container";

export function ContactHero() {
  return (
    <section className="bg-[#DCEFF0] py-12 tablet:py-16 desktop:py-20">
      <Container className="flex flex-col gap-6 desktop:flex-row desktop:items-center desktop:justify-between">
        <h1 className="text-5xl leading-[1.05] font-medium tracking-[-0.03em] text-neutral-950 tablet:text-6xl desktop:text-[72px]">
          Contact Us
        </h1>
        <p className="max-w-[360px] text-base leading-[1.45] text-neutral-900 tablet:text-lg">
          Tell us when and where you&apos;d like to go and we&apos;ll confirm availability within 24 hours.
        </p>
      </Container>
    </section>
  );
}
