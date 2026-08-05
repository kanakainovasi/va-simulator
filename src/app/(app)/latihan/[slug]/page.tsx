import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { LatihanPlayer } from '@/components/latihan/LatihanPlayer'
import type { LatihanQuestion } from '@/components/latihan/LatihanPlayer'
import { getCategoryIcon, getCategoryColor } from '@/components/kategori/CategoryIcon'
import { getLevelStyle } from '@/components/latihan/LatihanCard'
import { ArrowLeft, Clock, ListChecks, Info, BookOpen } from 'lucide-react'

export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ slug: string }>
}

async function getLatihan(slug: string) {
  try {
    const latihan = await prisma.latihan.findUnique({
      where: { slug },
      include: { category: true },
    })
    if (!latihan) return null

    let questions: LatihanQuestion[] = []
    try {
      const parsed = JSON.parse(latihan.questions)
      if (Array.isArray(parsed)) questions = parsed
    } catch {
      questions = []
    }

    return { latihan, questions }
  } catch {
    return null
  }
}

export default async function LatihanDetailPage({ params }: Props) {
  const { slug } = await params
  const data = await getLatihan(slug)

  if (!data) {
    notFound()
  }

  const { latihan, questions } = data
  const Icon = getCategoryIcon(latihan.category.slug, latihan.category.icon)

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href={`/latihan?kategori=${latihan.category.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Semua Latihan
      </Link>

      {/* Header */}
      <div className="rounded-2xl bg-white dark:bg-gray-900 border border-violet-100 dark:border-violet-900 p-6 sm:p-8 mb-6">
        <div className="flex items-start gap-4">
          <div className={`inline-flex p-3 rounded-xl text-white shrink-0 ${getCategoryColor(latihan.category.slug)}`}>
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-1 min-w-0">
            <Link
              href={`/kategori/${latihan.category.slug}`}
              className="text-sm font-medium text-violet-600 dark:text-violet-400 hover:underline"
            >
              {latihan.category.name}
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold leading-tight mt-1 mb-2">{latihan.title}</h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              {latihan.level && (
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getLevelStyle(latihan.level)}`}>
                  {latihan.level}
                </span>
              )}
              {latihan.durationMinutes && (
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {latihan.durationMinutes} menit
                </span>
              )}
              <span className="inline-flex items-center gap-1.5">
                <ListChecks className="h-4 w-4" />
                {questions.length} soal
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Instruksi */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-900 mb-6">
        <Info className="h-5 w-5 text-violet-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium mb-1">Petunjuk</p>
          <p className="text-sm text-muted-foreground">{latihan.instruction}</p>
        </div>
      </div>

      {questions.length === 0 ? (
        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-violet-100 dark:border-violet-900 p-12 text-center">
          <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">Soal latihan belum tersedia.</p>
        </div>
      ) : (
        <LatihanPlayer title={latihan.title} questions={questions} />
      )}
    </div>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const latihan = await prisma.latihan.findUnique({ where: { slug } })
  return {
    title: latihan ? `${latihan.title} | VirtualWork` : 'Latihan | VirtualWork',
    description: latihan?.description ?? undefined,
  }
}
