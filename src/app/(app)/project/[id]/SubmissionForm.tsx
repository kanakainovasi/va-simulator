'use client'

import { useState, useRef } from 'react'
import { useAuth } from '@/components/auth/AuthProvider'
import { AuthModal } from '@/components/auth/AuthModal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import CertificateSuccessModal from '@/components/CertificateSuccessModal'
import { LogIn, Upload, CheckCircle, FileText, Download } from 'lucide-react'

interface SubmissionFormProps {
  projectId: string
}

export function SubmissionForm({ projectId }: SubmissionFormProps) {
  const { user } = useAuth()
  const [outputUrl, setOutputUrl] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [checklist, setChecklist] = useState([false, false, false])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [certificateId, setCertificateId] = useState<string | null>(null)
  const [certificateCode, setCertificateCode] = useState<string | null>(null)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const allChecked = checklist.every(Boolean)
  const hasInput = outputUrl.trim().length > 0 || file !== null
  const canSubmit = allChecked && hasInput && !isSubmitting && !!user

  const handleChecklistChange = (index: number) => {
    setChecklist((prev) => {
      const next = [...prev]
      next[index] = !next[index]
      return next
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    setFile(selected ?? null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return

    setIsSubmitting(true)
    setError(null)

    try {
      // Step 1: Submit the work
      const formData = new FormData()
      formData.append('projectId', projectId)
      formData.append('outputUrl', outputUrl)
      formData.append('userId', user!.id)
      if (file) {
        formData.append('file', file)
      }

      const submitResponse = await fetch('/api/submissions', {
        method: 'POST',
        body: formData,
      })

      if (!submitResponse.ok) {
        const submitData = await submitResponse.json()
        throw new Error(submitData.error || 'Failed to submit')
      }

      // Step 2: Generate certificate
      const certResponse = await fetch('/api/certificates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user!.id,
          projectId: projectId,
        }),
      })

      if (!certResponse.ok) {
        const certData = await certResponse.json()
        throw new Error(certData.error || 'Failed to generate certificate')
      }

      const certData = await certResponse.json()

      // Show success with certificate
      setCertificateId(certData.certificate.id)
      setCertificateCode(certData.certificate.certificateCode)
      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (success && certificateId && certificateCode) {
    return (
      <>
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25 animate-bounce-in">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold gradient-text">Submission Successful!</h3>
          <p className="text-muted-foreground">
            Pekerjaan kamu telah dikirim dan sertifikat telah dibuat.
          </p>
          <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-950/30 dark:to-fuchsia-950/30 rounded-xl p-4 inline-block border border-violet-100 dark:border-violet-900">
            <p className="text-xs text-muted-foreground mb-1">Kode Sertifikat Kamu</p>
            <p className="text-lg font-mono font-bold text-violet-600 dark:text-violet-400">{certificateCode}</p>
          </div>
          <div className="flex gap-3 justify-center pt-2">
            <Button asChild variant="outline" className="gap-2">
              <a href={`/certificate/${certificateId}`}>
                <FileText className="h-4 w-4" />
                Lihat Sertifikat
              </a>
            </Button>
            <Button asChild className="gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600">
              <a href={`/certificate/${certificateId}`}>
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>

        <CertificateSuccessModal
          isOpen={success}
          onClose={() => setSuccess(false)}
          certificateId={certificateId}
          certificateCode={certificateCode}
          projectId={projectId}
        />
      </>
    )
  }

  // Not logged in
  if (!user) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 rounded-full flex items-center justify-center">
          <LogIn className="w-8 h-8 text-violet-600 dark:text-violet-400" />
        </div>
        <h3 className="text-xl font-bold">Masuk untuk Submit</h3>
        <p className="text-muted-foreground max-w-sm mx-auto">
          Kamu perlu masuk ke akun kamu untuk mengirim pekerjaan dan mendapatkan sertifikat.
        </p>
        <Button
          onClick={() => setShowAuthModal(true)}
          className="gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600"
        >
          <LogIn className="h-4 w-4" />
          Masuk / Daftar
        </Button>
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          initialMode="login"
        />
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* User info */}
      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-950/30 dark:to-fuchsia-950/30 rounded-xl border border-violet-100 dark:border-violet-900">
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-semibold">
          {user.name?.charAt(0)?.toUpperCase() || 'U'}
        </div>
        <div>
          <p className="font-medium">{user.name}</p>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-4 text-sm text-red-700 dark:text-red-400">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="outputUrl" className="text-sm font-medium">Output URL</Label>
          <Input
            id="outputUrl"
            type="url"
            placeholder="https://drive.google.com/... atau https://figma.com/..."
            value={outputUrl}
            onChange={(e) => setOutputUrl(e.target.value)}
            disabled={isSubmitting}
            className="rounded-xl"
          />
          <p className="text-xs text-muted-foreground">
            Tempel link ke Google Drive, Figma, Notion, atau file online lainnya.
          </p>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Atau Upload File</Label>
          <div
            className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-all ${isSubmitting ? 'opacity-50 pointer-events-none' : ''}`}
            onClick={() => !isSubmitting && fileInputRef.current?.click()}
          >
            {file ? (
              <div className="space-y-2">
                <FileText className="h-8 w-8 mx-auto text-violet-500" />
                <p className="text-sm font-medium">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    setFile(null)
                    if (fileInputRef.current) fileInputRef.current.value = ''
                  }}
                  className="text-red-500 hover:text-red-600"
                >
                  Hapus
                </Button>
              </div>
            ) : (
              <div className="space-y-2">
                <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Klik untuk upload MP3, WAV, PDF, atau Image
                </p>
                <p className="text-xs text-muted-foreground">
                  Maksimal ukuran file: 10MB
                </p>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".mp3,.wav,.pdf,.png,.jpg,.jpeg,.gif"
            className="hidden"
            onChange={handleFileChange}
            disabled={isSubmitting}
          />
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <Label className="text-sm font-medium">Checklist Konfirmasi Diri</Label>
        {[
          'Saya telah menyelesaikan semua pekerjaan sesuai brief',
          'File/link yang saya kirim sudah benar dan dapat diakses',
          'Saya memahami ini adalah proyek simulasi untuk portofolio',
        ].map((item, i) => (
          <label
            key={i}
            className="flex items-start gap-3 cursor-pointer group"
          >
            <input
              type="checkbox"
              checked={checklist[i]}
              onChange={() => handleChecklistChange(i)}
              disabled={isSubmitting}
              className="mt-0.5 h-4 w-4 rounded border-gray-300 text-violet-500 focus:ring-violet-500"
            />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              {item}
            </span>
          </label>
        ))}
      </div>

      <Button
        type="submit"
        disabled={!canSubmit}
        className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white py-6 text-base font-semibold rounded-xl shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/30 transition-all"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Mengirim...
          </>
        ) : (
          'Kirim & Buat Sertifikat'
        )}
      </Button>
    </form>
  )
}
