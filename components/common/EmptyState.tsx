import { Search } from 'lucide-react'

interface EmptyStateProps {
  title: string
  description: string
  icon?: React.ReactNode
  action?: {
    label: string
    onClick: () => void
  }
}

export function EmptyState({
  title,
  description,
  icon = <Search className="mx-auto h-12 w-12 text-muted-foreground" />,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex min-h-96 flex-col items-center justify-center rounded-lg border border-border bg-card/50 px-6 py-12 text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mb-6 max-w-md text-sm text-muted-foreground">{description}</p>
      {action && (
        <button
          onClick={action.onClick}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
        >
          {action.label}
        </button>
      )}
    </div>
  )
}
