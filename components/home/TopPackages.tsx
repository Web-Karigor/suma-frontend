import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { topPackages } from "@/lib/home-data";

const sizes = {
  visa: "h-[210px] w-full desktop:h-[322px] desktop:w-[711px]",
  medical: "h-[210px] w-full desktop:h-[398px] desktop:w-[335.5px]",
  corporate: "h-[210px] w-full desktop:h-[398px] desktop:w-[335.5px]",
  hajj: "h-[280px] w-full desktop:h-[760px] desktop:w-[508px]",
  hotels: "h-[210px] w-full desktop:h-[360px] desktop:w-[441px]",
  holiday: "h-[210px] w-full desktop:h-[360px] desktop:w-[441px]",
} as const;

function PackageCard({
  item,
}: {
  item: (typeof topPackages)[number];
}) {
  return (
    <Link
      href="/packages"
      className={`package-card relative shrink-0 overflow-hidden ${sizes[item.area]}`}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover"
        sizes="(min-width: 1280px) 508px, 100vw"
      />
      <div className="package-card-overlay absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 p-4 tablet:p-5">
        <h3 className="text-lg font-semibold text-white desktop:text-xl">{item.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm leading-snug text-white/90">{item.description}</p>
      </div>
    </Link>
  );
}

export function TopPackages() {
  const byArea = Object.fromEntries(topPackages.map((item) => [item.area, item])) as Record<
    (typeof topPackages)[number]["area"],
    (typeof topPackages)[number]
  >;

  return (
    <section className="bg-paper py-16 tablet:py-20">
      <Container>
        <SectionHeading title="Our Top Packages" className="mb-10" />

        <div className="flex flex-col gap-3 desktop:flex-row desktop:items-start desktop:justify-center desktop:gap-10">
          <div className="flex flex-col gap-3 desktop:w-[711px] desktop:gap-10">
            <PackageCard item={byArea.visa} />
            <div className="flex flex-col gap-3 tablet:flex-row desktop:gap-10">
              <PackageCard item={byArea.medical} />
              <PackageCard item={byArea.corporate} />
            </div>
          </div>

          <PackageCard item={byArea.hajj} />

          <div className="flex flex-col gap-3 desktop:w-[441px] desktop:gap-10">
            <PackageCard item={byArea.hotels} />
            <PackageCard item={byArea.holiday} />
          </div>
        </div>
      </Container>
    </section>
  );
}
