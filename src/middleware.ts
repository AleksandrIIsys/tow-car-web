import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default async function middleware(
  request: NextRequest,
) {
  const path = request.nextUrl.pathname;

  if (path === '/sitemap.xml' || path === '/robots.txt') {
    return NextResponse.next();
  }

  return request;
}
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|monitoring|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
  ],
};
