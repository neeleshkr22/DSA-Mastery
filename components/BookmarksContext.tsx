'use client'

import { createContext, useContext, useState, useEffect } from 'react'

export interface Bookmark {
  id: string
  type: 'lesson' | 'problem' | 'quiz'
  title: string
  path: string
  levelId: number
  topicId: string
  savedAt: string
}

interface BookmarksContextType {
  bookmarks: Bookmark[]
  addBookmark: (bookmark: Bookmark) => void
  removeBookmark: (id: string) => void
  isBookmarked: (id: string) => boolean
}

const BookmarksContext = createContext<BookmarksContextType | undefined>(undefined)

export function BookmarksProvider({ children }: { children: React.ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load bookmarks from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('dsa-bookmarks')
    if (stored) {
      setBookmarks(JSON.parse(stored))
    }
    setIsLoaded(true)
  }, [])

  // Save bookmarks to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('dsa-bookmarks', JSON.stringify(bookmarks))
    }
  }, [bookmarks, isLoaded])

  const addBookmark = (bookmark: Bookmark) => {
    if (!bookmarks.some(b => b.id === bookmark.id)) {
      setBookmarks([...bookmarks, bookmark])
    }
  }

  const removeBookmark = (id: string) => {
    setBookmarks(bookmarks.filter(b => b.id !== id))
  }

  const isBookmarked = (id: string) => {
    return bookmarks.some(b => b.id === id)
  }

  return (
    <BookmarksContext.Provider value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}>
      {children}
    </BookmarksContext.Provider>
  )
}

export function useBookmarks() {
  const context = useContext(BookmarksContext)
  if (context === undefined) {
    throw new Error('useBookmarks must be used within BookmarksProvider')
  }
  return context
}
