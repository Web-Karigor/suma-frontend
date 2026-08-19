"use client";

import { ShareIcon } from "@/components/icons";

export function HotelShareButton() {
  return (
    <button
      type="button"
      className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-black"
      onClick={() => {
        if (navigator.share) {
          void navigator.share({ title: document.title, url: window.location.href });
          return;
        }
        void navigator.clipboard.writeText(window.location.href);
      }}
    >
      <ShareIcon className="size-4" />
      Share
    </button>
  );
}
