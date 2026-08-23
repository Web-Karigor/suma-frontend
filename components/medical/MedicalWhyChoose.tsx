import { Container } from "@/components/ui/Container";

type Reason = {
  icon: "check" | "star" | "headset" | "shield";
  title: string;
  description: string;
};

type MedicalWhyChooseProps = {
  reasons: Reason[];
};

export function MedicalWhyChoose({
  reasons,
}: MedicalWhyChooseProps) {
  return (
    <section className="bg-[#f1f4f5] py-10 sm:py-12 md:py-14 lg:py-16">
      <Container>
        <div className="mx-auto w-full">
          <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16 xl:gap-20">
            {/* ================= LEFT CONTENT ================= */}
            <div className="w-full">
              {/* Overview Label */}
              <div className="mb-3 flex items-center gap-2">
                <span className="h-px w-4 bg-[#176d73]" />

                <span className="text-[11px] font-medium text-[#176d73] sm:text-[12px]">
                  Overview
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="max-w-[520px] text-[25px] font-bold leading-[1.2] text-[#202d33] sm:text-[30px] md:text-[34px] lg:text-[32px] xl:text-[36px]">
                Medical travel, handled like a
                <span className="block text-[#176d73]">
                  trusted healthcare partner.
                </span>
              </h2>
            </div>

            {/* ================= RIGHT CONTENT ================= */}
            <div className="w-full">
              {/* Top Heading */}
              <div className="border-l-[3px] border-[#1d7a7e] pl-4 sm:pl-5">
                <h3 className="max-w-[760px] text-[17px] font-semibold leading-[1.35] text-[#176d73] sm:text-[19px] md:text-[21px]">
                  Medical travel is handled with the same care and transparency
                  you would expect from a trusted healthcare partner.
                </h3>
              </div>

              {/* Description */}
              <div className="mt-4 space-y-4 text-[13px] leading-[1.55] text-[#394247] sm:text-[14px] md:mt-5 md:text-[15px] md:leading-[1.6]">
                <p>
                  Suma International&apos;s Medical Tourism Package is designed
                  for patients seeking quality medical care abroad, without the
                  stress of managing logistics alone. From your first
                  consultation to hospital coordination, accommodation, and
                  recovery, every step is planned and supported by our team.
                </p>

                <p>
                  We work with accredited hospitals and qualified medical
                  professionals to connect you with the right treatment option
                  for your needs. Our coordinators handle visa assistance,
                  travel arrangements, and appointment scheduling, so you can
                  focus on your health rather than paperwork.
                </p>

                <p>
                  For patients traveling with family or companions, we also
                  arrange accommodation nearby, so your support system can stay
                  close throughout treatment and recovery. Support continues
                  after your procedure with follow-up coordination once you
                  return home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}