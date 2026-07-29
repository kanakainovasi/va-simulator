'use client'

import { QUICK_HELP_LINKS } from '@/lib/constants'
import {
  ExternalLink,
  HelpCircle,
  MessageCircle,
  Users,
  PlayCircle,
} from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'help-circle': HelpCircle,
  'message-circle': MessageCircle,
  'users': Users,
  'play-circle': PlayCircle,
}

export function QuickHelp() {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center">
          <HelpCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-amber-800 dark:text-amber-200">
            Need Help?
          </h4>
          <p className="text-xs text-amber-600 dark:text-amber-400">
            Quick access to support and resources
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {QUICK_HELP_LINKS.map((link, i) => {
          const IconComponent = iconMap[link.icon] || ExternalLink
          return (
            <a
              key={i}
              href={link.url}
              target={link.external ? '_blank' : '_self'}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="group flex flex-col items-center gap-1.5 p-3 rounded-lg bg-white/70 dark:bg-black/20 border border-amber-100 dark:border-amber-900 hover:bg-white dark:hover:bg-black/30 transition-all duration-200 text-center"
            >
              <IconComponent className="h-5 w-5 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium text-amber-800 dark:text-amber-200 group-hover:underline">
                {link.name}
              </span>
              {link.external && (
                <ExternalLink className="h-2.5 w-2.5 text-amber-400 absolute top-1.5 right-1.5" />
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}