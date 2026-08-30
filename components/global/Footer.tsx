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
        <div className="flex flex-col items-center gap-10 text-center tablet:items-start tablet:text-left desktop:flex-row desktop:justify-between desktop:gap-0">
          <div className="max-w-[441px] desktop:w-[441px] desktop:shrink-0">
            <p className="text-[16px] leading-[160%] font-medium font-poppins text-[#BFDEDD]">
              {footerAbout}
            </p>
            <p className="mt-8 text-[18px] font-semibold text-[#FEFEFC] font-poppins">Follow Us:</p>
            <div className="mt-3 flex items-center justify-center gap-2.5 tablet:justify-start">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  className="inline-flex size-8 items-center justify-center rounded-full bg-[#FEFEFC] text-[#005655] transition hover:bg-[#FEFEFC]/90"
                  aria-label={name}
                >
                  <Icon className="size-7" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col gap-10 tablet:w-auto tablet:flex-row tablet:gap-12 desktop:gap-16">
            <FooterList title="Services" links={footerColumns.services} />
            <FooterList title="Important Pages" links={footerColumns.pages} />
          </div>

          <div className="w-full desktop:w-auto desktop:shrink-0">
            <h3 className="text-[20px] font-semibold text-[#FEFEFC] font-poppins">Get In Touch</h3>
            <div className="mt-5 flex flex-col gap-6 tablet:flex-row tablet:gap-6 desktop:gap-8">
              <div className="w-full max-w-[240px] ">
                <OfficeList offices={footerOffices.left} />
              </div>
              <div className="w-full max-w-[240px]">
                <OfficeList offices={footerOffices.right} />
                <div className="mt-4 space-y-3 border-t border-[#268F8E] boder-[0.5px] pt-4">
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
      <h3 className="text-[20px] font-semibold text-[#FEFEFC] font-poppins">{title}</h3>
      <ul className="mt-5 space-y-3.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group relative inline-flex items-center font-medium font-poppins text-[16px] text-[#BFDEDD] transition-colors"
            >
              <span className="pointer-events-none absolute top-1/2 left-0 h-3.5 w-4 -translate-y-1/2 overflow-hidden">
                <ArrowRightIcon className="size-3.5 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
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
          <p className="flex items-start justify-center gap-2 text-[16px] font-semibold font-poppins text-[#BFDEDD] tablet:justify-start">
            <PinIcon className="mt-0.5 size-4 shrink-0" />
            {office.name}
          </p>
          <p className="mt-1.5 text-[14px] font-regular font-poppins text-[#99CACA]">
            {office.address}
          </p>
        </li>
      ))}
    </ul>
  );
}
