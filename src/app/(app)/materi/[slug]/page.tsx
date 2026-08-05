import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { MateriContent } from '@/components/materi/MateriContent'
import { getCategoryIcon, getCategoryColor } from '@/components/kategori/CategoryIcon'
import { ArrowLeft, BookOpen, PlayCircle, Clock, ChevronRight } from 'lucide-react'

export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ slug: string }>
}

async function getMateri(slug: string) {
  try {
    const materi = await prisma.materi.findUnique({
      where: { slug },
      include: { category: true },
    })
    if (!materi) return { materi: null, related: [] }

    const related = await prisma.materi.findMany({
      where: {
        categoryId: materi.categoryId,
        id: { not: materi.id },
      },
      orderBy: { order: 'asc' },
      take: 3,
      include: { category: true },
    })

    const latihans = await prisma.latihan.findMany({
      where: { categoryId: materi.categoryId },
      orderBy: { order: 'asc' },
      include: { category: true },
    })

    return { materi, related, latihans }
  } catch {
    return { materi: null, related: [], latihans: [] }
  }
}

export default async function MateriDetailPage({ params }: Props) {
  const { slug } = await params
  const { materi, related, latihans } = await getMateri(slug)

  if (!materi) {
    notFound()
  }

  const Icon = getCategoryIcon(materi.category.slug, materi.category.icon)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href={`/materi?kategori=${materi.category.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Semua Materi
      </Link>

      {/* Header */}
      <div className="rounded-2xl bg-white dark:bg-gray-900 border border-violet-100 dark:border-violet-900 p-6 sm:p-8 mb-8">
        <Link
          href={`/kategori/${materi.category.slug}`}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium hover:bg-violet-200 dark:hover:bg-violet-900/50 transition-colors mb-4"
        >
          <Icon className="h-4 w-4" />
          {materi.category.name}
        </Link>

        <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-3">{materi.title}</h1>
        <p className="text-muted-foreground text-lg mb-5">{materi.summary}</p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {materi.level && (
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">
              {materi.level}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            Materi pembelajaran
          </span>
        </div>
      </div>

      {/* Konten */}
      <article className="rounded-2xl bg-white dark:bg-gray-900 border border-violet-100 dark:border-violet-900 p-6 sm:p-10 mb-8">
        <MateriContent content={materi.content} />
      </article>

      {/* Latihan terkait */}
      {latihans.length > 0 && (
        <div className="rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-1">
                Siap menguji pemahamanmu?
              </h2>
              <p className="text-white/80 text-sm">
                Kerjakan latihan di kategori {materi.category.name} dan lihat seberapa jauh kamu paham.
              </p>
            </div>
            <Link
              href={`/latihan/${latihans[0].slug}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-violet-700 font-semibold hover:bg-violet-50 transition-colors shrink-0"
            >
              <PlayCircle className="h-5 w-5" />
              Mulai Latihan
            </Link>
          </div>
          <div className="mt-4">
            {latihans.map((l, i) => (
              <Link
                key={l.id}
                href={`/latihan/${l.slug}`}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/90 hover:bg-white/10 text-sm transition-colors"
              >
                <BookOpen className="h-4 w-4" />
                {i + 1}. {l.title}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Materi lanjutan */}
      {related.length > 0 && (
        <div>
          <h2 className="text-lg sm:text-xl font-bold mb-4">
            <span className="gradient-text">Lanjut Belajar</span>
          </h2>
          <div className="space-y-3">
            {related.map((item) => {
              const RelIcon = getCategoryIcon(item.category.slug, item.category.icon)
              return (
                <Link
                  key={item.id}
                  href={`/materi/${item.slug}`}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-gray-900 border border-violet-100 dark:border-violet-900 card-hover"
                >
                  <div className={`inline-flex p-2.5 rounded-lg text-white shrink-0 ${getCategoryColor(item.category.slug)}`}>
                    <RelIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold line-clamp-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">{item.summary}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform shrink-0" />
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const materi = await prisma.materi.findUnique({ where: { slug } })
  return {
    title: materi ? `${materi.title} | VirtualWork` : 'Materi | VirtualWork',
    description: materi?.summary ?? undefined,
  }
}
