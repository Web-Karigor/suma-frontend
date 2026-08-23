import { Container } from "@/components/ui/Container";
import { CalendarIcon, UsersIcon, ClockIcon } from "@/components/icons";

type PackageDetailHeroProps = {
  title: string;
  subtitle?: string;
  price: number;
  duration: string;
  groupSize: string;
  departureDate: string;
};

export function PackageDetailHero({
  title,
  subtitle,
  price,
  duration,
  groupSize,
  departureDate,
}: PackageDetailHeroProps) {
  return (
    <section className="bg-[#FCF4E0] py-6 md:py-10 lg:py-[40px]">
      <Container>
        <div className="mx-auto max-w-[1740px]">
          {/* Top Section */}
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-[90px]">
            {/* Left Content */}
            <div>
              {/* Title */}
              <div>
                <h1 className="text-[32px] font-bold leading-[1.15] text-hero md:text-[44px] lg:text-[52px]">
                  {title}
                </h1>

                {subtitle && (
                  <p className="mt-2 text-[15px] text-neutral-600 md:text-[18px] lg:text-[20px]">
                    {subtitle}
                  </p>
                )}
              </div>

              {/* Price */}
              <div className="mt-6 lg:mt-[32px]">
                <p className="text-[14px] font-medium text-neutral-500">
                  Starts From
                </p>

                <div className="mt-1 flex flex-wrap items-end gap-2">
                  <span className="text-[30px] font-bold leading-none text-primary md:text-[38px]">
                    ৳ {price.toLocaleString()}
                  </span>

                  <span className="pb-1 text-[13px] text-neutral-500 md:text-[14px]">
                    Per Person (VAT Included)
                  </span>
                </div>

                <p className="mt-3 text-[14px] font-medium text-primary">
                  The VAT&apos;s Included in This Price
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="flex h-[44px] min-w-[165px] items-center justify-center rounded-[4px] bg-primary px-6 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Book Now
                </button>

                <button
                  type="button"
                  className="flex h-[44px] items-center justify-center gap-2 rounded-[4px] bg-[#F4E6BE] px-5 text-[14px] font-semibold text-neutral-800 transition-opacity hover:opacity-90"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="18"
                      cy="5"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <circle
                      cx="6"
                      cy="12"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <circle
                      cx="18"
                      cy="19"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M8.7 10.7L15.3 6.3M8.7 13.3L15.3 17.7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                  </svg>
                  Share
                </button>
              </div>
            </div>

            {/* Right Package Details */}
            <div className="flex flex-col justify-end">
              {/* Heading */}
              <div className="flex h-[42px] items-center justify-center rounded-full border border-[#E8DDBE]">
                <h2 className="text-[17px] font-semibold text-neutral-800 md:text-[18px]">
                  Package Details
                </h2>
              </div>

              {/* Detail Cards */}
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {/* Package Type */}
                <div className="flex min-h-[110px] flex-col items-center justify-center rounded-[14px] bg-white px-4 text-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[7px] bg-[#F7E9BE]">
                    <UsersIcon className="h-5 w-5 text-[#B78B2E]" />
                  </div>

                  <p className="mt-2 text-[12px] text-neutral-500">
                    Package Type
                  </p>

                  <p className="mt-1 text-[13px] font-medium text-neutral-800">
                    {groupSize}
                  </p>
                </div>

                {/* Date */}
                <div className="flex min-h-[110px] flex-col items-center justify-center rounded-[14px] bg-white px-4 text-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[7px] bg-[#F7E9BE]">
                    <CalendarIcon className="h-5 w-5 text-[#B78B2E]" />
                  </div>

                  <p className="mt-2 text-[12px] text-neutral-500">Date</p>

                  <p className="mt-1 text-[13px] font-medium text-neutral-800">
                    {departureDate}
                  </p>
                </div>

                {/* Nights */}
                <div className="flex min-h-[110px] flex-col items-center justify-center rounded-[14px] bg-white px-4 text-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[7px] bg-[#F7E9BE]">
                    <ClockIcon className="h-5 w-5 text-[#B78B2E]" />
                  </div>

                  <p className="mt-2 text-[12px] text-neutral-500">Nights</p>

                  <p className="mt-1 text-[13px] font-medium text-neutral-800">
                    {duration}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
