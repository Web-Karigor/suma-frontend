import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { medicalImageStrip } from "@/lib/medical-data";

export function MedicalDestinations() {
  return (
    <section className="overflow-x-hidden bg-teal-50 py-12 tablet:py-16 desktop-xl:pt-[100px] desktop-xl:pb-[100px]">
      <Container>
        <div className="flex gap-[22px] overflow-x-auto pb-2 desktop-xl:grid desktop-xl:h-[469px] desktop-xl:grid-cols-5 desktop-xl:gap-[22px] desktop-xl:overflow-visible desktop-xl:pb-0">
          {medicalImageStrip.map((src, index) => {
            const offset = index % 2 === 1;

            return (
              <div
                key={`${src}-${index}`}
                className={`relative h-[280px] w-[220px] shrink-0 overflow-hidden rounded-2xl tablet:h-[360px] tablet:w-[280px] desktop-xl:h-[419px] desktop-xl:w-auto desktop-xl:max-w-[332px] ${
                  offset ? "desktop-xl:mt-[50px]" : "desktop-xl:mt-0"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="332px"
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
