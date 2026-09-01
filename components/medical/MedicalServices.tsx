import { Container } from "@/components/ui/Container";
import { MedicalCancellation } from "@/components/medical/MedicalCancellation";
import {
  medicalAdditionalServices,
  medicalExcludedServices,
  medicalIncludedServices,
} from "@/lib/medical-data";

const cards = [
  {
    title: "Included",
    titleClass: "text-teal-300",
    items: medicalIncludedServices,
    icon: "/images/corporate-tour/icons/service-included.svg",
    textClass: "text-teal-50",
  },
  {
    title: "Available at Additional Fees",
    titleClass: "text-gold-500",
    items: medicalAdditionalServices,
    icon: "/images/corporate-tour/icons/service-additional.svg",
    textClass: "text-[#fefbf5]",
  },
  {
    title: "Not Included",
    titleClass: "text-gray-500",
    items: medicalExcludedServices,
    icon: "/images/corporate-tour/icons/service-excluded.svg",
    textClass: "text-neutral-300",
  },
] as const;

export function MedicalServices() {
  return (
    <section id="services" className="scroll-mt-28 bg-teal-950 py-12 tablet:py-16 desktop-xl:h-[1174px] desktop-xl:py-[60px]">
      <Container>
        <div className="flex flex-col gap-8 desktop-xl:h-[1054px] desktop-xl:gap-[60px]">
          <div className="flex flex-col gap-8">
            <h2 className="text-[24px] font-semibold leading-[1.28] text-white tablet:text-[28px]">Services</h2>
            <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2 desktop:grid-cols-3 desktop:gap-[49px]">
              {cards.map((card) => (
                <article
                  key={card.title}
                  className="flex flex-col gap-8 rounded-2xl border-[0.5px] border-gray-800 bg-overlay-black-64 p-6 tablet:p-8 desktop-xl:w-[547.333px]"
                >
                  <h3 className={`text-[20px] leading-[1.5] font-medium ${card.titleClass}`}>{card.title}</h3>
                  <ul className="flex flex-col gap-8">
                    {card.items.map((item) => (
                      <li key={item} className="flex h-[26px] items-center gap-3">
                        <span className="relative size-5 shrink-0 overflow-clip">
                          <img src={card.icon} alt="" width={20} height={20} className="size-full" />
                        </span>
                        <span className={`text-base leading-[1.6] font-normal ${card.textClass}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          <MedicalCancellation />
        </div>
      </Container>
    </section>
  );
}
