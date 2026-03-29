'use client'

import { Quiz } from '@/lib/curriculum'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react'

interface QuizViewerProps {
  quiz: Quiz
  onNext?: () => void
  onPrevious?: () => void
  showNavigation?: boolean
}

export function QuizViewer({ quiz, onNext, onPrevious, showNavigation = true }: QuizViewerProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const isCorrect = selectedAnswer === quiz.correctAnswer
  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowResult(true)
    }
  }

  const handleNext = () => {
    setSelectedAnswer(null)
    setShowResult(false)
    onNext?.()
  }

  return (
    <div className="space-y-6">
      {/* Question Card */}
      <Card className="border border-border">
        <CardHeader>
          <CardTitle className="text-2xl">{quiz.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Options */}
          <div className="space-y-3">
            {quiz.options.map((option, idx) => {
              const selectedCls = selectedAnswer === idx ? 'border-accent bg-accent/10' : 'border-border hover:border-accent/50'
              const resultCls = showResult
                ? idx === quiz.correctAnswer
                  ? 'border-green-500 bg-green-500/10'
                  : idx === selectedAnswer && !isCorrect
                  ? 'border-red-500 bg-red-500/10'
                  : ''
                : ''
              return (
              <button
                key={idx}
                onClick={() => !showResult && setSelectedAnswer(idx)}
                disabled={showResult}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all disabled:cursor-default ${selectedCls} ${resultCls}`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      selectedAnswer === idx
                        ? 'border-accent'
                        : 'border-muted-foreground'
                    } ${
                      showResult && idx === quiz.correctAnswer
                        ? 'border-green-500 bg-green-500'
                        : showResult && idx === selectedAnswer && !isCorrect
                        ? 'border-red-500 bg-red-500'
                        : ''
                    }`}
                  >
                    {showResult && idx === quiz.correctAnswer && (
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    )}
                    {showResult && idx === selectedAnswer && !isCorrect && (
                      <XCircle className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <span className="text-foreground font-medium">{option}</span>
                </div>
              </button>
              )
            })}
          </div>

          {/* Result Display */}
          {showResult && (
            <Card className={`mt-6 border-2 ${isCorrect ? 'border-green-500 bg-green-500/5' : 'border-red-500 bg-red-500/5'}`}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <CardTitle className="text-green-500">Correct!</CardTitle>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-red-500" />
                      <CardTitle className="text-red-500">Incorrect</CardTitle>
                    </>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground font-medium mb-2">Explanation:</p>
                  <p className="text-foreground">{quiz.explanation}</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Submit Button */}
          {!showResult && (
            <Button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="w-full"
            >
              Submit Answer
            </Button>
          )}

          {/* Navigation */}
          {showResult && showNavigation && (
            <div className="flex gap-3 pt-4">
              {onPrevious && (
                <Button variant="outline" onClick={onPrevious} className="flex-1">
                  Previous Question
                </Button>
              )}
              {onNext && (
                <Button onClick={handleNext} className="flex-1">
                  Next Question
                </Button>
              )}
            </div>
          )}

          {/* Continue Button */}
          {showResult && !onNext && !onPrevious && (
            <Button onClick={handleNext} className="w-full">
              Continue
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
