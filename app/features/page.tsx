/**
 * Features Page
 */

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FeaturesHero } from '@/components/features/FeaturesHero'
import { AllFeaturesGrid } from '@/components/features/AllFeaturesGrid'
import { Section } from '@/components/common/Section'

export const metadata = {
  title: 'Features',
  description: 'Explore all powerful features of NeuraFlow AI automation platform',
}

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="py-16 md:py-20 lg:py-24 border-b border-border">
          <FeaturesHero />
        </Section>
        <AllFeaturesGrid />
      </main>
      <Footer />
    </>
  )
}
