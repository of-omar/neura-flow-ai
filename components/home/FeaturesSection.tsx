/**
 * Home Features Section
 * Showcase key features with icons and descriptions
 */

'use client'

import { motion } from 'framer-motion'
import { mockFeatures } from '@/lib/data/features'
import { Card, CardContent, CardTitle } from '@/components/common/Card'
import { Section } from '@/components/common/Section'
import * as Icons from 'lucide-react'

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  // Get icon component by name
  const getIcon = (iconName: string) => {
    const Icon = Icons[iconName as keyof typeof Icons] as any
    return Icon ? <Icon className="w-6 h-6 text-accent" /> : null
  }

  return (
    <Section className="bg-secondary/30">
      <div className="space-y-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Powerful Features Built for Scale</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to automate complex workflows and scale your operations
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {mockFeatures.slice(0, 6).map((feature, index) => (
            <motion.div key={feature.id} variants={itemVariants}>
              <Card hover className="h-full flex flex-col">
                <CardContent className="space-y-3 flex-1">
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

        {/* View All Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="/features"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
          >
            View All Features
            <Icons.ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </Section>
  )
}
