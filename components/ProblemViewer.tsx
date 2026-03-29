'use client'

import { PracticeProblem } from '@/lib/curriculum'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CodeBlock } from './CodeBlock'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  ChevronDown, ChevronUp, Lightbulb, CheckCircle2, Building2,
  Clock, HardDrive, Tag, Eye, EyeOff, Brain, Flame, Target
} from 'lucide-react'

interface ProblemViewerProps {
  problem: PracticeProblem
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const cls = difficulty === 'Easy'
    ? 'badge-easy'
    : difficulty === 'Medium'
    ? 'badge-medium'
    : 'badge-hard'
  return <span className={`${cls} rounded-full px-3 py-1 text-xs font-bold`}>{difficulty}</span>
}

function OABadge({ freq }: { freq?: string }) {
  if (!freq) return null
  const color = freq === 'Very High' ? 'text-red-400 border-red-400/30 bg-red-400/10'
    : freq === 'High' ? 'text-orange-400 border-orange-400/30 bg-orange-400/10'
    : 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10'
  return (
    <span className={`${color} border rounded-full px-2 py-0.5 text-xs font-semibold`}>
      OA: {freq}
    </span>
  )
}

export function ProblemViewer({ problem }: ProblemViewerProps) {
  const [showSolution, setShowSolution] = useState(false)
  const [revealedHints, setRevealedHints] = useState(0)

  return (
    <div className="space-y-7">

      {/* ── Header ──────────────────────────────────────────────────── */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-3xl md:text-4xl font-black">{problem.title}</h1>
          <DifficultyBadge difficulty={problem.difficulty} />
          {problem.oaFrequency && <OABadge freq={problem.oaFrequency} />}
        </div>

        {/* Tags */}
        {problem.tags && problem.tags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="w-4 h-4 text-muted-foreground" />
            {problem.tags.map(t => (
              <span key={t} className="tag-chip">{t}</span>
            ))}
          </div>
        )}

        {/* Complexity badges */}
        {(problem.timeComplexity || problem.spaceComplexity) && (
          <div className="flex items-center gap-4 text-sm">
            {problem.timeComplexity && (
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                Time: <code className="text-primary font-mono">{problem.timeComplexity}</code>
              </span>
            )}
            {problem.spaceComplexity && (
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <HardDrive className="w-4 h-4 text-purple-400" />
                Space: <code className="text-purple-400 font-mono">{problem.spaceComplexity}</code>
              </span>
            )}
          </div>
        )}

        {/* Companies */}
        {problem.companies && problem.companies.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <Building2 className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Asked at:</span>
            {problem.companies.map(c => (
              <span key={c} className="tag-chip">{c}</span>
            ))}
          </div>
        )}
      </div>

      {/* ── Why Solve This? ──────────────────────────────────────────── */}
      {problem.whySolve && (
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Brain className="w-5 h-5 text-cyan-400" />
            <h3 className="font-bold text-cyan-400">Why Solve This?</h3>
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed">{problem.whySolve}</p>
        </div>
      )}

      {/* ── Approach ────────────────────────────────────────────────── */}
      {problem.approach && (
        <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-purple-400" />
            <h3 className="font-bold text-purple-400">Approach / Thinking Process</h3>
          </div>
          <div className="space-y-2">
            {problem.approach.split('\n').map((line, i) => (
              <p key={i} className="text-sm text-foreground/90 leading-relaxed">{line}</p>
            ))}
          </div>
        </div>
      )}

      {/* ── Problem Statement ───────────────────────────────────────── */}
      <Card className="border border-border bg-card/60">
        <CardHeader className="flex flex-row items-center gap-2 border-b border-border/50 pb-4">
          <Lightbulb className="w-5 h-5 text-primary" />
          <CardTitle>Problem Statement</CardTitle>
        </CardHeader>
        <CardContent className="pt-5">
          <p className="text-foreground/90 whitespace-pre-wrap leading-relaxed">{problem.description}</p>
        </CardContent>
      </Card>

      {/* ── Constraints ──────────────────────────────────────────────── */}
      {problem.constraints.length > 0 && (
        <Card className="border border-border bg-card/60">
          <CardHeader className="pb-3 border-b border-border/50">
            <CardTitle className="text-lg">Constraints</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-2">
              {problem.constraints.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <code className="text-foreground/90">{c}</code>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* ── Examples ────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Examples</h2>
        {problem.examples.map((ex, i) => (
          <div key={i} className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border/50 overflow-hidden">
              <div className="px-4 py-2 bg-card/80 border-b border-border/50 text-xs font-semibold text-muted-foreground">
                Input {i + 1}
              </div>
              <pre className="p-4 text-sm font-mono text-foreground/90 overflow-x-auto bg-background/50">
                {ex.input}
              </pre>
            </div>
            <div className="rounded-xl border border-primary/20 overflow-hidden">
              <div className="px-4 py-2 bg-primary/5 border-b border-primary/20 text-xs font-semibold text-primary">
                Output {i + 1}
              </div>
              <pre className="p-4 text-sm font-mono text-foreground/90 overflow-x-auto bg-background/50">
                {ex.output}
              </pre>
            </div>
          </div>
        ))}
      </div>

      {/* ── Progressive Hints ───────────────────────────────────────── */}
      {problem.hints && problem.hints.length > 0 && (
        <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-yellow-400" />
              <h3 className="font-bold text-yellow-400">
                Hints ({revealedHints}/{problem.hints.length})
              </h3>
            </div>
            <span className="text-xs text-muted-foreground">Try without hints first!</span>
          </div>

          <div className="space-y-3">
            {problem.hints.map((hint, i) => (
              <div key={i}>
                {i < revealedHints ? (
                  <div className="flex items-start gap-2 p-3 bg-yellow-500/10 rounded-lg">
                    <span className="text-yellow-400 font-bold text-sm">#{i + 1}</span>
                    <p className="text-sm text-foreground/90">{hint}</p>
                  </div>
                ) : (
                  <div className="h-8 bg-yellow-500/5 border border-yellow-500/10 rounded-lg flex items-center px-3">
                    <span className="text-xs text-muted-foreground">Hint {i + 1} — hidden</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {revealedHints < problem.hints.length && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setRevealedHints(h => h + 1)}
              className="mt-4 gap-2 border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10"
            >
              <Eye className="w-4 h-4" />
              Reveal Next Hint
            </Button>
          )}
        </div>
      )}

      {/* ── Solution Toggle ──────────────────────────────────────────── */}
      <div className="space-y-4">
        <Button
          variant="outline"
          onClick={() => setShowSolution(!showSolution)}
          className="w-full gap-2 border-primary/30 hover:border-primary/60"
        >
          {showSolution ? (
            <><EyeOff className="w-4 h-4" />Hide Solution</>
          ) : (
            <><ChevronDown className="w-4 h-4" />Show Solution</>
          )}
        </Button>

        {showSolution && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <Card className="border border-primary/20 bg-primary/5">
              <CardHeader className="border-b border-primary/10 pb-4">
                <CardTitle className="text-lg text-primary">Solution</CardTitle>
              </CardHeader>
              <CardContent className="pt-5 space-y-5">
                {/* Code */}
                <div className="code-block">
                  <div className="code-block-header">
                    <div className="code-block-dots">
                      <span /><span /><span />
                    </div>
                    <span>Solution — {problem.solution.language.toUpperCase()}</span>
                    <span />
                  </div>
                  <CodeBlock code={problem.solution.code} language={problem.solution.language} />
                </div>

                {/* How It Works */}
                <div className="p-4 bg-card/60 rounded-xl border border-border/50">
                  <h4 className="font-semibold text-sm mb-2 text-primary">How It Works</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {problem.solution.explanation}
                  </p>
                </div>

                {/* Detailed Analysis */}
                <div className="p-4 bg-card/60 rounded-xl border border-border/50">
                  <h4 className="font-semibold text-sm mb-2">Detailed Analysis</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {problem.explanation}
                  </p>
                </div>

                {/* Complexity summary */}
                {(problem.timeComplexity || problem.spaceComplexity) && (
                  <div className="flex gap-4 p-4 bg-card/40 rounded-xl border border-border/50 text-sm">
                    {problem.timeComplexity && (
                      <div>
                        <span className="text-muted-foreground">Time: </span>
                        <code className="text-primary font-mono">{problem.timeComplexity}</code>
                      </div>
                    )}
                    {problem.spaceComplexity && (
                      <div>
                        <span className="text-muted-foreground">Space: </span>
                        <code className="text-purple-400 font-mono">{problem.spaceComplexity}</code>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
