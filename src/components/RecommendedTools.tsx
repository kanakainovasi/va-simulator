'use client'

import { ToolLink } from '@/lib/constants'
import {
  ExternalLink,
  Table,
  BarChart3,
  PieChart,
  Database,
  Calendar,
  Layout,
  FileText,
  Clipboard,
  Mail,
  Clock,
  Tag,
  Image,
  MessageSquare,
  Globe,
  Languages,
  BookOpen,
  Mic,
  Circle,
  Headphones,
  Send,
  Map,
  MapPin,
  CalendarDays,
  DollarSign,
  Plane,
  Hash,
  Monitor,
  Wand,
  CheckSquare,
  HelpCircle,
} from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'table': Table,
  'bar-chart': BarChart3,
  'pie-chart': PieChart,
  'database': Database,
  'calendar': Calendar,
  'layout': Layout,
  'file-text': FileText,
  'clipboard': Clipboard,
  'mail': Mail,
  'clock': Clock,
  'tag': Tag,
  'image': Image,
  'message-square': MessageSquare,
  'globe': Globe,
  'languages': Languages,
  'book': BookOpen,
  'mic': Mic,
  'circle': Circle,
  'headphones': Headphones,
  'send': Send,
  'map': Map,
  'map-pin': MapPin,
  'calendar-days': CalendarDays,
  'dollar-sign': DollarSign,
  'plane': Plane,
  'hash': Hash,
  'monitor': Monitor,
  'wand': Wand,
  'check-square': CheckSquare,
  'help-circle': HelpCircle,
}

const typeColors = {
  template: 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100 dark:bg-emerald-950/30 dark:border-emerald-800 dark:hover:bg-emerald-950/50',
  tool: 'bg-blue-50 border-blue-200 hover:bg-blue-100 dark:bg-blue-950/30 dark:border-blue-800 dark:hover:bg-blue-950/50',
  guide: 'bg-purple-50 border-purple-200 hover:bg-purple-100 dark:bg-purple-950/30 dark:border-purple-800 dark:hover:bg-purple-950/50',
}

const typeBadgeColors = {
  template: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300',
  tool: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  guide: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
}

interface RecommendedToolsProps {
  tools: ToolLink[]
}

export function RecommendedTools({ tools }: RecommendedToolsProps) {
  if (tools.length === 0) {
    return (
      <p className="text-sm text-muted-foreground italic">
        No specific tools recommended for this project.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {tools.map((tool, i) => {
        const IconComponent = iconMap[tool.icon] || ExternalLink
        return (
          <a
            key={i}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-start gap-3 p-3 rounded-lg border transition-all duration-200 ${typeColors[tool.type]}`}
          >
            <div className="flex-shrink-0 mt-0.5">
              <IconComponent className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-foreground group-hover:underline truncate">
                  {tool.name}
                </span>
                <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {tool.description}
              </p>
            </div>
            <span className={`flex-shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded ${typeBadgeColors[tool.type]}`}>
              {tool.type.charAt(0).toUpperCase() + tool.type.slice(1)}
            </span>
          </a>
        )
      })}
    </div>
  )
}