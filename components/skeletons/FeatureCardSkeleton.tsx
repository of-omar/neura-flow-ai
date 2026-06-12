/**
 * Feature Card Skeleton Loader
 */

export function FeatureCardSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="animate-pulse p-6 border border-border rounded-lg">
          <div className="h-12 w-12 bg-muted rounded mb-4"></div>
          <div className="h-6 bg-muted rounded mb-2 w-3/4"></div>
          <div className="h-4 bg-muted rounded mb-2 w-full"></div>
          <div className="h-4 bg-muted rounded w-5/6"></div>
        </div>
      ))}
    </div>
  );
}
