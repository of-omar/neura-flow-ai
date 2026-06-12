/**
 * Section Component
 * Reusable layout wrapper with consistent spacing and styling
 */

import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  fullWidth?: boolean
  noPadding?: boolean
  noGap?: boolean
}

export function Section({
  children,
  className,
  id,
  fullWidth = false,
  noPadding = false,
  noGap = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'w-full',
        !noPadding && 'py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8',
        className
      )}
    >
      <div
        className={cn(
          !fullWidth && 'max-w-7xl mx-auto',
          !noGap && 'space-y-8'
        )}
      >
        {children}
      </div>
    </section>
  )
}
