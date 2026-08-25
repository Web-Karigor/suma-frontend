import { Container } from "@/components/ui/Container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { packageList } from "@/lib/packages-data";
import { PackageCard } from "./PackageCard";

export function PackageList() {
  return (
    <>
      <section className="relative -mt-[5.5rem] bg-gold-100 px-4 pt-[calc(5.5rem+2.25rem)] pb-9 tablet:px-8 tablet:pt-[calc(5.5rem+3.5rem)] tablet:pb-14 desktop:pt-[calc(5.5rem+3rem)] desktop:pb-12">
        <Container>
          <h1 className="max-w-[858px] text-[32px] leading-[123%] font-semibold text-[#0A0C0C]">Choose Your Preferred Umrah Package</h1>
          <p className="mt-4 max-w-[858px] text-[18px] leading-[160%] font-normal text-[#7B7B7B]">Selecting your preferred Umrah package will allow us to tailor your experience! You can also change your preferences at any time from your profile.</p>
        </Container>
      </section>
      <section className="bg-[#FEFBF5] pb-14 tablet:pb-20">
        <Container>
          <div className="flex items-center justify-between border-b border-[#e9e5dc] py-6 tablet:py-7"><h2 className="text-[28px] leading-[129%] font-medium text-[#0A0C0C]">Exclusive Suma Packages <span className="ml-1 text-xs font-normal text-neutral-500">(23 Items)</span></h2><div className="hidden items-center gap-2 text-xs text-neutral-700 tablet:flex"><span>Sort by:</span><Select defaultValue="Newest"><SelectTrigger showCloseIcon className="h-8 min-w-[96px] rounded border-[#d8d3c8] bg-transparent px-3 text-xs shadow-none"><SelectValue /></SelectTrigger><SelectContent align="start" alignItemWithTrigger={false} className="min-w-[160px] rounded border border-[#d8d3c8] bg-white p-1 shadow-md ring-0"><SelectItem value="Newest">Newest</SelectItem><SelectItem value="Price: Low to High">Price: Low to High</SelectItem></SelectContent></Select></div></div>
          <div className="flex flex-wrap items-center gap-2 border-b border-[#e9e5dc] py-4"><span className="mr-1 text-xs text-gray-900">Filter:</span>{[["Category", "All", ["All", "Hajj", "Umrah"]], ["Price", "Any", ["Any", "Under ৳10,000", "৳10,000+"]], ["Nights", "Any", ["Any", "5 Nights", "10 Nights"]], ["Start Date", "Select", ["Select", "2026-07-24", "2026-08-03"]], ["End Date", "Select", ["Select", "2026-08-13", "2026-09-03"]]].map(([label, value, options]) => <div key={label as string} className="flex h-[46px] w-[160px] items-center justify-between rounded-[8px] border-[0.5px] border-gray-900/40 bg-transparent px-3 py-2 text-xs text-gray-900"><span>{label as string}</span><Select defaultValue={(value as string).toLowerCase()}><SelectTrigger showCloseIcon aria-label={label as string} className="h-full min-w-0 flex-1 gap-0 border-0 bg-transparent p-0 text-xs text-gray-900 shadow-none"><SelectValue /></SelectTrigger><SelectContent align="start" alignItemWithTrigger={false} className="min-w-[100px] rounded border border-[#d8d3c8] bg-white p-1 shadow-md ring-0">{(options as string[]).map((option) => <SelectItem key={option} value={option.toLowerCase()}>{option}</SelectItem>)}</SelectContent></Select></div>)}</div>
          <div className="grid w-full gap-4 py-5 tablet:grid-cols-2 tablet:gap-5 desktop:grid-cols-3 desktop:gap-6">{Array.from({ length: 3 }, (_, row) => packageList.map((packageData) => ({ ...packageData, key: `${row}-${packageData.title}` }))).flat().map((packageData) => <PackageCard key={packageData.key} package={packageData} />)}</div>
          <nav className="flex items-center justify-center gap-4 pt-4 text-xs text-neutral-500" aria-label="Pagination"><button type="button" className="text-neutral-900">First</button><button type="button" aria-label="Previous page" className="text-lg">‹</button>{[1, 2, 3, 4, 5].map((page) => <button key={page} type="button" className={page === 1 ? "font-semibold text-primary" : ""}>{page}</button>)}<button type="button" aria-label="Next page" className="text-lg">›</button><button type="button" className="text-neutral-900">Last</button></nav>
        </Container>
      </section>
    </>
  );
}
