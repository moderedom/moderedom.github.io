import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    localPatterns: [
      {
        pathname: '/public/assets/images/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
