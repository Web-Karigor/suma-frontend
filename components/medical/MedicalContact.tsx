import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { company } from "@/lib/home-data";

const contactItems = [
  {
    title: "Support Email",
    description: "For any concerns, complaints or even suggestions please email us:",
    value: company.email,
    meta: "Availability: All Week",
    detail: "Response Time: 1 Day",
    action: "Contact Us",
    href: `mailto:${company.email}`,
    icon: "/images/corporate-tour/icons/sms.svg",
    buttonWidth: "w-[122px]",
  },
  {
    title: "Website",
    description: "Explore our Website for more information.",
    value: "Available: All Week",
    meta: "",
    detail: "",
    action: "Visit Our Website",
    href: "/",
    icon: "/images/corporate-tour/icons/global.svg",
    buttonWidth: "w-[169px]",
  },
  {
    title: "Contact Us",
    description: `Contact Number: ${company.hotline}. Or send us a WhatsApp message and our Team will get back to you within 24 hours.`,
    value: "Availability: Working days",
    meta: "",
    detail: "",
    action: "Contact Us",
    href: "/contact",
    icon: "/images/corporate-tour/icons/call.svg",
    buttonWidth: "w-[122px]",
  },
] as const;

export function MedicalContact() {
  return (
    <section id="booking" className="scroll-mt-28 bg-gold-50 py-12 tablet:py-16 desktop-xl:py-[100px]">
      <Container>
        <div className="mx-auto grid w-full grid-cols-1 gap-6 tablet:grid-cols-3 tablet:gap-8 desktop-xl:h-[405px] desktop-xl:max-w-[1536px] desktop-xl:gap-12">
          {contactItems.map((item) => (
            <article
              key={item.title}
              className="flex min-w-0 flex-col rounded-[18px] border border-[#f0eee8] bg-white p-6 shadow-[0_0_12px_rgb(0_0_0/8%)] tablet:min-h-[280px] desktop-xl:h-[405px] desktop-xl:w-[480px] desktop-xl:rounded-[40px] desktop-xl:p-8"
            >
              <span className="mb-2.5 flex size-[52px] shrink-0 items-center justify-center rounded-full bg-gold-200 p-[10px]">
                <img src={item.icon} alt="" width={32} height={32} className="size-8" />
              </span>
              <h3 className="text-base leading-[150%] font-semibold text-neutral-900 desktop-xl:text-[20px]">
                {item.title}
              </h3>
              <p className="min-h-[52px] text-base leading-[160%] font-normal text-neutral-900">
                {item.description}{" "}
                {item.title === "Support Email" ? <strong>{item.value}</strong> : null}
              </p>
              {item.title !== "Support Email" ? (
                <p className="text-base leading-[160%] font-normal text-neutral-900">{item.value}</p>
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
                href={item.href}
                className={`mt-auto inline-flex h-[49px] items-center justify-center rounded-button bg-primary px-4 py-3 text-xs text-white ${item.buttonWidth}`}
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
