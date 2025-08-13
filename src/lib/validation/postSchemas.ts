import { z } from 'zod';

export const createPostSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title must be less than 100 characters'),
  content: z.string().min(1, 'Content is required'),
  excerpt: z.string().min(1, 'Excerpt is required').max(200, 'Excerpt must be less than 200 characters'),
  coverImage: z.string().url('Invalid image URL').optional(),
  tags: z.array(z.string().min(1)).min(1, 'At least one tag is required').max(10, 'Maximum 10 tags allowed'),
  status: z.enum(['draft', 'published']).default('draft'),
});

export const updatePostSchema = createPostSchema.partial();

export const postQuerySchema = z.object({
  page: z.string().transform(Number).pipe(z.number().min(1)).default('1'),
  limit: z.string().transform(Number).pipe(z.number().min(1).max(50)).default('10'),
  search: z.string().optional(),
  tag: z.string().optional(),
  status: z.enum(['draft', 'published']).optional(),
});

export type CreatePostInput = z.infer<typeof createPostSchema>;
export type UpdatePostInput = z.infer<typeof updatePostSchema>;
export type PostQueryInput = z.infer<typeof postQuerySchema>;
