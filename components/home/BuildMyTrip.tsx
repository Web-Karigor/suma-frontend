import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";

export function BuildMyTrip() {
  return (
    <section className="bg-white py-8">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-teal-100 px-6 py-10 tablet:px-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.9), transparent 40%), radial-gradient(circle at 10% 80%, rgba(0,123,122,0.15), transparent 45%)",
            }}
          />
          <div className="relative flex flex-col items-start justify-between gap-6 tablet:flex-row tablet:items-center">
            <div>
              <p className="text-sm font-medium tracking-[0.16em] text-primary uppercase">
                Exclusive Deals
              </p>
              <h2 className="mt-1 text-2xl font-semibold text-neutral-900 tablet:text-3xl">
                Plan a journey that feels yours
              </h2>
            </div>
            <Link
              href="/build-trip"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-700"
            >
              Build My Trip
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
