import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  inverted?: boolean;
};

export function Logo({ className, inverted = false }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5 no-underline", className)}>
      <span
        className={cn(
          "flex size-9 items-center justify-center rounded-lg",
          inverted ? "bg-white/15 text-white" : "bg-primary text-white",
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" className="size-5" fill="none">
          <path
            d="M6 22c4-9 16-9 20 0"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M10 22c2.4-5.2 9.6-5.2 12 0"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="16" cy="10" r="2.2" fill="currentColor" />
        </svg>
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block text-[1.05rem] font-semibold tracking-[0.18em]",
            inverted ? "text-white" : "text-primary-800",
          )}
        >
          SUMA
        </span>
        <span
          className={cn(
            "block text-[0.62rem] font-medium tracking-[0.12em]",
            inverted ? "text-white/70" : "text-neutral-500",
          )}
        >
          TRAVEL
        </span>
      </span>
    </Link>
  );
}
