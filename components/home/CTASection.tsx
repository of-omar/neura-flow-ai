/**
 * CTA Section
 * Final call-to-action to drive conversions
 */

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/common/Section'

export function CTASection() {
  return (
    <Section className="bg-gradient-to-r from-primary via-primary to-primary/90">
      <motion.div
        className="text-center space-y-8 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Start your free trial today and see how NeuraFlow AI can help your team. No credit card required.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/auth/signup"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
          >
            Contact Sales
          </Link>
        </div>

        <p className="text-sm text-primary-foreground/60 pt-4">
          Join 5000+ companies using NeuraFlow AI to automate their workflows
        </p>
      </motion.div>
    </Section>
  )
}
