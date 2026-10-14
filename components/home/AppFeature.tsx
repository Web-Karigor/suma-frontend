"use client";

import Image from "next/image";
import { GoBadge } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { useFlightInfoQuery } from "@/hooks/queries/useFlightInfoQuery";
import { useHomepageSection } from "@/hooks/queries/useHomepageSectionContentQuery";
import type { FlightInfoFeature } from "@/types/flight-info";
import { cn } from "@/lib/cn";
import { partnerPortalUrl } from "@/lib/home-data";

export function AppFeature() {
  const { data, isLoading } = useFlightInfoQuery();
  const section = useHomepageSection("Flight");

  if (isLoading || !data) return null;

  const leftFeatures = data.features.filter((_, index) => index % 2 === 0);
  const rightFeatures = data.features.filter((_, index) => index % 2 === 1);

  return (
    <section
      id={section.htmlId}
      data-section-id={section.id || undefined}
      className="bg-paper pt-28 pb-20 tablet:pt-40 tablet:pb-28"
    >
      <Container>
        {section.title ? (
          <div className="mb-10 text-center tablet:mb-14">
            <h2 className="text-[1.75rem] font-semibold tracking-tight text-neutral-900 tablet:text-[2.5rem]">
              {section.title}
            </h2>
            {section.subtitle ? (
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600 tablet:text-base">
                {section.subtitle}
              </p>
            ) : null}
          </div>
        ) : null}
        <div
          className={cn(
            "grid gap-10",
            /* 768–1023: unified stacked column */
            "tablet:max-lg:mx-auto tablet:max-lg:max-w-[640px] tablet:max-lg:gap-8",
            /* 1024–1279: content + hero side-by-side (lg:max-[1280px] matches project convention) */
            "lg:max-[1280px]:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)]",
            "lg:max-[1280px]:items-start lg:max-[1280px]:gap-8",
            /* 1280+ desktop (unchanged) */
            "desktop:grid-cols-[minmax(0,1fr)_minmax(280px,650px)] desktop:items-stretch desktop:gap-16",
            "desktop:max-[1535px]:grid-cols-[minmax(0,1.15fr)_minmax(240px,480px)] desktop:max-[1535px]:gap-8",
            "2xl:grid-cols-[minmax(0,1fr)_minmax(320px,858px)] 2xl:gap-8",
          )}
        >
          <div className="flex min-w-0 flex-col tablet:max-[1280px]:gap-0">
            <div
              className={cn(
                "flex w-full max-w-[858px] flex-col items-start gap-4",
                "tablet:flex-row tablet:items-start tablet:gap-5",
                "tablet:max-[1280px]:items-center tablet:max-[1280px]:gap-5",
                "desktop:max-[1535px]:gap-4 2xl:items-center 2xl:gap-9",
              )}
            >
              <a
                href={partnerPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "relative block h-[56px] w-[180px] shrink-0",
                  "tablet:h-[65px] tablet:w-[200px]",
                  "tablet:max-[1280px]:h-[56px] tablet:max-[1280px]:w-[180px]",
                  "desktop:max-[1535px]:h-[56px] desktop:max-[1535px]:w-[180px]",
                  "2xl:h-[79px] 2xl:w-[256px]",
                )}
                aria-label={data.logoAlt}
              >
                <CoverImage
                  src={data.logo}
                  alt={data.logoAlt}
                  className="object-contain object-left"
                  sizes="(min-width: 1536px) 256px, (min-width: 1280px) and (max-width: 1535px) 180px, 200px"
                />
              </a>
              <p
                className={cn(
                  "w-full min-w-0 flex-1 text-[13.5px] leading-[139%] font-medium tracking-[0.01em] text-[#0A0C0C]",
                  "tablet:max-[1280px]:max-w-[34rem] tablet:max-[1280px]:text-[13px] tablet:max-[1280px]:leading-[150%]",
                  "desktop:max-[1535px]:text-[12.5px]",
                  "2xl:max-w-[566px] 2xl:text-[15px]",
                )}
              >
                {data.description}
              </p>
            </div>

            <div
              className={cn(
                "mt-10 flex w-full max-w-[858px] flex-1 flex-col gap-6",
                "tablet:mt-12 tablet:flex-row tablet:gap-8",
                "tablet:max-[1280px]:mt-8 tablet:max-[1280px]:gap-6",
                "lg:gap-10 lg:max-[1280px]:gap-6",
                "desktop:max-[1535px]:mt-10 desktop:max-[1535px]:gap-6",
                "2xl:mt-20 2xl:gap-[138px]",
              )}
            >
              <FeatureColumn features={leftFeatures} />
              <FeatureColumn features={rightFeatures} />
            </div>

            <div
              className={cn(
                "relative mt-2 w-full max-w-[650px] overflow-visible",
                "tablet:h-[140px]",
                "tablet:max-[1280px]:mt-10 tablet:max-[1280px]:h-[128px] tablet:max-[1280px]:max-w-none",
                /* 1024–~1119: slightly shorter banner so content fits the narrow left column */
                "lg:max-[1120px]:mt-8 lg:max-[1120px]:h-[112px]",
                "desktop:mt-auto desktop:max-w-[826px]",
                "2xl:mt-32 2xl:max-w-[858px] 2xl:h-[177px]",
              )}
            >
              <div
                className={cn(
                  "absolute top-1/2 left-0 hidden h-[80px] w-fit max-w-[650px] -translate-y-1/2 tablet:block",
                  "tablet:max-[1280px]:left-0 tablet:max-[1280px]:h-[100px] tablet:max-[1280px]:w-full tablet:max-[1280px]:max-w-none",
                  "lg:max-[1120px]:h-[84px]",
                  "2xl:h-[100px] 2xl:w-auto 2xl:max-w-full",
                )}
              >
                <div
                  className="absolute inset-0 bg-size-[100%_100%] bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/flight24/banner-bg.png')",
                  }}
                />
                <div
                  className={cn(
                    "relative z-10 flex h-full w-full items-center gap-4 pr-3 pl-28",
                    "tablet:max-[1280px]:gap-3 tablet:max-[1280px]:pr-4 tablet:max-[1280px]:pl-[7.25rem]",
                    "lg:max-[1120px]:gap-2 lg:max-[1120px]:pr-2.5 lg:max-[1120px]:pl-[5.5rem]",
                    "2xl:gap-6 2xl:pr-4 2xl:pl-32",
                  )}
                >
                  <p className="min-w-0 shrink leading-none whitespace-nowrap text-[#FEFEFC] space-y-2 lg:max-[1120px]:space-y-1">
                    <span className="block text-[18px] font-medium tablet:max-[1280px]:text-[16px] lg:max-[1120px]:text-[13px] 2xl:text-[24px]">
                      Download
                    </span>
                    <span className="mt-1 block text-[18px] font-medium tablet:max-[1280px]:text-[16px] lg:max-[1120px]:mt-0.5 lg:max-[1120px]:text-[13px] 2xl:text-[24px]">
                      Flight24 Mobile App
                    </span>
                  </p>
                  <div className="ml-auto flex shrink-0 items-center gap-2 lg:max-[1120px]:gap-1.5">
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
                className={cn(
                  "pointer-events-none absolute top-1/2 z-20 hidden h-[170px] w-auto max-w-none -translate-y-[70%] drop-shadow-[0_10px_24px_rgb(10_12_12/25%)] tablet:block",
                  "-left-4",
                  "tablet:max-[1280px]:left-1 tablet:max-[1280px]:h-[150px] tablet:max-[1280px]:-translate-y-[68%]",
                  "lg:max-[1120px]:left-1.5 lg:max-[1120px]:h-[120px] lg:max-[1120px]:-translate-y-[66%]",
                  "2xl:-left-5 2xl:h-[210px] 2xl:-translate-y-[74%]",
                )}
              />
              <div className="relative h-[100px] w-full overflow-visible rounded-2xl tablet:hidden">
                <div
                  className="absolute inset-0 bg-size-[100%_100%] bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/flight24/banner-bg.png')",
                  }}
                />
                <div className="relative z-10 flex h-full items-center pl-24">
                  <p className="leading-none text-[#FEFEFC]">
                    <span className="block text-[14px] font-medium">
                      Download
                    </span>
                    <span className="mt-0.5 block text-[18px] font-bold">
                      Flight24 Mobile App
                    </span>
                  </p>
                </div>
                <Image
                  src="/images/flight24/phone.png"
                  alt=""
                  width={2851}
                  height={4096}
                  unoptimized
                  className="pointer-events-none absolute top-1/2 -left-3 z-20 h-[140px] w-auto max-w-none -translate-y-[56%]"
                />
              </div>
              <div className="mt-3 flex w-full gap-2 tablet:hidden">
                <StoreBadge
                  store="google"
                  className="min-w-0 flex-1 justify-center"
                />
                <StoreBadge
                  store="apple"
                  className="min-w-0 flex-1 justify-center"
                />
              </div>
            </div>
          </div>

          <div
            className={cn(
              "flight-visual relative mx-auto aspect-[858/816] w-full max-w-[650px]",
              "tablet:max-lg:mt-2 tablet:max-lg:max-w-[560px]",
              "lg:max-[1280px]:mx-0 lg:max-[1280px]:mt-0 lg:max-[1280px]:max-w-none",
              "lg:max-[1280px]:sticky lg:max-[1280px]:top-28",
              "desktop:h-[650px] desktop:aspect-auto desktop:self-start desktop:-mt-8",
              "desktop:max-[1535px]:mt-0 desktop:max-[1535px]:h-[500px] desktop:max-[1535px]:max-w-[480px]",
              "2xl:max-w-[858px] 2xl:h-[816px] 2xl:mt-0",
            )}
          >
            <div className="flight-art-mask absolute inset-0">
              <CoverImage
                src={data.image}
                alt={data.imageAlt}
                className="object-cover"
                sizes="(min-width: 1536px) 858px, (min-width: 1280px) and (max-width: 1535px) 480px, (min-width: 1024px) and (max-width: 1279px) 40vw, (min-width: 1280px) 650px, 100vw"
              />
            </div>
            <GoBadge href={partnerPortalUrl} className="flight-go-badge" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function FeatureColumn({ features }: { features: FlightInfoFeature[] }) {
  return (
    <ul
      className={cn(
        "flex w-full min-w-0 flex-1 flex-col gap-5",
        "tablet:max-[1280px]:gap-5",
        "desktop:gap-8 desktop:max-[1535px]:gap-5",
        "2xl:max-w-[360px] 2xl:gap-10",
      )}
    >
      {features.map((feature) => (
        <li key={feature.title} className="flex min-w-0 gap-2.5 2xl:gap-3">
          <span
            className={cn(
              "relative mt-0.5 inline-flex size-6 shrink-0 overflow-hidden rounded-md",
              "tablet:size-7 tablet:max-[1280px]:size-6",
              "desktop:max-[1535px]:size-6 2xl:size-8",
            )}
          >
            <CoverImage
              src={feature.icon}
              alt=""
              className="object-cover"
              sizes="32px"
            />
          </span>
          <span className="min-w-0">
            <span
              className={cn(
                "block text-[15px] leading-tight font-semibold text-[#0A0C0C]",
                "tablet:text-[16px] tablet:max-[1280px]:text-[15px]",
                "desktop:max-[1535px]:text-[15px] 2xl:text-[22px]",
              )}
            >
              {feature.title}
            </span>
            <span
              className={cn(
                "mt-1.5 block text-[12px] leading-[139%] font-medium tracking-[0.01em] text-neutral-600",
                "tablet:mt-2 tablet:text-[13px]",
                "tablet:max-[1280px]:mt-1.5 tablet:max-[1280px]:text-[12.5px] tablet:max-[1280px]:leading-[145%]",
                "desktop:max-[1535px]:mt-1 desktop:max-[1535px]:text-[12px]",
                "2xl:mt-3 2xl:text-[14px]",
              )}
            >
              {feature.description}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}

function StoreBadge({
  store,
  className,
}: {
  store: "google" | "apple";
  className?: string;
}) {
  const isGoogle = store === "google";
  return (
    <a
      href="#"
      className={cn(
        "inline-flex h-10 min-w-34 items-center gap-2 rounded-lg bg-black px-3 text-white",
        "tablet:max-[1280px]:h-9 tablet:max-[1280px]:min-w-0 tablet:max-[1280px]:px-2.5",
        "lg:max-[1120px]:h-8 lg:max-[1120px]:gap-1.5 lg:max-[1120px]:px-2",
        className,
      )}
    >
      {isGoogle ? (
        <svg
          viewBox="0 0 24 24"
          className="size-5 shrink-0 lg:max-[1120px]:size-4"
          aria-hidden="true"
        >
          <path fill="#EA4335" d="M4 3.5 14.5 12 4 20.5V3.5z" />
          <path fill="#FBBC05" d="M4 20.5 14.5 12 18 14.6 4 20.5z" />
          <path
            fill="#34A853"
            d="M18 9.4 14.5 12 18 14.6 20.5 13c.7-.4.7-1.6 0-2l-2.5-1.6z"
          />
          <path fill="#4285F4" d="M4 3.5 18 9.4 14.5 12 4 3.5z" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          className="size-5 shrink-0 fill-white lg:max-[1120px]:size-4"
          aria-hidden="true"
        >
          <path d="M16.7 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.5.9s-1.8-1-3-1c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-1.1 2.8-2.2c.9-1.3 1.3-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.7zM14.6 6.2c.6-.8 1.1-1.9.9-3-1 .1-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.5 2.9-1.4z" />
        </svg>
      )}
      <span>
        <span className="block text-[9px] leading-none text-white/80 lg:max-[1120px]:text-[8px]">
          {isGoogle ? "GET IT ON" : "Download on the"}
        </span>
        <span className="mt-0.5 block text-sm font-semibold leading-none tablet:max-[1280px]:text-[13px] lg:max-[1120px]:text-[11px]">
          {isGoogle ? "Google Play" : "App Store"}
        </span>
      </span>
    </a>
  );
}
