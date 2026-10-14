"use client";

import { useState } from "react";

export function MedicalCancellation({ html }: { html: string | null }) {
  const [disclaimerOpen, setDisclaimerOpen] = useState(true);

  if (!html) return null;

  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col gap-5">
        <h3 className="text-[24px] font-semibold leading-[1.28] text-[#0A0C0C] tablet:text-[28px]">
          Cancellation Policy
        </h3>
        {disclaimerOpen ? (
          <div className="flex items-center justify-between border-b-[3px] border-teal-600 bg-[#E6F2F2] px-3 py-6">
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
              <p className="text-[14px] leading-[1.6] font-normal text-teal-600 tablet:text-[18px]">
                Disclaimer: For visa applicants - If your visa has been issued,
                you will not be able to cancel the package, and no amounts will
                be refunded
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

      <div
        className="text-[16px] leading-[1.64] font-light text-[#0A0C0C] tablet:text-[18px] [&_ul]:my-0 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 tablet:[&_ul]:pl-[20px] [&_ol]:my-0 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-5 tablet:[&_ol]:pl-[20px] [&_li]:my-1 [&_p]:mb-2 [&_p:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
