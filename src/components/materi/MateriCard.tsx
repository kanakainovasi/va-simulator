import Link from 'next/link'
import { BookOpen, Clock, ChevronRight } from 'lucide-react'
import { getCategoryIcon, getCategoryColor } from '@/components/kategori/CategoryIcon'

export interface MateriItem {
  id: string
  slug: string
  title: string
  summary: string
  level: string | null
  order: number
  category: {
    slug: string
    name: string
    icon?: string | null
  }
}

interface MateriCardProps {
  materi: MateriItem
  index?: number
}

export function MateriCard({ materi, index = 0 }: MateriCardProps) {
  const Icon = getCategoryIcon(materi.category.slug, materi.category.icon)

  return (
    <Link
      href={`/materi/${materi.slug}`}
      className="group flex flex-col p-6 rounded-2xl bg-white dark:bg-gray-900 border border-violet-100 dark:border-violet-900 card-hover transition-all"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`inline-flex p-2.5 rounded-lg text-white group-hover:scale-110 transition-transform ${getCategoryColor(materi.category.slug)}`}>
          <Icon className="h-5 w-5" />
        </div>
        {materi.level && (
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">
            {materi.level}
          </span>
        )}
      </div>

      <h3 className="font-semibold text-base mb-1.5 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors line-clamp-2">
        {materi.title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
        {materi.summary}
      </p>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <BookOpen className="h-3.5 w-3.5" />
          {materi.category.name}
        </span>
        <span className="inline-flex items-center gap-1 font-medium text-violet-600 dark:text-violet-400">
          Baca
          <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  )
}

interface MateriListProps {
  items: MateriItem[]
  emptyMessage?: string
}

export function MateriList({ items, emptyMessage = 'Belum ada materi pada kategori ini.' }: MateriListProps) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((materi, idx) => (
        <MateriCard key={materi.id} materi={materi} index={idx} />
      ))}
    </div>
  )
}

export function MateriCardDetail({ materi }: { materi: MateriItem }) {
  const Icon = getCategoryIcon(materi.category.slug, materi.category.icon)

  return (
    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-violet-100 dark:border-violet-900">
      <div className={`inline-flex p-3 rounded-xl text-white shrink-0 ${getCategoryColor(materi.category.slug)}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold line-clamp-2 mb-1">{materi.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{materi.summary}</p>
        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {materi.category.name}
          </span>
          {materi.level && <span>{materi.level}</span>}
        </div>
      </div>
    </div>
  )
}
