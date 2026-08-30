import { GlobeIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { company } from "@/lib/home-data";
import Link from "next/link";

const contactItems = [
  {
    title: "Support Email",
    description: "For any concerns, complaints or even suggestions please email us:",
    value: company.email,
    meta: "Availability: All Week",
    detail: "Response Time: 1 Day",
    action: "Contact Us",
    href: `mailto:${company.email}`,
    Icon: MailIcon,
  },
  {
    title: "Website",
    description: "Explore our Website for more information.",
    value: "Available: All Week",
    meta: "",
    detail: "",
    action: "Visit Our Website",
    href: "/",
    Icon: GlobeIcon,
  },
  {
    title: "Contact Us",
    description: `Contact Number: ${company.hotline}. Or send us a WhatsApp message and our Team will get back to you within 24 hours.`,
    value: "Availability: Working days",
    meta: "",
    detail: "",
    action: "Contact Us",
    href: "/contact",
    Icon: PhoneIcon,
  },
] as const;

type HajjContactProps = {
  alignWide?: boolean;
};

export function HajjContact({ alignWide = false }: HajjContactProps) {
  return (
    <section
      id="booking"
      className={cn("scroll-mt-28 pb-16 tablet:pb-20", alignWide ? "bg-gold-50" : "bg-[#FEFBF5]")}
    >
      <Container className={alignWide ? "desktop-xl:!px-0" : undefined}>
        <h2 className="mx-auto max-w-[430px] text-center text-xl leading-[1.15] font-semibold text-neutral-950 tablet:text-2xl desktop:h-[94px] desktop:w-[680px] desktop:max-w-none desktop:text-[40px] desktop:leading-[118%]">
          Want to know more details about
          <br />
          our packages?
        </h2>
        <div className="mt-8 grid w-full grid-cols-1 gap-4 tablet:grid-cols-3 tablet:gap-5 desktop:mt-[60px] desktop:gap-12">
          {contactItems.map(({ Icon, ...item }) => (
            <article key={item.title} className="flex min-w-0 flex-col rounded-[18px] border border-[#f0eee8] bg-white p-4 shadow-[0_2px_8px_rgb(10_12_12/5%)] tablet:min-h-[156px] desktop:h-[389px] desktop:rounded-[40px] desktop:gap-2.5 desktop:p-6 desktop:shadow-[0_0_12px_rgb(0_0_0/8%)]">
              <span className="flex size-[52px] shrink-0 items-center justify-center rounded-[50px] bg-[#F9E9C2] p-[10px] text-secondary-700">
                <Icon className="size-full" />
              </span>
              <h3 className="text-base leading-[150%] font-semibold text-neutral-900 desktop:text-[20px]">{item.title}</h3>
              <p className="min-h-[52px] text-base leading-[160%] font-normal text-neutral-900 desktop:max-w-[415px]">
                {item.description} {item.title === "Support Email" ? <strong>{item.value}</strong> : null}
              </p>
              {item.title !== "Support Email" ? <p className="text-base leading-[160%] font-normal text-neutral-900">{item.value}</p> : null}
              {item.meta ? <p className="text-base leading-[157%] text-neutral-900"><strong>{item.meta.split(":")[0]}:</strong>{item.meta.split(":")[1]}</p> : null}
              {item.detail ? <p className="text-base leading-[157%] text-neutral-900"><strong>{item.detail.split(":")[0]}:</strong>{item.detail.split(":")[1]}</p> : null}
              <Link
                href={item.href}
                className={`mt-auto inline-flex h-[49px] items-center justify-center rounded-button bg-primary px-4 py-3 text-xs text-white ${item.title === "Website" ? "w-[169px]" : "w-[122px]"}`}
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
