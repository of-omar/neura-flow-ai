/**
 * Blog Grid Component
 */

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { mockBlogPosts } from '@/lib/data/blog'
import { Card, CardContent } from '@/components/common/Card'
import { Section } from '@/components/common/Section'
import { Calendar, User, Clock, ArrowRight } from 'lucide-react'

export function BlogGrid() {
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
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {mockBlogPosts.map((post) => (
          <motion.div key={post.id} variants={itemVariants}>
            <Card hover className="h-full flex flex-col overflow-hidden cursor-pointer">
              {/* Image */}
              <div className="relative h-48 w-full bg-secondary overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-accent">{post.category}</span>
                </div>
              </div>

              <CardContent className="space-y-3 flex-1 flex flex-col pt-4">
                {/* Category Badge */}
                <div className="flex gap-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground line-clamp-2 flex-1">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>

                {/* Meta Info */}
                <div className="pt-4 border-t border-border space-y-2">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime} min read
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <User className="w-4 h-4" />
                    {post.author.name}
                  </div>
                </div>

                {/* Read More */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all mt-4 font-medium"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
