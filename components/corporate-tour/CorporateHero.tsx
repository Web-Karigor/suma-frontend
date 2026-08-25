"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

type CorporateHeroProps = {
  title: string;
  subtitle: string;
  price: number;
  discount?: number;
  images: string[];
};

const COLLAGE = [
  {
    src: "/images/corporate-tour/collage-1.png",
    alt: "First class cabin",
    className: "h-[280px] w-[198px] tablet:h-[400px] tablet:w-[284px] desktop-xl:h-[519px] desktop-xl:w-[368px]",
  },
  {
    src: "/images/corporate-tour/collage-2.png",
    alt: "Global business travel",
    className: "h-[193px] w-[186px] tablet:h-[276px] tablet:w-[266px] desktop-xl:h-[358px] desktop-xl:w-[345px]",
  },
  {
    src: "/images/corporate-tour/collage-3.png",
    alt: "Connected destinations",
    className: "h-[121px] w-[155px] tablet:h-[173px] tablet:w-[222px] desktop-xl:h-[225px] desktop-xl:w-[288px]",
  },
  {
    src: "/images/corporate-tour/collage-4.png",
    alt: "Business traveler",
    className: "h-[207px] w-[169px] tablet:h-[295px] tablet:w-[242px] desktop-xl:h-[383px] desktop-xl:w-[314px]",
  },
  {
    src: "/images/corporate-tour/collage-5.png",
    alt: "Corporate flight",
    className: "h-[279px] w-[199px] tablet:h-[398px] tablet:w-[284px] desktop-xl:h-[517px] desktop-xl:w-[369px]",
  },
] as const;

export function CorporateHero({ title, subtitle, price }: CorporateHeroProps) {
  const formattedPrice = `৳ ${price.toLocaleString("en-US")}`;

  return (
    <section className="relative overflow-hidden bg-teal-950">
      <div className="absolute inset-x-0 top-0 h-[640px] tablet:h-[820px] desktop-xl:h-[1062px]">
        <Image
          src="/images/corporate-tour/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[rgba(0,37,37,0.7)] from-[25%] to-teal-950" />
      </div>

      {/* Top padding clears the fixed Header (~5.5rem) while keeping Figma content offset (61px). */}
      <Container className="relative z-10 pt-[7.5rem] pb-12 tablet:pt-32 tablet:pb-16 desktop-xl:pt-[149px] desktop-xl:pb-[147px] desktop-xl:!px-0">
        <div className="flex w-full flex-col gap-8 tablet:gap-10 desktop:flex-row desktop:items-start desktop:justify-between desktop-xl:h-[247px]">
          <div className="flex w-full flex-col gap-6 tablet:gap-8 desktop-xl:w-[858px] desktop-xl:gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold tracking-[-0.28px] text-white text-[32px] leading-[1.08] tablet:text-[44px] desktop-xl:w-[858px] desktop-xl:text-[56px]">
                {title}
              </h1>
              <p className="font-normal text-gray-50 text-[16px] leading-[1.5] tablet:text-[20px] desktop-xl:w-[858px]">
                {subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 desktop-xl:gap-6">
              <Link
                href="#booking"
                className="inline-flex h-[49px] w-full items-center justify-center rounded-button bg-gold-500 px-4 py-3 text-base font-medium text-black transition-opacity hover:opacity-90 tablet:w-[269px]"
              >
                Book Now
              </Link>
              <button
                type="button"
                className="inline-flex h-[49px] w-[130px] items-center gap-[21px] rounded-[6px] bg-white px-4 py-[10px] text-[18px] font-medium text-teal-600 transition-opacity hover:opacity-90"
                onClick={() => {
                  const url = window.location.href;
                  if (navigator.share) {
                    void navigator.share({ title: document.title, url }).catch(() => {
                      void navigator.clipboard.writeText(url).catch(() => undefined);
                    });
                    return;
                  }
                  void navigator.clipboard.writeText(url).catch(() => undefined);
                }}
              >
                <span className="relative size-6 shrink-0 overflow-clip">
                  <img
                    src="/images/corporate-tour/icons/share.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="size-full"
                  />
                </span>
                Share
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 tablet:items-end desktop-xl:w-[304px] desktop-xl:gap-6">
            <div className="flex flex-col items-start gap-2.5 text-white tablet:items-end tablet:text-right">
              <p className="text-base font-semibold leading-[1.58]">Starts From</p>
              <div className="flex flex-col items-start gap-1.5 tablet:items-end">
                <p className="text-[40px] font-semibold leading-[1.08] tracking-[-0.28px] tablet:text-[56px]">
                  {formattedPrice}
                </p>
                <p className="text-base font-normal leading-[1.6]">Per Person (VAT Included)</p>
              </div>
            </div>
            <a
              href="#services"
              className="flex w-full items-center justify-between text-neutral-50 desktop-xl:w-[304px]"
            >
              <span className="text-base font-semibold leading-[1.58]">See What&apos;s Included in This Price?</span>
              <span className="relative size-5 shrink-0 overflow-clip">
                <img
                  src="/images/corporate-tour/icons/arrow-down.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="size-full"
                />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-10 flex w-full items-end gap-3.5 overflow-x-auto pb-2 tablet:mt-12 desktop-xl:mt-[100px] desktop-xl:gap-[14px] desktop-xl:overflow-visible desktop-xl:pb-0">
          {COLLAGE.map((item) => (
            <div key={item.src} className={`relative shrink-0 overflow-hidden rounded-[32px] ${item.className}`}>
              <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="369px" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
