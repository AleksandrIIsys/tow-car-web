import type { NextConfig } from 'next';
// import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  basePath: '/tow-car-web',
  output: 'standalone',
  reactStrictMode: true,
};
// const withNextIntl = createNextIntlPlugin();

export default nextConfig;
