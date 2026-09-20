import { Container } from "@/components/ui/Container";

export default function PackagesLoading() {
  return (
    <>
      <section className="relative -mt-[7.8rem] bg-gold-100 px-4 pt-[calc(9.5rem+2.25rem)] pb-9 tablet:px-8 tablet:pt-[calc(5.5rem+3.5rem)] tablet:pb-14 desktop:pt-[calc(9.5rem+3rem)] desktop:pb-12">
        <Container>
          <div className="animate-pulse space-y-4">
            <div className="h-10 w-3/4 rounded bg-gray-200/60 tablet:h-12" />
            <div className="h-6 w-full rounded bg-gray-200/60" />
            <div className="h-6 w-4/5 rounded bg-gray-200/60" />
          </div>
        </Container>
      </section>

      <section className="bg-[#FEFBF5] pb-14 tablet:pb-20">
        <Container>
          <div className="flex items-center justify-between border-b-[1px] border-[#0A0C0C] py-6 tablet:py-7">
            <div className="h-8 w-64 animate-pulse rounded bg-gray-200/60" />
            <div className="hidden h-8 w-32 animate-pulse rounded bg-gray-200/60 tablet:block" />
          </div>

          <div className="hidden flex-wrap items-center gap-2 py-4 lg:flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-12 w-40 animate-pulse rounded-lg bg-gray-200/60"
              />
            ))}
          </div>

          <div className="grid w-full gap-4 py-5 tablet:grid-cols-2 tablet:gap-5 desktop:grid-cols-3 desktop:gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[10px] border border-[#D8D3C8] bg-white"
              >
                <div className="h-[240px] w-full animate-pulse bg-gray-200/60" />
                <div className="p-4 tablet:p-5">
                  <div className="mb-2 h-5 w-16 animate-pulse rounded bg-gray-200/60" />
                  <div className="mb-3 h-6 w-4/5 animate-pulse rounded bg-gray-200/60" />
                  <div className="mb-4 space-y-2">
                    <div className="h-4 w-32 animate-pulse rounded bg-gray-200/60" />
                    <div className="h-4 w-24 animate-pulse rounded bg-gray-200/60" />
                  </div>
                  <div className="flex items-center justify-between border-t border-[#E9E5DC] pt-4">
                    <div className="h-7 w-28 animate-pulse rounded bg-gray-200/60" />
                    <div className="h-11 w-32 animate-pulse rounded-[6px] bg-gray-200/60" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
