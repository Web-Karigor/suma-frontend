"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { useSettingsQuery } from "@/hooks/queries/useSettingsQuery";
import { FALLBACK_SETTINGS } from "@/helpers/settings";

type LogoProps = {
  className?: string;
  inverted?: boolean;
  compact?: boolean;
};

export function Logo({ className, compact = false, inverted = false }: LogoProps) {
  const { data: settings = FALLBACK_SETTINGS } = useSettingsQuery();
  const src = inverted ? settings.logoDark : settings.logoLight;

  return (
    <Link href="/" className={cn("flex shrink-0 items-center no-underline", className)}>
      <Image
        src={src}
        alt={settings.siteName}
        width={230}
        height={58}
        priority
        className={cn(
          "w-auto object-contain",
          compact ? "h-9" : "h-10 desktop:h-[52px]",
        )}
      />
    </Link>
  );
}
