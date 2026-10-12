"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";

export type ToastState = {
  type: "success" | "error";
  message: string;
} | null;

export function Toast({
  toast,
  onClose,
}: {
  toast: ToastState;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(onClose, 3000);
    return () => clearTimeout(id);
  }, [toast, onClose]);

  if (!mounted || !toast) return null;

  return createPortal(
    <div
      role="status"
      className={cn(
        "fixed top-4 right-4 z-[200] max-w-sm rounded-lg px-4 py-3 text-sm font-medium text-white shadow-lg",
        toast.type === "success" ? "bg-primary" : "bg-red-600",
      )}
    >
      {toast.message}
    </div>,
    document.body,
  );
}
