// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  serverExternalPackages: ["@react-email/render", "resend"],
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000']
    }
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push('@react-email/render');
    }
    
    // Handle react-dom/server import issue
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom/server': isServer ? 'react-dom/server' : 'react-dom/server.browser'
    }
    
    return config
  }
};

export default nextConfig;