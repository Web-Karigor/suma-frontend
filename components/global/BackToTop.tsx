"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/cn";

const SHOW_AFTER_PX = 320;

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
      ticking.current = false;
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        "fixed bottom-8 left-4 xl:left-10 z-[90] flex size-11 items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_24px_rgb(0_123_122/28%)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] tablet:bottom-7 tablet:left-6 tablet:size-12",
        "hover:bg-primary-700 hover:shadow-[0_10px_28px_rgb(0_123_122/36%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
        "motion-reduce:transition-none",
        visible
          ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-3 scale-90 opacity-0",
      )}
    >
      <ChevronUp className="size-5 tablet:size-6" strokeWidth={2.25} />
    </button>
  );
}
