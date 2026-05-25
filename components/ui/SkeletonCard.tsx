import { cn } from "@/lib/utils";

function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-bg-elevated",
        "bg-gradient-to-r from-bg-elevated via-bg-overlay to-bg-elevated",
        "bg-[length:200%_100%] animate-[shimmer_1.8s_linear_infinite]",
        className
      )}
    />
  );
}

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-bg-border bg-bg-surface p-5 overflow-hidden",
        className
      )}
    >
      {/* Icon placeholder */}
      <div className="flex items-start justify-between mb-4">
        <Skeleton className="w-10 h-10 rounded-xl" />
        <Skeleton className="w-16 h-5 rounded-full" />
      </div>

      {/* Title */}
      <Skeleton className="w-3/4 h-5 rounded mb-2" />
      <Skeleton className="w-1/2 h-3.5 rounded mb-5" />

      {/* Progress bar */}
      <Skeleton className="w-full h-1.5 rounded-full mb-2" />
      <div className="flex justify-between">
        <Skeleton className="w-16 h-3 rounded" />
        <Skeleton className="w-8 h-3 rounded" />
      </div>
    </div>
  );
}

export function SkeletonHero({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-bg-border bg-bg-surface p-7 overflow-hidden",
        className
      )}
    >
      <Skeleton className="w-40 h-4 rounded mb-4" />
      <Skeleton className="w-64 h-9 rounded mb-2" />
      <Skeleton className="w-48 h-5 rounded mb-6" />
      <div className="flex gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex-1">
            <Skeleton className="w-12 h-8 rounded mb-1" />
            <Skeleton className="w-full h-3 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkeletonActivity({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-bg-border bg-bg-surface p-5 overflow-hidden",
        className
      )}
    >
      <Skeleton className="w-32 h-5 rounded mb-1" />
      <Skeleton className="w-48 h-3.5 rounded mb-5" />
      <div className="grid grid-cols-[repeat(16,minmax(0,1fr))] gap-1">
        {Array.from({ length: 112 }).map((_, i) => (
          <Skeleton key={i} className="w-3 h-3 rounded-sm" />
        ))}
      </div>
    </div>
  );
}
