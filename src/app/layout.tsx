import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { cn } from '@/lib/utils'
import { AuthProvider } from '@/components/auth/AuthProvider'
import { FeedbackWidget } from '@/components/FeedbackWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: 'VirtualWork - Simulasi Kerja Virtual & Pembelajaran',
  description: 'Platform pembelajaran dan simulasi kerja virtual: baca materi, kerjakan latihan, dan pelajari 11 kategori pekerjaan.',
  openGraph: {
    title: 'VirtualWork - Simulasi Kerja Virtual & Pembelajaran',
    description: 'Belajar materi, kerjakan latihan simulasi kerja, dan kuasai 11 kategori pekerjaan.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={cn(inter.className, "min-h-screen bg-gradient-to-br from-violet-50 via-fuchsia-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 antialiased")}>
        <AuthProvider>
          {children}
          <FeedbackWidget />
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
