import Image from "next/image";
import { CheckIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import type { hajjPackages } from "@/lib/hajj-data";

type HajjPackage = (typeof hajjPackages)[number];

export function HajjPackageCard({ package: packageData }: { package: HajjPackage }) {
  return (
    <article className="relative mx-auto min-h-0 min-w-0 w-full max-w-[858px] overflow-visible rounded-[14px] transition-transform duration-300 hover:-translate-y-1 desktop:h-[1128px]">
      <div className="relative aspect-[1.78] overflow-hidden rounded-[24px] desktop:h-[560px] desktop:aspect-auto">
        <Image
          src={packageData.image}
          alt={packageData.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 46vw, 100vw"
        />
        <span className="absolute top-3 left-4 rounded-full bg-[#f5dc9c] px-3 py-1 text-[0.6rem] font-medium text-neutral-800">
          {packageData.type}
        </span>
      </div>

      <div className="relative z-10 flex flex-col gap-4 rounded-[24px] bg-white px-4 pb-4 tablet:px-5 tablet:pb-5 desktop:absolute desktop:top-[476px] desktop:left-1/2 desktop:h-[652px] desktop:w-[calc(100%_-_58px)] desktop:max-w-[800px] desktop:-translate-x-1/2 desktop:px-8 desktop:pb-8">
        <h2
          className="-mx-1 -mt-5 relative flex h-[84px] w-full items-center justify-center gap-2.5 rounded-[12px] px-8 text-center text-[28px] leading-[128%] font-semibold text-primary backdrop-blur-[32px] desktop:-mx-8 desktop:mt-0 desktop:w-[calc(100%_+_64px)] desktop:max-w-[800px]"
          style={{
            background:
              "linear-gradient(rgb(254 254 252 / 20%), rgb(254 254 252 / 20%)), rgb(245 219 153 / 42%)",
          }}
        >
          {packageData.title}
        </h2>
        <p className="mt-2 w-full max-w-[736px] text-base leading-[159%] font-medium text-[#0A0C0C] desktop:h-[75px]">
          {packageData.description}
        </p>
        <p className="mt-2 flex h-[25px] w-full max-w-[397px] items-center text-base leading-[158%] font-semibold uppercase text-[#8E8E8E] desktop:w-[397px]">
          Service Highlights
        </p>
        <ul className="flex flex-col gap-3">
          {packageData.highlights.map((highlight) => (
            <li key={highlight} className="flex min-h-[26px] items-center gap-1.5 text-base leading-[160%] font-normal text-[#005655]">
              <CheckIcon className="size-4 shrink-0" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2 text-[22px] leading-[150%] font-semibold text-[#00605F]">
          Starting from {packageData.price}
        </p>
        <Button
          href={packageData.href}
          className="mt-4 h-[49px] w-full max-w-full justify-center gap-8 self-center rounded-button py-3 pr-3 pl-4 text-base desktop:w-full desktop:max-w-[736px]"
        >
          View {packageData.type === "Annual" ? "Hajj" : "Umrah"} Packages
        </Button>
      </div>
    </article>
  );
}
