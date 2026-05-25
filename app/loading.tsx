import { SkeletonCard, SkeletonHero, SkeletonActivity } from "@/components/ui/SkeletonCard";

export default function Loading() {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      {/* Header skeleton */}
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1.5">
          <div className="w-16 h-3 rounded bg-bg-elevated animate-pulse" />
          <div className="w-28 h-5 rounded bg-bg-elevated animate-pulse" />
        </div>
        <div className="flex gap-2">
          <div className="w-36 h-8 rounded-xl bg-bg-elevated animate-pulse" />
          <div className="w-8 h-8 rounded-xl bg-bg-elevated animate-pulse" />
        </div>
      </div>

      {/* Bento grid skeleton */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Hero — spans 2 cols */}
        <SkeletonHero className="col-span-full lg:col-span-2" />

        {/* Stats cards */}
        <SkeletonCard />
        <SkeletonCard />

        {/* Course cards */}
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}

        {/* Activity — spans 2 cols */}
        <SkeletonActivity className="col-span-full lg:col-span-2" />

        {/* Quick actions */}
        <SkeletonCard />
      </div>
    </div>
  );
}
