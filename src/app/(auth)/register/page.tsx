import type { Metadata } from 'next'
import { AuthForm } from '@/components/auth/AuthForm'

export const metadata: Metadata = {
  title: 'Daftar | VirtualWork - Simulasi Kerja Virtual',
  description: 'Buat akun VirtualWork gratis untuk mulai mengerjakan proyek latihan simulasi kerja.',
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            <span className="gradient-text">Mulai Belajar</span>
          </h1>
          <p className="text-muted-foreground">
            Daftar gratis dan akses semua proyek latihan
          </p>
        </div>
        <AuthForm mode="register" />
      </div>
    </div>
  )
}
