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
        <div className="overflow-hidden rounded-[24px] bg-[#F2F8F8] px-4 py-6 tablet:rounded-[32px] tablet:px-6 desktop:px-8 desktop:py-8">
          <div className="grid gap-6 desktop:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] desktop:items-start desktop:gap-8">
            <dl className="grid min-w-0 content-start gap-5 text-[15px] leading-[1.5] text-neutral-900 tablet:gap-7 tablet:text-[16px]">
              {details.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-1 gap-1 min-[480px]:grid-cols-[minmax(110px,140px)_minmax(0,1fr)] min-[480px]:gap-6 tablet:gap-[44px]"
                >
                  <dt className="font-medium">{label}</dt>
                  <dd className="min-w-0 break-words">{value || "-"}</dd>
                </div>
              ))}
            </dl>

            {countryInfo?.map_image ? (
              <div className="relative aspect-[16/11] w-full min-w-0 overflow-hidden rounded-[20px] tablet:rounded-[24px]">
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
