import Link from 'next/link'
import { Heart, Github, Mail, MessageSquare } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-violet-100 dark:border-violet-900 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">VW</span>
              </div>
              <span className="text-xl font-bold gradient-text">VirtualWork</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Platform simulasi kerja virtual untuk membangun portofolio profesional.
              Tersedia 66+ proyek di 11 kategori pekerjaan.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/latihan" className="text-muted-foreground hover:text-foreground transition-colors">
                  Latihan & Proyek
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sertifikat
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-muted-foreground hover:text-foreground transition-colors">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:kanaka.inovasi@gmail.com"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MessageSquare className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-violet-100 dark:border-violet-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} VirtualWork. Dibuat dengan{' '}
              <Heart className="inline h-4 w-4 text-red-500" /> untuk portofolio profesional.
            </p>
            <p className="text-sm text-muted-foreground">
              Kanaka Inovasi
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
