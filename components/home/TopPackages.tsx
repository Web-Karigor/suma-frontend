"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useServicesQuery } from "@/hooks/queries/useServicesQuery";
import type { ServiceArea, ServiceCard } from "@/types/service";

const sizes: Record<ServiceArea, string> = {
  visa: "h-[210px] w-full desktop:h-[322px]",
  medical: "h-[210px] w-full desktop:h-[398px]",
  corporate: "h-[210px] w-full desktop:h-[398px]",
  hajj: "h-[280px] w-full desktop:h-[760px]",
  hotels: "h-[210px] w-full desktop:h-[360px]",
  holiday: "h-[210px] w-full desktop:h-[360px]",
};

function PackageCard({ item }: { item: ServiceCard }) {
  return (
    <Link
      href={item.href}
      className={`package-card relative block w-full overflow-hidden ${sizes[item.area]}`}
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
        <h3 className="text-lg font-semibold text-white desktop:text-xl">
          {item.title}
        </h3>

        {item.description ? (
          <p className="mt-1 line-clamp-2 text-sm leading-snug text-white/90">
            {item.description}
          </p>
        ) : null}
      </div>
    </Link>
  );
}

export function TopPackages() {
  const { data: services = [], isLoading } = useServicesQuery();

  const byArea = Object.fromEntries(
    services.map((item) => [item.area, item]),
  ) as Partial<Record<ServiceArea, ServiceCard>>;

  if (isLoading || services.length === 0) return null;

  return (
    <section className="bg-paper py-16 tablet:py-20">
      <Container>
        <SectionHeading title="Our Services" className="mb-10" />

        <div className="w-full">
          <div className="flex flex-col gap-3 desktop:grid desktop:grid-cols-[minmax(0,711fr)_minmax(0,508fr)_minmax(0,441fr)] desktop:items-start desktop:gap-10">
            <div className="flex min-w-0 flex-col gap-3 desktop:gap-10">
              {byArea.visa ? <PackageCard item={byArea.visa} /> : null}

              <div className="flex flex-col gap-3 tablet:flex-row desktop:gap-10">
                {byArea.medical ? (
                  <div className="min-w-0 flex-1">
                    <PackageCard item={byArea.medical} />
                  </div>
                ) : null}

                {byArea.corporate ? (
                  <div className="min-w-0 flex-1">
                    <PackageCard item={byArea.corporate} />
                  </div>
                ) : null}
              </div>
            </div>

            {byArea.hajj ? (
              <div className="min-w-0">
                <PackageCard item={byArea.hajj} />
              </div>
            ) : null}

            <div className="flex min-w-0 flex-col gap-3 desktop:gap-10">
              {byArea.hotels ? <PackageCard item={byArea.hotels} /> : null}
              {byArea.holiday ? <PackageCard item={byArea.holiday} /> : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
