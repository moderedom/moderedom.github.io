import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
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
