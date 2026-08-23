import { Container } from "@/components/ui/Container";
import {
  UsersIcon,
  CalendarIcon,
  MapPinIcon,
} from "@/components/icons";

type OverviewCard = {
  icon: "users" | "calendar" | "location";
  label: string;
  value: string;
};

type CorporateOverviewProps = {
  description: string;
  cards: OverviewCard[];
};

const IconComponent = ({
  type,
}: {
  type: "users" | "calendar" | "location";
}) => {
  const className = "h-4 w-4 text-[#77B8B6]";

  switch (type) {
    case "users":
      return <UsersIcon className={className} />;

    case "calendar":
      return <CalendarIcon className={className} />;

    case "location":
      return <MapPinIcon className={className} />;
  }
};

export function CorporateOverview({
  description,
  cards,
}: CorporateOverviewProps) {
  return (
    <section className="bg-[#062D2C] py-5 md:py-6">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[1.35fr_1fr]">
          
          {/* ================= Overview ================= */}
          <div>
            <h2 className="mb-3 text-[18px] font-bold text-white md:text-[20px]">
              Overview
            </h2>

            <p className="max-w-[620px] text-[13px] leading-[1.65] text-white/70 md:text-[14px]">
              {description}
            </p>
          </div>

          {/* ================= Package Details ================= */}
          <div className="rounded-[22px] bg-[#173E3D] p-3.5 md:p-4">
            
            {/* Title */}
            <h3 className="mb-3 text-[15px] font-bold text-white md:text-[16px]">
              Package Details
            </h3>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {cards.slice(0, 3).map((card, index) => (
                <div
                  key={index}
                  className="flex min-h-[80px] flex-col items-center justify-center rounded-[11px] bg-[#385857] px-3 py-3 text-center"
                >
                  {/* Icon */}
                  <div className="mb-2 flex h-6 w-6 items-center justify-center rounded-md bg-[#123D3C]">
                    <IconComponent type={card.icon} />
                  </div>

                  {/* Label */}
                  <p className="text-[9px] leading-none text-white/55">
                    {card.label}
                  </p>

                  {/* Value */}
                  <p className="mt-1.5 text-[10px] font-medium text-white/85 md:text-[11px]">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}