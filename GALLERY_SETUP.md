# Gallery Setup Instructions

## Cloudinary Configuration

### Step 1: Create Cloudinary Account
1. Go to [https://cloudinary.com/users/register/free](https://cloudinary.com/users/register/free)
2. Sign up for a free account (25GB storage, 25GB bandwidth/month)

### Step 2: Get Your Credentials
1. After signing in, go to your Dashboard: [https://console.cloudinary.com/](https://console.cloudinary.com/)
2. You'll see your credentials at the top:
   - **Cloud Name**
   - **API Key**
   - **API Secret**

### Step 3: Configure Environment Variables
1. Open `.env.local` file in your project root
2. Replace the placeholder values with your actual credentials:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_actual_cloud_name
CLOUDINARY_API_KEY=your_actual_api_key
CLOUDINARY_API_SECRET=your_actual_api_secret
```

3. Save the file and restart your development server

### Step 4: Upload Images to Cloudinary

#### Option A: Via Dashboard (Recommended for Getting Started)
1. Go to [https://console.cloudinary.com/console/media_library](https://console.cloudinary.com/console/media_library)
2. Click "Upload" button
3. Create a folder called **"gallery"** (important!)
4. Upload your images to this folder
5. Optionally, add tags to organize images (e.g., "workstation", "daily", "projects")

#### Option B: Via API (Advanced)
- Use the Cloudinary upload API
- Upload to folder: `gallery/`
- Add tags for filtering

### Step 5: View Your Gallery
1. Start your dev server: `npm run dev`
2. Navigate to: `http://localhost:3000/gallery`
3. Your images will appear automatically!

## Features

✅ **Automatic Image Display** - Images from Cloudinary `gallery` folder show automatically
✅ **Filter by Tags** - Organize images with tags (workstation, daily, projects, etc.)
✅ **Lightbox View** - Click any image to view full-size
✅ **Download Images** - Download button in lightbox
✅ **Responsive Grid** - Beautiful masonry-style grid layout
✅ **Sparkles Background** - Consistent with your site theme
✅ **Lazy Loading** - Optimized image loading

## Tips

### Organizing Images with Tags
When uploading to Cloudinary, add tags like:
- `workstation` - Your setup photos
- `daily` - Daily work/life images
- `projects` - Project screenshots
- `travel` - Travel photos
- `food` - Food photos

Tags will appear as filter buttons on the gallery page!

### Image Optimization
Cloudinary automatically optimizes images for web delivery:
- Automatic format conversion (WebP, AVIF)
- Responsive image sizing
- CDN delivery worldwide

### Folder Structure
Keep images in the `gallery` folder on Cloudinary. You can create subfolders:
- `gallery/2024/`
- `gallery/workstation/`
- etc.

The API will find all images in the gallery folder and its subfolders.

## Troubleshooting

**Images not showing?**
- Check `.env.local` has correct credentials
- Verify images are in `gallery` folder on Cloudinary
- Restart dev server after adding `.env.local`

**API Error?**
- Check Cloudinary credentials are correct
- Verify API secret is not exposed in client-side code

**Need more storage?**
- Free tier: 25GB storage, 25GB bandwidth
- Upgrade plans available on Cloudinary

## Next Steps

### Add Upload Widget (Optional)
To upload directly from your website:
```bash
npm install @cloudinary/react
```

Then integrate the upload widget component for browser-based uploads.

### Add More Metadata
Edit images on Cloudinary to add:
- Captions
- Alt text
- Custom metadata
