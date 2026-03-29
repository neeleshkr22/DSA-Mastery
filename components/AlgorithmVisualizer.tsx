'use client'

import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Play, Pause, RotateCcw, ChevronRight } from 'lucide-react'

interface VisualizerProps {
  algorithm: 'bubble-sort' | 'merge-sort' | 'binary-search' | 'bfs' | 'dfs'
  data?: number[]
}

export function AlgorithmVisualizer({ algorithm, data = [64, 34, 25, 12, 22, 11, 90] }: VisualizerProps) {
  const [array, setArray] = useState<{ value: number; color: string }[]>(
    data.map(val => ({ value: val, color: '#3b82f6' }))
  )
  const [isRunning, setIsRunning] = useState(false)
  const [comparisons, setComparisons] = useState(0)
  const [swaps, setSwaps] = useState(0)

  const bubbleSort = async () => {
    let arr = [...array]
    let comps = 0
    let swp = 0
    const n = arr.length

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        comps++

        // Highlight current comparison
        arr[j].color = '#ef4444'
        arr[j + 1].color = '#ef4444'
        setArray([...arr])
        setComparisons(comps)

        await new Promise(resolve => setTimeout(resolve, 100))

        if (arr[j].value > arr[j + 1].value) {
          swp++
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
          setSwaps(swp)
        }

        // Reset colors
        arr[j].color = '#3b82f6'
        arr[j + 1].color = '#3b82f6'
        setArray([...arr])
      }

      // Mark sorted elements
      arr[n - i - 1].color = '#22c55e'
      setArray([...arr])
    }

    // Mark all as sorted
    setArray(arr.map(item => ({ ...item, color: '#22c55e' })))
  }

  const handleStart = async () => {
    setIsRunning(true)
    setComparisons(0)
    setSwaps(0)

    if (algorithm === 'bubble-sort') {
      await bubbleSort()
    }

    setIsRunning(false)
  }

  const handleReset = () => {
    setArray(data.map(val => ({ value: val, color: '#3b82f6' })))
    setComparisons(0)
    setSwaps(0)
    setIsRunning(false)
  }

  const algorithmNames = {
    'bubble-sort': 'Bubble Sort',
    'merge-sort': 'Merge Sort',
    'binary-search': 'Binary Search',
    'bfs': 'Breadth-First Search',
    'dfs': 'Depth-First Search',
  }

  return (
    <Card className="border border-border">
      <CardHeader>
        <CardTitle>{algorithmNames[algorithm]}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Visualization */}
        <div className="flex items-end justify-center gap-1 p-6 bg-muted/30 rounded-lg min-h-48">
          {array.map((item, idx) => (
            <div
              key={idx}
              className="transition-all duration-100"
              style={{
                width: `${100 / array.length}%`,
                height: `${(item.value / Math.max(...array.map(a => a.value))) * 100}%`,
                backgroundColor: item.color,
                opacity: 0.8,
              }}
              title={item.value.toString()}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-card rounded-lg border border-border">
            <div className="text-sm text-muted-foreground">Comparisons</div>
            <div className="text-2xl font-bold text-accent">{comparisons}</div>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border">
            <div className="text-sm text-muted-foreground">Swaps</div>
            <div className="text-2xl font-bold text-accent">{swaps}</div>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border">
            <div className="text-sm text-muted-foreground">Elements</div>
            <div className="text-2xl font-bold text-accent">{array.length}</div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3">
          <Button
            onClick={handleStart}
            disabled={isRunning}
            className="gap-2 flex-1"
          >
            {isRunning ? (
              <>
                <Pause className="w-4 h-4" />
                Running...
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                Start
              </>
            )}
          </Button>
          <Button
            variant="outline"
            onClick={handleReset}
            disabled={isRunning}
            className="gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </Button>
        </div>

        {/* Legend */}
        <div className="flex gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: '#3b82f6' }} />
            Unsorted
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: '#ef4444' }} />
            Comparing
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: '#22c55e' }} />
            Sorted
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
