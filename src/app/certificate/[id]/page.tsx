import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { prisma, ensureDbReady } from "@/lib/prisma";
import CertificatePreview from "@/components/CertificatePreview";
import CertificateActions from "./CertificateActions";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getCertificate(id: string) {
  try {
    await ensureDbReady();
    const certificate = await prisma.certificate.findUnique({
      where: { id },
      include: {
        user: { select: { name: true } },
        project: {
          select: {
            title: true,
            category: { select: { name: true } },
            level: true,
          },
        },
      },
    });
    return certificate;
  } catch (error) {
    console.error('[CERTIFICATE] Failed to fetch certificate:', error);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const certificate = await getCertificate(id);

  if (!certificate) {
    return { title: 'Sertifikat Tidak Ditemukan | VirtualWork' };
  }

  return {
    title: `Sertifikat - ${certificate.project.title} | VirtualWork`,
    description: `Sertifikat kelulusan ${certificate.project.category.name} untuk ${certificate.project.title}`,
    alternates: { canonical: `/certificate/${id}` },
  };
}

export default async function CertificatePage({ params }: PageProps) {
  const { id } = await params;
  const certificate = await getCertificate(id);

  if (!certificate) {
    notFound();
  }

  const issueDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(certificate.issuedAt));

  const formattedCode = certificate.certificateCode.startsWith("CERT-")
    ? certificate.certificateCode
    : `CERT-${certificate.certificateCode}`;

  const qrCodeUrl =
    certificate.qrCodeUrl ||
    `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
      `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/certificate/${certificate.id}`
    )}`;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm text-slate-500 transition-colors hover:text-slate-700"
          >
            <svg
              className="mr-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to Projects
          </Link>

          <CertificateActions certificateId={certificate.id} />
        </div>

        <div className="overflow-hidden rounded-xl bg-white shadow-lg">
          <CertificatePreview
            userName={certificate.user.name || "Participant"}
            projectTitle={certificate.project.title}
            categoryName={certificate.project.category.name}
            level={certificate.project.level}
            issueDate={issueDate}
            certificateCode={formattedCode}
            qrCodeUrl={qrCodeUrl}
          />
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-slate-400">
            Certificate ID: {certificate.id}
          </p>
        </div>
      </div>
    </div>
  );
}
