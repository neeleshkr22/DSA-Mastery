'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getAllLevels } from '@/lib/curriculum'
import { SearchBar } from '@/components/SearchBar'
import {
  ChevronRight, Code2, BookOpen, Zap, Trophy, Target, Brain,
  Layers, GitBranch, Database, Hash, ArrowRight, Star, Clock,
  TrendingUp, Shield, Flame, Building2, GraduationCap, Cpu
} from 'lucide-react'

const LEVEL_META = [
  { color: 'level-0', icon: '🚀', emoji: '🔵', tag: 'Beginner',     est: '2-3 weeks' },
  { color: 'level-1', icon: '⚡', emoji: '🟢', tag: 'Beginner',     est: '2 weeks'   },
  { color: 'level-2', icon: '📦', emoji: '🔷', tag: 'Intermediate', est: '3 weeks'   },
  { color: 'level-3', icon: '🔍', emoji: '🟣', tag: 'Intermediate', est: '3 weeks'   },
  { color: 'level-4', icon: '🔗', emoji: '🟡', tag: 'Intermediate', est: '4 weeks'   },
  { color: 'level-5', icon: '🌳', emoji: '🟠', tag: 'Advanced',     est: '5 weeks'   },
  { color: 'level-6', icon: '💡', emoji: '🔴', tag: 'Advanced',     est: '6 weeks'   },
  { color: 'level-7', icon: '🏆', emoji: '🔥', tag: 'Expert',       est: '8 weeks'   },
]

const FEATURES = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Deep-Dive Lessons',
    desc: 'Every concept explained with WHY it matters, not just HOW. Real interview context for every topic.',
    color: 'text-yellow-400',
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Interview Intelligence',
    desc: 'Company-specific questions (Google, Meta, Amazon, Microsoft). Know which topics each company loves.',
    color: 'text-yellow-400',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'OA-Ready Problems',
    desc: 'Online Assessment style problems with hints, multiple approaches, time/space complexity breakdown.',
    color: 'text-yellow-400',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Complete C++ STL',
    desc: 'Vectors, maps, sets, priority queues — every STL container with deep usage patterns and interview tricks.',
    color: 'text-yellow-400',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Tips & Tricks',
    desc: 'Pattern recognition, edge cases, common mistakes. The meta-knowledge top coders have.',
    color: 'text-yellow-400',
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'FAANG Cracker Path',
    desc: 'Structured roadmap used by engineers who cracked Google, Amazon, Meta. 0 to offer in one platform.',
    color: 'text-yellow-400',
  },
]

const COMPANIES = [
  { name: 'Google',    color: 'text-yellow-400',   topics: ['Arrays', 'DP', 'Graphs', 'Trees'] },
  { name: 'Amazon',    color: 'text-yellow-400',  topics: ['Arrays', 'Trees', 'OOP', 'Design'] },
  { name: 'Meta',      color: 'text-yellow-400',    topics: ['Graphs', 'Arrays', 'Strings', 'DP'] },
  { name: 'Microsoft', color: 'text-yellow-400',    topics: ['Trees', 'Linked Lists', 'DP', 'Recursion'] },
  { name: 'Apple',     color: 'text-gray-300',    topics: ['Arrays', 'Strings', 'System Design'] },
  { name: 'Uber',      color: 'text-yellow-400',   topics: ['Graphs', 'Hash Maps', 'Arrays'] },
]

const STATS = [
  { value: '8', label: 'Levels', sublabel: 'Zero to expert',       icon: <Layers className="w-5 h-5" /> },
  { value: '150+', label: 'Lessons', sublabel: 'Deep explanations', icon: <BookOpen className="w-5 h-5" /> },
  { value: '300+', label: 'Problems', sublabel: 'With full solutions', icon: <Code2 className="w-5 h-5" /> },
  { value: '50+', label: 'OA Problems', sublabel: 'Company style',   icon: <Building2 className="w-5 h-5" /> },
]

