import { MetadataRoute } from 'next'
import { prisma, ensureDbReady } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://virtualwork.id'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/materi`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/latihan`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/kategori`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/certificates`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  try {
    await ensureDbReady()
    const [projects, materis, latihans] = await Promise.all([
      prisma.project.findMany({
        select: {
          id: true,
          updatedAt: true,
        },
      }),
      prisma.materi.findMany({
        select: {
          slug: true,
          updatedAt: true,
        },
      }),
      prisma.latihan.findMany({
        select: {
          slug: true,
          updatedAt: true,
        },
      }),
    ])

    const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
      url: `${SITE_URL}/project/${project.id}`,
      lastModified: project.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }))

    const materiPages: MetadataRoute.Sitemap = materis.map((materi) => ({
      url: `${SITE_URL}/materi/${materi.slug}`,
      lastModified: materi.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    const latihanPages: MetadataRoute.Sitemap = latihans.map((latihan) => ({
      url: `${SITE_URL}/latihan/${latihan.slug}`,
      lastModified: latihan.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    return [...staticPages, ...materiPages, ...latihanPages, ...projectPages]
  } catch {
    return staticPages
  }
}
