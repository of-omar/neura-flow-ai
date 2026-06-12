export function TestimonialSkeleton() {
  return (
    <div className="rounded-lg border border-border bg-card p-8 animate-pulse">
      <div className="mb-6 flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-muted" />
        <div className="flex-1">
          <div className="mb-2 h-4 w-24 rounded bg-muted" />
          <div className="h-3 w-32 rounded bg-muted" />
        </div>
      </div>
      <div className="space-y-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-4 w-full rounded bg-muted" />
        ))}
      </div>
    </div>
  )
}
