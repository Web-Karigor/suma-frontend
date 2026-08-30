import { Container } from "@/components/ui/Container";

export function HajjIntro() {
  return (
    <section className="hajj-intro relative -mt-[5.5rem] bg-[#FCF4E0] pt-[5.5rem] text-center tablet:pt-[calc(5.5rem+4rem)] desktop:h-[calc(435px+5.5rem)] desktop:pt-[calc(5.5rem+3.5rem)]">
      <Container>
        <h1 className="mx-auto max-w-[520px] text-[2.15rem] leading-[1.08] font-semibold tracking-[-0.04em] text-neutral-950 tablet:text-5xl">
          Two Journeys,
          <br />
          One Sacred Purpose
        </h1>
        <p className="mx-auto mt-4 max-w-[550px] text-[0.68rem] leading-[1.7] text-neutral-700 tablet:text-sm">
          Hajj and Umrah are distinct pilgrimages with different rites, timing, and
          requirements. Explore each to find the right path for you.
        </p>
      </Container>
    </section>
  );
}
