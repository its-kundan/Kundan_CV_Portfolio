import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PostMeta from '../../../../components/blog/PostMeta';
import Pill from '../../../../components/ui/Pill';

interface PostPageProps {
  params: { slug: string };
}

async function getPost(slug: string) {
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/slug/${slug}`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      return null;
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: post.coverImage ? [post.coverImage] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <article className="max-w-4xl mx-auto">
          <PostMeta post={post} />
          
          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div 
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Pill key={index} variant="primary">
                  {tag}
                </Pill>
              ))}
            </div>
          </div>

          {/* Author Info */}
          <div className="mt-8 p-6 bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-4">About the Author</h3>
            <div className="flex items-center space-x-4">
              {post.author.image && (
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full"
                />
              )}
              <div>
                <h4 className="text-white font-medium">{post.author.name}</h4>
                <p className="text-gray-400 text-sm">
                  Published on {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

// Simple content formatting function
function formatContent(content: string): string {
  // Convert line breaks to paragraphs
  return content
    .split('\n\n')
    .map(paragraph => `<p>${paragraph.replace(/\n/g, '<br>')}</p>`)
    .join('');
}
