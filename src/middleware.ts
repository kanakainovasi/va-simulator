import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const SESSION_COOKIE = 'session-token'

function getJwtSecret(): Uint8Array {
  const secret = process.env.JWT_SECRET
  if (!secret) {
    throw new Error('JWT_SECRET environment variable is required')
  }
  return new TextEncoder().encode(secret)
}

async function hasValidSession(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get(SESSION_COOKIE)?.value
  if (!token) return false
  try {
    await jwtVerify(token, getJwtSecret())
    return true
  } catch {
    return false
  }
}

const PUBLIC_PATHS = ['/login', '/register']
const AUTH_PATHS = ['/login', '/register']

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isAuthenticated = await hasValidSession(request)

  // Pengguna yang sudah login tidak boleh mengakses halaman login/register
  if (isAuthenticated && AUTH_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.redirect(new URL('/latihan', request.url))
  }

  // Pengguna yang belum login dialihkan ke gerbang login
  if (!isAuthenticated && !PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('next', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Semua path kecuali:
     * - api (API routes)
     * - _next/static, _next/image (asst assets)
     * - favicon.ico, robots.txt, sitemap.xml (file publik)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}
