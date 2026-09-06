import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { CmsPageData } from "@/types/cms-page";

export function CmsPageView({ page }: { page: CmsPageData }) {
  return (
    <main className="overflow-x-hidden bg-white">
      <section className="relative bg-[#DCEFF0] pt-28 pb-12 tablet:pt-32 tablet:pb-16 desktop:pt-36 desktop:pb-20">
        {page.banner ? (
          <>
            <Image
              src={page.banner}
              alt={page.headerTitle}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-overlay-black-48" />
          </>
        ) : null}

        <Container
          className={`relative z-10 flex flex-col gap-4 ${page.banner ? "text-white" : "text-neutral-950"}`}
        >
          <h1 className="max-w-[900px] text-4xl leading-[1.08] font-semibold tracking-[-0.03em] tablet:text-5xl desktop:text-[56px]">
            {page.headerTitle}
          </h1>
          {page.headerSubtitle ? (
            <p
              className={`max-w-[640px] text-base tablet:text-lg ${page.banner ? "text-white/90" : "text-neutral-700"}`}
            >
              {page.headerSubtitle}
            </p>
          ) : null}
          {page.headerDescription ? (
            <p
              className={`max-w-[700px] text-sm leading-relaxed tablet:text-base ${page.banner ? "text-white/80" : "text-neutral-600"}`}
            >
              {page.headerDescription}
            </p>
          ) : null}
        </Container>
      </section>

      <section className="bg-white py-12 tablet:py-16 desktop:py-20">
        <Container className="max-w-[960px]">
          {page.contentHtml ? (
            <div
              className="cms-page-content prose prose-neutral max-w-none text-[16px] leading-[1.7] text-neutral-700 [&_a]:text-primary [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-[28px] [&_h2]:font-semibold [&_h2]:text-neutral-950 [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-[22px] [&_h3]:font-semibold [&_li]:my-1 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-5"
              dangerouslySetInnerHTML={{ __html: page.contentHtml }}
            />
          ) : (
            <p className="text-[16px] leading-relaxed text-neutral-500">
              Content will be available soon.
            </p>
          )}
        </Container>
      </section>
    </main>
  );
}
