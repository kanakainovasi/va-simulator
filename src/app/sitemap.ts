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
      url: `${SITE_URL}/certificates`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  try {
    await ensureDbReady()
    const projects = await prisma.project.findMany({
      select: {
        id: true,
        updatedAt: true,
      },
    })

    const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
      url: `${SITE_URL}/project/${project.id}`,
      lastModified: project.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }))

    return [...staticPages, ...projectPages]
  } catch {
    return staticPages
  }
}
