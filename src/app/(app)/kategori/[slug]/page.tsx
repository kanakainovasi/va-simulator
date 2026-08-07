import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { getCategoryIcon, getCategoryColor } from '@/components/kategori/CategoryIcon'
import { Badge } from '@/components/ui/badge'
import { getCategoryBySlug, getLevelByValue } from '@/lib/constants'
import { ArrowLeft, Briefcase, LayoutGrid, ArrowRight } from 'lucide-react'

export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ slug: string }>
}

async function getCategoryData(slug: string) {
  try {
    const [category, projects] = await Promise.all([
      prisma.category.findUnique({ where: { slug } }),
      prisma.project.findMany({
        where: { category: { slug } },
        select: { id: true, title: true, level: true, brief: true },
        orderBy: { createdAt: 'asc' },
      }),
    ])
    return { category, projects }
  } catch {
    return { category: null, projects: [] }
  }
}

export default async function KategoriDetailPage({ params }: Props) {
  const { slug } = await params
  const { category, projects } = await getCategoryData(slug)

  if (!category) {
    notFound()
  }

  const Icon = getCategoryIcon(category.slug, category.icon)

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
                <Briefcase className="h-4 w-4" />
                {projects.length} Proyek
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Proyek */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold">
            <span className="gradient-text">Proyek</span> Latihan {category.name}
          </h2>
          <Link
            href={`/latihan?category=${category.slug}`}
            className="text-sm font-medium text-violet-600 dark:text-violet-400 hover:underline"
          >
            Lihat semua
          </Link>
        </div>

        {projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center rounded-2xl bg-white dark:bg-gray-900 border border-violet-100 dark:border-violet-900">
            <Briefcase className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Belum ada proyek pada kategori ini.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => {
              const categoryData = getCategoryBySlug(category.slug)
              const levelData = getLevelByValue(project.level)
              return (
                <Link
                  key={project.id}
                  href={`/project/${project.id}`}
                  className="group p-5 rounded-2xl bg-white dark:bg-gray-900 border border-violet-100 dark:border-violet-900 card-hover flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={categoryData?.color ?? 'bg-gray-100 text-gray-800'}>
                      {category.name}
                    </Badge>
                    {levelData && (
                      <Badge variant={levelData.color}>{levelData.label}</Badge>
                    )}
                  </div>
                  <h3 className="font-semibold mt-1 line-clamp-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors flex-1">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-violet-600 dark:text-violet-400">
                    Kerjakan Proyek
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              )
            })}
          </div>
        )}
      </section>
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
