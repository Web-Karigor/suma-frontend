import { Container } from "@/components/ui/Container";

type VisaRequirementsProps = {
  html: string;
};

export function VisaRequirements({ html }: VisaRequirementsProps) {
  return (
    <section className=" pb-16 tablet:pb-24">
      <Container className="max-w-[1446px]">
        <h2 className="text-[18px] font-semibold leading-[158%] text-black">
          Visa Requirements
        </h2>
        <div
          className="visa-requirements-html mt-5"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </section>
  );
}
