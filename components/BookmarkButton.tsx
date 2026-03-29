'use client'

import { useBookmarks, Bookmark } from './BookmarksContext'
import { Button } from './ui/button'
import { BookmarkIcon } from 'lucide-react'
import { useState, useEffect } from 'react'

interface BookmarkButtonProps {
  id: string
  type: 'lesson' | 'problem' | 'quiz'
  title: string
  path: string
  levelId: number
  topicId: string
  variant?: 'default' | 'outline' | 'ghost'
  className?: string
}

export function BookmarkButton({
  id,
  type,
  title,
  path,
  levelId,
  topicId,
  variant = 'outline',
  className = '',
}: BookmarkButtonProps) {
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarks()
  const [isMounted, setIsMounted] = useState(false)
  const bookmarked = isBookmarked(id)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleClick = () => {
    if (bookmarked) {
      removeBookmark(id)
    } else {
      const bookmark: Bookmark = {
        id,
        type,
        title,
        path,
        levelId,
        topicId,
        savedAt: new Date().toISOString(),
      }
      addBookmark(bookmark)
    }
  }

  if (!isMounted) {
    return (
      <Button variant={variant} className={className} disabled>
        <BookmarkIcon className="w-4 h-4" />
      </Button>
    )
  }

  return (
    <Button
      variant={variant}
      onClick={handleClick}
      className={`gap-2 ${bookmarked ? 'text-accent' : ''} ${className}`}
      title={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      <BookmarkIcon className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
      {bookmarked ? 'Bookmarked' : 'Bookmark'}
    </Button>
  )
}
