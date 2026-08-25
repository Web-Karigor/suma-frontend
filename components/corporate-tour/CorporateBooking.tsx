import Link from "next/link";
import { Container } from "@/components/ui/Container";

const contactItems = [
  {
    title: "Support Email",
    icon: "/images/corporate-tour/icons/sms.svg",
    description: (
      <>
        For any concerns, complaints or even suggestions please email us:{" "}
        <span className="font-semibold">umrah@sumabd.com</span>
      </>
    ),
    meta: [
      { label: "Availability", value: "All Week" },
      { label: "Response Time", value: "1 Day" },
    ],
    action: "Contact Us",
    href: "mailto:umrah@sumabd.com",
    buttonWidth: "w-[122px]",
  },
  {
    title: "Website",
    icon: "/images/corporate-tour/icons/global.svg",
    description: "Explore our Website for more information.",
    meta: [{ label: "Availability", value: "All Week" }],
    action: "Visit Our Website",
    href: "/",
    buttonWidth: "w-[169px]",
  },
  {
    title: "Contact Us",
    icon: "/images/corporate-tour/icons/call.svg",
    description: (
      <>
        Contact Number: <span className="font-semibold">+123 456 789</span>
        <br />
        Or send us a WhatsApp message and Our team will get back to you withing 24 hours.
      </>
    ),
    meta: [{ label: "Availability", value: "Working days" }],
    action: "Contact Us",
    href: "tel:+123456789",
    buttonWidth: "w-[122px]",
  },
] as const;

export function CorporateBooking() {
  return (
    <section id="booking" className="scroll-mt-28 bg-teal-950 pt-12 pb-16 tablet:pt-16 tablet:pb-20 desktop-xl:pt-[100px] desktop-xl:pb-[100px]">
      <Container className="desktop-xl:!px-0">
        <div className="mx-auto grid grid-cols-1 gap-6 tablet:grid-cols-2 desktop:grid-cols-3 desktop:gap-12 desktop-xl:w-[1536px] desktop-xl:gap-12">
          {contactItems.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-2xl bg-overlay-white-16 p-6 tablet:p-8 desktop-xl:h-[405px] desktop-xl:w-[480px]"
            >
              <div className="flex h-full flex-col gap-5 desktop-xl:w-[415px]">
                <span className="flex size-[52px] items-center justify-center rounded-full bg-overlay-white-84 p-2.5">
                  <span className="relative size-8 shrink-0 overflow-clip">
                    <img src={item.icon} alt="" width={32} height={32} className="size-full" />
                  </span>
                </span>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex flex-col gap-[18px] text-white">
                    <h3 className="text-[20px] leading-[1.5] font-semibold">{item.title}</h3>
                    <div className="flex flex-col gap-5">
                      <p className="text-base leading-[1.6] font-normal">{item.description}</p>
                      <div className="flex flex-col gap-4">
                        {item.meta.map((row) => (
                          <p key={row.label} className="text-base font-normal">
                            <span className="font-bold leading-[1.57]">{row.label}: </span>
                            <span className="leading-[1.6]">{row.value}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Link
                    href={item.href}
                    className={`mt-8 inline-flex h-[49px] items-center justify-center rounded-button bg-gold-500 px-4 py-3 text-base font-medium text-black transition-opacity hover:opacity-90 ${item.buttonWidth}`}
                  >
                    {item.action}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
