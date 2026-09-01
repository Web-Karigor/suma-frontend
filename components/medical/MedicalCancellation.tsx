"use client";

import { useState } from "react";
import { medicalCancellationPolicies } from "@/lib/medical-data";

export function MedicalCancellation() {
  const [disclaimerOpen, setDisclaimerOpen] = useState(true);

  return (
    <div className="flex w-full flex-col gap-8 desktop-xl:h-[405px]">
      <div className="flex flex-col gap-5">
        <h3 className="text-[24px] font-semibold leading-[1.28] text-white tablet:text-[28px]">
          Cancellation Policy
        </h3>
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

      <ul className="list-disc space-y-0 pl-[27px] text-[16px] leading-[1.64] font-light text-teal-50 tablet:text-[18px]">
        {medicalCancellationPolicies.map((policy) => (
          <li key={policy.timeframe}>{policy.timeframe}</li>
        ))}
      </ul>
    </div>
  );
}
