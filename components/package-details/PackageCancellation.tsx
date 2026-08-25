"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { CloseIcon } from "@/components/icons";

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
    timeframe: "No refund will be made in case of cancellation within the last (72) hours.",
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

export function PackageCancellation({ policies = defaultPolicies }: PackageCancellationProps) {
  const [disclaimerOpen, setDisclaimerOpen] = useState(true);

  return (
    <section className="bg-gold-50 py-8 tablet:py-10 desktop-xl:py-12">
      <Container className="desktop-xl:!px-0">
        <h2 className="mb-3 text-[19px] leading-tight font-semibold text-hero tablet:text-[20px]">
          Cancellation Policy
        </h2>

        {disclaimerOpen ? (
          <div className="flex min-h-[48px] items-center justify-between border-b border-teal-600 bg-teal-100 px-3 py-3 tablet:px-4">
            <p className="text-[12px] leading-relaxed font-medium text-teal-800 tablet:text-[13px]">
              Disclaimer: For visa applicants - If your visa has been issued, you will not be able to
              cancel the package, and no amounts will be refunded
            </p>
            <button
              type="button"
              aria-label="Close disclaimer"
              className="ml-4 flex size-5 shrink-0 items-center justify-center text-teal-800 transition-opacity hover:opacity-70"
              onClick={() => setDisclaimerOpen(false)}
            >
              <CloseIcon className="size-4" />
            </button>
          </div>
        ) : null}

        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-[1.55] text-neutral-700 tablet:mt-5 tablet:pl-[20px] tablet:text-[16px]">
          {policies.map((policy) => (
            <li key={policy.timeframe}>
              {policy.timeframe}
              {policy.charge ? ` ${policy.charge}` : ""}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
