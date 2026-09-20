import { Container } from "@/components/ui/Container";

export default function HotelDetailLoading() {
  return (
    <main>
      <Container className="pt-6 pb-10 tablet:pt-8">
        {/* Header Skeleton */}
        <div className="flex flex-col gap-4 tablet:flex-row tablet:items-start tablet:justify-between">
          <div className="flex-1">
            <div className="h-10 w-3/4 animate-pulse rounded bg-gray-200/60 tablet:h-12" />
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <div className="h-5 w-32 animate-pulse rounded bg-gray-200/60" />
              <div className="h-5 w-48 animate-pulse rounded bg-gray-200/60" />
            </div>
          </div>
          <div className="h-10 w-32 animate-pulse rounded bg-gray-200/60" />
        </div>

        <div className="mt-6 flex flex-col gap-4 desktop:flex-row desktop:items-start">
          {/* Main Content */}
          <div className="min-w-0 flex-1 space-y-6">
            {/* Gallery Skeleton */}
            <div className="h-[400px] w-full animate-pulse rounded-lg bg-gray-200/60 tablet:h-[500px]" />

            {/* Highlights Skeleton */}
            <div className="space-y-4">
              <div className="h-8 w-48 animate-pulse rounded bg-gray-200/60" />
              <div className="grid gap-4 tablet:grid-cols-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="size-6 animate-pulse rounded bg-gray-200/60" />
                    <div className="h-5 flex-1 animate-pulse rounded bg-gray-200/60" />
                  </div>
                ))}
              </div>
            </div>

            {/* About Skeleton */}
            <div className="space-y-4">
              <div className="h-8 w-32 animate-pulse rounded bg-gray-200/60" />
              <div className="space-y-2">
                <div className="h-4 w-full animate-pulse rounded bg-gray-200/60" />
                <div className="h-4 w-full animate-pulse rounded bg-gray-200/60" />
                <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200/60" />
              </div>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="w-full shrink-0 desktop:w-[380px]">
            <div className="sticky top-24 rounded-lg border border-gray-200 bg-white p-6">
              <div className="mb-4 h-8 w-32 animate-pulse rounded bg-gray-200/60" />
              <div className="space-y-4">
                <div className="h-12 w-full animate-pulse rounded bg-gray-200/60" />
                <div className="h-12 w-full animate-pulse rounded bg-gray-200/60" />
                <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200/60" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Similar Hotels Skeleton */}
      <section className="bg-paper py-16 tablet:py-20">
        <Container>
          <div className="mb-8 h-8 w-48 animate-pulse rounded bg-gray-200/60" />
          <div className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="h-48 w-full animate-pulse bg-gray-200/60 tablet:h-56" />
                <div className="p-4 tablet:p-5">
                  <div className="mb-2 h-5 w-32 animate-pulse rounded bg-gray-200/60" />
                  <div className="mb-3 h-6 w-3/4 animate-pulse rounded bg-gray-200/60" />
                  <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-200/60" />
                  <div className="mb-4 h-4 w-4/5 animate-pulse rounded bg-gray-200/60" />
                  <div className="flex items-center justify-between">
                    <div className="h-6 w-28 animate-pulse rounded bg-gray-200/60" />
                    <div className="h-10 w-24 animate-pulse rounded bg-gray-200/60" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
