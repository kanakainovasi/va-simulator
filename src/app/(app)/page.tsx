import { redirect } from 'next/navigation'

export default function HomePage() {
  // Beranda aplikasi: setelah login, langsung menuju menu Materi
  redirect('/materi')
}
