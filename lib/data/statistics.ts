/**
 * Mock Data for Statistics
 */

import { Statistic } from '@/lib/types';

export const mockStatistics: Statistic[] = [
  {
    id: '1',
    label: 'Documents Processed',
    value: 100,
    suffix: 'M+',
    icon: 'FileText',
    description: 'Total documents processed by our platform',
  },
  {
    id: '2',
    label: 'Enterprise Customers',
    value: 5000,
    suffix: '+',
    icon: 'Building2',
    description: 'Companies trusting NeuraFlow AI',
  },
  {
    id: '3',
    label: 'Processing Accuracy',
    value: 99.8,
    suffix: '%',
    icon: 'Target',
    description: 'Average accuracy across all automations',
  },
  {
    id: '4',
    label: 'Time Saved',
    value: 50,
    suffix: 'M+ hours',
    icon: 'Clock',
    description: 'Total hours saved by customers',
  },
];
