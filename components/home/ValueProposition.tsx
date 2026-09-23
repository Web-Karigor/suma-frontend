"use client";

import { Container } from "@/components/ui/Container";
import { useHomepageSection } from "@/hooks/queries/useHomepageSectionContentQuery";

export function ValueProposition() {
  const section = useHomepageSection("Legacy", {
    title: "Built on Legacy, Driven by Innovation",
    subtitle:
      "Two decades of experience across Hajj and Umrah, visa, hotels, holidays, custom tours, medical tourism, and corporate travel, always calm, confident and considered.",
  });

  return (
    <section
      id={section.htmlId}
      data-section-id={section.id || undefined}
      className="bg-neutral-50 py-10"
    >
      <Container className="flex flex-col items-center gap-2.5">
        <h2 className="w-full max-w-[588px] text-center text-[32px] leading-[108%] font-semibold tracking-[-0.005em] text-black tablet:text-[56px]">
          {section.title}
        </h2>
        {section.subtitle ? (
          <p className="w-full max-w-[994px] text-center text-[15px] leading-[159%] font-medium text-gray-500 tablet:text-[18px]">
            {section.subtitle}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
