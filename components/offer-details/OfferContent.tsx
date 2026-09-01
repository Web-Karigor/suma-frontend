import { Container } from "@/components/ui/Container";

export function OfferContent({ html }: { html?: string }) {
  if (!html?.trim()) return null;

  return (
    <section className="bg-white pt-2 pb-16 tablet:pb-20">
      <Container>
        <div className="offer-html" dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </section>
  );
}
