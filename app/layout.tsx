import type { Metadata, Viewport } from 'next'
import { Poppins, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { BookmarksProvider } from '@/components/BookmarksContext'
import './globals.css'

const poppins = Poppins({ weight: ['400', '500', '600', '700', '900'], subsets: ["latin"], variable: '--font-sans' });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono' });

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#2d3e5f' },
  ],
  userScalable: false,
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'DSA Master - Learn C++ & Data Structures from Zero to Advanced',
  description: 'Comprehensive DSA learning platform. Master C++ programming and data structures from basics (Level 0) to advanced competitive programming (Level 7) with code examples, interactive quizzes, practice problems, and visual algorithm animations.',
  keywords: ['DSA', 'Data Structures', 'Algorithms', 'C++', 'Programming', 'Learning', 'Tutorial'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased dark">
        <BookmarksProvider>
          {children}
        </BookmarksProvider>
        <Analytics />
      </body>
    </html>
  )
}
