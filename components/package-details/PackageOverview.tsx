import { Container } from "@/components/ui/Container";

type PackageOverviewProps = {
  description: string;
};

export function PackageOverview({
  description,
}: PackageOverviewProps) {
  return (
    <section className="bg-white py-10 md:py-12 lg:py-14">
      <Container>
        {/* Figma Width: 1740px */}
        <div className="mx-auto w-full max-w-[1740px]">
          {/* Title */}
          <h2 className="mb-[10px] text-[22px] font-bold leading-[1.2] text-hero md:text-[24px]">
            Overview
          </h2>

          {/* Description */}
          <p className="max-w-none whitespace-pre-line text-[14px] leading-[1.55] text-neutral-600 md:text-[15px]">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}