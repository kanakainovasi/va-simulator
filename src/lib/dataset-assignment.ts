'use client'

import { ALL_SAMPLE_DATASETS, SampleDataset, BriefTemplate, ProjectDatasetConfig } from './sample-datasets'

const STORAGE_KEY = 'dps-dataset-assignments'

interface DatasetAssignment {
  projectId: string
  datasetId: string
  assignedAt: string
}

function getStoredAssignments(): DatasetAssignment[] {
  if (typeof window === 'undefined') return []
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

function saveAssignment(assignment: DatasetAssignment): void {
  if (typeof window === 'undefined') return
  try {
    const assignments = getStoredAssignments()
    const existingIndex = assignments.findIndex(a => a.projectId === assignment.projectId)
    if (existingIndex >= 0) {
      assignments[existingIndex] = assignment
    } else {
      assignments.push(assignment)
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(assignments))
  } catch {
    // localStorage not available
  }
}

function getRandomIndex(max: number): number {
  return Math.floor(Math.random() * max)
}

function mapLevelToDifficulty(level: string): 'beginner' | 'intermediate' | 'advanced' {
  switch (level.toUpperCase()) {
    case 'EASY':
      return 'beginner'
    case 'MEDIUM':
      return 'intermediate'
    case 'COMPLEX':
      return 'advanced'
    default:
      return 'beginner'
  }
}

function getConfigByCategorySlug(categorySlug: string): ProjectDatasetConfig | undefined {
  return ALL_SAMPLE_DATASETS.find(config => config.categorySlug === categorySlug)
}

export function getAssignedDataset(
  projectId: string,
  level: string,
  categorySlug: string
): {
  dataset: SampleDataset
  briefTemplate: BriefTemplate
  files: { name: string; content: string; size: string }[]
} | null {
  const config = getConfigByCategorySlug(categorySlug)
  if (!config) return null

  const difficulty = mapLevelToDifficulty(level)
  const datasets = config.levels[difficulty]
  if (!datasets || datasets.length === 0) return null

  // Check if already assigned
  const assignments = getStoredAssignments()
  const existing = assignments.find(a => a.projectId === projectId)

  let selectedDataset: SampleDataset

  if (existing) {
    // Find the stored dataset
    const found = datasets.find(d => d.id === existing.datasetId)
    if (found) {
      selectedDataset = found
    } else {
      // Dataset no longer exists, assign new one
      selectedDataset = datasets[getRandomIndex(datasets.length)]
      saveAssignment({
        projectId,
        datasetId: selectedDataset.id,
        assignedAt: new Date().toISOString(),
      })
    }
  } else {
    // Random assignment
    selectedDataset = datasets[getRandomIndex(datasets.length)]
    saveAssignment({
      projectId,
      datasetId: selectedDataset.id,
      assignedAt: new Date().toISOString(),
    })
  }

  return {
    dataset: selectedDataset,
    briefTemplate: selectedDataset.briefTemplate,
    files: selectedDataset.files.map(f => ({
      name: f.name,
      content: f.content,
      size: f.size,
    })),
  }
}

export function regenerateDataset(
  projectId: string,
  level: string,
  categorySlug: string
): SampleDataset | null {
  const config = getConfigByCategorySlug(categorySlug)
  if (!config) return null

  const difficulty = mapLevelToDifficulty(level)
  const datasets = config.levels[difficulty]
  if (!datasets || datasets.length === 0) return null

  // Get current assignment to avoid same dataset
  const assignments = getStoredAssignments()
  const current = assignments.find(a => a.projectId === projectId)

  let newDataset: SampleDataset
  let attempts = 0

  do {
    newDataset = datasets[getRandomIndex(datasets.length)]
    attempts++
  } while (current && newDataset.id === current.datasetId && attempts < 10)

  saveAssignment({
    projectId,
    datasetId: newDataset.id,
    assignedAt: new Date().toISOString(),
  })

  return newDataset
}

export function clearAssignment(projectId: string): void {
  if (typeof window === 'undefined') return
  const assignments = getStoredAssignments().filter(a => a.projectId !== projectId)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(assignments))
}

export function getAllAssignments(): Record<string, string> {
  const assignments = getStoredAssignments()
  const result: Record<string, string> = {}
  assignments.forEach(a => {
    result[a.projectId] = a.datasetId
  })
  return result
}