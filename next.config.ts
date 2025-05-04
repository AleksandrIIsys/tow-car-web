import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
};
const withNextIntl = createNextIntlPlugin('src/libs/i18n.ts');

export default withNextIntl(nextConfig);
