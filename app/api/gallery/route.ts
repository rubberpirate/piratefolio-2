import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

// Cache configuration
export const revalidate = 60; // Revalidate every 60 seconds

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get('folder') || 'gallery'; // Default folder name
    const maxResults = parseInt(searchParams.get('max_results') || '100'); // Increased to 100

    // Fetch images from Cloudinary folder with optimization
    const results = await cloudinary.search
      .expression(`folder:${folder}/*`)
      .sort_by('created_at', 'desc')
      .max_results(maxResults)
      .with_field('tags')
      .with_field('context')
      .execute();

    return NextResponse.json(
      {
        images: results.resources,
        total: results.total_count,
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    return NextResponse.json(
      { error: 'Failed to fetch images' },
      { status: 500 }
    );
  }
}
