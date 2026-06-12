/**
 * Enterprise Constants and Configuration
 * Design tokens, animations, validation rules, and app configuration
 */

// Design Tokens
export const COLORS = {
  primary: '#1f2937',
  secondary: '#3b82f6',
  accent: '#3b82f6',
  destructive: '#ef4444',
  background: '#ffffff',
  foreground: '#0f1419',
  muted: '#e5e7eb',
  border: '#e5e7eb',
  dark: {
    background: '#0f1419',
    foreground: '#f3f4f6',
    card: '#1a202c',
    border: '#374151',
  },
};

export const SPACING = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '2.5rem',
  '3xl': '3rem',
  '4xl': '4rem',
};

export const TYPOGRAPHY = {
  headingXL: {
    fontSize: '3rem',
    lineHeight: '1.2',
    fontWeight: '700',
  },
  headingLg: {
    fontSize: '2.25rem',
    lineHeight: '1.3',
    fontWeight: '700',
  },
  headingMd: {
    fontSize: '1.875rem',
    lineHeight: '1.4',
    fontWeight: '600',
  },
  headingSm: {
    fontSize: '1.5rem',
    lineHeight: '1.4',
    fontWeight: '600',
  },
  bodyLg: {
    fontSize: '1.125rem',
    lineHeight: '1.75',
    fontWeight: '400',
  },
  body: {
    fontSize: '1rem',
    lineHeight: '1.5',
    fontWeight: '400',
  },
  bodySm: {
    fontSize: '0.875rem',
    lineHeight: '1.5',
    fontWeight: '400',
  },
};

export const ANIMATIONS = {
  duration: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  easing: {
    linear: 'linear',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    cubic: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Navigation Configuration
export const NAV_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const NAV_AUTH_LINKS = [
  { label: 'Log In', href: '/auth/login' },
  { label: 'Sign Up', href: '/auth/signup' },
];

// Form Validation Rules
export const VALIDATION = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    minLength: 5,
    maxLength: 255,
  },
  password: {
    minLength: 8,
    maxLength: 128,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
  },
  name: {
    minLength: 2,
    maxLength: 100,
  },
  message: {
    minLength: 10,
    maxLength: 5000,
  },
};

// API Configuration
export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.neuraflow.ai',
  timeout: 30000,
  retryAttempts: 3,
  retryDelay: 1000,
};

// Feature Flags
export const FEATURES = {
  darkMode: true,
  blog: true,
  newsletter: true,
  contactForm: true,
  analytics: true,
  chatSupport: false,
};

// Pagination
export const PAGINATION = {
  defaultPageSize: 12,
  maxPageSize: 100,
};

// Cache Configuration
export const CACHE_DURATIONS = {
  short: 60 * 1000, // 1 minute
  medium: 5 * 60 * 1000, // 5 minutes
  long: 60 * 60 * 1000, // 1 hour
  infinite: 24 * 60 * 60 * 1000, // 24 hours
};

// SEO Configuration
export const SEO = {
  siteName: 'NeuraFlow AI',
  siteUrl: 'https://neuraflow.ai',
  description: 'Enterprise-grade AI automation platform for modern teams',
  keywords: ['AI', 'automation', 'SaaS', 'enterprise', 'workflow'],
  ogImage: '/og-image.png',
  twitterHandle: '@neuraflowai',
};

// Company Information
export const COMPANY_INFO = {
  name: 'NeuraFlow AI',
  email: 'support@neuraflow.ai',
  phone: '+1 (555) 123-4567',
  address: '123 Innovation Drive, San Francisco, CA 94105',
  hours: 'Monday - Friday, 9:00 AM - 6:00 PM PST',
  social: {
    twitter: 'https://twitter.com/neuraflowai',
    linkedin: 'https://linkedin.com/company/neuraflow',
    github: 'https://github.com/neuraflow',
  },
};

// Error Messages
export const ERROR_MESSAGES = {
  generic: 'Something went wrong. Please try again.',
  network: 'Network error. Please check your connection.',
  notFound: 'The requested resource was not found.',
  unauthorized: 'You are not authorized to access this resource.',
  serverError: 'Server error. Please try again later.',
  validation: {
    email: 'Please enter a valid email address.',
    password: 'Password must be at least 8 characters with uppercase, lowercase, number, and special character.',
    name: 'Name must be between 2 and 100 characters.',
    required: 'This field is required.',
  },
};

// Success Messages
export const SUCCESS_MESSAGES = {
  contactForm: 'Thank you! We&apos;ll get back to you soon.',
  subscription: 'Successfully subscribed to our newsletter.',
  formSubmit: 'Form submitted successfully.',
};

// Blog Configuration
export const BLOG_CONFIG = {
  postsPerPage: 12,
  featuredPostsCount: 3,
  relatedPostsCount: 3,
};

// Pricing Tier IDs
export const PRICING_TIERS = {
  free: 'tier-free',
  pro: 'tier-pro',
  enterprise: 'tier-enterprise',
};

// Debounce Delays
export const DEBOUNCE_DELAYS = {
  search: 300,
  input: 500,
  scroll: 100,
};

// Z-Index Scale
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  backdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
};
