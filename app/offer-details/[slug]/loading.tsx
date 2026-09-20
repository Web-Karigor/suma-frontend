import { Container } from "@/components/ui/Container";

export default function OfferDetailLoading() {
  return (
    <main>
      {/* Hero Skeleton */}
      <div className="relative h-[300px] w-full bg-gray-200/60 tablet:h-[400px] desktop:h-[500px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-4xl px-4">
            <div className="mx-auto mb-4 h-12 w-3/4 animate-pulse rounded bg-gray-300/80 tablet:h-16" />
            <div className="mx-auto h-6 w-1/2 animate-pulse rounded bg-gray-300/80" />
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <Container className="py-8 tablet:py-12">
        <div className="mx-auto max-w-4xl">
          {/* Badges Skeleton */}
          <div className="mb-6 flex flex-wrap gap-3">
            <div className="h-8 w-24 animate-pulse rounded-full bg-gray-200/60" />
            <div className="h-8 w-32 animate-pulse rounded-full bg-gray-200/60" />
            <div className="h-8 w-28 animate-pulse rounded-full bg-gray-200/60" />
          </div>

          {/* Content Skeleton */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="h-6 w-full animate-pulse rounded bg-gray-200/60" />
              <div className="h-6 w-full animate-pulse rounded bg-gray-200/60" />
              <div className="h-6 w-5/6 animate-pulse rounded bg-gray-200/60" />
            </div>

            <div className="space-y-3">
              <div className="h-6 w-full animate-pulse rounded bg-gray-200/60" />
              <div className="h-6 w-full animate-pulse rounded bg-gray-200/60" />
              <div className="h-6 w-4/5 animate-pulse rounded bg-gray-200/60" />
            </div>

            {/* Call to Action Skeleton */}
            <div className="mt-8 rounded-lg border border-gray-200 bg-white p-6">
              <div className="mb-4 h-8 w-48 animate-pulse rounded bg-gray-200/60" />
              <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200/60" />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
