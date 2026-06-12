/**
 * Pricing Plans Component
 */

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { mockPricingPlans } from '@/lib/data/pricing'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card'
import { Section } from '@/components/common/Section'
import { Check, X } from 'lucide-react'

export function PricingPlans() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <Section>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {mockPricingPlans.map((plan) => (
          <motion.div key={plan.id} variants={itemVariants} className="h-full">
            <Card
              hover={!plan.isPopular}
              className={`h-full flex flex-col ${
                plan.isPopular ? 'ring-2 ring-accent shadow-lg' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="px-6 py-2 bg-accent/10 border-b border-border -m-6 mb-6 text-sm font-semibold text-accent text-center rounded-t-lg">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="flex items-baseline justify-between">
                  <span>{plan.name}</span>
                </CardTitle>
                {plan.description && (
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                )}
              </CardHeader>

              <CardContent className="space-y-6 flex-1 flex flex-col">
                {/* Pricing */}
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    {plan.price > 0 && <span className="text-muted-foreground">/month</span>}
                  </div>
                  {plan.yearlyPrice && (
                    <p className="text-sm text-muted-foreground mt-2">
                      or ${plan.yearlyPrice}/year (Save {plan.savings}%)
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <Link
                  href={plan.cta.href}
                  className={`py-3 rounded-lg font-semibold text-center transition-colors ${
                    plan.isPopular
                      ? 'bg-accent text-accent-foreground hover:opacity-90'
                      : 'border border-border text-foreground hover:bg-secondary'
                  }`}
                >
                  {plan.cta.label}
                </Link>

                {/* Features */}
                <div className="space-y-3 border-t border-border pt-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? 'text-foreground' : 'text-muted-foreground line-through'
                        }`}
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
