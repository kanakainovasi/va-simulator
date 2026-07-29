import { Metadata } from 'next'
import { prisma, ensureDbReady } from '@/lib/prisma'
import { ProjectCatalogClient } from './ProjectCatalogClient'

export const metadata: Metadata = {
  title: 'Browse Projects | VirtualWork - Simulasi Kerja Virtual',
  description: 'Jelajahi 66+ proyek simulasi kerja di 11 kategori: Data Analyst, Project Coordinator, Social Media Management, dan lainnya. Bangun portofolio profesional dengan proyek nyata.',
  keywords: [
    'simulasi kerja virtual',
    'proyek simulasi gratis',
    'latihan portofolio',
    'data analyst project',
    'project coordinator training',
    'social media management project',
    'virtual work project',
    'proyek magang virtual',
  ],
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Browse Projects | VirtualWork',
    description: '66+ proyek simulasi kerja di 11 kategori untuk membangun portofolio profesional.',
    type: 'website',
  },
}

interface ProjectsPageProps {
  searchParams: Promise<{ category?: string; level?: string }>
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  await ensureDbReady()
  const params = await searchParams

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

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="gradient-text">Browse Projects</span>
          </h1>
          <p className="mt-2 text-muted-foreground text-lg">
            Jelajahi {projects.length}+ proyek simulasi kerja di 11 kategori dengan 3 level kesulitan
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
