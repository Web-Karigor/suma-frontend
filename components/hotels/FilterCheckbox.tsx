"use client";

import { Checkbox } from "@/components/ui/checkbox";

export function FilterCheckbox({
  label,
  count,
  checked,
  onChange,
}: {
  label: string;
  count?: number;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-[13px] text-neutral-800">
      <Checkbox checked={checked} onCheckedChange={() => onChange()} className="size-4" />
      <span className="flex-1">{label}</span>
      {count != null ? <span className="text-gray-500">{count}</span> : null}
    </label>
  );
}
