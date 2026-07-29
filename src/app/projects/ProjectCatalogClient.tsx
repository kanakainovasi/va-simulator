'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, Filter, BarChart3, Calendar, FileText, Database, Tag, Globe, Mic, Mail, Clock, MapPin, Share2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { CATEGORIES, LEVELS, getCategoryBySlug, getEstimatedTime } from '@/lib/constants'

type ProjectWithCategory = {
  id: string
  title: string
  level: string
  brief: string
  category: {
    slug: string
    name: string
  }
}

interface ProjectCatalogClientProps {
  projects: ProjectWithCategory[]
  initialCategory?: string
  initialLevel?: string
}

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'data-analyst': BarChart3,
  'project-coordinator': Calendar,
  'secretary-executive-assistant': FileText,
  'data-entry-specialist': Database,
  'data-annotation-ai-trainer': Tag,
  'translation-localizer': Globe,
  'voice-over-voice-talent': Mic,
  'email-management': Mail,
  'schedule-management': Clock,
  'travel-planner': MapPin,
  'social-media-management': Share2,
}

function LevelBadge({ level }: { level: string }) {
  const levelData = LEVELS.find((l) => l.value === level)
  if (!levelData) return null

  return (
    <Badge variant={levelData.color as 'easy' | 'medium' | 'complex'}>
      {levelData.label}
    </Badge>
  )
}

function ProjectCardClient({ project }: { project: ProjectWithCategory }) {
  const category = getCategoryBySlug(project.category.slug)
  const Icon = categoryIcons[project.category.slug] || BarChart3

  return (
    <Card className="flex flex-col h-full card-hover bg-white dark:bg-gray-900 border-violet-100 dark:border-violet-900">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 mb-2">
          <Badge className={category?.color ?? 'bg-gray-100 text-gray-800'}>
            <Icon className="h-3 w-3 mr-1" />
            {category?.name ?? project.category.name}
          </Badge>
          <LevelBadge level={project.level} />
        </div>
        <CardTitle className="text-lg leading-snug">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {project.brief.slice(0, 120)}
          {project.brief.length > 120 ? '...' : ''}
        </p>
        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="px-2 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">
            Est. {getEstimatedTime(project.level)}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white" size="sm">
          <Link href={`/project/${project.id}`}>Mulai Proyek</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export function ProjectCatalogClient({
  projects,
  initialCategory,
  initialLevel,
}: ProjectCatalogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    initialCategory ?? null
  )
  const [selectedLevel, setSelectedLevel] = useState<string | null>(
    initialLevel ?? null
  )
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (selectedCategory && project.category.slug !== selectedCategory) return false
      if (selectedLevel && project.level !== selectedLevel) return false
      if (
        searchQuery &&
        !project.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !project.brief.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false
      return true
    })
  }, [projects, selectedCategory, selectedLevel, searchQuery])

  const projectCount = filteredProjects.length
  const totalCount = projects.length

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Cari proyek berdasarkan nama atau deskripsi..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 rounded-xl border-violet-200 dark:border-violet-800"
        />
      </div>

      {/* Category Filter */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">Kategori</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(null)}
            className="rounded-full"
          >
            Semua ({totalCount})
          </Button>
          {CATEGORIES.map((cat) => {
            const count = projects.filter(p => p.category.slug === cat.slug).length
            const Icon = categoryIcons[cat.slug] || BarChart3
            return (
              <Button
                key={cat.slug}
                variant={selectedCategory === cat.slug ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(selectedCategory === cat.slug ? null : cat.slug)}
                className="rounded-full"
              >
                <Icon className="h-3 w-3 mr-1" />
                {cat.name} ({count})
              </Button>
            )
          })}
        </div>
      </div>

      {/* Level Filter */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <BarChart3 className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">Level Kesulitan</span>
        </div>
        <div className="flex gap-2">
          <Button
            variant={selectedLevel === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedLevel(null)}
            className="rounded-full"
          >
            Semua Level
          </Button>
          {LEVELS.map((level) => {
            const count = projects.filter(p => p.level === level.value).length
            return (
              <Button
                key={level.value}
                variant={selectedLevel === level.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedLevel(selectedLevel === level.value ? null : level.value)}
                className="rounded-full"
              >
                {level.label} ({count})
              </Button>
            )
          })}
        </div>
      </div>

      {/* Results count */}
      <div className="text-sm text-muted-foreground">
        Menampilkan <span className="font-semibold text-foreground">{projectCount}</span> dari {totalCount} proyek
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground text-lg font-medium">Tidak ada proyek ditemukan</p>
          <p className="text-sm text-muted-foreground mt-1">
            Coba ubah filter atau kata kunci pencarian kamu
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCardClient key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}
