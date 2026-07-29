import Link from 'next/link'
import type { Metadata } from 'next'
import { homepageMetadata } from '@/lib/seo'
import { ArrowRight, Sparkles, Award, Briefcase, BarChart3, Calendar, FileText, Database, Tag, Globe, Mic, Mail, Clock, MapPin, Share2 } from 'lucide-react'

export const metadata: Metadata = homepageMetadata

const categories = [
  { name: 'Data Analyst', icon: BarChart3, color: 'cat-data-analyst', count: 6 },
  { name: 'Project Coordinator', icon: Calendar, color: 'cat-project-coordinator', count: 6 },
  { name: 'Secretary / EA', icon: FileText, color: 'cat-secretary', count: 6 },
  { name: 'Data Entry', icon: Database, color: 'cat-data-entry', count: 6 },
  { name: 'Data Annotation', icon: Tag, color: 'cat-data-annotation', count: 6 },
  { name: 'Translation', icon: Globe, color: 'cat-translation', count: 6 },
  { name: 'Voice Over', icon: Mic, color: 'cat-voice-over', count: 6 },
  { name: 'Email Management', icon: Mail, color: 'cat-email-management', count: 6 },
  { name: 'Schedule Management', icon: Clock, color: 'cat-schedule-management', count: 6 },
  { name: 'Travel Planner', icon: MapPin, color: 'cat-travel-planner', count: 6 },
  { name: 'Social Media', icon: Share2, color: 'cat-social-media', count: 6 },
]

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    name: 'VirtualWork - Simulasi Kerja Virtual',
    description: 'Platform simulasi kerja virtual gratis dengan 11 kategori proyek dan sertifikat kelulusan',
    url: 'https://virtualwork.id',
    provider: {
      '@type': 'Organization',
      name: 'VirtualWork',
      url: 'https://virtualwork.id',
    },
    occupationalCategory: categories.map(c => c.name),
    educationalLevel: ['Beginner', 'Intermediate', 'Advanced'],
    maximumCredentialEarned: 'Certificate of Completion',
    totalCreditHours: 66,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />

          <div className="relative max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-6 animate-bounce-in">
              <Sparkles className="h-4 w-4" />
              Virtual Work Simulator
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              <span className="gradient-text">Bangun Portofolio</span>
              <br />
              <span className="text-foreground">dengan Proyek Nyata</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Simulasikan pengalaman kerja nyata dengan <strong>11 kategori proyek</strong>,{' '}
              <strong>66+ proyek praktis</strong>, dan sertifikat kelulusan yang bisa kamu bagikan ke LinkedIn.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold text-lg shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all btn-glow"
              >
                Mulai Sekarang
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/portfolio/demo"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white dark:bg-gray-900 border-2 border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 font-semibold text-lg hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-all"
              >
                Lihat Portofolio
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {[
                { label: 'Kategori Pekerjaan', value: '11', icon: Briefcase },
                { label: 'Proyek Tersedia', value: '66+', icon: FileText },
                { label: 'Level Kesulitan', value: '3', icon: BarChart3 },
                { label: 'Sertifikat', value: 'Unlimited', icon: Award },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur border border-violet-100 dark:border-violet-900 card-hover">
                  <div className="inline-flex p-3 rounded-xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 mb-3">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">11 Kategori</span> Pekerjaan
              </h2>
              <p className="text-muted-foreground text-lg">
                Pilih kategori yang sesuai dengan minat dan keahlian kamu
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {categories.map((cat, idx) => (
                <Link
                  key={cat.name}
                  href="/projects"
                  className="group p-5 rounded-2xl bg-white dark:bg-gray-900 border border-violet-100 dark:border-violet-900 card-hover animate-slide-up"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className={`inline-flex p-3 rounded-xl ${cat.color} text-white mb-3 group-hover:scale-110 transition-transform`}>
                    <cat.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{cat.name}</h3>
                  <p className="text-xs text-muted-foreground">{cat.count} proyek</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 bg-white/50 dark:bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">Cara Kerja</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                3 langkah mudah untuk membangun portofolio kamu
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Pilih Proyek',
                  description: 'Jelajahi 66+ proyek dari 11 kategori dengan 3 level kesulitan.',
                  color: 'from-violet-500 to-purple-500',
                },
                {
                  step: '02',
                  title: 'Kerjakan Tugas',
                  description: 'Akses bahan kerja mentah, template, dan instruksi lengkap untuk setiap proyek.',
                  color: 'from-fuchsia-500 to-pink-500',
                },
                {
                  step: '03',
                  title: 'Dapatkan Sertifikat',
                  description: 'Selesaikan proyek dan dapatkan sertifikat kelulusan yang bisa dibagikan.',
                  color: 'from-cyan-500 to-blue-500',
                },
              ].map((item, idx) => (
                <div
                  key={item.step}
                  className="relative p-8 rounded-2xl bg-white dark:bg-gray-900 border border-violet-100 dark:border-violet-900 card-hover animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 mt-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t">
          <div className="max-w-6xl mx-auto text-center text-muted-foreground text-sm">
            <p>VirtualWork - Simulasi Kerja Virtual & Portfolio Builder &copy; 2024</p>
          </div>
        </footer>
      </main>
    </>
  )
}
