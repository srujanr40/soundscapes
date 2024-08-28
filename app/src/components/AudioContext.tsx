// components/AudioContext.tsx
'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface AudioContextType {
  playingIndices: number[]
  handlePlayPauseClick: (index: number) => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function useAudio() {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const [playingIndices, setPlayingIndices] = useState<number[]>([])

  const handlePlayPauseClick = (index: number) => {
    setPlayingIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <AudioContext.Provider value={{ playingIndices, handlePlayPauseClick }}>
      {children}
    </AudioContext.Provider>
  )
}
