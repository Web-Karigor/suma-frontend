"use client";

import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { useHomepageSection } from "@/hooks/queries/useHomepageSectionContentQuery";

export function AdPlacement() {
  const section = useHomepageSection("add-placement");

  if (!section.image) return null;

  const banner = (
    <div className="relative h-[120px] w-full overflow-hidden rounded-[20px] bg-gray-100 tablet:h-[272px] tablet:rounded-[48px]">
      <CoverImage
        src={section.image}
        alt={section.title || "Advertisement"}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 1446px"
      />
    </div>
  );

  return (
    <section id={section.htmlId} data-section-id={section.id || undefined}>
      <Container className="mb-8">
        {section.link ? (
          <a
            href={section.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {banner}
          </a>
        ) : (
          banner
        )}
      </Container>
    </section>
  );
}
