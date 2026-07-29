'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { getResourcesForCategory, ResourceFile, TemplateLink } from '@/lib/project-resources'
import {
  Download,
  ExternalLink,
  FileText,
  FileSpreadsheet,
  File,
  CheckCircle,
  BookOpen,
  Link2,
} from 'lucide-react'

interface ResourceCenterProps {
  categorySlug: string
  projectTitle: string
}

function getFileIcon(type: ResourceFile['type']) {
  switch (type) {
    case 'csv':
      return <FileSpreadsheet className="h-5 w-5 text-green-600" />
    case 'xlsx':
      return <FileSpreadsheet className="h-5 w-5 text-emerald-600" />
    case 'docx':
      return <FileText className="h-5 w-5 text-blue-600" />
    case 'txt':
      return <File className="h-5 w-5 text-gray-600" />
    case 'zip':
      return <File className="h-5 w-5 text-purple-600" />
    default:
      return <File className="h-5 w-5 text-muted-foreground" />
  }
}

function getPlatformBadge(platform: TemplateLink['platform']) {
  const config: Record<string, { label: string; color: string }> = {
    'google-sheets': { label: 'Google Sheets', color: 'bg-green-100 text-green-800' },
    'google-docs': { label: 'Google Docs', color: 'bg-blue-100 text-blue-800' },
    canva: { label: 'Canva', color: 'bg-purple-100 text-purple-800' },
    notion: { label: 'Notion', color: 'bg-gray-100 text-gray-800' },
    figma: { label: 'Figma', color: 'bg-pink-100 text-pink-800' },
  }
  const c = config[platform] || { label: platform, color: 'bg-gray-100 text-gray-800' }
  return <Badge variant="outline" className={`text-xs ${c.color}`}>{c.label}</Badge>
}

function downloadFile(file: ResourceFile) {
  if (!file.content) return
  const blob = new Blob([file.content], {
    type: file.type === 'csv' ? 'text/csv;charset=utf-8;' : 'text/plain;charset=utf-8;',
  })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = file.name
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function ResourceCenter({ categorySlug, projectTitle }: ResourceCenterProps) {
  const resources = getResourcesForCategory(categorySlug)
  const [expandedFile, setExpandedFile] = useState<string | null>(null)

  if (!resources) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Resource Center</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            Resources sedang dalam pengembangan untuk kategori ini.
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            {resources.title}
          </CardTitle>
          <p className="text-sm text-muted-foreground">{resources.description}</p>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Cara Menggunakan Starter Kit
            </h4>
            <ol className="space-y-1.5">
              {resources.howToUse.map((step, i) => (
                <li key={i} className="flex gap-2 text-sm text-blue-700 dark:text-blue-400">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center text-xs font-bold text-blue-800 dark:text-blue-200">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* Starter Kit Files */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5 text-green-600" />
            Starter Kit - File Mentah
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Download file mentah untuk dikerjakan sesuai instruksi project
          </p>
        </CardHeader>
        <CardContent className="space-y-3">
          {resources.starterKit.map((file, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  {getFileIcon(file.type)}
                  <div>
                    <h4 className="font-medium text-sm">{file.name}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {file.description}
                    </p>
                    <div className="flex gap-2 mt-1.5">
                      <Badge variant="secondary" className="text-xs">
                        {file.type.toUpperCase()}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {file.size}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  {file.content && (
                    <>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          setExpandedFile(expandedFile === file.name ? null : file.name)
                        }
                      >
                        {expandedFile === file.name ? 'Tutup' : 'Preview'}
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => downloadFile(file)}
                        className="gap-1.5"
                      >
                        <Download className="h-3.5 w-3.5" />
                        Download
                      </Button>
                    </>
                  )}
                  {!file.content && (
                    <Button size="sm" variant="outline" disabled>
                      <Download className="h-3.5 w-3.5 mr-1.5" />
                      Download
                    </Button>
                  )}
                </div>
              </div>

              {/* File Preview */}
              {expandedFile === file.name && file.content && (
                <div className="mt-3 border rounded-md bg-muted/30 overflow-hidden">
                  <div className="px-3 py-2 bg-muted border-b text-xs font-mono text-muted-foreground">
                    Preview: {file.name}
                  </div>
                  <pre className="p-3 text-xs overflow-x-auto max-h-64 overflow-y-auto font-mono">
                    {file.content}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Template Links */}
      {resources.templates.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Link2 className="h-5 w-5 text-purple-600" />
              Template Siap Pakai
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Akses template online untuk mempercepat pekerjaan kamu
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            {resources.templates.map((template, idx) => (
              <a
                key={idx}
                href={template.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border rounded-lg p-4 hover:bg-muted/50 transition-colors group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                        {template.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {template.description}
                      </p>
                      <div className="mt-1.5">
                        {getPlatformBadge(template.platform)}
                      </div>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="flex-shrink-0 group-hover:text-primary"
                  >
                    Buka
                    <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                  </Button>
                </div>
              </a>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Checklist */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300 text-lg">
            <CheckCircle className="h-5 w-5" />
            Sebelum Mulai Kerja
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Download semua file starter kit dari section di atas</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Buka dan pelajari template yang tersedia</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Baca instruksi lengkap di tab &quot;Client Brief &amp; Storyline&quot;</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Siapkan tools yang dibutuhkan dari tab &quot;Onboarding &amp; Tools&quot;</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Mulai kerjakan tugas dan submit di tab &quot;Submission&quot;</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
