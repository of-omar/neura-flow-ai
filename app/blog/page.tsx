/**
 * Blog Page
 */

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { BlogHero } from '@/components/blog/BlogHero'
import { BlogGrid } from '@/components/blog/BlogGrid'
import { Section } from '@/components/common/Section'

export const metadata = {
  title: 'Blog',
  description: 'Read insights, tutorials, and updates from the NeuraFlow AI team',
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="py-16 md:py-20 lg:py-24 border-b border-border">
          <BlogHero />
        </Section>
        <BlogGrid />
      </main>
      <Footer />
    </>
  )
}
