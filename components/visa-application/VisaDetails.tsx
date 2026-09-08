import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { visaCountry } from "@/lib/visa-data";
import type { VisaCountryInfo } from "@/types/visa-application";

const countryImage = "/images/visa/visa-map2.png";

export function VisaDetails({ countryInfo }: { countryInfo?: VisaCountryInfo | null }) {
  const details = [
    ["Capital City", countryInfo?.city || visaCountry.capital],
    ["Local Time", countryInfo?.local_time || visaCountry.localTime],
    ["Telephone Code", countryInfo?.telephone_code || visaCountry.telephoneCode],
    ["Bank Time", countryInfo?.bank_time || visaCountry.bankTime],
    ["Exchange Rate", countryInfo?.exchange_rate || visaCountry.exchangeRate],
    ["Embassy Address", countryInfo?.embassy_address || visaCountry.embassy],
  ] as const;

  const mapImage = countryInfo?.map_image || countryImage;
  return (
    <section className="py-8 tablet:py-12">
      <Container className="max-w-[1446px]">
        <div className="h-auto overflow-hidden rounded-[32px] bg-[#F2F8F8] px-4 py-6 tablet:px-6 desktop:h-[548px] desktop:py-6">
          <div className="grid h-full gap-[22px] desktop:grid-cols-[1.15fr_0.85fr] desktop:items-center">
          <dl className="grid space-y-4 whitespace-nowrap text-[16px] leading-[1.5] text-neutral-900">
            {details.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[130px_1fr] gap-[44px]"
              >
                <dt className="font-medium">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
            <div className="relative min-h-[240px] overflow-hidden rounded-[24px]  desktop:h-full">
              <Image src={mapImage} alt={`${visaCountry.name} travel map`} fill className="object-contain" sizes="(min-width: 1280px) 35vw, 100vw" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
