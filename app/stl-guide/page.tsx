'use client'

import { STL_SECTIONS, STLSection } from '@/lib/stl-curriculum'
import { CodeBlock } from '@/components/CodeBlock'
import { useState } from 'react'
import Link from 'next/link'
import {
  ChevronLeft, ChevronDown, ChevronUp,
  Clock, AlertTriangle, Lightbulb, Zap, BookOpen, Code2
} from 'lucide-react'

const CATEGORY_COLORS: Record<string, string> = {
  Container: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10',
  Algorithm: 'text-purple-400 border-purple-400/30 bg-purple-400/10',
  Utility: 'text-green-400 border-green-400/30 bg-green-400/10',
}

function ComplexityBadge({ complexity }: { complexity: string }) {
  const isConstant = complexity.includes('O(1)')
  const isLog = complexity.includes('log')
  const isLinear = complexity.includes('O(n)') && !complexity.includes('log')
  const color = isConstant
    ? 'text-green-400 bg-green-400/10'
    : isLog
    ? 'text-cyan-400 bg-cyan-400/10'
    : isLinear
    ? 'text-yellow-400 bg-yellow-400/10'
    : 'text-red-400 bg-red-400/10'
  return (
    <code className={`${color} rounded px-1.5 py-0.5 text-xs font-mono font-semibold`}>
      {complexity}
    </code>
  )
}

