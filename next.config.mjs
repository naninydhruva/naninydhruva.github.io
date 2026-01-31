/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack Configuration
  turbopack: {
    resolveAlias: {
      '@/*': './src/*',
    },
  },

  // Production Optimizations
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // Image Optimization - Required for static export
  images: {
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
  },

  // Output Configuration - Static HTML export
  output: "export",
};

export default nextConfig;
