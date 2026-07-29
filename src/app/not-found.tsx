import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FileQuestion, Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-24 h-24 mx-auto bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 rounded-2xl flex items-center justify-center animate-float">
          <FileQuestion className="w-12 h-12 text-violet-600 dark:text-violet-400" />
        </div>

        <div>
          <h1 className="text-6xl font-bold gradient-text mb-2">404</h1>
          <h2 className="text-2xl font-semibold mb-2">Halaman Tidak Ditemukan</h2>
          <p className="text-muted-foreground">
            Sepertinya halaman yang kamu cari sudah dipindahkan atau tidak tersedia.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="outline" className="gap-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Kembali
            </Link>
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
