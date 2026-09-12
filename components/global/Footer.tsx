"use client";

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";

import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  TikTokIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/components/icons";

import { footerAbout, footerColumns, footerOffices } from "@/lib/home-data";
import { useSettingsQuery } from "@/hooks/queries/useSettingsQuery";
import { FALLBACK_SETTINGS } from "@/helpers/settings";
import type { SettingsSocialLink } from "@/types/settings";

const SOCIAL_ICONS: Record<
  SettingsSocialLink["key"],
  React.ComponentType<{ className?: string }>
> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
  tiktok: TikTokIcon,
  twitter: TwitterIcon,
  linkedin: LinkedInIcon,
  pinterest: InstagramIcon,
};

const DEFAULT_SOCIALS = [
  { name: "Facebook", href: "#", key: "facebook" as const },
  { name: "Instagram", href: "#", key: "instagram" as const },
  { name: "YouTube", href: "#", key: "youtube" as const },
  { name: "TikTok", href: "#", key: "tiktok" as const },
  { name: "X", href: "#", key: "twitter" as const },
];

export function Footer() {
  const { data: settings = FALLBACK_SETTINGS } = useSettingsQuery();
  const socials =
    settings.socials.length > 0 ? settings.socials : DEFAULT_SOCIALS;

  return (
    <footer className="bg-[#005655] text-white">
      <Container className="pt-14 pb-8 tablet:pt-16">
        <div
          className="
            flex flex-col gap-10
            tablet:text-left
            xl:flex-row xl:justify-between xl:gap-4
            desktop:flex-row
            desktop:justify-between
            2xl:gap-0
          "
        >
          {/* About */}
          <div
            className="
              max-w-[441px]
              tablet:w-full
              xl:max-w-[320px]
              desktop:w-[441px]
              desktop:shrink-0
              2xl:max-w-[441px]
            "
          >
            <p className="font-poppins text-[14px] leading-[160%] font-medium text-[#BFDEDD] xl:text-[15px] 2xl:text-[16px]">
              {footerAbout}
            </p>

            <p className="mt-5 font-poppins text-[16px] font-semibold text-[#FEFEFC] xl:mt-6 xl:text-[17px] 2xl:mt-8 2xl:text-[18px]">
              Follow Us:
            </p>

            <div className="mt-2.5 flex items-center justify-start gap-2 xl:mt-2.5 xl:gap-2 2xl:mt-3 2xl:gap-2.5">
              {socials.map(({ name, href, key }) => {
                const Icon = SOCIAL_ICONS[key] ?? FacebookIcon;
                return (
                  <a
                    key={name}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex size-7 items-center justify-center rounded-full bg-[#FEFEFC] text-[#005655] transition hover:bg-[#FEFEFC]/90 xl:size-7 2xl:size-8"
                    aria-label={name}
                  >
                    <Icon className="size-6 xl:size-6 2xl:size-7" />
                  </a>
                );
              })}
            </div>

            <div className="mt-6 xl:mt-6 2xl:mt-10">
              <div className="bg-teal-700 p-2 rounded-lg max-w-[250px] tablet:max-w-[300px] xl:max-w-[300px] desktop:max-w-[380px]">
                <Image
                  src="/exralogofooter.jpeg"
                  alt="ISO 9001:2015 Certified Company"
                  width={280}
                  height={150}
                  className="h-auto w-full rounded-sm"
                />
              </div>
            </div>
          </div>

          {/* Services + Pages */}
          <div
            className="
              flex w-full flex-col gap-8

              tablet:grid
              tablet:grid-cols-2
              tablet:gap-8

              xl:flex xl:w-auto xl:flex-row xl:gap-16

              desktop:flex
              desktop:w-auto
              desktop:flex-row
              2xl:gap-16
            "
          >
            <FooterList title="Services" links={footerColumns.services} />

            <FooterList title="Important Pages" links={footerColumns.pages} />
          </div>

          {/* Contact */}
          <div
            className="
              flex w-full flex-col items-start

              tablet:mt-4

              xl:ml-0 xl:mt-0 xl:w-auto xl:shrink-0

              desktop:mt-0
              desktop:w-auto
              desktop:shrink-0
              2xl:ml-0
            "
          >
            <h3 className="font-poppins text-[18px] font-semibold text-[#FEFEFC] xl:text-[17px] 2xl:text-[20px]">
              Get In Touch
            </h3>

            <div
              className="
                mt-4
                flex w-full flex-col gap-5

                tablet:grid
                tablet:grid-cols-2
                tablet:gap-6

                xl:mt-3
                xl:gap-3

                desktop:flex
                desktop:flex-row
                desktop:items-start
                2xl:mt-5
                2xl:gap-8
              "
            >
              <div className="w-full max-w-[240px] xl:max-w-[180px] 2xl:max-w-[240px]">
                <OfficeList offices={footerOffices.left} />
              </div>

              <div className="w-full max-w-[240px] xl:max-w-[180px] 2xl:max-w-[240px]">
                <OfficeList offices={footerOffices.right} />

                <div
                  className="
                    mt-3 flex flex-col space-y-2.5
                    border-t border-[#268F8E]
                    pt-3
                    xl:mt-2.5 xl:space-y-2 xl:pt-2.5
                    2xl:mt-4 2xl:space-y-3 2xl:pt-4
                  "
                >
                  <a
                    href={`tel:${settings.hotline}`}
                    className="inline-flex items-center gap-2 text-[13px] text-white xl:text-[12.5px] 2xl:text-[14px]"
                  >
                    <PhoneIcon className="size-4 shrink-0 xl:size-3.5 2xl:size-4" />
                    {settings.hotline}
                  </a>

                  <a
                    href={`mailto:${settings.email}`}
                    className="inline-flex items-center gap-2 text-[13px] text-white xl:text-[12.5px] 2xl:text-[14px]"
                  >
                    <MailIcon className="size-4 shrink-0 xl:size-3.5 2xl:size-4" />
                    {settings.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-[14px] text-[#59A9A8] xl:mt-12 xl:text-[15px] 2xl:mt-14 2xl:text-[16px]">
          © Copyright {new Date().getFullYear()} | Suma Group All Rights
          Reserved.
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
    <div className="xl:min-w-[135px] xl:shrink-0 desktop:shrink-0">
      <h3 className="font-poppins text-[18px] font-semibold text-[#FEFEFC] xl:text-[17px] 2xl:text-[20px]">
        {title}
      </h3>

      <ul className="mt-4 space-y-2.5 xl:mt-3 xl:space-y-2 2xl:mt-5 2xl:space-y-3.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group relative inline-flex items-center font-poppins text-[14px] font-medium text-[#BFDEDD] transition-colors xl:text-[13.5px] 2xl:text-[16px]"
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
    <ul className="w-full">
      {offices.map((office, index) => (
        <li
          key={office.name}
          className={
            index < offices.length - 1
              ? "mb-3 border-b border-white/25 pb-3 xl:mb-2 xl:pb-2 2xl:mb-4 2xl:pb-4"
              : ""
          }
        >
          <p className="flex justify-start">
            <span className="inline-flex items-center gap-2 font-poppins text-[14px] font-semibold text-[#BFDEDD] xl:text-[13.5px] 2xl:text-[16px]">
              <PinIcon className="size-4 shrink-0 xl:size-3.5 2xl:size-4" />
              {office.name}
            </span>
          </p>

          <p className="mt-1.5 text-left font-poppins text-[13px] font-normal text-[#99CACA] xl:mt-1 xl:text-[12px] xl:leading-tight 2xl:mt-1.5 2xl:text-[14px]">
            {office.address}
          </p>
        </li>
      ))}
    </ul>
  );
}
