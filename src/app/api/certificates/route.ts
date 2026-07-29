import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

function generateCertificateCode(category: string): string {
  const year = new Date().getFullYear();
  const initials = category
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
    .padEnd(2, 'X');
  const random = Math.floor(1000 + Math.random() * 9000);
  return `CERT-${year}-${initials}-${random}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, projectId } = body;

    if (!userId || !projectId) {
      return NextResponse.json({ error: 'userId and projectId are required' }, { status: 400 });
    }

    const submission = await prisma.submission.findUnique({
      where: { userId_projectId: { userId, projectId } },
    });

    if (!submission) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
    }

    if (submission.status !== 'COMPLETED') {
      return NextResponse.json({ error: 'Submission is not completed' }, { status: 400 });
    }

    const existingCertificate = await prisma.certificate.findUnique({
      where: { userId_projectId: { userId, projectId } },
    });

    if (existingCertificate) {
      return NextResponse.json(
        { error: 'Certificate already exists for this submission' },
        { status: 409 }
      );
    }

    const project = await prisma.project.findUnique({ 
      where: { id: projectId },
      include: { category: true }
    });
    const categoryName = project?.category?.name || 'GN';

    const certificateCode = generateCertificateCode(categoryName);

    const certificate = await prisma.certificate.create({
      data: {
        userId,
        projectId,
        certificateCode,
      },
    });

    return NextResponse.json({
      success: true,
      certificate: {
        id: certificate.id,
        certificateCode: certificate.certificateCode,
        issuedAt: certificate.issuedAt,
      },
    });
  } catch (error: any) {
    if (error?.code === 'P2002') {
      return NextResponse.json(
        { error: 'Certificate already exists for this submission' },
        { status: 409 }
      );
    }
    console.error('Certificate generation error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
