import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gray-200/60",
        className
      )}
      {...props}
    />
  );
}

// Card Skeleton
export function CardSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <Skeleton className="h-48 w-full rounded-none tablet:h-56 desktop:h-64" />
      <div className="p-4 tablet:p-5">
        <Skeleton className="mb-2 h-4 w-20" />
        <Skeleton className="mb-3 h-6 w-3/4" />
        <Skeleton className="mb-2 h-4 w-full" />
        <Skeleton className="mb-4 h-4 w-2/3" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-10 w-28" />
        </div>
      </div>
    </div>
  );
}

// Package Card Skeleton
export function PackageCardSkeleton() {
  return (
    <div className="group relative overflow-hidden rounded-[10px] border border-[#D8D3C8] bg-white transition-shadow hover:shadow-lg">
      <div className="relative">
        <Skeleton className="h-[220px] w-full rounded-none tablet:h-[240px] desktop:h-[260px]" />
      </div>
      <div className="p-4 tablet:p-5">
        <Skeleton className="mb-2 h-5 w-16" />
        <Skeleton className="mb-3 h-6 w-4/5" />
        <div className="mb-4 space-y-2">
          <div className="flex items-center gap-2">
            <Skeleton className="size-4" />
            <Skeleton className="h-4 w-32" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="size-4" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-[#E9E5DC] pt-4">
          <div>
            <Skeleton className="mb-1 h-3 w-16" />
            <Skeleton className="h-7 w-28" />
          </div>
          <Skeleton className="h-11 w-32 rounded-[6px]" />
        </div>
      </div>
    </div>
  );
}

// Hotel Card Skeleton
export function HotelCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Skeleton className="h-48 w-full rounded-none tablet:h-56" />
      <div className="p-4 tablet:p-5">
        <div className="mb-2 flex items-center justify-between">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-5 w-20" />
        </div>
        <Skeleton className="mb-3 h-6 w-3/4" />
        <Skeleton className="mb-2 h-4 w-full" />
        <Skeleton className="mb-4 h-4 w-4/5" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-28" />
          <Skeleton className="h-10 w-24" />
        </div>
      </div>
    </div>
  );
}

// Search Result Card Skeleton
export function SearchResultSkeleton() {
  return (
    <div className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm tablet:gap-5 tablet:p-5">
      <Skeleton className="h-24 w-32 shrink-0 rounded-lg tablet:h-32 tablet:w-44" />
      <div className="flex min-w-0 flex-1 flex-col">
        <Skeleton className="mb-2 h-6 w-20 rounded-md" />
        <Skeleton className="mb-2 h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="mt-1 h-4 w-4/5" />
      </div>
    </div>
  );
}

// Hero Section Skeleton
export function HeroSkeleton() {
  return (
    <div className="relative h-[500px] w-full tablet:h-[600px] desktop:h-[700px]">
      <Skeleton className="h-full w-full rounded-none" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl px-4">
          <Skeleton className="mx-auto mb-4 h-12 w-3/4 tablet:h-16" />
          <Skeleton className="mx-auto h-6 w-1/2 tablet:h-8" />
        </div>
      </div>
    </div>
  );
}

// List Skeleton (for generic lists)
export function ListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <Skeleton className="size-12 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

// Grid Skeleton (for card grids)
export function GridSkeleton({ 
  count = 6, 
  type = "card" 
}: { 
  count?: number; 
  type?: "card" | "package" | "hotel" 
}) {
  const SkeletonComponent = 
    type === "package" ? PackageCardSkeleton :
    type === "hotel" ? HotelCardSkeleton :
    CardSkeleton;

  return (
    <div className="grid gap-4 tablet:grid-cols-2 tablet:gap-5 desktop:grid-cols-3 desktop:gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonComponent key={i} />
      ))}
    </div>
  );
}

// Text Skeleton
export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton 
          key={i} 
          className={cn(
            "h-4",
            i === lines - 1 ? "w-2/3" : "w-full"
          )} 
        />
      ))}
    </div>
  );
}

// Page Header Skeleton
export function PageHeaderSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-10 w-3/4 tablet:h-12 desktop:h-14" />
      <Skeleton className="h-6 w-full tablet:h-7" />
      <Skeleton className="h-6 w-4/5 tablet:h-7" />
    </div>
  );
}

// Full Page Skeleton
export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-teal-100">
      <div className="container mx-auto px-4 py-8 tablet:px-8 tablet:py-12 desktop:py-16">
        <PageHeaderSkeleton />
        <div className="mt-8 tablet:mt-12">
          <GridSkeleton count={6} />
        </div>
      </div>
    </div>
  );
}
