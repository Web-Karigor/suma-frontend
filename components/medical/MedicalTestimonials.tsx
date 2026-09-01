import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { medicalCountries } from "@/lib/medical-data";

export function MedicalTestimonials() {
  return (
    <section className="bg-teal-50 py-12 tablet:py-16 desktop-xl:py-[127px]">
      <Container>
        <div className="flex flex-col gap-10 desktop-xl:h-[521px] desktop-xl:gap-10">
          <div className="grid grid-cols-1 gap-8 desktop:grid-cols-[minmax(0,711px)_minmax(0,1005px)] desktop:gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="h-px w-[30px] bg-teal-600" />
                <span className="text-[15px] leading-[1.39] font-medium tracking-[1px] text-teal-600">
                  Destinations
                </span>
              </div>
              <h2 className="text-[28px] font-semibold leading-[1.23] text-black tablet:text-[32px]">
                Countries <span className="text-teal-600">available</span>
              </h2>
            </div>
            <div className="border-l-[3px] border-teal-600 pl-5">
              <p className="text-[18px] font-medium leading-[1.5] text-teal-600 tablet:text-[22px]">
                We currently coordinate treatment access in the following countries. Availability may vary by treatment
                type.
              </p>
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-2 tablet:grid tablet:grid-cols-3 tablet:overflow-visible desktop:grid-cols-5 desktop-xl:h-[357px] desktop-xl:gap-6 desktop-xl:overflow-visible desktop-xl:pb-0">
            {medicalCountries.map((country) => (
              <article
                key={country.name}
                className="flex w-[240px] shrink-0 flex-col items-center rounded-2xl bg-white/55 px-4 py-6 tablet:w-auto desktop-xl:h-[357px] desktop-xl:w-[328.8px]"
              >
                <div className="relative size-[140px] overflow-hidden rounded-full tablet:size-[160px] desktop-xl:size-[200px]">
                  <Image
                    src={country.image}
                    alt={country.name}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-center text-[20px] leading-[1.5] font-semibold text-black">
                  {country.name}
                </h3>
                <div className="my-3 h-px w-full bg-gray-200" />
                <p className="text-center text-[14px] leading-[1.5] text-neutral-700">
                  <span className="font-semibold text-black">Known for: </span>
                  {country.knownFor}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
