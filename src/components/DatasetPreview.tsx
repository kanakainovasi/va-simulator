'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Download,
  RefreshCw,
  Eye,
  EyeOff,
  Database,
  FileSpreadsheet,
  Info,
} from 'lucide-react'

interface DatasetFile {
  name: string
  content: string
  size: string
}

interface DatasetPreviewProps {
  datasetName: string
  datasetDescription: string
  difficulty: string
  variant: number
  files: DatasetFile[]
  onRegenerate?: () => void
  isRegenerating?: boolean
}

export function DatasetPreview({
  datasetName,
  datasetDescription,
  difficulty,
  variant,
  files,
  onRegenerate,
  isRegenerating = false,
}: DatasetPreviewProps) {
  const [showPreview, setShowPreview] = useState(false)
  const [selectedFile, setSelectedFile] = useState(0)

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    advanced: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  }

  const parseCSV = (content: string) => {
    const lines = content.trim().split('\n')
    const headers = lines[0].split(',')
    const rows = lines.slice(1, 6).map(line => line.split(','))
    return { headers, rows, totalRows: lines.length - 1 }
  }

  const downloadFile = (file: DatasetFile) => {
    const blob = new Blob([file.content], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = file.name
    link.click()
  }

  const currentFile = files[selectedFile]
  const parsed = currentFile ? parseCSV(currentFile.content) : null

  return (
    <div className="space-y-4">
      {/* Dataset Info Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
            <Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">
                {datasetName}
              </h4>
              <Badge className={difficultyColors[difficulty as keyof typeof difficultyColors]}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </Badge>
              <Badge variant="outline" className="text-xs">
                Variant #{variant}
              </Badge>
            </div>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              {datasetDescription}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {onRegenerate && (
            <Button
              variant="outline"
              size="sm"
              onClick={onRegenerate}
              disabled={isRegenerating}
              className="gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${isRegenerating ? 'animate-spin' : ''}`} />
              {isRegenerating ? 'Regenerating...' : 'Get New Dataset'}
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowPreview(!showPreview)}
            className="gap-2"
          >
            {showPreview ? (
              <>
                <EyeOff className="h-4 w-4" />
                Hide Preview
              </>
            ) : (
              <>
                <Eye className="h-4 w-4" />
                Preview Data
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Data Preview */}
      {showPreview && parsed && (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm flex items-center gap-2">
                <FileSpreadsheet className="h-4 w-4" />
                Data Preview
              </CardTitle>
              <div className="flex items-center gap-2">
                {files.map((file, idx) => (
                  <Badge
                    key={idx}
                    variant={idx === selectedFile ? 'default' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => setSelectedFile(idx)}
                  >
                    {file.name}
                  </Badge>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted/50">
                    {parsed.headers.map((header, idx) => (
                      <th
                        key={idx}
                        className="px-3 py-2 text-left font-medium text-muted-foreground border"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {parsed.rows.map((row, rowIdx) => (
                    <tr key={rowIdx} className="hover:bg-muted/30">
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx} className="px-3 py-2 border">
                          {cell || (
                            <span className="text-muted-foreground italic">empty</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Info className="h-3 w-3" />
                Showing 5 of {parsed.totalRows} rows (preview only)
              </span>
              <span>{currentFile.size}</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* File Download List */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-muted-foreground">
          Files to Download:
        </h4>
        {files.map((file, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border"
          >
            <div className="flex items-center gap-3">
              <FileSpreadsheet className="h-4 w-4 text-green-600" />
              <div>
                <p className="text-sm font-medium">{file.name}</p>
                <p className="text-xs text-muted-foreground">{file.size}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => downloadFile(file)}
              className="gap-2"
            >
              <Download className="h-4 w-4" />
              Download
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}