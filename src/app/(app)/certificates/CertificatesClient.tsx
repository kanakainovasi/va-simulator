'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/components/auth/AuthProvider'
import { AuthModal } from '@/components/auth/AuthModal'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Award, ExternalLink, Calendar, FileText, LogIn } from 'lucide-react'

interface Certificate {
  id: string
  certificateCode: string
  issuedAt: string
  project: {
    title: string
    level: string
    category: {
      name: string
      slug: string
    }
  }
}

export default function CertificatesClient() {
  const { user, loading } = useAuth()
  const [certificates, setCertificates] = useState<Certificate[]>([])
  const [loadingCerts, setLoadingCerts] = useState(true)
  const [showAuthModal, setShowAuthModal] = useState(false)

  useEffect(() => {
    if (user) {
      fetchCertificates()
    }
  }, [user])

  const fetchCertificates = async () => {
    try {
      const res = await fetch(`/api/certificates/user/${user!.id}`)
      if (res.ok) {
        const data = await res.json()
        setCertificates(data.certificates || [])
      }
    } catch (err) {
      console.error('Failed to fetch certificates:', err)
    } finally {
      setLoadingCerts(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-violet-500 border-t-transparent" />
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 rounded-2xl flex items-center justify-center">
            <Award className="w-10 h-10 text-violet-600 dark:text-violet-400" />
          </div>
          <h1 className="text-3xl font-bold gradient-text">Sertifikat Saya</h1>
          <p className="text-muted-foreground">
            Masuk untuk melihat sertifikat kelulusan yang telah kamu dapatkan.
          </p>
          <Button
            onClick={() => setShowAuthModal(true)}
            className="gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600"
          >
            <LogIn className="h-4 w-4" />
            Masuk / Daftar
          </Button>
          <AuthModal
            isOpen={showAuthModal}
            onClose={() => setShowAuthModal(false)}
            initialMode="login"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
            <Award className="h-4 w-4" />
            Sertifikat Saya
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Sertifikat Kelulusan</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Semua sertifikat yang telah kamu dapatkan dari proyek yang diselesaikan.
          </p>
        </div>

        {loadingCerts ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-violet-500 border-t-transparent mx-auto" />
            <p className="mt-4 text-muted-foreground">Memuat sertifikat...</p>
          </div>
        ) : certificates.length === 0 ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center">
              <FileText className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold">Belum Ada Sertifikat</h3>
            <p className="text-muted-foreground max-w-sm mx-auto">
              Selesaikan proyek pertama kamu untuk mendapatkan sertifikat kelulusan.
            </p>
            <Button asChild className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600">
              <Link href="/projects">Mulai Proyek</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {certificates.map((cert, idx) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-violet-100 dark:border-violet-900 card-hover animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{cert.project.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-medium">
                          {cert.project.category.name}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 text-white text-xs font-medium">
                          {cert.project.level}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(cert.issuedAt).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>
                        <span className="font-mono text-xs">{cert.certificateCode}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 sm:flex-shrink-0">
                    <Button asChild variant="outline" size="sm" className="gap-1.5">
                      <Link href={`/certificate/${cert.id}`}>
                        <FileText className="h-4 w-4" />
                        Lihat
                      </Link>
                    </Button>
                    <Button asChild size="sm" className="gap-1.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600">
                      <a href={`/certificate/${cert.id}`} target="_blank">
                        <ExternalLink className="h-4 w-4" />
                        Buka
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
