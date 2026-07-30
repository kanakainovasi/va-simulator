import { NextRequest, NextResponse } from 'next/server'
import { prisma, ensureDbReady } from '@/lib/prisma'
import { hashPassword, createSession } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  console.log('[REGISTER] Request received')
  try {
    await ensureDbReady()

    const body = await request.json()
    const { name, email, password } = body
    console.log('[REGISTER] Payload:', { name: !!name, email: !!email, password: !!password })

    if (!name || !email || !password) {
      console.log('[REGISTER] Missing fields')
      return NextResponse.json(
        { error: 'Nama, email, dan password wajib diisi' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      console.log('[REGISTER] Password too short')
      return NextResponse.json(
        { error: 'Password minimal 6 karakter' },
        { status: 400 }
      )
    }

    console.log('[REGISTER] Checking existing user for email:', email)
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      console.log('[REGISTER] Email already registered:', email)
      return NextResponse.json(
        { error: 'Email sudah terdaftar' },
        { status: 400 }
      )
    }

    console.log('[REGISTER] Hashing password...')
    const hashedPassword = await hashPassword(password)
    console.log('[REGISTER] Password hashed, creating user...')

    const user = await prisma.user.create({
      data: {
        name,
        email,
        bio: `pwd:${hashedPassword}`,
      },
    })
    console.log('[REGISTER] User created with id:', user.id)

    console.log('[REGISTER] Creating session...')
    await createSession({
      id: user.id,
      name: user.name || '',
      email: user.email || '',
      image: user.image,
    })
    console.log('[REGISTER] Session created, returning success')

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
    console.error('[REGISTER] ERROR:', error)
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('[REGISTER] Error message:', message)
    return NextResponse.json(
      { error: 'Gagal mendaftar: ' + message },
      { status: 500 }
    )
  }
}
