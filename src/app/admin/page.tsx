import { prisma } from '@/lib/prisma'
import { Award, Folder, MessageSquare, TrendingUp, Clock, CheckCircle, AlertCircle } from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Admin Dashboard | VirtualWork',
}

interface StatCardProps {
  label: string
  value: number
  icon: React.ReactNode
  color: string
}

function StatCard({ label, value, icon, color }: StatCardProps) {
  return (
    <div className="rounded-2xl bg-white dark:bg-gray-900 border border-violet-100 dark:border-violet-900 p-6 card-hover">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="text-3xl font-bold mt-1">{value}</p>
        </div>
        <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
    reviewed: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    resolved: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  }

  const icons: Record<string, React.ReactNode> = {
    pending: <Clock className="h-3 w-3" />,
    reviewed: <AlertCircle className="h-3 w-3" />,
    resolved: <CheckCircle className="h-3 w-3" />,
  }

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status] || styles.pending}`}>
      {icons[status]}
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}

function CategoryBadge({ category }: { category: string }) {
  const styles: Record<string, string> = {
    saran: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
    bug: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
    komplain: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  }

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[category] || ''}`}>
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </span>
  )
}

async function getStats() {
  try {
    const [totalProjects, totalCertificates, totalFeedback, pendingFeedback, feedbacks, categoryCounts] =
      await Promise.all([
        prisma.project.count(),
        prisma.certificate.count(),
        prisma.feedback.count(),
        prisma.feedback.count({ where: { status: 'pending' } }),
        prisma.feedback.findMany({
          orderBy: { createdAt: 'desc' },
          take: 50,
        }),
        prisma.feedback.groupBy({
          by: ['category'],
          _count: true,
        }),
      ])

    const categoryMap = Object.fromEntries(
      categoryCounts.map((c) => [c.category, c._count])
    )

    return { totalProjects, totalCertificates, totalFeedback, pendingFeedback, feedbacks, categoryMap }
  } catch {
    return {
      totalProjects: 0,
      totalCertificates: 0,
      totalFeedback: 0,
      pendingFeedback: 0,
      feedbacks: [],
      categoryMap: {} as Record<string, number>,
    }
  }
}

export default async function AdminPage() {
  const { totalProjects, totalCertificates, totalFeedback, pendingFeedback, feedbacks, categoryMap } = await getStats()

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
            <TrendingUp className="h-4 w-4" />
            Admin Dashboard
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="gradient-text">Dashboard Admin</span>
          </h1>
          <p className="mt-2 text-muted-foreground text-lg">
            Ringkasan statistik dan laporan feedback pengguna
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            label="Total Proyek"
            value={totalProjects}
            icon={<Folder className="h-6 w-6 text-violet-600" />}
            color="bg-violet-100 dark:bg-violet-900/30"
          />
          <StatCard
            label="Total Sertifikat"
            value={totalCertificates}
            icon={<Award className="h-6 w-6 text-fuchsia-600" />}
            color="bg-fuchsia-100 dark:bg-fuchsia-900/30"
          />
          <StatCard
            label="Total Feedback"
            value={totalFeedback}
            icon={<MessageSquare className="h-6 w-6 text-cyan-600" />}
            color="bg-cyan-100 dark:bg-cyan-900/30"
          />
          <StatCard
            label="Menunggu Review"
            value={pendingFeedback}
            icon={<Clock className="h-6 w-6 text-amber-600" />}
            color="bg-amber-100 dark:bg-amber-900/30"
          />
        </div>

        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-violet-100 dark:border-violet-900 p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Feedback per Kategori</h2>
          <div className="flex gap-4">
            {(['saran', 'bug', 'komplain'] as const).map((cat) => (
              <div key={cat} className="flex-1 text-center p-4 rounded-xl bg-muted/50">
                <CategoryBadge category={cat} />
                <p className="text-2xl font-bold mt-2">{categoryMap[cat] || 0}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-violet-100 dark:border-violet-900 overflow-hidden">
          <div className="p-6 border-b border-violet-100 dark:border-violet-900">
            <h2 className="text-lg font-semibold">Riwayat Feedback</h2>
          </div>

          {feedbacks.length === 0 ? (
            <div className="p-12 text-center">
              <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Belum ada feedback yang masuk</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-violet-100 dark:border-violet-900 bg-muted/30">
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Pengirim</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Kategori</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Pesan</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Tanggal</th>
                  </tr>
                </thead>
                <tbody>
                  {feedbacks.map((fb) => (
                    <tr key={fb.id} className="border-b border-violet-100 dark:border-violet-900 last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="p-4">
                        <div>
                          <p className="font-medium text-sm">{fb.name}</p>
                          <p className="text-xs text-muted-foreground">{fb.email}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <CategoryBadge category={fb.category} />
                      </td>
                      <td className="p-4">
                        <p className="text-sm line-clamp-2 max-w-xs">{fb.message}</p>
                      </td>
                      <td className="p-4">
                        <StatusBadge status={fb.status} />
                      </td>
                      <td className="p-4">
                        <p className="text-sm text-muted-foreground">
                          {new Date(fb.createdAt).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
