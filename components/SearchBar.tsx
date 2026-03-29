'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Input } from './ui/input'
import { getAllLevels } from '@/lib/curriculum'
import { Search, X } from 'lucide-react'
import { Card } from './ui/card'

interface SearchResult {
  type: 'level' | 'topic' | 'lesson'
  title: string
  path: string
  description: string
  level: number
}

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const results = useMemo(() => {
    if (!query.trim()) return []

    const searchQuery = query.toLowerCase()
    const matches: SearchResult[] = []
    const levels = getAllLevels()

    levels.forEach(level => {
      // Search levels
      if (level.title.toLowerCase().includes(searchQuery) || level.description.toLowerCase().includes(searchQuery)) {
        matches.push({
          type: 'level',
          title: level.title,
          description: level.description,
          path: `/learn/${level.id}`,
          level: level.id,
        })
      }

      // Search topics
      level.topics.forEach(topic => {
        if (topic.name.toLowerCase().includes(searchQuery) || topic.description.toLowerCase().includes(searchQuery)) {
          matches.push({
            type: 'topic',
            title: `${topic.name} (${level.title})`,
            description: topic.description,
            path: `/learn/${level.id}/${topic.id}/lesson/${topic.lessons[0]?.id || '#'}`,
            level: level.id,
          })
        }

        // Search lessons
        topic.lessons.forEach(lesson => {
          if (lesson.title.toLowerCase().includes(searchQuery)) {
            matches.push({
              type: 'lesson',
              title: lesson.title,
              description: lesson.description,
              path: `/learn/${level.id}/${topic.id}/lesson/${lesson.id}`,
              level: level.id,
            })
          }
        })
      })
    })

    return matches.slice(0, 8)
  }, [query])

  return (
    <div className="relative w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="Search lessons, topics, levels..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          className="pl-10 pr-4"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('')
              setIsOpen(false)
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && results.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 border border-border max-h-96 overflow-y-auto">
          <div className="p-2 space-y-1">
            {results.map((result, idx) => (
              <Link
                key={idx}
                href={result.path}
                onClick={() => {
                  setQuery('')
                  setIsOpen(false)
                }}
                className="block p-3 rounded-lg hover:bg-muted transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground group-hover:text-accent">
                      {result.title}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {result.description}
                    </div>
                  </div>
                  <div className="text-xs px-2 py-1 bg-accent/10 rounded text-accent ml-2">
                    {result.type}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Card>
      )}

      {/* No Results */}
      {isOpen && query && results.length === 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 border border-border p-4 text-center text-muted-foreground">
          No results found for "{query}"
        </Card>
      )}
    </div>
  )
}