export default function Home() {
  const levels = getAllLevels()

  return (
    <div className="min-h-screen dark bg-background text-foreground">

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
            <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:bg-primary/30 transition-colors">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <span className="hidden sm:block text-xl font-bold gradient-text-static">DSA Master</span>
          </Link>

          <div className="flex-1 max-w-sm">
            <SearchBar />
          </div>

          <div className="flex items-center gap-1 text-sm">
            <Button variant="ghost" size="sm" asChild className="hidden md:flex">
              <Link href="#levels">Curriculum</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="hidden md:flex">
              <Link href="/stl-guide">STL Guide</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="hidden md:flex">
              <Link href="/interview-prep">Interview Prep</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="hidden lg:flex">
              <Link href="/glossary">Glossary</Link>
            </Button>
            <Button size="sm" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/learn">Start Learning</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center">
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        {/* Spotlight */}
        <div className="spotlight pointer-events-none" />

        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8 animate-slide-up">
              <Flame className="w-4 h-4" />
              The #1 Free DSA Platform for Cracking FAANG
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.05] tracking-tight animate-slide-up stagger-1">
              Master DSA{' '}
              <span className="gradient-text">from Zero</span>
              <br />
              to{' '}
              <span className="gradient-text">FAANG Ready</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed animate-slide-up stagger-2">
              8 progressive levels covering C++ fundamentals, complete STL guide, every data structure &amp;
              algorithm — with <strong className="text-foreground">WHY each concept matters</strong>, company-specific
              questions, OA-style problems, and interview tips that actually work.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up stagger-3">
              <Button size="lg" asChild className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                <Link href="/learn">
                  Start Free Now <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="gap-2 border-border hover:border-primary/50">
                <Link href="/interview-prep">
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  Interview Prep
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="gap-2 border-border hover:border-primary/50">
                <Link href="/stl-guide">
                  <Database className="w-4 h-4 text-cyan-400" />
                  STL Guide
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up stagger-4">
              {STATS.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    {s.icon}
                    <span className="text-3xl font-black">{s.value}</span>
                  </div>
                  <div className="font-semibold text-foreground text-sm">{s.label}</div>
                  <div className="text-muted-foreground text-xs">{s.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Companies ───────────────────────────────────────────────────── */}
      <section className="border-y border-border/50 py-14 bg-card/30">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground text-sm font-medium mb-8 uppercase tracking-widest">
            Crack interviews at top companies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {COMPANIES.map((c, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border/50 hover:border-primary/30 bg-card/50 hover:bg-card transition-all group">
                <span className={`text-lg font-bold ${c.color}`}>{c.name}</span>
                <div className="flex flex-wrap gap-1 justify-center">
                  {c.topics.slice(0, 2).map((t, j) => (
                    <span key={j} className="tag-chip">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────────────────── */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-muted-foreground text-sm mb-4">
              <Star className="w-4 h-4 text-yellow-400" />
              What makes DSA Master different
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Everything you need to <span className="gradient-text">crack the interview</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Not just solutions — deep understanding, pattern recognition, and interview-ready knowledge.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <div key={i} className={`glow-card p-6 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm stagger-${i + 1}`}>
                <div className={`${f.color} mb-4 p-2 w-fit rounded-lg bg-current/10`}>{f.icon}</div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Curriculum ──────────────────────────────────────────────────── */}
      <section id="levels" className="py-24 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-muted-foreground text-sm mb-4">
              <GitBranch className="w-4 h-4 text-primary" />
              Progressive Learning Path
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">8 Levels, <span className="gradient-text">Zero to Expert</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Each level builds on the previous. Skip nothing, master everything.</p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {levels.map((level, idx) => {
              const meta = LEVEL_META[idx] || LEVEL_META[0]
              const totalLessons = level.topics.reduce((a, t) => a + t.lessons.length, 0)
              const totalProblems = level.topics.reduce((a, t) => a + t.problems.length, 0)
              return (
                <Link key={level.id} href={`/learn/${level.id}`}>
                  <div className={`${meta.color} level-glow glow-card group p-5 rounded-2xl border border-border/50 bg-card/60 hover:bg-card/80 transition-all flex items-center gap-5`}>
                    {/* Level badge */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-background/50 border border-border/50 flex flex-col items-center justify-center">
                        <span className="text-xl">{meta.icon}</span>
                        <span className="text-[10px] font-bold text-muted-foreground">LVL {level.id}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <h3 className="font-bold text-lg leading-tight">{level.title}</h3>
                        <span className="level-badge">{meta.tag}</span>
                      </div>
                      <p className="text-muted-foreground text-sm line-clamp-1 mb-2">{level.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" />{totalLessons} lessons</span>
                        <span className="flex items-center gap-1"><Code2 className="w-3 h-3" />{totalProblems} problems</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{meta.est}</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Interview Prep CTA ───────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {/* Interview Prep */}
            <Link href="/interview-prep">
              <div className="glow-card group relative overflow-hidden rounded-2xl border border-border/50 bg-card/60 p-8 h-full">
                <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/5 rounded-full blur-2xl pointer-events-none" />
                <Trophy className="w-10 h-10 text-yellow-400 mb-4" />
                <h3 className="text-2xl font-black mb-3">Interview Prep Hub</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  FAANG-level preparation with company-specific question banks, OA rounds, behavioral tips,
                  and the exact patterns that appear in real interviews.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Google', 'Amazon', 'Meta', 'Microsoft', 'OA Problems'].map(t => (
                    <span key={t} className="tag-chip">{t}</span>
                  ))}
                </div>
                <Button variant="outline" className="gap-2 group-hover:border-yellow-400/50 group-hover:text-yellow-400">
                  Explore <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Link>

            {/* STL Guide */}
            <Link href="/stl-guide">
              <div className="glow-card group relative overflow-hidden rounded-2xl border border-border/50 bg-card/60 p-8 h-full">
                <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/5 rounded-full blur-2xl pointer-events-none" />
                <Database className="w-10 h-10 text-yellow-400 mb-4" />
                <h3 className="text-2xl font-black mb-3">C++ STL Mastery</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Every STL container and algorithm explained deeply — vector, map, set, priority_queue,
                  sort, lower_bound — with the intuition behind each and interview patterns.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['vector', 'unordered_map', 'set', 'priority_queue', 'sort'].map(t => (
                    <span key={t} className="tag-chip font-mono">{t}</span>
                  ))}
                </div>
                <Button variant="outline" className="gap-2 group-hover:border-yellow-400/50 group-hover:text-yellow-400">
                  Explore <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Tips & Tricks ────────────────────────────────────────────────── */}
      <section className="py-24 bg-card/20 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              The <span className="gradient-text">Meta-Knowledge</span> You Need
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              What separates candidates who get offers from those who don&apos;t.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: <TrendingUp className="w-5 h-5" />, title: 'Pattern Recognition', desc: 'Learn to identify which algorithm applies in the first 30 seconds of reading a problem.', color: 'text-yellow-400' },
              { icon: <Shield className="w-5 h-5" />, title: 'Edge Cases', desc: 'Empty arrays, single elements, overflow, duplicates — we cover every edge case explicitly.', color: 'text-yellow-400' },
              { icon: <Cpu className="w-5 h-5" />, title: 'Time Complexity', desc: 'Every solution analyzed. Understand why O(n log n) beats O(n²) and when it matters.', color: 'text-yellow-400' },
              { icon: <GraduationCap className="w-5 h-5" />, title: 'Interview Communication', desc: 'How to talk through your solution, handle hints, and impress interviewers beyond just coding.', color: 'text-yellow-400' },
            ].map((item, i) => (
              <div key={i} className="glow-card p-6 rounded-2xl border border-border/50 bg-card/60">
                <div className={`${item.color} mb-3`}>{item.icon}</div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-black mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'What prior knowledge do I need?',
                a: 'Absolutely zero. Level 0 starts from the very basics of C++ — installing the compiler, writing your first program. We build up everything step by step.',
              },
              {
                q: 'Why C++ instead of Python or Java?',
                a: 'C++ is the gold standard for DSA and competitive programming. It gives you direct memory control, runs 5-10× faster, and is the language most commonly expected in FAANG interviews. Once you know DSA in C++, you can apply it in any language.',
              },
              {
                q: 'How is this different from LeetCode?',
                a: 'LeetCode gives you problems. We give you understanding. We explain WHY each approach works, which companies ask it, common pitfalls, multiple approaches, and interview communication tips. Use both — this to learn, LeetCode to practice.',
              },
              {
                q: 'Is there an STL guide?',
                a: 'Yes! We have a dedicated C++ STL Mastery section covering vectors, maps, sets, priority queues, pairs, and all algorithm functions — with deep explanations and interview patterns.',
              },
              {
                q: 'Is this free?',
                a: 'Yes — completely free, forever. Quality DSA education should be accessible to everyone.',
              },
            ].map((faq, i) => (
              <div key={i} className="p-5 rounded-xl border border-border/50 bg-card/60 hover:border-primary/30 transition-colors">
                <h4 className="font-bold mb-2">{faq.q}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-border/50 py-10 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              <span className="font-bold gradient-text-static">DSA Master</span>
            </Link>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/learn" className="hover:text-primary transition-colors">Curriculum</Link>
              <Link href="/stl-guide" className="hover:text-primary transition-colors">STL Guide</Link>
              <Link href="/interview-prep" className="hover:text-primary transition-colors">Interview Prep</Link>
              <Link href="/glossary" className="hover:text-primary transition-colors">Glossary</Link>
              <Link href="/bookmarks" className="hover:text-primary transition-colors">Bookmarks</Link>
            </div>
            <p className="text-xs text-muted-foreground">© 2025 DSA Master. Free forever.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
