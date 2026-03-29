'use client'

import { Lesson, Topic } from '@/lib/curriculum'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CodeBlock } from './CodeBlock'
import { Lightbulb, BookOpenText, Building2, Flame, CheckCircle2, Info } from 'lucide-react'

interface LessonViewerProps {
  lesson: Lesson
  topic?: Topic
}

function ImportanceBadge({ importance }: { importance?: string }) {
  if (!importance) return null
  const classes: Record<string, string> = {
    Critical: 'importance-critical',
    High: 'importance-high',
    Medium: 'importance-medium',
    Low: 'importance-low',
  }
  return <span className={classes[importance] || 'importance-medium'}>{importance} Priority</span>
}

export function LessonViewer({ lesson, topic }: LessonViewerProps) {
  return (
    <div className="space-y-8">
      {/* ── Header ─────────────────────────────────────────────────── */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-3xl md:text-4xl font-black">{lesson.title}</h1>
          {topic?.interviewImportance && (
            <ImportanceBadge importance={topic.interviewImportance} />
          )}
        </div>
        <p className="text-lg text-muted-foreground">{lesson.description}</p>

        {/* Company focus tags */}
        {topic?.companyFocus && topic.companyFocus.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <Building2 className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Tested at:</span>
            {topic.companyFocus.map(c => (
              <span key={c} className="tag-chip">{c}</span>
            ))}
          </div>
        )}
      </div>

      {/* ── Interview Tips Panel ────────────────────────────────────── */}
      {topic?.interviewTips && topic.interviewTips.length > 0 && (
        <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5">
          <div className="flex items-center gap-2 mb-4">
            <Flame className="w-5 h-5 text-yellow-400" />
            <h3 className="font-bold text-yellow-400">Interview Tips for This Topic</h3>
          </div>
          <ul className="space-y-2">
            {topic.interviewTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="text-yellow-400 font-bold mt-0.5">{i + 1}.</span>
                <span className="text-foreground/90 leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ── Main Content ────────────────────────────────────────────── */}
      <Card className="border border-border bg-card/60">
        <CardHeader className="flex flex-row items-center gap-2 border-b border-border/50 pb-4">
          <BookOpenText className="w-5 h-5 text-primary" />
          <CardTitle>Lesson Content</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {lesson.content.split('\n\n').map((paragraph, idx) => (
              <div key={idx} className="whitespace-pre-wrap text-foreground/90 leading-relaxed">
                {paragraph}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ── Code Examples ───────────────────────────────────────────── */}
      {lesson.codeExamples.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Code Examples</h2>
          {lesson.codeExamples.map((example, idx) => (
            <div key={idx} className="code-block">
              {/* macOS-style header */}
              <div className="code-block-header">
                <div className="code-block-dots">
                  <span /><span /><span />
                </div>
                <span className="font-mono">
                  Example {idx + 1} — {example.language.toUpperCase()}
                </span>
                <span />
              </div>
              <CodeBlock code={example.code} language={example.language} />
              {/* Explanation */}
              <div className="p-5 bg-muted/20 border-t border-border/50">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {example.explanation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Key Takeaways ────────────────────────────────────────────── */}
      {lesson.keyPoints.length > 0 && (
        <Card className="border border-primary/20 bg-primary/5">
          <CardHeader className="flex flex-row items-center gap-2 border-b border-primary/10 pb-4">
            <Lightbulb className="w-5 h-5 text-primary" />
            <CardTitle className="text-primary">Key Takeaways</CardTitle>
          </CardHeader>
          <CardContent className="pt-5">
            <ul className="space-y-3">
              {lesson.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
