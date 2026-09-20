import { Container } from "@/components/ui/Container";

export default function SearchLoading() {
  return (
    <main className="min-h-screen bg-teal-100 pt-24 pb-16 tablet:pt-28 tablet:pb-20 desktop:pt-32 desktop:pb-24">
      <Container>
        <div className="mb-8 tablet:mb-10">
          <div className="h-10 w-64 animate-pulse rounded bg-gray-200/60 tablet:h-12" />
          <div className="mt-2 h-6 w-96 animate-pulse rounded bg-gray-200/60" />
        </div>

        <div className="py-16 text-center tablet:py-20">
          <div className="mx-auto mb-4 size-12 animate-spin rounded-full border-4 border-teal-200 border-t-teal-600"></div>
          <p className="text-neutral-600">Searching...</p>
        </div>

        <div className="mt-8 grid gap-4 tablet:gap-5 desktop:gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm tablet:gap-5 tablet:p-5"
            >
              <div className="h-24 w-32 shrink-0 animate-pulse rounded-lg bg-gray-200/60 tablet:h-32 tablet:w-44" />
              <div className="flex min-w-0 flex-1 flex-col space-y-2">
                <div className="h-6 w-20 animate-pulse rounded-md bg-gray-200/60" />
                <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200/60" />
                <div className="h-4 w-full animate-pulse rounded bg-gray-200/60" />
                <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200/60" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
