# Blog Integration Setup

Your portfolio now supports displaying blog posts from **Medium** or **Hashnode** on the homepage under "Featured Work".

## Quick Setup

### Option 1: Medium

1. Open `lib/constants.ts`
2. Add your Medium username to the `medium` field:
   ```typescript
   social: {
     // ...other social links
     medium: "https://medium.com/@yourusername", // Replace with your Medium username
     hashnode: "",
   }
   ```

3. Make sure your Medium profile has public posts

**Example:**
```typescript
medium: "https://medium.com/@rubberpirate",
```

### Option 2: Hashnode

1. Open `lib/constants.ts`
2. Add your Hashnode username to the `hashnode` field:
   ```typescript
   social: {
     // ...other social links
     medium: "",
     hashnode: "https://hashnode.com/@yourusername", // Replace with your Hashnode username
   }
   ```

**Example:**
```typescript
hashnode: "https://hashnode.com/@rubberpirate",
```

## Features

✅ **Automatic fetching**: Pulls your latest 3 posts from your blog platform  
✅ **RSS parsing**: For Medium (uses Medium's RSS feed)  
✅ **GraphQL integration**: For Hashnode (uses official Hashnode API)  
✅ **Caching**: API responses cached for 1 hour to improve performance  
✅ **Responsive design**: Blog cards match the brutalist aesthetic  
✅ **Metadata display**: Shows title, description, publish date, and categories/tags  
✅ **External links**: All posts link directly to your blog platform  

## How It Works

1. **API Route** (`app/api/blog/route.ts`):
   - Checks which platform is configured (Medium or Hashnode)
   - Fetches latest posts from that platform
   - Parses and formats the data
   - Returns JSON response with caching

2. **Homepage Display** (`app/page.tsx`):
   - Fetches posts from the API on page load
   - Displays up to 3 latest posts in a grid
   - Shows "View all" link to your blog platform
   - Gracefully handles no posts scenario

## Customization

### Change Number of Posts Displayed

In `app/page.tsx`, update the slice value:
```typescript
blogPosts.slice(0, 3) // Change 3 to any number
```

### Update Cache Duration

In `app/api/blog/route.ts`, modify:
```typescript
export const revalidate = 3600; // Seconds (3600 = 1 hour)
```

### Styling

Blog cards use these classes (in `app/page.tsx`):
- `border border-border` - Default border
- `hover:border-accent` - Border on hover
- `group` - For grouped hover effects
- `line-clamp-2` / `line-clamp-3` - Text truncation

## Troubleshooting

### No posts appearing?

1. **Check configuration**: Ensure you've added your username to `lib/constants.ts`
2. **Check console**: Open browser DevTools → Console for any error messages
3. **Verify public posts**: Make sure you have published posts on your blog platform
4. **Check username format**: 
   - Medium: Just the username without `@` (e.g., `yourusername` not `@yourusername`)
   - Hashnode: Can be username or publication URL

### Medium RSS not loading?

- Medium RSS feeds sometimes have CORS restrictions
- The API route runs server-side, so this shouldn't be an issue
- Make sure your Medium profile is public

### Hashnode GraphQL errors?

- Verify your username is correct
- Check that you have at least one publication on Hashnode
- Ensure your posts are published (not drafts)

## API Response Format

The `/api/blog` endpoint returns:
```json
{
  "posts": [
    {
      "title": "Post Title",
      "link": "https://...",
      "pubDate": "2025-01-01T00:00:00Z",
      "description": "Post excerpt...",
      "categories": ["tag1", "tag2"]
    }
  ]
}
```

## Performance

- **Initial load**: Posts fetched on page load (client-side)
- **API caching**: 1 hour cache + 2 hour stale-while-revalidate
- **Minimal impact**: Only loads when homepage is visited
- **No blocking**: Page loads even if blog API fails

## Next Steps

1. Add your blog username to `lib/constants.ts`
2. Restart your dev server: `npm run dev`
3. Visit homepage to see your latest blog posts
4. Customize styling if needed

Enjoy showcasing your blog posts! 📝✨
