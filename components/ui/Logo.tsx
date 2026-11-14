"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { useSettingsQuery } from "@/hooks/queries/useSettingsQuery";
import { FALLBACK_SETTINGS } from "@/helpers/settings";
import { CoverImage } from "@/components/ui/CoverImage";

type LogoProps = {
  className?: string;
  frameClassName?: string;
  inverted?: boolean;
  compact?: boolean;
};

export function Logo({
  className,
  frameClassName,
  compact = false,
  inverted = false,
}: LogoProps) {
  const { data: settings = FALLBACK_SETTINGS } = useSettingsQuery();
  const src = inverted ? settings.logoDark : settings.logoLight;

  return (
    <Link href="/" className={cn("flex shrink-0 cursor-pointer items-center no-underline", className)}>
      <span
        className={cn(
          "relative block w-[180px] overflow-hidden",
          compact ? "h-9" : "h-10 desktop:h-[52px]",
          frameClassName,
        )}
      >
        {src ? (
          <CoverImage
            src={src}
            alt={settings.siteName || "Suma"}
            className="object-contain object-left"
            sizes="230px"
            priority
          />
        ) : null}
      </span>
    </Link>
  );
}
