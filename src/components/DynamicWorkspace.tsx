'use client'

import { useState, useEffect, useCallback } from 'react'
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
} from 'lucide-react'

interface DynamicWorkspaceProps {
  projectId: string
  projectLevel: string
  categorySlug: string
  originalBrief: string
  originalStoryline?: string
  children: (
    brief: string,
    storyline: string,
    datasetInfo: SampleDataset | null
  ) => React.ReactNode
}

export function DynamicWorkspace({
  projectId,
  projectLevel,
  categorySlug,
  originalBrief,
  originalStoryline,
  children,
}: DynamicWorkspaceProps) {
  const [datasetInfo, setDatasetInfo] = useState<{
    dataset: SampleDataset
    briefTemplate: BriefTemplate
    files: { name: string; content: string; size: string }[]
  } | null>(null)
  const [isRegenerating, setIsRegenerating] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const loadDataset = useCallback(() => {
    const info = getAssignedDataset(projectId, projectLevel, categorySlug)
    setDatasetInfo(info)
    setIsLoaded(true)
  }, [projectId, projectLevel, categorySlug])

  useEffect(() => {
    loadDataset()
  }, [loadDataset])

  const handleRegenerate = async () => {
    setIsRegenerating(true)
    // Simulate network delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800))
    const newDataset = regenerateDataset(projectId, projectLevel, categorySlug)
    if (newDataset) {
      const info = getAssignedDataset(projectId, projectLevel, categorySlug)
      setDatasetInfo(info)
    }
    setIsRegenerating(false)
  }

  // Generate dynamic brief and storyline from template
  const generateDynamicBrief = (template: BriefTemplate): string => {
    return originalBrief
      .replace(/\[COMPANY_NAME\]/g, template.companyName)
      .replace(/\[CONTACT_PERSON\]/g, template.contactPerson)
      .replace(/\[CONTACT_ROLE\]/g, template.contactRole)
      .replace(/\[PERIOD\]/g, template.period)
      .replace(/\[TARGET\]/g, template.target)
      .replace(/\[CHALLENGE\]/g, template.challenge)
      .replace(/\[EXPECTATION\]/g, template.expectation)
  }

  const generateDynamicStoryline = (template: BriefTemplate): string => {
    return template.storyline || originalStoryline || ''
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center py-8">
        <RefreshCw className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    )
  }

  // If no dataset config exists for this project, use original content
  if (!datasetInfo) {
    return <>{children(originalBrief, originalStoryline || '', null)}</>
  }

  const dynamicBrief = generateDynamicBrief(datasetInfo.briefTemplate)
  const dynamicStoryline = generateDynamicStoryline(datasetInfo.briefTemplate)

  return (
    <div className="space-y-6">
      {/* Dynamic Dataset Banner */}
      <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-200 dark:border-violet-800 rounded-lg">
        <Sparkles className="h-4 w-4 text-violet-600 dark:text-violet-400" />
        <span className="text-sm font-medium text-violet-700 dark:text-violet-300">
          This project uses dynamic sample data
        </span>
        <Badge variant="outline" className="ml-auto text-xs">
          {datasetInfo.dataset.name}
        </Badge>
      </div>

      {/* Dynamic Brief & Storyline */}
      {children(dynamicBrief, dynamicStoryline, datasetInfo.dataset)}

      {/* Dataset Preview Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-violet-500" />
            Your Sample Dataset
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
    </div>
  )
}