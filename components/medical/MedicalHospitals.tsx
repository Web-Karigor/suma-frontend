"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MapPinIcon, ShieldIcon } from "@/components/icons";
import { medicalHospitals } from "@/lib/medical-data";

import "swiper/css";

const VISIBLE_COUNT = 5;
const needsSlider = medicalHospitals.length > VISIBLE_COUNT;

function HospitalCard({ hospital }: { hospital: (typeof medicalHospitals)[number] }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-teal-50 p-5 desktop-xl:h-[570px] desktop-xl:w-[564px]">
      <div className="relative h-[200px] w-full overflow-hidden rounded-xl tablet:h-[240px] desktop-xl:h-[280px] desktop-xl:w-[524px]">
        <Image src={hospital.image} alt={hospital.name} fill sizes="524px" className="object-cover" />
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <div className="flex items-center gap-2 text-teal-600">
          <ShieldIcon className="size-[18px] shrink-0" />
          <span className="text-[15px] leading-[1.39] font-medium">{hospital.accreditation}</span>
        </div>
        <h3 className="mt-3 text-[20px] leading-[1.5] font-semibold text-black">{hospital.name}</h3>
        <div className="mt-2 flex items-center gap-2 text-gray-700">
          <MapPinIcon className="size-5 shrink-0" />
          <span className="text-base leading-[1.6]">{hospital.location}</span>
        </div>
        <p className="mt-3 text-[14px] leading-[1.5] text-neutral-700">{hospital.specialties.join(", ")}</p>
        <Button href="/contact" className="mt-auto w-full justify-between desktop-xl:w-[524px]">
          Get a Free Quote
        </Button>
      </div>
    </article>
  );
}

function HospitalsSlider() {
  return (
    <Swiper
      speed={600}
      grabCursor
      spaceBetween={24}
      slidesPerView={1.1}
      className="medical-hospitals-swiper"
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
    >
      {medicalHospitals.map((hospital) => (
        <SwiperSlide key={hospital.name} className="!h-auto">
          <HospitalCard hospital={hospital} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export function MedicalHospitals() {
  return (
    <section className="bg-teal-50 py-12 tablet:py-16 desktop-xl:h-[882px] desktop-xl:py-[80px]">
      <Container>
        <div className="flex flex-col gap-8 desktop-xl:h-[722px] desktop-xl:gap-8">
          <div className="grid grid-cols-1 gap-8 desktop:grid-cols-[minmax(0,711px)_minmax(0,1005px)] desktop:gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="h-px w-[30px] bg-teal-600" />
                <span className="text-[15px] leading-[1.39] font-medium tracking-[1px] text-teal-600">
                  Network
                </span>
              </div>
              <h2 className="text-[28px] font-semibold leading-[1.23] text-black tablet:text-[32px]">
                Our partner <span className="text-teal-600">hospitals</span>
              </h2>
            </div>
            <div className="border-l-[3px] border-teal-600 pl-5">
              <p className="text-[18px] font-medium leading-[1.5] text-teal-600 tablet:text-[22px]">
                We work with accredited hospitals recognized for international patient care.
              </p>
            </div>
          </div>

          {needsSlider ? (
            <HospitalsSlider />
          ) : (
            <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
              {medicalHospitals.map((hospital) => (
                <HospitalCard key={hospital.name} hospital={hospital} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
