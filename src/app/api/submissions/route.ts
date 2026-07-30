import { NextResponse } from 'next/server';
import { prisma, ensureDbReady } from '@/lib/prisma';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    await ensureDbReady();

    const formData = await request.formData();
    const projectId = formData.get('projectId') as string;
    const outputUrl = formData.get('outputUrl') as string;
    const file = formData.get('file') as File | null;
    const userId = (formData.get('userId') as string) || 'demo-user';

    if (!projectId) {
      return NextResponse.json({ error: 'projectId is required' }, { status: 400 });
    }

    if (!outputUrl && !file) {
      return NextResponse.json({ error: 'Either outputUrl or file is required' }, { status: 400 });
    }

    if (outputUrl) {
      try {
        new URL(outputUrl);
      } catch {
        return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 });
      }
    }

    const user = await prisma.user.upsert({
      where: { id: userId },
      update: {},
      create: {
        id: userId,
        name: 'Demo User',
        email: `${userId}@demo.com`,
      },
    });

    let audioFilePath: string | undefined;

    if (file) {
      const uploadsDir = join(process.cwd(), 'uploads');
      await mkdir(uploadsDir, { recursive: true });

      const buffer = Buffer.from(await file.arrayBuffer());
      const uniqueFilename = `${Date.now()}-${file.name}`;
      const filePath = join(uploadsDir, uniqueFilename);

      await writeFile(filePath, buffer);
      audioFilePath = uniqueFilename;
    }

    const outputUrls = outputUrl ? JSON.stringify([outputUrl]) : null;

    const submission = await prisma.submission.create({
      data: {
        userId: user.id,
        projectId,
        outputUrls,
        audioFilePath,
        status: 'COMPLETED',
      },
    });

    return NextResponse.json({
      success: true,
      submissionId: submission.id,
      message: 'Submission created successfully',
    });
  } catch (error: any) {
    if (error?.code === 'P2002') {
      return NextResponse.json(
        { error: 'Submission already exists for this user and project' },
        { status: 409 }
      );
    }
    console.error('Submission error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
