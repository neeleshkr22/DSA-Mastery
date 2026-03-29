import Link from 'next/link'
import { use } from 'react'
import { getLevel, getAllLevels } from '@/lib/curriculum'
import { notFound } from 'next/navigation'
import {
  ChevronLeft, BookOpen, Code2, HelpCircle,
  CheckCircle2, Building2, Flame, ArrowRight, Zap
} from 'lucide-react'

const LEVEL_META: Record<number, { color: string; gradient: string; tag: string }> = {
  0: { color: '#06b6d4', gradient: 'from-cyan-500/20 to-cyan-500/5', tag: 'Foundation' },
  1: { color: '#10b981', gradient: 'from-emerald-500/20 to-emerald-500/5', tag: 'Beginner' },
  2: { color: '#3b82f6', gradient: 'from-blue-500/20 to-blue-500/5', tag: 'Core Arrays' },
  3: { color: '#8b5cf6', gradient: 'from-violet-500/20 to-violet-500/5', tag: 'Algorithms' },
  4: { color: '#f59e0b', gradient: 'from-amber-500/20 to-amber-500/5', tag: 'Data Structs' },
  5: { color: '#ef4444', gradient: 'from-red-500/20 to-red-500/5', tag: 'Trees & Graphs' },
  6: { color: '#ec4899', gradient: 'from-pink-500/20 to-pink-500/5', tag: 'Dynamic Prog.' },
  7: { color: '#f97316', gradient: 'from-orange-500/20 to-orange-500/5', tag: 'Advanced' },
}

