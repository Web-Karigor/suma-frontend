import Image from "next/image";
import { CheckIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import type { ServiceHajjPackage } from "@/types/service-detail";

export function HajjPackageCard({
  package: packageData,
}: {
  package: ServiceHajjPackage;
}) {
  return (
    <article className="relative mx-auto min-h-0 min-w-0 w-full max-w-[858px] overflow-visible rounded-[14px] transition-transform duration-300 desktop:h-[1128px]">
      <div className="relative aspect-[1.78] overflow-hidden rounded-[24px] desktop:h-[560px] desktop:aspect-auto">
        <Image
          src={packageData.image}
          alt={packageData.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 46vw, 100vw"
        />
        <span className="absolute top-3 left-3 xl:top-6 xl:left-6 rounded-full bg-[#f5dc9c] px-3 xl:px-5 py-1 text-[0.6rem] xl:text-base font-medium text-neutral-800">
          {packageData.type}
        </span>
      </div>

      <div
        className="
    relative z-10
    shadow-lg
    flex flex-col
    rounded-[24px]
    overflow-hidden
    desktop:absolute
    desktop:top-[476px]
    desktop:left-1/2
    desktop:h-[652px]
    desktop:w-[calc(100%_-_58px)]
    desktop:max-w-[800px]
    desktop:-translate-x-1/2
  "
      >
        {/* Glass Header */}
        <h2
          className="
    relative
    flex
    h-[84px]
    w-full
    items-center
    justify-center
    overflow-hidden
    rounded-t-[24px]
    px-8
    text-center
    text-[16px] lg:text-[28px]
    leading-[128%]
    font-semibold
    text-primary
  "
        >
          <span
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(254,254,252,0.68)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          />

          <span
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(245,219,153,0.70), rgba(245,219,153,0.70))",
            }}
          />

          <span className="relative z-10">{packageData.title}</span>
        </h2>

        {/* Content */}
        <div
          className="
      flex
      flex-1
      flex-col
      gap-6
      px-8
      py-8
    "
          style={{
            backgroundColor: "rgba(254,254,252,0.84)",
          }}
        >
          <p
            className="
        max-w-[736px]
        lg:text-base
        text-sm
        leading-[159%]
        font-medium
        text-[#0A0C0C]
      "
          >
            {packageData.description}
          </p>

          {packageData.highlights.length > 0 && (
            <>
              <p
                className="
            flex
            h-[25px]
            items-center
            text-base
            font-semibold
            uppercase
            text-[#8E8E8E]
          "
              >
                Service Highlights
              </p>

              <ul className="flex flex-col gap-3">
                {packageData.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="
                flex
                items-center
                gap-2
                text-base
                text-[#005655]
              "
                  >
                    <CheckIcon className="size-4 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {packageData.price && (
            <p
              className="
          mt-2
          text-[22px]
          font-semibold
          text-[#00605F]
        "
            >
              Starting from {packageData.price}
            </p>
          )}

          <Button
            href={packageData.href}
            className="
        mt-auto
        h-[49px]
        w-full
        justify-center
        rounded-button
        text-xs lg:text-base
      "
          >
            View {packageData.type === "Annual" ? "Hajj" : "Umrah"} Packages
          </Button>
        </div>
      </div>
    </article>
  );
}
