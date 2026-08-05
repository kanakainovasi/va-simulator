import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { getCategoryIcon, getCategoryColor } from '@/components/kategori/CategoryIcon'
import { MateriList } from '@/components/materi/MateriCard'
import { LatihanList } from '@/components/latihan/LatihanCard'
import { ArrowLeft, BookOpen, PlayCircle, LayoutGrid } from 'lucide-react'

export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ slug: string }>
}

async function getCategoryData(slug: string) {
  try {
    const [category, materis, latihans, projects] = await Promise.all([
      prisma.category.findUnique({ where: { slug } }),
      prisma.materi.findMany({
        where: { category: { slug } },
        orderBy: { order: 'asc' },
        include: { category: true },
      }),
      prisma.latihan.findMany({
        where: { category: { slug } },
        orderBy: { order: 'asc' },
        include: { category: true },
      }),
      prisma.project.findMany({
        where: { category: { slug } },
        select: { id: true, title: true, level: true },
        orderBy: { createdAt: 'asc' },
      }),
    ])
    return { category, materis, latihans, projects }
  } catch {
    return { category: null, materis: [], latihans: [], projects: [] }
  }
}

export default async function KategoriDetailPage({ params }: Props) {
  const { slug } = await params
  const { category, materis, latihans, projects } = await getCategoryData(slug)

  if (!category) {
    notFound()
  }

  const Icon = getCategoryIcon(category.slug, category.icon)

  const questionCounts: Record<string, number> = {}
  for (const latihan of latihans) {
    try {
      const parsed = JSON.parse(latihan.questions)
      questionCounts[latihan.id] = Array.isArray(parsed) ? parsed.length : 0
    } catch {
      questionCounts[latihan.id] = 0
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/kategori"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Semua Kategori
      </Link>

      {/* Header kategori */}
      <div className="rounded-2xl bg-white dark:bg-gray-900 border border-violet-100 dark:border-violet-900 p-6 sm:p-8 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <div className={`inline-flex p-4 rounded-2xl text-white shrink-0 ${getCategoryColor(category.slug)}`}>
            <Icon className="h-8 w-8" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <LayoutGrid className="h-4 w-4 text-violet-600 dark:text-violet-400" />
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Kategori</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">{category.name}</h1>
            {category.description && (
              <p className="text-muted-foreground">{category.description}</p>
            )}
            <div className="flex flex-wrap gap-3 mt-4 text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 font-medium">
                <BookOpen className="h-4 w-4" />
                {materis.length} Materi
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300 font-medium">
                <PlayCircle className="h-4 w-4" />
                {latihans.length} Latihan
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Materi */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold">
            <span className="gradient-text">Materi</span> Pembelajaran
          </h2>
          <Link
            href={`/materi?kategori=${category.slug}`}
            className="text-sm font-medium text-violet-600 dark:text-violet-400 hover:underline"
          >
            Lihat semua
          </Link>
        </div>
        <MateriList items={materis} />
      </section>

      {/* Latihan */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold">
            <span className="gradient-text">Latihan</span> & Simulasi
          </h2>
          <Link
            href={`/latihan?kategori=${category.slug}`}
            className="text-sm font-medium text-violet-600 dark:text-violet-400 hover:underline"
          >
            Lihat semua
          </Link>
        </div>
        <LatihanList items={latihans} questionCounts={questionCounts} />
      </section>

      {/* Proyek (fitur lama, dipertahankan) */}
      {projects.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold">
              <span className="gradient-text">Proyek</span> Simulasi Kerja
            </h2>
            <Link
              href={`/projects?category=${category.slug}`}
              className="text-sm font-medium text-violet-600 dark:text-violet-400 hover:underline"
            >
              Lihat semua
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/project/${project.id}`}
                className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-violet-100 dark:border-violet-900 card-hover"
              >
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{project.level}</span>
                <h3 className="font-semibold mt-1.5 line-clamp-2">{project.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const category = await prisma.category.findUnique({ where: { slug } })
  return {
    title: `${category?.name ?? 'Kategori'} | VirtualWork`,
    description: category?.description ?? undefined,
  }
}
