"use client";

import { ChevronDownIcon } from "@/components/icons";

export function FilterSection({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between text-left text-[15px] font-semibold text-black"
        onClick={onToggle}
        aria-expanded={open}
      >
        {title}
        <ChevronDownIcon className={`size-4 text-gray-600 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? <div className="mt-3">{children}</div> : null}
    </div>
  );
}
