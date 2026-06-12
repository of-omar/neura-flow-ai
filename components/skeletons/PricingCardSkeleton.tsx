export function PricingCardSkeleton() {
  return (
    <div className="rounded-lg border border-border bg-card p-8 animate-pulse">
      <div className="mb-4 h-8 w-24 rounded bg-muted" />
      <div className="mb-6 h-12 w-20 rounded bg-muted" />
      <div className="mb-6 space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-4 w-full rounded bg-muted" />
        ))}
      </div>
      <div className="h-10 w-full rounded bg-muted" />
    </div>
  )
}
