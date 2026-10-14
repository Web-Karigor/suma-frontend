"use client";

import { useState } from "react";
import Image from "next/image";
import { PassportIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { ContactFormModal } from "@/components/contact/ContactFormModal";

export function VisaBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="bg-[#E8F7F8] py-3 tablet:py-5">
      <Container className="max-w-[1446px]">
        <div className="shadow-[0_4px_18px_0_rgba(0,0,0,0.04)]">
          <div className="relative flex h-auto min-h-0 flex-col items-start justify-center gap-4 overflow-hidden px-5 py-5 tablet:min-h-[160px] tablet:flex-row tablet:flex-wrap tablet:items-center tablet:justify-between tablet:gap-3 tablet:px-8 tablet:py-6 desktop:flex-nowrap desktop:gap-2.5 desktop:px-12 desktop:py-[26px]">
            <Image
              src="/images/build-my-trip-sky.png"
              alt=""
              fill
              sizes="(min-width: 1440px) 1446px, 100vw"
              className="object-cover"
            />
            <div className="relative z-10 flex min-w-0 items-center gap-3 text-black tablet:gap-4">
              <PassportIcon className="size-10 shrink-0 tablet:size-[52px]" />
              <div className="flex min-w-0 flex-col gap-1.5 tablet:gap-2.5">
                <p className="text-[16px] leading-[129%] font-medium tablet:text-[20px] desktop:text-[28px]">
                  Need assistant in
                </p>
                <h2 className="text-[24px] leading-[108%] font-semibold tracking-[-0.28px] tablet:text-[32px] desktop:text-[48px] wide:text-[56px]">
                  VISA APPLICATION?
                </h2>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="relative z-10 inline-flex h-[49px] w-full shrink-0 items-center justify-center rounded-button bg-black px-4 py-3 text-base font-medium whitespace-nowrap text-white transition-colors hover:bg-neutral-800 tablet:w-auto"
            >
              Contact Us Now
            </button>
          </div>
        </div>
      </Container>

      <ContactFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
