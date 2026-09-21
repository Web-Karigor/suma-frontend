"use client";

import { Clock, Mail, MapPin, Phone, School } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useContactInfoQuery } from "@/hooks/queries/useContactInfoQuery";
import { useSettingsQuery } from "@/hooks/queries/useSettingsQuery";
import { FALLBACK_SETTINGS } from "@/helpers/settings";
import type { ContactOfficeCard } from "@/types/contact-info";

export function ContactOffices() {
  const { data: offices, isLoading } = useContactInfoQuery();
  const { data: settings = FALLBACK_SETTINGS } = useSettingsQuery();

  return (
    <section className="bg-[#F1FAFA] py-12 tablet:py-16 desktop:py-20">
      <Container>
        <div className="flex flex-col gap-8 border-b border-[#d7e7e7] pb-7 desktop:flex-row desktop:items-end desktop:justify-between">
          <h2 className="max-w-[685px] text-[34px] md:text-[40px] lg:text-[44px] leading-[1.04] font-medium tracking-[-0.03em] text-neutral-950 desktop:max-w-[685px] desktop:text-[56px] desktop:leading-[108%] desktop:font-semibold">
            Need More information?
            <br />
            Visit our office..
          </h2>
          <div className="grid gap-5 tablet:grid-cols-2 desktop:w-[660px]">
            <ContactLink
              icon={<Phone className="size-8" />}
              label="Give a Call"
              value={settings.hotline}
              href={`tel:${settings.hotline}`}
            />
            <ContactLink
              icon={<Mail className="size-8" />}
              label="Send Email"
              value={settings.email}
              href={`mailto:${settings.email}`}
            />
          </div>
        </div>

        {!isLoading && offices && offices.length > 0 && (
          <div className="mt-6 grid gap-4 tablet:grid-cols-2">
            {offices.map((office) => (
              <OfficeCard
                key={`${office.name}-${office.address}`}
                office={office}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="
        flex
        h-[87px]
        items-center
        justify-between
        rounded-[16px]
        bg-[#E6F2F2]
        px-4 
        transition-colors
        hover:bg-teal-50
        max-w-[398px]
      "
    >
      <div className="flex items-center gap-4">
        <span className="text-[#007F80]">{icon}</span>

        <span className="flex flex-col">
          <span
            className="
              2xl:text-[16px]
              leading-tight
              font-normal
              text-[#8B8B8B]
            "
          >
            {label}
          </span>

          <strong
            className="
              mt-1
              2xl:text-[18px]
              leading-tight
              font-medium
              text-[#007F80]
            "
          >
            {value}
          </strong>
        </span>
      </div>

      <span
        className="
          text-[32px]
          leading-none
          font-light
          text-[#8B8B8B]
        "
      >
        ›
      </span>
    </a>
  );
}

function OfficeCard({ office }: { office: ContactOfficeCard }) {
  return (
    <article
      className="
    flex
    flex-col
    gap-5
    rounded-[14px]
    bg-white
    p-4
    shadow-[0_2px_8px_rgb(10_12_12/4%)]

    lg:flex-row
    lg:items-center
    lg:justify-between
  "
    >
      <div className="min-w-0 max-w-[356px]">
        <h3 className="flex items-center gap-2 text-xl font-medium text-neutral-950 lg:text-[22px]">
          <School className="size-5 shrink-0 text-black" />

          <a
            href={office.directionUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            {office.name}
          </a>
        </h3>

        <p className="flex items-start gap-2 text-xl font-medium text-neutral-950 lg:text-[22px]">
          <MapPin className="mt-1 size-4 shrink-0" />

          <a
            href={office.directionUrl}
            target="_blank"
            rel="noreferrer"
            className="block text-sm leading-[1.5] text-gray-600 hover:text-primary lg:text-base"
          >
            {office.address}
          </a>
        </p>

        <a
          href={`tel:${office.phone}`}
          className="mt-2 flex items-center gap-2 text-base font-medium text-gray-600 hover:text-primary"
        >
          <Phone className="size-3.5" />
          {office.phone}
        </a>

        {office.workingHours ? (
          <p className="mt-2 flex items-center gap-2 text-base font-medium text-gray-600">
            <Clock className="size-3.5 shrink-0" />
            {office.workingHours}
          </p>
        ) : null}
      </div>

      {/* Map Section */}
      <div
        className="
      relative
      w-full
      h-[160px]
      shrink-0
      overflow-hidden
      rounded-md
      bg-teal-800

      md:w-full
      md:h-[160px]

      lg:w-[240px]
      lg:h-[160px]

      xl:w-[270px]
      xl:h-[160px]

      2xl:w-[270px]
      2xl:h-[160px]
    "
      >

        <a
          href={office.directionUrl}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span
            className="
          rounded
          bg-white
          px-4
          py-2
          text-base
          text-neutral-900
          shadow-sm
          transition-colors
          hover:bg-primary
          hover:text-white
        "
          >
            Get Direction
          </span>
        </a>
      </div>
    </article>
  );
}
