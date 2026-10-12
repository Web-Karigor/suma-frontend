"use client";

import { ShareIcon } from "@/components/icons";

export function OfferShareButton() {
  return (
    <button
      type="button"
      className="inline-flex h-[49px] w-[130px] shrink-0 items-center justify-center gap-2 rounded-button bg-gold-200 px-4 py-3 text-base font-medium text-teal-700 transition-opacity hover:opacity-90"
      onClick={() => {
        const url = window.location.href;
        if (navigator.share) {
          void navigator.share({ title: document.title, url }).catch(() => {
            void navigator.clipboard.writeText(url).catch(() => undefined);
          });
          return;
        }
        void navigator.clipboard.writeText(url).catch(() => undefined);
      }}
    >
      <ShareIcon className="size-5 shrink-0" />
      Share
    </button>
  );
}
