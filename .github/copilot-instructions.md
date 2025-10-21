# Portfolio Website - AI Agent Instructions

## Project Overview
A minimal, brutalist-style portfolio website built with **Next.js 15** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS v4**. The design emphasizes whitespace, minimal color (black/white/gray), and subtle animations using Framer Motion. Aceternity UI components provide enhanced visual effects.

## Architecture & Structure

### Directory Layout
```
/app                    # Next.js App Router pages
  /about, /work, /contact  # Main routes
  /work/[slug]         # Dynamic project pages
  layout.tsx           # Root layout with Inter font & FloatingNav
  globals.css          # Tailwind v4 config via CSS
/components
  /ui                  # Aceternity UI components
    floating-navbar.tsx # Bottom fixed navigation
    sparkles.tsx       # Background particle effect
    tracing-beam.tsx   # Scroll indicator
    card-spotlight.tsx # Interactive card effect
    name-flip.tsx      # Text animation
    link-preview.tsx   # Hover preview with screenshot
    bento-grid.tsx     # Bento grid layout for work page
    text-reveal-card.tsx # Interactive text reveal with mouse tracking
    infinite-moving-cards.tsx # Infinite scrolling cards for skills
  /layout              # Header, Footer, Container
  /sections            # Hero, About, Projects, Contact
  /shared              # Reusable components (ProjectCard, SocialLinks)
/lib
  utils.ts             # cn() utility for class merging
  constants.ts         # SITE_CONFIG, ANIMATION_VARIANTS, ICON_SIZES
  github.ts            # GitHub API integration
/types
  index.ts             # TypeScript interfaces (Project, SocialLink, NavLink)
/public
  /images, /projects   # Static assets
```

### Key Tech Decisions
- **Tailwind v4**: Uses CSS-based configuration in `globals.css` via `@theme inline` instead of `tailwind.config.ts`
- **No src/ directory**: App Router at root level per Next.js 15 best practices
- **Inter font**: Loaded via `next/font/google` in `app/layout.tsx` with `--font-inter` CSS variable
- **Class merging**: Use `cn()` utility from `lib/utils.ts` (combines `clsx` + `tailwind-merge`)

## Design System

### Colors (from `globals.css`)
```css
--color-background: #FAFAF9         /* Off-white */
--color-foreground: #0A0A0A         /* Near black */
--color-accent: #18181B             /* Dark gray */
--color-accent-muted: #52525B       /* Medium gray */
--color-border: #E5E5E5             /* Light gray */
```

### Typography Scale
- **Headings**: `text-5xl md:text-7xl` (h1), `text-4xl md:text-6xl` (h2), etc.
- **Body**: `text-base md:text-lg`, always `font-normal`
- **Weights**: Bold (700) for headings, normal (400) for body

### Spacing (Custom CSS Variables)
- `--spacing-xs` through `--spacing-2xl` (8px to 128px)
- Max widths: `--max-width-content` (65ch), `--max-width-container` (1200px), `--max-width-narrow` (800px)

### Animation Patterns
Use Framer Motion variants from `lib/constants.ts`:
```typescript
ANIMATION_VARIANTS.fadeIn     // opacity 0→1, y: 20→0, 0.6s easeOut
ANIMATION_VARIANTS.stagger    // stagger children by 0.1s
```

## Development Workflow

### Commands
```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build
npm run start        # Run production server
npm run lint         # ESLint check
```

### Adding Aceternity Components
```bash
# Install individual components
npx aceternity-ui@latest add [component-name]
# e.g., npx aceternity-ui@latest add navbar-menu
```

### Working with Projects
1. Update `types/index.ts` for `Project` interface
2. Create project data in `lib/constants.ts` or separate data file
3. Use dynamic route `/work/[slug]/page.tsx` for individual projects
4. Store project images in `/public/projects/`

## Navigation

### Floating Navbar
- **Global navigation** via `FloatingNav` component in `app/layout.tsx`
- Fixed at bottom of viewport, always visible
- Navigation items: Home, About Me, Work, Get In Touch
- Uses Motion for smooth animations and scroll detection
- Styled with backdrop blur and brutalist aesthetic
- Icons from Lucide React for visual indicators

### Link Preview
- **Hover-to-preview** component using `@radix-ui/react-hover-card`
- Shows live screenshot of GitHub repos when hovering over project names
- Uses Microlink API for automatic screenshot generation
- Configured in `next.config.ts` with `api.microlink.io` in `remotePatterns`
- Applied to project titles on homepage and work page
- Animated entrance with spring physics for smooth interaction

## Conventions

### Component Patterns
- **Server Components by default** (Next.js 15 App Router)
- Add `"use client"` only for interactivity (Framer Motion, useState, etc.)
- Use Lucide React icons: `import { Github, Mail } from "lucide-react"`
- Always use `<Link>` from `next/link` for internal navigation
- **FloatingNav** is included globally, no need to add to individual pages

### Styling Best Practices
- Use Tailwind utility classes, avoid custom CSS unless necessary
- Responsive: Mobile-first with `md:`, `lg:` breakpoints
- Dark mode support: `dark:` variants (configured in `globals.css`)
- Hover states: `hover:border-accent`, `hover:underline`, etc.

### File Naming
- Components: PascalCase (e.g., `ProjectCard.tsx`)
- Pages: lowercase (e.g., `page.tsx`, `layout.tsx`)
- Utilities: camelCase (e.g., `utils.ts`)

## Integration Points

### Fonts
Inter font is loaded in `app/layout.tsx` and applied via `--font-inter` CSS variable. Update `globals.css` to change font stack.

### Icons
Lucide React is the standard icon library. Sizes are defined in `lib/constants.ts` as `ICON_SIZES`.

### External Services
- **Deployment**: Vercel (recommended), Netlify, or Cloudflare Pages
- **Images**: Use Next.js `<Image>` component with `width`, `height`, `alt` always specified

## Common Tasks

### Add a new page
1. Create `/app/[route]/page.tsx`
2. Use existing page structure (Hero section, max-width containers)
3. Update navigation in Header component when created

### Add a project
1. Define project data following `types/index.ts` `Project` interface
2. Add to projects array in data file
3. Create `/work/[slug]` route or use existing dynamic route

### Update site config
Edit `lib/constants.ts` → `SITE_CONFIG` object with name, title, email, social links.

## Notes
- The project uses **Tailwind CSS v4**, so configuration is in `globals.css`, not `tailwind.config.ts`
- Keep the brutalist aesthetic: lots of whitespace, minimal color, subtle animations only
- Prioritize performance: optimize images, lazy load heavy components
- The `projects-specs.md` file contains detailed design specifications for reference
