import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  TikTokIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/components/icons";
import {
  company,
  footerAbout,
  footerColumns,
  footerOffices,
} from "@/lib/home-data";

const socials = [
  { name: "Facebook", href: "#", Icon: FacebookIcon },
  { name: "Instagram", href: "#", Icon: InstagramIcon },
  { name: "YouTube", href: "#", Icon: YouTubeIcon },
  { name: "TikTok", href: "#", Icon: TikTokIcon },
  { name: "X", href: "#", Icon: TwitterIcon },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#005655] text-white">
      <Container className="pt-14 pb-8 tablet:pt-16">
        <div className="flex flex-col items-center gap-10 text-center tablet:grid tablet:grid-cols-2 tablet:items-start tablet:text-left desktop:flex desktop:flex-row desktop:justify-between desktop:gap-0">
          <div className="max-w-[441px] desktop:w-[441px] desktop:shrink-0">
            <p className="text-[14px] leading-[160%] font-normal text-white">
              {footerAbout}
            </p>
            <p className="mt-8 text-[15px] font-semibold">Follow Us:</p>
            <div className="mt-3 flex items-center justify-center gap-2.5 tablet:justify-start">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  className="inline-flex size-8 items-center justify-center rounded-full bg-white text-deepteal transition hover:bg-white/90"
                  aria-label={name}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterList title="Services" links={footerColumns.services} />
          <FooterList title="Important Pages" links={footerColumns.pages} />

          <div className="w-full max-w-[240px] desktop:shrink-0">
            <h3 className="text-[16px] font-semibold">Get In Touch</h3>
            <div className="mt-5">
              <OfficeList offices={footerOffices.left} />
            </div>
          </div>

          <div className="w-full max-w-[240px] desktop:shrink-0">
            <h3 className="invisible text-[16px] font-semibold" aria-hidden="true">
              Get In Touch
            </h3>
            <div className="mt-5">
              <OfficeList offices={footerOffices.right} />
              <div className="mt-4 space-y-3 border-t border-white/25 pt-4">
                <a
                  href={`tel:${company.hotline}`}
                  className="flex items-center justify-center gap-2 text-[14px] text-white tablet:justify-start"
                >
                  <PhoneIcon className="size-4 shrink-0" />
                  {company.hotline}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center justify-center gap-2 text-[14px] text-white tablet:justify-start"
                >
                  <MailIcon className="size-4 shrink-0" />
                  {company.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-14 text-center text-[13px] text-white">
          © Copyright {new Date().getFullYear()} | Suma Group All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}

function FooterList({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div className="desktop:shrink-0">
      <h3 className="text-[16px] font-semibold">{title}</h3>
      <ul className="mt-5 space-y-3.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group relative inline-flex items-center text-[14px] text-white transition-colors hover:text-white/80"
            >
              <span className="pointer-events-none absolute top-1/2 left-0 h-3.5 w-4 -translate-y-1/2 overflow-hidden">
                <ArrowRightIcon className="size-3.5 -translate-x-full text-white transition-transform duration-300 ease-out group-hover:translate-x-0" />
              </span>
              <span className="transition-transform duration-300 ease-out group-hover:translate-x-4">
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OfficeList({
  offices,
}: {
  offices: readonly { name: string; address: string }[];
}) {
  return (
    <ul>
      {offices.map((office, index) => (
        <li
          key={office.name}
          className={index < offices.length - 1 ? "border-b border-white/25 pb-4 mb-4" : ""}
        >
          <p className="flex items-start justify-center gap-2 text-[14px] font-semibold tablet:justify-start">
            <PinIcon className="mt-0.5 size-4 shrink-0" />
            {office.name}
          </p>
          <p className="mt-1.5 text-[13px] leading-[150%] text-white tablet:pl-6">
            {office.address}
          </p>
        </li>
      ))}
    </ul>
  );
}
