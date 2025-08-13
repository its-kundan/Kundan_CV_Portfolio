import slugify from 'slugify';
import Post from '../models/Post';

export function generateSlug(title: string): string {
  return slugify(title, {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g,
  });
}

export async function generateUniqueSlug(title: string, excludeId?: string): Promise<string> {
  let slug = generateSlug(title);
  let counter = 1;
  let uniqueSlug = slug;

  while (true) {
    const query: any = { slug: uniqueSlug };
    if (excludeId) {
      query._id = { $ne: excludeId };
    }

    const existingPost = await Post.findOne(query);
    
    if (!existingPost) {
      break;
    }

    uniqueSlug = `${slug}-${counter}`;
    counter++;
  }

  return uniqueSlug;
}
