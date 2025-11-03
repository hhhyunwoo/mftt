# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
You are building a professional mentoring service website for **JK Park**, targeting individuals in their 20s and 30s. This website will showcase JK Park's mentoring services and professional background, serving as a public marketing platform. The design should follow the clean, card-based layout style similar to https://keeyonghan.com/.

## Technical Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Language**: TypeScript (preferred) or JavaScript

## Project Goals
1. Create a clean, modern, and approachable online presence for JK Park's mentoring services
2. Use a minimalist card-based design with soft gradients
3. Present services in an easy-to-understand visual format with pricing
4. Build trust through testimonials and recommendations
5. Maintain a responsive, accessible, and SEO-optimized single-page application

## Design Reference - keeyonghan.com Style
Based on the actual keeyonghan.com website, the design features:
- **Soft gradient background**: Mint/turquoise gradient (#7DD3C0 to #5EEAD4 range)
- **Card-based layout**: Services displayed as rounded cards with illustrations
- **Minimal navigation**: Single-page scroll design
- **Circular profile photo**: Centered at top with professional headshot
- **Clean typography**: Sans-serif fonts with Korean/English support
- **Visual hierarchy**: Clear separation between sections using cards and spacing

## Site Architecture (Single-Page Application)

### 1. **Hero Section**
- Circular profile photo (centered)
- **JK Park** name in large text (both English and Korean if applicable)
- Professional tagline: "Career Development/Start-up/Leadership/Digital Transformation"
- Subtitle with specialization: "Mentoring for Twenties and Thirties"
- Contact email displayed prominently
- Soft gradient background (mint/turquoise tones)

### 2. **Services Grid Section**
Display services as visual cards (2-3 per row on desktop, stack on mobile):

#### Service Card Structure:
- **Visual element**: Custom illustration or icon for each service
- **Service title**: Bold and clear
- **Price tag**: Displayed prominently (e.g., "$125.00")
- **Brief description**: 1-2 lines maximum
- **Rounded corners** with subtle shadow
- **Hover effects**: Slight scale or shadow enhancement

#### Example Services:
- **1-on-1 Coaching**
  - Illustration: Two people in conversation
  - Price: $125/session
  - Description: Personal career mentoring sessions

- **Career Group Coaching**
  - Illustration: Career journey/mountain path visual
  - Price: $225/program
  - Description: Group sessions for career transitions

- **Leadership Coaching**
  - Illustration: Abstract leadership/growth visual
  - Price: $150/session
  - Description: Developing leadership skills for young professionals

### 3. **About/Introduction Card**
- Gray/white card design
- Brief professional introduction
- Key achievements or credentials
- Years of experience
- Specialization areas listed

### 4. **Testimonials/Recommendations Section**
- Card-based testimonials
- Circular profile photos of recommenders
- Name and title of recommender
- Brief recommendation quote
- "Friend recommendation" or "Client testimonial" label

### 5. **Footer/Contact Section**
- Simple branding (e.g., "CEEYA | Be cool like Keeyong, Come get your page")
- Social media links
- Copyright information

## Data Structure

### `/data/profile.json`
```json
{
  "name": "JK Park",
  "nameKorean": "박중근",
  "title": "Career Development/Start-up/Leadership/Digital Transformation",
  "tagline": "Mentoring for Twenties and Thirties",
  "subtitle": "강연/어드바이징 등 비지니스 관련 문의",
  "email": "jkpark@gmail.com",
  "profileImage": "/images/profile/jk-park.jpg",
  "bio": "Helping young professionals navigate their career journey with personalized guidance and strategic insights.",
  "contact": {
    "email": "jkpark@gmail.com",
    "linkedin": "https://linkedin.com/in/jkpark",
    "instagram": "@jkpark_mentor"
  }
}
```

### `/data/services.json`
```json
{
  "services": [
    {
      "id": "one-on-one-coaching",
      "title": "1-on-1 Coaching",
      "price": "$125.00",
      "currency": "USD",
      "description": "Personal career mentoring sessions",
      "illustration": "/images/illustrations/one-on-one.svg",
      "color": "#FEF3C7",
      "features": ["60-minute sessions", "Personalized advice", "Action planning"]
    },
    {
      "id": "career-group-coaching",
      "title": "Career Group Coaching",
      "titleKorean": "커리어 그룹 코칭",
      "price": "$225.00",
      "currency": "USD",
      "description": "Group sessions for career development",
      "illustration": "/images/illustrations/career-journey.svg",
      "color": "#D4F4DD",
      "features": ["Small group setting", "Peer learning", "Structured curriculum"]
    },
    {
      "id": "leadership-coaching",
      "title": "Leadership Coaching",
      "titleKorean": "리더십 코칭 세션",
      "subtitle": "그룹 코칭을 들으신 분들",
      "price": "$150.00",
      "currency": "USD",
      "description": "Develop your leadership potential",
      "illustration": "/images/illustrations/leadership.svg",
      "color": "#E0E0E0",
      "features": ["Leadership assessment", "Skill development", "Practice scenarios"]
    }
  ]
}
```

### `/data/testimonials.json`
```json
{
  "testimonials": [
    {
      "id": 1,
      "type": "Friend recommendation",
      "name": "Kisang Pak",
      "nameKorean": "박기상",
      "role": "Startup Founder",
      "company": "Tech Company",
      "quote": "JK's insights on career development and leadership have been invaluable...",
      "image": "/images/testimonials/kisang.jpg"
    }
  ]
}
```

### `/data/about.json`
```json
{
  "sections": [
    {
      "id": "experience",
      "title": "실패는 나침반이다",
      "content": "50대 개발자의 실리콘밸리 최고록",
      "highlights": [
        "오늘의 당신이 내일의 당신을 이끌게 하라",
        "실패는 나침반이다",
        "끈기와 열정, 그리고 겸손함"
      ],
      "visual": "/images/about/compass.svg"
    }
  ]
}
```

## Design Guidelines

### Color Palette (Based on keeyonghan.com)
- **Primary Background**: Soft mint/turquoise gradient (#7DD3C0 to #5EEAD4)
- **Card Backgrounds**:
  - Warm yellow/peach (#FEF3C7, #FED7AA)
  - Soft green (#D4F4DD)
  - Light gray (#F3F4F6, #E5E7EB)
  - Pure white (#FFFFFF)
- **Text Colors**:
  - Primary text: Dark gray (#1F2937)
  - Secondary text: Medium gray (#6B7280)
  - Accent text: Dark blue or black (#111827)
- **Accent Colors**: Soft pastels for illustrations

### Typography
- **Primary Font**: Clean sans-serif (Inter, Pretendard, or Noto Sans)
- **Korean Font Support**: Noto Sans KR or Pretendard
- **Font Sizes**:
  - Hero name: 3xl to 4xl
  - Card titles: xl to 2xl
  - Body text: base to lg
  - Price tags: lg to xl (bold)

### Layout Principles
- **Single-page scroll design**: All content on one page
- **Card-based components**: Rounded corners (radius-lg or xl)
- **Generous spacing**: Use Tailwind's space-y-8 to space-y-12
- **Centered content**: Max-width container (max-w-6xl)
- **Grid layout for services**: 1-3 columns responsive grid
- **Soft shadows**: shadow-sm to shadow-md for depth

### UI Components
- **Service Cards**:
  - Rounded corners (rounded-2xl)
  - Soft shadows (shadow-md)
  - Padding (p-6 to p-8)
  - Illustration at top (h-40 to h-48)
  - Price tag as badge or prominent text
  - Hover: slight scale (scale-105) or shadow increase

- **Profile Photo**:
  - Perfect circle (rounded-full)
  - Border or shadow for depth
  - Size: w-32 h-32 to w-40 h-40

- **Testimonial Cards**:
  - Gray/white background
  - Circular avatar (w-16 h-16)
  - Clean typography
  - Subtle border or shadow

### Animation & Interactions
- **Smooth scroll behavior**: For single-page navigation
- **Fade-in on scroll**: Using Intersection Observer
- **Hover effects**: Subtle scale and shadow changes
- **Gradient animation**: Slow, subtle gradient shift in background
- **Card entrance**: Stagger animation for service cards

### Responsive Design
- **Mobile-first approach**: Start with mobile layout
- **Breakpoints**:
  - Mobile: < 640px (stack all cards)
  - Tablet: 640px - 1024px (2 columns)
  - Desktop: > 1024px (3 columns for services)
- **Touch-friendly**: Larger tap targets on mobile
- **Simplified navigation**: No complex menu, just smooth scroll

## Key Features to Implement

1. **Gradient Background**
   - Soft mint/turquoise gradient using CSS or Tailwind
   - Optional: Subtle animation or color shift
   - Full viewport height sections

2. **Service Card Grid**
   - Responsive grid layout (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
   - Custom illustrations or icons for each service
   - Clear pricing display
   - Smooth hover interactions

3. **Smooth Scroll Navigation**
   - Single-page application with smooth scrolling
   - Optional: Floating "Book Now" button
   - Scroll-triggered animations

4. **Testimonial Carousel (Optional)**
   - Simple card-based testimonials
   - Or static grid of recommendation cards
   - Profile photos with names and titles

5. **Contact Integration**
   - Simple email link or contact form
   - Optional: Calendly integration for booking
   - Social media links in footer

6. **Internationalization (Optional)**
   - Korean/English language toggle
   - Proper font support for both languages

7. **SEO & Performance**
   - Meta tags for social sharing
   - Optimized images (WebP format)
   - Lazy loading for images
   - Minimal JavaScript for fast loading

## File Structure
```
mftt/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              # Single-page application
│   ├── globals.css
│   └── api/
│       └── contact/
│           └── route.ts
├── components/
│   ├── Hero.tsx              # Hero section with profile
│   ├── ServiceCard.tsx       # Reusable service card component
│   ├── ServicesGrid.tsx      # Grid of service cards
│   ├── TestimonialCard.tsx   # Testimonial component
│   ├── AboutCard.tsx         # About/intro card
│   ├── Footer.tsx            # Simple footer
│   └── GradientBackground.tsx # Animated gradient bg
├── data/
│   ├── profile.json
│   ├── services.json
│   └── testimonials.json
├── lib/
│   ├── utils.ts
│   └── constants.ts
├── public/
│   ├── images/
│   │   ├── profile/
│   │   ├── illustrations/   # Service card illustrations
│   │   └── testimonials/
│   └── favicon.ico
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Implementation Priorities

### Phase 1 - Core Structure (Day 1-2)
1. Set up Next.js 15 with TypeScript
2. Configure Tailwind CSS with custom colors
3. Create gradient background component
4. Build Hero section with profile photo
5. Implement service card components
6. Create responsive grid layout
7. Deploy to Vercel

### Phase 2 - Polish & Interactions (Day 3-4)
1. Add smooth scroll behavior
2. Implement hover effects on cards
3. Add testimonial/recommendation cards
4. Create about/introduction card
5. Add scroll-triggered animations
6. Optimize images and performance

### Phase 3 - Enhancement (Day 5-7)
1. Add contact form or booking integration
2. Implement SEO metadata
3. Add Analytics
4. Optional: Korean/English language toggle
5. Create custom illustrations for service cards
6. Fine-tune responsive design
7. A/B testing setup

## Code Examples

### Gradient Background Component
```tsx
// components/GradientBackground.tsx
export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-200 via-cyan-200 to-emerald-100" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/30" />
    </div>
  );
}
```

### Service Card Component
```tsx
// components/ServiceCard.tsx
interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  illustration: string;
  color: string;
}

export default function ServiceCard({ title, price, description, illustration, color }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-xl">
      <div
        className="mb-4 flex h-40 items-center justify-center rounded-lg"
        style={{ backgroundColor: color }}
      >
        <img src={illustration} alt={title} className="h-32 w-32 object-contain" />
      </div>
      <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mb-4 text-3xl font-bold text-gray-900">{price}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
```

### Hero Section Component
```tsx
// components/Hero.tsx
export default function Hero({ profile }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="mb-8">
        <img
          src={profile.profileImage}
          alt={profile.name}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg"
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {profile.name} <span className="text-3xl">({profile.nameKorean})</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 text-center max-w-2xl mb-2">
        {profile.title}
      </p>
      <p className="text-base text-gray-600 mb-8">
        {profile.subtitle} • {profile.email}
      </p>
    </section>
  );
}
```

### Tailwind Config for Custom Colors
```js
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        'mint': {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
        },
        'service-yellow': '#fef3c7',
        'service-green': '#d4f4dd',
        'service-gray': '#e5e7eb',
      },
      animation: {
        'gradient-shift': 'gradient 8s ease infinite',
      },
    },
  },
}
```

## Development Commands

```bash
# Start development server
npm run dev

# Production build
npm run build

# Linting
npm run lint

# Type checking
npm run type-check
```

## Deployment Instructions

### Vercel Deployment
1. Push code to GitHub repository
2. Connect GitHub repo to Vercel
3. Configure environment variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://jkpark-mentoring.com
   CONTACT_EMAIL=contact@jkpark-mentoring.com
   MAILCHIMP_API_KEY=your_key_here
   ```
4. Set up custom domain in Vercel dashboard
5. Enable Vercel Analytics

### Custom Domain Setup
1. Add domain in Vercel project settings
2. Update DNS records:
   - A record pointing to Vercel IP
   - CNAME for www subdomain
3. Enable SSL certificate (automatic in Vercel)

## Content Guidelines

### Tone of Voice
- Professional yet approachable
- Empathetic and understanding
- Inspirational without being preachy
- Clear and concise
- Action-oriented

### Key Messages
1. "Your twenties and thirties are crucial decades - make them count"
2. "Transform uncertainty into opportunity"
3. "Personalized guidance for your unique journey"
4. "From confusion to clarity, from stuck to success"

## Performance Requirements
- Lighthouse score > 90 for all metrics
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s
- Cumulative Layout Shift < 0.1
- Mobile-first responsive design

## Security Considerations
- Input validation for all forms
- Rate limiting for API endpoints
- CSRF protection
- Content Security Policy headers
- Regular dependency updates

## Testing Checklist
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness (iOS and Android)
- [ ] Form submissions working
- [ ] All links functional
- [ ] SEO meta tags present
- [ ] Images optimized and lazy-loaded
- [ ] Accessibility standards met (WCAG 2.1 AA)
- [ ] 404 page implemented
- [ ] Contact form email delivery
- [ ] Analytics tracking active

## Notes for Claude Code

### Design Philosophy
- **Minimalism is key**: Follow keeyonghan.com's clean, card-based approach
- **Single-page simplicity**: Everything on one scrollable page
- **Visual hierarchy through cards**: Use cards to separate content sections
- **Soft, approachable aesthetics**: Pastel colors and rounded corners
- **Focus on content**: Let the services and testimonials speak for themselves

### Implementation Tips
- Start with the gradient background as the foundation
- Build the service card component to be highly reusable
- Use CSS Grid or Flexbox for responsive layouts
- Keep animations subtle (scale, shadow, fade-in)
- Optimize for mobile-first experience
- Use Next.js Image component for profile photos and illustrations
- Consider using Framer Motion for smooth animations
- Keep the codebase simple and maintainable

### Key Differences from Complex Portfolios
- No complex navigation menu - just smooth scroll
- No separate pages - everything on one page
- Visual services presentation instead of text-heavy descriptions
- Card-based design instead of traditional sections
- Emphasis on approachability over corporate feel

### Performance Considerations
- Lazy load images below the fold
- Use WebP format for images
- Minimize JavaScript bundle size
- Implement proper caching strategies
- Consider static generation for optimal performance

## Success Metrics
- Conversion rate: Contact form submissions / Total visitors
- Engagement: Average time on site > 3 minutes
- Bounce rate < 40%
- Mobile traffic properly served (> 50% expected)
- SEO: Ranking for "career mentor twenties thirties [location]"