import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "@/components/icons";
import { company, footerColumns } from "@/lib/home-data";

export function Footer() {
  return (
    <footer className="bg-deepteal text-white">
      <Container className="grid gap-10 py-14 tablet:grid-cols-2 desktop:grid-cols-4">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">{company.address}</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {company.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-2">
                <PhoneIcon className="size-4 shrink-0" />
                {phone}
              </li>
            ))}
            <li className="flex items-center gap-2">
              <MailIcon className="size-4 shrink-0" />
              {company.email}
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-3">
            {[FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="inline-flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Social link"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterList title="Services" links={footerColumns.services} />
        <FooterList title="Important Pages" links={footerColumns.pages} />

        <div>
          <h3 className="text-base font-semibold">Support</h3>
          <p className="mt-4 text-sm text-white/75">{company.support.title}</p>
          <p className="mt-2 text-lg font-semibold">{company.support.phone}</p>
          <p className="mt-1 text-sm text-white/70">{company.support.hours}</p>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-4 text-center text-xs text-white/60">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </Container>
      </div>
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
      <h3 className="text-base font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-white/75 transition hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
