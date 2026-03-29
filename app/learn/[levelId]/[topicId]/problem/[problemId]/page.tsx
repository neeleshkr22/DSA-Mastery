'use client'

import Link from 'next/link'
import { use } from 'react'
import { getTopic, getLevel } from '@/lib/curriculum'
import { ProblemViewer } from '@/components/ProblemViewer'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    levelId: string
    topicId: string
    problemId: string
  }>
}

export default function ProblemPage({ params }: PageProps) {
  const resolvedParams = use(params)
  const levelId = parseInt(resolvedParams.levelId)
  const level = getLevel(levelId)
  const topic = getTopic(levelId, resolvedParams.topicId)

  if (!level || !topic) {
    notFound()
  }

  const currentProblemIndex = topic.problems.findIndex(p => p.id === resolvedParams.problemId)
  const problem = topic.problems[currentProblemIndex]

  if (!problem) {
    notFound()
  }

  const previousProblem = currentProblemIndex > 0 ? topic.problems[currentProblemIndex - 1] : null
  const nextProblem = currentProblemIndex < topic.problems.length - 1 ? topic.problems[currentProblemIndex + 1] : null

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href={`/learn/${levelId}`} className="gap-2">
              <ChevronLeft className="w-4 h-4" />
              {level.title}
            </Link>
          </Button>

          <div>
            <p className="text-sm text-muted-foreground mb-2">
              {topic.name} • Problem {currentProblemIndex + 1} of {topic.problems.length}
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-accent h-2 rounded-full transition-all" 
                style={{ width: `${((currentProblemIndex + 1) / topic.problems.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <ProblemViewer problem={problem} />

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-border flex gap-4 justify-between">
          {previousProblem ? (
            <Button variant="outline" asChild className="gap-2">
              <Link href={`/learn/${levelId}/${params.topicId}/problem/${previousProblem.id}`}>
                <ChevronLeft className="w-4 h-4" />
                Previous Problem
              </Link>
            </Button>
          ) : (
            <div />
          )}

          {nextProblem ? (
            <Button asChild className="gap-2">
              <Link href={`/learn/${levelId}/${params.topicId}/problem/${nextProblem.id}`}>
                Next Problem
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          ) : (
            <Button asChild className="gap-2">
              <Link href={`/learn/${levelId}`}>
                Back to Level
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
