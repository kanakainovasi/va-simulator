'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { DatasetPreview } from '@/components/DatasetPreview'
import { getAssignedDataset, regenerateDataset } from '@/lib/dataset-assignment'
import {
  BriefTemplate,
  SampleDataset,
} from '@/lib/sample-datasets'
import {
  RefreshCw,
  Sparkles,
  Download,
  FileSpreadsheet,
  Info,
} from 'lucide-react'

interface DynamicBriefSectionProps {
  projectId: string
  projectLevel: string
  categorySlug: string
  originalBrief: string
  originalStoryline?: string
  toolsNeeded: string[]
}

export function DynamicBriefSection({
  projectId,
  projectLevel,
  categorySlug,
  originalBrief,
  originalStoryline,
  toolsNeeded,
}: DynamicBriefSectionProps) {
  // Get initial dataset synchronously
  const [datasetInfo, setDatasetInfo] = useState<{
    dataset: SampleDataset
    briefTemplate: BriefTemplate
    files: { name: string; content: string; size: string }[]
  } | null>(() => {
    try {
      return getAssignedDataset(projectId, projectLevel, categorySlug)
    } catch {
      return null
    }
  })
  const [isRegenerating, setIsRegenerating] = useState(false)

  const handleRegenerate = async () => {
    setIsRegenerating(true)
    await new Promise(resolve => setTimeout(resolve, 800))
    regenerateDataset(projectId, projectLevel, categorySlug)
    const info = getAssignedDataset(projectId, projectLevel, categorySlug)
    setDatasetInfo(info)
    setIsRegenerating(false)
  }

  // Use fullBrief from dataset if available, otherwise use original
  const briefToShow = datasetInfo?.briefTemplate?.fullBrief || originalBrief
  const storylineToShow = datasetInfo?.briefTemplate?.storyline || originalStoryline || ''

  const briefParagraphs = briefToShow.split('\n').filter((s) => s.trim())

  const downloadCSV = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="space-y-6">
      {/* Dynamic Dataset Banner */}
      {datasetInfo && (
        <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-200 dark:border-violet-800 rounded-lg">
          <Sparkles className="h-4 w-4 text-violet-600 dark:text-violet-400" />
          <span className="text-sm font-medium text-violet-700 dark:text-violet-300">
            This project uses dynamic sample data
          </span>
          <Badge variant="outline" className="ml-auto text-xs">
            {datasetInfo.dataset.name}
          </Badge>
        </div>
      )}

      {/* Resource Center Instruction */}
      <div className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg">
        <Info className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
        <div className="text-sm">
          <p className="font-medium text-amber-800 dark:text-amber-300">
            Silakan unduh bahan kerja, transkrip, atau dataset di tab{' '}
            <span className="font-bold">Resource Center</span> untuk mulai mengerjakan tugas ini.
          </p>
          <p className="text-amber-700 dark:text-amber-400 mt-1">
            File mentah dan template siap pakai sudah tersedia sesuai dengan kategori project kamu.
          </p>
        </div>
      </div>

      {/* Brief & Storyline Card */}
      <Card>
        <CardHeader>
          <CardTitle>Client Brief &amp; Storyline</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold uppercase text-muted-foreground mb-3">
              Brief
            </h3>
            <div className="prose prose-sm max-w-none text-muted-foreground">
              {briefParagraphs.map((p, i) => (
                <p key={i} className="mb-3 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {storylineToShow && (
            <>
              <Separator />
              <div>
                <h3 className="text-sm font-semibold uppercase text-muted-foreground mb-3">
                  Storyline
                </h3>
                <div className="bg-muted/50 border rounded-lg p-4">
                  <p className="text-sm italic text-muted-foreground leading-relaxed whitespace-pre-line">
                    {storylineToShow}
                  </p>
                </div>
              </div>
            </>
          )}

          {toolsNeeded.length > 0 && (
            <>
              <Separator />
              <div>
                <h3 className="text-sm font-semibold uppercase text-muted-foreground mb-3">
                  Tools Needed
                </h3>
                <div className="flex flex-wrap gap-2">
                  {toolsNeeded.map((tool, i) => (
                    <Badge key={i} variant="secondary">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Quick Download Section */}
      {datasetInfo && datasetInfo.files.length > 0 && (
        <Card className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
              <FileSpreadsheet className="h-5 w-5" />
              Download Sample Data
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-green-600 dark:text-green-400 mb-4">
              Download file data mentah untuk dikerjakan:
            </p>
            <div className="flex flex-wrap gap-3">
              {datasetInfo.files.map((file, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  className="gap-2 bg-white dark:bg-green-950/50 border-green-300 dark:border-green-700 hover:bg-green-100 dark:hover:bg-green-900/50"
                  onClick={() => downloadCSV(file.content, file.name)}
                >
                  <Download className="h-4 w-4" />
                  {file.name}
                  <span className="text-xs text-muted-foreground">({file.size})</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Dataset Preview Section */}
      {datasetInfo && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-violet-500" />
              Dataset Preview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <DatasetPreview
              datasetName={datasetInfo.dataset.name}
              datasetDescription={datasetInfo.dataset.description}
              difficulty={datasetInfo.dataset.difficulty}
              variant={datasetInfo.dataset.variant}
              files={datasetInfo.files}
              onRegenerate={handleRegenerate}
              isRegenerating={isRegenerating}
            />
          </CardContent>
        </Card>
      )}

      {/* Fallback if no dataset */}
      {!datasetInfo && (
        <Card>
          <CardHeader>
            <CardTitle>Client Brief &amp; Storyline</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase text-muted-foreground mb-3">
                Brief
              </h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                {originalBrief.split('\n').filter((s) => s.trim()).map((p, i) => (
                  <p key={i} className="mb-3 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {originalStoryline && (
              <>
                <Separator />
                <div>
                  <h3 className="text-sm font-semibold uppercase text-muted-foreground mb-3">
                    Storyline
                  </h3>
                  <div className="bg-muted/50 border rounded-lg p-4">
                    <p className="text-sm italic text-muted-foreground leading-relaxed whitespace-pre-line">
                      {originalStoryline}
                    </p>
                  </div>
                </div>
              </>
            )}

            {toolsNeeded.length > 0 && (
              <>
                <Separator />
                <div>
                  <h3 className="text-sm font-semibold uppercase text-muted-foreground mb-3">
                    Tools Needed
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {toolsNeeded.map((tool, i) => (
                      <Badge key={i} variant="secondary">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}