import { Container } from "@/components/ui/Container";

type MedicalWhyChooseProps = {
  overview: {
    title: string;
    subtitle: string;
    description: string;
  };
};

export function MedicalWhyChoose({ overview }: MedicalWhyChooseProps) {
  return (
    <section className="bg-teal-50 py-12 tablet:py-16 desktop-xl:py-[100px]">
      <Container>
        <div className="grid grid-cols-1 gap-8 desktop:grid-cols-[minmax(0,711px)_minmax(0,1005px)] desktop:gap-6">
          <div className="flex w-full flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="h-px w-[30px] bg-teal-600" />
              <span className="text-[15px] leading-[1.39] font-medium tracking-[1px] text-teal-600">
                Overview
              </span>
            </div>
            {overview.title ? (
              <h2 className="text-[28px] font-semibold leading-[1.23] text-black tablet:text-[32px]">
                {overview.title}
              </h2>
            ) : null}
          </div>

          <div className="flex w-full flex-col gap-5">
            {overview.subtitle ? (
              <div className="border-l-[3px] border-teal-600 pl-5">
                <h3 className="text-[18px] font-semibold leading-[1.5] text-teal-600 tablet:text-[22px]">
                  {overview.subtitle}
                </h3>
              </div>
            ) : null}
            {overview.description ? (
              <p className="text-[16px] leading-[1.6] font-normal text-neutral-700">
                {overview.description}
              </p>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