export default function LevelPage({ params }: { params: Promise<{ levelId: string }> }) {
  const resolvedParams = use(params)
  const levelId = parseInt(resolvedParams.levelId)
  const level = getLevel(levelId)
  const allLevels = getAllLevels()
  const totalLevels = allLevels.length

  if (!level) notFound()

  const meta = LEVEL_META[levelId] ?? LEVEL_META[0]
  const progressPct = Math.round(((levelId + 1) / totalLevels) * 100)

  const totalLessons = level.topics.reduce((a, t) => a + t.lessons.length, 0)
  const totalProblems = level.topics.reduce((a, t) => a + t.problems.length, 0)
  const totalQuizzes = level.topics.reduce((a, t) => a + t.quizzes.length, 0)

  return (
    <div className="min-h-screen bg-background">

      {/* ── Sticky Header ───────────────────────────────────────────── */}
      <div className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </Link>
              <span className="text-muted-foreground/40">|</span>
              <span
                className="text-sm font-bold px-2.5 py-0.5 rounded-full"
                style={{ color: meta.color, background: `${meta.color}18`, border: `1px solid ${meta.color}30` }}
              >
                Level {levelId}
              </span>
              <span className="text-sm font-semibold text-foreground hidden sm:block">{level.title}</span>
            </div>
            {/* Prev / Next */}
            <div className="flex items-center gap-2">
              {levelId > 0 && (
                <Link
                  href={`/learn/${levelId - 1}`}
                  className="px-3 py-1.5 text-xs rounded-lg border border-border hover:border-primary/50 transition-colors text-muted-foreground hover:text-foreground"
                >
                  ← Level {levelId - 1}
                </Link>
              )}
              {levelId < totalLevels - 1 && (
                <Link
                  href={`/learn/${levelId + 1}`}
                  className="px-3 py-1.5 text-xs rounded-lg border border-border hover:border-primary/50 transition-colors text-muted-foreground hover:text-foreground"
                >
                  Level {levelId + 1} →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Level Hero ──────────────────────────────────────────────── */}
      <div
        className={`border-b border-border bg-gradient-to-br ${meta.gradient} relative overflow-hidden`}
      >
        {/* grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative container mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end gap-8 justify-between">
            <div className="max-w-2xl">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold border mb-4"
                style={{ color: meta.color, borderColor: `${meta.color}40`, background: `${meta.color}15` }}
              >
                <Zap className="w-3 h-3" />
                {meta.tag}
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-3" style={{ color: meta.color }}>
                {level.title}
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">{level.description}</p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-6 mt-6">
                {[
                  { icon: <BookOpen className="w-4 h-4" />, val: totalLessons, label: 'Lessons' },
                  { icon: <Code2 className="w-4 h-4" />, val: totalProblems, label: 'Problems' },
                  { icon: <HelpCircle className="w-4 h-4" />, val: totalQuizzes, label: 'Quizzes' },
                ].map(s => (
                  <div key={s.label} className="flex items-center gap-2 text-sm">
                    <span style={{ color: meta.color }}>{s.icon}</span>
                    <span className="font-bold text-foreground">{s.val}</span>
                    <span className="text-muted-foreground">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress circle */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-border" />
                  <circle
                    cx="50" cy="50" r="40" fill="none" strokeWidth="8"
                    stroke={meta.color}
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - progressPct / 100)}`}
                    className="transition-all duration-700"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-black" style={{ color: meta.color }}>{progressPct}%</span>
                  <span className="text-xs text-muted-foreground">done</span>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">Level {levelId + 1} of {totalLevels}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Topics ──────────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 py-12 space-y-16">
        {level.topics.map((topic, topicIdx) => (
          <div key={topic.id}>
            {/* Topic Header */}
            <div className="flex items-start gap-4 mb-8">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0 mt-0.5"
                style={{ background: `${meta.color}20`, color: meta.color, border: `1px solid ${meta.color}30` }}
              >
                {topicIdx + 1}
              </div>
              <div>
                <h2 className="text-2xl font-black">{topic.name}</h2>
                <p className="text-muted-foreground mt-1">{topic.description}</p>

                {/* Interview importance + company focus */}
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  {topic.interviewImportance && (
                    <span className={`importance-${topic.interviewImportance.toLowerCase()} text-xs`}>
                      {topic.interviewImportance} Priority
                    </span>
                  )}
                  {topic.companyFocus && topic.companyFocus.length > 0 && (
                    <>
                      <Building2 className="w-3.5 h-3.5 text-muted-foreground" />
                      {topic.companyFocus.map(c => (
                        <span key={c} className="tag-chip text-xs">{c}</span>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Interview Tips (if any) */}
            {topic.interviewTips && topic.interviewTips.length > 0 && (
              <div className="mb-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Flame className="w-4 h-4 text-yellow-400" />
                  <h3 className="font-bold text-yellow-400 text-sm">Interview Tips for This Topic</h3>
                </div>
                <ul className="space-y-1.5">
                  {topic.interviewTips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/90">
                      <span className="text-yellow-400 font-bold mt-0.5">{i + 1}.</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Three-column Cards */}
            <div className="grid md:grid-cols-3 gap-5 mb-8">

              {/* Lessons Card */}
              <div
                className="glow-card rounded-2xl border bg-card/60 overflow-hidden flex flex-col"
                style={{ borderColor: `${meta.color}30` }}
              >
                <div
                  className="px-5 py-4 border-b flex items-center gap-3"
                  style={{ borderColor: `${meta.color}20`, background: `${meta.color}08` }}
                >
                  <BookOpen className="w-5 h-5" style={{ color: meta.color }} />
                  <div>
                    <div className="font-bold text-foreground">Lessons</div>
                    <div className="text-xs text-muted-foreground">{topic.lessons.length} deep-dive lessons</div>
                  </div>
                </div>
                <div className="p-5 flex-1">
                  <ul className="space-y-2 mb-5">
                    {topic.lessons.map((lesson, i) => (
                      <li key={lesson.id}>
                        <Link
                          href={`/learn/${level.id}/${topic.id}/lesson/${lesson.id}`}
                          className="flex items-start gap-2.5 text-sm group"
                        >
                          <CheckCircle2
                            className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 transition-colors"
                            style={{ color: meta.color }}
                          />
                          <span className="text-foreground/80 group-hover:text-foreground transition-colors leading-snug">
                            {lesson.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 pb-5">
                  <Link
                    href={`/learn/${level.id}/${topic.id}/lesson/${topic.lessons[0].id}`}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold transition-all hover:opacity-90"
                    style={{ background: `${meta.color}20`, color: meta.color, border: `1px solid ${meta.color}30` }}
                  >
                    Start Lessons
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Quizzes Card */}
              <div
                className="glow-card rounded-2xl border bg-card/60 overflow-hidden flex flex-col"
                style={{ borderColor: `${meta.color}30` }}
              >
                <div
                  className="px-5 py-4 border-b flex items-center gap-3"
                  style={{ borderColor: `${meta.color}20`, background: `${meta.color}08` }}
                >
                  <HelpCircle className="w-5 h-5" style={{ color: meta.color }} />
                  <div>
                    <div className="font-bold text-foreground">Quizzes</div>
                    <div className="text-xs text-muted-foreground">{topic.quizzes.length} knowledge checks</div>
                  </div>
                </div>
                <div className="p-5 flex-1">
                  {topic.quizzes.length > 0 ? (
                    <ul className="space-y-2 mb-5">
                      {topic.quizzes.map(quiz => (
                        <li key={quiz.id}>
                          <Link
                            href={`/learn/${level.id}/${topic.id}/quiz/${quiz.id}`}
                            className="flex items-start gap-2.5 text-sm group"
                          >
                            <HelpCircle
                              className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                              style={{ color: meta.color }}
                            />
                            <span className="text-foreground/80 group-hover:text-foreground transition-colors leading-snug">
                              {quiz.question.length > 60 ? quiz.question.slice(0, 60) + '…' : quiz.question}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground mb-5">
                      No quizzes yet for this topic.
                    </p>
                  )}
                </div>
                <div className="px-5 pb-5">
                  {topic.quizzes.length > 0 ? (
                    <Link
                      href={`/learn/${level.id}/${topic.id}/quiz/${topic.quizzes[0].id}`}
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold transition-all hover:opacity-90"
                      style={{ background: `${meta.color}20`, color: meta.color, border: `1px solid ${meta.color}30` }}
                    >
                      Take Quiz
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <div
                      className="flex items-center justify-center w-full py-2.5 rounded-xl text-sm font-bold opacity-40 cursor-not-allowed"
                      style={{ background: `${meta.color}10`, color: meta.color, border: `1px solid ${meta.color}20` }}
                    >
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>

              {/* Problems Card */}
              <div
                className="glow-card rounded-2xl border bg-card/60 overflow-hidden flex flex-col"
                style={{ borderColor: `${meta.color}30` }}
              >
                <div
                  className="px-5 py-4 border-b flex items-center gap-3"
                  style={{ borderColor: `${meta.color}20`, background: `${meta.color}08` }}
                >
                  <Code2 className="w-5 h-5" style={{ color: meta.color }} />
                  <div>
                    <div className="font-bold text-foreground">Problems</div>
                    <div className="text-xs text-muted-foreground">{topic.problems.length} coding challenges</div>
                  </div>
                </div>
                <div className="p-5 flex-1">
                  {topic.problems.length > 0 ? (
                    <ul className="space-y-2 mb-5">
                      {topic.problems.map(prob => (
                        <li key={prob.id}>
                          <Link
                            href={`/learn/${level.id}/${topic.id}/problem/${prob.id}`}
                            className="flex items-center gap-2.5 text-sm group"
                          >
                            <span
                              className={`text-xs font-bold px-1.5 py-0.5 rounded flex-shrink-0 ${
                                prob.difficulty === 'Easy' ? 'badge-easy' :
                                prob.difficulty === 'Medium' ? 'badge-medium' : 'badge-hard'
                              }`}
                            >
                              {prob.difficulty[0]}
                            </span>
                            <span className="text-foreground/80 group-hover:text-foreground transition-colors leading-snug">
                              {prob.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground mb-5">
                      No problems yet for this topic.
                    </p>
                  )}
                </div>
                <div className="px-5 pb-5">
                  {topic.problems.length > 0 ? (
                    <Link
                      href={`/learn/${level.id}/${topic.id}/problem/${topic.problems[0].id}`}
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold transition-all hover:opacity-90"
                      style={{ background: `${meta.color}20`, color: meta.color, border: `1px solid ${meta.color}30` }}
                    >
                      Solve Problems
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <div
                      className="flex items-center justify-center w-full py-2.5 rounded-xl text-sm font-bold opacity-40 cursor-not-allowed"
                      style={{ background: `${meta.color}10`, color: meta.color, border: `1px solid ${meta.color}20` }}
                    >
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Footer */}
        <div className="flex items-center justify-between pt-8 border-t border-border">
          {levelId > 0 ? (
            <Link
              href={`/learn/${levelId - 1}`}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border hover:border-primary/50 transition-colors text-sm font-bold"
            >
              <ChevronLeft className="w-4 h-4" />
              Level {levelId - 1}
            </Link>
          ) : <div />}
          {levelId < totalLevels - 1 && (
            <Link
              href={`/learn/${levelId + 1}`}
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
              style={{
                background: LEVEL_META[levelId + 1]?.color ? `${LEVEL_META[levelId + 1].color}20` : 'var(--primary)',
                color: LEVEL_META[levelId + 1]?.color ?? 'var(--primary-foreground)',
                border: `1px solid ${LEVEL_META[levelId + 1]?.color ?? 'var(--primary)'}40`,
              }}
            >
              Next: Level {levelId + 1}
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
