import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    basePath: "/tow-car-web",
    output: "export",
    reactStrictMode: true,
};
const withNextIntl = createNextIntlPlugin('src/libs/i18n.ts');

export default withNextIntl(nextConfig);
