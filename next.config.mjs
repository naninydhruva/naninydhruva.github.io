/** @type {import('next').NextConfig} */
const nextConfig = {
  // Environment Variables

  // Production Optimizations
  reactStrictMode: true,
  poweredByHeader: false, // Removes the X-Powered-By header
  compress: true, // Enable gzip compression
  outputFileTracingRoot: "/*", // Optimize serverless functions

  // Image Optimization
  images: {
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
  },

  // Experimental Features
  experimental: {
    // Enable modern optimizations
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Output Configuration
  output: "export", // Creates a standalone build that can be deployed without dependencies

  // Webpack Configuration (optional advanced customization)
  webpack: (config, { dev, isServer }) => {
    // You can modify the webpack config here if needed

    // Example: Add a webpack plugin only in production
    if (!dev) {
      // Production-only webpack configurations
    }

    return config;
  },
};

export default nextConfig;
