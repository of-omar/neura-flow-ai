/**
 * Mock Data for Features
 */

import { Feature } from '@/lib/types';

export const mockFeatures: Feature[] = [
  {
    id: '1',
    name: 'Intelligent Automation',
    description:
      'Automate complex workflows with AI-powered decision making and pattern recognition',
    icon: 'Zap',
    category: 'automation',
    metrics: [
      { label: 'Time Saved', value: '70%' },
      { label: 'Accuracy', value: '99.8%' },
    ],
  },
  {
    id: '2',
    name: 'Real-Time Analytics',
    description:
      'Monitor performance metrics with advanced dashboards and real-time insights',
    icon: 'BarChart3',
    category: 'analytics',
    metrics: [
      { label: 'Data Points', value: '1M+' },
      { label: 'Refresh Rate', value: 'Live' },
    ],
  },
  {
    id: '3',
    name: 'Team Collaboration',
    description: 'Seamless teamwork with real-time collaboration and permission controls',
    icon: 'Users',
    category: 'collaboration',
    metrics: [
      { label: 'Teams', value: 'Unlimited' },
      { label: 'Members', value: 'Per Team' },
    ],
  },
  {
    id: '4',
    name: 'Advanced Integrations',
    description:
      'Connect with 500+ applications and services through our comprehensive API',
    icon: 'Link',
    category: 'automation',
    metrics: [
      { label: 'Integrations', value: '500+' },
      { label: 'Setup Time', value: '< 5 min' },
    ],
  },
  {
    id: '5',
    name: 'Custom Workflows',
    description: 'Build unlimited custom workflows with our visual workflow builder',
    icon: 'Settings',
    category: 'automation',
    metrics: [
      { label: 'Workflows', value: 'Unlimited' },
      { label: 'Templates', value: '100+' },
    ],
  },
  {
    id: '6',
    name: 'Security & Compliance',
    description:
      'Enterprise-grade security with SOC 2 Type II, GDPR, and HIPAA compliance',
    icon: 'Shield',
    category: 'analytics',
    metrics: [
      { label: 'Certifications', value: '5+' },
      { label: 'Uptime', value: '99.99%' },
    ],
  },
  {
    id: '7',
    name: 'AI-Powered Insights',
    description: 'Get intelligent recommendations powered by machine learning models',
    icon: 'Brain',
    category: 'analytics',
    metrics: [
      { label: 'ML Models', value: '10+' },
      { label: 'Accuracy', value: '95%+' },
    ],
  },
  {
    id: '8',
    name: 'Performance Monitoring',
    description:
      'Track application performance with detailed logs, traces, and metrics',
    icon: 'Activity',
    category: 'analytics',
    metrics: [
      { label: 'Metrics', value: '1000+' },
      { label: 'Retention', value: '1 Year' },
    ],
  },
];

export const automationFeatures = mockFeatures.filter(
  (f) => f.category === 'automation'
);
export const analyticsFeatures = mockFeatures.filter(
  (f) => f.category === 'analytics'
);
export const collaborationFeatures = mockFeatures.filter(
  (f) => f.category === 'collaboration'
);
