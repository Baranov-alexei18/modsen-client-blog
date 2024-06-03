import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {},
};

if (process.env.NODE_ENV === 'production') {
  nextConfig.compiler.reactRemoveProperties = { properties: ['data-testid'] };
}

export default withNextIntl(nextConfig);
