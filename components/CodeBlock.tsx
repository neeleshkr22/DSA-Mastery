'use client'

import { Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'

interface CodeBlockProps {
  code: string
  language: string
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative bg-card border border-border rounded-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 bg-muted/20 border-b border-border">
        <span className="text-xs font-mono uppercase text-muted-foreground">{language}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="gap-2"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy
            </>
          )}
        </Button>
      </div>
      
      <pre className="p-6 overflow-x-auto">
        <code className="font-mono text-sm text-foreground leading-relaxed">
          {code}
        </code>
      </pre>
    </div>
  )
}
