import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | NeuraFlow AI',
    default: 'NeuraFlow AI - Enterprise-Grade AI Automation Platform',
  },
  description:
    'Automate complex workflows with AI-powered decision making. Save time, reduce errors, and scale operations with NeuraFlow AI.',
  keywords: [
    'AI automation',
    'workflow automation',
    'enterprise automation',
    'AI platform',
    'document processing',
    'business automation',
  ],
  authors: [{ name: 'NeuraFlow AI' }],
  creator: 'NeuraFlow AI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://neuraflow.ai',
    siteName: 'NeuraFlow AI',
    title: 'NeuraFlow AI - Enterprise-Grade AI Automation Platform',
    description:
      'Automate complex workflows with AI-powered decision making. Save time, reduce errors, and scale operations.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NeuraFlow AI',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuraFlow AI - Enterprise-Grade AI Automation Platform',
    description:
      'Automate complex workflows with AI-powered decision making. Save time, reduce errors, and scale operations.',
    images: ['/og-image.png'],
    creator: '@neuraflowai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1419' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://neuraflow.ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
