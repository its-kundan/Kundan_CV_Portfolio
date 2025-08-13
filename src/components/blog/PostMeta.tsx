import Image from 'next/image';
import Pill from '../ui/Pill';

interface PostMetaProps {
  post: {
    title: string;
    tags: string[];
    author: {
      name: string;
      image?: string;
    };
    publishedAt: string;
    readTime: number;
    views: number;
    coverImage?: string;
  };
}

export default function PostMeta({ post }: PostMetaProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="mb-8">
      {post.coverImage && (
        <div className="relative h-64 md:h-96 w-full mb-6 rounded-lg overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {post.title}
      </h1>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, index) => (
          <Pill key={index} variant="primary">
            {tag}
          </Pill>
        ))}
      </div>
      
      <div className="flex items-center justify-between text-gray-400 mb-6">
        <div className="flex items-center space-x-3">
          {post.author.image && (
            <Image
              src={post.author.image}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          <div>
            <p className="font-medium text-white">{post.author.name}</p>
            <p className="text-sm">{formatDate(post.publishedAt)}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 text-sm">
          <span>{post.readTime} min read</span>
          <span>•</span>
          <span>{post.views} views</span>
        </div>
      </div>
    </div>
  );
}
