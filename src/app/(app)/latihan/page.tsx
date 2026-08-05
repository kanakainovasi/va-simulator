import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { CategoryFilter } from '@/components/kategori/CategoryFilter'
import { LatihanList } from '@/components/latihan/LatihanCard'
import { PlayCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Latihan | VirtualWork - Simulasi Kerja Virtual',
  description: 'Kerjakan latihan dan simulasi soal untuk 11 kategori pekerjaan. Uji pemahamanmu dan lihat skor langsung.',
}

export const dynamic = 'force-dynamic'

interface Props {
  searchParams: Promise<{ kategori?: string }>
}

async function getData(kategori?: string) {
  try {
    const [categories, latihans] = await Promise.all([
      prisma.category.findMany({
        orderBy: { createdAt: 'asc' },
      }),
      prisma.latihan.findMany({
        where: kategori ? { category: { slug: kategori } } : undefined,
        orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
        include: { category: true },
      }),
    ])

    const questionCounts: Record<string, number> = {}
    for (const latihan of latihans) {
      try {
        const parsed = JSON.parse(latihan.questions)
        questionCounts[latihan.id] = Array.isArray(parsed) ? parsed.length : 0
      } catch {
        questionCounts[latihan.id] = 0
      }
    }

    return { categories, latihans, questionCounts }
  } catch (error) {
    console.error('[LATIHAN] Failed to fetch latihan:', error)
    return { categories: [], latihans: [], questionCounts: {} }
  }
}

export default async function LatihanPage({ searchParams }: Props) {
  const params = await searchParams
  const { categories, latihans, questionCounts } = await getData(params.kategori)
  const activeCategory = categories.find((c) => c.slug === params.kategori)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300 text-sm font-medium mb-4">
          <PlayCircle className="h-4 w-4" />
          Menu Latihan
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          <span className="gradient-text">Latihan & Simulasi</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          {activeCategory
            ? `Latihan untuk kategori ${activeCategory.name}`
            : 'Uji pemahamanmu dengan kuis dan simulasi. Pilih kategori, kerjakan soal, dan dapatkan skor beserta pembahasan.'}
        </p>
      </div>

      <div className="mb-8">
        <CategoryFilter categories={categories} />
      </div>

      <LatihanList items={latihans} questionCounts={questionCounts} />
    </div>
  )
}
