'use client'

import { useState, Suspense } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from './AuthProvider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Mail, Lock, User, Eye, EyeOff, Loader2, BookOpen, PlayCircle, LayoutGrid } from 'lucide-react'

interface AuthFormProps {
  mode: 'login' | 'register'
}

function AuthFormInner({ mode }: AuthFormProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { login, register } = useAuth()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const isLogin = mode === 'login'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = isLogin
        ? await login(email, password)
        : await register(name, email, password)

      if (result.success) {
        const next = searchParams.get('next')
        router.push(next && next.startsWith('/') && !next.startsWith('//') ? next : '/materi')
        router.refresh()
      } else {
        setError(result.error || (isLogin ? 'Gagal login' : 'Gagal mendaftar'))
      }
    } catch {
      setError('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md">
      <div className="rounded-2xl bg-white dark:bg-gray-900 shadow-xl border border-violet-100 dark:border-violet-900 overflow-hidden">
        <div className="relative px-6 pt-8 pb-6 text-center bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500">
          <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
            {isLogin ? (
              <Mail className="h-8 w-8 text-violet-600" />
            ) : (
              <User className="h-8 w-8 text-violet-600" />
            )}
          </div>
          <h1 className="text-2xl font-bold text-white">
            {isLogin ? 'Selamat Datang Kembali!' : 'Buat Akun Baru'}
          </h1>
          <p className="text-white/80 mt-1">
            {isLogin ? 'Masuk untuk melanjutkan belajar' : 'Daftar dan mulai belajar'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="name">Nama Lengkap</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="contoh@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder={isLogin ? 'Masukkan password' : 'Minimal 6 karakter'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 dark:bg-red-950/30 rounded-lg">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                {isLogin ? 'Masuk...' : 'Mendaftar...'}
              </>
            ) : isLogin ? (
              'Masuk'
            ) : (
              'Daftar'
            )}
          </Button>
        </form>

        <div className="px-6 pb-6 text-center">
          <p className="text-sm text-muted-foreground">
            {isLogin ? (
              <>
                Belum punya akun?{' '}
                <Link
                  href="/register"
                  className="text-violet-600 hover:text-violet-700 font-medium"
                >
                  Daftar sekarang
                </Link>
              </>
            ) : (
              <>
                Sudah punya akun?{' '}
                <Link
                  href="/login"
                  className="text-violet-600 hover:text-violet-700 font-medium"
                >
                  Masuk
                </Link>
              </>
            )}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-6">
        {[
          { icon: BookOpen, label: 'Baca Materi' },
          { icon: PlayCircle, label: 'Kerjakan Latihan' },
          { icon: LayoutGrid, label: '11 Kategori' },
        ].map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white/70 dark:bg-gray-900/70 border border-violet-100 dark:border-violet-900 text-center"
          >
            <item.icon className="h-4 w-4 text-violet-600 dark:text-violet-400" />
            <span className="text-xs text-muted-foreground">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function AuthForm({ mode }: AuthFormProps) {
  return (
    <Suspense fallback={null}>
      <AuthFormInner mode={mode} />
    </Suspense>
  )
}
