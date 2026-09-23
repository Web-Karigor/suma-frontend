"use client";

import { Container } from "@/components/ui/Container";
import { useHomepageSection } from "@/hooks/queries/useHomepageSectionContentQuery";

export function AdPlacement() {
  const section = useHomepageSection("add-placement", {
    title: "Ad Placement",
  });

  return (
    <section id={section.htmlId} data-section-id={section.id || undefined}>
      <Container className="mb-8">
        <div className="flex h-[120px] w-full items-center justify-center rounded-[20px] bg-gray-100 px-4 tablet:h-[272px] tablet:rounded-[48px] tablet:px-6">
          <div className="flex h-[70px] w-full max-w-[1446px] flex-col items-center justify-center rounded-xl bg-teal-200 px-3 tablet:h-[148px] tablet:rounded-2xl tablet:px-6">
            <p className="text-center text-[28px] font-semibold leading-[108%] tracking-[-0.5%] text-black tablet:text-[56px]">
              {section.title}
            </p>
            {section.subtitle ? (
              <p className="mt-1 max-w-3xl text-center text-xs font-medium leading-snug text-black/70 tablet:mt-2 tablet:text-base">
                {section.subtitle}
              </p>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
