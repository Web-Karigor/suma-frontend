import { Container } from "@/components/ui/Container";

type ServiceGroups = {
  included: string[];
  additional: string[];
  excluded: string[];
};

type CorporateServicesProps = {
  services: string[] | ServiceGroups;
};

function asGroups(services: string[] | ServiceGroups): ServiceGroups {
  if (!Array.isArray(services)) return services;
  return {
    included: services.slice(0, 6),
    additional: services.slice(6, 12),
    excluded: services.slice(12),
  };
}

function ServiceList({
  items,
  icon,
  textClass,
}: {
  items: string[];
  icon: string;
  textClass: string;
}) {
  const left = items.filter((_, index) => index % 2 === 0);
  const right = items.filter((_, index) => index % 2 === 1);

  return (
    <div className="flex flex-col gap-6 tablet:flex-row tablet:gap-8">
      {[left, right].map((column, columnIndex) => (
        <div key={columnIndex} className="flex min-w-0 flex-1 flex-col gap-8 desktop-xl:w-[200px] desktop-xl:flex-none">
          {column.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="relative size-5 shrink-0 overflow-clip">
                <img src={icon} alt="" width={20} height={20} className="size-full" />
              </span>
              <span className={`text-base leading-[1.6] font-normal ${textClass}`}>{item}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function CorporateServices({ services }: CorporateServicesProps) {
  const groups = asGroups(services);

  const cards = [
    {
      title: "Included",
      titleClass: "text-teal-300",
      items: groups.included,
      icon: "/images/corporate-tour/icons/service-included.svg",
      textClass: "text-teal-50",
    },
    {
      title: "Available at Additional Fees",
      titleClass: "text-gold-500",
      items: groups.additional,
      icon: "/images/corporate-tour/icons/service-additional.svg",
      textClass: "text-gold-50",
    },
    {
      title: "Not Included",
      titleClass: "text-gray-500",
      items: groups.excluded,
      icon: "/images/corporate-tour/icons/service-excluded.svg",
      textClass: "text-neutral-300",
    },
  ];

  return (
    <section id="services" className="scroll-mt-28 bg-teal-950 pt-12 tablet:pt-16 desktop-xl:pt-[117px]">
      <Container className="desktop-xl:!px-0">
        <div className="flex flex-col gap-8 tablet:gap-10">
          <h2 className="text-[24px] font-semibold leading-[1.28] text-white tablet:text-[28px]">Services</h2>
          <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2 desktop:grid-cols-3 desktop:gap-[49px]">
            {cards.map((card) => (
              <article
                key={card.title}
                className="flex flex-col gap-8 rounded-2xl border-[0.5px] border-gray-800 bg-overlay-black-64 p-6 tablet:p-8"
              >
                <h3 className={`text-[20px] leading-[1.5] font-medium ${card.titleClass}`}>{card.title}</h3>
                <ServiceList items={card.items} icon={card.icon} textClass={card.textClass} />
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
