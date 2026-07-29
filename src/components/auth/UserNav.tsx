'use client'

import { useState } from 'react'
import { useAuth } from './AuthProvider'
import { AuthModal } from './AuthModal'
import { Button } from '@/components/ui/button'
import { LogOut, User, ChevronDown, Award, Settings } from 'lucide-react'
import Link from 'next/link'

export function UserNav() {
  const { user, loading, logout } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')
  const [showDropdown, setShowDropdown] = useState(false)

  if (loading) {
    return (
      <div className="h-10 w-24 bg-muted animate-pulse rounded-lg" />
    )
  }

  if (!user) {
    return (
      <>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            onClick={() => {
              setAuthMode('login')
              setShowAuthModal(true)
            }}
            className="text-sm font-medium"
          >
            Masuk
          </Button>
          <Button
            onClick={() => {
              setAuthMode('register')
              setShowAuthModal(true)
            }}
            className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white text-sm font-medium"
          >
            Daftar
          </Button>
        </div>
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          initialMode={authMode}
        />
      </>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
      >
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-semibold text-sm">
          {user.name?.charAt(0)?.toUpperCase() || 'U'}
        </div>
        <div className="text-left hidden sm:block">
          <p className="text-sm font-medium leading-none">{user.name}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{user.email}</p>
        </div>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </button>

      {showDropdown && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowDropdown(false)}
          />
          <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-gray-900 rounded-xl shadow-xl border z-50 overflow-hidden">
            <div className="p-3 border-b bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-950/30 dark:to-fuchsia-950/30">
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
            <div className="p-2">
              <Link
                href="/dashboard"
                onClick={() => setShowDropdown(false)}
                className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors"
              >
                <User className="h-4 w-4" />
                Dashboard Saya
              </Link>
              <Link
                href="/certificates"
                onClick={() => setShowDropdown(false)}
                className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors"
              >
                <Award className="h-4 w-4" />
                Sertifikat Saya
              </Link>
              <Link
                href="/settings"
                onClick={() => setShowDropdown(false)}
                className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors"
              >
                <Settings className="h-4 w-4" />
                Pengaturan
              </Link>
            </div>
            <div className="p-2 border-t">
              <button
                onClick={() => {
                  setShowDropdown(false)
                  logout()
                }}
                className="flex items-center gap-2 px-3 py-2 text-sm w-full rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 text-red-600 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Keluar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
