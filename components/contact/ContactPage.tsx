import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "./ContactForm";
import { ContactHero } from "./ContactHero";
import { ContactOffices } from "./ContactOffices";

const contactImage = "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85";

export function ContactPage() {
  return (
    <main>
      <ContactHero />
      <section className="bg-[#E8F7F8] py-10 tablet:py-14 desktop:py-16">
        <Container className="grid gap-6 desktop:h-[753px] desktop:grid-cols-[1.4fr_0.9fr]">
          <ContactForm />
          <div className="relative min-h-[300px] overflow-hidden rounded-[14px] tablet:min-h-[420px] desktop:h-full desktop:rounded-[44px]">
            <Image src={contactImage} alt="A scenic travel road" fill priority className="object-cover" sizes="(min-width: 1280px) 35vw, 100vw" />
          </div>
        </Container>
      </section>
      <ContactOffices />
    </main>
  );
}
