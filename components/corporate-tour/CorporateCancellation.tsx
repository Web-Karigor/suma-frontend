"use client";

import { useState } from "react";
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
      "0% of the value of the package services will be refunded in case of cancellation after (24) hours, and before the last (5) Day/Days .An exception to this rule is the visa application processing fee, which is non-refundable after the 24-hour period.",
  },
  {
    timeframe: "No refunds will be made in case of cancellation within the last (72) hours.",
  },
  {
    timeframe:
      "The above rules apply to flight reservations organized by the service provider, and do not apply to custom flight reservations designated by the airline system for which specific cancellation policies apply to each reservation.",
  },
  {
    timeframe: "3.45% processing fees & its VAT will be deducted when the amounts are withdrawn from the wallet.",
  },
  {
    timeframe:
      "Currency exchange rates may result in differences in the amounts deposited and withdrawn from digital wallets.",
  },
];

export function CorporateCancellation({ policies = defaultPolicies }: PackageCancellationProps) {
  const [disclaimerOpen, setDisclaimerOpen] = useState(true);

  return (
    <section className="bg-teal-950 pt-12 tablet:pt-16 desktop-xl:pt-[100px]">
      <Container className="desktop-xl:!px-0">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h2 className="text-[24px] font-semibold leading-[1.28] text-white tablet:text-[28px]">
              Cancellation Policy
            </h2>
            {disclaimerOpen ? (
              <div className="flex items-center justify-between border-b-[3px] border-teal-600 bg-overlay-white-08 px-3 py-6">
                <div className="flex items-center gap-2">
                  <span className="relative size-6 shrink-0 overflow-clip">
                    <img
                      src="/images/corporate-tour/icons/alert.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="size-full"
                    />
                  </span>
                  <p className="text-[14px] leading-[1.6] font-normal text-teal-300 tablet:text-[18px]">
                    Disclaimer: For visa applicants - If your visa has been issued, you will not be able to cancel the
                    package, and no amounts will be refunded
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Close disclaimer"
                  className="ml-4 size-6 shrink-0 overflow-clip"
                  onClick={() => setDisclaimerOpen(false)}
                >
                  <img
                    src="/images/corporate-tour/icons/close.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="size-full"
                  />
                </button>
              </div>
            ) : null}
          </div>

          <ul className="list-disc space-y-0 pl-[27px] text-[16px] leading-[1.64] font-light text-teal-50 tablet:max-w-[1299px] tablet:text-[18px]">
            {policies.map((policy) => (
              <li key={policy.timeframe}>
                {policy.timeframe}
                {policy.charge ? ` ${policy.charge}` : ""}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
