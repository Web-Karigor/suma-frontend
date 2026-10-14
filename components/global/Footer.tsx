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

import { footerAbout } from "@/lib/home-data";
import { useSettingsQuery } from "@/hooks/queries/useSettingsQuery";
import { useContactInfoQuery } from "@/hooks/queries/useContactInfoQuery";
import { usePagesQuery } from "@/hooks/queries/usePagesQuery";
import { useFooterServicesQuery } from "@/hooks/queries/useFooterServicesQuery";
import { FALLBACK_SETTINGS } from "@/helpers/settings";
import type { SettingsSocialLink } from "@/types/settings";
import type { ContactOfficeCard } from "@/types/contact-info";

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

export function Footer() {
  const { data: settings = FALLBACK_SETTINGS } = useSettingsQuery();
  const { data: offices = [], isLoading: isLoadingOffices } =
    useContactInfoQuery();
  const { data: footerPages = [] } = usePagesQuery();
  const { data: footerServices = [] } = useFooterServicesQuery();
  const socials = settings.socials;

  // Split offices into two columns - first half left, second half right
  const midpoint = Math.ceil(offices.length / 2);
  const leftOffices = offices.slice(0, midpoint);
  const rightOffices = offices.slice(midpoint);

  return (
    <footer className="bg-[#005655] text-white">
      <Container className="pt-14 pb-8 tablet:pt-16">
        {/* Figma: horizontal + space-between — About | Services | Pages | Get In Touch */}
        <div
          className="
            flex flex-col gap-10
            tablet:grid tablet:grid-cols-2 tablet:gap-8
            desktop:flex desktop:flex-row desktop:items-start desktop:justify-between
          "
        >
          {/* 1 — About (slightly wider, content-hug) */}
          <div className="min-w-0 tablet:col-span-2 desktop:w-[min(100%,400px)] desktop:max-w-[400px] desktop:shrink-0">
            <p className="font-poppins text-[14px] leading-[160%] font-medium text-[#BFDEDD] xl:text-[15px] 2xl:text-[16px]">
              {footerAbout}
            </p>

            <p className="mt-5 font-poppins text-[16px] font-semibold text-[#FEFEFC] xl:mt-6 xl:text-[17px] 2xl:mt-8 2xl:text-[18px]">
              Follow Us:
            </p>

            <div className="mt-2.5 flex flex-wrap items-center justify-start gap-2 xl:mt-2.5 xl:gap-2 2xl:mt-3 2xl:gap-2.5">
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
              <div className="max-w-[250px] rounded-lg bg-teal-700 p-2 tablet:max-w-[300px] desktop:max-w-[320px]">
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

          {/* 2 — Services */}
          <FooterList title="Services" links={footerServices} />

          {/* 3 — Important Pages */}
          <FooterList title="Important Pages" links={footerPages} />

          {/* 4 — Get In Touch */}
          <div className="min-w-0 tablet:col-span-2 desktop:w-[min(100%,460px)] desktop:max-w-[460px] desktop:shrink-0">
            <h3 className="font-poppins text-[18px] font-semibold text-[#FEFEFC] xl:text-[17px] 2xl:text-[20px]">
              Get In Touch
            </h3>

            <div className="mt-4 flex w-full flex-col gap-5 tablet:flex-row tablet:items-start tablet:gap-6 desktop:mt-5 desktop:gap-7">
              {!isLoadingOffices && leftOffices.length > 0 ? (
                <div className="min-w-0 flex-1">
                  <OfficeList offices={leftOffices} />
                </div>
              ) : null}

              <div className="min-w-0 flex-1">
                {!isLoadingOffices && rightOffices.length > 0 ? (
                  <OfficeList offices={rightOffices} />
                ) : null}

                <div
                  className={`
                    flex flex-col space-y-2.5 pt-1
                    xl:space-y-2
                    2xl:space-y-3
                    ${!isLoadingOffices && rightOffices.length > 0 ? "mt-3 xl:mt-2.5 2xl:mt-4" : "mt-0"}
                  `}
                >
                  <a
                    href={`tel:${settings.hotline}`}
                    className="inline-flex min-w-0 items-center gap-2 break-all text-[13px] text-white xl:text-[12.5px] 2xl:text-[14px]"
                  >
                    <PhoneIcon className="size-4 shrink-0 xl:size-3.5 2xl:size-4" />
                    {settings.hotline}
                  </a>

                  <a
                    href={`mailto:${settings.email}`}
                    className="inline-flex min-w-0 items-center gap-2 break-all text-[13px] text-white xl:text-[12.5px] 2xl:text-[14px]"
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
    <div className="min-w-0 desktop:w-auto desktop:shrink-0">
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

function OfficeList({ offices }: { offices: readonly ContactOfficeCard[] }) {
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

          <p className="mt-1.5 break-words text-left font-poppins text-[13px] font-normal text-[#99CACA] xl:mt-1 xl:text-[12px] xl:leading-tight 2xl:mt-1.5 2xl:text-[14px]">
            {office.address}
          </p>
        </li>
      ))}
    </ul>
  );
}
