# Rubber Pirate Portfolio

A minimal, brutalist-style portfolio website built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

> "Everything in this world is breakable and fixable | Breaking into systems ethically since 2023"

## 🚀 Features

- **Brutalist Design**: Minimal color palette, lots of whitespace, and subtle animations
- **Dynamic Projects**: Automatically fetches repositories from GitHub
- **Blog Integration**: Displays latest posts from Medium/Hashnode
- **Gallery**: Cloudinary-powered image gallery with infinite scroll
- **Interactive Components**: Text reveals, sparkles, animated cards, and more
- **Responsive**: Mobile-first design with smooth transitions
- **Performance Optimized**: Image optimization, lazy loading, and API caching

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion / Motion
- **Icons**: Lucide React, Devicons, React Icons
- **Image Hosting**: Cloudinary
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd port
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Cloudinary credentials:
```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🌐 Deployment

### Deploy to Vercel

1. **Push your code to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Deploy on Vercel**:
   - Go to [Vercel](https://vercel.com) and sign in with GitHub
   - Click "Add New..." → "Project"
   - Select your repository
   - Vercel auto-detects Next.js settings ✨
   - Add environment variables:
     - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
     - `CLOUDINARY_API_KEY`
     - `CLOUDINARY_API_SECRET`
   - Click "Deploy"

Your site will be live in minutes! 🎉

### Why Vercel?

✅ Built for Next.js (zero configuration)  
✅ Automatic preview deployments  
✅ Free analytics included  
✅ Global CDN  
✅ Instant rollbacks  
✅ 99.99% uptime  

## 📁 Project Structure

```
/app                    # Next.js App Router pages
  /about               # About page
  /work                # Projects page
  /gallery             # Image gallery
  /contact             # Contact page
  /api                 # API routes
    /gallery           # Cloudinary image fetching
    /blog              # Blog posts fetching
/components
  /ui                  # Reusable UI components
/lib                   # Utilities and constants
/types                 # TypeScript type definitions
/public                # Static assets
```

## 🎨 Customization

### Update Personal Info

Edit `lib/constants.ts`:
```typescript
export const SITE_CONFIG = {
  name: "Your Name",
  title: "Your Title",
  email: "your-email@example.com",
  githubUsername: "your-github-username",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    // ... other social links
  },
};
```

### Add Blog Platform

In `lib/constants.ts`, add your Medium or Hashnode username:
```typescript
social: {
  medium: "https://medium.com/@yourusername",
  // or
  hashnode: "https://hashnode.com/@yourusername",
}
```

### Configure Gallery

See `GALLERY_SETUP.md` for detailed Cloudinary setup instructions.

## 📝 Documentation

- **Gallery Setup**: See `GALLERY_SETUP.md`
- **Performance**: See `GALLERY_PERFORMANCE.md`
- **Blog Setup**: See `BLOG_SETUP.md`

## 🔧 Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🙏 Credits

Built by [Rubber Pirate](https://github.com/rubberpirate)

---

**Portfolio Features:**
- ✅ Brutalist design aesthetic
- ✅ GitHub integration for projects
- ✅ Medium/Hashnode blog integration
- ✅ Cloudinary gallery with infinite scroll
- ✅ Interactive contact page with Cover effect
- ✅ Responsive floating navigation
- ✅ Performance optimized

