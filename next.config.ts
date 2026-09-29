import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['three', 'gsap'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
