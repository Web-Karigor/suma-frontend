import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function AboutCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-paper to-teal-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero">
            Let's Plan Your Next Journey
          </h2>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed max-w-2xl mx-auto">
            Ready to embark on your next adventure? Our team is here to help you create unforgettable memories. Get in touch with us today!
          </p>
          <div className="pt-4">
            <Button href="/contact">Contact Us Today</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
