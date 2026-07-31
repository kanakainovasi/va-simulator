# VirtualWork - Virtual Work Simulator & Portfolio Builder

Platform simulasi kerja virtual dengan 66+ proyek di 11 kategori untuk membangun portofolio profesional.

## Fitur Utama

- **66+ Proyek Simulasi** di 11 kategori pekerjaan
- **3 Level Kesulitan**: Easy, Medium, Complex
- **Dynamic Brief & Dataset** dengan contoh data realistis
- **Sertifikat Kelulusan** digital dengan QR code
- **Resource Center** dengan starter kit dan template per kategori
- **Autentikasi** (Register/Login) dengan JWT
- **SEO Optimized** dengan JSON-LD, OpenGraph, dan sitemap

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: SQLite + Prisma ORM
- **Auth**: JWT (jose) + bcryptjs
- **PDF**: html2canvas + jsPDF

## Kategori Pekerjaan

1. Data Analyst
2. Project Coordinator
3. Secretary / Executive Assistant
4. Data Entry Specialist
5. Data Annotation / AI Trainer
6. Translation / Localizer
7. Voice Over / Voice Talent
8. Email Management
9. Schedule Management
10. Travel Planner
11. Social Media Management

## Instalasi

```bash
# Clone repository
git clone <repository-url>
cd dummy-project-simulator

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env dengan JWT_SECRET yang kuat

# Setup database
npx prisma generate
npx prisma db push

# Seed data
npm run seed

# Jalankan development server
npm run dev
```

## Variabel Lingkungan

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | Database connection string | `file:./dev.db` |
| `JWT_SECRET` | Secret key for JWT signing | (required) |
| `NEXT_PUBLIC_APP_URL` | App URL for QR codes & canonical URLs | `http://localhost:3000` |

## Scripts

```bash
npm run dev        # Development server
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
npm run seed       # Seed database with projects
```

## Catatan Keamanan

- Pastikan `JWT_SECRET` diatur dengan nilai yang kuat di production
- Jangan commit file `.env` ke repository
- Untuk production, pertimbangkan menggunakan database yang lebih robust (PostgreSQL, MySQL)




