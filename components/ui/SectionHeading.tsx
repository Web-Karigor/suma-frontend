import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      <h2 className="text-[1.75rem] font-semibold tracking-tight text-neutral-900 tablet:text-[2.5rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600 tablet:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
