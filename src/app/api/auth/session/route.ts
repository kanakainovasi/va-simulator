import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    console.log('[SESSION] Checking session...')
    const user = await getSession()

    if (!user) {
      console.log('[SESSION] No active session')
      return NextResponse.json({ user: null })
    }

    console.log('[SESSION] Active session for:', user.email)
    return NextResponse.json({ user })
  } catch (error) {
    console.error('[SESSION] ERROR:', error)
    return NextResponse.json({ user: null })
  }
}
