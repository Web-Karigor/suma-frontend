import { Container } from "@/components/ui/Container";

type PackageOverviewProps = {
  description: string;
};

export function PackageOverview({ description }: PackageOverviewProps) {
  return (
    <section className="bg-gold-50 py-10 tablet:py-12 desktop-xl:py-14">
      <Container className="desktop-xl:!px-0">
        <div className="flex w-full flex-col gap-2.5">
          <h2 className="text-[22px] leading-[1.2] font-semibold text-hero tablet:text-[24px]">
            Overview
          </h2>
          <p className="text-[14px] leading-[1.6] font-normal text-neutral-600 tablet:text-[16px]">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
