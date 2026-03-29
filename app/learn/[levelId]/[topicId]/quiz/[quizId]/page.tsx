'use client'

import Link from 'next/link'
import { use } from 'react'
import { getTopic, getLevel } from '@/lib/curriculum'
import { QuizViewer } from '@/components/QuizViewer'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    levelId: string
    topicId: string
    quizId: string
  }>
}

export default function QuizPage({ params }: PageProps) {
  const resolvedParams = use(params)
  const levelId = parseInt(resolvedParams.levelId)
  const level = getLevel(levelId)
  const topic = getTopic(levelId, resolvedParams.topicId)
  
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0)

  if (!level || !topic) {
    notFound()
  }

  const quiz = topic.quizzes[currentQuizIndex]
  if (!quiz) {
    notFound()
  }

  const handleNext = () => {
    if (currentQuizIndex < topic.quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuizIndex > 0) {
      setCurrentQuizIndex(currentQuizIndex - 1)
    }
  }

  const handleEnd = () => {
    // Could navigate to next topic or level
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href={`/learn/${levelId}`} className="gap-2">
              <ChevronLeft className="w-4 h-4" />
              Back to Level
            </Link>
          </Button>

          <div>
            <p className="text-sm text-muted-foreground mb-2">
              {topic.name} • Quiz {currentQuizIndex + 1} of {topic.quizzes.length}
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-accent h-2 rounded-full transition-all" 
                style={{ width: `${((currentQuizIndex + 1) / topic.quizzes.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <QuizViewer
          quiz={quiz}
          onNext={currentQuizIndex < topic.quizzes.length - 1 ? handleNext : undefined}
          onPrevious={currentQuizIndex > 0 ? handlePrevious : undefined}
          showNavigation={true}
        />

        {/* End Quiz Link */}
        {currentQuizIndex === topic.quizzes.length - 1 && (
          <div className="mt-12 pt-8 border-t border-border">
            <Button asChild className="w-full">
              <Link href={`/learn/${levelId}`}>
                Back to Level Overview
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
