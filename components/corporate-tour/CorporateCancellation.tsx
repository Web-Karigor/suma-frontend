"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";

type PackageCancellationProps = {
  html?: string | null;
};

function isHtml(value: string) {
  return /<\/?[a-z][\s\S]*>/i.test(value);
}

export function CorporateCancellation({ html }: PackageCancellationProps) {
  const [disclaimerOpen, setDisclaimerOpen] = useState(true);
  const content = html?.trim() ?? "";

  if (!content) return null;

  const contentClassName =
    "text-[16px] leading-[1.64] font-light text-teal-50 tablet:max-w-[1299px] tablet:text-[18px] [&_ul]:my-0 [&_ul]:list-disc [&_ul]:pl-[27px] [&_ol]:my-0 [&_ol]:list-decimal [&_ol]:pl-[27px] [&_li]:my-0 [&_p]:mb-2 [&_p:last-child]:mb-0";

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

          {isHtml(content) ? (
            <div
              className={contentClassName}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : (
            <div className={`${contentClassName} whitespace-pre-wrap`}>{content}</div>
          )}
        </div>
      </Container>
    </section>
  );
}
