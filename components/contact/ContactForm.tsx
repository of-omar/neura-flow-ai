/**
 * Contact Form Component
 */

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card'
import { Section } from '@/components/common/Section'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { COMPANY_INFO, ERROR_MESSAGES, SUCCESS_MESSAGES } from '@/lib/constants'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Sales',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSuccess(true)
      setFormData({ name: '', email: '', subject: 'Sales', message: '' })
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(ERROR_MESSAGES.generic)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Section className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-foreground">Get In Touch</h2>
          <p className="text-muted-foreground">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Email</p>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-accent hover:opacity-80">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Phone</p>
                <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="text-accent hover:opacity-80">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Address</p>
                <p className="text-muted-foreground">{COMPANY_INFO.address}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option>Sales</option>
                    <option>Support</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                {success && (
                  <div className="p-4 rounded-lg bg-green-500/10 text-green-700 text-sm">
                    {SUCCESS_MESSAGES.contactForm}
                  </div>
                )}

                {error && (
                  <div className="p-4 rounded-lg bg-destructive/10 text-destructive text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}
