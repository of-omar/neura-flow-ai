/**
 * Mock Data for Pricing
 */

import { PricingPlan } from '@/lib/types';

export const mockPricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    description: 'Perfect for getting started',
    price: 0,
    yearlyPrice: 0,
    billingCycle: 'monthly',
    limits: {
      documents: '1,000',
      workflows: 3,
      teammates: 1,
    },
    support: 'Community',
    features: [
      { name: 'Up to 1,000 documents', included: true },
      { name: 'Basic workflow automation', included: true },
      { name: 'Manual triggers only', included: true },
      { name: 'Community support', included: true },
      { name: 'Advanced analytics', included: false },
      { name: 'Priority support', included: false },
      { name: 'Custom integrations', included: false },
      { name: 'API access', included: false },
    ],
    cta: {
      label: 'Get Started Free',
      href: '/auth/signup?plan=free',
    },
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For growing teams',
    price: 29,
    yearlyPrice: 290,
    savings: 25,
    billingCycle: 'monthly',
    limits: {
      documents: '50,000',
      workflows: 'Unlimited',
      teammates: 10,
    },
    support: 'Priority Email & Chat',
    isPopular: true,
    features: [
      { name: 'Up to 50,000 documents', included: true },
      { name: 'Unlimited workflows', included: true },
      { name: 'Scheduled & event triggers', included: true },
      { name: 'Priority email support', included: true },
      { name: 'Advanced analytics dashboard', included: true },
      { name: 'Up to 10 team members', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'API access', included: false },
    ],
    cta: {
      label: 'Start Free Trial',
      href: '/auth/signup?plan=pro',
    },
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large-scale operations',
    price: 0,
    billingCycle: 'yearly',
    limits: {
      documents: 'Unlimited',
      workflows: 'Unlimited',
      teammates: 'Unlimited',
    },
    support: 'Dedicated Account Manager',
    features: [
      { name: 'Unlimited documents', included: true },
      { name: 'Unlimited workflows', included: true },
      { name: 'All trigger types', included: true },
      { name: 'Phone & email support', included: true },
      { name: 'Unlimited analytics', included: true },
      { name: 'Unlimited team members', included: true },
      { name: 'Advanced integrations', included: true },
      { name: 'Full API access & webhooks', included: true },
      { name: 'SSO & advanced security', included: true },
      { name: 'Dedicated infrastructure', included: true },
    ],
    cta: {
      label: 'Contact Sales',
      href: '/contact?type=enterprise',
    },
  },
];

export const pricingFeatureComparison = [
  { name: 'Documents per month', free: '1,000', pro: '50,000', enterprise: 'Unlimited' },
  {
    name: 'Automation Workflows',
    free: '3',
    pro: 'Unlimited',
    enterprise: 'Unlimited',
  },
  { name: 'Team Members', free: '1', pro: '10', enterprise: 'Unlimited' },
  {
    name: 'Scheduled Triggers',
    free: false,
    pro: true,
    enterprise: true,
  },
  { name: 'Event Triggers', free: false, pro: true, enterprise: true },
  { name: 'Email Integrations', free: '3', pro: '50', enterprise: 'Unlimited' },
  {
    name: 'API Access',
    free: false,
    pro: false,
    enterprise: true,
  },
  {
    name: 'Webhooks',
    free: false,
    pro: false,
    enterprise: true,
  },
  {
    name: 'Advanced Analytics',
    free: false,
    pro: true,
    enterprise: true,
  },
  { name: 'Priority Support', free: false, pro: true, enterprise: true },
  { name: 'Custom Domain', free: false, pro: true, enterprise: true },
  {
    name: 'SLA Guarantee',
    free: false,
    pro: false,
    enterprise: true,
  },
];
