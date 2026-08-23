import { Container } from "@/components/ui/Container";

type CancellationPolicy = {
  timeframe: string;
  charge?: string;
};

type PackageCancellationProps = {
  policies?: CancellationPolicy[];
};

const defaultPolicies: CancellationPolicy[] = [
  {
    timeframe:
      "75% of the package value will be refunded in case of cancellation within (24) hours from the time of booking.",
  },
  {
    timeframe:
      "0% of the value of the package services will be refunded in case of cancellation after (24) hours, and before the last (5) Day/Days. An exception to this rule is the visa application processing fee, which is non-refundable after the 24-hour period.",
  },
  {
    timeframe:
      "No refund will be made in case of cancellation within the last (72) hours.",
  },
  {
    timeframe:
      "The above rules apply to flight reservations organized by the service provider, and do not apply to custom flight reservations designated by the airline system for which specific cancellation policies apply to each reservation.",
  },
  {
    timeframe:
      "3.45% processing fees & its VAT will be deducted when the amounts are withdrawn from the wallet.",
  },
  {
    timeframe:
      "Currency exchange rates may result in differences in the amounts deposited and withdrawn from digital wallets.",
  },
];

export function CorporateCancellation({
  policies = defaultPolicies,
}: PackageCancellationProps) {
  return (
    <section className=" py-8 md:py-10">
      <Container>
        {/* Full width content */}
        <div className="w-full">
          {/* Section Title */}
          <h2 className="mb-3 text-[19px] font-bold leading-tight text-hero md:text-[20px]">
            Cancellation Policy
          </h2>

          {/* Disclaimer */}
          <div className="flex min-h-[48px] items-center justify-between border-b border-[#19737A] bg-[#E1F1F5] px-3 py-3 md:px-4">
            <div className="flex items-center gap-2">
              {/* Info Icon */}
              <svg
                className="h-[15px] w-[15px] shrink-0 text-[#17636A]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  strokeWidth="1.8"
                />
                <path
                  strokeLinecap="round"
                  strokeWidth="1.8"
                  d="M12 10v5"
                />
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M12 7.5h.01"
                />
              </svg>

              <p className="text-[12px] font-medium leading-relaxed text-[#17636A] md:text-[13px]">
                Disclaimer: For visa applicants - If your visa has been issued,
                you will not be able to cancel the package, and no amounts will
                be refunded
              </p>
            </div>

            {/* Close Icon */}
            <button
              type="button"
              aria-label="Close disclaimer"
              className="ml-4 flex h-5 w-5 shrink-0 items-center justify-center text-[#17636A] transition-opacity hover:opacity-70"
            >
              <svg
                className="h-[15px] w-[15px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            </button>
          </div>

          {/* Policies */}
          <div className="pt-4 md:pt-5">
            <ul className="list-disc space-y-[2px] pl-[18px] text-[14px] leading-[1.5] text-neutral-700 md:pl-[20px] md:text-[18px]">
              {policies.map((policy, index) => (
                <li key={index}>
                  {policy.timeframe}
                  {policy.charge ? ` ${policy.charge}` : ""}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}