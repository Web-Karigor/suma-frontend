"use client";

import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { useSettingsQuery } from "@/hooks/queries/useSettingsQuery";
import { FALLBACK_SETTINGS, whatsappHref } from "@/helpers/settings";

export function MedicalContact() {
  const { data: settings = FALLBACK_SETTINGS } = useSettingsQuery();

  const contactItems = [
    {
      title: "Support Email",
      description:
        "For any concerns, complaints or even suggestions please email us:",
      value: settings.email,
      meta: "Availability: All Week",
      detail: "Response Time: 1 Day",
      action: "Contact Us",
      href: `mailto:${settings.email}`,
      icon: "/images/corporate-tour/icons/sms.svg",
      buttonWidth: "w-[122px]",
    },
    {
      title: "WhatsApp",
      description: "Message us on WhatsApp and our team will get back to you.",
      // value: settings.whatsapp,
      meta: "Availability: All Week",
      detail: "",
      action: "WhatsApp",
      href: whatsappHref(settings.whatsapp),
      external: true,
      icon: "",
      buttonWidth: "w-[140px]",
    },
    {
      title: "Contact Us",
      description: `Contact Number: ${settings.phone}. Hotline: ${settings.hotline}.Our team will respond as soon as possible.`,
      value: "Availability: Working days",
      meta: "",
      detail: "",
      action: "Contact Us",
      href: settings.phone ? `tel:${settings.phone.replace(/\s/g, "")}` : "",
      icon: "/images/corporate-tour/icons/call.svg",
      buttonWidth: "w-[122px]",
    },
  ];

  return (
    <section
      id="booking"
      className="scroll-mt-28 py-12 tablet:py-16 desktop-xl:py-[100px]"
    >
      <Container>
        <div className="mx-auto grid w-full grid-cols-1 gap-6 tablet:grid-cols-2 lg:grid-cols-3 tablet:gap-8 desktop-xl:h-[405px] desktop-xl:max-w-[1536px] desktop-xl:gap-12">
          {contactItems.map((item) => (
            <article
              key={item.title}
              className="flex min-w-0 flex-col rounded-[18px] bg-[#F2F8F8] p-6 shadow-[0_0_12px_rgb(0_0_0/8%)] tablet:min-h-[280px] desktop-xl:h-[405px] desktop-xl:w-[480px] desktop-xl:rounded-[40px] desktop-xl:p-8"
            >
              <span className="mb-2.5 flex size-[52px] shrink-0 items-center justify-center rounded-full bg-teal-200 p-[10px] text-primary">
                {item.title === "WhatsApp" ? (
                  <WhatsAppIcon className="size-8" />
                ) : (
                  <img
                    src={item.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="size-8"
                  />
                )}
              </span>
              <h3 className="text-base leading-[150%] font-semibold text-neutral-900 desktop-xl:text-[20px]">
                {item.title}
              </h3>
              <p className="min-h-[52px] text-base leading-[160%] font-normal text-neutral-900">
                {item.description}{" "}
                {item.title === "Support Email" ? (
                  <strong>{item.value}</strong>
                ) : null}
              </p>
              {item.title !== "Support Email" ? (
                <p className="text-base leading-[160%] font-normal text-neutral-900">
                  {item.value}
                </p>
              ) : null}
              {item.meta ? (
                <p className="text-base leading-[157%] text-neutral-900">
                  <strong>{item.meta.split(":")[0]}:</strong>
                  {item.meta.split(":")[1]}
                </p>
              ) : null}
              {item.detail ? (
                <p className="text-base leading-[157%] text-neutral-900">
                  <strong>{item.detail.split(":")[0]}:</strong>
                  {item.detail.split(":")[1]}
                </p>
              ) : null}
              <Link
                href={item.href || "#"}
                target={
                  "external" in item && item.external ? "_blank" : undefined
                }
                rel={
                  "external" in item && item.external ? "noreferrer" : undefined
                }
                className={`xl:mt-auto mt-9 inline-flex h-[49px] items-center justify-center rounded-button bg-primary px-4 py-3 text-sm lg:text-base text-white ${item.buttonWidth}`}
              >
                {item.action}
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
