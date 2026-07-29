import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { cn } from '@/lib/utils'
import { AuthProvider } from '@/components/auth/AuthProvider'
import { MainNav } from '@/components/MainNav'
import { FeedbackWidget } from '@/components/FeedbackWidget'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: 'Virtual Work Simulator & Portfolio Builder',
  description: 'Build your portfolio with realistic dummy projects across 11 job categories',
  openGraph: {
    title: 'VirtualWork - Simulasi Kerja Virtual & Portfolio Builder',
    description: 'Bangun portofolio profesional dengan 66+ proyek simulasi kerja di 11 kategori.',
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
          <MainNav />
          <main className="min-h-[calc(100vh-4rem)]">
            {children}
          </main>
          <Footer />
          <FeedbackWidget />
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
