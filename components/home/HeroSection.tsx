/**
 * Home Hero Section
 * Premium hero with headline, description, and dual CTAs
 */

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-primary/5 -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl -z-10" />

      <motion.div
        className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm">
            ✨ Enterprise AI Platform
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
        >
          Automate Complex Workflows with{' '}
          <span className="bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent">
            AI-Powered Intelligence
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Transform your operations with enterprise-grade automation. Save thousands of hours, eliminate errors, and scale
          like never before.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link
            href="/auth/signup"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
        >
          <div>
            <p className="text-2xl font-bold text-accent">100M+</p>
            <p className="text-sm text-muted-foreground">Documents Processed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-accent">5000+</p>
            <p className="text-sm text-muted-foreground">Enterprise Customers</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-accent">99.8%</p>
            <p className="text-sm text-muted-foreground">Processing Accuracy</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
