import Image from "next/image";
import { SparkIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { appFeatures } from "@/lib/home-data";

export function AppFeature() {
  return (
    <section className="overflow-hidden bg-[#1E6BFF] py-16 text-white tablet:py-20">
      <Container className="grid items-center gap-12 desktop:grid-cols-2">
        <div>
          <p className="text-sm font-medium tracking-[0.18em] text-white/80 uppercase">Flight 88</p>
          <h2 className="mt-2 text-[2rem] font-semibold tracking-tight tablet:text-[2.5rem]">
            Your travel companion, all in one app
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/85 tablet:text-base">
            Compare, book, and manage Hajj, Umrah, flights, and hotels with live updates and a team
            that stays with you after checkout.
          </p>

          <ul className="mt-8 grid gap-4 tablet:grid-cols-2">
            {appFeatures.map((feature) => (
              <li key={feature.title} className="flex gap-3">
                <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <SparkIcon className="size-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">{feature.title}</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-white/80">
                    {feature.description}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-5 tablet:flex-row tablet:items-center">
            <div className="relative h-[140px] w-[88px] overflow-hidden rounded-[22px] border-4 border-white/30 bg-neutral-900 shadow-xl">
              <div className="absolute inset-x-0 top-2 mx-auto h-1.5 w-10 rounded-full bg-white/30" />
              <div className="flex h-full items-center justify-center pt-4 text-center text-[10px] font-semibold tracking-wider">
                FLIGHT
                <br />
                88
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold">Download Flight 88 mobile app</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <StoreBadge label="Get it on" store="Google Play" />
                <StoreBadge label="Download on the" store="App Store" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto h-[380px] w-full max-w-[520px] tablet:h-[460px]">
          <div className="absolute top-8 left-8 size-20 rounded-full bg-white/10" />
          <div className="absolute right-10 bottom-16 size-28 rounded-full bg-white/10" />
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80"
            alt="Traveler ready for the next journey"
            fill
            className="object-contain object-bottom drop-shadow-2xl"
            sizes="(min-width: 1280px) 520px, 90vw"
          />
        </div>
      </Container>
    </section>
  );
}

function StoreBadge({ label, store }: { label: string; store: string }) {
  return (
    <a
      href="#"
      className="inline-flex min-w-[148px] items-center rounded-xl bg-black px-3 py-2 text-white"
    >
      <span>
        <span className="block text-[10px] leading-none text-white/80">{label}</span>
        <span className="block text-sm font-semibold">{store}</span>
      </span>
    </a>
  );
}
