import { NextRequest, NextResponse } from 'next/server'
import { prisma, ensureDbReady, syncDbToBlob } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    await ensureDbReady()

    const { name, email, category, message } = await request.json()

    if (!name || !email || !category || !message) {
      return NextResponse.json(
        { error: 'Semua field wajib diisi' },
        { status: 400 }
      )
    }

    const validCategories = ['saran', 'bug', 'komplain']
    if (!validCategories.includes(category)) {
      return NextResponse.json(
        { error: 'Kategori tidak valid' },
        { status: 400 }
      )
    }

    const feedback = await prisma.feedback.create({
      data: {
        name,
        email,
        category,
        message,
      },
    })

    await syncDbToBlob()

    // Send email via Web3Forms
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
          subject: `[VirtualWork ${category.toUpperCase()}] Feedback dari ${name}`,
          email: 'kanaka.inovasi@gmail.com',
          from_name: 'VirtualWork Feedback',
          message: `
Nama: ${name}
Email: ${email}
Kategori: ${category.toUpperCase()}

Pesan:
${message}

---
Feedback ID: ${feedback.id}
          `.trim(),
        }),
      })
    } catch {
      // Email sending is optional, feedback is already saved in DB
      console.error('Failed to send feedback email')
    }

    return NextResponse.json({
      success: true,
      id: feedback.id,
    })
  } catch (error) {
    console.error('Feedback submission error:', error)
    return NextResponse.json(
      { error: 'Gagal mengirim feedback' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    await ensureDbReady()

    const feedbacks = await prisma.feedback.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ feedbacks })
  } catch (error) {
    console.error('Fetch feedback error:', error)
    return NextResponse.json(
      { error: 'Gagal mengambil data feedback' },
      { status: 500 }
    )
  }
}
