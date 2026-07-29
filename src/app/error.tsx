'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertTriangle, Home, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-24 h-24 mx-auto bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-2xl flex items-center justify-center animate-pulse-glow">
          <AlertTriangle className="w-12 h-12 text-red-600 dark:text-red-400" />
        </div>

        <div>
          <h1 className="text-6xl font-bold text-red-500 mb-2">500</h1>
          <h2 className="text-2xl font-semibold mb-2">Terjadi Kesalahan</h2>
          <p className="text-muted-foreground">
            Mohon maaf, terjadi kesalahan internal. Tim kami sudah diberitahu dan sedang memperbaikinya.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={reset} variant="outline" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Coba Lagi
          </Button>
          <Button asChild className="gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600">
            <Link href="/">
              <Home className="h-4 w-4" />
              Halaman Utama
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
