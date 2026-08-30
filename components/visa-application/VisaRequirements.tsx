import { Container } from "@/components/ui/Container";
import { visaRequirements } from "@/lib/visa-data";

export function VisaRequirements() {
  return (
    <section className="bg-[#E8F7F8] pb-16 tablet:pb-24">
      <Container>
        <h2 className="text-lg font-semibold text-neutral-950">Visa Requirements</h2>
        <div className="mt-5 space-y-2 text-xs leading-[1.45] text-neutral-950">
          {visaRequirements.map((item, index) => <p key={`${item}-${index}`} className={index === 1 || index === 2 ? "font-semibold" : undefined}>{item}</p>)}
          <h3 className="pt-4 font-semibold">For Business Person:-</h3>
          <p>Renewal Trade license copy with notary public (English Translated). Memorandum of Article for limited company if the applicant&apos;s name not mention in trade license.</p>
          <h3 className="pt-4 font-semibold">For Job Holder:-</h3>
          <p>No Objection Certificate (NOC) from Employer with workplace&apos;s official Cell phone and TnT numbers. Visiting Card and Salary Bank Statement.</p>
          <h3 className="pt-4 font-semibold">For Student:-</h3>
          <p>Student ID card copy. Recommendation letter or leave letter from the educational institute. Birth Certificate.</p>
          <h3 className="pt-4 font-semibold">Others:-</h3>
          <p>Marriage Certificate Copy or Nikahnama or the contract of marriage (family application).</p>
          <p className="pt-4">*** Consular officers reserve the rights to request more additional documents as deemed necessary ***</p>
          <p>Visa Fee: BDT 6,000 (Non-refundable)</p>
          <p>Note: Delivery time is approx. 30 to 45 days or depending on Embassy.</p>
        </div>
      </Container>
    </section>
  );
}
