import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { partnerPortalUrl } from "@/lib/home-data";

export function BuildMyTrip() {
  return (
    <section className="py-8 tablet:py-10">
      <Container>
        <div className="flex flex-col gap-4 tablet:flex-row tablet:items-stretch tablet:gap-0">
          <div className="flex h-[100px] min-w-0 items-center justify-center rounded-2xl bg-[#BFDEDD] px-4 tablet:flex-1 tablet:px-6 desktop:h-[132px] desktop:w-[590px] desktop:shrink-0 desktop:flex-none desktop:justify-start desktop:pt-[35px] desktop:pr-[82px] desktop:pb-[36px] desktop:pl-[81px]">
            <p className="text-center font-medium text-[24px] leading-[109%] tracking-[-0.5%] text-black min-[480px]:text-[28px] tablet:text-[28px] desktop:text-[40px] wide:text-[56px]">
              Exclusive Deals
            </p>
          </div>

          <Link
            href={partnerPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex h-[100px] min-w-0 flex-1 items-center justify-center overflow-hidden rounded-2xl tablet:rounded-l-none desktop:h-[132px]"
          >
            <Image
              src="/images/build-my-trip-sky.png"
              alt=""
              fill
              sizes="(min-width: 1280px) 1110px, 100vw"
              className="object-cover object-[center_18%] rounded-2xl"
            />
            <span className="relative z-10 inline-flex items-center gap-2 font-medium text-[24px] leading-[109%] tracking-[-0.5%] text-white min-[480px]:text-[28px] tablet:gap-2.5 tablet:text-[28px] desktop:gap-3 desktop:text-[40px] wide:text-[56px]">
              Build My Trip
              <ArrowRightIcon className="size-6 shrink-0 tablet:size-7 desktop:size-10" />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
