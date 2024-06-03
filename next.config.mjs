import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    reactRemoveProperties: { properties: ['data-testid'] },
  },
};

export default withNextIntl(nextConfig);
