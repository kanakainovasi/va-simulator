import {
  BarChart3,
  Calendar,
  FileText,
  Database,
  Tag,
  Globe,
  Mic,
  Mail,
  Clock,
  MapPin,
  Share2,
  Folder,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { CATEGORIES } from '@/lib/constants'

const iconMap: Record<string, LucideIcon> = {
  'bar-chart-2': BarChart3,
  calendar: Calendar,
  'file-text': FileText,
  database: Database,
  tag: Tag,
  globe: Globe,
  mic: Mic,
  mail: Mail,
  clock: Clock,
  'map-pin': MapPin,
  'share-2': Share2,
}

export interface CategoryInfo {
  slug: string
  name: string
  icon?: string | null
}

export function getCategoryIcon(slug: string, iconName?: string | null): LucideIcon {
  const fromMap = iconName ? iconMap[iconName] : undefined
  if (fromMap) return fromMap
  const fromSlug = CATEGORIES.find((c) => c.slug === slug)
  if (fromSlug?.icon) {
    const icon = iconMap[fromSlug.icon]
    if (icon) return icon
  }
  return Folder
}

export function getCategoryColor(slug: string): string {
  const colorMap: Record<string, string> = {
    'data-analyst': 'bg-blue-500',
    'project-coordinator': 'bg-purple-500',
    'secretary-executive-assistant': 'bg-pink-500',
    'data-entry-specialist': 'bg-green-500',
    'data-annotation-ai-trainer': 'bg-yellow-500',
    'translation-localizer': 'bg-indigo-500',
    'voice-over-voice-talent': 'bg-red-500',
    'email-management': 'bg-teal-500',
    'schedule-management': 'bg-orange-500',
    'travel-planner': 'bg-cyan-500',
    'social-media-management': 'bg-rose-500',
  }
  return colorMap[slug] || 'bg-violet-500'
}
