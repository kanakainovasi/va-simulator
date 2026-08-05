'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { getCategoryIcon } from './CategoryIcon'
import { cn } from '@/lib/utils'

interface Category {
  slug: string
  name: string
  icon?: string | null
}

interface CategoryFilterProps {
  categories: Category[]
  paramName?: string
}

export function CategoryFilter({ categories, paramName = 'kategori' }: CategoryFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const active = searchParams.get(paramName)

  const select = (slug: string | null) => {
    const params = new URLSearchParams(searchParams.toString())
    if (slug) {
      params.set(paramName, slug)
    } else {
      params.delete(paramName)
    }
    const qs = params.toString()
    router.push(qs ? `?${qs}` : '/')
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => select(null)}
        className={cn(
          'px-4 py-2 rounded-full text-sm font-medium border transition-all',
          !active
            ? 'bg-violet-600 text-white border-violet-600'
            : 'bg-white dark:bg-gray-900 border-violet-200 dark:border-violet-900 text-muted-foreground hover:border-violet-400'
        )}
      >
        Semua
      </button>
      {categories.map((cat) => {
        const Icon = getCategoryIcon(cat.slug, cat.icon)
        const isActive = active === cat.slug
        return (
          <button
            key={cat.slug}
            onClick={() => select(isActive ? null : cat.slug)}
            className={cn(
              'inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all',
              isActive
                ? 'bg-violet-600 text-white border-violet-600'
                : 'bg-white dark:bg-gray-900 border-violet-200 dark:border-violet-900 text-muted-foreground hover:border-violet-400'
            )}
          >
            <Icon className="h-3.5 w-3.5" />
            {cat.name}
          </button>
        )
      })}
    </div>
  )
}
