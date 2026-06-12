# NeuraFlow AI - Enterprise Automation Platform
🌐 Live Demo: https://neura-flow-ai.netlify.app

A modern, enterprise-grade web application built with Next.js 16, showcasing an AI-powered workflow automation platform. This project demonstrates best practices in modern web development with a portfolio-ready design and interactive components.

## Features

- **Modern Tech Stack**: Next.js 16 with React 19.2, TypeScript, Tailwind CSS v4
- **Enterprise Design**: Professional, modern aesthetic with smooth animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Dark Mode Support**: Built-in dark/light mode toggle
- **Performance Optimized**: Leveraging Next.js optimization strategies
- **Accessible**: WCAG compliant with semantic HTML and ARIA labels

- ## 📸 Screenshots

> Add screenshots of your UI here

- Home Page
- Features Page
- Pricing Page
- Dark Mode

## Project Structure

```
├── app/
│   ├── page.tsx                          # Home page
│   ├── features/page.tsx                 # Features showcase
│   ├── pricing/page.tsx                  # Pricing plans
│   ├── blog/page.tsx                     # Blog listing
│   ├── contact/page.tsx                  # Contact form
│   └── auth/
│       ├── login/page.tsx                # Login form
│       └── signup/page.tsx               # Sign up form
├── components/
│   ├── common/                           # Reusable UI components
│   │   ├── Card.tsx                      # Card component
│   │   ├── Section.tsx                   # Section wrapper
│   │   └── Button.tsx                    # Button component
│   ├── layout/                           # Layout components
│   │   ├── Navbar.tsx                    # Navigation bar
│   │   └── Footer.tsx                    # Footer
│   ├── home/                             # Home page sections
│   │   ├── HeroSection.tsx               # Hero with CTA
│   │   ├── FeaturesSection.tsx           # Features showcase
│   │   ├── TestimonialsSection.tsx       # Testimonials
│   │   └── CTASection.tsx                # Call-to-action
│   ├── features/                         # Features page components
│   ├── pricing/                          # Pricing page components
│   ├── blog/                             # Blog page components
│   └── contact/                          # Contact page components
├── lib/
│   ├── constants.ts                      # Application constants
│   ├── types.ts                          # TypeScript types
│   └── data/                             # Mock data
│       ├── features.ts                   # Feature definitions
│       ├── pricing.ts                    # Pricing plans
│       ├── testimonials.ts               # Testimonial data
│       └── blog.ts                       # Blog post data
├── public/                               # Static assets
└── styles/
    └── globals.css                       # Global styles with design tokens
```

## Design System

### Color Palette
- **Primary**: Deep blue (#0a1428) - Professional, trustworthy
- **Accent**: Bright cyan (#00d9ff) - Modern, AI-themed
- **Background**: Dark backgrounds with light text
- **Neutral**: Grayscale for borders and secondary elements

### Typography
- **Headings**: Geist Sans (bold, modern)
- **Body**: Geist Sans (clean, readable)
- **Font Scale**: 12px → 56px for responsive hierarchy

### Components
- Card-based layouts with hover effects
- Gradient accents on CTAs
- Smooth animations with Framer Motion
- Consistent spacing using Tailwind scale

## Pages

### Home Page (`/`)
- Hero section with value proposition
- Key metrics and statistics
- Feature highlights with animations
- Testimonials carousel
- Call-to-action sections
- Professional footer

### Features Page (`/features`)
- Comprehensive feature grid
- Categorized capabilities
- Metrics and performance stats
- Detailed descriptions

### Pricing Page (`/pricing`)
- Three-tier pricing structure
- Feature comparison matrix
- FAQ section
- Money-back guarantee info

### Blog Page (`/blog`)
- 6 featured blog posts
- Category filtering (ready for implementation)
- Read time indicators
- Author information

### Contact Page (`/contact`)
- Contact form with validation
- Company information
- Multiple contact methods
- Responsive layout

### Auth Pages
- **Login** (`/auth/login`): Email/password login with "Remember me"
- **Sign Up** (`/auth/signup`): Registration with password strength indicator

## Technologies Used

- **Framework**: Next.js 16.2.6 (App Router)
- **UI Library**: React 19.2.4
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 11.15.0
- **Icons**: Lucide React 1.17.0
- **Package Manager**: pnpm
- **Linting**: ESLint

## Getting Started
git clone https://github.com/of-omar/neura-flow-ai.git

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd neuraflow-ai

# Install dependencies
pnpm install

# Start the development server
pnpm dev

# Open in browser
# Navigate to http://localhost:3000
```

### Building for Production

```bash
# Build the app
pnpm build

# Start production server
pnpm start
```

## Key Features & Implementations

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts using Tailwind

### Animations
- Page transitions with Framer Motion
- Scroll-triggered animations
- Hover effects on interactive elements
- Staggered animations on grids

### Forms
- Login form with password visibility toggle
- Sign-up form with password strength indicator
- Contact form with subject selection
- Form validation and error handling

### Navigation
- Sticky navbar with logo and links
- Mobile-responsive navigation
- Dark mode toggle
- User authentication links

### Performance
- Image optimization
- Code splitting
- CSS optimization
- Minimal external dependencies

## Configuration

### Environment Variables
Currently no environment variables required for basic setup. For production deployment, add:

```
NEXT_PUBLIC_API_URL=<your-api-url>
```

### Customization

#### Theme Colors
Edit `/app/globals.css` to customize design tokens:
```css
@theme inline {
  --color-primary: #0a1428;
  --color-accent: #00d9ff;
  /* ... more colors */
}
```

#### Company Information
Edit `/lib/constants.ts` to update company details, contact info, and social links.

#### Mock Data
Update files in `/lib/data/` to customize features, pricing, testimonials, and blog posts.

## Best Practices Implemented

- ✅ Server-side rendering for better SEO
- ✅ Component composition and reusability
- ✅ Type-safe TypeScript throughout
- ✅ Semantic HTML markup
- ✅ ARIA labels for accessibility
- ✅ Mobile-responsive design
- ✅ Performance optimizations
- ✅ Clean code organization
- ✅ Design tokens and consistency
- ✅ Error boundaries and fallbacks

## Deployment

### Vercel (Recommended)
```bash
# The project is optimized for Vercel
vercel deploy
```

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud Run
- Docker containers

## Future Enhancements

- [ ] Real backend API integration
- [ ] User authentication system
- [ ] Database integration
- [ ] Blog post dynamic generation
- [ ] Real testimonials and case studies
- [ ] Email form submission
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Internationalization (i18n)
- [ ] A/B testing capabilities

## License

MIT License - feel free to use this project for commercial or personal use.

## Support

For issues, questions, or suggestions, please reach out to: support@neuraflow.ai

---

Built with ❤️ using Next.js and modern web technologies.
