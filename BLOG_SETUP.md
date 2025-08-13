# Blog System Setup Guide

This guide will help you set up the production-ready blog module with MongoDB Atlas, NextAuth, and admin RBAC.

## Features

- ✅ **Backend**: Next.js App Router route handlers
- ✅ **Database**: MongoDB Atlas with Mongoose
- ✅ **Authentication**: NextAuth with Google OAuth + Credentials
- ✅ **RBAC**: Admin-only post management, public reading
- ✅ **SEO**: Friendly slugs, Open Graph, metadata
- ✅ **UI**: Responsive design, skeleton loaders, search/filter
- ✅ **Security**: Zod validation, admin guards, secure API
- ✅ **Images**: Cloudinary integration (optional)
- ✅ **Performance**: Server-side pagination, caching

## Prerequisites

- Node.js 18+ and npm
- MongoDB Atlas account
- Google OAuth credentials (optional)
- Cloudinary account (optional)

## Installation

1. **Install Dependencies**
   ```bash
   npm install next-auth mongoose zod slugify cloudinary sharp react-hook-form @hookform/resolvers react-markdown
   ```

2. **Environment Setup**
   Create `.env.local` in your project root:
   ```env
   # MongoDB Atlas Connection
   MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net/blog-db?retryWrites=true&w=majority"
   
   # NextAuth Configuration
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-super-secret-key-here"
   
   # Google OAuth (Optional)
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   
   # Cloudinary (Optional - for image uploads)
   CLOUDINARY_CLOUD_NAME="your-cloud-name"
   CLOUDINARY_API_KEY="your-api-key"
   CLOUDINARY_API_SECRET="your-api-secret"
   ```

## MongoDB Atlas Setup

1. **Create Database**
   - Go to [MongoDB Atlas](https://cloud.mongodb.com)
   - Create a new cluster
   - Create a database named `blog-db`
   - Create a user with read/write permissions

2. **Get Connection String**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<username>`, `<password>`, and `<dbname>` with your values

## Google OAuth Setup (Optional)

1. **Create OAuth Credentials**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select existing
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`

2. **Add to Environment**
   - Copy Client ID and Client Secret to `.env.local`

## Cloudinary Setup (Optional)

1. **Create Account**
   - Sign up at [Cloudinary](https://cloudinary.com)
   - Get your Cloud Name, API Key, and API Secret

2. **Add to Environment**
   - Add the credentials to `.env.local`

## Database Models

The system includes three main models:

### User Model
- `name`: User's display name
- `email`: Unique email address
- `password`: Hashed password (for credentials auth)
- `image`: Profile image URL
- `role`: 'admin' or 'reader'

### Post Model
- `title`: Post title
- `slug`: SEO-friendly URL slug
- `content`: Post content
- `excerpt`: Brief description
- `coverImage`: Featured image URL
- `tags`: Array of tags
- `author`: Reference to User
- `status`: 'draft' or 'published'
- `publishedAt`: Publication date
- `readTime`: Estimated reading time
- `views`: View count

## API Routes

### Public Routes
- `GET /api/posts` - List published posts with pagination
- `GET /api/posts/slug/[slug]` - Get post by slug
- `GET /api/posts/[id]` - Get post by ID

### Admin Routes (Protected)
- `POST /api/posts` - Create new post
- `PUT /api/posts/[id]` - Update post
- `DELETE /api/posts/[id]` - Delete post
- `POST /api/upload` - Upload image to Cloudinary

### Auth Routes
- `GET/POST /api/auth/[...nextauth]` - NextAuth endpoints

## Pages Structure

### Public Pages
- `/blog` - Blog listing with search/filter
- `/blog/[slug]` - Individual blog post

### Admin Pages
- `/dashboard` - Admin dashboard
- `/dashboard/posts/new` - Create new post
- `/dashboard/posts/[id]/edit` - Edit post
- `/auth/signin` - Sign in page

## Usage

### Creating an Admin User

1. **Via Google OAuth**
   - Sign in with Google
   - Manually update user role in MongoDB:
   ```javascript
   db.users.updateOne(
     { email: "admin@example.com" },
     { $set: { role: "admin" } }
   )
   ```

2. **Via Credentials**
   - Create user directly in database with hashed password:
   ```javascript
   const bcrypt = require('bcryptjs');
   const hashedPassword = await bcrypt.hash('your-password', 12);
   
   db.users.insertOne({
     name: "Admin User",
     email: "admin@example.com",
     password: hashedPassword,
     role: "admin"
   });
   ```

### Creating Posts

1. Sign in as admin at `/auth/signin`
2. Navigate to `/dashboard`
3. Click "Create New Post"
4. Fill in the form:
   - Title (required)
   - Excerpt (required, max 200 chars)
   - Content (required)
   - Tags (required, at least 1)
   - Cover Image (optional)
   - Status (draft/published)

### Managing Posts

- View all posts in admin dashboard
- Filter by status (all/published/draft)
- Edit posts inline
- Delete posts with confirmation
- View post statistics

## Features

### Search & Filter
- Full-text search across title, content, and tags
- Tag-based filtering
- Pagination with configurable limits
- URL-based state management

### SEO Optimization
- Automatic slug generation
- Open Graph metadata
- Twitter Card support
- Structured data for articles
- Sitemap generation (can be added)

### Performance
- Server-side pagination
- Image optimization with Next.js Image
- Caching with revalidation
- Lazy loading components

### Security
- Role-based access control
- Input validation with Zod
- CSRF protection via NextAuth
- Secure API endpoints
- Admin route protection

## Customization

### Styling
- All components use Tailwind CSS
- Dark theme optimized
- Responsive design
- Customizable color scheme

### Content
- Support for markdown content
- Rich text editor (can be integrated)
- Image upload with Cloudinary
- Tag management

### Features
- Add comment system
- Implement categories
- Add social sharing
- Newsletter integration
- Analytics tracking

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms
- Ensure environment variables are set
- Configure MongoDB Atlas network access
- Set up proper redirects for NextAuth

## Troubleshooting

### Common Issues

1. **MongoDB Connection**
   - Check connection string format
   - Verify network access in Atlas
   - Ensure database user has proper permissions

2. **NextAuth Issues**
   - Verify NEXTAUTH_SECRET is set
   - Check callback URLs in OAuth providers
   - Ensure NEXTAUTH_URL matches deployment URL

3. **Image Upload**
   - Verify Cloudinary credentials
   - Check file size limits
   - Ensure proper CORS configuration

### Debug Mode
Add to `.env.local`:
```env
DEBUG=next-auth:*
```

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review NextAuth documentation
3. Check MongoDB Atlas logs
4. Verify environment variables

## License

This blog system is part of your portfolio project and follows the same license terms.
