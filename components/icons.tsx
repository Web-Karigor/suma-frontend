import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5 19.2c.8-3.2 3.6-5 7-5s6.2 1.8 7 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 3.6l2.2 4.6 5.1.7-3.7 3.6.9 5.1L12 15.8 7.5 17.6l.9-5.1-3.7-3.6 5.1-.7L12 3.6z"
      />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21s6-5.4 6-10.2A6 6 0 0 0 6 10.8C6 15.6 12 21 12 21z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10.8" r="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.2 4.8h2.4l1 3-1.8 1.8a12.5 12.5 0 0 0 6.6 6.6l1.8-1.8 3 1v2.4c0 .7-.6 1.2-1.2 1.2C10.8 19 5 13.2 5 6c0-.6.5-1.2 1.2-1.2z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 7.5 12 13l7-5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.5 12h15M12 4c2 2.2 3 4.9 3 8s-1 5.8-3 8c-2-2.2-3-4.9-3-8s1-5.8 3-8z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="m8 12 2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 3v4M12 17v4M4.9 6.5l2.8 2.8M16.3 14.7l2.8 2.8M3 12h4M17 12h4M4.9 17.5l2.8-2.8M16.3 9.3l2.8-2.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14.5 8.5V6.8c0-.7.5-1 1.1-1h1.4V3h-2.4C11.8 3 11 5 11 6.6v1.9H9v2.8h2V21h3.5v-9.7h2.3l.3-2.8h-2.6z" />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14.7 10.3 21.2 3h-1.5l-5.6 6.4L9.6 3H3.8l6.9 10L3.8 21h1.5l6-6.9L15.2 21h5.8l-6.3-10.7zM12 13.2l-.7-1L5.9 4.2h2.4l4.5 6.4.7 1 5.9 8.3h-2.4L12 13.2z" />
    </svg>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.6 8.2a2.7 2.7 0 0 0-1.9-1.9C18.1 6 12 6 12 6s-6.1 0-7.7.3A2.7 2.7 0 0 0 2.4 8.2 28 28 0 0 0 2 12a28 28 0 0 0 .4 3.8 2.7 2.7 0 0 0 1.9 1.9C5.9 18 12 18 12 18s6.1 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-3.8zM10.2 15.1V8.9L15.6 12l-5.4 3.1z" />
    </svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14.2 3h2.4c.3 2.2 1.7 3.8 3.9 4.1v2.4c-1.3 0-2.5-.4-3.6-1.1v6.4c0 3.4-2.7 6.2-6.2 6.2S4.5 18.2 4.5 14.7 7.2 8.5 10.7 8.5c.3 0 .6 0 .9.1v2.5a3.7 3.7 0 0 0-.9-.1 3.7 3.7 0 0 0-3.7 3.7 3.7 3.7 0 0 0 3.7 3.7 3.7 3.7 0 0 0 3.7-3.7V3z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.7 9.3H4V20h2.7V9.3zM5.3 4C4.4 4 3.7 4.7 3.7 5.6S4.4 7.2 5.3 7.2 7 6.5 7 5.6 6.3 4 5.3 4zM20 20h-2.7v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20H11V9.3h2.6v1.5h.1c.4-.7 1.3-1.5 2.7-1.5 2.9 0 3.4 1.9 3.4 4.4V20z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.6" cy="7.4" r="1" fill="currentColor" />
    </svg>
  );
}

export function HeadsetIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.8 12.5A7.2 7.2 0 0 1 12 5.3a7.2 7.2 0 0 1 7.2 7.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect x="3.2" y="12.2" width="3.6" height="6.2" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
      <rect x="17.2" y="12.2" width="3.6" height="6.2" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M20.8 16.4v1.4A3.2 3.2 0 0 1 17.6 21h-3.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="13.4" cy="20.2" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlaneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M21 12 3 19l2.4-7L3 5l18 7z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M5.4 12h7.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function CardIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="6" width="18" height="12" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 14.5h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function WalletIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 8.2C4 7 5 6 6.3 6H18.5v2.4H6.3A1.2 1.2 0 0 0 5.2 9.5 1.2 1.2 0 0 0 6.3 10.8H19v7.2H6.5A2.5 2.5 0 0 1 4 15.5V8.2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="16.2" cy="14.4" r="1" fill="currentColor" />
    </svg>
  );
}

export function RefundIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 8.2H4.5V5.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12a7 7 0 1 1 2-5.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M9.8 10.4c.5-.8 1.4-1.3 2.4-1.3 1.6 0 2.8 1.1 2.8 2.6 0 1.6-1.2 2.7-2.9 2.7h-.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M12 14.4v3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function GaugeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5.2 16.2a7.2 7.2 0 1 1 13.6 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M12 13.2 15.4 9.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="13.4" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function BellIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.5 16.2h11c-.4-1.3-.7-2.4-.7-4.1 0-2.5-1.8-4.6-4.3-5V6.4a1.5 1.5 0 0 0-3 0v.7c-2.5.4-4.3 2.5-4.3 5 0 1.7-.3 2.8-.7 4.1z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M10 18.2a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ShareIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="18" cy="5" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="6" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="19" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.2 13.1 15.8 17.4M15.8 6.6 8.2 10.9" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function BedIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 18V9.5A1.5 1.5 0 0 1 4.5 8H8a3 3 0 0 1 6 0h5.5A1.5 1.5 0 0 1 21 9.5V18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M3 13h18M3 18v2M21 18v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
