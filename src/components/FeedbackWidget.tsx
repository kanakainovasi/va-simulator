'use client'

import { useState } from 'react'
import { MessageSquare, X, Send, Loader2, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type FeedbackCategory = 'saran' | 'bug' | 'komplain'

interface FeedbackFormData {
  name: string
  email: string
  category: FeedbackCategory
  message: string
}

export function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<FeedbackFormData>({
    name: '',
    email: '',
    category: 'saran',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', category: 'saran', message: '' })
        setTimeout(() => {
          setIsSubmitted(false)
          setIsOpen(false)
        }, 2000)
      }
    } catch {
      console.error('Failed to submit feedback')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg hover:from-violet-600 hover:to-fuchsia-600 transition-all hover:scale-110 flex items-center justify-center"
        aria-label="Kirim Feedback"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-gray-900 shadow-2xl border border-violet-100 dark:border-violet-900 animate-slide-up">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-violet-100 dark:border-violet-900">
              <h3 className="text-lg font-semibold gradient-text">Kirim Feedback</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 hover:bg-muted transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            {isSubmitted ? (
              <div className="p-8 text-center">
                <CheckCircle className="h-16 w-16 mx-auto text-green-500 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Terima Kasih!</h4>
                <p className="text-muted-foreground">Feedback kamu telah berhasil dikirim.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Nama</label>
                  <Input
                    type="text"
                    required
                    placeholder="Nama lengkap"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <Input
                    type="email"
                    required
                    placeholder="email@contoh.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Kategori</label>
                  <div className="flex gap-2">
                    {(['saran', 'bug', 'komplain'] as FeedbackCategory[]).map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setFormData({ ...formData, category: cat })}
                        className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                          formData.category === cat
                            ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white'
                            : 'bg-muted hover:bg-muted/80'
                        }`}
                      >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Pesan</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tulis feedback kamu di sini..."
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Kirim Feedback
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
