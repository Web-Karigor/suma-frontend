import { Container } from "@/components/ui/Container";

type OverviewCard = {
  icon: "star" | "calendar" | "moon" | "users" | "location";
  label: string;
  value: string;
};

type CorporateOverviewProps = {
  description: string;
  cards: OverviewCard[];
};

const ICONS: Record<OverviewCard["icon"], string> = {
  star: "/images/corporate-tour/icons/star.svg",
  calendar: "/images/corporate-tour/icons/calendar.svg",
  moon: "/images/corporate-tour/icons/moon.svg",
  users: "/images/corporate-tour/icons/star.svg",
  location: "/images/corporate-tour/icons/moon.svg",
};

export function CorporateOverview({ description, cards }: CorporateOverviewProps) {
  return (
    <section className="bg-teal-950">
      <Container className="desktop-xl:!px-0">
        <div className="flex flex-col gap-8 desktop:flex-row desktop:items-center desktop:justify-between desktop-xl:h-[230px] desktop-xl:gap-[63px]">
          <div className="flex w-full flex-col gap-5 desktop-xl:w-[966px]">
            <h2 className="text-[24px] font-semibold leading-[1.28] text-white tablet:text-[28px]">Overview</h2>
            <p className="text-[16px] leading-[1.6] font-normal text-gray-200 tablet:text-[18px]">{description}</p>
          </div>

          <div className="flex w-full flex-col gap-7 rounded-[32px] bg-overlay-white-08 p-5 desktop-xl:h-[230px] desktop-xl:w-[711px]">
            <h3 className="text-[22px] font-semibold leading-[1.5] text-white">Package Details</h3>
            <div className="grid grid-cols-1 gap-[18px] tablet:grid-cols-3">
              {cards.slice(0, 3).map((card) => (
                <div
                  key={card.label}
                  className="flex flex-col items-center gap-2 rounded-xl bg-overlay-white-16 p-3 tablet:min-h-[129px]"
                >
                  <div className="flex size-9 items-center justify-center rounded-[6px] bg-teal-900 p-1.5">
                    <span className="relative size-6 shrink-0 overflow-clip">
                      <img src={ICONS[card.icon]} alt="" width={24} height={24} className="size-full" />
                    </span>
                  </div>
                  <div className="flex w-full flex-col items-center gap-1.5">
                    <p className="text-center text-[14px] leading-[1.5] font-medium text-teal-300">{card.label}</p>
                    <p className="text-center text-base leading-[1.59] font-medium text-teal-50">{card.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
