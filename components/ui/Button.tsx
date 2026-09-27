import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type" | "children">;

export function ArrowShift({ className }: { className?: string }) {
  return (
    <span className={cn("relative overflow-hidden", className)}>
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[120%] group-hover:-translate-y-[120%] motion-reduce:transition-none">
        <ArrowUpRightIcon className="size-[85%]" />
      </span>
      <span className="absolute inset-0 flex items-center justify-center translate-x-[-120%] translate-y-[120%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0 motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:transition-none">
        <ArrowUpRightIcon className="size-[85%]" />
      </span>
    </span>
  );
}

function ArrowBadge() {
  return (
    <span className="inline-flex size-[25px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white text-primary">
      <ArrowShift className="size-full" />
    </span>
  );
}

const buttonClass =
  "group inline-flex h-[49px] cursor-pointer items-center gap-8 rounded-button bg-primary pt-3 pr-3 pb-3 pl-4 text-base font-medium whitespace-nowrap text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed";

export function Button({
  href,
  children,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(buttonClass, className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        <ArrowBadge />
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
      <ArrowBadge />
    </button>
  );
}

type CircleArrowButtonProps = {
  href?: string;
  className?: string;
  label?: string;
};

export function CircleArrowButton({
  href = "/flights",
  className,
  label = "Go",
}: CircleArrowButtonProps) {
  return <GoBadge href={href} className={className} label={label} />;
}

type GoBadgeProps = {
  href?: string;
  className?: string;
  label?: string;
};

export function GoBadge({
  href = "/flights",
  className,
  label = "Go",
}: GoBadgeProps) {
  const classes = cn("group relative block aspect-square cursor-pointer", className);
  const content = (
    <>
      <span className="sr-only">{label}</span>
      <img
        src="/Circle-shape.svg"
        alt=""
        className="pointer-events-none absolute inset-0 size-full object-contain"
      />
      <svg viewBox="0 0 188 188" className="absolute inset-0 size-full" aria-hidden="true">
        <defs>
          <path
            id="go-badge-text"
            d="M94,94 m0,-66 a66,66 0 1,1 0,132 a66,66 0 1,1 0,-132"
          />
        </defs>
        <g className="flight-text-rotate">
          {["16.667%", "50%", "83.333%"].map((offset) => (
            <text
              key={offset}
              fill="#FEFEFC"
              fontSize="18"
              fontWeight="400"
              letterSpacing="1.4"
              fontFamily="var(--font-poppins), Poppins, sans-serif"
            >
              <textPath
                href="#go-badge-text"
                startOffset={offset}
                textAnchor="middle"
              >
                FLIGHT 24
              </textPath>
            </text>
          ))}
        </g>
        <circle
          cx="94"
          cy="94"
          r="52"
          fill="none"
          stroke="#EBB732"
          strokeWidth="2.2"
        />
        <circle
          cx="94"
          cy="94"
          r="46"
          fill="none"
          stroke="#EBB732"
          strokeWidth="1.2"
          strokeDasharray="2.6 3.4"
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute inset-[26.5%] flex items-center justify-center rounded-full">
        <span className="text-[30px] leading-none font-bold tracking-[0.02em] text-white transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-125 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          GO
        </span>
      </span>
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        aria-label={label}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} aria-label={label}>
      {content}
    </button>
  );
}
