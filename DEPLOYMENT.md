# Deployment Guide

This guide will help you deploy your portfolio to Netlify and set up Git version control.

## 📦 Prerequisites

- Node.js 18 or higher installed
- Git installed on your machine
- GitHub account
- Netlify account (free tier works great!)
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
   - **Build command**: `npm run build`
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
