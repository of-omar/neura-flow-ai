/**
 * Enterprise-Grade TypeScript Types for NeuraFlow AI
 * Strict typing for all entities and API responses
 */

// Feature Types
export interface Feature {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'automation' | 'analytics' | 'collaboration';
  metrics?: {
    label: string;
    value: string | number;
  }[];
}

// Pricing Types
export type BillingCycle = 'monthly' | 'yearly';

export interface PricingTier {
  id: string;
  name: string;
  description?: string;
  price: number;
  billingCycle: BillingCycle;
  features: PricingFeature[];
  cta: {
    label: string;
    href: string;
  };
  isPopular?: boolean;
  limits?: Record<string, string | number>;
  support?: string;
}

export interface PricingFeature {
  name: string;
  included: boolean;
  limit?: string | number;
}

export interface PricingPlan extends PricingTier {
  yearlyPrice?: number;
  savings?: number;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  company: string;
  companyLogo?: string;
  avatar?: string;
  rating: number; // 1-5
  date?: string;
}

// Blog Types
export type BlogCategory = 'AI' | 'Automation' | 'Best Practices' | 'Company' | 'Product';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  image: string;
  publishedAt: Date | string;
  updatedAt?: Date | string;
  readTime: number;
  featured?: boolean;
  tags?: string[];
}

// Company Types
export interface Company {
  id: string;
  name: string;
  logo: string;
  description?: string;
}

// Statistics Types
export interface Statistic {
  id: string;
  label: string;
  value: string | number;
  suffix?: string;
  icon?: string;
  description?: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: 'Sales' | 'Support' | 'Partnership' | 'Other';
  message: string;
  agreeToContact: boolean;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  data?: ContactFormData;
}

// Integration Types
export interface Integration {
  id: string;
  name: string;
  logo: string;
  category: string;
  description?: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
  timestamp: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// Form State Types
export interface FormState {
  loading: boolean;
  error?: string;
  success?: boolean;
  data?: Record<string, any>;
}

export interface AsyncState<T> {
  loading: boolean;
  error?: Error | string;
  data?: T;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: string;
  children?: NavItem[];
}

export interface NavConfig {
  main: NavItem[];
  footer?: NavItem[];
}

// User Types (for future authentication)
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date | string;
  role: 'user' | 'admin' | 'moderator';
}

// Subscription Types (for future integration)
export interface Subscription {
  id: string;
  userId: string;
  planId: string;
  status: 'active' | 'cancelled' | 'paused';
  billingCycle: BillingCycle;
  currentPeriodStart: Date | string;
  currentPeriodEnd: Date | string;
}

// SEO Types
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  twitterHandle?: string;
  canonicalUrl?: string;
}

// Theme Types
export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeContext {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}
