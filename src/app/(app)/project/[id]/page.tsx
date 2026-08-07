import { notFound } from 'next/navigation'
import Link from 'next/link'
import { prisma, ensureDbReady } from '@/lib/prisma'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getCategoryBySlug, getLevelByValue, getToolsForCategory } from '@/lib/constants'
import { generateProjectMetadata } from '@/lib/seo'
import { SubmissionForm } from './SubmissionForm'
import { RecommendedTools } from '@/components/RecommendedTools'
import { QuickHelp } from '@/components/QuickHelp'
import { DynamicBriefSection } from '@/components/DynamicBriefSection'
import { ResourceCenter } from '@/components/ResourceCenter'
import type { Metadata } from 'next'

async function getProject(id: string) {
  try {
    await ensureDbReady()
    const project = await prisma.project.findUnique({
      where: { id },
      include: { category: true },
    })
    return project
  } catch (error) {
    console.error('[PROJECT] Failed to fetch project:', error)
    return null
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = await getProject(params.id)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  return generateProjectMetadata(project)
}

export default async function ProjectPage({
  params,
}: {
  params: { id: string }
}) {
  const project = await getProject(params.id)

  if (!project) {
    notFound()
  }

  const categoryData = getCategoryBySlug(project.category.slug)
  const levelData = getLevelByValue(project.level)
  const categoryTools = getToolsForCategory(project.category.slug)

  const tools: string[] = project.toolsNeeded
    ? JSON.parse(project.toolsNeeded)
    : []

  const steps = project.guidance
    ? project.guidance.split('\n').filter((s) => s.trim())
    : []

  const briefParagraphs = project.brief
    ? project.brief.split('\n').filter((s) => s.trim())
    : []

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: project.title,
    description: project.brief,
    provider: {
      '@type': 'Organization',
      name: 'VirtualWork',
      url: 'https://virtualwork.id',
    },
    educationalLevel: levelData?.label || project.level,
    occupationalCategory: project.category.name,
    coursePrerequisites: 'Tidak ada',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: levelData?.estimated || '-',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link href="/latihan">
            <Button variant="ghost" size="sm" className="mb-6 gap-2">
              &larr; Back to Latihan
            </Button>
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Badge className={categoryData?.color ?? 'bg-gray-100 text-gray-800'}>
                {project.category.icon && (
                  <span className="mr-1">{categoryData?.icon ?? ''}</span>
                )}
                {project.category.name}
              </Badge>
              {levelData && (
                <Badge variant={levelData.color}>{levelData.label}</Badge>
              )}
            </div>
            <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
          </div>

          <Tabs defaultValue="brief" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="brief">Client Brief &amp; Storyline</TabsTrigger>
              <TabsTrigger value="guidance">Onboarding &amp; Tools</TabsTrigger>
              <TabsTrigger value="resources">Resource Center</TabsTrigger>
              <TabsTrigger value="submission">Submission</TabsTrigger>
            </TabsList>

            <TabsContent value="brief">
              <DynamicBriefSection
                projectId={project.id}
                projectLevel={project.level}
                categorySlug={project.category.slug}
                originalBrief={project.brief || ''}
                originalStoryline={project.storyline || undefined}
                toolsNeeded={tools}
              />
            </TabsContent>

            <TabsContent value="guidance">
              <Card>
                <CardHeader>
                  <CardTitle>Onboarding Guidance &amp; Recommended Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {steps.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold uppercase text-muted-foreground mb-3">
                        Step-by-Step Guide
                      </h3>
                      <ol className="space-y-3">
                        {steps.map((step, i) => (
                          <li key={i} className="flex gap-3 text-sm">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                              {i + 1}
                            </span>
                            <span className="text-muted-foreground leading-relaxed pt-0.5">
                              {step}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {tools.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="text-sm font-semibold uppercase text-muted-foreground mb-3">
                          Tools You&apos;ll Need
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {tools.map((tool, i) => (
                            <Badge key={i} variant="secondary">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  <Separator />

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-sm font-semibold uppercase text-muted-foreground">
                        Recommended Tools &amp; Templates
                      </h3>
                      <span className="text-xs text-muted-foreground">(Click to open)</span>
                    </div>
                    <RecommendedTools tools={categoryTools} />
                  </div>

                  <Separator />

                  <QuickHelp />

                  <Separator />
                  <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-2">
                      Beginner Tips
                    </h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1.5">
                      <li>
                        &bull; Read the full brief carefully before starting any
                        work.
                      </li>
                      <li>
                        &bull; Save your work frequently and keep backups.
                      </li>
                      <li>
                        &bull; Focus on quality over speed, especially for
                        complex projects.
                      </li>
                      <li>
                        &bull; Use the recommended templates to speed up your workflow.
                      </li>
                      <li>
                        &bull; Ask clarifying questions if anything is
                        unclear.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources">
              <ResourceCenter
                categorySlug={project.category.slug}
                projectTitle={project.title}
              />
            </TabsContent>

            <TabsContent value="submission">
              <Card>
                <CardHeader>
                  <CardTitle>Submit Your Work</CardTitle>
                </CardHeader>
                <CardContent>
                  <SubmissionForm projectId={project.id} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  )
}
