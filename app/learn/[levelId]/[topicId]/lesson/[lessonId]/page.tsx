'use client'

import Link from 'next/link'
import { use } from 'react'
import { getLesson, getLevel, getTopic } from '@/lib/curriculum'
import { LessonViewer } from '@/components/LessonViewer'
import { BookmarkButton } from '@/components/BookmarkButton'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    levelId: string
    topicId: string
    lessonId: string
  }>
}

export default function LessonPage({ params }: PageProps) {
  const resolvedParams = use(params)
  const levelId = parseInt(resolvedParams.levelId)
  const level = getLevel(levelId)
  const topic = getTopic(levelId, resolvedParams.topicId)
  const lesson = getLesson(levelId, resolvedParams.topicId, resolvedParams.lessonId)

  if (!level || !topic || !lesson) {
    notFound()
  }

  const currentLessonIndex = topic.lessons.findIndex(l => l.id === resolvedParams.lessonId)
  const previousLesson = currentLessonIndex > 0 ? topic.lessons[currentLessonIndex - 1] : null
  const nextLesson = currentLessonIndex < topic.lessons.length - 1 ? topic.lessons[currentLessonIndex + 1] : null

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between gap-4 mb-4">
            <Button variant="ghost" size="sm" asChild className="gap-2">
              <Link href={`/learn/${levelId}`}>
                <ChevronLeft className="w-4 h-4" />
                {level.title}
              </Link>
            </Button>
            
            <BookmarkButton
              id={`lesson-${resolvedParams.lessonId}`}
              type="lesson"
              title={lesson.title}
              path={`/learn/${levelId}/${resolvedParams.topicId}/lesson/${resolvedParams.lessonId}`}
              levelId={levelId}
              topicId={resolvedParams.topicId}
              variant="ghost"
            />
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-2">
              {topic.name} • Lesson {currentLessonIndex + 1} of {topic.lessons.length}
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-accent h-2 rounded-full transition-all" 
                style={{ width: `${((currentLessonIndex + 1) / topic.lessons.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <LessonViewer lesson={lesson} />

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-border flex gap-4 justify-between">
          {previousLesson ? (
            <Button variant="outline" asChild className="gap-2">
                  <Link href={`/learn/${levelId}/${resolvedParams.topicId}/lesson/${previousLesson.id}`}>
                <ChevronLeft className="w-4 h-4" />
                Previous Lesson
              </Link>
            </Button>
          ) : (
            <div />
          )}

          {nextLesson ? (
            <Button asChild className="gap-2">
                  <Link href={`/learn/${levelId}/${resolvedParams.topicId}/lesson/${nextLesson.id}`}>
                Next Lesson
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          ) : (
            <Button asChild className="gap-2">
              <Link href={`/learn/${levelId}/${resolvedParams.topicId}/quiz/${topic.quizzes[0]?.id || '#'}`}>
                Take Quiz
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
