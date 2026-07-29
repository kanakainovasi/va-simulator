'use client'

import { useState } from 'react'
import { useAuth } from './AuthProvider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { X, Mail, Lock, User, Eye, EyeOff, Loader2 } from 'lucide-react'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialMode?: 'login' | 'register'
}

export function AuthModal({ isOpen, onClose, initialMode = 'login' }: AuthModalProps) {
  const { login, register } = useAuth()
  const [mode, setMode] = useState<'login' | 'register'>(initialMode)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const sendToWeb3Forms = async (formData: { name: string; email: string }) => {
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '73f420b4-0f49-4a72-b3b9-049d02e7fd83',
          subject: `[VirtualWork] Pendaftaran Baru: ${formData.name}`,
          email: 'kanaka.inovasi@gmail.com',
          from_name: 'VirtualWork Registration',
          message: `Pengguna baru mendaftar:\n\nNama: ${formData.name}\nEmail: ${formData.email}\nWaktu: ${new Date().toLocaleString('id-ID')}`,
        }),
      })
    } catch {
      // Notification is optional, registration still works
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (mode === 'register') {
        if (!name.trim()) {
          setError('Nama wajib diisi')
          setLoading(false)
          return
        }
        const result = await register(name, email, password)
        if (result.success) {
          await sendToWeb3Forms({ name, email })
          onClose()
          window.location.reload()
        } else {
          setError(result.error || 'Gagal mendaftar')
        }
      } else {
        const result = await login(email, password)
        if (result.success) {
          onClose()
          window.location.reload()
        } else {
          setError(result.error || 'Gagal login')
        }
      }
    } catch {
      setError('Terjadi kesalahan')
    } finally {
      setLoading(false)
    }
  }

  const switchMode = () => {
    setMode(mode === 'login' ? 'register' : 'login')
    setError('')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md mx-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="relative px-6 pt-8 pb-6 text-center bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
            {mode === 'login' ? (
              <Mail className="h-8 w-8 text-violet-600" />
            ) : (
              <User className="h-8 w-8 text-violet-600" />
            )}
          </div>

          <h2 className="text-2xl font-bold text-white">
            {mode === 'login' ? 'Selamat Datang!' : 'Buat Akun Baru'}
          </h2>
          <p className="text-white/80 mt-1">
            {mode === 'login'
              ? 'Masuk untuk melanjutkan'
              : 'Daftar untuk memulai'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {mode === 'register' && (
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
                placeholder={mode === 'register' ? 'Minimal 6 karakter' : 'Masukkan password'}
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
                {mode === 'login' ? 'Masuk...' : 'Mendaftar...'}
              </>
            ) : mode === 'login' ? (
              'Masuk'
            ) : (
              'Daftar'
            )}
          </Button>

          {/* Google Auth - Coming Soon */}
          {/*
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-gray-900 px-2 text-muted-foreground">
                Atau
              </span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full"
            disabled
          >
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
              <path d="..." fill="#4285F4" />
            </svg>
            Masuk dengan Google (Segera Hadir)
          </Button>
          */}
        </form>

        <div className="px-6 pb-6 text-center">
          <p className="text-sm text-muted-foreground">
            {mode === 'login' ? (
              <>
                Belum punya akun?{' '}
                <button
                  onClick={switchMode}
                  className="text-violet-600 hover:text-violet-700 font-medium"
                >
                  Daftar sekarang
                </button>
              </>
            ) : (
              <>
                Sudah punya akun?{' '}
                <button
                  onClick={switchMode}
                  className="text-violet-600 hover:text-violet-700 font-medium"
                >
                  Masuk
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
