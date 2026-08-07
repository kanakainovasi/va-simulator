'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UserNav } from '@/components/auth/UserNav'
import { cn } from '@/lib/utils'
import { Home, PlayCircle, LayoutGrid, Award, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { href: '/', label: 'Beranda', icon: Home },
  { href: '/latihan', label: 'Latihan', icon: PlayCircle },
  { href: '/kategori', label: 'Kategori', icon: LayoutGrid },
  { href: '/certificates', label: 'Sertifikat', icon: Award },
]

export function MainNav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/25">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="font-bold text-lg hidden sm:block bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              VirtualWork
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all',
                  isActive(item.href)
                    ? 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <UserNav />

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted"
              aria-label="Buka menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all',
                    isActive(item.href)
                      ? 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

