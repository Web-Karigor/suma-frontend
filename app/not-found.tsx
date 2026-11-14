import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found",
  description: "We couldn't find that page. Return to Suma BD's homepage.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[420px] items-center py-16 tablet:min-h-[500px] tablet:min-h-[600px]">
      <Container>
        <section className="mx-auto max-w-[540px] text-center">
          <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
            404 · Page not found
          </p>
          <h1 className="mt-4 text-3xl leading-tight font-semibold tracking-tight text-neutral-950 tablet:text-4xl">
            We can’t find that page.
          </h1>
          <p className="mt-3 text-sm leading-6 text-neutral-600 tablet:text-base">
            It may have moved, or the link may be out of date.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-5">
            <Button href="/">Back to homepage</Button>
            <Link
              href="/contact"
              className="text-sm font-medium text-primary-700 underline decoration-teal-300 underline-offset-4 transition-colors hover:text-primary-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Contact us
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}
