/**
 * Contact Page
 */

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ContactForm } from '@/components/contact/ContactForm'
import { Section } from '@/components/common/Section'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with NeuraFlow AI. We&apos;re here to help you succeed.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="py-16 md:py-20 lg:py-24 border-b border-border text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Have questions about NeuraFlow AI? We&apos;re here to help. Reach out and let&apos;s discuss how we can
              help your business.
            </p>
          </div>
        </Section>
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
