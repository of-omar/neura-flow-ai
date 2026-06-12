/**
 * Card Component
 * Enterprise-grade card with premium styling and hover effects
 */

import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  interactive?: boolean
  as?: React.ElementType
}

export function Card({
  children,
  className,
  hover = true,
  interactive = false,
  as: Component = 'div',
}: CardProps) {
  return (
    <Component
      className={cn(
        'rounded-lg border border-border bg-card p-6',
        hover && 'transition-all duration-300 hover:shadow-lg hover:border-border/80',
        interactive && 'cursor-pointer',
        className
      )}
    >
      {children}
    </Component>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn('mb-4 pb-4 border-b border-border', className)}>{children}</div>
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn('space-y-2', className)}>{children}</div>
}

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export function CardFooter({ children, className }: CardFooterProps) {
  return <div className={cn('mt-4 pt-4 border-t border-border flex gap-2', className)}>{children}</div>
}

interface CardTitleProps {
  children: React.ReactNode
  className?: string
}

export function CardTitle({ children, className }: CardTitleProps) {
  return <h3 className={cn('text-lg font-semibold text-foreground', className)}>{children}</h3>
}

interface CardDescriptionProps {
  children: React.ReactNode
  className?: string
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return <p className={cn('text-sm text-muted-foreground', className)}>{children}</p>
}
