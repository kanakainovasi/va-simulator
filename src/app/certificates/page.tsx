import { Metadata } from 'next'
import CertificatesClient from './CertificatesClient'

export const metadata: Metadata = {
  title: 'Sertifikat Saya | VirtualWork - Simulasi Kerja Virtual',
  description: 'Lihat dan kelola sertifikat kelulusan yang telah kamu dapatkan dari proyek simulasi kerja VirtualWork. Portofolio profesional dalam genggaman.',
  keywords: [
    'sertifikat kelulusan',
    'portofolio kerja',
    'virtual work certificate',
    'sertifikat digital',
    'proof of completion',
  ],
  alternates: {
    canonical: '/certificates',
  },
  openGraph: {
    title: 'Sertifikat Saya | VirtualWork',
    description: 'Lihat dan kelola sertifikat kelulusan yang telah kamu dapatkan dari proyek simulasi kerja.',
    type: 'website',
  },
}

export default function CertificatesPage() {
  return <CertificatesClient />
}
