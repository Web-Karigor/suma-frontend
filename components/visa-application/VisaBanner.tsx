import Image from "next/image";
import Link from "next/link";
import { PassportIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";

export function VisaBanner() {
  return (
    <section className="bg-[#E8F7F8] py-3 tablet:py-5">
      <Container className="max-w-[1446px]">
        <div className="shadow-[0_4px_18px_0_rgba(0,0,0,0.04)]">
          <div className="relative flex h-auto flex-col items-start justify-center gap-4 overflow-hidden px-6 py-5 tablet:h-[160px] tablet:flex-row tablet:items-center tablet:justify-between tablet:gap-2.5 tablet:pt-[26px] tablet:pr-12 tablet:pb-[27px] tablet:pl-[38px]">
            <Image
              src="/images/build-my-trip-sky.png"
              alt=""
              fill
              sizes="(min-width: 1440px) 1446px, 100vw"
              className="object-cover"
            />
            <div className="relative z-10 flex items-center gap-3 text-black tablet:gap-4">
              <PassportIcon className="size-10 shrink-0 tablet:size-[52px]" />
              <div className="flex flex-col gap-2.5">
                <p className="text-[18px] leading-[129%] font-medium tablet:text-[22px] desktop:text-[28px]">
                  Need assistant in
                </p>
                <h2 className="text-[28px] leading-[108%] font-semibold tracking-[-0.28px] tablet:text-[40px] desktop:text-[56px]">
                  VISA APPLICATION?
                </h2>
              </div>
            </div>
            <Link
              href="/contact"
              className="relative z-10 inline-flex h-[49px] shrink-0 items-center rounded-button bg-black pt-3 pr-3 pb-3 pl-4 text-base font-medium whitespace-nowrap text-white transition-colors hover:bg-neutral-800"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
