import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
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

interface ProjectCardProps {
  project: ProjectWithCategory
}

const iconMap: Record<string, string> = {
  'bar-chart-2': '\u2588',
  'calendar': '\u25A3',
  'file-text': '\u25A1',
  'database': '\u25A5',
  'tag': '\u25B7',
  'globe': '\u25CB',
  'mic': '\u25C9',
  'mail': '\u25A0',
  'clock': '\u25CF',
  'map-pin': '\u25C6',
  'share-2': '\u25C7',
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

export function ProjectCard({ project }: ProjectCardProps) {
  const category = getCategoryBySlug(project.category.slug)

  return (
    <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 mb-2">
          <Badge className={category?.color ?? 'bg-gray-100 text-gray-800'}>
            {category?.name ?? project.category.name}
          </Badge>
          <LevelBadge level={project.level} />
        </div>
        <CardTitle className="text-lg leading-snug">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {project.brief.slice(0, 100)}
          {project.brief.length > 100 ? '...' : ''}
        </p>
        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <span>Est. {getEstimatedTime(project.level)}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" size="sm">
          <Link href={`/project/${project.id}`}>Start Project</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
