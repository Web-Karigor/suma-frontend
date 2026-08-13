import { Container } from "@/components/ui/Container";

export function ValueProposition() {
  return (
    <section className="bg-paper py-16 tablet:py-24">
      <Container className="max-w-4xl text-center">
        <h2 className="text-[2rem] font-semibold tracking-tight text-neutral-900 tablet:text-[2.75rem]">
          Built on Legacy, Driven by Innovation
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-neutral-600 tablet:text-lg">
          Suma BD brings decades of travel expertise together with modern booking tools — so every
          pilgrimage, holiday, and business trip is planned with care, clarity, and a human team
          behind the technology. We exist to make meaningful journeys feel simple from the first
          enquiry to the flight home.
        </p>
      </Container>
    </section>
  );
}
