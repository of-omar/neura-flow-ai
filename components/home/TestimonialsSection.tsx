/**
 * Home Testimonials Section
 * Display customer testimonials with ratings
 */

'use client'

import { motion } from 'framer-motion'
import { mockTestimonials } from '@/lib/data/testimonials'
import { Card, CardContent } from '@/components/common/Card'
import { Section } from '@/components/common/Section'
import { Star } from 'lucide-react'

export function TestimonialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      <div className="space-y-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Trusted by Leading Teams</h2>
          <p className="text-lg text-muted-foreground">See what customers are saying about NeuraFlow AI</p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {mockTestimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card hover className="h-full flex flex-col">
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-border'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground flex-1">{testimonial.content}</p>

                  {/* Author */}
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
