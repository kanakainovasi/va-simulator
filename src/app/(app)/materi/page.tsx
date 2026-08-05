import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { CategoryFilter } from '@/components/kategori/CategoryFilter'
import { MateriList } from '@/components/materi/MateriCard'
import { BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Materi | VirtualWork - Simulasi Kerja Virtual',
  description: 'Akses materi pembelajaran untuk 11 kategori pekerjaan: teori, panduan, dan tips praktis dari para profesional.',
}

export const dynamic = 'force-dynamic'

interface Props {
  searchParams: Promise<{ kategori?: string }>
}

async function getData(kategori?: string) {
  try {
    const [categories, materis] = await Promise.all([
      prisma.category.findMany({
        orderBy: { createdAt: 'asc' },
      }),
      prisma.materi.findMany({
        where: kategori ? { category: { slug: kategori } } : undefined,
        orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
        include: { category: true },
      }),
    ])
    return { categories, materis }
  } catch (error) {
    console.error('[MATERI] Failed to fetch materi:', error)
    return { categories: [], materis: [] }
  }
}

export default async function MateriPage({ searchParams }: Props) {
  const params = await searchParams
  const { categories, materis } = await getData(params.kategori)
  const activeCategory = categories.find((c) => c.slug === params.kategori)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
          <BookOpen className="h-4 w-4" />
          Menu Materi
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          <span className="gradient-text">Materi Pembelajaran</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          {activeCategory
            ? `Materi untuk kategori ${activeCategory.name}`
            : 'Pelajari teori, panduan, dan tips praktis setiap profesi sebelum mengerjakan latihan.'}
        </p>
      </div>

      <div className="mb-8">
        <CategoryFilter categories={categories} />
      </div>

      <MateriList items={materis} />
    </div>
  )
}
