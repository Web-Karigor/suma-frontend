"use client";

export function MedicalShareButton() {
  return (
    <button
      type="button"
      className="inline-flex h-[49px] w-[130px] shrink-0 items-center gap-[21px] rounded-button bg-white px-4 py-[10px] text-[18px] font-medium text-teal-600 transition-opacity hover:opacity-90"
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
      <span className="relative size-6 shrink-0 overflow-clip">
        <img
          src="/images/corporate-tour/icons/share.svg"
          alt=""
          width={24}
          height={24}
          className="size-full"
        />
      </span>
      Share
    </button>
  );
}
