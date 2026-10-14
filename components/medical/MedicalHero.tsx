"use client";

import { useState } from "react";
import { CoverImage } from "@/components/ui/CoverImage";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ChevronDownIcon } from "@/components/icons";
import { MedicalShareButton } from "@/components/medical/MedicalShareButton";
import { ContactFormModal } from "@/components/contact/ContactFormModal";
import type { ServiceHeroCard } from "@/types/service-detail";

type MedicalHeroProps = {
  title: string;
  subtitle: string;
  images: {
    left: string;
    top: string;
    bottom: string;
  };
  cards: ServiceHeroCard[];
  stats: Array<{ value: string; label: string }>;
};

export function MedicalHero({
  title,
  subtitle,
  images,
  cards,
  stats,
}: MedicalHeroProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="overflow-hidden bg-teal-100">
      <Container>
        <div className="flex flex-col gap-10 pt-28 pb-12 tablet:pt-32 tablet:pb-16 desktop:flex-row desktop:items-start desktop:justify-between desktop:gap-8 desktop:max-[1535px]:gap-8 xl:pt-[130px] xl:pb-[50px] 2xl:gap-6 2xl:pt-[160px] 2xl:pb-[60px]">
          <div className="relative z-10 flex w-full min-w-0 flex-col desktop:max-w-[min(520px,50%)] desktop:flex-1 2xl:max-w-[858px] 2xl:w-[858px] 2xl:flex-none">
            <div className="flex flex-col gap-4 tablet:gap-6">
              <h1 className="text-[28px] font-semibold leading-[1.08] tracking-[-0.5px] break-words text-black min-[480px]:text-[32px] tablet:text-[48px] desktop:text-[38px] desktop:leading-[1.1] desktop:max-[1535px]:text-[42px] 2xl:text-[72px] 2xl:leading-[1.03]">
                {title}
              </h1>

              {subtitle ? (
                <p className="text-[15px] leading-[1.5] font-normal text-gray-800 tablet:text-[20px] desktop:text-[16px] desktop:max-[1535px]:text-[17px] 2xl:text-[22px]">
                  {subtitle}
                </p>
              ) : null}
            </div>

            {cards && cards.length > 0 && (
              <div className="mt-8 grid w-full grid-cols-1 gap-4 min-[480px]:grid-cols-2 tablet:mt-10 tablet:gap-5 lg:grid-cols-3 desktop:mt-8 desktop:max-w-full desktop:max-[1535px]:gap-3 2xl:mt-[60px] 2xl:w-[715px] 2xl:max-w-none">
                {cards.map((card) => (
                  <div
                    key={card.label}
                    className="flex min-w-0 flex-col items-center rounded-xl border border-teal-200 bg-white/20 px-3 pt-6 pb-4 tablet:pt-8 desktop:max-[1535px]:px-2 desktop:max-[1535px]:pt-5 2xl:h-[162px] 2xl:w-[225px]"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-button bg-teal-600 p-1.5 desktop:max-[1535px]:size-8 2xl:size-9">
                      <img
                        src={card.icon}
                        alt=""
                        width={24}
                        height={24}
                        className="size-6 desktop:max-[1535px]:size-5 2xl:size-6"
                      />
                    </span>

                    <div className="mt-2 flex w-full flex-col items-center gap-1.5">
                      <p className="text-center text-[15px] leading-[1.39] font-medium tracking-[1px] text-gray-600 desktop:max-[1535px]:text-[12px] 2xl:text-[15px]">
                        {card.label}
                      </p>

                      <p className="text-center text-base leading-[1.59] font-medium text-black desktop:max-[1535px]:text-[13px] 2xl:text-base">
                        {card.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 flex flex-col gap-[18px] tablet:mt-10 desktop:mt-8 2xl:mt-[60px] 2xl:w-[473px]">
              <a
                href="#services"
                className="inline-flex h-[25px] w-fit items-center gap-3 text-[16px] font-medium text-teal-600"
              >
                See What&apos;s Included?
                <ChevronDownIcon className="size-5" />
              </a>

              <div className="flex flex-col items-stretch gap-4 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-center tablet:gap-6">
                <Button
                  onClick={() => setModalOpen(true)}
                  className="w-full justify-between min-[480px]:w-auto tablet:w-[319px] desktop:max-[1535px]:w-[280px]"
                >
                  Get a Free Quote
                </Button>

                <MedicalShareButton />
              </div>
            </div>
          </div>

          {/* HERO IMAGES — narrower at 1280–1535 so copy never collides */}
          <div className="relative z-0 grid w-full grid-cols-2 gap-3 desktop:h-[480px] desktop:w-[min(420px,42%)] desktop:shrink-0 desktop:grid-cols-2 desktop:max-[1535px]:gap-2.5 2xl:h-[729px] 2xl:w-[858px]">
            <div className="relative col-span-2 h-[280px] overflow-hidden rounded-2xl tablet:h-[420px] desktop:col-span-1 desktop:h-full 2xl:w-[423px]">
              <CoverImage
                src={images.left}
                alt={title}
                className="object-cover object-left"
                sizes="(min-width: 1536px) 423px, (min-width: 1280px) 220px, 100vw"
                priority
              />
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-3 desktop:col-span-1 desktop:grid-cols-1 desktop:grid-rows-2 desktop:h-full desktop:max-[1535px]:gap-2.5 2xl:w-[423px]">
              <div className="relative h-[180px] min-h-0 overflow-hidden rounded-2xl tablet:h-[240px] desktop:h-full 2xl:h-[358.5px]">
                <CoverImage
                  src={images.top}
                  alt=""
                  className="object-cover object-[center_20%]"
                  sizes="(min-width: 1536px) 423px, (min-width: 1280px) 220px, 50vw"
                />
              </div>

              <div className="relative h-[180px] min-h-0 overflow-hidden rounded-2xl tablet:h-[240px] desktop:h-full 2xl:h-[358.5px]">
                <CoverImage
                  src={images.bottom}
                  alt=""
                  className="object-cover"
                  sizes="(min-width: 1536px) 423px, (min-width: 1280px) 220px, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {stats && stats.length > 0 && (
        <div className="bg-teal-600">
          <div className="mx-auto flex min-h-[160px] w-full max-w-[1520px] items-center px-4 py-10 tablet:min-h-[180px] xl:h-[204px] xl:px-0 xl:py-12">
            <div className="grid w-full grid-cols-2 gap-6 tablet:gap-8 lg:grid-cols-4 lg:gap-0 xl:h-[108px]">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center justify-center gap-2 px-3 text-center tablet:px-4 xl:h-[108px] ${
                    index % 2 === 1 ? "border-l border-teal-400" : ""
                  } ${index > 0 ? "lg:border-l lg:border-teal-400" : "lg:border-l-0"}`}
                >
                  <p className="text-[28px] leading-[1.1] font-regular tracking-[-0.5px] text-[#F2F8F8] tablet:text-[40px] xl:text-[56px]">
                    {stat.value}
                  </p>

                  <p className="text-[13px] leading-[1.5] font-regular text-teal-200 tablet:text-[16px] xl:text-[18px] xl:leading-[1.64]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <ContactFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
