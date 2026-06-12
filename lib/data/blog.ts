/**
 * Mock Blog Data
 */

import { BlogPost } from '@/lib/types'

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How AI Automation is Revolutionizing Enterprise Operations',
    slug: 'ai-automation-enterprise-operations',
    excerpt:
      'Discover how artificial intelligence is transforming business processes and helping companies achieve unprecedented efficiency gains.',
    content: 'Full blog content here...',
    category: 'AI',
    author: {
      name: 'Sarah Chen',
      bio: 'AI Solutions Architect at NeuraFlow',
    },
    image: '/blog/ai-automation.jpg',
    publishedAt: '2024-06-15',
    readTime: 8,
    featured: true,
    tags: ['AI', 'Automation', 'Enterprise'],
  },
  {
    id: '2',
    title: '5 Common Workflow Automation Mistakes to Avoid',
    slug: 'workflow-automation-mistakes',
    excerpt:
      'Learn the most common pitfalls when implementing workflow automation and how to successfully overcome them.',
    content: 'Full blog content here...',
    category: 'Best Practices',
    author: {
      name: 'Michael Rodriguez',
      bio: 'Process Optimization Expert',
    },
    image: '/blog/workflow-mistakes.jpg',
    publishedAt: '2024-06-10',
    readTime: 6,
    tags: ['Workflow', 'Best Practices', 'Automation'],
  },
  {
    id: '3',
    title: 'Getting Started with NeuraFlow: A Complete Guide',
    slug: 'getting-started-neuraflow',
    excerpt: 'Step-by-step guide to setting up your first automation workflows with NeuraFlow AI in just 15 minutes.',
    content: 'Full blog content here...',
    category: 'Product',
    author: {
      name: 'Emily Watson',
      bio: 'Product Manager at NeuraFlow',
    },
    image: '/blog/getting-started.jpg',
    publishedAt: '2024-06-05',
    readTime: 10,
    tags: ['Getting Started', 'Tutorial', 'Product'],
  },
  {
    id: '4',
    title: 'The ROI of Intelligent Document Processing',
    slug: 'roi-document-processing',
    excerpt:
      'Analyze the financial impact of implementing intelligent document processing in your organization.',
    content: 'Full blog content here...',
    category: 'Automation',
    author: {
      name: 'David Park',
      bio: 'Business Analyst at NeuraFlow',
    },
    image: '/blog/roi-document.jpg',
    publishedAt: '2024-05-28',
    readTime: 7,
    tags: ['ROI', 'Document Processing', 'Analytics'],
  },
  {
    id: '5',
    title: 'NeuraFlow Launches Version 2.0 with Enhanced AI Models',
    slug: 'neuraflow-v2-launch',
    excerpt: 'Announcing major upgrades to our AI models with 40% better accuracy and 3x faster processing speeds.',
    content: 'Full blog content here...',
    category: 'Company',
    author: {
      name: 'Alex Johnson',
      bio: 'CEO at NeuraFlow',
    },
    image: '/blog/v2-launch.jpg',
    publishedAt: '2024-05-20',
    readTime: 5,
    tags: ['Release', 'Product', 'AI'],
  },
  {
    id: '6',
    title: 'Integrating NeuraFlow with Your Existing Systems',
    slug: 'integration-guide',
    excerpt:
      'Learn how to seamlessly integrate NeuraFlow AI with your current tech stack and legacy systems.',
    content: 'Full blog content here...',
    category: 'Best Practices',
    author: {
      name: 'Jessica Martinez',
      bio: 'Integration Specialist',
    },
    image: '/blog/integration.jpg',
    publishedAt: '2024-05-15',
    readTime: 9,
    tags: ['Integration', 'API', 'Technical'],
  },
];

export const blogCategories = ['All', 'AI', 'Automation', 'Best Practices', 'Company', 'Product'];
