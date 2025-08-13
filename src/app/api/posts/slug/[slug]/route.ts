import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../../lib/db/connect';
import Post from '../../../../../models/Post';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB();

    const post = await Post.findOne({ 
      slug: params.slug,
      status: 'published' // Only published posts are publicly accessible
    })
      .populate('author', 'name email image')
      .lean();

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    // Increment view count
    await Post.findOneAndUpdate(
      { slug: params.slug },
      { $inc: { views: 1 } }
    );

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    );
  }
}
