/**
 * Blog Grid Skeleton Loader
 */

export function BlogGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="h-48 bg-muted rounded-lg mb-4"></div>
          <div className="h-6 bg-muted rounded mb-2 w-3/4"></div>
          <div className="h-4 bg-muted rounded mb-2 w-full"></div>
          <div className="h-4 bg-muted rounded mb-4 w-5/6"></div>
          <div className="flex justify-between items-center">
            <div className="h-4 bg-muted rounded w-1/4"></div>
            <div className="h-4 bg-muted rounded w-1/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
