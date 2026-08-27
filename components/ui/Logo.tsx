import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { company } from "@/lib/home-data";

type LogoProps = {
  className?: string;
  inverted?: boolean;
  compact?: boolean;
};

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link href="/" className={cn("flex shrink-0 items-center no-underline", className)}>
      <Image
        src="/logo.png"
        alt={company.name}
        width={230}
        height={58}
        priority
        className={cn(
          "w-auto object-contain",
          compact ? "h-8" : "h-9 desktop:h-11",
        )}
      />
    </Link>
  );
}
