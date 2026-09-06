"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "./ContactForm";
import { ContactHero } from "./ContactHero";
import { ContactOffices } from "./ContactOffices";
import { useSettingsQuery } from "@/hooks/queries/useSettingsQuery";
import { FALLBACK_SETTINGS } from "@/helpers/settings";

export function ContactPage() {
  const { data: settings = FALLBACK_SETTINGS } = useSettingsQuery();

  return (
    <main>
      <ContactHero />
      <section className="bg-[#E8F7F8] py-10 tablet:py-14 desktop:py-16">
        <Container className="grid gap-6 desktop:h-[753px] desktop:grid-cols-[1.4fr_0.9fr]">
          <ContactForm />
          <div className="relative min-h-[300px] overflow-hidden rounded-[14px] tablet:min-h-[420px] desktop:h-full desktop:rounded-[44px]">
            <Image
              src={settings.contactPageImage}
              alt="A scenic travel road"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1280px) 35vw, 100vw"
            />
          </div>
        </Container>
      </section>
      <ContactOffices />
    </main>
  );
}
