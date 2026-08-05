import Link from 'next/link'
import { BookOpen, PlayCircle, ArrowRight } from 'lucide-react'
import { getCategoryIcon, getCategoryColor } from './CategoryIcon'
import { cn } from '@/lib/utils'

export interface CategoryWithCounts {
  slug: string
  name: string
  icon?: string | null
  description?: string | null
  _count?: {
    materis?: number
    latihans?: number
    projects?: number
  }
}

interface CategoryGridProps {
  categories: CategoryWithCounts[]
  showDescription?: boolean
}

export function CategoryGrid({ categories, showDescription = false }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((cat) => {
        const Icon = getCategoryIcon(cat.slug, cat.icon)
        const count = cat._count?.materis ?? 0
        const latihanCount = cat._count?.latihans ?? 0
        return (
          <Link
            key={cat.slug}
            href={`/kategori/${cat.slug}`}
            className="group p-6 rounded-2xl bg-white dark:bg-gray-900 border border-violet-100 dark:border-violet-900 card-hover transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={cn('inline-flex p-3 rounded-xl text-white group-hover:scale-110 transition-transform', getCategoryColor(cat.slug))}>
                <Icon className="h-6 w-6" />
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>

            <h3 className="font-semibold text-base mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
              {cat.name}
            </h3>

            {showDescription && cat.description ? (
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{cat.description}</p>
            ) : (
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5" />
                  {count} Materi
                </span>
                <span className="inline-flex items-center gap-1">
                  <PlayCircle className="h-3.5 w-3.5" />
                  {latihanCount} Latihan
                </span>
              </div>
            )}
          </Link>
        )
      })}
    </div>
  )
}
