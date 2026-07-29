import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      )
    }

    const certificates = await prisma.certificate.findMany({
      where: { userId },
      include: {
        project: {
          include: {
            category: true,
          },
        },
      },
      orderBy: { issuedAt: 'desc' },
    })

    return NextResponse.json({ certificates })
  } catch (error) {
    console.error('Fetch certificates error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch certificates' },
      { status: 500 }
    )
  }
}
