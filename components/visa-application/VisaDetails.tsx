import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { VisaCountryInfo } from "@/types/visa-application";

export function VisaDetails({
  countryInfo,
}: {
  countryInfo?: VisaCountryInfo | null;
}) {
  const details = [
    ["Capital City", countryInfo?.city],
    ["Local Time", countryInfo?.local_time],
    ["Telephone Code", countryInfo?.telephone_code],
    ["Bank Time", countryInfo?.bank_time],
    ["Exchange Rate", countryInfo?.exchange_rate],
    ["Embassy Address", countryInfo?.embassy_address],
  ] as const;

  return (
    <section className="py-8 tablet:py-12">
      <Container className="max-w-[1446px]">
        <div className="h-auto overflow-hidden rounded-[32px] bg-[#F2F8F8] px-4 py-6 tablet:px-6 lg:h-[548px] lg:py-6 desktop:h-[548px] desktop:py-6">
          <div
            className="
              grid
              h-full
              gap-[22px]
              lg:grid-cols-[1.15fr_0.85fr]
              lg:items-start
              desktop:grid-cols-[1.15fr_0.85fr]
              desktop:items-start
            "
          >
            <dl
              className="
                grid
                content-start
                space-y-7
                whitespace-nowrap
                text-[16px]
                leading-[1.5]
                text-neutral-900
                lg:pt-2
                desktop:pt-2
              "
            >
              {details.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[130px_1fr] gap-[44px]"
                >
                  <dt className="font-medium">{label}</dt>
                  <dd>{value || "-"}</dd>
                </div>
              ))}
            </dl>

            {countryInfo?.map_image ? (
              <div
                className="
                  relative
                  min-h-[240px]
                  overflow-hidden
                  rounded-[24px]
                  lg:h-full
                  lg:min-h-[400px]
                  desktop:h-full
                "
              >
                <Image
                  src={countryInfo.map_image}
                  alt="Visa country travel map"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1280px) 35vw, 100vw"
                />
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
