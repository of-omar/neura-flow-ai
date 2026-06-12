/**
 * All Features Grid Component
 */

'use client'

import { motion } from 'framer-motion'
import { mockFeatures } from '@/lib/data/features'
import { Card, CardContent, CardTitle } from '@/components/common/Card'
import { Section } from '@/components/common/Section'
import * as Icons from 'lucide-react'

export function AllFeaturesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const getIcon = (iconName: string) => {
    const Icon = Icons[iconName as keyof typeof Icons] as any
    return Icon ? <Icon className="w-6 h-6 text-accent" /> : null
  }

  return (
    <Section>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {mockFeatures.map((feature) => (
          <motion.div key={feature.id} variants={itemVariants}>
            <Card hover className="h-full">
              <CardContent className="space-y-3">
                <div className="p-3 w-fit rounded-lg bg-accent/10">{getIcon(feature.icon)}</div>
                <CardTitle>{feature.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
                {feature.metrics && (
                  <div className="pt-4 mt-4 border-t border-border space-y-2">
                    {feature.metrics.map((metric, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{metric.label}</span>
                        <span className="font-semibold text-accent">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
