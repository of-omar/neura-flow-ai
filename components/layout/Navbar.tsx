/**
 * Navbar Component
 * Responsive navigation with dark mode toggle and mobile menu
 */

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { NAV_LINKS, NAV_AUTH_LINKS } from '@/lib/constants'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Prevent hydration mismatch by waiting for client mount
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold">N</span>
            </div>
            <span className="hidden sm:inline">NeuraFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {NAV_LINKS.map((link) => (
              <motion.div key={link.href} variants={itemVariants}>
                <Link
                  href={link.href}
                  className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle dark mode"
              suppressHydrationWarning
            >
              {mounted ? (
                theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground/60" />
                )
              ) : (
                <Sun className="w-5 h-5 text-yellow-500" />
              )}
            </button>

            {/* Desktop Auth Links */}
            <div className="hidden md:flex items-center gap-3">
              {NAV_AUTH_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    link.label === 'Log In'
                      ? 'text-foreground/80 hover:text-foreground text-sm font-medium transition-colors'
                      : 'px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition-opacity text-sm font-medium'
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden pb-4 space-y-2 border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-border space-y-2">
              {NAV_AUTH_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={
                    link.label === 'Log In'
                      ? 'block px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-secondary rounded-lg transition-colors'
                      : 'block px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition-opacity'
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
