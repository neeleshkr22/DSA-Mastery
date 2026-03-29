'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronLeft, Search } from 'lucide-react'
import { useState, useMemo } from 'react'
import { Input } from '@/components/ui/input'

const GLOSSARY_TERMS = [
  {
    term: 'Array',
    definition: 'A collection of elements stored in contiguous memory locations, accessible by index in O(1) time.',
    category: 'Data Structure'
  },
  {
    term: 'Linked List',
    definition: 'A linear data structure where elements are stored in nodes with pointers connecting them sequentially.',
    category: 'Data Structure'
  },
  {
    term: 'Stack',
    definition: 'A Last-In-First-Out (LIFO) data structure where elements are added and removed from the same end.',
    category: 'Data Structure'
  },
  {
    term: 'Queue',
    definition: 'A First-In-First-Out (FIFO) data structure where elements are added at rear and removed from front.',
    category: 'Data Structure'
  },
  {
    term: 'Binary Tree',
    definition: 'A tree data structure where each node has at most two children (left and right).',
    category: 'Data Structure'
  },
  {
    term: 'Hash Table',
    definition: 'A data structure that implements an associative array - a structure that maps keys to values.',
    category: 'Data Structure'
  },
  {
    term: 'Graph',
    definition: 'A collection of vertices (nodes) connected by edges, used to represent networks and relationships.',
    category: 'Data Structure'
  },
  {
    term: 'Sorting',
    definition: 'The process of arranging elements in a specific order (ascending or descending).',
    category: 'Algorithm'
  },
  {
    term: 'Searching',
    definition: 'The process of finding a specific element in a collection of data.',
    category: 'Algorithm'
  },
  {
    term: 'Binary Search',
    definition: 'An efficient search algorithm that works on sorted arrays by repeatedly dividing the search space.',
    category: 'Algorithm'
  },
  {
    term: 'Time Complexity',
    definition: 'A measure of how the runtime of an algorithm grows as the input size increases.',
    category: 'Complexity Analysis'
  },
  {
    term: 'Space Complexity',
    definition: 'A measure of how much memory an algorithm uses relative to the input size.',
    category: 'Complexity Analysis'
  },
  {
    term: 'Big O Notation',
    definition: 'A mathematical notation used to describe the worst-case complexity of an algorithm.',
    category: 'Complexity Analysis'
  },
  {
    term: 'Recursion',
    definition: 'A programming technique where a function calls itself to solve a problem by breaking it into smaller subproblems.',
    category: 'Programming Concept'
  },
  {
    term: 'Dynamic Programming',
    definition: 'An optimization technique that solves problems by breaking them into overlapping subproblems and storing results.',
    category: 'Algorithm'
  },
  {
    term: 'Greedy Algorithm',
    definition: 'An algorithm that makes locally optimal choices at each step, hoping to find a global optimum.',
    category: 'Algorithm'
  },
  {
    term: 'Depth-First Search (DFS)',
    definition: 'A graph traversal algorithm that explores as far as possible along each branch before backtracking.',
    category: 'Algorithm'
  },
  {
    term: 'Breadth-First Search (BFS)',
    definition: 'A graph traversal algorithm that explores vertices in layers, visiting all neighbors before moving deeper.',
    category: 'Algorithm'
  },
  {
    term: 'Pointer',
    definition: 'A variable that stores the memory address of another variable.',
    category: 'Programming Concept'
  },
  {
    term: 'Memory',
    definition: 'The hardware component that stores data during program execution. RAM is temporary; disk storage is permanent.',
    category: 'Programming Concept'
  },
]

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTerms = useMemo(() => {
    if (!searchQuery) return GLOSSARY_TERMS

    const query = searchQuery.toLowerCase()
    return GLOSSARY_TERMS.filter(
      item =>
        item.term.toLowerCase().includes(query) ||
        item.definition.toLowerCase().includes(query)
    )
  }, [searchQuery])

  const categories = Array.from(new Set(GLOSSARY_TERMS.map(t => t.category))).sort()
  const groupedTerms = categories.map(cat => ({
    category: cat,
    terms: filteredTerms.filter(t => t.category === cat)
  }))

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/" className="gap-2">
              <ChevronLeft className="w-4 h-4" />
              Home
            </Link>
          </Button>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">DSA Glossary</h1>
          <p className="text-muted-foreground mb-6">Quick reference for common Data Structures and Algorithms terms</p>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search terms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Terms */}
      <div className="container mx-auto px-4 py-12">
        {filteredTerms.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No terms found matching "{searchQuery}"</p>
          </div>
        ) : (
          <div className="space-y-12">
            {groupedTerms.map((group) => (
              group.terms.length > 0 && (
                <div key={group.category}>
                  <h2 className="text-2xl font-bold mb-6 text-accent">{group.category}</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {group.terms.map((term, idx) => (
                      <Card key={idx} className="border border-border hover:border-accent/50 transition-all">
                        <CardHeader>
                          <CardTitle className="text-lg">{term.term}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">{term.definition}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
