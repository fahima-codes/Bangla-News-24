import { headers } from 'next/headers';
import { NextResponse, type NextRequest } from 'next/server';
import { auth } from './lib/auth';

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  if (!user) {
    return NextResponse.redirect(new URL('/sign-up', request.url));
  }
}

export const config = {
  matcher: ['/profile', 'news/:path'],
};
