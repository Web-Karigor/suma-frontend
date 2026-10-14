"use client";

import { ShareIcon } from "@/components/icons";

export function HotelShareButton() {
  return (
    <button
      type="button"
      className="inline-flex h-[53px] cursor-pointer items-center gap-[21px] rounded-[12px] border-0 bg-[#F2F8F8] p-3 text-base font-medium text-[#0A0C0C]"
      onClick={() => {
        if (navigator.share) {
          void navigator.share({
            title: document.title,
            url: window.location.href,
          });
          return;
        }
        void navigator.clipboard.writeText(window.location.href);
      }}
    >
      <ShareIcon className="size-6 shrink-0 text-[#0A0C0C]" />
      Share
    </button>
  );
}
