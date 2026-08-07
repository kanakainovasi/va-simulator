import type { Metadata } from 'next'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { CategoryGrid } from '@/components/kategori/CategoryGrid'
import { LayoutGrid, PlayCircle, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kategori | VirtualWork - Simulasi Kerja Virtual',
  description: 'Jelajahi 11 kategori pekerjaan: Data Analyst, Project Coordinator, Social Media Management, dan lainnya. Temukan proyek latihan untuk setiap kategori.',
}

export const dynamic = 'force-dynamic'

async function getCategories() {
  try {
    return await prisma.category.findMany({
      orderBy: { createdAt: 'asc' },
      include: {
        _count: {
          select: { projects: true },
        },
      },
    })
  } catch (error) {
    console.error('[KATEGORI] Failed to fetch categories:', error)
    return []
  }
}

export default async function KategoriPage() {
  const categories = await getCategories()
  const totalProyek = categories.reduce((acc, c) => acc + c._count.projects, 0)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
          <LayoutGrid className="h-4 w-4" />
          Sistem Kategori
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          <span className="gradient-text">Kategori Pekerjaan</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Kelompokkan proyek latihan sesuai minatmu. Pilih salah satu dari{' '}
          <strong>{categories.length} kategori</strong> untuk mulai belajar.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            href="/latihan"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-gray-900 border border-violet-200 dark:border-violet-800 text-sm font-medium hover:border-violet-400 transition-all"
          >
            <Briefcase className="h-4 w-4" />
            {totalProyek} Proyek tersedia
          </Link>
          <Link
            href="/latihan"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-gray-900 border border-violet-200 dark:border-violet-800 text-sm font-medium hover:border-violet-400 transition-all"
          >
            <PlayCircle className="h-4 w-4" />
            Mulai Latihan
          </Link>
        </div>
      </div>

      <CategoryGrid categories={categories} showDescription />
    </div>
  )
}
