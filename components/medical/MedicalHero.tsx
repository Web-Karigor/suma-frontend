import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ChevronDownIcon } from "@/components/icons";
import { MedicalShareButton } from "@/components/medical/MedicalShareButton";
import { medicalHero, medicalStats } from "@/lib/medical-data";

export function MedicalHero() {
  return (
    <section className="overflow-hidden bg-teal-100">
      <Container>
        <div className="flex flex-col gap-10 pt-28 pb-12 tablet:pt-32 tablet:pb-16 desktop:flex-row desktop:items-start desktop:justify-between desktop:gap-6 desktop-xl:gap-6 desktop-xl:pt-[160px] desktop-xl:pb-[60px]">
          <div className="flex w-full min-w-0 flex-col desktop-xl:w-[858px]">
            <div className="flex flex-col gap-6 desktop-xl:h-[234px] desktop-xl:w-[858px] desktop-xl:gap-6">
              <h1 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.5px] text-black tablet:text-[48px] desktop-xl:h-[150px] desktop-xl:w-[858px] desktop-xl:text-[72px] desktop-xl:leading-[1.03]">
                {medicalHero.title}
              </h1>
              <p className="text-[16px] leading-[1.5] font-normal text-gray-800 tablet:text-[20px] desktop-xl:h-[60px] desktop-xl:w-[858px] desktop-xl:text-[22px]">
                {medicalHero.subtitle}
              </p>
            </div>

            <div className="mt-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-3 desktop-xl:mt-[60px] desktop-xl:h-[162px] desktop-xl:w-[715px] desktop-xl:gap-5">
              {medicalHero.cards.map((card) => (
                <div
                  key={card.label}
                  className="flex flex-col items-center rounded-xl border border-teal-200 bg-white/20 px-3 pt-8 pb-4 desktop-xl:h-[162px] desktop-xl:w-[225px]"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-button bg-teal-600 p-1.5">
                    <img src={card.icon} alt="" width={24} height={24} className="size-6" />
                  </span>
                  <div className="mt-2 flex w-full flex-col items-center gap-1.5 desktop-xl:mt-[8px]">
                    <p className="text-center text-[15px] leading-[1.39] font-medium tracking-[1px] text-gray-600">
                      {card.label}
                    </p>
                    <p className="text-center text-base leading-[1.59] font-medium text-black">{card.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-[18px] desktop-xl:mt-[60px] desktop-xl:h-[116px] desktop-xl:w-[473px] desktop-xl:gap-[18px]">
              <a
                href="#services"
                className="inline-flex h-[25px] w-fit items-center gap-3 text-[16px] font-medium text-teal-600 transition-opacity hover:opacity-80"
              >
                See What&apos;s Included?
                <ChevronDownIcon className="size-5" />
              </a>
              <div className="flex flex-wrap items-center gap-6">
                <Button href="/contact" className="w-full justify-between tablet:w-[319px]">
                  Get a Free Quote
                </Button>
                <MedicalShareButton />
              </div>
            </div>
          </div>

          <div className="grid w-full grid-cols-2 gap-3 desktop-xl:h-[729px] desktop-xl:w-[858px] desktop-xl:gap-3">
            <div className="relative col-span-2 h-[280px] overflow-hidden rounded-2xl tablet:h-[420px] desktop:col-span-1 desktop:h-full desktop-xl:h-[729px] desktop-xl:w-[423px]">
              <Image
                src={medicalHero.images.left}
                alt="Medical professional"
                fill
                priority
                className="object-cover object-left"
                sizes="(max-width: 1280px) 100vw, 423px"
              />
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-3 desktop:col-span-1 desktop:grid-cols-1 desktop:h-full desktop-xl:h-[729px] desktop-xl:w-[423px]">
              <div className="relative h-[180px] overflow-hidden rounded-2xl tablet:h-[240px] desktop:h-full desktop-xl:h-[358.5px] desktop-xl:w-[423px]">
                <Image
                  src={medicalHero.images.top}
                  alt="Doctor with family"
                  fill
                  className="object-cover object-[center_20%]"
                  sizes="(max-width: 1280px) 50vw, 423px"
                />
              </div>
              <div className="relative h-[180px] overflow-hidden rounded-2xl tablet:h-[240px] desktop:h-full desktop-xl:h-[358.5px] desktop-xl:w-[423px]">
                <Image
                  src={medicalHero.images.bottom}
                  alt="Pediatric consultation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 50vw, 423px"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-teal-600">
        <div className="mx-auto flex min-h-[160px] w-full max-w-[1520px] items-center px-4 py-10 tablet:min-h-[180px] desktop-xl:h-[204px] desktop-xl:px-0 desktop-xl:py-12">
          <div className="grid w-full grid-cols-2 gap-8 tablet:grid-cols-4 tablet:gap-0 desktop-xl:h-[108px]">
            {medicalStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center gap-2 px-4 text-center desktop-xl:h-[108px] ${
                  index > 0 ? "tablet:border-l tablet:border-teal-400" : ""
                }`}
              >
                <p className="text-[32px] leading-[1.1] font-normal tracking-[-0.5px] text-white tablet:text-[44px] desktop-xl:text-[56px]">
                  {stat.value}
                </p>
                <p className="text-[14px] leading-[1.5] font-light text-teal-100 tablet:text-[16px] desktop-xl:text-[18px] desktop-xl:leading-[1.64]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
