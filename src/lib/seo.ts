import type { Metadata } from 'next'

const SITE_NAME = 'VirtualWork - Simulasi Kerja Virtual & Portfolio Builder'
const SITE_URL = 'https://virtualwork.id'
const SITE_DESCRIPTION = 'Platform simulasi kerja virtual gratis dengan 11 kategori proyek, 66+ proyek praktis, dan sertifikat kelulusan. Latih portofolio Data Analyst, Project Coordinator, Social Media Management, dan lainnya.'

export const homepageMetadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Simulasi Kerja Virtual Gratis & Portofolio Builder`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'simulasi kerja virtual',
    'latihan portofolio gratis',
    'proyek magang virtual',
    'virtual work simulator',
    'portofolio builder',
    'data analyst pemula',
    'project coordinator training',
    'social media management course',
    'studi kasus project management',
    'template content planner',
    'latihan kerja online',
    'belajar data analysis',
    'kursus digital marketing gratis',
    'sertifikat kelulusan online',
    'pengalaman kerja virtual',
  ],
  authors: [{ name: 'VirtualWork' }],
  creator: 'VirtualWork',
  publisher: 'VirtualWork',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Simulasi Kerja Virtual Gratis`,
    description: 'Bangun portofolio profesional dengan 66+ proyek simulasi kerja di 11 kategori. Dapatkan sertifikat kelulusan yang bisa dibagikan ke LinkedIn.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VirtualWork - Simulasi Kerja Virtual',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export function generateProjectMetadata(project: {
  title: string
  brief: string
  level: string
  category: { name: string; slug: string }
  id: string
}): Metadata {
  const title = `${project.title} - Proyek ${project.category.name}`
  const description = `${project.brief} Level: ${project.level}. Kerjakan proyek simulasi ini untuk membangun portofolio profesional.`
  const url = `${SITE_URL}/project/${project.id}`

  return {
    title,
    description,
    keywords: [
      project.category.name.toLowerCase(),
      'proyek simulasi',
      `latihan ${project.category.name.toLowerCase()}`,
      `studi kasus ${project.category.name.toLowerCase()}`,
      'portofolio gratis',
      'simulasi kerja virtual',
      `proyek ${project.level.toLowerCase()}`,
    ],
    alternates: {
      canonical: `/project/${project.id}`,
    },
    openGraph: {
      type: 'article',
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(project.title)}&category=${encodeURIComponent(project.category.name)}&level=${project.level}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/api/og?title=${encodeURIComponent(project.title)}&category=${encodeURIComponent(project.category.name)}&level=${project.level}`],
    },
  }
}

export function generateCategoryMetadata(category: {
  name: string
  slug: string
  description?: string
}): Metadata {
  const title = `${category.name} - Proyek Simulasi`
  const description = `Koleksi proyek simulasi ${category.name} untuk membangun portofolio profesional. Kerjakan proyek nyata dan dapatkan sertifikat kelulusan.`
  const url = `${SITE_URL}/projects?category=${category.slug}`

  return {
    title,
    description,
    keywords: [
      category.name.toLowerCase(),
      `latihan ${category.name.toLowerCase()}`,
      `studi kasus ${category.name.toLowerCase()}`,
      `proyek ${category.name.toLowerCase()} gratis`,
      'simulasi kerja virtual',
      'portofolio builder',
    ],
    alternates: {
      canonical: `/projects?category=${category.slug}`,
    },
    openGraph: {
      type: 'website',
      title,
      description,
      url,
      siteName: SITE_NAME,
    },
  }
}
