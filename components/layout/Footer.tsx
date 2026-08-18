import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
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
    <footer className="bg-deepteal text-white">
      <Container className="pt-14 pb-8 tablet:pt-16">
        <div className="grid gap-10 tablet:grid-cols-2 desktop:grid-cols-[minmax(0,1.35fr)_auto_auto_minmax(0,1.7fr)] desktop:gap-x-12">
          <div className="max-w-[340px]">
            <p className="text-[14px] leading-[160%] font-normal text-white">
              {footerAbout}
            </p>
            <p className="mt-8 text-[15px] font-semibold">Follow Us:</p>
            <div className="mt-3 flex items-center gap-2.5">
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

          <div>
            <h3 className="text-[16px] font-semibold">Get In Touch</h3>
            <div className="mt-5 grid gap-8 tablet:grid-cols-2">
              <OfficeList offices={footerOffices.left} />
              <div>
                <OfficeList offices={footerOffices.right} />
                <div className="mt-4 space-y-3 border-t border-white/25 pt-4">
                  <a
                    href={`tel:${company.hotline}`}
                    className="flex items-center gap-2 text-[14px] text-white"
                  >
                    <PhoneIcon className="size-4 shrink-0" />
                    {company.hotline}
                  </a>
                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-center gap-2 text-[14px] text-white"
                  >
                    <MailIcon className="size-4 shrink-0" />
                    {company.email}
                  </a>
                </div>
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
    <div>
      <h3 className="text-[16px] font-semibold">{title}</h3>
      <ul className="mt-5 space-y-3.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-[14px] text-white transition hover:text-white/80">
              {link.label}
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
          <p className="flex items-start gap-2 text-[14px] font-semibold">
            <PinIcon className="mt-0.5 size-4 shrink-0" />
            {office.name}
          </p>
          <p className="mt-1.5 pl-6 text-[13px] leading-[150%] text-white">
            {office.address}
          </p>
        </li>
      ))}
    </ul>
  );
}
