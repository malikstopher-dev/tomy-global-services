import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['fr', 'en', 'pt'],
  defaultLocale: 'fr',
  localePrefix: 'always',
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|images|hero-bg\\.mp4|favicon\\.ico).*)'],
};
