# Portfolio Website Specifications Document

## **Project Overview**
A minimal, brutalist-style portfolio website inspired by marijanapav.com, built with modern web technologies and Aceternity UI components.

---

## **Tech Stack**

### **Core Framework & Libraries**
- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 3.4+**
- **Aceternity UI** (https://ui.aceternity.com/)

### **Additional Dependencies**
```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^11.0.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "typescript": "^5",
    "tailwindcss": "^3.4.0",
    "postcss": "^8",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "^15.0.0"
  }
}
```

---

## **Design System**

### **Color Scheme (Minimal/Brutalist)**
```javascript
// tailwind.config.ts colors
colors: {
  background: {
    DEFAULT: '#FAFAF9', // Off-white
    dark: '#0A0A0A',    // Near black
  },
  foreground: {
    DEFAULT: '#0A0A0A', // Near black
    dark: '#FAFAF9',    // Off-white
  },
  accent: {
    DEFAULT: '#18181B',  // Dark gray
    muted: '#52525B',    // Medium gray
  },
  border: '#E5E5E5',     // Light gray border
}
```

### **Typography**

**Fonts to Use:**
```javascript
// Primary Font: Inter (Google Fonts)
import { Inter } from 'next/font/google'

// Alternative Options:
// - Geist Sans (Vercel)
// - Space Grotesk (Google Fonts)
// - Work Sans (Google Fonts)
```

**Font Sizes:**
```css
/* Heading Sizes */
h1: text-5xl md:text-7xl (48px/72px)
h2: text-4xl md:text-6xl (36px/60px)
h3: text-3xl md:text-5xl (30px/48px)
h4: text-2xl md:text-4xl (24px/36px)

/* Body Sizes */
body: text-base md:text-lg (16px/18px)
small: text-sm (14px)
```

**Font Weights:**
- Headings: font-bold (700)
- Body: font-normal (400)
- Accents: font-medium (500)

---

## **Layout Structure**

### **Spacing System**
```javascript
// Consistent spacing scale
spacing: {
  xs: '0.5rem',   // 8px
  sm: '1rem',     // 16px
  md: '2rem',     // 32px
  lg: '4rem',     // 64px
  xl: '6rem',     // 96px
  '2xl': '8rem',  // 128px
}
```

### **Container Widths**
```javascript
maxWidth: {
  content: '65ch',    // For text content (readable width)
  container: '1200px', // Max container width
  narrow: '800px',    // Narrow sections
}
```

---

## **Icons**

### **Icon Library**
- **Primary**: Lucide React (already included in Aceternity UI)
  - Clean, minimal, consistent style
  - SVG-based, lightweight

### **Common Icons Needed**
```javascript
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  Menu,
  X,
  Twitter,
  Globe,
  FileText,
  Code,
  Palette,
} from 'lucide-react'
```

---

## **Project Structure**

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx
│   ├── work/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── globals.css
├── components/
│   ├── ui/                 # Aceternity UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── navbar.tsx
│   │   └── ...
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── shared/
│       ├── ProjectCard.tsx
│       └── SocialLinks.tsx
├── lib/
│   ├── utils.ts
│   └── constants.ts
├── public/
│   ├── images/
│   ├── projects/
│   └── favicon.ico
├── styles/
├── types/
│   └── index.ts
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## **Page Sections**

### **1. Homepage**
- Hero section (large name/title + brief intro)
- Featured projects (2-3 cards)
- Brief about section
- CTA to contact

### **2. About Page**
- Personal photo
- Extended bio
- Skills/technologies
- Current focus/interests
- Link to resume

### **3. Work/Projects Page**
- Grid of project cards
- Filter by category (optional)
- Each card: thumbnail, title, description, tags

### **4. Individual Project Page**
- Hero image
- Project description
- Role & technologies
- Challenge & solution
- Images/screenshots
- Live link + GitHub link

### **5. Contact Page**
- Simple contact form
- Email link
- Social media links

---

## **Aceternity UI Components to Use**

### **Recommended Components**
1. **Text Generate Effect** - For hero section headings
2. **Background Beams** - Subtle background effect
3. **Bento Grid** - For project showcase
4. **Card Hover Effect** - For project cards
5. **Navbar Menu** - Minimal navigation
6. **Spotlight** - Hero section background
7. **Moving Border** - Accent elements
8. **Infinite Scroll** - For skills/tech logos

### **Component Installation**
```bash
# Install individual components via Aceternity CLI
npx aceternity-ui@latest add button
npx aceternity-ui@latest add card
npx aceternity-ui@latest add navbar-menu
# ... etc
```

---

## **Animation Principles**

### **Motion Settings**
```javascript
// Framer Motion presets
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}
```

### **Animation Guidelines**
- **Keep it minimal** - Only animate on purpose
- **Subtle hover effects** - 2-4px translations max
- **Smooth transitions** - 300-600ms duration
- **Ease curves** - Use easeOut for natural feel
- **Reduce motion** - Respect prefers-reduced-motion

---

## **Responsive Breakpoints**

```javascript
// Tailwind default breakpoints
screens: {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}
```

### **Design Priorities**
- **Mobile-first** - Design for mobile, enhance for desktop
- **Single column** on mobile
- **Max 2 columns** on tablet
- **Max 3 columns** on desktop

---

## **Performance Optimizations**

### **Image Optimization**
- Use Next.js `<Image>` component
- WebP format with fallbacks
- Lazy loading by default
- Proper width/height attributes

### **Code Splitting**
- Dynamic imports for heavy components
- Route-based code splitting (automatic with Next.js)

### **SEO**
- Metadata in each page
- Semantic HTML
- Alt text for images
- sitemap.xml
- robots.txt

---

## **Environment Setup Commands**

```bash
# Create Next.js project
npx create-next-app@latest portfolio --typescript --tailwind --app

# Navigate to project
cd portfolio

# Install Aceternity UI dependencies
npm install framer-motion clsx tailwind-merge

# Install Lucide icons
npm install lucide-react

# Install additional utilities
npm install class-variance-authority

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## **Configuration Files**

### **tailwind.config.ts**
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FAFAF9',
          dark: '#0A0A0A',
        },
        foreground: {
          DEFAULT: '#0A0A0A',
          dark: '#FAFAF9',
        },
        accent: {
          DEFAULT: '#18181B',
          muted: '#52525B',
        },
        border: '#E5E5E5',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      maxWidth: {
        content: '65ch',
        container: '1200px',
        narrow: '800px',
      },
    },
  },
  plugins: [],
};

export default config;
```

### **next.config.js**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-image-domain.com'],
  },
}

