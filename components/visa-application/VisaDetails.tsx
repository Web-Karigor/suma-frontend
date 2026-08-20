import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { visaCountry } from "@/lib/visa-data";

const countryImage = "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=900&q=85";

const details = [
  ["Capital City", visaCountry.capital],
  ["Local Time", visaCountry.localTime],
  ["Telephone Code", visaCountry.telephoneCode],
  ["Bank Time", visaCountry.bankTime],
  ["Exchange Rate", visaCountry.exchangeRate],
  ["Embassy Address", visaCountry.embassy],
] as const;

export function VisaDetails() {
  return (
    <section className="bg-[#E8F7F8] py-8 tablet:py-12">
      <Container className="max-w-[1446px]">
        <div className="h-auto overflow-hidden rounded-[32px] bg-[#F2F8F8] px-4 py-6 tablet:px-6 desktop:h-[548px] desktop:py-6">
          <div className="grid h-full gap-[22px] desktop:grid-cols-[1.15fr_0.85fr] desktop:items-center">
            <dl className="grid gap-5 text-xs leading-[1.5] text-neutral-900 desktop:self-start">
              {details.map(([label, value]) => <div key={label} className="grid grid-cols-[130px_1fr] gap-3"><dt className="font-medium">{label}</dt><dd>{value}</dd></div>)}
            </dl>
            <div className="relative min-h-[240px] overflow-hidden rounded-[24px] desktop:h-full">
              <Image src={countryImage} alt={`${visaCountry.name} travel map`} fill className="object-cover" sizes="(min-width: 1280px) 35vw, 100vw" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
