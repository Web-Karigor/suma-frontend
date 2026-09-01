import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function OfferCta({ label, href }: { label: string; href: string }) {
  return (
    <section className="bg-white py-8 tablet:py-10">
      <Container>
        <p className="text-center">
          <Link
            href={href}
            className="text-[28px] font-bold tracking-[0.04em] text-[#1573d6] uppercase hover:underline tablet:text-[34px]"
          >
            {label}
          </Link>
        </p>
      </Container>
    </section>
  );
}
