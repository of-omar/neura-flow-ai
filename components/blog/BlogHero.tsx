/**
 * Blog Hero Section
 */

'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/common/Section'

export function BlogHero() {
  return (
    <Section className="text-center space-y-4 max-w-3xl mx-auto">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Insights from Our Team
      </motion.h1>
      <motion.p
        className="text-lg text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Learn about AI automation, best practices, and how to get the most from NeuraFlow.
      </motion.p>
    </Section>
  )
}
