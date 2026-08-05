import type { Metadata } from 'next'
import { AuthForm } from '@/components/auth/AuthForm'

export const metadata: Metadata = {
  title: 'Masuk | VirtualWork - Simulasi Kerja Virtual',
  description: 'Masuk ke akun VirtualWork untuk mengakses materi pembelajaran dan latihan simulasi kerja.',
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-12 items-center">
        <div className="hidden lg:block">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            <span className="gradient-text">Gerbang Awal</span>
            <br />
            Belajar & Latihan Kerja Virtual
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Masuk untuk mengakses materi pembelajaran, latihan simulasi kerja,
            dan 11 kategori pekerjaan yang siap kamu pelajari.
          </p>
          <div className="space-y-4">
            {[
              { step: '01', title: 'Baca Materi', desc: 'Pelajari teori dan panduan praktis setiap profesi.' },
              { step: '02', title: 'Kerjakan Latihan', desc: 'Uji pemahaman dengan kuis dan simulasi per kategori.' },
              { step: '03', title: 'Kuasai Kategori', desc: 'Pilih kategori yang sesuai minat dan terus berkembang.' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 p-4 rounded-xl bg-white/70 dark:bg-gray-900/70 border border-violet-100 dark:border-violet-900">
                <span className="h-10 w-10 shrink-0 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white font-bold flex items-center justify-center">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <AuthForm mode="login" />
      </div>
    </div>
  )
}
