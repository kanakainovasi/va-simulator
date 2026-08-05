import Link from 'next/link'
import { PlayCircle, Clock, ListChecks, ChevronRight } from 'lucide-react'
import { getCategoryIcon, getCategoryColor } from '@/components/kategori/CategoryIcon'

export interface LatihanItem {
  id: string
  slug: string
  title: string
  description: string
  level: string | null
  durationMinutes: number | null
  order: number
  category: {
    slug: string
    name: string
    icon?: string | null
  }
}

export function getLevelStyle(level: string | null): string {
  switch (level) {
    case 'EASY':
      return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
    case 'MEDIUM':
      return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
    case 'COMPLEX':
      return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
    default:
      return 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300'
  }
}

interface LatihanCardProps {
  latihan: LatihanItem
  questionCount?: number
}

export function LatihanCard({ latihan, questionCount = 0 }: LatihanCardProps) {
  const Icon = getCategoryIcon(latihan.category.slug, latihan.category.icon)

  return (
    <Link
      href={`/latihan/${latihan.slug}`}
      className="group flex flex-col p-6 rounded-2xl bg-white dark:bg-gray-900 border border-violet-100 dark:border-violet-900 card-hover transition-all"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`inline-flex p-2.5 rounded-lg text-white group-hover:scale-110 transition-transform ${getCategoryColor(latihan.category.slug)}`}>
          <Icon className="h-5 w-5" />
        </div>
        {latihan.level && (
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getLevelStyle(latihan.level)}`}>
            {latihan.level}
          </span>
        )}
      </div>

      <h3 className="font-semibold text-base mb-1.5 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors line-clamp-2">
        {latihan.title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
        {latihan.description}
      </p>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          {latihan.durationMinutes && (
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {latihan.durationMinutes} mnt
            </span>
          )}
          {questionCount > 0 && (
            <span className="inline-flex items-center gap-1">
              <ListChecks className="h-3.5 w-3.5" />
              {questionCount} soal
            </span>
          )}
        </div>
        <span className="inline-flex items-center gap-1 font-medium text-violet-600 dark:text-violet-400">
          Mulai
          <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  )
}

interface LatihanListProps {
  items: LatihanItem[]
  questionCounts?: Record<string, number>
  emptyMessage?: string
}

export function LatihanList({ items, questionCounts = {}, emptyMessage = 'Belum ada latihan pada kategori ini.' }: LatihanListProps) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <PlayCircle className="h-12 w-12 text-muted-foreground mb-4" />
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((latihan) => (
        <LatihanCard
          key={latihan.id}
          latihan={latihan}
          questionCount={questionCounts[latihan.id] || 0}
        />
      ))}
    </div>
  )
}
