import { Container } from "@/components/ui/Container";

type MedicalServicesProps = {
  services: string[];
};

const includedServices = [
  "Doctor and Hospital Coordination",
  "Visa Assistance",
  "Airport and Hospital Transfers",
  "Patient Coordinator Support",
  "Follow-Up Consultation Coordination",
  "24/7 Support During Your Stay",
];

const additionalServices = [
  "Extended Accommodation",
  "Private Nursing Care",
  "Physiotherapy or Rehabilitation Services",
  "Interpreter Services Beyond Standard Hours",
  "Companion Flight Booking",
  "Custom Itinerary",
];

const notIncludedServices = [
  "Chauffeur",
  "Extended Stay",
  "Interpreter",
  "AV",
  "Dinner",
  "Custom Itinerary",
];

type ServiceCardProps = {
  title: string;
  items: string[];
  type: "included" | "additional" | "excluded";
};

function ServiceCard({ title, items, type }: ServiceCardProps) {
  const iconStyles = {
    included: {
      bg: "bg-[#2d7b7f]",
      symbol: "✓",
      title: "text-[#245c60]",
      text: "text-[#3e4a4e]",
    },
    additional: {
      bg: "bg-[#c99b31]",
      symbol: "+",
      title: "text-[#7c6530]",
      text: "text-[#3e4a4e]",
    },
    excluded: {
      bg: "bg-[#7b8587]",
      symbol: "×",
      title: "text-[#667174]",
      text: "text-[#6b7477]",
    },
  };

  const style = iconStyles[type];

  return (
    <div className="min-h-[300px] w-full rounded-[18px] border border-[#dce5e6] bg-white/45 px-5 py-6 sm:min-h-[290px] sm:px-6 lg:min-h-[300px] lg:px-5 xl:px-6">
      {/* Title */}
      <h3
        className={`text-[15px] font-medium tracking-[0.01em] sm:text-[16px] ${style.title}`}
      >
        {title}
      </h3>

      {/* Services */}
      <div className="mt-6 space-y-[18px]">
        {items.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-3"
          >
            {/* Icon */}
            <span
              className={`flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full ${style.bg} text-[10px] font-bold leading-none text-white`}
            >
              {style.symbol}
            </span>

            {/* Text */}
            <span
              className={`text-[12px] leading-[1.4] sm:text-[13px] ${style.text}`}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MedicalServices({
  services,
}: MedicalServicesProps) {
  /*
   * If services data is passed from parent,
   * use it for the Included section.
   * Otherwise use the default design data.
   */
  const included =
    services && services.length > 0
      ? services.slice(0, 6)
      : includedServices;

  return (
    <section className="w-full bg-[#f3f6f7] py-10 sm:py-12 md:py-14 lg:py-16 xl:py-[46px]">
      <Container>
        <div className="w-full">
          {/* ================= SECTION TITLE ================= */}
          <h2 className="mb-7 text-[28px] font-bold leading-none text-[#176d73] sm:text-[30px] md:text-[32px]">
            Services
          </h2>

          {/* ================= SERVICE CARDS ================= */}
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-[32px]">
            {/* INCLUDED */}
            <ServiceCard
              title="Included"
              items={included}
              type="included"
            />

            {/* AVAILABLE AT ADDITIONAL FEES */}
            <ServiceCard
              title="Available at Additional Fees"
              items={additionalServices}
              type="additional"
            />

            {/* NOT INCLUDED */}
            <ServiceCard
              title="Not Included"
              items={notIncludedServices}
              type="excluded"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}