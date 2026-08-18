import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type" | "children">;

function ArrowShift({ className }: { className?: string }) {
  return (
    <span className={cn("relative overflow-hidden", className)}>
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[120%] group-hover:-translate-y-[120%] motion-reduce:transition-none">
        <ArrowUpRightIcon className="size-[55%]" />
      </span>
      <span className="absolute inset-0 flex items-center justify-center translate-x-[-120%] translate-y-[120%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0 motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:transition-none">
        <ArrowUpRightIcon className="size-[55%]" />
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
  "group inline-flex h-[49px] items-center gap-8 rounded-button bg-primary pt-3 pr-3 pb-3 pl-4 text-base font-medium whitespace-nowrap text-white transition-colors hover:bg-primary-700";

export function Button({ href, children, className, type = "button", ...props }: ButtonProps) {
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

function scallopPath(cx: number, cy: number, radius: number, teeth: number, depth: number) {
  const parts: string[] = [];
  const arcR = (Math.PI * radius) / teeth + depth * 0.28;
  for (let i = 0; i < teeth; i += 1) {
    const a0 = (i / teeth) * Math.PI * 2 - Math.PI / 2;
    const a1 = ((i + 1) / teeth) * Math.PI * 2 - Math.PI / 2;
    const x0 = cx + Math.cos(a0) * radius;
    const y0 = cy + Math.sin(a0) * radius;
    const x1 = cx + Math.cos(a1) * radius;
    const y1 = cy + Math.sin(a1) * radius;
    parts.push(`${i === 0 ? "M" : "L"}${x0.toFixed(2)} ${y0.toFixed(2)}`);
    parts.push(`A ${arcR.toFixed(2)} ${arcR.toFixed(2)} 0 0 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`);
  }
  return `${parts.join(" ")} Z`;
}

export function GoBadge({ href = "/flights", className, label = "Go" }: GoBadgeProps) {
  const classes = cn("group relative block aspect-square", className);
  const content = (
    <>
      <span className="sr-only">{label}</span>
      <svg viewBox="0 0 188 188" className="size-full" aria-hidden="true">
        <path d={scallopPath(94, 94, 91, 32, 8)} fill="#005655" />
        <defs>
          <path
            id="go-badge-text"
            d="M94,94 m0,-66 a66,66 0 1,1 0,132 a66,66 0 1,1 0,-132"
          />
        </defs>
        {["16.667%", "50%", "83.333%"].map((offset) => (
          <text
            key={offset}
            fill="#FEFEFC"
            fontSize="18"
            fontWeight="400"
            letterSpacing="1.4"
            fontFamily="var(--font-poppins), Poppins, sans-serif"
          >
            <textPath href="#go-badge-text" startOffset={offset} textAnchor="middle">
              FLIGHT 24
            </textPath>
          </text>
        ))}
        <circle cx="94" cy="94" r="52" fill="none" stroke="#EBB732" strokeWidth="2.2" />
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
      <span className="absolute inset-[26.5%] flex items-center justify-center overflow-hidden rounded-full">
        <span className="relative flex size-full items-center justify-center">
          <span className="absolute text-[32px] leading-none font-bold tracking-[0.02em] text-white transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[120%] group-hover:-translate-y-[120%] motion-reduce:transition-none">
            GO
          </span>
          <span className="absolute translate-x-[-120%] translate-y-[120%] text-[32px] leading-none font-bold tracking-[0.02em] text-white transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0 motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:transition-none">
            GO
          </span>
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={label}>
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
