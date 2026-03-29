'use client'

import Link from 'next/link'
import { useBookmarks } from '@/components/BookmarksContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, Trash2, BookmarkIcon } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function BookmarksPage() {
  const { bookmarks, removeBookmark } = useBookmarks()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

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

          <h1 className="text-3xl md:text-4xl font-bold">Bookmarks</h1>
          <p className="text-muted-foreground mt-2">Your saved lessons, quizzes, and problems</p>
        </div>
      </div>

      {/* Bookmarks List */}
      <div className="container mx-auto px-4 py-12">
        {bookmarks.length === 0 ? (
          <div className="text-center py-12">
            <BookmarkIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground text-lg mb-4">No bookmarks yet</p>
            <Button asChild>
              <Link href="/learn">Start Learning</Link>
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {bookmarks.map((bookmark) => (
              <Card key={bookmark.id} className="border border-border hover:border-accent/50 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="inline-block px-2 py-1 bg-accent/10 rounded text-xs font-medium text-accent mb-2">
                        {bookmark.type}
                      </div>
                      <CardTitle className="text-lg">{bookmark.title}</CardTitle>
                      <CardDescription className="mt-2">
                        Saved {new Date(bookmark.savedAt).toLocaleDateString()}
                      </CardDescription>
                    </div>
                    <button
                      onClick={() => removeBookmark(bookmark.id)}
                      className="p-2 hover:bg-destructive/10 rounded text-muted-foreground hover:text-destructive transition-colors"
                      title="Remove bookmark"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={bookmark.path}>
                      Continue Learning
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
