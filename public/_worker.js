export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Bypass for static assets next uses
    if (
      url.pathname.startsWith('/_next') ||
      url.pathname.includes('.') || 
      url.pathname.startsWith('/api') ||
      url.pathname === '/favicon.ico'
    ) {
      return env.ASSETS.fetch(request);
    }

    // Do not redirect if already has locale in URL
    if (url.pathname.startsWith('/pt') || url.pathname.startsWith('/en')) {
      return env.ASSETS.fetch(request);
    }

    // Check if there is a cookie override
    const cookieString = request.headers.get('Cookie') || '';
    const match = cookieString.match(new RegExp('(^| )NEXT_LOCALE=([^;]+)'));
    const cookieLocale = match ? match[2] : null;

    if (cookieLocale && (cookieLocale === 'pt' || cookieLocale === 'en')) {
      return Response.redirect(`${url.origin}/${cookieLocale}${url.pathname === '/' ? '' : url.pathname}`, 302);
    }

    // Get country from Cloudflare header
    const country = request.headers.get('CF-IPCountry') || 'US';
    const locale = country === 'BR' ? 'pt' : 'en';

    // Redirect to the appropriate locale
    return Response.redirect(`${url.origin}/${locale}${url.pathname === '/' ? '' : url.pathname}`, 302);
  }
};
