import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company, footerOffices } from "@/lib/home-data";

const mapImage = "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=640&q=80";

export function ContactOffices() {
  const offices = Array.from({ length: 3 }, () => [footerOffices.left[0], footerOffices.right[0]]).flat();

  return (
    <section className="bg-[#F1FAFA] py-12 tablet:py-16 desktop:py-20">
      <Container>
        <div className="flex flex-col gap-8 border-b border-[#d7e7e7] pb-7 desktop:flex-row desktop:items-end desktop:justify-between">
          <h2 className="max-w-[440px] text-4xl leading-[1.04] font-medium tracking-[-0.03em] text-neutral-950 tablet:text-5xl desktop:max-w-[685px] desktop:text-[56px] desktop:leading-[108%] desktop:font-semibold">
            Need More information?
            <br />
            Visit our office..
          </h2>
          <div className="grid gap-3 tablet:grid-cols-2 desktop:w-[570px]">
            <ContactLink icon={<Phone className="size-4" />} label="Give a Call" value={company.hotline} href={`tel:${company.hotline}`} />
            <ContactLink icon={<Mail className="size-4" />} label="Send Email" value={company.email} href={`mailto:${company.email}`} />
          </div>
        </div>
        <div className="mt-6 grid gap-4 tablet:grid-cols-2">
          {offices.map((office, index) => <OfficeCard key={`${office.name}-${index}`} {...office} />)}
        </div>
      </Container>
    </section>
  );
}

function ContactLink({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return <a href={href} className="flex min-h-16 items-center gap-3 rounded-[10px] bg-white px-4 text-primary shadow-[0_2px_8px_rgb(10_12_12/4%)] transition-colors hover:bg-teal-50"><span>{icon}</span><span className="flex flex-col text-[10px] text-gray-500"><span>{label}</span><strong className="text-xs text-primary">{value}</strong></span><span className="ml-auto text-lg text-gray-400">›</span></a>;
}

function OfficeCard({ name, address }: { name: string; address: string }) {
  const directionHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <article className="flex flex-col gap-5 rounded-[14px] bg-white p-4 shadow-[0_2px_8px_rgb(10_12_12/4%)] tablet:flex-row tablet:items-center tablet:justify-between">
      <div className="min-w-0">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-neutral-950"><MapPin className="size-4 shrink-0" /><a href={directionHref} target="_blank" rel="noreferrer" className="hover:text-primary">{name}</a></h3>
        <a href={directionHref} target="_blank" rel="noreferrer" className="mt-3 block text-xs leading-[1.5] text-gray-600 hover:text-primary">{address}</a>
        <a href={`tel:${company.hotline}`} className="mt-2 flex items-center gap-2 text-xs text-gray-600 hover:text-primary"><Phone className="size-3.5" />{company.hotline}</a>
        <p className="mt-2 text-xs text-gray-600">From 9:00 AM to 5:00 PM (Working Day)</p>
      </div>
      <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-md tablet:w-44">
        <Image src={mapImage} alt={`${name} map`} fill className="object-cover" sizes="176px" />
        <a href={directionHref} target="_blank" rel="noreferrer" className="absolute inset-0 flex items-center justify-center"><span className="rounded bg-white px-4 py-2 text-[10px] text-neutral-900 shadow-sm transition-colors hover:bg-primary hover:text-white">Get Direction</span></a>
      </div>
    </article>
  );
}
