import { Container } from "@/components/ui/Container";

export function OfferContent({
  shortDescription,
  html,
}: {
  shortDescription?: string;
  html?: string;
}) {
  if (!shortDescription?.trim() && !html?.trim()) return null;

  return (
    <section className="bg-white py-10 tablet:py-12">
      <Container>
        {shortDescription ? (
          <p className="mb-6 max-w-3xl text-base leading-relaxed text-neutral-700">
            {shortDescription}
          </p>
        ) : null}
        {html?.trim() ? (
          <div className="offer-html" dangerouslySetInnerHTML={{ __html: html }} />
        ) : null}
      </Container>
    </section>
  );
}
