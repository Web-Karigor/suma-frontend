import { Container } from "@/components/ui/Container";
import type { AboutValue } from "@/types/about";

type AboutValuesProps = {
  values: AboutValue[];
};

export function AboutValues({ values }: AboutValuesProps) {
  const gridClass =
    values.length === 1
      ? "desktop:grid-cols-1"
      : values.length === 2
        ? "desktop:grid-cols-2"
        : "desktop:grid-cols-3";

  return (
    <section className="bg-white py-14 tablet:py-16 desktop:py-[80px]">
      <Container className="desktop-xl:!px-0">
        <div className={`mx-auto grid grid-cols-1 ${gridClass}`}>
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`flex flex-col items-center px-6 py-8 text-center desktop:px-12 desktop:py-0 ${
                index !== values.length - 1 ? "desktop:border-r desktop:border-[#D6DEE0]" : ""
              }`}
            >
              <h3 className="text-[18px] leading-[1.3] font-semibold text-hero desktop:text-[20px]">
                {value.title}
              </h3>
              <p className="mt-4 max-w-[380px] text-[14px] leading-[1.5] text-neutral-600 desktop:text-[16px]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
