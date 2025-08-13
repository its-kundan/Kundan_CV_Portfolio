import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../lib/db/connect';
import Post from '../../../../models/Post';
import { updatePostSchema } from '../../../../lib/validation/postSchemas';
import { requireAdmin } from '../../../../lib/auth/requireAdmin';
import { generateUniqueSlug } from '../../../../lib/slug';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const post = await Post.findById(params.id)
      .populate('author', 'name email image')
      .lean();

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    // Increment view count
    await Post.findByIdAndUpdate(params.id, { $inc: { views: 1 } });

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await requireAdmin(request);
    if (session instanceof NextResponse) return session;

    await connectDB();

    const body = await request.json();
    const validatedData = updatePostSchema.parse(body);

    // Check if post exists
    const existingPost = await Post.findById(params.id);
    if (!existingPost) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    // Generate new slug if title changed
    let slug = existingPost.slug;
    if (validatedData.title && validatedData.title !== existingPost.title) {
      slug = await generateUniqueSlug(validatedData.title, params.id);
    }

    // Update post
    const updatedPost = await Post.findByIdAndUpdate(
      params.id,
      { ...validatedData, slug },
      { new: true, runValidators: true }
    ).populate('author', 'name email image');

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error('Error updating post:', error);
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to update post' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await requireAdmin(request);
    if (session instanceof NextResponse) return session;

    await connectDB();

    const post = await Post.findByIdAndDelete(params.id);

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    );
  }
}
