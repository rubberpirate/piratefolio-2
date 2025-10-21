# Deployment Guide

This guide will help you deploy your portfolio to Vercel and set up Git version control.

## 📦 Prerequisites

- Node.js 18 or higher installed
- Git installed on your machine
- GitHub account
- Vercel account (free tier works great!)
- Cloudinary account (for gallery feature)

## 🔧 Step 1: Prepare Your Project

1. **Ensure all dependencies are installed**:
```bash
npm install
```

2. **Test the build locally**:
```bash
npm run build
npm start
```

If the build succeeds, you're ready to deploy!

## 🐙 Step 2: Set Up Git Repository

1. **Initialize Git** (if not already done):
```bash
git init
```

2. **Create a GitHub repository**:
   - Go to [GitHub](https://github.com/new)
   - Create a new repository (e.g., `portfolio` or `rubberpirate-portfolio`)
   - Don't initialize with README (you already have one)

3. **Add your files to Git**:
```bash
git add .
git commit -m "Initial commit: Portfolio ready for deployment"
```

4. **Connect to GitHub**:
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## 🚀 Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Log in to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub

2. **Import your project**:
   - Click "Add New..." → "Project"
   - Select your portfolio repository from the list
   - Vercel automatically detects Next.js configuration ✨

3. **Configure project settings**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - Leave other settings as default

4. **Add environment variables**:
   - Click "Environment Variables" section
   - Add these variables:
     ```
     NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = your_cloud_name
     CLOUDINARY_API_KEY = your_api_key
     CLOUDINARY_API_SECRET = your_api_secret
     ```
   - Get these from your [Cloudinary Dashboard](https://console.cloudinary.com)
   - Make sure to add them for all environments: Production, Preview, Development

5. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at `your-project-name.vercel.app`

6. **Customize your domain** (optional):
   - Go to Project Settings → Domains
   - Add a custom domain or edit the Vercel subdomain
   - Example: `rubberpirate.vercel.app`

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

Follow the prompts, then:

4. **Deploy to production**:
```bash
vercel --prod
```

## 🔑 Step 4: Configure Environment Variables

Make sure these environment variables are set in Vercel:

| Variable | Description | Where to get it |
|----------|-------------|-----------------|
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Your Cloudinary cloud name | [Cloudinary Console](https://console.cloudinary.com) → Account Details |
| `CLOUDINARY_API_KEY` | API Key for Cloudinary | Cloudinary Console → Account Details → API Keys |
| `CLOUDINARY_API_SECRET` | API Secret for Cloudinary | Cloudinary Console → Account Details → API Keys |

**Important**: Add these variables to all three environments:
- ✅ Production
- ✅ Preview
- ✅ Development

## ✅ Step 5: Verify Deployment

1. **Check your site**:
   - Visit your Vercel URL
   - Test all pages: Home, About, Work, Gallery, Contact
   - Verify navbar navigation works
   - Check that images load in the gallery

2. **Test blog integration**:
   - Verify blog posts appear if you have Medium/Hashnode configured
   - Check that blog cards link correctly

3. **Test gallery**:
   - Upload test images to Cloudinary
   - Verify they appear in the gallery
   - Test infinite scroll

## 🔄 Step 6: Set Up Continuous Deployment

Vercel automatically sets up continuous deployment:

1. **Make changes to your code**:
```bash
# Edit files
git add .
git commit -m "Update: description of changes"
git push origin main
```

2. **Automatic deployment**:
   - Vercel detects the push
   - Automatically builds and deploys to production
   - Every branch gets a preview deployment
   - Pull requests get automatic preview URLs

## 🌿 Preview Deployments

Vercel creates preview deployments for every branch/PR:

```bash
# Create a new branch
git checkout -b feature/new-section

# Make changes and push
git add .
git commit -m "Add new section"
git push origin feature/new-section
```

Vercel automatically creates a preview URL for testing!

## 🐛 Troubleshooting

### Build Fails

**Error**: `Module not found` or dependency errors
- **Solution**: Make sure all dependencies are in `package.json`
- Run `npm install` locally and commit the updated `package-lock.json`

**Error**: Environment variable issues
- **Solution**: Double-check all env vars are set in Vercel
- Make sure variable names match exactly (case-sensitive)
- Ensure variables are added to all environments

### Gallery Not Loading

**Issue**: Gallery shows "No images yet"
- **Solution**: 
  1. Verify Cloudinary credentials are correct
  2. Upload images to the `gallery` folder in Cloudinary
  3. Check Function Logs in Vercel dashboard

### Blog Posts Not Showing

**Issue**: "No blog posts yet" message
- **Solution**:
  1. Verify Medium/Hashnode username is correct in `lib/constants.ts`
  2. Make sure you have published posts
  3. Check browser console for API errors

### Vercel Function Timeouts

**Issue**: API routes timing out
- **Solution**:
  1. Free tier has 10-second timeout
  2. Optimize your API routes
  3. Upgrade to Pro if needed (60-second timeout)

## 📊 Monitoring Your Site

1. **Vercel Analytics** (built-in, free):
   - Go to Analytics tab in your project
   - View real-time visitor data
   - Track Web Vitals performance

2. **Deployment logs**:
   - Check Deployments tab
   - Click any deployment to see build logs
   - Useful for debugging build issues

3. **Function logs**:
   - Go to Functions tab
   - See API route activity and errors
   - Monitor performance

## 🎉 Success!

Your portfolio is now live! Share your site:

- **Vercel URL**: `https://your-project-name.vercel.app`
- **Custom Domain**: (if you set one up)

## 🔐 Security Best Practices

1. **Never commit `.env.local`** - It's in `.gitignore`
2. **Keep API secrets secure** - Only in Vercel environment variables
3. **Rotate credentials periodically** - Update Cloudinary keys every few months
4. **Enable Vercel Authentication** - For sensitive preview deployments
5. **Use HTTPS** - Vercel does this by default

## 🚀 Vercel Features You Get

✅ **Zero Configuration** - Next.js auto-detected
✅ **Automatic HTTPS** - SSL certificates included
✅ **Global CDN** - Fast worldwide delivery
✅ **Preview Deployments** - Every branch/PR gets a URL
✅ **Instant Rollbacks** - One-click rollback to previous versions
✅ **Analytics** - Built-in, free analytics
✅ **Edge Network** - Serverless functions at the edge
✅ **DDoS Protection** - Built-in security
✅ **99.99% Uptime SLA** - Reliable hosting

## 🔄 Updating Your Site

```bash
# Make changes
git add .
git commit -m "Update: your changes"
git push

# Vercel automatically:
# 1. Detects the push
# 2. Builds your project
# 3. Deploys to production
# 4. Notifies you when done
```

## 🎨 Advanced Features

### Custom Domain

1. Go to Project Settings → Domains
2. Add your domain (e.g., `rubberpirate.com`)
3. Follow Vercel's DNS instructions
4. Vercel handles SSL automatically

### Environment-Specific Variables

```bash
# Production only
vercel env add PROD_SPECIFIC_VAR production

# Preview only  
vercel env add PREVIEW_VAR preview

# Development only
vercel env add DEV_VAR development
```

### Redirects and Rewrites

Create `vercel.json` in project root:
```json
{
  "redirects": [
    {
      "source": "/old-path",
      "destination": "/new-path",
      "permanent": true
    }
  ]
}
```

## 🚀 Next Steps

- [ ] Add a custom domain
- [ ] Set up Google Analytics
- [ ] Configure SEO metadata  
- [ ] Add Open Graph images
- [ ] Enable Vercel Analytics
- [ ] Set up deployment notifications
- [ ] Configure preview protection

---

Need help? Check:
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Cloudinary Docs](https://cloudinary.com/documentation)

## 🔧 Step 1: Prepare Your Project

1. **Ensure all dependencies are installed**:
```bash
npm install
```

2. **Test the build locally**:
```bash
npm run build
npm start
```

If the build succeeds, you're ready to deploy!

## 🐙 Step 2: Set Up Git Repository

1. **Initialize Git** (if not already done):
```bash
git init
```

2. **Create a GitHub repository**:
   - Go to [GitHub](https://github.com/new)
   - Create a new repository (e.g., `portfolio` or `rubberpirate-portfolio`)
   - Don't initialize with README (you already have one)

3. **Add your files to Git**:
```bash
git add .
git commit -m "Initial commit: Portfolio ready for deployment"
```

4. **Connect to GitHub**:
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## 🚀 Step 3: Deploy to Netlify

### Option A: Deploy via Netlify Dashboard (Recommended)

1. **Log in to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub

2. **Import your project**:
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your repositories
   - Select your portfolio repository

3. **Configure build settings**:
   - The settings should be auto-detected from `netlify.toml`
   - **Build command**: `npm run build``
   - **Publish directory**: `.next`
   - Leave other settings as default

4. **Add environment variables**:
   - Before deploying, click "Add environment variables"
   - Add these variables:
     ```
     NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = your_cloud_name
     CLOUDINARY_API_KEY = your_api_key
     CLOUDINARY_API_SECRET = your_api_secret
     ```
   - Get these from your [Cloudinary Dashboard](https://console.cloudinary.com)

5. **Deploy**:
   - Click "Deploy site"
   - Wait for the build to complete (usually 2-3 minutes)
   - Your site will be live at a random Netlify URL

6. **Customize your domain** (optional):
   - Go to Site settings → Domain management
   - Click "Options" → "Edit site name"
   - Change to something like `rubberpirate.netlify.app`

### Option B: Deploy via Netlify CLI

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Login to Netlify**:
```bash
netlify login
```

3. **Initialize Netlify**:
```bash
netlify init
```

4. **Deploy**:
```bash
netlify deploy --prod
```

## 🔑 Step 4: Configure Environment Variables

Make sure these environment variables are set in Netlify:

| Variable | Description | Where to get it |
|----------|-------------|-----------------|
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Your Cloudinary cloud name | [Cloudinary Console](https://console.cloudinary.com) → Account Details |
| `CLOUDINARY_API_KEY` | API Key for Cloudinary | Cloudinary Console → Account Details → API Keys |
| `CLOUDINARY_API_SECRET` | API Secret for Cloudinary | Cloudinary Console → Account Details → API Keys |

## ✅ Step 5: Verify Deployment

1. **Check your site**:
   - Visit your Netlify URL
   - Test all pages: Home, About, Work, Gallery, Contact
   - Verify navbar navigation works
   - Check that images load in the gallery

2. **Test blog integration**:
   - Verify blog posts appear if you have Medium/Hashnode configured
   - Check that blog cards link correctly

3. **Test gallery**:
   - Upload test images to Cloudinary
   - Verify they appear in the gallery
   - Test infinite scroll

## 🔄 Step 6: Set Up Continuous Deployment

Netlify automatically sets up continuous deployment:

1. **Make changes to your code**:
```bash
# Edit files
git add .
git commit -m "Update: description of changes"
git push origin main
```

2. **Automatic deployment**:
   - Netlify detects the push
   - Automatically builds and deploys
   - Check deployment status in Netlify dashboard

## 🐛 Troubleshooting

### Build Fails

**Error**: `Module not found` or dependency errors
- **Solution**: Make sure all dependencies are in `package.json`
- Run `npm install` locally and commit the updated `package-lock.json`

**Error**: Environment variable issues
- **Solution**: Double-check all env vars are set in Netlify
- Make sure variable names match exactly (case-sensitive)

### Gallery Not Loading

**Issue**: Gallery shows "No images yet"
- **Solution**: 
  1. Verify Cloudinary credentials are correct
  2. Upload images to the `gallery` folder in Cloudinary
  3. Check API logs in Netlify Functions

### Blog Posts Not Showing

**Issue**: "No blog posts yet" message
- **Solution**:
  1. Verify Medium/Hashnode username is correct in `lib/constants.ts`
  2. Make sure you have published posts
  3. Check browser console for API errors

## 📊 Monitoring Your Site

1. **Netlify Analytics** (optional, paid):
   - Go to Site settings → Analytics
   - Enable analytics to track visitors

2. **Build logs**:
   - Check Deploys → Latest deploy → Deploy log
   - Useful for debugging build issues

3. **Function logs**:
   - Check Functions → Function log
   - See API route activity

## 🎉 Success!

Your portfolio is now live! Share your site:

- **Netlify URL**: `https://your-site-name.netlify.app`
- **Custom Domain**: (if you set one up)

## 🔐 Security Best Practices

1. **Never commit `.env.local`** - It's in `.gitignore`
2. **Keep API secrets secure** - Only in Netlify environment variables
3. **Rotate credentials periodically** - Update Cloudinary keys every few months
4. **Enable HTTPS** - Netlify does this by default

## 🚀 Next Steps

- [ ] Add a custom domain
- [ ] Set up Google Analytics
- [ ] Configure SEO metadata
- [ ] Add Open Graph images
- [ ] Set up email notifications for new builds
- [ ] Create a staging environment

---

Need help? Check:
- [Netlify Docs](https://docs.netlify.com)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Cloudinary Docs](https://cloudinary.com/documentation)
