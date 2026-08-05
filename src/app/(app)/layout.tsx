import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'
import { MainNav } from '@/components/MainNav'
import { Footer } from '@/components/Footer'

export const dynamic = 'force-dynamic'

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getSession()

  // Gerbang autentikasi: tanpa sesi, semua halaman di dalam (app) dialihkan ke login
  if (!user) {
    redirect('/login')
  }

  return (
    <>
      <MainNav />
      <main className="min-h-[calc(100vh-4rem)]">
        {children}
      </main>
      <Footer />
    </>
  )
}
