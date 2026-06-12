/**
 * Pricing Hero Section
 */

'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/common/Section'

export function PricingHero() {
  return (
    <Section className="text-center space-y-4 max-w-3xl mx-auto">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Simple, Transparent Pricing
      </motion.h1>
      <motion.p
        className="text-lg text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Choose the perfect plan for your team. All plans include a 14-day free trial, no credit card required.
      </motion.p>
    </Section>
  )
}
