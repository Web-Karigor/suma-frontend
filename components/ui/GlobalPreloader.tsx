"use client";

import { LoaderCircle } from "lucide-react";

export function GlobalPreloader() {
    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/70 backdrop-blur-sm"
            role="status"
            aria-live="polite"
            aria-label="Loading"
        >
            <LoaderCircle className="size-10 animate-spin text-primary" />
        </div>
    );
}