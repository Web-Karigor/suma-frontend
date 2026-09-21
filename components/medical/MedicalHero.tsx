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
        <div className="flex flex-col gap-10 pt-28 pb-12 tablet:pt-32 tablet:pb-16 desktop:flex-row desktop:items-start desktop:justify-between desktop:gap-6 xl:gap-5 xl:pt-[130px] xl:pb-[50px] 2xl:gap-6 2xl:pt-[160px] 2xl:pb-[60px]">
          <div className="flex w-full min-w-0 flex-col xl:w-[600px] 2xl:w-[858px]">
            <div className="flex flex-col gap-6 xl:h-[210px] xl:w-[600px] 2xl:h-[234px] 2xl:w-[858px]">
              <h1 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.5px] text-black tablet:text-[48px] xl:h-auto xl:w-[600px] xl:text-[56px] xl:leading-[1.05] 2xl:h-[150px] 2xl:w-[858px] 2xl:text-[72px] 2xl:leading-[1.03]">
                {title}
              </h1>

              {subtitle ? (
                <p className="text-[16px] leading-[1.5] font-normal text-gray-800 tablet:text-[20px] xl:h-auto xl:w-[600px] xl:text-[18px] 2xl:h-[60px] 2xl:w-[858px] 2xl:text-[22px]">
                  {subtitle}
                </p>
              ) : null}
            </div>

            {cards && cards.length > 0 && (
              <div className="mt-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-3 xl:mt-[40px] xl:h-[150px] xl:w-[600px] 2xl:mt-[60px] 2xl:h-[162px] 2xl:w-[715px]">
                {cards.map((card) => (
                  <div
                    key={card.label}
                    className="flex flex-col items-center rounded-xl border border-teal-200 bg-white/20 px-3 pt-8 pb-4 xl:h-[150px] xl:w-[190px] 2xl:h-[162px] 2xl:w-[225px]"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-button bg-teal-600 p-1.5 xl:size-7 2xl:size-9">
                      <img
                        src={card.icon}
                        alt=""
                        width={24}
                        height={24}
                        className="size-6 xl:size-4 2xl:size-6"
                      />
                    </span>

                    <div className="mt-2 flex w-full flex-col items-center gap-1.5">
                      <p className="text-center text-[15px] leading-[1.39] font-medium tracking-[1px] text-gray-600 xl:text-[12px] 2xl:text-[15px]">
                        {card.label}
                      </p>

                      <p className="text-center text-base leading-[1.59] font-medium text-black xl:text-[14px] 2xl:text-base">
                        {card.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-10 flex flex-col gap-[18px] xl:mt-[40px] xl:h-[116px] xl:w-[420px] 2xl:mt-[60px] 2xl:h-[116px] 2xl:w-[473px]">
              <a
                href="#services"
                className="inline-flex h-[25px] w-fit items-center gap-3 text-[16px] font-medium text-teal-600"
              >
                See What&apos;s Included?
                <ChevronDownIcon className="size-5" />
              </a>

              <div className="flex flex-wrap items-center gap-6">
                <Button
                  onClick={() => setModalOpen(true)}
                  className="w-full justify-between tablet:w-[319px]"
                >
                  Get a Free Quote
                </Button>

                <MedicalShareButton />
              </div>
            </div>
          </div>

          {/* HERO IMAGES */}

          <div className="grid w-full grid-cols-2 gap-3 xl:h-[620px] xl:w-[600px] 2xl:h-[729px] 2xl:w-[858px]">
            <div className="relative col-span-2 h-[280px] overflow-hidden rounded-2xl tablet:h-[420px] xl:col-span-1 xl:h-[620px] xl:w-[295px] 2xl:h-[729px] 2xl:w-[423px]">
              <CoverImage
                src={images.left}
                alt={title}
                className="object-cover object-left"
                sizes="(max-width:1280px) 100vw, 423px"
                priority
              />
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-3 xl:col-span-1 xl:grid-cols-1 xl:h-[620px] xl:w-[295px] 2xl:h-[729px] 2xl:w-[423px]">
              <div className="relative h-[180px] overflow-hidden rounded-2xl tablet:h-[240px] xl:h-[304px] xl:w-[295px] 2xl:h-[358.5px] 2xl:w-[423px]">
                <CoverImage
                  src={images.top}
                  alt=""
                  className="object-cover object-[center_20%]"
                  sizes="(max-width:1280px) 50vw, 423px"
                />
              </div>

              <div className="relative h-[180px] overflow-hidden rounded-2xl tablet:h-[240px] xl:h-[304px] xl:w-[295px] 2xl:h-[358.5px] 2xl:w-[423px]">
                <CoverImage
                  src={images.bottom}
                  alt=""
                  className="object-cover"
                  sizes="(max-width:1280px) 50vw, 423px"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {stats && stats.length > 0 && (
        <div className="bg-teal-600">
          <div className="mx-auto flex min-h-[160px] w-full max-w-[1520px] items-center px-4 py-10 tablet:min-h-[180px] xl:h-[204px] xl:px-0 xl:py-12">
            <div className="grid w-full grid-cols-2 gap-8 tablet:grid-cols-4 tablet:gap-0 xl:h-[108px]">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center justify-center gap-2 px-4 text-center ${index > 0 ? "tablet:border-l tablet:border-teal-400" : ""} xl:h-[108px]`}
                >
                  <p className="text-[32px] leading-[1.1] font-normal tracking-[-0.5px] text-white tablet:text-[44px] xl:text-[56px]">
                    {stat.value}
                  </p>

                  <p className="text-[14px] leading-[1.5] font-light text-teal-10 tablet:text-[16px] xl:text-[18px] xl:leading-[1.64]">
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
