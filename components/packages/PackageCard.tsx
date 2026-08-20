import Image from "next/image";
import { CalendarDays, Moon } from "lucide-react";
import { ArrowUpRightIcon, ShareIcon, StarIcon } from "@/components/icons";
import type { packageList } from "@/lib/packages-data";

type PackageItem = (typeof packageList)[number];

export function PackageCard({ package: packageData }: { package: PackageItem }) {
  return (
    <article className="group relative h-[472px] min-w-0 overflow-hidden rounded-[18px] border border-[#ddd8cb] bg-white shadow-[0_2px_8px_rgb(10_12_12/8%)]">
      <div className="absolute inset-0 overflow-hidden">
        <Image src={packageData.image} alt={packageData.title} fill className="object-cover" sizes="(min-width: 1280px) 31vw, (min-width: 768px) 47vw, 100vw" />
      </div>
      <div className="absolute right-2 bottom-2 left-2 flex h-[222px] flex-col gap-2.5 rounded-[10px] bg-overlay-white-84 p-4 backdrop-blur-md">
        <a href={packageData.href} aria-label={`View ${packageData.title}`} className="group absolute top-4 right-4 inline-flex size-10 items-center justify-center overflow-hidden rounded-[10px] bg-gray-50 text-neutral-950 transition-colors duration-200 hover:bg-primary hover:text-white">
          <span className="relative size-6 overflow-hidden">
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[120%] group-hover:-translate-y-[120%] motion-reduce:transition-none">
              <ArrowUpRightIcon className="size-full" />
            </span>
            <span className="absolute inset-0 flex translate-x-[-120%] translate-y-[120%] items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0 motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:transition-none">
              <ArrowUpRightIcon className="size-full" />
            </span>
          </span>
        </a>
        <h3 className="pr-10 text-base leading-tight font-semibold text-neutral-950 tablet:pr-12 tablet:text-2xl">{packageData.title}</h3>
        <p className="truncate text-[15px] text-neutral-800">{packageData.subtitle}</p>
        <div className="flex items-center gap-2 text-xs text-neutral-950"><CalendarDays className="size-5 shrink-0" /><span>{packageData.date}</span></div>
        <div className="flex items-center gap-8 text-xs text-neutral-950"><span className="flex items-center gap-2"><StarIcon className="size-5 shrink-0" />{packageData.hotel}</span><span className="flex items-center gap-2"><Moon className="size-5 shrink-0" />{packageData.duration}</span></div>
        <div className="mt-auto flex items-center justify-between gap-2"><p className="text-xl font-semibold text-primary tablet:text-3xl">৳ {packageData.price}</p><div className="flex items-center gap-[21px]"><a href={packageData.href} className="inline-flex h-[49px] w-[140px] items-center justify-center rounded-button bg-primary px-3 text-sm font-medium text-white">Book Now</a><button type="button" aria-label="Share package" className="inline-flex size-12 shrink-0 items-center justify-center rounded-[12px] border-[0.5px] border-teal-600 bg-gray-50 text-primary"><ShareIcon className="size-6" /></button></div></div>
      </div>
    </article>
  );
}
