"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type CorporateHeroProps = {
  title: string;
  subtitle: string;
  price: number;
  discount?: number;
  images: string[];
};

export function CorporateHero({
  title,
  subtitle,
  price,
  images,
}: CorporateHeroProps) {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#002525]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={images[0]}
          alt="Corporate business travel"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0b2f3a]/80" />

        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#24391d]/90 via-[#20372d]/50 to-transparent" />
      </div>

      <Container className="relative z-10 py-10 md:py-14 lg:py-16">
        {/* Hero Top Content */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
          {/* Left Side */}
          <div className="max-w-[650px]">
            <h1 className="max-w-[650px] text-[38px] font-bold leading-[1.08] tracking-tight text-white md:text-[52px] lg:text-[60px]">
              {title}
            </h1>

            <p className="mt-4 max-w-[620px] text-[15px] leading-relaxed text-white/80 md:text-[17px]">
              {subtitle}
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button
                href="#booking"
                className="min-w-[170px] bg-[#f5c33b] text-[#172c33] hover:bg-[#ffd45c]"
              >
                Book Now
              </Button>

              <button
                type="button"
                className="flex h-[49px] items-center justify-center gap-3 rounded-md bg-white px-7 text-sm font-semibold text-[#27666b] transition hover:bg-white/90"
              >
                {/* Share Icon */}
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle cx="18" cy="5" r="2.5" strokeWidth="1.8" />
                  <circle cx="6" cy="12" r="2.5" strokeWidth="1.8" />
                  <circle cx="18" cy="19" r="2.5" strokeWidth="1.8" />

                  <path
                    strokeLinecap="round"
                    strokeWidth="1.8"
                    d="M8.2 10.9l7.5-4.8M8.2 13.1l7.5 4.8"
                  />
                </svg>

                Share
              </button>
            </div>
          </div>

          {/* Right Price */}
          <div className="pt-2 text-right lg:pt-5">
            <p className="text-sm font-medium text-white/75">
              Starts from
            </p>

            <div className="mt-1 flex items-start justify-end gap-2">
              <span className="mt-2 text-[24px] font-bold text-white md:text-[30px]">
                ৳
              </span>

              <span className="text-[38px] font-bold leading-none text-white md:text-[52px]">
                {price.toLocaleString()}
              </span>
            </div>

            <p className="mt-2 text-xs text-white/70">
              Per Person (VAT Included)
            </p>

            <div className="mt-6 flex items-center justify-end gap-3 text-xs font-semibold text-white/80">
              <span>See What's Included in This Price?</span>

              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M12 4v16m0 0l-5-5m5 5l5-5"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom 5 Image Gallery */}
        <div className="mt-12 flex items-end justify-center gap-2 sm:gap-3 lg:mt-16 lg:gap-3">
          
          {/* Image 1 - Tall */}
          <div className="relative h-[280px] w-[20%] overflow-hidden rounded-[22px] sm:h-[320px] lg:h-[365px] lg:w-[18%]">
            <Image
              src={images[0]}
              alt="Corporate travel"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0d315d]/90 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-0 right-0 px-3 text-center lg:bottom-7">
              <p className="text-[8px] text-white/75 lg:text-[10px]">
                Feels Like Home. Feels Like
              </p>

              <p className="mt-1 text-[10px] font-bold text-white lg:text-xs">
                First Class.
              </p>

              <p className="mt-1 text-[7px] text-white/70 lg:text-[9px]">
                Step into a new era of luxury travel.
              </p>
            </div>
          </div>

          {/* Image 2 - Medium / Lower */}
          <div className="relative mb-0 h-[230px] w-[20%] overflow-hidden rounded-[22px] sm:h-[270px] lg:h-[285px] lg:w-[19%]">
            <Image
              src={images[1]}
              alt="Business journey"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#123f56]/30 to-transparent" />
          </div>

          {/* Image 3 - Shortest / Center */}
          <div className="relative h-[180px] w-[20%] overflow-hidden rounded-[22px] sm:h-[200px] lg:h-[220px] lg:w-[16%]">
            <Image
              src={images[2]}
              alt="Global business"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[#11294d]/20" />
          </div>

          {/* Image 4 - Medium Tall */}
          <div className="relative h-[260px] w-[20%] overflow-hidden rounded-[22px] sm:h-[300px] lg:h-[330px] lg:w-[18%]">
            <Image
              src={images[3]}
              alt="Business professional"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 5 - Tall */}
          <div className="relative h-[280px] w-[20%] overflow-hidden rounded-[22px] sm:h-[320px] lg:h-[365px] lg:w-[20%]">
            <Image
              src={images[4] || images[0]}
              alt="Corporate flight"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#1c5278]/80 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-0 right-0 px-3 text-center lg:bottom-7">
              <p className="text-[8px] font-bold tracking-wide text-white/85 lg:text-[10px]">
                RISING TO A NEW OPPORTUNITY.
              </p>

              <p className="mx-auto mt-3 max-w-[190px] text-[6px] leading-relaxed text-white/60 lg:mt-4 lg:text-[7px]">
                Every journey begins with a destination, but every great
                experience begins with the way you travel.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}