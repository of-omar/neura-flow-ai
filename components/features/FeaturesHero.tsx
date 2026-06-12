/**
 * Features Page Hero
 */

'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/common/Section'

export function FeaturesHero() {
  return (
    <Section className="text-center space-y-4 max-w-3xl mx-auto">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Comprehensive Features for Every Use Case
      </motion.h1>
      <motion.p
        className="text-lg text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Powerful automation capabilities designed for enterprise teams. Scale your operations with confidence.
      </motion.p>
    </Section>
  )
}
