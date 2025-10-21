# 🚀 Quick Deploy to Vercel

Follow these steps to get your portfolio live in 5 minutes!

## Step 1: Push to GitHub

```bash
# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit your code
git commit -m "Initial commit: Portfolio ready for deployment"

# Create main branch
git branch -M main

# Add your GitHub repository (create one first at github.com/new)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New..."** → **"Project"**
3. Select your portfolio repository
4. Vercel auto-detects Next.js settings ✨
5. Click **"Environment Variables"** and add:
   ```
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = your_cloudinary_cloud_name
   CLOUDINARY_API_KEY = your_cloudinary_api_key
   CLOUDINARY_API_SECRET = your_cloudinary_api_secret
   ```
6. Select all environments: Production, Preview, Development
7. Click **"Deploy"**
8. Wait 1-2 minutes ⏱️
9. Your site is live! 🎉

## Step 3: Get Cloudinary Credentials

1. Go to [cloudinary.com](https://cloudinary.com) and sign up/login
2. Go to **Dashboard** → **Account Details**
3. Copy these values:
   - **Cloud Name**
   - **API Key** 
   - **API Secret**
4. Add them to Netlify environment variables (see Step 2.6 above)

## Step 4: Upload Images to Gallery

1. In Cloudinary Dashboard, click **Media Library**
2. Create a folder named **"gallery"**
3. Upload your images to this folder
4. Add tags (optional): workstation, daily, projects, etc.
5. Images will automatically appear in your portfolio gallery!

## Step 5: Customize Your Site

Edit `lib/constants.ts` to update:
- Your name
- Email address
- Social media links
- GitHub username
- Blog platform (Medium/Hashnode)

Then push changes:
```bash
git add .
git commit -m "Update: Personal information"
git push
```

Vercel will automatically rebuild and deploy! 🚀

## ✨ Vercel Features You Get

✅ Zero configuration - Next.js auto-detected  
✅ Automatic HTTPS and SSL  
✅ Global CDN for fast loading  
✅ Preview deployments for every branch  
✅ Built-in analytics (free!)  
✅ Instant rollbacks  
✅ 99.99% uptime  

## 🎨 Your Portfolio Features

✅ Home page with projects from GitHub  
✅ About page with tech stack  
✅ Work page with all repositories  
✅ Gallery with Cloudinary images  
✅ Contact page with social links  
✅ Blog integration (Medium/Hashnode)  
✅ Floating navigation bar  
✅ Responsive design  

## 📝 Need Help?

See detailed guides:
- `DEPLOYMENT.md` - Full deployment guide
- `GALLERY_SETUP.md` - Gallery configuration
- `BLOG_SETUP.md` - Blog integration
- `README.md` - Project overview

---

**You're all set!** 🎊 Share your portfolio with the world!
