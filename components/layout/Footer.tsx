/**
 * Footer Component
 * Professional footer with links, social media, and company info
 */

import Link from 'next/link'
import { Mail, MapPin, Phone, Share2, Heart, ExternalLink } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'
import { Section } from '@/components/common/Section'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground border-t border-border">
      <Section noPadding className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-lg">
                <div className="w-6 h-6 rounded-lg bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-sm">N</span>
                </div>
                <span>NeuraFlow</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Enterprise-grade AI automation platform for modern teams
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <Link href="/features" className="hover:text-primary-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-primary-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-primary-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-3">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <Link href="/contact" className="hover:text-primary-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-foreground transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-3">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <Link href="#" className="hover:text-primary-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-foreground transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-foreground transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/60">Email</p>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-primary-foreground hover:opacity-80 transition-opacity"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/60">Phone</p>
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                    className="text-primary-foreground hover:opacity-80 transition-opacity"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/60">Address</p>
                  <p className="text-primary-foreground">{COMPANY_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-foreground/60">Hours</span>
                <div>
                  <p className="text-primary-foreground">{COMPANY_INFO.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              &copy; {currentYear} NeuraFlow AI. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={COMPANY_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary-foreground/10 transition-colors"
                aria-label="Twitter"
              >
                <Heart className="w-5 h-5" />
              </a>
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary-foreground/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Share2 className="w-5 h-5" />
              </a>
              <a
                href={COMPANY_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary-foreground/10 transition-colors"
                aria-label="GitHub"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  )
}
