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
    <section id="visa-results" className="py-8 tablet:py-12">
      <Container className="max-w-[1446px]">
        <div className="overflow-hidden rounded-[32px] bg-[#F2F8F8] px-4 py-6 tablet:px-6 lg:px-8 lg:py-8">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-8">
            <dl className="grid content-start space-y-7 whitespace-nowrap text-[16px] leading-[1.5] text-neutral-900">
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
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[24px]">
                <Image
                  src={countryInfo.map_image}
                  alt="Visa country travel map"
                  fill
                  className="object-cover object-top"
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
