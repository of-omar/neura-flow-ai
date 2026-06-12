'use client'

import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="text-center">
        <h2 className="mb-3 text-2xl font-bold text-foreground">Something went wrong!</h2>
        <p className="mb-6 text-muted-foreground">{error.message || 'An unexpected error occurred'}</p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="rounded-lg bg-accent px-6 py-2 font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-lg border border-border px-6 py-2 font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
