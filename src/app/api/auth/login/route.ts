import { NextRequest, NextResponse } from 'next/server'
import { prisma, ensureDbReady } from '@/lib/prisma'
import { verifyPassword, createSession } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  console.log('[LOGIN] Request received')
  try {
    await ensureDbReady()

    const { email, password } = await request.json()
    console.log('[LOGIN] Payload:', { email: !!email, password: !!password })

    if (!email || !password) {
      console.log('[LOGIN] Missing fields')
      return NextResponse.json(
        { error: 'Email dan password wajib diisi' },
        { status: 400 }
      )
    }

    console.log('[LOGIN] Finding user for email:', email)
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      console.log('[LOGIN] User not found:', email)
      return NextResponse.json(
        { error: 'Email atau password salah' },
        { status: 401 }
      )
    }
    console.log('[LOGIN] User found, id:', user.id)

    if (!user.bio?.startsWith('pwd:')) {
      console.log('[LOGIN] No pwd: prefix in bio - invalid credential format')
      return NextResponse.json(
        { error: 'Email atau password salah' },
        { status: 401 }
      )
    }

    console.log('[LOGIN] Verifying password...')
    const hashedPassword = user.bio.replace('pwd:', '')
    const isValid = await verifyPassword(password, hashedPassword)
    if (!isValid) {
      console.log('[LOGIN] Password verification failed for:', email)
      return NextResponse.json(
        { error: 'Email atau password salah' },
        { status: 401 }
      )
    }
    console.log('[LOGIN] Password verified successfully')

    console.log('[LOGIN] Creating session...')
    await createSession({
      id: user.id,
      name: user.name || '',
      email: user.email || '',
      image: user.image,
    })
    console.log('[LOGIN] Session created, returning success')

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
      },
    })
  } catch (error) {
    console.error('[LOGIN] ERROR:', error)
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('[LOGIN] Error message:', message)
    return NextResponse.json(
      { error: 'Gagal login: ' + message },
      { status: 500 }
    )
  }
}
