import { Container } from "@/components/ui/Container";
import { medicalOverview } from "@/lib/medical-data";

export function MedicalWhyChoose() {
  return (
    <section className="bg-teal-50 py-12 tablet:py-16 desktop-xl:py-[100px]">
      <Container>
        <div className="grid grid-cols-1 gap-8 desktop:grid-cols-[minmax(0,711px)_minmax(0,1005px)] desktop:gap-6 desktop-xl:h-[521px]">
          <div className="flex w-full flex-col gap-3 desktop-xl:h-[139px] desktop-xl:w-[711px]">
            <div className="flex items-center gap-2">
              <span className="h-px w-[30px] bg-teal-600" />
              <span className="text-[15px] leading-[1.39] font-medium tracking-[1px] text-teal-600">
                {medicalOverview.label}
              </span>
            </div>
            <h2 className="text-[28px] font-semibold leading-[1.23] text-black tablet:text-[32px]">
              Medical travel, handled like a{" "}
              <span className="text-teal-600">trusted healthcare partner.</span>
            </h2>
          </div>

          <div className="flex w-full flex-col gap-5 desktop-xl:h-[521px] desktop-xl:w-[1005px]">
            <div className="border-l-[3px] border-teal-600 pl-5 desktop-xl:h-[72px]">
              <h3 className="text-[18px] font-semibold leading-[1.5] text-teal-600 tablet:text-[22px]">
                {medicalOverview.intro}
              </h3>
            </div>
            <div className="space-y-4 text-[16px] leading-[1.6] font-normal text-neutral-700 desktop-xl:h-[429px]">
              {medicalOverview.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
