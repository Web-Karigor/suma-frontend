import Image from "next/image";
import { Container } from "@/components/ui/Container";

type Stat = {
  value: string;
  label: string;
};

type MedicalHeroProps = {
  title: string;
  subtitle: string;
  stats: Stat[];
  heroImage: string;
  secondaryImage: string;
};

export function MedicalHero({
  title,
  subtitle,
  stats,
  heroImage,
  secondaryImage,
}: MedicalHeroProps) {
  return (
    <section className="overflow-hidden bg-[#e8f0f2]">
      {/* ================= HERO CONTENT ================= */}
      <div className="py-7 md:py-10 lg:py-6">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10 xl:gap-14">
            {/* ================= LEFT CONTENT ================= */}
            <div className="pt-2">
              {/* Title */}
              <h1 className="max-w-[580px] text-[38px] font-bold leading-[1.04] tracking-[-0.02em] text-[#1d2b31] md:text-[48px] lg:text-[52px]">
                <span className="block">
                  {title.split("\n")[0] || title}
                </span>

                {title.includes("\n") && (
                  <span className="block text-[#1d6b70]">
                    {title.split("\n").slice(1).join(" ")}
                  </span>
                )}
              </h1>

              {/* Subtitle */}
              <p className="mt-4 max-w-[510px] text-[14px] leading-[1.6] text-[#59676c] md:text-[15px]">
                {subtitle}
              </p>

              {/* ================= INFO CARDS ================= */}
              <div className="mt-7 grid max-w-[520px] grid-cols-1 gap-3 sm:grid-cols-3">
                {/* Treatment */}
                <div className="flex min-h-[80px] flex-col items-center justify-center rounded-[10px] border border-[#a9c7cb] bg-white/20 px-3 text-center">
                  <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-[4px] bg-[#1d7278] text-white">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.7"
                        d="M12 3v18M3 12h18"
                      />
                    </svg>
                  </div>

                  <span className="text-[8px] uppercase tracking-wide text-[#77868b]">
                    Treatment
                  </span>

                  <span className="mt-1 text-[11px] font-medium text-[#334248]">
                    Consultation-based
                  </span>
                </div>

                {/* Countries */}
                <div className="flex min-h-[80px] flex-col items-center justify-center rounded-[10px] border border-[#a9c7cb] bg-white/20 px-3 text-center">
                  <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-[4px] bg-[#1d7278] text-white">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <rect
                        x="4"
                        y="5"
                        width="16"
                        height="15"
                        rx="2"
                        strokeWidth="1.7"
                      />
                      <path
                        strokeLinecap="round"
                        strokeWidth="1.7"
                        d="M8 3v4M16 3v4M8 11h8"
                      />
                    </svg>
                  </div>

                  <span className="text-[8px] uppercase tracking-wide text-[#77868b]">
                    Countries
                  </span>

                  <span className="mt-1 text-[11px] font-medium text-[#334248]">
                    Multiple destinations
                  </span>
                </div>

                {/* Support */}
                <div className="flex min-h-[80px] flex-col items-center justify-center rounded-[10px] border border-[#a9c7cb] bg-white/20 px-3 text-center">
                  <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-[4px] bg-[#1d7278] text-white">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.7"
                        d="M8 15h-.5A3.5 3.5 0 014 11.5v-1a8 8 0 0116 0v1a3.5 3.5 0 01-3.5 3.5H16"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.7"
                        d="M8 14v3M16 14v3"
                      />
                    </svg>
                  </div>

                  <span className="text-[8px] uppercase tracking-wide text-[#77868b]">
                    Support
                  </span>

                  <span className="mt-1 text-[11px] font-medium text-[#334248]">
                    24/7 Coordinators
                  </span>
                </div>
              </div>

              {/* What's Included */}
              <button
                type="button"
                className="mt-7 inline-flex items-center gap-2 text-[11px] font-semibold text-[#1d6b70] transition-opacity hover:opacity-70"
              >
                <span>See What&apos;s Included?</span>

                <svg
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M12 5v14m0 0l-5-5m5 5l5-5"
                  />
                </svg>
              </button>

              {/* CTA Buttons */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex h-[38px] min-w-[190px] items-center justify-center rounded-[3px] bg-[#176c71] px-6 text-[10px] font-semibold text-white transition-all hover:bg-[#10595d]"
                >
                  Request a Free Consultation
                </a>

                <button
                  type="button"
                  className="inline-flex h-[38px] items-center gap-2 rounded-[3px] bg-[#d4e5e7] px-4 text-[10px] font-semibold text-[#35696d] transition-all hover:bg-[#c5dcdf]"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle cx="18" cy="5" r="2.2" strokeWidth="1.7" />
                    <circle cx="6" cy="12" r="2.2" strokeWidth="1.7" />
                    <circle cx="18" cy="19" r="2.2" strokeWidth="1.7" />

                    <path
                      strokeLinecap="round"
                      strokeWidth="1.7"
                      d="M8 11l7.8-4.7M8 13l7.8 4.7"
                    />
                  </svg>

                  Share
                </button>
              </div>
            </div>

            {/* ================= RIGHT IMAGE COLLAGE ================= */}
            <div className="grid h-[430px] grid-cols-[1.05fr_1fr] gap-3 md:h-[500px] lg:h-[355px] xl:h-[390px]">
              {/* Main Doctor Image */}
              <div className="relative h-full overflow-hidden rounded-[18px]">
                <Image
                  src={heroImage}
                  alt="Medical professional"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
              </div>

              {/* Right Images */}
              <div className="grid h-full grid-rows-2 gap-3">
                {/* Top */}
                <div className="relative overflow-hidden rounded-[18px]">
                  <Image
                    src={secondaryImage}
                    alt="Medical team"
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Bottom */}
                <div className="relative overflow-hidden rounded-[18px]">
                  <Image
                    src={secondaryImage}
                    alt="Hospital consultation"
                    fill
                    className="object-cover object-bottom"
                  />

                  <div className="absolute inset-0 bg-[#0c3440]/10" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ================= STATS BAR ================= */}
      <div className="bg-[#17787c]">
        <Container>
          <div className="grid grid-cols-2 divide-[#4b9b9e] py-6 sm:grid-cols-4 sm:divide-x md:py-7">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex min-h-[55px] flex-col items-center justify-center px-4 text-center"
              >
                <p className="text-[28px] font-light leading-none text-white md:text-[34px]">
                  {stat.value}
                </p>

                <p className="mt-2 text-[10px] text-white/65 md:text-[11px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}