import createMiddleware from 'next-intl/middleware';

import {
  defaultLocale, localePrefix, locales, pathnames,
} from './config';

export default createMiddleware({
  defaultLocale,
  locales,
  pathnames,
  localePrefix,
});

export const config = {
  matcher: ['/', '/(ru|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
