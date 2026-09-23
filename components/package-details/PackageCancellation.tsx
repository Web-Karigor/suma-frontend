"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { CloseIcon } from "@/components/icons";

type PackageCancellationProps = {
  html?: string | null;
};

function isHtml(value: string) {
  return /<\/?[a-z][\s\S]*>/i.test(value);
}

export function PackageCancellation({ html }: PackageCancellationProps) {
  const [disclaimerOpen, setDisclaimerOpen] = useState(true);
  const content = html?.trim() ?? "";

  if (!content) return null;

  const contentClassName =
    "mt-4 text-sm leading-[1.55] text-neutral-700 tablet:mt-5 tablet:text-[16px] [&_ul]:my-0 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 tablet:[&_ul]:pl-[20px] [&_ol]:my-0 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-5 tablet:[&_ol]:pl-[20px] [&_li]:my-1 [&_p]:mb-2 [&_p:last-child]:mb-0";

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

        {isHtml(content) ? (
          <div
            className={contentClassName}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          <div className={`${contentClassName} whitespace-pre-wrap`}>{content}</div>
        )}
      </Container>
    </section>
  );
}
