'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  COMPANY_PROFILES, OA_PROBLEMS, DSA_PATTERNS, INTERVIEW_TIPS
} from '@/lib/interview-prep'
import {
  Trophy, Code2, Building2, Target, Brain, ChevronLeft,
  ChevronDown, ChevronUp, Lightbulb, ArrowRight, Star,
  Clock, HardDrive, Flame, Shield, CheckCircle2, Tag
} from 'lucide-react'

const TABS = ['Overview', 'Company Guide', 'OA Problems', 'Patterns', 'Tips'] as const
type Tab = typeof TABS[number]

function DiffBadge({ d }: { d: string }) {
  const cls = d === 'Easy' ? 'badge-easy' : d === 'Medium' ? 'badge-medium' : 'badge-hard'
  return <span className={`${cls} rounded-full px-2.5 py-0.5 text-xs font-bold`}>{d}</span>
}

function FreqBadge({ f }: { f: string }) {
  const color = f === 'Very High' ? 'text-red-400 border-red-400/30 bg-red-400/10'
    : f === 'High' ? 'text-orange-400 border-orange-400/30 bg-orange-400/10'
    : 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10'
  return <span className={`${color} border rounded-full px-2 py-0.5 text-xs font-semibold`}>{f}</span>
}

export default function InterviewPrepPage() {
  const [tab, setTab] = useState<Tab>('Overview')
  const [expandedProblem, setExpandedProblem] = useState<string | null>(null)
  const [expandedPattern, setExpandedPattern] = useState<string | null>(null)
  const [filterTopic, setFilterTopic] = useState<string>('All')

  const topics = ['All', ...Array.from(new Set(OA_PROBLEMS.map(p => p.topic)))]
  const filteredProblems = filterTopic === 'All'
    ? OA_PROBLEMS
    : OA_PROBLEMS.filter(p => p.topic === filterTopic)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 py-3 flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="gap-2"><ChevronLeft className="w-4 h-4" />Home</Link>
          </Button>
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="font-bold">Interview Prep Hub</span>
          </div>
          <div className="hidden md:flex items-center gap-1 ml-auto">
            {TABS.map(t => (
              <Button
                key={t}
                variant={tab === t ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setTab(t)}
                className={tab === t ? 'bg-primary text-primary-foreground' : ''}
              >
                {t}
              </Button>
            ))}
          </div>
        </div>
        {/* Mobile tabs */}
        <div className="md:hidden flex gap-1 px-4 pb-3 overflow-x-auto">
          {TABS.map(t => (
            <Button
              key={t}
              variant={tab === t ? 'default' : 'outline'}
              size="sm"
              onClick={() => setTab(t)}
              className="flex-shrink-0 text-xs"
            >
              {t}
            </Button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 max-w-5xl">

        {/* ── OVERVIEW TAB ──────────────────────────────────────────── */}
        {tab === 'Overview' && (
          <div className="space-y-10">
            {/* Hero */}
            <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/60 p-8 md:p-12">
              <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
              <Trophy className="w-12 h-12 text-yellow-400 mb-4" />
              <h1 className="text-4xl md:text-5xl font-black mb-4">
                Interview <span className="gradient-text">Prep Hub</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl mb-6">
                Everything you need to crack FAANG interviews. Company-specific guides,
                OA problem patterns, DSA templates, and behavioral tips.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { n: COMPANY_PROFILES.length, l: 'Companies Covered' },
                  { n: OA_PROBLEMS.length, l: 'OA Problems' },
                  { n: DSA_PATTERNS.length, l: 'DSA Patterns' },
                  { n: INTERVIEW_TIPS.length, l: 'Interview Tips' },
                ].map((s, i) => (
                  <div key={i} className="bg-background/50 rounded-xl p-4 border border-border/50">
                    <div className="text-2xl font-black text-primary">{s.n}+</div>
                    <div className="text-xs text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick nav */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {([
                { icon: <Building2 className="w-5 h-5" />, label: 'Company Guide', desc: 'Google, Amazon, Meta tips', tab: 'Company Guide', color: 'text-blue-400' },
                { icon: <Code2 className="w-5 h-5" />, label: 'OA Problems', desc: 'Most asked in OA rounds', tab: 'OA Problems', color: 'text-green-400' },
                { icon: <Brain className="w-5 h-5" />, label: 'DSA Patterns', desc: '9 patterns, 90% coverage', tab: 'Patterns', color: 'text-purple-400' },
                { icon: <Lightbulb className="w-5 h-5" />, label: 'Interview Tips', desc: 'Before/during/after coding', tab: 'Tips', color: 'text-yellow-400' },
              ] as const).map((item, i) => (
                <button
                  key={i}
                  onClick={() => setTab(item.tab)}
                  className="glow-card text-left p-5 rounded-2xl border border-border/50 bg-card/60 hover:bg-card/80 transition-all"
                >
                  <div className={`${item.color} mb-3`}>{item.icon}</div>
                  <div className="font-bold mb-1">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </button>
              ))}
            </div>

            {/* Roadmap */}
            <div>
              <h2 className="text-2xl font-black mb-6">The 8-Week FAANG Roadmap</h2>
              <div className="space-y-3">
                {[
                  { week: 'Week 1-2', focus: 'Arrays, Strings, Hash Maps', count: '50 problems', color: 'level-0' },
                  { week: 'Week 3', focus: 'Two Pointers, Sliding Window, Prefix Sums', count: '30 problems', color: 'level-1' },
                  { week: 'Week 4', focus: 'Binary Search (including on answers)', count: '20 problems', color: 'level-2' },
                  { week: 'Week 5', focus: 'Trees (DFS/BFS), BST, LCA', count: '30 problems', color: 'level-3' },
                  { week: 'Week 6', focus: 'Graphs, BFS shortest path, Topological Sort', count: '25 problems', color: 'level-4' },
                  { week: 'Week 7', focus: 'Dynamic Programming (1D, 2D, Knapsack)', count: '30 problems', color: 'level-5' },
                  { week: 'Week 8', focus: 'Review, mocks, system design basics', count: 'Mock interviews', color: 'level-7' },
                ].map((r, i) => (
                  <div key={i} className={`${r.color} level-glow flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card/60`}>
                    <div className="flex-shrink-0 w-20 text-xs font-bold text-muted-foreground">{r.week}</div>
                    <div className="flex-1">
                      <div className="font-semibold">{r.focus}</div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="level-badge">{r.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── COMPANY GUIDE TAB ─────────────────────────────────────── */}
        {tab === 'Company Guide' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-black mb-2">Company-Specific Guides</h2>
              <p className="text-muted-foreground">Know what each company tests, how they test it, and how to prepare specifically.</p>
            </div>
            {COMPANY_PROFILES.map((company, i) => (
              <Card key={i} className="border border-border/50 bg-card/60 overflow-hidden">
                <CardHeader className="border-b border-border/50">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      <CardTitle className={`text-2xl ${company.color}`}>{company.name}</CardTitle>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold border
                        ${company.difficulty === 'Very Hard' ? 'badge-hard'
                          : company.difficulty === 'Hard' ? 'badge-medium'
                          : 'badge-easy'}`}>
                        {company.difficulty}
                      </span>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {company.focusTopics.slice(0, 3).map(t => (
                        <span key={t} className="tag-chip">{t}</span>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-5 space-y-5">
                  {/* Interview Process */}
                  <div>
                    <h4 className="font-bold text-sm mb-2 text-muted-foreground uppercase tracking-wide">Interview Process</h4>
                    <div className="flex gap-2 flex-wrap">
                      {company.interviewRounds.map((round, j) => (
                        <div key={j} className="flex items-center gap-1.5 text-xs bg-background/50 border border-border/50 rounded-full px-3 py-1">
                          <span className="w-4 h-4 rounded-full bg-primary/20 text-primary text-[10px] flex items-center justify-center font-bold">
                            {j + 1}
                          </span>
                          {round}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tips */}
                  <div>
                    <h4 className="font-bold text-sm mb-3 text-muted-foreground uppercase tracking-wide">
                      <Flame className="inline w-4 h-4 text-yellow-400 mr-1" />
                      Insider Tips
                    </h4>
                    <ul className="space-y-2">
                      {company.tips.map((tip, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <Star className="w-3.5 h-3.5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/90 leading-relaxed">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* ── OA PROBLEMS TAB ───────────────────────────────────────── */}
        {tab === 'OA Problems' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-black mb-2">OA-Ready Problem Bank</h2>
              <p className="text-muted-foreground mb-5">Problems most frequently seen in Online Assessment rounds. Sorted by frequency.</p>

              {/* Filter */}
              <div className="flex gap-2 flex-wrap">
                {topics.map(t => (
                  <button
                    key={t}
                    onClick={() => setFilterTopic(t)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold border transition-all
                      ${filterTopic === t
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border text-muted-foreground hover:border-primary/50'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filteredProblems.map(p => (
                <Card key={p.id} className="border border-border/50 bg-card/60 overflow-hidden">
                  <CardHeader className="pb-3">
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => setExpandedProblem(expandedProblem === p.id ? null : p.id)}
                    >
                      <div className="flex items-center gap-3 flex-wrap">
                        <CardTitle className="text-lg">{p.title}</CardTitle>
                        <DiffBadge d={p.difficulty} />
                        <FreqBadge f={p.frequency} />
                      </div>
                      {expandedProblem === p.id
                        ? <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        : <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Tag className="w-3.5 h-3.5 text-muted-foreground" />
                      {p.tags.map(t => <span key={t} className="tag-chip">{t}</span>)}
                    </div>
                  </CardHeader>

                  {expandedProblem === p.id && (
                    <CardContent className="pt-0 space-y-5 border-t border-border/50">
                      {/* Companies */}
                      <div className="flex items-center gap-2 pt-4 flex-wrap">
                        <Building2 className="w-4 h-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Companies:</span>
                        {p.companies.map(c => <span key={c} className="tag-chip">{c}</span>)}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-foreground/90 leading-relaxed">{p.description}</p>

                      {/* Approach */}
                      <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Brain className="w-4 h-4 text-purple-400" />
                          <span className="font-bold text-purple-400 text-sm">Approach</span>
                        </div>
                        <p className="text-sm text-foreground/90 whitespace-pre-wrap leading-relaxed">{p.approach}</p>
                      </div>

                      {/* Solution code */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Code2 className="w-4 h-4 text-primary" />
                          <span className="font-bold text-sm">Solution (C++)</span>
                        </div>
                        <pre className="bg-background/70 p-4 rounded-xl text-xs font-mono overflow-x-auto border border-border/50 text-foreground/90">
                          {p.solution}
                        </pre>
                      </div>

                      {/* Complexity */}
                      <div className="flex gap-4 text-sm">
                        <span className="flex items-center gap-1.5 text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          Time: <code className="text-primary">{p.timeComplexity}</code>
                        </span>
                        <span className="flex items-center gap-1.5 text-muted-foreground">
                          <HardDrive className="w-4 h-4 text-purple-400" />
                          Space: <code className="text-purple-400">{p.spaceComplexity}</code>
                        </span>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* ── PATTERNS TAB ──────────────────────────────────────────── */}
        {tab === 'Patterns' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-black mb-2">
                The 9 DSA Patterns That Cover 90% of Problems
              </h2>
              <p className="text-muted-foreground">
                Master these patterns and you can recognize the right approach within 30 seconds of reading a problem.
              </p>
            </div>

            <div className="space-y-4">
              {DSA_PATTERNS.map((pattern, i) => (
                <Card key={i} className="border border-border/50 bg-card/60 overflow-hidden">
                  <CardHeader className="pb-3">
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => setExpandedPattern(expandedPattern === pattern.name ? null : pattern.name)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-primary/20 text-primary text-sm font-bold flex items-center justify-center">
                          {i + 1}
                        </div>
                        <CardTitle className="text-lg">{pattern.name}</CardTitle>
                      </div>
                      {expandedPattern === pattern.name
                        ? <ChevronUp className="w-5 h-5 text-muted-foreground" />
                        : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
                    </div>
                    <p className="text-sm text-muted-foreground ml-10">{pattern.when}</p>
                  </CardHeader>

                  {expandedPattern === pattern.name && (
                    <CardContent className="pt-0 space-y-4 border-t border-border/50">
                      {/* Template description */}
                      <div className="pt-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="w-4 h-4 text-primary" />
                          <span className="font-bold text-primary text-sm">Template</span>
                        </div>
                        <p className="text-sm text-foreground/90">{pattern.template}</p>
                      </div>

                      {/* Examples */}
                      <div>
                        <span className="text-sm font-semibold text-muted-foreground">Classic Problems:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {pattern.examples.map(ex => (
                            <span key={ex} className="tag-chip">{ex}</span>
                          ))}
                        </div>
                      </div>

                      {/* Code template */}
                      <div>
                        <span className="text-sm font-semibold text-muted-foreground">Code Template:</span>
                        <pre className="mt-2 bg-background/70 p-4 rounded-xl text-xs font-mono overflow-x-auto border border-border/50 text-foreground/90">
                          {pattern.code}
                        </pre>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* ── TIPS TAB ──────────────────────────────────────────────── */}
        {tab === 'Tips' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-black mb-2">Interview Tips That Actually Work</h2>
              <p className="text-muted-foreground">The meta-knowledge that separates good candidates from great ones.</p>
            </div>

            {(['Before Coding', 'During Coding', 'After Coding', 'Mindset'] as const).map(category => (
              <div key={category}>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  {category}
                </h3>
                <div className="space-y-3">
                  {INTERVIEW_TIPS.filter(t => t.category === category).map((tip, i) => (
                    <Card key={i} className="border border-border/50 bg-card/60">
                      <CardContent className="pt-5 pb-5">
                        <h4 className="font-bold mb-2">{tip.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{tip.description}</p>
                        {tip.examples && tip.examples.length > 0 && (
                          <ul className="space-y-1.5">
                            {tip.examples.map((ex, j) => (
                              <li key={j} className="flex items-start gap-2 text-xs">
                                <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                                <code className="text-foreground/80 leading-relaxed">{ex}</code>
                              </li>
                            ))}
                          </ul>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}

            {/* CTA */}
            <Card className="border border-primary/20 bg-primary/5 p-6">
              <h3 className="font-bold text-lg mb-2">Ready to practice?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Apply these tips on real problems. Start with Level 2-4 for most common interview topics.
              </p>
              <div className="flex gap-3">
                <Button asChild className="bg-primary text-primary-foreground gap-2">
                  <Link href="/learn/2">Arrays & Strings <ArrowRight className="w-4 h-4" /></Link>
                </Button>
                <Button variant="outline" asChild className="gap-2">
                  <Link href="/learn/5">Trees & Graphs <ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
