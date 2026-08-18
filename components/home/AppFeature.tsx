import Image from "next/image";
import {
  BellIcon,
  CardIcon,
  GaugeIcon,
  PlaneIcon,
  RefundIcon,
  WalletIcon,
} from "@/components/icons";
import { GoBadge } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { appFeatures } from "@/lib/home-data";

const featureIcons = {
  plane: PlaneIcon,
  card: CardIcon,
  wallet: WalletIcon,
  refund: RefundIcon,
  gauge: GaugeIcon,
  bell: BellIcon,
} as const;

export function AppFeature() {
  return (
    <section className="bg-paper py-16 tablet:py-20">
      <Container className="grid items-center gap-10 desktop:grid-cols-[minmax(0,1fr)_minmax(320px,858px)] desktop:gap-8">
        <div className="min-w-0">
          <div className="flex w-full max-w-[858px] flex-col items-start gap-5 tablet:h-[79px] tablet:flex-row tablet:items-center tablet:gap-9">
            <Image
              src="/images/flight24/logo.png"
              alt="Flight24.co"
              width={256}
              height={79}
              className="h-auto w-[180px] shrink-0 object-contain tablet:h-[79px] tablet:w-[256px]"
            />
            <p className="w-full text-[15px] leading-[139%] font-medium tracking-[0.01em] text-[#0A0C0C] tablet:h-[63px] tablet:w-[566px]">
              Our Partner Portal Streamlines Business Operations By Connecting Buyers And Suppliers
              Seamlessly. It Offers Secure Transactions, Real-Time Communication, And Access To A
              Global Network Of Trusted Partners.
            </p>
          </div>

          <div className="mt-20 flex w-full max-w-[858px] flex-col gap-8 tablet:mt-24 tablet:h-[412px] tablet:flex-row tablet:gap-[138px]">
            <FeatureColumn features={appFeatures.filter((_, i) => i % 2 === 0)} />
            <FeatureColumn features={appFeatures.filter((_, i) => i % 2 === 1)} />
          </div>

          <div className="relative mt-20 w-full max-w-[858px] overflow-visible tablet:mt-24 tablet:h-[177px]">
            <div className="absolute top-1/2 left-0 hidden h-[100px] w-fit -translate-y-1/2 tablet:block">
              <div
                className="absolute inset-0 bg-size-[100%_100%] bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/flight24/banner-bg.png')" }}
              />
              <div className="relative z-10 flex h-full items-center gap-6 pr-4 pl-32">
                <p className="leading-none whitespace-nowrap text-white">
                  <span className="block text-[24px] font-bold">Download</span>
                  <span className="mt-1 block text-[24px] font-bold">Flight24 Mobile App</span>
                </p>
                <div className="flex shrink-0 items-center gap-2">
                  <StoreBadge store="google" />
                  <StoreBadge store="apple" />
                </div>
              </div>
            </div>
            <Image
              src="/images/flight24/phone.png"
              alt="Flight24 mobile app"
              width={2851}
              height={4096}
              unoptimized
              className="pointer-events-none absolute top-1/2 -left-5 z-20 hidden h-[210px] w-auto max-w-none -translate-y-[74%] drop-shadow-[0_10px_24px_rgb(10_12_12/25%)] tablet:block"
            />
            <div className="relative h-[100px] w-full overflow-visible rounded-2xl tablet:hidden">
              <div
                className="absolute inset-0 bg-size-[100%_100%] bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/flight24/banner-bg.png')" }}
              />
              <div className="relative z-10 flex h-full items-center pl-24">
                <p className="leading-none text-white">
                  <span className="block text-[14px] font-medium">Download</span>
                  <span className="mt-0.5 block text-[18px] font-bold">Flight24 Mobile App</span>
                </p>
              </div>
              <Image
                src="/images/flight24/phone.png"
                alt=""
                width={2851}
                height={4096}
                unoptimized
                className="pointer-events-none absolute top-1/2 -left-3 z-20 h-[140px] w-auto max-w-none -translate-y-[75%]"
              />
            </div>
            <div className="mt-3 flex justify-end gap-2 tablet:hidden">
              <StoreBadge store="google" />
              <StoreBadge store="apple" />
            </div>
          </div>
        </div>

        <div className="flight-visual relative mx-auto aspect-[858/816] w-full max-w-[858px] desktop:h-[816px] desktop:aspect-auto">
          <div className="flight-art-mask absolute inset-0">
            <Image
              src="/images/flight24-travel.jpg"
              alt="Travel the world with Flight24"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 858px, 100vw"
            />
          </div>
          <GoBadge href="/flights" className="flight-go-badge" />
        </div>
      </Container>
    </section>
  );
}

function FeatureColumn({
  features,
}: {
  features: typeof appFeatures[number][];
}) {
  return (
    <ul className="flex w-full flex-col justify-between tablet:h-[412px] tablet:w-[360px]">
      {features.map((feature) => {
        const Icon = featureIcons[feature.icon];
        return (
          <li key={feature.title} className="flex gap-3">
            <span className="mt-0.5 inline-flex size-8 shrink-0 text-primary">
              <Icon className="size-8" />
            </span>
            <span>
              <span className="block text-[16px] leading-tight font-semibold text-[#0A0C0C]">
                {feature.title}
              </span>
              <span className="mt-1 block text-[15px] leading-[139%] font-medium tracking-[0.01em] text-neutral-600">
                {feature.description}
              </span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function StoreBadge({ store }: { store: "google" | "apple" }) {
  const isGoogle = store === "google";
  return (
    <a
      href="#"
      className="inline-flex h-10 min-w-34 items-center gap-2 rounded-lg bg-black px-3 text-white"
    >
      {isGoogle ? (
        <svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden="true">
          <path fill="#EA4335" d="M4 3.5 14.5 12 4 20.5V3.5z" />
          <path fill="#FBBC05" d="M4 20.5 14.5 12 18 14.6 4 20.5z" />
          <path fill="#34A853" d="M18 9.4 14.5 12 18 14.6 20.5 13c.7-.4.7-1.6 0-2l-2.5-1.6z" />
          <path fill="#4285F4" d="M4 3.5 18 9.4 14.5 12 4 3.5z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="size-5 shrink-0 fill-white" aria-hidden="true">
          <path d="M16.7 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.5.9s-1.8-1-3-1c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-1.1 2.8-2.2c.9-1.3 1.3-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.7zM14.6 6.2c.6-.8 1.1-1.9.9-3-1 .1-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.5 2.9-1.4z" />
        </svg>
      )}
      <span>
        <span className="block text-[9px] leading-none text-white/80">
          {isGoogle ? "GET IT ON" : "Download on the"}
        </span>
        <span className="mt-0.5 block text-sm font-semibold leading-none">
          {isGoogle ? "Google Play" : "App Store"}
        </span>
      </span>
    </a>
  );
}