module.exports = nextConfig
```

---

## **Content Structure**

### **Site Information**
```typescript
// lib/constants.ts
export const SITE_CONFIG = {
  name: "Your Name",
  title: "Your Title/Role",
  description: "Brief description of what you do",
  email: "your@email.com",
  social: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://twitter.com/username",
  }
}
```

### **Project Data Structure**
```typescript
// types/index.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}
```

---

## **Design Principles**

1. **Whitespace First** - Let content breathe
2. **Typography Hierarchy** - Clear size differences
3. **Minimal Color** - Black, white, one accent
4. **Subtle Animations** - Only when purposeful
5. **Content Over Chrome** - Reduce UI noise
6. **Mobile Responsive** - Works on all devices
7. **Fast Loading** - Optimize everything
8. **Accessible** - WCAG 2.1 AA compliant

---

## **Development Workflow**

### **Phase 1: Setup (Day 1)**
- Initialize Next.js project
- Install dependencies
- Configure Tailwind
- Set up project structure
- Add fonts and base styles

### **Phase 2: Components (Day 2-3)**
- Create layout components (Header, Footer)
- Build reusable UI components
- Integrate Aceternity components
- Set up navigation

### **Phase 3: Pages (Day 4-5)**
- Build homepage
- Create about page
- Build projects gallery
- Individual project pages
- Contact page

### **Phase 4: Content (Day 6)**
- Add personal information
- Upload project content
- Add images
- Write copy

### **Phase 5: Polish (Day 7)**
- Animations and transitions
- Responsive testing
- Performance optimization
- SEO setup
- Cross-browser testing

### **Phase 6: Deploy**
- Deploy to Vercel
- Configure domain
- Test production build
- Set up analytics (optional)

---

## **Deployment**

### **Recommended Platform: Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

### **Alternative Platforms**
- Netlify
- Railway
- Cloudflare Pages

---

## **Additional Resources**

- **Aceternity UI Docs**: https://ui.aceternity.com/
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Lucide Icons**: https://lucide.dev/

---

This specification document provides everything an AI assistant needs to set up and build your minimal portfolio website. Hand this over and they can get started immediately!