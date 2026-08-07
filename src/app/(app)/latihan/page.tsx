import { Metadata } from 'next'
import { prisma, ensureDbReady } from '@/lib/prisma'
import { ProjectCatalogClient } from './ProjectCatalogClient'
import { PlayCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Latihan | VirtualWork - Simulasi Kerja Virtual',
  description: 'Pilih proyek latihan simulasi kerja dari 66+ proyek di 11 kategori dengan 3 level kesulitan (Easy, Medium, Complex). Bangun portofolio profesionalmu.',
}

export const dynamic = 'force-dynamic'

interface LatihanPageProps {
  searchParams: Promise<{ category?: string; level?: string }>
}

async function getProjects() {
  try {
    await ensureDbReady()
    const projects = await prisma.project.findMany({
      select: {
        id: true,
        title: true,
        level: true,
        brief: true,
        category: {
          select: {
            slug: true,
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    return projects
  } catch (error) {
    console.error('[LATIHAN] Failed to fetch projects:', error)
    return []
  }
}

export default async function LatihanPage({ searchParams }: LatihanPageProps) {
  const params = await searchParams
  const projects = await getProjects()

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300 text-sm font-medium mb-4">
            <PlayCircle className="h-4 w-4" />
            Menu Latihan
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="gradient-text">Latihan & Proyek Simulasi</span>
          </h1>
          <p className="mt-2 text-muted-foreground text-lg">
            {projects.length} proyek simulasi kerja di 11 kategori dengan 3 level kesulitan (Easy, Medium, Complex)
          </p>
        </div>

        <ProjectCatalogClient
          projects={projects}
          initialCategory={params.category}
          initialLevel={params.level}
        />
      </div>
    </main>
  )
}
