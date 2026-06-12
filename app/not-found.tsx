import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="text-center">
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-accent">404</h1>
        </div>
        <h2 className="mb-3 text-2xl font-bold text-foreground">Page Not Found</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-accent px-8 py-3 font-medium text-accent-foreground transition-colors hover:bg-accent/90"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
