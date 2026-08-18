import Link from "next/link";
import { cn } from "@/lib/cn";
import { company } from "@/lib/home-data";

type LogoProps = {
  className?: string;
  inverted?: boolean;
  compact?: boolean;
};

export function Logo({ className, inverted = false, compact = false }: LogoProps) {
  return (
    <Link href="/" className={cn("flex min-w-0 items-center gap-2.5 no-underline", className)}>
      <span className="relative size-11 shrink-0 desktop:size-12" aria-hidden="true">
        <LogoMark inverted={inverted} />
      </span>
      <span className="min-w-0 leading-[1.15]">
        <span
          className={cn(
            "block truncate text-[0.78rem] font-bold tracking-tight desktop:text-[0.84rem]",
            inverted ? "text-white" : "text-teal-700",
          )}
        >
          {compact ? "Suma" : company.name}
        </span>
        {compact ? null : (
          <span
            className={cn(
              "mt-0.5 block text-[0.62rem] font-medium tracking-wide",
              inverted ? "text-white/70" : "text-teal-600",
            )}
          >
            {company.tagline}
          </span>
        )}
      </span>
    </Link>
  );
}

function LogoMark({ inverted }: { inverted: boolean }) {
  const stroke = inverted ? "#FEFEFC" : "#006968";
  const fill = inverted ? "rgb(254 254 252 / 12%)" : "#E8F4F4";

  return (
    <svg viewBox="0 0 48 48" className="size-full" fill="none">
      <circle cx="24" cy="24" r="23.2" fill={fill} />
      <path
        d="M11 31c5.2-12.4 20.8-12.4 26 0"
        stroke={stroke}
        strokeWidth="2.15"
        strokeLinecap="round"
      />
      <path
        d="M13.2 25.5c4.4-8.8 17.2-8.8 21.6 0"
        stroke={stroke}
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M15.6 20.2c3.4-5.6 13.4-5.6 16.8 0"
        stroke={stroke}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M14 14.5c-5.5 6.2-4.8 14.8 3.2 20.2"
        stroke={stroke}
        strokeWidth="1.55"
        strokeLinecap="round"
      />
      <path
        d="M34 13.8c5.2 6 4.6 14.4-2.6 20"
        stroke={stroke}
        strokeWidth="1.55"
        strokeLinecap="round"
      />
      <circle cx="19.2" cy="15.4" r="2.15" fill="#EBB732" />
      <circle cx="31.4" cy="22.6" r="2.15" fill="#EBB732" />
    </svg>
  );
}
