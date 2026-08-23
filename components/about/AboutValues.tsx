import { Container } from "@/components/ui/Container";

const values = [
  {
    title: "Our Mission",
    description:
      "To provide seamless, spiritually uplifting travel experiences with thoughtful planning and unwavering support for every client.",
  },
  {
    title: "Our Vision",
    description:
      "To be the most trusted travel partner globally, recognized for excellence, integrity, and the pursuit of Sakinah in every journey.",
  },
  {
    title: "Our Values",
    description:
      "Built on reverence, reliability, and profound trust. We act with transparency and prioritize the wellbeing and peace of mind of every traveler.",
  },
];

export function AboutValues() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-[60px]">
      <Container>
        <div className="mx-auto grid max-w-[1513px] grid-cols-1 md:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`
                flex flex-col items-center px-6 py-8 text-center
                md:px-10 md:py-0
                ${
                  index !== values.length - 1
                    ? "md:border-r md:border-[#D6DEE0]"
                    : ""
                }
              `}
            >
              <h3 className="text-[18px] font-semibold leading-[1.3] text-hero">
                {value.title}
              </h3>

              <p className="mt-4 max-w-[360px] text-[14px] leading-[1.5] text-neutral-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
