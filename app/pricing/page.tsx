/**
 * Pricing Page
 */

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PricingHero } from '@/components/pricing/PricingHero'
import { PricingPlans } from '@/components/pricing/PricingPlans'
import { Section } from '@/components/common/Section'

export const metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for NeuraFlow AI. Choose the right plan for your team.',
}

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="py-16 md:py-20 lg:py-24 border-b border-border">
          <PricingHero />
        </Section>
        <PricingPlans />
        <Section className="bg-secondary/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Can I change plans anytime?</h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade, downgrade, or cancel your plan anytime. Changes take effect at the beginning of your next billing cycle.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Do you offer refunds?</h3>
                <p className="text-muted-foreground">
                  We offer a 30-day money-back guarantee if you&apos;re not satisfied with our service.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards, wire transfers, and can set up custom billing for enterprise customers.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
