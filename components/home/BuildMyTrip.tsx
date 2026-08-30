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
          <div className="flex h-[100px] items-center justify-center rounded-2xl bg-[#BFDEDD] px-6  desktop:h-[132px] desktop:w-[590px] desktop:shrink-0 desktop:justify-start desktop:pt-[35px] desktop:pr-[82px] desktop:pb-[36px] desktop:pl-[81px]">
            <p className="font-medium text-[32px] leading-[109%] tracking-[-0.5%] text-black desktop:text-[56px]">
              Exclusive Deals
            </p>
          </div>

          <Link
            href={partnerPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex h-[100px] flex-1 items-center justify-center overflow-hidden rounded-2xl tablet:rounded-l-none desktop:h-[132px]"
          >
            <Image
              src="/images/build-my-trip-sky.png"
              alt=""
              fill
              sizes="(min-width: 1280px) 1110px, 100vw"
              className="object-cover object-[center_18%] rounded-2xl"
            />
            <span className="relative z-10 inline-flex items-center gap-2.5 font-medium text-[32px] leading-[109%] tracking-[-0.5%] text-white desktop:gap-3 desktop:text-[56px]">
              Build My Trip
              <ArrowRightIcon className="size-7 desktop:size-10" />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
