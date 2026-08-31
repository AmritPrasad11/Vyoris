import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@vyoris/ui', '@vyoris/config', '@vyoris/types'],
  reactStrictMode: true,
};

export default nextConfig;
