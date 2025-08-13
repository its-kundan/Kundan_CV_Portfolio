import Image from 'next/image';
import Link from 'next/link';
import Pill from '../ui/Pill';

interface PostCardProps {
  post: {
    _id: string;
    title: string;
    slug: string;
    excerpt: string;
    coverImage?: string;
    tags: string[];
    author: {
      name: string;
      image?: string;
    };
    publishedAt: string;
    readTime: number;
    views: number;
  };
}

export default function PostCard({ post }: PostCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-48 w-full group">
          <Image 
            src={post.coverImage || '/images/hero-image.png'} 
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 3).map((tag, index) => (
            <Pill key={index} variant="primary" size="sm">
              {tag}
            </Pill>
          ))}
          {post.tags.length > 3 && (
            <Pill variant="secondary" size="sm">
              +{post.tags.length - 3}
            </Pill>
          )}
        </div>
        
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-xl font-semibold mb-2 text-white hover:text-blue-400 transition-colors duration-200 line-clamp-2">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            {post.author.image && (
              <Image
                src={post.author.image}
                alt={post.author.name}
                width={24}
                height={24}
                className="rounded-full"
              />
            )}
            <span>{post.author.name}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span>{formatDate(post.publishedAt)}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
            <span>•</span>
            <span>{post.views} views</span>
          </div>
        </div>
      </div>
    </article>
  );
}