function STLCard({ section }: { section: STLSection }) {
  const [expanded, setExpanded] = useState(false)
  const [showCode, setShowCode] = useState(false)

  return (
    <div className="glow-card rounded-2xl border border-border bg-card/60 overflow-hidden">
      {/* Card Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 hover:bg-card/80 transition-colors"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <span className="text-4xl">{section.emoji}</span>
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h3 className="text-xl font-black font-mono text-foreground">{section.name}</h3>
                <span className={`border rounded-full px-2 py-0.5 text-xs font-semibold ${CATEGORY_COLORS[section.category]}`}>
                  {section.category}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                {section.description}
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 mt-1">
            {expanded
              ? <ChevronUp className="w-5 h-5 text-muted-foreground" />
              : <ChevronDown className="w-5 h-5 text-muted-foreground" />
            }
          </div>
        </div>

        {/* Quick complexity row always visible */}
        <div className="mt-4 flex flex-wrap gap-2">
          {section.timeComplexities.slice(0, 4).map((tc, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span>{tc.operation}:</span>
              <ComplexityBadge complexity={tc.complexity} />
            </div>
          ))}
        </div>
      </button>

      {/* Expanded Content */}
      {expanded && (
        <div className="border-t border-border/50 divide-y divide-border/30">

          {/* When to Use */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-yellow-400" />
              <h4 className="font-bold text-yellow-400 text-sm">When to Use</h4>
            </div>
            <ul className="space-y-2">
              {section.whenToUse.map((w, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/90">
                  <span className="text-yellow-400 font-bold mt-0.5">→</span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Operations Table */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-4 h-4 text-primary" />
              <h4 className="font-bold text-primary text-sm">Operations Reference</h4>
            </div>
            <div className="overflow-x-auto rounded-xl border border-border/50">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50 bg-card/80">
                    <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Operation</th>
                    <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Syntax</th>
                    <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Description</th>
                    <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {section.operations.map((op, i) => (
                    <tr
                      key={i}
                      className={`border-b border-border/30 ${i % 2 === 0 ? 'bg-background/30' : 'bg-card/30'}`}
                    >
                      <td className="px-4 py-3 font-mono text-primary font-semibold">{op.name}</td>
                      <td className="px-4 py-3 font-mono text-foreground/80 text-xs">{op.syntax}</td>
                      <td className="px-4 py-3 text-muted-foreground">{op.description}</td>
                      <td className="px-4 py-3">
                        <ComplexityBadge complexity={op.complexity} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Code Example */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <h4 className="font-bold text-cyan-400 text-sm">Code Example</h4>
              </div>
              <button
                onClick={() => setShowCode(!showCode)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                {showCode ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                {showCode ? 'Collapse' : 'Expand'} code
              </button>
            </div>

            {showCode ? (
              <div className="space-y-4">
                <div className="code-block">
                  <div className="code-block-header">
                    <div className="code-block-dots">
                      <span /><span /><span />
                    </div>
                    <span className="font-mono">{section.name} — C++</span>
                    <span />
                  </div>
                  <CodeBlock code={section.codeExample} language="cpp" />
                </div>
                <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
                  <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap">
                    {section.codeExplanation}
                  </p>
                </div>
              </div>
            ) : (
              <div
                className="rounded-xl border border-border/50 bg-background/50 p-4 cursor-pointer hover:border-primary/30 transition-colors"
                onClick={() => setShowCode(true)}
              >
                <pre className="text-xs font-mono text-muted-foreground overflow-hidden"
                  style={{ maxHeight: '80px', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}>
                  {section.codeExample.split('\n').slice(0, 6).join('\n')}
                </pre>
                <p className="text-xs text-primary mt-2">Click to expand full example →</p>
              </div>
            )}
          </div>

          {/* Full Complexity Table */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-purple-400" />
              <h4 className="font-bold text-purple-400 text-sm">Full Complexity Reference</h4>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              {section.timeComplexities.map((tc, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-background/40 border border-border/30">
                  <div>
                    <span className="text-sm text-foreground/80">{tc.operation}</span>
                    {tc.note && <span className="text-xs text-muted-foreground ml-2">({tc.note})</span>}
                  </div>
                  <ComplexityBadge complexity={tc.complexity} />
                </div>
              ))}
            </div>
          </div>

          {/* Gotchas */}
          {section.gotchas.length > 0 && (
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <h4 className="font-bold text-red-400 text-sm">Common Gotchas</h4>
              </div>
              <ul className="space-y-2">
                {section.gotchas.map((g, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-red-400 font-bold mt-0.5">!</span>
                    <span className="text-foreground/90">{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Interview Tips */}
          {section.interviewTips.length > 0 && (
            <div className="p-6 rounded-b-2xl bg-yellow-500/5">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-4 h-4 text-yellow-400" />
                <h4 className="font-bold text-yellow-400 text-sm">Interview Tips</h4>
              </div>
              <ul className="space-y-2">
                {section.interviewTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-yellow-400 font-bold mt-0.5">{i + 1}.</span>
                    <span className="text-foreground/90">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function STLGuidePage() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const categories = ['All', 'Container', 'Algorithm', 'Utility']

  const filtered = activeCategory === 'All'
    ? STL_SECTIONS
    : STL_SECTIONS.filter(s => s.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-grid relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-6">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Home
            </Link>
            <span className="text-muted-foreground/50">/</span>
            <span className="text-sm text-muted-foreground">STL Guide</span>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">⚡</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-black gradient-text">C++ STL Mastery</h1>
                <p className="text-muted-foreground mt-1">Complete reference for FAANG interviews</p>
              </div>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed mt-4">
              The C++ Standard Template Library is your Swiss Army knife for interviews.
              Master these containers and algorithms and you&apos;ll solve 95% of problems with clean, optimal code.
              Each section covers the <span className="text-primary font-semibold">why</span>,
              the <span className="text-cyan-400 font-semibold">how</span>, and the{' '}
              <span className="text-yellow-400 font-semibold">interview patterns</span>.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-8">
              {[
                { label: 'Containers', value: STL_SECTIONS.filter(s => s.category === 'Container').length.toString() },
                { label: 'Algorithm Groups', value: STL_SECTIONS.filter(s => s.category === 'Algorithm').length.toString() },
                { label: 'Operations Covered', value: STL_SECTIONS.reduce((acc, s) => acc + s.operations.length, 0).toString() + '+' },
                { label: 'Interview Tips', value: STL_SECTIONS.reduce((acc, s) => acc + s.interviewTips.length, 0).toString() + '+' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-2xl font-black gradient-text-static">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick-pick cheatsheet */}
      <div className="border-b border-border bg-card/40">
        <div className="container mx-auto px-4 py-6">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4 font-semibold">Quick Reference — Choose Your Container</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            {[
              { q: 'Need dynamic list?', a: 'vector<T>', color: 'text-cyan-400' },
              { q: 'Key → Value lookup?', a: 'unordered_map<K,V>', color: 'text-green-400' },
              { q: 'Unique sorted values?', a: 'set<T>', color: 'text-yellow-400' },
              { q: 'Top-K / Min-Max?', a: 'priority_queue<T>', color: 'text-red-400' },
              { q: 'Sorted by key order?', a: 'map<K,V>', color: 'text-purple-400' },
              { q: 'Sort / Binary Search?', a: 'sort() + algorithms', color: 'text-orange-400' },
              { q: 'LIFO / undo stack?', a: 'stack<T>', color: 'text-pink-400' },
              { q: 'Sliding window?', a: 'deque<T>', color: 'text-blue-400' },
            ].map(item => (
              <div key={item.q} className="flex items-center gap-2 p-3 rounded-xl border border-border/50 bg-background/40">
                <div>
                  <div className="text-muted-foreground text-xs">{item.q}</div>
                  <div className={`font-mono font-bold text-xs ${item.color}`}>{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10">
        {/* Category Filter */}
        <div className="flex items-center gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all border ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {cat}
              {cat !== 'All' && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({STL_SECTIONS.filter(s => s.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* STL Cards */}
        <div className="space-y-5">
          {filtered.map(section => (
            <STLCard key={section.id} section={section} />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h2 className="text-2xl font-black mb-2">Ready to Apply These in Practice?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Now that you know the STL tools, put them to work on real problems.
            Start from Level 0 which covers STL-first approaches to classic problems.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/learn/0"
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors"
            >
              Start Level 0 — STL Basics
            </Link>
            <Link
              href="/interview-prep"
              className="px-6 py-3 rounded-xl border border-border hover:border-primary/50 font-bold transition-colors"
            >
              Interview Prep Hub →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
