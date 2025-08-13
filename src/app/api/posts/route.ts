import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../lib/db/connect';
import Post from '../../../models/Post';
import { createPostSchema, postQuerySchema } from '../../../lib/validation/postSchemas';
import { requireAdmin } from '../../../lib/auth/requireAdmin';
import { generateUniqueSlug } from '../../../lib/slug';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const query = Object.fromEntries(searchParams.entries());
    
    const validatedQuery = postQuerySchema.parse(query);
    const { page, limit, search, tag, status } = validatedQuery;

    // Build query
    const queryFilter: any = {};
    
    if (status) {
      queryFilter.status = status;
    } else {
      // Default to published posts for public access
      queryFilter.status = 'published';
    }

    if (search) {
      queryFilter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } },
      ];
    }

    if (tag) {
      queryFilter.tags = { $in: [tag] };
    }

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Get posts with author information
    const posts = await Post.find(queryFilter)
      .populate('author', 'name email image')
      .sort({ publishedAt: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // Get total count for pagination
    const total = await Post.countDocuments(queryFilter);
    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      posts,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await requireAdmin(request);
    if (session instanceof NextResponse) return session;

    await connectDB();

    const body = await request.json();
    const validatedData = createPostSchema.parse(body);

    // Generate unique slug
    const slug = await generateUniqueSlug(validatedData.title);

    // Create post
    const post = await Post.create({
      ...validatedData,
      slug,
      author: session.user.id,
    });

    await post.populate('author', 'name email image');

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}
