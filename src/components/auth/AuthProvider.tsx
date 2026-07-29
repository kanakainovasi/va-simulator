'use client'

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'

export interface User {
  id: string
  name: string
  email: string
  image?: string | null
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => Promise<void>
  refreshSession: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const refreshSession = useCallback(async () => {
    try {
      console.log('[AUTH] Refreshing session...')
      const res = await fetch('/api/auth/session')
      const data = await res.json()
      console.log('[AUTH] Session response:', data.user ? 'logged in' : 'guest')
      setUser(data.user)
    } catch (err) {
      console.error('[AUTH] Session refresh failed:', err)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    refreshSession()
  }, [refreshSession])

  const login = async (email: string, password: string) => {
    try {
      console.log('[AUTH] Login attempt for:', email)
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()
      console.log('[AUTH] Login response:', res.status, data.success ? 'success' : data.error)

      if (data.success) {
        setUser(data.user)
        return { success: true }
      }
      return { success: false, error: data.error }
    } catch (err) {
      console.error('[AUTH] Login fetch failed:', err)
      return { success: false, error: 'Gagal terhubung ke server' }
    }
  }

  const register = async (name: string, email: string, password: string) => {
    try {
      console.log('[AUTH] Register attempt for:', email)
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })
      const data = await res.json()
      console.log('[AUTH] Register response:', res.status, data.success ? 'success' : data.error)

      if (data.success) {
        setUser(data.user)
        return { success: true }
      }
      return { success: false, error: data.error }
    } catch (err) {
      console.error('[AUTH] Register fetch failed:', err)
      return { success: false, error: 'Gagal terhubung ke server' }
    }
  }

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      setUser(null)
    } catch {
      console.error('Logout failed')
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, refreshSession }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
